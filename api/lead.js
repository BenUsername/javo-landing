// POST /api/lead/: stores one contact-form lead as a private JSON file in the omni-leads Blob store.
import { put } from "@vercel/blob";
import { randomUUID } from "node:crypto";

const LIMITS = { name: 200, email: 200, website: 300, message: 5000, page: 500 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, max) => String(value ?? "").trim().slice(0, max);
const html = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// E-mails the lead through Resend when RESEND_API_KEY and LEAD_NOTIFY_TO are set.
// The lead is already stored, so a failed notification never fails the request.
const notify = async lead => {
  const key = process.env.RESEND_API_KEY;
  const to = (process.env.LEAD_NOTIFY_TO || "").split(",").map(address => address.trim()).filter(Boolean);
  if (!key || !to.length) return "skipped";

  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Website", lead.website],
    ["Message", lead.message],
    ["Language", lead.lang],
    ["Page", lead.page],
    ["Country", lead.country],
    ["Date (UTC)", lead.submittedAt]
  ];
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.LEAD_NOTIFY_FROM || "Javo <onboarding@resend.dev>",
        to,
        reply_to: lead.email,
        subject: `New Javo lead: ${lead.name}`,
        text: rows.map(([label, value]) => `${label}: ${value || "-"}`).join("\n"),
        html: `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows.map(([label, value]) => `<tr><td style="color:#667;vertical-align:top">${label}</td><td style="white-space:pre-wrap">${html(value || "-")}</td></tr>`).join("")}</table>`
      }),
      signal: AbortSignal.timeout(5000)
    });
    if (!response.ok) throw new Error(`Resend HTTP ${response.status}: ${await response.text()}`);
    return "sent";
  } catch (error) {
    console.error("[lead] notification failed:", error);
    return "failed";
  }
};

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

  await notify(lead);
  return Response.json({ ok: true });
}
