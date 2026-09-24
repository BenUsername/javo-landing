// GET /api/leads/?key=LEADS_KEY: downloads every stored lead as a CSV file (add &format=json for JSON).
import { list, get } from "@vercel/blob";
import { timingSafeEqual } from "node:crypto";

const COLUMNS = [
  ["submittedAt", "Date (UTC)"],
  ["name", "Name"],
  ["email", "Email"],
  ["website", "Website"],
  ["message", "Message"],
  ["lang", "Language"],
  ["page", "Page"],
  ["country", "Country"]
];

const authorised = key => {
  const expected = process.env.LEADS_KEY || "";
  const given = Buffer.from(String(key || ""));
  const wanted = Buffer.from(expected);
  return expected.length > 0 && given.length === wanted.length && timingSafeEqual(given, wanted);
};

// Quote every cell, and neutralise values a spreadsheet would run as a formula.
const cell = value => {
  let text = String(value ?? "");
  if (/^[=+\-@\t\r]/.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
};

const readAll = async () => {
  const blobs = [];
  let cursor;
  do {
    const page = await list({ prefix: "leads/", cursor, limit: 1000 });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);

  const leads = await Promise.all(blobs.map(async blob => {
    const result = await get(blob.url, { access: "private", useCache: false });
    if (!result || result.statusCode !== 200) return null;
    try {
      return JSON.parse(await new Response(result.stream).text());
    } catch {
      return null;
    }
  }));
  return leads.filter(Boolean).sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
};

export async function GET(request) {
  const url = new URL(request.url);
  const headers = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" };
  if (!authorised(url.searchParams.get("key"))) {
    return new Response("Not found", { status: 404, headers });
  }

  const leads = await readAll();
  if (url.searchParams.get("format") === "json") {
    return Response.json(leads, { headers });
  }

  const csv = [COLUMNS.map(([, label]) => cell(label)).join(","), ...leads.map(lead => COLUMNS.map(([key]) => cell(lead[key])).join(","))].join("\r\n");
  const date = new Date().toISOString().slice(0, 10);
  return new Response(`﻿${csv}\r\n`, {
    headers: {
      ...headers,
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="omni-leads-${date}.csv"`
    }
  });
}
