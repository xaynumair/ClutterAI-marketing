"use client";

import Link from "next/link";

export default function Refund() {
  return (
    <div className="root">
      <div className="container">
        <Link href="/" className="back-link">← Back</Link>

        <article>
          <p className="eyebrow">Legal</p>
          <h1 className="headline">Refund Policy</h1>
          <p className="last-updated">Last updated: February 28, 2026</p>

          <div className="body">
            <section>
              <h2>Overview</h2>
              <p>
                ClutterAI uses <strong>Lemon Squeezy LLC as our Merchant of Record</strong> for all subscription payments.
                This means that Lemon Squeezy, not ClutterAI, is the legal seller of record for your purchase and handles
                all payment processing, receipts, tax collection, and refund processing. Your invoice and
                credit card statement will show <strong>Lemon Squeezy</strong> — this is expected and correct.
              </p>
              <p>
                We strive to provide a great experience with ClutterAI. If you're not satisfied, this policy
                explains your refund options. Please note that our 30-day money-back guarantee is subject
                to a fair usage limit — accounts that have submitted 20 or more queries are not eligible.
              </p>
            </section>

            <section>
              <h2>30-Day Money-Back Guarantee</h2>
              <p>
                We offer a <strong>30-day money-back guarantee</strong> for all new subscription purchases. This applies to:
              </p>
              <ul>
                <li>First-time purchases of any ClutterAI subscription plan (Student, Individual, or Team)</li>
                <li>Purchases made within the last 30 days from the date of payment</li>
                <li>Subscriptions purchased directly through our website checkout (powered by Lemon Squeezy)</li>
                <li>Accounts that have submitted <strong>fewer than 20 queries</strong> in total since sign-up</li>
              </ul>
              <p>
                If you're not satisfied with ClutterAI within your first 30 days and have made fewer than
                20 queries, you can request a full refund. This limit exists to prevent abuse of our
                guarantee while still giving genuine new users ample opportunity to evaluate the service.
              </p>
              <p>
                <strong>Accounts that have submitted 20 or more queries are not eligible for the 30-day
                money-back guarantee</strong>, as this level of usage indicates the service has been
                meaningfully evaluated and used.
              </p>
              <p>
                EU/UK consumers retain their statutory 14-day cancellation right regardless of query count —
                see the EU/UK section below.
              </p>

              <h3>What's Covered</h3>
              <ul>
                <li>Full refund of your initial subscription payment</li>
                <li>Processed within 5–10 business days after approval</li>
                <li>Refunded to your original payment method</li>
                <li>Simple request process via email</li>
              </ul>
            </section>

            <section>
              <h2>How to Request a Refund</h2>
              <p>To request a refund within the 30-day guarantee period:</p>

              <h3>Step 1 — Email Our Support Team</h3>
              <p>
                Send an email to <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> with
                the subject line "Refund Request".
              </p>

              <h3>Step 2 — Provide Required Information</h3>
              <p>Include the following in your email:</p>
              <ul>
                <li>Your account email address</li>
                <li>Lemon Squeezy order number (found in your receipt email)</li>
                <li>Brief reason for the refund (optional but helpful for us to improve)</li>
              </ul>

              <h3>Step 3 — We'll Process Your Request</h3>
              <p>
                Our team will verify your purchase and, if you're within the 30-day window, approve
                your refund. Lemon Squeezy will process the refund to your original payment method within
                5–10 business days.
              </p>

              <p>
                <strong>Note:</strong> Lemon Squeezy also reserves the right to issue refunds within 60 days
                of purchase at its own discretion to prevent chargebacks. This means even after the 30-day
                window, a refund may still be issued by Lemon Squeezy in certain circumstances.
              </p>
            </section>

            <section>
              <h2>Refunds After 30 Days</h2>
              <p>
                After the initial 30-day guarantee period, refund requests are handled on a case-by-case
                basis at the discretion of ClutterAI and Lemon Squeezy. We consider refund requests for:
              </p>
              <ul>
                <li>Technical issues that prevented you from using the service (if not resolved by our support team)</li>
                <li>Accidental duplicate purchases or billing errors</li>
                <li>Exceptional circumstances as required by law</li>
              </ul>
              <p>
                To request a refund after 30 days, contact <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> with
                details about your situation. We will review your request and respond within 5 business days.
              </p>
              <p>
                <strong>Please note:</strong> Partial refunds for unused portions of a billing period are
                generally not provided unless required by applicable law.
              </p>
            </section>

            <section>
              <h2>EU/UK Consumer Right to Cancel (14 Days)</h2>
              <p>
                If you are a consumer in the European Union, United Kingdom, or another jurisdiction with
                similar consumer protection laws, you have a statutory right to cancel your subscription
                within <strong>14 days of purchase</strong> without giving any reason.
              </p>
              <p>
                <strong>Important:</strong> By accessing and using ClutterAI's features (such as connecting
                integrations, asking questions, uploading files, or searching your content), you explicitly
                agree to immediate performance of the digital service and acknowledge that you waive your
                14-day cancellation right, as permitted by EU Consumer Rights Directive Article 16(m) and
                similar laws.
              </p>
              <p>
                If you have not accessed the service, you retain your full 14-day cancellation right. In
                this case, you can request a cancellation and refund by contacting{" "}
                <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> within 14 days.
              </p>
              <p>
                Our 30-day money-back guarantee provides additional protection beyond the statutory
                14-day period, even after you've started using the service.
              </p>
            </section>

            <section>
              <h2>What Happens After a Refund</h2>
              <p>If your refund is approved and processed:</p>
              <ul>
                <li>Your subscription will be cancelled immediately</li>
                <li>You will lose access to all paid features and integrations</li>
                <li>Your account will automatically revert to the Free Tier (3 questions every 12 hours)</li>
                <li>Your connected services and existing data will remain intact for 30 days</li>
                <li>You can export your data before the 30-day retention period expires</li>
              </ul>
              <p>
                <strong>Data Retention:</strong> We retain your account data for 30 days after a refund
                to allow you to reactivate your subscription or export your information. After 30 days,
                data is permanently deleted unless you maintain a Free Tier account.
              </p>
            </section>

            <section>
              <h2>Subscription Cancellation vs. Refund</h2>
              <p>
                It's important to understand the difference between cancelling your subscription and
                requesting a refund.
              </p>

              <h3>Cancellation</h3>
              <ul>
                <li>Stops future billing immediately</li>
                <li>You keep access until the end of your current billing period</li>
                <li>No refund for the current period</li>
                <li>Can be done anytime from account settings or the Lemon Squeezy customer portal</li>
                <li>Account reverts to Free Tier after period ends</li>
              </ul>

              <h3>Refund Request</h3>
              <ul>
                <li>Returns your payment for the current period</li>
                <li>Access ends immediately upon refund approval</li>
                <li>Only available within 30 days of first purchase (or as approved)</li>
                <li>Requires email to support team</li>
                <li>Account immediately reverts to Free Tier</li>
              </ul>

              <p>
                You can cancel your subscription at any time from your account settings or through the
                Lemon Squeezy customer portal (link included in your billing confirmation email).
                Cancelling prevents future charges but does not automatically entitle you to a refund
                unless you're within the 30-day guarantee period.
              </p>
            </section>

            <section>
              <h2>Refund Processing Time</h2>
              <p>Once a refund is approved:</p>
              <ul>
                <li><strong>Processing by Lemon Squeezy:</strong> 5–10 business days from approval</li>
                <li><strong>Bank/Card Processing:</strong> Additional 3–5 business days depending on your financial institution</li>
                <li><strong>Total Time:</strong> Expect to see the refund within 8–15 business days from request approval</li>
              </ul>
              <p>
                Refunds are processed to your original payment method. If you paid via credit card, the
                refund will appear as a credit on your card statement.
              </p>
            </section>

            <section>
              <h2>Non-Refundable Items</h2>
              <p>The following are generally not eligible for refunds:</p>
              <ul>
                <li>Subscription renewals beyond the first 30 days (unless exceptional circumstances apply)</li>
                <li>Partial month refunds for mid-cycle cancellations (you retain access until the period ends)</li>
                <li>Purchases made through unauthorized third-party resellers</li>
                <li>Subscriptions obtained through promotional codes or discounts (unless otherwise stated)</li>
                <li>Team plan refunds without authorization from the team administrator</li>
              </ul>
              <p>
                These limitations are subject to applicable consumer protection laws in your jurisdiction.
                If you believe you're entitled to a refund under local law, please contact us.
              </p>
            </section>

            <section>
              <h2>Chargebacks</h2>
              <p>
                <strong>Please contact us before disputing a charge with your bank or card issuer.</strong>{" "}
                If you have a billing concern, emailing <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>{" "}
                is always the fastest way to resolve it. We respond within 1–2 business days and will
                work to make things right.
              </p>
              <p>
                Initiating a chargeback without contacting us first may result in:
              </p>
              <ul>
                <li>Immediate suspension of your ClutterAI account</li>
                <li>Permanent ban from future purchases where Lemon Squeezy is the merchant</li>
                <li>A liquidated damage of up to $100 USD per incident, as outlined in Lemon Squeezy's{" "}
                  <a href="https://www.lemonsqueezy.com/buyer-terms" target="_blank" rel="noopener noreferrer">Buyer Terms</a>
                </li>
              </ul>
              <p>
                Lemon Squeezy actively defends against fraudulent chargebacks on our behalf. If you
                believe a charge was made in error, please contact us first — we will resolve it
                promptly without the need for a bank dispute.
              </p>
            </section>

            <section>
              <h2>Refund Abuse and Fraud Prevention</h2>
              <p>To protect our service and community, we reserve the right to:</p>
              <ul>
                <li>Deny refund requests that show evidence of fraud or abuse</li>
                <li>Limit refunds for users with a history of excessive refund requests</li>
                <li>Investigate suspicious refund patterns or behavior</li>
                <li>Permanently ban accounts engaged in refund fraud</li>
              </ul>
              <p>
                Lemon Squeezy also has fraud prevention measures in place and may deny refunds at their
                discretion if they detect fraudulent activity.
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Refund Policy from time to time to reflect changes in our practices,
                legal requirements, or Lemon Squeezy's policies. Material changes will be communicated via:
              </p>
              <ul>
                <li>Email notification to your registered email address</li>
                <li>Prominent notice on our website and in the application</li>
                <li>Update to the "Last Updated" date at the top of this policy</li>
              </ul>
              <p>
                Your continued use of ClutterAI after policy changes take effect constitutes acceptance
                of the updated terms.
              </p>
            </section>

            <section>
              <h2>Questions or Issues?</h2>
              <p>
                If you have questions about our refund policy, need help with a refund request, or are
                experiencing billing issues, please contact:
              </p>
              <ul>
                <li>
                  <strong>ClutterAI Support:</strong>{" "}
                  <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
                  {" "}— for refund requests, account issues, and general inquiries
                </li>
                <li>
                  <strong>Lemon Squeezy Support:</strong>{" "}
                  <a href="https://www.lemonsqueezy.com/support" target="_blank" rel="noopener noreferrer">lemonsqueezy.com/support</a>
                  {" "}— for payment processing, receipt issues, and billing questions
                </li>
              </ul>
              <p>
                This Refund Policy is part of our Terms of Service and is subject to applicable consumer
                protection laws in your jurisdiction. Nothing in this policy limits your statutory rights
                as a consumer.
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