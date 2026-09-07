"use client";

import Link from "next/link";
import { useState } from "react";
import "./support.css";
import { Icon } from "../Logo";
import { Accordion } from "../Accordion";
import { APP_URL, SUPPORT_EMAIL } from "../../lib/site";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const QUICK = [
  { q: "My card statement says Lemon Squeezy, not ClutterAI", a: <p>That is correct. Lemon Squeezy is our merchant of record — they process the payment, collect tax and issue the receipt. If you need the receipt again, it is in the email they sent you.</p> },
  { q: "How do I cancel, or change my plan?", a: <p>In the app: Settings → Plan. Upgrades apply now and are prorated; downgrades and cancellations take effect at the end of the period you already paid for. You can also use the Lemon Squeezy customer portal linked from your receipt.</p> },
  { q: "How do refunds work?", a: <p>30-day money-back guarantee on your first purchase, provided the account has made fewer than 20 queries. Email us with your account address and the Lemon Squeezy order number. Full details in the <Link href="/refund">Refund Policy</Link>.</p> },
  { q: "How do I disconnect an integration?", a: <p>Integrations → the app → Disconnect. Access is revoked immediately, syncing stops, and the indexed content is removed within 30 days. You can also revoke access from the provider’s side (for example Google’s account permissions page).</p> },
  { q: "How do I delete my account and data?", a: <p>Settings → Account → Delete, or email us with “Data Request” in the subject. Most data goes within 30 days; backups purge within 90. You can ask for an export first.</p> },
  { q: "Something is not syncing", a: <p>Check Integrations for the connection’s status first — a token that expired or a revoked permission shows there. If it looks healthy and still doesn’t sync, send us the integration name and roughly when it stopped; we look at the sync logs ourselves.</p> },
  { q: "I’m on a team and hit a usage limit", a: <p>Team members never see billing. The admin console shows the team’s usage; your team owner can add seats or move you to a Premium seat. The app has an “Email your admin” shortcut on the limit banner.</p> },
];

export function SupportPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", company: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 503) { setStatus("unconfigured"); return; }
      if (!res.ok) { setStatus("error"); setError(data?.error ?? "Something went wrong."); return; }
      setSentTo(form.email);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", company: "" });
    } catch {
      setStatus("error");
      setError("We couldn't reach the server.");
    }
  };

  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(form.subject || "Support request")}&body=${encodeURIComponent(form.message)}`;

  return (
    <div className="sp">
      <section className="sp-hero">
        <div className="wrap sp-grid">
          <div className="sp-left">
            <p className="kicker">Support</p>
            <h1 className="h-serif h-xl">Let&rsquo;s talk.</h1>
            <p className="lede">A small team answers this, usually within a day. Most questions are covered below; the rest reach us through the form or by email.</p>

            <div className="sp-cards">
              <a href={`mailto:${SUPPORT_EMAIL}`} className="card card-hover sp-card">
                <span className="sp-card-icon"><Icon.Mail /></span>
                <span><span className="sp-card-l">Email</span><span className="sp-card-v">{SUPPORT_EMAIL}</span></span>
              </a>
              <a href={APP_URL} className="card card-hover sp-card">
                <span className="sp-card-icon"><Icon.Arrow /></span>
                <span><span className="sp-card-l">Already a user?</span><span className="sp-card-v">Settings in the app handle plans, seats and data</span></span>
              </a>
              <span className="pill"><Icon.Clock /> Typical reply within 24 hours, Monday to Friday</span>
            </div>

            <div className="sp-quick">
              <h2 className="h-display h-md">Quick answers</h2>
              <Accordion items={QUICK} />
            </div>
          </div>

          <div className="sp-right">
            <form className="card sp-form" onSubmit={onSubmit} noValidate>
              <h2 className="h-display h-sm">Send a message</h2>
              <p className="small">Tell us what happened and which account it concerns. We read every one.</p>

              <div className="sp-row">
                <label className="sp-field">
                  <span>Name</span>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" autoComplete="name" />
                </label>
                <label className="sp-field">
                  <span>Email</span>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" autoComplete="email" />
                </label>
              </div>
              <label className="sp-field">
                <span>Topic</span>
                <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                  <option value="">Choose a topic</option>
                  <option value="Billing">Billing or refunds</option>
                  <option value="Integrations">An integration isn&rsquo;t syncing</option>
                  <option value="Bug">Something is broken</option>
                  <option value="Teams">Teams and seats</option>
                  <option value="Data">Data export or deletion</option>
                  <option value="Feedback">Feedback or a feature idea</option>
                  <option value="Other">Something else</option>
                </select>
              </label>
              <label className="sp-field">
                <span>Message</span>
                <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What happened, and what did you expect?" />
              </label>
              {/* Honeypot: real people never see this field. */}
              <label className="sp-hp" aria-hidden="true">
                <span>Company</span>
                <input type="text" tabIndex={-1} autoComplete="off" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </label>

              <button type="submit" className={`btn ${status === "sent" ? "btn-ghost" : "btn-primary"}`} disabled={status === "sending" || status === "sent"}>
                {status === "sending" ? "Sending…" : status === "sent" ? "Sent — thank you" : <>Send message <Icon.Arrow /></>}
              </button>

              {status === "sent" && <p className="sp-ok" role="status">Got it. We&rsquo;ll reply to {sentTo || "your email"} — usually within a day.</p>}
              {status === "error" && <p className="sp-err" role="alert">{error} You can also <a href={mailto}>email us directly</a>.</p>}
              {status === "unconfigured" && (
                <p className="sp-err" role="alert">
                  The form isn&rsquo;t connected on this deployment yet. Please <a href={mailto}>email us directly</a> — your message is pre-filled.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
