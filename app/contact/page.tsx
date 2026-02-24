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
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="root">
      <div className="container">
        <Link href="/" className="back-link">← Back</Link>

        <div className="content-wrapper">
          {/* Left */}
          <div className="hero-section">
            <p className="eyebrow">Contact</p>
            <h1 className="headline">Let's talk.</h1>
            <p className="subtitle">
              Have questions or feedback? We'd love to hear from you.
            </p>

            <div className="support-card">
              <div className="card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="card-label">Email support</p>
                <a href="mailto:support@clutter-ai.com" className="email-link">
                  support@clutter-ai.com →
                </a>
              </div>
            </div>

            <div className="info-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Typical response within 24 hours
            </div>
          </div>

          {/* Right — form */}
          <div className="form-section">
            <div className="form-card">
              <h2 className="form-title">Send a message</h2>
              <p className="form-subtitle">Fill out the form and we'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="form" noValidate>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name" type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name" required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email" type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com" required
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  >
                    <option value="">Choose a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Product Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={5} required
                  />
                </div>

                <button type="submit" className={`submit-btn ${submitted ? "success" : ""}`} disabled={submitted}>
                  <span className="btn-content">
                    {submitted ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Message sent
                      </>
                    ) : (
                      "Send message →"
                    )}
                  </span>
                </button>

                {submitted && (
                  <div className="success-banner" role="status">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Thank you — we'll be in touch soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Figtree:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .root {
          min-height: 100vh;
          background: #0a0a0a;
          color: #f0ede8;
          font-family: 'Figtree', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 40px 120px;
        }

        .back-link {
          display: inline-block;
          font-size: 0.85rem;
          color: rgba(240,237,232,0.35);
          text-decoration: none;
          margin-bottom: 60px;
          transition: color 0.2s;
        }
        .back-link:hover { color: rgba(240,237,232,0.7); }

        /* ── Layout ── */
        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* ── Left ── */
        .hero-section { padding-top: 8px; }

        .eyebrow {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.28);
          margin-bottom: 20px;
        }
        .headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 5vw, 5rem);
          letter-spacing: -0.05em;
          line-height: 0.97;
          color: #f0ede8;
          margin-bottom: 20px;
        }
        .subtitle {
          font-size: 1rem;
          color: rgba(240,237,232,0.45);
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 48px;
          max-width: 380px;
        }

        .support-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          margin-bottom: 16px;
          transition: border-color 0.2s, background 0.2s;
        }
        .support-card:hover {
          border-color: rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
        }
        .card-icon {
          width: 40px; height: 40px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          color: rgba(240,237,232,0.5);
        }
        .card-label {
          font-size: 0.78rem;
          color: rgba(240,237,232,0.35);
          font-weight: 300;
          margin-bottom: 4px;
        }
        .email-link {
          font-size: 0.95rem;
          font-weight: 500;
          color: #f0ede8;
          text-decoration: none;
          transition: color 0.2s;
        }
        .email-link:hover { color: rgba(240,237,232,0.7); }

        .info-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 16px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px;
          font-size: 0.8rem;
          color: rgba(240,237,232,0.35);
          font-weight: 300;
        }

        /* ── Form ── */
        .form-section { position: sticky; top: 80px; }

        .form-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          background: rgba(255,255,255,0.02);
          padding: 44px 40px;
        }

        .form-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -0.03em;
          color: #f0ede8;
          margin-bottom: 8px;
        }
        .form-subtitle {
          font-size: 0.85rem;
          color: rgba(240,237,232,0.38);
          font-weight: 300;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .form { display: flex; flex-direction: column; gap: 20px; }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .input-group { display: flex; flex-direction: column; gap: 8px; }

        label {
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(240,237,232,0.45);
          letter-spacing: 0.02em;
        }

        input, select, textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 6px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: #f0ede8;
          font-size: 0.9rem;
          font-family: 'Figtree', sans-serif;
          font-weight: 300;
          transition: border-color 0.2s, background 0.2s;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(240,237,232,0.2);
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.2);
        }
        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23f0ede8' stroke-opacity='0.3' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 40px;
          cursor: pointer;
        }
        select option { background: #111; }
        textarea { resize: vertical; min-height: 120px; }

        .submit-btn {
          width: 100%;
          padding: 13px 20px;
          border-radius: 6px;
          border: none;
          background: #f0ede8;
          color: #0a0a0a;
          font-family: 'Figtree', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          background: #fff;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(240,237,232,0.1);
        }
        .submit-btn:disabled { cursor: not-allowed; opacity: 0.7; }
        .submit-btn.success { background: rgba(34,197,94,0.15); color: #4ade80; border: 1px solid rgba(34,197,94,0.2); }
        .btn-content { display: flex; align-items: center; justify-content: center; gap: 8px; }

        .success-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 16px;
          border-radius: 6px;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.18);
          color: #4ade80;
          font-size: 0.85rem;
          font-weight: 400;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: none; }
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .content-wrapper { grid-template-columns: 1fr; gap: 48px; }
          .form-section { position: static; }
        }
        @media (max-width: 640px) {
          .container { padding: 32px 20px 80px; }
          .headline { font-size: 2.8rem; }
          .form-card { padding: 28px 24px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}