"use client";

import React from "react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="background-orbs">
        <div className="orb orb-1" />
      </div>

      <div className="grid-background" />

      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        <article>
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: December 3, 2025</p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using ClutterAI ("Service"), you agree to be bound by these Terms of
              Service ("Terms"). If you do not agree to these Terms, do not use the Service.
            </p>
            <p>
              ClutterAI is operated by ClutterAI ("we," "us," or "our"). These Terms constitute a
              legally binding agreement between you and ClutterAI. Business address: [Street 1,
              Sector D, Block DD, Bahria Town, Lahore, Pakistan]. Email: xayn@clutter‑ai.com. For
              tax or verification inquiries, contact [Zubia Adnan].
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>ClutterAI is an AI-powered knowledge search platform that allows you to:</p>
            <ul>
              <li>Connect third-party services (Google Drive, Gmail, Slack, Calendar)</li>
              <li>Search your connected content using natural language</li>
              <li>Receive AI-generated answers based on your data</li>
              <li>Organize and access your information efficiently</li>
            </ul>
          </section>

          <section>
            <h2>3. Account Registration</h2>
            <p>
              To use ClutterAI, you must create an account by providing accurate and complete
              information. You are responsible for:
            </p>
            <ul>
              <li>Maintaining the confidentiality of your password</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
            <p>
              You must be at least 13 years old to use the Service. If you are under 18, you must
              have parental consent. Users must meet the age of consent applicable to their
              jurisdiction (e.g., 16 in some EU countries). If under that age, parental consent is
              required and we will delete accounts lacking valid consent.
            </p>
          </section>

          <section>
            <h2>4. Subscription Plans and Payments</h2>

            <h3>4.1 Plans</h3>
            <p>ClutterAI offers multiple subscription plans:</p>
            <ul>
              <li>
                <strong>Free Tier:</strong> 3 questions every 12 hours
              </li>
              <li>
                <strong>Student Plan:</strong> $9/month (requires .edu email)
              </li>
              <li>
                <strong>Individual Plan:</strong> $19/month
              </li>
              <li>
                <strong>Team Plan:</strong> $15/member/month (minimum 3 members)
              </li>
            </ul>

            <h3>4.2 Payment Processing</h3>
            <p>
              <strong>
                All payments for subscriptions are processed by Paddle, Inc. ("Paddle").
              </strong>{" "}
              Paddle acts as our payment processor and is the merchant of record for purchases
              made through the Paddle checkout. Paddle issues receipts, handles payment
              disputes and chargebacks, and may collect applicable taxes. By purchasing, you agree to
              Paddle's terms:{" "}
              <a
                href="https://www.paddle.com/legal/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                https://www.paddle.com/legal/terms
              </a>
            </p>

            <h3>4.3 Billing</h3>
            <ul>
              <li>Subscriptions are billed monthly or annually based on your selection</li>
              <li>Billing occurs automatically on your renewal date</li>
              <li>You authorize Paddle to charge your payment method</li>
              <li>Prices are subject to change with 30 days' notice</li>
              <li>Subscriptions automatically renew unless cancelled prior to the renewal date.</li>
              <li>
                We will notify you at least 7 days before an annual price increase affecting your
                next renewal.
              </li>
              <li>Price changes apply to renewals after notice; existing paid periods are not retroactively charged.</li>
            </ul>

            <h3>4.4 Cancellation</h3>
            <p>You may cancel your subscription at any time from your account settings. Upon cancellation:</p>
            <ul>
              <li>You retain access until the end of your current billing period</li>
              <li>
                Partial‑period refunds for mid‑period cancellations are not provided except as
                required by law or at our discretion.
              </li>
              <li>Your account reverts to the free tier</li>
            </ul>

            <h3>4.5 Refunds</h3>
            <p>
              We offer a 30‑day money‑back guarantee for new subscriptions purchased directly through
              our Paddle checkout. To request a refund, email{" "}
              <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> within 30 days of
              purchase; refunds will be processed via Paddle within 7–14 business days after
              approval. Partial‑period refunds for mid‑period cancellations are not provided except
              as required by law or at our discretion. Purchases made through third parties are
              subject to the third party's refund policy. See our{" "}
              <a href="/refund" className="inline-link">Refund Policy</a> for details.
            </p>
          </section>

          <section>
            <h2>5. Acceptable Use</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload malicious code, viruses, or harmful content</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
              <li>Use the Service to harass, abuse, or harm others</li>
              <li>Share your account credentials with others</li>
              <li>Scrape or extract data using automated tools</li>
              <li>Use the Service for competitive analysis</li>
            </ul>
          </section>

          <section>
            <h2>6. Content and Data</h2>

            <h3>6.1 Your Content</h3>
            <p>
              We use third‑party service providers to operate the Service (e.g., Paddle for
              payments; Google for integrations; OpenAI for AI features). Paddle acts as the
              merchant of record for purchases made through the Paddle checkout and may issue
              receipts, handle disputes, and collect taxes; see Paddle's legal pages for details.
              A current list of processors is available in our Privacy Policy. You retain all
              ownership rights to content you upload or connect to ClutterAI. By using the Service,
              you grant us a limited license to:
            </p>
            <ul>
              <li>Store and process your content</li>
              <li>Generate search results and AI responses</li>
              <li>Provide the Service to you</li>
            </ul>
            <p>
              <strong>
                We do NOT use your content to train AI models or share it with third parties (except
                our service providers necessary to operate the Service).
              </strong>
            </p>

            <h3>6.2 Connected Services</h3>
            <p>
              When you connect third-party services (Google, Slack, etc.), you authorize us to access
              the content you've granted permission to. You can revoke this access at any time.
            </p>

            <h3>6.3 AI-Generated Content</h3>
            <p>ClutterAI uses AI to generate answers based on your data. While we strive for accuracy:</p>
            <ul>
              <li>AI responses may contain errors or inaccuracies</li>
              <li>You are responsible for verifying information before relying on it</li>
              <li>We are not liable for decisions made based on AI responses</li>
            </ul>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              The Service, including its software, design, logos, and trademarks, is owned by
              ClutterAI and protected by copyright and intellectual property laws. You may not copy,
              modify, or distribute any part of the Service without our written permission.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Services</h2>
            <p>
              ClutterAI integrates with third-party services (Google, Slack, OpenAI, etc.). Your use
              of these services is subject to their respective terms and privacy policies. We are not
              responsible for third-party services or their content. When you connect third‑party
              services we store OAuth tokens securely and use them only to provide the Service.
              Revoking access may limit functionality.
            </p>
          </section>

          <section>
            <h2>9. Disclaimers</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE
              DISCLAIM ALL WARRANTIES, INCLUDING:
            </p>
            <ul>
              <li>Merchantability and fitness for a particular purpose</li>
              <li>Uninterrupted or error-free operation</li>
              <li>Accuracy or reliability of content</li>
              <li>Security of your data</li>
            </ul>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLUTTERAI SHALL NOT BE LIABLE FOR:</p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages exceeding the amount you paid in the past 12 months</li>
            </ul>
            <p>
              Except where prohibited by law, our aggregate liability is limited to amounts paid by
              you in the 12 months preceding the claim. This cap does not apply to liability from
              gross negligence, willful misconduct, or breaches of data protection obligations.
            </p>
            <p>Some jurisdictions do not allow these limitations, so they may not apply to you.</p>
          </section>

          <section>
            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify and hold ClutterAI harmless from any claims, damages, or
              expenses arising from:
            </p>
            <ul>
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
            </ul>
          </section>

          <section>
            <h2>12. Termination</h2>
            <p>We may suspend or terminate your account at any time for:</p>
            <ul>
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Any reason with notice</li>
            </ul>
            <p>
              After termination we retain account data for 30 days for recovery and fraud prevention;
              thereafter we securely delete or anonymize personal data except as required by law.
              Customers may request export of their data prior to deletion via support.
            </p>
          </section>

          <section>
            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We'll notify you of material changes via
              email or a notice on the Service. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2>14. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Pakistan, without regard to conflict of law
              principles. Any disputes shall be resolved in the courts of Lahore.
            </p>
          </section>

          <section>
            <h2>15. Contact Us</h2>
            <p>If you have questions about these Terms, contact us at:</p>
            <ul>
              <li>
                Email: <a href="mailto:xayn@clutter-ai.com">xayn@clutter-ai.com</a>
              </li>
              <li>
                Website: <a href="https://clutter-ai.com/contact">clutter-ai.com/contact</a>
              </li>
            </ul>
          </section>
        </article>
      </div>

      {/* Glassmorphic Footer */}
      <footer className="legal-footer">
        <div className="footer-content">
          <Link href="/terms" className="footer-link">
            Terms & Conditions
          </Link>
          <span className="footer-separator">•</span>
          <Link href="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <span className="footer-separator">•</span>
          <Link href="/refund" className="footer-link">
            Refund Policy
          </Link>
        </div>
      </footer>

      <style jsx>{`
        .legal-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .background-orbs {
          position: fixed;
          inset: 0;
          z-index: 0;
        }

        .grid-background {
          position: fixed;
          inset: 0;
          z-index: 1;
          background-image:
            linear-gradient(to right, rgba(88, 28, 135, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(88, 28, 135, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          animation: float 25s infinite ease-in-out;
          opacity: 0.15;
        }

        .orb-1 {
          top: 20%;
          left: 10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(88, 28, 135, 0.3) 0%, transparent 70%);
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(40px, -40px); }
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 20px 100px;
          position: relative;
          z-index: 2;
        }

        .back-link {
          display: inline-block;
          color: #a1a1aa;
          text-decoration: none;
          margin-bottom: 40px;
          transition: color 0.3s;
        }

        .back-link:hover {
          color: #c4b5fd;
        }

        article {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .last-updated {
          color: #71717a;
          font-size: 0.95rem;
          margin-bottom: 60px;
        }

        section {
          margin-bottom: 50px;
        }

        h2 {
          font-size: 1.75rem;
          margin-bottom: 20px;
          color: #c4b5fd;
        }

        h3 {
          font-size: 1.25rem;
          margin: 30px 0 15px;
          color: #d4d4d8;
        }

        p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #a1a1aa;
          margin-bottom: 15px;
        }

        ul {
          margin: 15px 0;
          padding-left: 30px;
        }

        li {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #a1a1aa;
          margin-bottom: 10px;
        }

        a {
          color: #8b5cf6;
          text-decoration: none;
          transition: color 0.3s;
        }

        a:hover {
          color: #a78bfa;
          text-decoration: underline;
        }

        strong {
          color: #e4e4e7;
          font-weight: 600;
        }

        /* Footer Styles */
        .legal-footer {
          position: relative;
          z-index: 10;
          padding: 32px 20px;
          backdrop-filter: blur(16px);
          background: rgba(0, 0, 0, 0.4);
          border-top: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .footer-content {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px 32px;
        }
        
        .footer-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: #d4d4d8;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-link:hover {
          color: #c4b5fd;
          text-decoration: none;
          transform: scale(1.05);
        }
        
        .footer-separator {
          color: #71717a;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          h1 { font-size: 2rem; }
          h2 { font-size: 1.5rem; }
          
          .footer-separator {
            display: none;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  );
}






































































