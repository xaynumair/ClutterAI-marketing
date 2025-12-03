"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      <div className="bg-visuals" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <svg className="bg-lines" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="lg" x1="0" x2="1">
              <stop offset="0" stopColor="#7c3aed" stopOpacity="0.12" />
              <stop offset="1" stopColor="#5b21b6" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <path d="M0 120 C200 20, 400 220, 600 120 C800 20, 1000 220, 1200 120 L1200 200 L0 200 Z" fill="url(#lg)" />
        </svg>
      </div>

      <main className="container" role="main">
        <header className="top-row">
          <Link href="/" className="back-link" aria-label="Back to home">
            ← Back to Home
          </Link>

          <div className="page-badge" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 16v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 8h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 16h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Contact</span>
          </div>
        </header>

        <section className="content" aria-labelledby="contact-heading">
          <div className="info-section">
            <h1 id="contact-heading">
              Get in <span className="gradient">Touch</span>
            </h1>

            <p className="subtitle">
              Have a question, feedback, or a partnership idea? Tell us about it — we read every message and respond quickly.
            </p>

            <div className="contact-grid" role="list">
              <article className="method-card" role="listitem">
                <div className="method-icon">📧</div>
                <div className="method-body">
                  <h3>Email</h3>
                  <a href="mailto:hello@clutter-ai.com">hello@clutter-ai.com</a>
                </div>
              </article>

              <article className="method-card" role="listitem">
                <div className="method-icon">💬</div>
                <div className="method-body">
                  <h3>Support</h3>
                  <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
                </div>
              </article>

              <article className="method-card" role="listitem">
                <div className="method-icon">🏢</div>
                <div className="method-body">
                  <h3>Sales</h3>
                  <a href="mailto:sales@clutter-ai.com">sales@clutter-ai.com</a>
                </div>
              </article>

              <article className="method-card" role="listitem">
                <div className="method-icon">⚖️</div>
                <div className="method-body">
                  <h3>Legal</h3>
                  <a href="mailto:legal@clutter-ai.com">legal@clutter-ai.com</a>
                </div>
              </article>
            </div>

            <div className="response-time" role="note">
              <strong>Response Time:</strong> We typically reply within 24 hours on business days.
            </div>
          </div>

          <aside className="form-section" aria-labelledby="form-heading">
            <div className="form-card" role="form" aria-describedby="form-desc">
              <div className="form-header">
                <h2 id="form-heading">Send us a message</h2>
                <p id="form-desc" className="form-desc">
                  Short, clear messages get the fastest replies. Attachments and links are welcome in the message body.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="row">
                  <label className="field">
                    <span className="label-text">Name</span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      aria-required="true"
                    />
                  </label>

                  <label className="field">
                    <span className="label-text">Email</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      required
                      aria-required="true"
                    />
                  </label>
                </div>

                <label className="field">
                  <span className="label-text">Subject</span>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    aria-required="true"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </label>

                <label className="field">
                  <span className="label-text">Message</span>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    required
                    aria-required="true"
                  />
                </label>

                <div className="form-actions">
                  <button type="submit" className={`submit-button ${submitted ? "sent" : ""}`}>
                    <span className="btn-inner">
                      {submitted ? "Message Sent ✓" : "Send Message"}
                    </span>
                  </button>
                </div>

                {submitted && (
                  <div className="success-message" role="status" aria-live="polite">
                    Thanks — we received your message and will reply shortly.
                  </div>
                )}
              </form>
            </div>
          </aside>
        </section>
      </main>

      <footer className="footer" aria-hidden="true">
        <div className="footer-inner">
          <small>© {new Date().getFullYear()} ClutterAI</small>
          <nav className="footer-links" aria-label="Footer links">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --bg: #07060a;
          --muted: #9aa0b4;
          --glass: rgba(255,255,255,0.04);
          --accent-1: #7c3aed;
          --accent-2: #5b21b6;
        }

        * { box-sizing: border-box; }
        body, html, #__next { height: 100%; }

        .contact-page {
          min-height: 100vh;
          background: radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.06), transparent 12%),
                      linear-gradient(180deg, var(--bg) 0%, #05040a 100%);
          color: #eef0f6;
          position: relative;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
          overflow-x: hidden;
        }

        /* Background visuals */
        .bg-visuals { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.9;
          transform: translateZ(0);
        }
        .orb-a {
          width: 520px;
          height: 520px;
          left: -6%;
          top: -8%;
          background: radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0) 60%);
          animation: floatSlow 18s ease-in-out infinite;
        }
        .orb-b {
          width: 420px;
          height: 420px;
          right: -8%;
          bottom: -6%;
          background: radial-gradient(circle, rgba(91,33,182,0.18) 0%, rgba(91,33,182,0) 60%);
          animation: floatSlow 22s ease-in-out infinite reverse;
        }
        .bg-lines { position: absolute; left: 0; right: 0; top: 12%; opacity: 0.9; transform: translateY(-6%); pointer-events: none; }

        @keyframes floatSlow {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-18px) translateX(12px); }
          100% { transform: translateY(0) translateX(0); }
        }

        /* Layout */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 56px 24px;
          position: relative;
          z-index: 2;
        }

        .top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }

        .back-link {
          color: var(--muted);
          text-decoration: none;
          font-weight: 600;
          padding: 8px 12px;
          border-radius: 10px;
          transition: color 180ms ease, background 180ms ease, transform 160ms ease;
        }
        .back-link:hover { color: #fff; background: rgba(255,255,255,0.02); transform: translateY(-2px); }

        .page-badge {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          color: #e9ecf8;
          font-weight: 700;
          background: linear-gradient(90deg, rgba(124,58,237,0.08), rgba(91,33,182,0.04));
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.03);
        }
        .page-badge svg { opacity: 0.95; }

        .content {
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 40px;
          align-items: start;
        }

        /* Info column */
        .info-section { padding: 8px 4px; }
        h1 {
          margin: 0 0 12px 0;
          font-size: clamp(2rem, 3.6vw, 3.2rem);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -0.02em;
        }
        .gradient {
          background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .subtitle {
          color: var(--muted);
          margin: 0 0 22px 0;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 16px;
          margin-bottom: 20px;
        }

        .method-card {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 14px;
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.03);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .method-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(2,6,23,0.45);
          border-color: rgba(124,58,237,0.12);
        }
        .method-icon {
          width: 46px;
          height: 46px;
          border-radius: 10px;
          display: inline-grid;
          place-items: center;
          font-size: 1.25rem;
          background: linear-gradient(180deg, rgba(124,58,237,0.12), rgba(91,33,182,0.06));
          color: #fff;
          flex-shrink: 0;
        }
        .method-body h3 {
          margin: 0 0 6px 0;
          font-size: 1rem;
          color: #f3f4f8;
        }
        .method-body a {
          color: #b78bff;
          text-decoration: none;
          font-weight: 600;
        }
        .method-body a:hover { color: #d6b8ff; }

        .response-time {
          margin-top: 8px;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(90deg, rgba(124,58,237,0.06), rgba(91,33,182,0.03));
          border: 1px solid rgba(124,58,237,0.06);
          color: #e6e9fb;
          font-weight: 600;
        }

        /* Form column */
        .form-section { display: flex; justify-content: flex-end; }
        .form-card {
          width: 100%;
          max-width: 480px;
          border-radius: 18px;
          padding: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.04);
          box-shadow: 0 18px 40px rgba(2,6,23,0.45);
          backdrop-filter: blur(6px) saturate(120%);
        }
        .form-header h2 { margin: 0 0 6px 0; font-size: 1.25rem; }
        .form-desc { margin: 0 0 14px 0; color: var(--muted); font-size: 0.95rem; }

        .contact-form { display: flex; flex-direction: column; gap: 12px; }
        .row { display: flex; gap: 12px; }
        .field { display: flex; flex-direction: column; gap: 8px; width: 100%; }
        .label-text { color: var(--muted); font-weight: 600; font-size: 0.9rem; }

        input, select, textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          color: #eef0f6;
          font-size: 0.98rem;
          transition: box-shadow 160ms ease, border-color 160ms ease, transform 120ms ease;
        }
        input::placeholder, textarea::placeholder { color: rgba(230,230,250,0.28); }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: rgba(183,139,255,0.9);
          box-shadow: 0 8px 30px rgba(124,58,237,0.12);
          transform: translateY(-2px);
        }

        select { appearance: none; background-image: linear-gradient(45deg, transparent 50%, rgba(255,255,255,0.12) 50%), linear-gradient(135deg, rgba(255,255,255,0.12) 50%, transparent 50%); background-position: calc(100% - 18px) calc(1em + 2px), calc(100% - 13px) calc(1em + 2px); background-size: 6px 6px, 6px 6px; background-repeat: no-repeat; padding-right: 36px; }

        textarea { min-height: 140px; resize: vertical; }

        .form-actions { margin-top: 6px; display: flex; gap: 12px; align-items: center; }

        .submit-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-weight: 800;
          color: white;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
          box-shadow: 0 12px 36px rgba(91,33,182,0.22);
          transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
          width: 100%;
        }
        .submit-button:hover { transform: translateY(-3px); box-shadow: 0 20px 48px rgba(91,33,182,0.28); }
        .submit-button.sent { background: linear-gradient(90deg, #10b981, #059669); box-shadow: 0 12px 36px rgba(6,95,70,0.18); }

        .success-message {
          margin-top: 12px;
          padding: 12px;
          border-radius: 10px;
          background: linear-gradient(90deg, rgba(16,185,129,0.08), rgba(6,95,70,0.04));
          border: 1px solid rgba(16,185,129,0.12);
          color: #86efac;
          font-weight: 700;
          text-align: center;
          animation: popIn 260ms ease;
        }
        @keyframes popIn {
          from { transform: translateY(-6px) scale(0.98); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        /* Footer */
        .footer {
          margin-top: 48px;
          padding: 28px 24px;
          border-top: 1px solid rgba(255,255,255,0.03);
          background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent);
          z-index: 2;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--muted);
          gap: 12px;
        }
        .footer-links a {
          color: var(--muted);
          text-decoration: none;
          margin-left: 12px;
          font-weight: 600;
        }
        .footer-links a:hover { color: #fff; }

        /* Responsive */
        @media (max-width: 1024px) {
          .content { grid-template-columns: 1fr 420px; gap: 28px; }
        }
        @media (max-width: 880px) {
          .content { grid-template-columns: 1fr; }
          .form-section { order: 2; }
          .info-section { order: 1; }
          .form-card { max-width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .orb-a, .orb-b, .bg-lines, .method-card, .submit-button { animation: none !important; transition: none !important; }
        }
      `}</style>
    </div>
  );
}