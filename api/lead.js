// POST /api/lead: stores one contact-form lead as a private JSON file in the omni-leads Blob store.
import { put } from "@vercel/blob";
import { randomUUID } from "node:crypto";

const LIMITS = { name: 200, email: 200, website: 300, message: 5000, page: 500 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, max) => String(value ?? "").trim().slice(0, max);

export async function POST(request) {
  if (!(request.headers.get("content-type") || "").includes("application/json")) {
    return Response.json({ ok: false, error: "unsupported_media_type" }, { status: 415 });
  }

  const raw = await request.text();
  if (raw.length > 20000) return Response.json({ ok: false, error: "too_large" }, { status: 413 });

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Bots fill the hidden field: answer as if it worked and store nothing.
  if (body._honey) return Response.json({ ok: true });

  const lead = {
    submittedAt: new Date().toISOString(),
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    website: clean(body.website, LIMITS.website),
    message: clean(body.message, LIMITS.message),
    lang: body.lang === "fr" ? "fr" : "en",
    page: clean(body.page, LIMITS.page),
    country: request.headers.get("x-vercel-ip-country") || ""
  };

  if (!lead.name || !EMAIL.test(lead.email)) {
    return Response.json({ ok: false, error: "invalid_fields" }, { status: 422 });
  }

  const pathname = `leads/${lead.submittedAt.replace(/[:.]/g, "-")}-${randomUUID().slice(0, 8)}.json`;
  try {
    await put(pathname, JSON.stringify(lead), { access: "private", contentType: "application/json", addRandomSuffix: false });
  } catch (error) {
    console.error("[lead] storage failed:", error);
    return Response.json({ ok: false, error: "storage_failed" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
