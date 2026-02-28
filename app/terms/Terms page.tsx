"use client";

import React from "react";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="root">
      <div className="container">
        <Link href="/" className="back-link">← Back</Link>

        <article>
          <p className="eyebrow">Legal</p>
          <h1 className="headline">Terms of Service</h1>
          <p className="last-updated">Last updated: February 28, 2026</p>

          <div className="body">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using ClutterAI ("Service"), you agree to be bound by these Terms of
                Service ("Terms"). If you do not agree to these Terms, do not use the Service.
              </p>
              <p>
                ClutterAI is operated by ClutterAI ("we," "us," or "our"). These Terms constitute a
                legally binding agreement between you and ClutterAI.
              </p>
              <p><strong>Contact Information:</strong></p>
              <ul>
                <li>Email: <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
                <li>Website: <a href="https://clutter-ai.com">clutter-ai.com</a></li>
              </ul>
            </section>

            <section>
              <h2>2. Description of Service</h2>
              <p>ClutterAI is an AI-powered knowledge search platform that allows you to:</p>
              <ul>
                <li>Connect third-party services (Google Drive, Gmail, Slack, Calendar, Notion, and others)</li>
                <li>Search your connected content using natural language queries</li>
                <li>Receive AI-generated answers based on your data</li>
                <li>Organize and access your information efficiently across multiple platforms</li>
              </ul>
            </section>

            <section>
              <h2>3. Account Registration</h2>
              <p>
                To use ClutterAI, you must create an account by providing accurate and complete
                information. You are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your password and account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access or security breaches</li>
                <li>Ensuring your account information remains current and accurate</li>
              </ul>
              <p>
                <strong>Age Requirements:</strong> You must be at least 13 years old to use the Service.
                If you are under 18, you must have parental consent. Users must meet the age of consent
                applicable to their jurisdiction (e.g., 16 in some EU countries). We will delete accounts
                that lack valid consent upon discovery.
              </p>
            </section>

            <section>
              <h2>4. Subscription Plans and Payments</h2>

              <h3>4.1 Plans</h3>
              <p>ClutterAI offers multiple subscription plans:</p>
              <ul>
                <li><strong>Free Tier:</strong> 3 questions every 12 hours with access to basic features</li>
                <li><strong>Student Plan:</strong> $9/month (requires valid .edu email address)</li>
                <li><strong>Individual Plan:</strong> $19/month for unlimited questions and advanced features</li>
                <li><strong>Team Plan:</strong> $15/member/month (minimum 3 members, includes team management and shared workspaces)</li>
              </ul>
              <p>
                Plan features, pricing, and availability are subject to change. Current plan details
                are available at <a href="https://clutter-ai.com/pricing">clutter-ai.com/pricing</a>
              </p>

              <h3>4.2 Payment Processing and Merchant of Record</h3>
              <p>
                <strong>All payments are processed by Lemon Squeezy LLC ("Lemon Squeezy"), which acts as our Merchant of Record.</strong>
              </p>
              <p>
                This means that <strong>Lemon Squeezy, not ClutterAI</strong>, is the legal seller of record for all transactions.
                Your invoice and credit card statement will show <strong>Lemon Squeezy</strong>, not ClutterAI —
                this is expected and confirms your purchase was processed correctly. Lemon Squeezy:
              </p>
              <ul>
                <li>Processes all payments and stores payment information</li>
                <li>Issues receipts and invoices (which will display Lemon Squeezy as the seller)</li>
                <li>Handles payment disputes, chargebacks, and refund processing</li>
                <li>Collects and remits applicable taxes (VAT, GST, sales tax, etc.) globally</li>
                <li>Manages subscription billing and renewals</li>
                <li>Ensures PCI DSS compliance for all payment transactions</li>
              </ul>
              <p>
                By purchasing a subscription, you agree to Lemon Squeezy's Buyer Terms of Service:{" "}
                <a href="https://www.lemonsqueezy.com/buyer-terms" target="_blank" rel="noopener noreferrer">lemonsqueezy.com/buyer-terms</a>
              </p>
              <p>
                We receive limited transaction data from Lemon Squeezy (email, subscription status, purchase
                date) solely to provide you access to the Service. We do not receive or store your full
                payment card details.
              </p>

              <h3>4.3 Billing and Renewals</h3>
              <ul>
                <li>Subscriptions are billed monthly based on your plan selection</li>
                <li>Billing occurs automatically on your renewal date through Lemon Squeezy</li>
                <li>You authorize Lemon Squeezy to charge your payment method on file</li>
                <li>Subscriptions automatically renew until cancelled prior to the renewal date</li>
                <li>You will receive a receipt from Lemon Squeezy for each billing cycle</li>
              </ul>

              <h3>4.4 Price Changes</h3>
              <p>We reserve the right to modify subscription pricing. In the event of a price change:</p>
              <ul>
                <li>We will notify you at least 30 days in advance via email</li>
                <li>Price changes apply to renewals after the notice period</li>
                <li>Existing paid periods are not subject to retroactive price increases</li>
                <li>You may cancel before the renewal date to avoid the new pricing</li>
              </ul>

              <h3>4.5 Cancellation</h3>
              <p>You may cancel your subscription at any time through:</p>
              <ul>
                <li>Your ClutterAI account settings</li>
                <li>The Lemon Squeezy customer portal (link included in your billing confirmation email)</li>
                <li>Contacting our support team at <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
              </ul>
              <p>Upon cancellation:</p>
              <ul>
                <li>You retain full access to paid features until the end of your current billing period</li>
                <li>No refunds are provided for the unused portion of your subscription period (except as outlined in Section 4.6)</li>
                <li>Your account automatically reverts to the Free Tier after the paid period expires</li>
                <li>Your data and connected services remain intact unless you delete your account</li>
              </ul>

              <h3>4.6 Refunds</h3>
              <p>
                We offer a <strong>30-day money-back guarantee</strong> for new subscriptions. This applies to your
                first purchase of any plan.
              </p>
              <p><strong>To request a refund:</strong></p>
              <ul>
                <li>Email <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> within 30 days of your initial purchase</li>
                <li>Include your account email and Lemon Squeezy order number (found in your receipt email)</li>
                <li>Provide a brief reason for the refund request (optional but helpful)</li>
              </ul>
              <p>
                Approved refunds are processed by Lemon Squeezy within 5–10 business days to your original payment method.
              </p>
              <p>
                Please note: Lemon Squeezy reserves the right to issue refunds within 60 days of purchase at its
                own discretion to prevent chargebacks, regardless of your subscription status at the time.
              </p>
              <p><strong>Refund Limitations:</strong></p>
              <ul>
                <li>Partial-period refunds for mid-cycle cancellations are not provided except as required by law</li>
                <li>Renewals (second month onwards) are generally not eligible for refunds unless required by law</li>
                <li>Team plan refunds require approval from the team administrator</li>
              </ul>
              <p>See our complete <Link href="/refund">Refund Policy</Link> for additional details.</p>
            </section>

            <section>
              <h2>5. Acceptable Use</h2>
              <p>You agree to use the Service responsibly and NOT to:</p>
              <ul>
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Infringe on intellectual property rights or proprietary information</li>
                <li>Upload, transmit, or distribute malicious code, viruses, or harmful content</li>
                <li>Attempt to gain unauthorized access to the Service, other accounts, or our systems</li>
                <li>Reverse engineer, decompile, or attempt to derive source code from the Service</li>
                <li>Use the Service to harass, abuse, threaten, or harm others</li>
                <li>Share your account credentials with unauthorized users</li>
                <li>Scrape, crawl, or extract data using automated tools or bots</li>
                <li>Use the Service for competitive analysis or to build a competing product</li>
                <li>Resell, sublicense, or redistribute the Service without authorization</li>
                <li>Circumvent usage limits, rate limiting, or other technical restrictions</li>
                <li>Interfere with or disrupt the Service or our infrastructure</li>
              </ul>
              <p><strong>Violation of these terms may result in immediate account suspension or termination without refund.</strong></p>
            </section>

            <section>
              <h2>6. Content and Data</h2>

              <h3>6.1 Your Content</h3>
              <p>
                You retain full ownership rights to all content you upload, create, or connect to
                ClutterAI ("Your Content"). By using the Service, you grant ClutterAI a limited,
                non-exclusive, royalty-free license to:
              </p>
              <ul>
                <li>Store and process Your Content on our servers and infrastructure</li>
                <li>Index and analyze Your Content to provide search functionality</li>
                <li>Generate AI-powered answers and insights based on Your Content</li>
                <li>Display Your Content to you and authorized users on your team (for Team plans)</li>
                <li>Make backup copies for disaster recovery and business continuity</li>
              </ul>
              <p><strong>Privacy Commitment:</strong></p>
              <ul>
                <li>We do NOT use Your Content to train AI models or machine learning systems</li>
                <li>We do NOT sell, rent, or share Your Content with third parties for their purposes</li>
                <li>Your Content is encrypted in transit and at rest</li>
              </ul>

              <h3>6.2 Connected Services</h3>
              <p>
                When you connect third-party services, you authorize ClutterAI to access content
                you've explicitly granted permission to via OAuth, store OAuth tokens securely, and
                periodically sync content to keep search results current. You can revoke access at any
                time through your account settings or the third-party service directly.
              </p>

              <h3>6.3 AI-Generated Content</h3>
              <p>You acknowledge and agree that:</p>
              <ul>
                <li>AI-generated responses may contain errors, inaccuracies, or outdated information</li>
                <li>You are solely responsible for verifying the accuracy of AI-generated information before relying on it</li>
                <li>We are not liable for decisions or outcomes based on AI-generated responses</li>
                <li>AI responses do not constitute professional advice (legal, medical, financial, etc.)</li>
              </ul>
            </section>

            <section>
              <h2>7. Intellectual Property</h2>
              <p>
                The Service, including its software, algorithms, user interface, design elements,
                logos, and trademarks, is owned by ClutterAI and protected by copyright, trademark,
                and other intellectual property laws. You are granted a limited, non-exclusive,
                non-transferable license to access and use the Service for your personal or internal
                business purposes. You may not copy, modify, distribute, or create derivative works
                from the Service.
              </p>
            </section>

            <section>
              <h2>8. Third-Party Services and Integrations</h2>
              <p>ClutterAI integrates with and relies on third-party services including:</p>
              <ul>
                <li><strong>Lemon Squeezy LLC:</strong> Payment processing and merchant of record. <a href="https://www.lemonsqueezy.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
                <li><strong>Google (Drive, Gmail, Calendar):</strong> OAuth integration and data access</li>
                <li><strong>Slack:</strong> Workspace integration</li>
                <li><strong>Notion:</strong> Workspace and database integration</li>
                <li><strong>OpenAI:</strong> AI and language model processing</li>
                <li><strong>Convex:</strong> Database infrastructure</li>
                <li><strong>Vercel:</strong> Hosting and deployment</li>
                <li><strong>Pinecone:</strong> Vector search infrastructure</li>
              </ul>
              <p>
                Your use of these services through ClutterAI is subject to their respective terms and
                privacy policies. We are not responsible for the availability or practices of third-party services.
              </p>
            </section>

            <section>
              <h2>9. Service Availability</h2>
              <p>
                We strive to provide reliable, continuous service but cannot guarantee uninterrupted
                availability. The Service may be temporarily unavailable due to scheduled maintenance,
                emergency updates, third-party service outages, or force majeure events. We will make
                reasonable efforts to notify users of planned downtime.
              </p>
            </section>

            <section>
              <h2>10. Disclaimers</h2>
              <p>
                <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY
                KIND, EITHER EXPRESS OR IMPLIED.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE
                DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                UNINTERRUPTED OPERATION, AND ACCURACY OF CONTENT OR AI RESPONSES. Some jurisdictions
                do not allow the exclusion of implied warranties, so some exclusions may not apply to you.
              </p>
            </section>

            <section>
              <h2>11. Limitation of Liability</h2>
              <p>
                <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLUTTERAI AND ITS AFFILIATES SHALL
                NOT BE LIABLE FOR</strong> indirect, incidental, consequential, special, or punitive
                damages, including loss of profits, data, goodwill, or business opportunities.
              </p>
              <p>
                <strong>Liability Cap:</strong> Our total aggregate liability for all claims shall not
                exceed the amount you paid to ClutterAI in the 12 months preceding the claim.
              </p>
              <p>
                These limitations do not apply to liability arising from gross negligence, willful
                misconduct, fraud, or other liability that cannot be excluded under applicable law.
              </p>
            </section>

            <section>
              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless ClutterAI, its affiliates, officers,
                directors, employees, and agents from any claims, liabilities, damages, and expenses
                arising from your use or misuse of the Service, violation of these Terms, or
                infringement of any rights of another person or entity.
              </p>
            </section>

            <section>
              <h2>13. Termination</h2>

              <h3>13.1 Termination by You</h3>
              <p>
                You may terminate your account at any time by deleting it through account settings or
                contacting <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>.
              </p>

              <h3>13.2 Termination by Us</h3>
              <p>
                We reserve the right to suspend or terminate your account for violation of these Terms,
                fraudulent or illegal activity, non-payment, or extended inactivity.
              </p>

              <h3>13.3 Effect of Termination</h3>
              <ul>
                <li>Your access to the Service will be immediately disabled</li>
                <li>We will retain your data for 30 days to allow for recovery or reactivation</li>
                <li>After 30 days, we will securely delete or anonymize your personal data</li>
                <li>Backup copies will be purged within 90 days</li>
                <li>Transaction records may be retained by Lemon Squeezy for legal and tax purposes</li>
                <li>No refunds will be provided for unused subscription time (except as required by law)</li>
              </ul>
              <p>
                You may request a data export before deletion by contacting{" "}
                <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>.
              </p>

              <h3>13.4 Survival</h3>
              <p>
                Sections covering Intellectual Property, Disclaimers, Limitation of Liability,
                Indemnification, and Governing Law survive termination.
              </p>
            </section>

            <section>
              <h2>14. Changes to Terms</h2>
              <p>We will notify you of material changes by:</p>
              <ul>
                <li>Sending an email to your registered email address</li>
                <li>Posting a prominent notice on the Service</li>
                <li>Updating the "Last Updated" date at the top of this document</li>
                <li>Providing at least 30 days' notice for changes that materially affect your rights</li>
              </ul>
              <p>
                Your continued use of the Service after the effective date constitutes acceptance of
                the updated Terms.
              </p>
            </section>

            <section>
              <h2>15. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the United
                States of America, without regard to its conflict of law principles.
              </p>
              <p>
                Nothing in these Terms affects your statutory rights as a consumer under applicable
                local law, including EU consumer protection laws. For consumers in the United States,
                payment-related disputes are governed by Lemon Squeezy's Buyer Terms, which apply
                Utah law for US residents.
              </p>
            </section>

            <section>
              <h2>16. Miscellaneous</h2>

              <h3>16.1 Entire Agreement</h3>
              <p>
                These Terms, together with our Privacy Policy and Refund Policy, constitute the entire
                agreement between you and ClutterAI regarding the Service.
              </p>

              <h3>16.2 Severability</h3>
              <p>
                If any provision of these Terms is found invalid or unenforceable, the remaining
                provisions continue in full force and effect.
              </p>

              <h3>16.3 Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a
                waiver of those rights.
              </p>

              <h3>16.4 Assignment</h3>
              <p>
                You may not assign or transfer these Terms or your account without our prior written
                consent. We may assign these Terms without restriction.
              </p>

              <h3>16.5 Force Majeure</h3>
              <p>
                We are not liable for any failure to perform due to circumstances beyond our reasonable
                control, including natural disasters, wars, internet outages, or third-party service failures.
              </p>
            </section>

            <section>
              <h2>17. Contact Us</h2>
              <p>For questions about these Terms:</p>
              <ul>
                <li>Email: <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
                <li>Subject line: "Terms of Service Inquiry"</li>
              </ul>
              <p>
                For payment and subscription inquiries, contact Lemon Squeezy at:{" "}
                <a href="https://www.lemonsqueezy.com/support" target="_blank" rel="noopener noreferrer">lemonsqueezy.com/support</a>
              </p>
            </section>
          </div>
        </article>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <Link href="/terms" className="footer-link">Terms</Link>
          <span className="sep">·</span>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <span className="sep">·</span>
          <Link href="/refund" className="footer-link">Refunds</Link>
        </div>
      </footer>

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
          max-width: 780px;
          margin: 0 auto;
          padding: 48px 40px 100px;
        }

        .back-link {
          display: inline-block;
          font-size: 0.85rem;
          color: rgba(240,237,232,0.35);
          text-decoration: none;
          margin-bottom: 56px;
          transition: color 0.2s;
        }
        .back-link:hover { color: rgba(240,237,232,0.7); }

        .eyebrow {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.28);
          margin-bottom: 16px;
        }
        .headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          letter-spacing: -0.05em;
          line-height: 0.97;
          color: #f0ede8;
          margin-bottom: 14px;
        }
        .last-updated {
          font-size: 0.8rem;
          color: rgba(240,237,232,0.25);
          font-weight: 300;
          margin-bottom: 64px;
        }

        .body { display: flex; flex-direction: column; gap: 0; }

        section {
          padding: 40px 0;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        section:last-child { border-bottom: 1px solid rgba(255,255,255,0.06); }

        h2 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 1.15rem;
          letter-spacing: -0.03em;
          color: #f0ede8;
          margin-bottom: 16px;
        }

        h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
          color: rgba(240,237,232,0.7);
          margin-top: 28px;
          margin-bottom: 10px;
        }

        p {
          font-size: 0.92rem;
          line-height: 1.8;
          color: rgba(240,237,232,0.48);
          font-weight: 300;
          margin-bottom: 12px;
        }
        p:last-child { margin-bottom: 0; }

        ul {
          margin: 10px 0 12px 0;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        li {
          font-size: 0.92rem;
          line-height: 1.7;
          color: rgba(240,237,232,0.45);
          font-weight: 300;
        }

        strong { color: rgba(240,237,232,0.75); font-weight: 600; }

        a {
          color: rgba(240,237,232,0.6);
          text-decoration: none;
          border-bottom: 1px solid rgba(240,237,232,0.15);
          padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
          word-break: break-word;
        }
        a:hover { color: #f0ede8; border-color: rgba(240,237,232,0.45); }

        .footer {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 24px 40px;
        }
        .footer-inner {
          max-width: 780px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .footer-link {
          font-size: 0.8rem;
          color: rgba(240,237,232,0.28);
          text-decoration: none;
          border-bottom: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: rgba(240,237,232,0.6); border-bottom: none; }
        .sep { color: rgba(240,237,232,0.15); font-size: 0.8rem; }

        @media (max-width: 640px) {
          .container { padding: 32px 20px 80px; }
          .footer { padding: 20px; }
        }
      `}</style>
    </div>
  );
}