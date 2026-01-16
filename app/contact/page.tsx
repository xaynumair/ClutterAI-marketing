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
      {/* Animated Background */}
      <div className="bg-visuals" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid-overlay" />
      </div>

      <main className="container" role="main">
        {/* Main Content */}
        <section className="content-wrapper" aria-labelledby="contact-heading">
          <div className="hero-section">
            <div className="badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get in Touch
            </div>
            
            <h1 id="contact-heading">
              Let's <span className="gradient-text">Connect</span>
            </h1>

            <p className="subtitle">
              Have questions or feedback? We're here to help and would love to hear from you.
            </p>

            {/* Support Card - Only Email */}
            <div className="support-card">
              <div className="card-glow" aria-hidden="true"></div>
              <div className="card-content">
                <div className="icon-wrapper">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="card-body">
                  <h3>Email Support</h3>
                  <p>Get help with anything ClutterAI related</p>
                  <a href="mailto:support@clutter-ai.com" className="email-link">
                    support@clutter-ai.com
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="info-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Typical response within 24 hours</span>
            </div>
          </div>

          {/* Contact Form - Modern Floating Card */}
          <aside className="form-section" aria-labelledby="form-heading">
            <div className="form-card">
              <div className="form-glow" aria-hidden="true"></div>
              
              <div className="form-header">
                <h2 id="form-heading">Send a Message</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      required
                      aria-required="true"
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
                    aria-required="true"
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
                    rows={5}
                    required
                    aria-required="true"
                  />
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${submitted ? "success" : ""}`}
                  disabled={submitted}
                >
                  <span className="btn-content">
                    {submitted ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Message Sent
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </span>
                </button>

                {submitted && (
                  <div className="success-banner" role="status" aria-live="polite">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Thank you! We'll respond to your message soon.</span>
                  </div>
                )}
              </form>
            </div>
          </aside>
        </section>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .contact-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: #fff;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif;
          overflow-x: hidden;
        }

        /* Animated Background */
        .bg-visuals {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.4;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          top: -10%;
          left: -5%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%);
          animation: float 20s ease-in-out infinite;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          bottom: -10%;
          right: -5%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.25), transparent 70%);
          animation: float 25s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
          background-size: 80px 80px;
        }

        /* Layout */
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 24px 60px;
          position: relative;
          z-index: 1;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1fr 540px;
          gap: 60px;
          align-items: start;
        }

        /* Hero Section */
        .hero-section {
          padding-top: 20px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(124, 58, 237, 0.05));
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: #c4b5fd;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 50%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 500px;
        }

        /* Support Card */
        .support-card {
          position: relative;
          margin-bottom: 24px;
        }

        .card-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 60%);
          filter: blur(40px);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .support-card:hover .card-glow {
          opacity: 1;
        }

        .card-content {
          position: relative;
          display: flex;
          gap: 20px;
          padding: 28px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .support-card:hover .card-content {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.1));
          border: 1px solid rgba(139, 92, 246, 0.3);
          flex-shrink: 0;
          color: #c4b5fd;
        }

        .card-body h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 6px;
          color: #fff;
        }

        .card-body p {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 12px;
        }

        .email-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #a78bfa;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .email-link:hover {
          color: #c4b5fd;
          gap: 12px;
        }

        .info-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 100px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* Form Section */
        .form-section {
          position: sticky;
          top: 100px;
        }

        .form-card {
          position: relative;
          padding: 36px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .form-glow {
          position: absolute;
          inset: -60px;
          background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1), transparent 50%);
          filter: blur(60px);
          opacity: 0.6;
          pointer-events: none;
        }

        .form-header {
          margin-bottom: 28px;
        }

        .form-header h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .form-subtitle {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* Form Inputs */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 600;
        }

        input, select, textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }

        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23ffffff' stroke-opacity='0.5' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 44px;
          cursor: pointer;
        }

        textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        /* Submit Button */
        .submit-btn {
          width: 100%;
          padding: 16px 24px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .submit-btn:hover::before {
          transform: translateX(100%);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(139, 92, 246, 0.5);
        }

        .submit-btn:disabled {
          cursor: not-allowed;
          opacity: 0.8;
        }

        .submit-btn.success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
        }

        .btn-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          z-index: 1;
        }

        /* Success Banner */
        .success-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 12px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #6ee7b7;
          font-size: 0.95rem;
          font-weight: 600;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .form-section {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 60px 20px 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .form-card {
            padding: 24px;
          }

          h1 {
            font-size: 2.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}