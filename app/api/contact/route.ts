import { NextResponse } from "next/server";
import { SUPPORT_EMAIL } from "../../lib/site";

// The support form. Sends through Resend's REST API (the app already uses
// Resend) — no SDK needed. Requires RESEND_API_KEY; optional CONTACT_FROM
// (a verified sender on the Resend account) and CONTACT_TO.
//
// Without a key the route answers 503 and the page falls back to a mailto
// link, so a message is never silently dropped.

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (list.length >= MAX_PER_WINDOW) return true;
  list.push(now);
  hits.set(ip, list);
  return false;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const subject = String(body.subject ?? "").trim().slice(0, 120);
  const message = String(body.message ?? "").trim().slice(0, 5000);
  const honeypot = String(body.company ?? "").trim();

  if (honeypot) return NextResponse.json({ ok: true }); // bots think it worked
  if (!name || !email || !subject || !message) return NextResponse.json({ error: "Please fill in every field." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many messages in a short time. Please try again later." }, { status: 429 });

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "Contact form not configured." }, { status: 503 });

  const from = process.env.CONTACT_FROM || "ClutterAI Support <support@clutter-ai.com>";
  const to = process.env.CONTACT_TO || SUPPORT_EMAIL;

  const html = `
    <p><strong>From:</strong> ${esc(name)} &lt;${esc(email)}&gt;</p>
    <p><strong>Topic:</strong> ${esc(subject)}</p>
    <p><strong>IP:</strong> ${esc(ip)}</p>
    <hr />
    <p style="white-space:pre-wrap">${esc(message)}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Support · ${subject}] ${name}`,
      html,
      text: `From: ${name} <${email}>\nTopic: ${subject}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error", res.status, detail);
    return NextResponse.json({ error: "We couldn't send that just now." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
