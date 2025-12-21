"use client";

import Link from "next/link";

export default function Refund() {
  return (
    <div className="legal-page">
      <div className="background-orbs">
        <div className="orb orb-1"></div>
      </div>
      
      <div className="grid-background"></div>
      
      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>
        
        <article>
          <h1>Refund Policy</h1>
          <p className="last-updated">Last Updated: December 21, 2025</p>
          
          <section>
            <h2>Overview</h2>
            <p>
              ClutterAI uses <strong>Gumroad as our Merchant of Record</strong> for all subscription payments. 
              This means that Gumroad, not ClutterAI, is the seller of record for your purchase and handles 
              all payment processing, receipts, tax collection, and refund processing.
            </p>
            <p>
              We strive to provide a great experience with ClutterAI. If you're not satisfied, this policy 
              explains your refund options.
            </p>
          </section>
          
          <section>
            <h2>30-Day Money-Back Guarantee</h2>
            <p>
              We offer a <strong>30-day money-back guarantee</strong> for all new subscription purchases 
              made directly through Gumroad. This applies to:
            </p>
            <ul>
              <li>First-time purchases of any ClutterAI subscription plan (Student, Individual, or Team)</li>
              <li>Purchases made within the last 30 days from the date of payment</li>
              <li>Subscriptions purchased directly through our website checkout (powered by Gumroad)</li>
            </ul>
            <p>
              If you're not satisfied with ClutterAI for any reason within your first 30 days, you can 
              request a full refund—no questions asked.
            </p>
            
            <div className="highlight-box">
              <h3>✓ What's Covered</h3>
              <ul>
                <li>Full refund of your initial subscription payment</li>
                <li>Processed within 7-14 business days</li>
                <li>Refunded to your original payment method</li>
                <li>Simple request process via email</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2>How to Request a Refund</h2>
            <p>To request a refund within the 30-day guarantee period:</p>
            
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Email Our Support Team</h3>
                  <p>
                    Send an email to <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> with 
                    the subject line "Refund Request"
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Provide Required Information</h3>
                  <p>
                    Include the following in your email:
                  </p>
                  <ul>
                    <li>Your account email address</li>
                    <li>Gumroad order number or receipt (if available)</li>
                    <li>Brief reason for the refund (optional but helpful for us to improve)</li>
                  </ul>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>We'll Process Your Request</h3>
                  <p>
                    Our team will verify your purchase and, if you're within the 30-day window, approve 
                    your refund. Gumroad will process the refund to your original payment method within 
                    7-14 business days.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="note">
              <strong>Note:</strong> You can also contact Gumroad directly through their support at{" "}
              <a href="https://gumroad.com/contact" target="_blank" rel="noopener noreferrer">gumroad.com/contact</a> 
              {" "}or manage your purchase through your Gumroad Library.
            </p>
          </section>
          
          <section>
            <h2>Refunds After 30 Days</h2>
            <p>
              After the initial 30-day guarantee period, refund requests are handled on a case-by-case 
              basis at the discretion of ClutterAI and Gumroad. We consider refund requests for:
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
              this case, you can request a cancellation and refund by contacting 
              <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> within 14 days.
            </p>
            <p>
              Our 30-day money-back guarantee provides you with additional protection beyond the statutory 
              14-day period, even after you've started using the service.
            </p>
          </section>
          
          <section>
            <h2>What Happens After a Refund</h2>
            <p>If your refund is approved and processed:</p>
            <ul>
              <li>Your subscription will be canceled immediately</li>
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
              It's important to understand the difference between canceling your subscription and 
              requesting a refund:
            </p>
            
            <div className="comparison-grid">
              <div className="comparison-card">
                <h3>Cancellation</h3>
                <ul>
                  <li>Stops future billing immediately</li>
                  <li>You keep access until the end of your current billing period</li>
                  <li>No refund for the current period</li>
                  <li>Can be done anytime from account settings</li>
                  <li>Account reverts to Free Tier after period ends</li>
                </ul>
              </div>
              
              <div className="comparison-card">
                <h3>Refund Request</h3>
                <ul>
                  <li>Returns your payment for the current period</li>
                  <li>Access ends immediately upon refund approval</li>
                  <li>Only available within 30 days (or as approved)</li>
                  <li>Requires email to support team</li>
                  <li>Account immediately reverts to Free Tier</li>
                </ul>
              </div>
            </div>
            
            <p>
              You can cancel your subscription at any time from your account settings or through your 
              Gumroad Library. Canceling prevents future charges but does not automatically entitle you 
              to a refund unless you're within the 30-day guarantee period.
            </p>
          </section>
          
          <section>
            <h2>Refund Processing Time</h2>
            <p>
              Once a refund is approved:
            </p>
            <ul>
              <li><strong>Processing by Gumroad:</strong> 7-14 business days from approval</li>
              <li><strong>Bank/Card Processing:</strong> Additional 3-5 business days depending on your financial institution</li>
              <li><strong>Total Time:</strong> Expect to see the refund within 10-20 business days from request approval</li>
            </ul>
            <p>
              Refunds are processed to your original payment method. If you paid via credit card, the 
              refund will appear as a credit on your card statement. If you paid via PayPal or another 
              method, it will be refunded to that account.
            </p>
          </section>
          
          <section>
            <h2>Non-Refundable Items</h2>
            <p>
              The following are generally not eligible for refunds:
            </p>
            <ul>
              <li>Subscription renewals beyond the first 30 days (unless exceptional circumstances)</li>
              <li>Partial month refunds for mid-cycle cancellations (you retain access until period end)</li>
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
            <h2>Third-Party Purchases</h2>
            <p>
              If you purchased your ClutterAI subscription through a third-party platform (such as an 
              app store or reseller) rather than directly through our website:
            </p>
            <ul>
              <li>That platform's refund policy applies instead of this policy</li>
              <li>You must contact the third-party platform directly for refund requests</li>
              <li>We cannot process refunds for purchases made through third parties</li>
              <li>Refund timelines and eligibility are determined by the third party</li>
            </ul>
            <p>
              For purchases made through Gumroad on our website, this refund policy applies in full.
            </p>
          </section>
          
          <section>
            <h2>Refund Abuse and Fraud Prevention</h2>
            <p>
              To protect our service and community, we reserve the right to:
            </p>
            <ul>
              <li>Deny refund requests that show evidence of fraud or abuse</li>
              <li>Limit refunds for users with a history of excessive refund requests</li>
              <li>Investigate suspicious refund patterns or behavior</li>
              <li>Permanently ban accounts engaged in refund fraud</li>
            </ul>
            <p>
              Gumroad also has fraud prevention measures in place and may deny refunds at their discretion 
              if they detect fraudulent activity.
            </p>
          </section>
          
          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Refund Policy from time to time to reflect changes in our practices, 
              legal requirements, or Gumroad's policies. Material changes will be communicated via:
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
                <br />
                <span className="subtext">For refund requests, account issues, and general inquiries</span>
              </li>
              <li>
                <strong>Gumroad Support:</strong>{" "}
                <a href="https://gumroad.com/contact" target="_blank" rel="noopener noreferrer">gumroad.com/contact</a>
                <br />
                <span className="subtext">For payment processing, receipt issues, and billing questions</span>
              </li>
              <li>
                <strong>Gumroad Library:</strong>{" "}
                <a href="https://app.gumroad.com/library" target="_blank" rel="noopener noreferrer">app.gumroad.com/library</a>
                <br />
                <span className="subtext">To view your purchases and manage subscriptions</span>
              </li>
            </ul>
            <p className="final-note">
              This Refund Policy is part of our Terms of Service and is subject to applicable consumer 
              protection laws in your jurisdiction. Nothing in this policy limits your statutory rights 
              as a consumer.
            </p>
          </section>
        </article>
      </div>
      
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
          right: 15%;
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
          font-weight: 500;
        }
        
        .back-link:hover {
          color: #c4b5fd;
        }
        
        article {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        h1 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 10px;
          background: linear-gradient(135deg, #ffd6ff 0%, #e0c3fc 25%, #a855f7 50%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
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
          font-weight: 700;
        }
        
        h3 {
          font-size: 1.15rem;
          margin-bottom: 10px;
          color: #d4d4d8;
          font-weight: 600;
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
          word-break: break-word;
        }
        
        a:hover {
          color: #a78bfa;
          text-decoration: underline;
        }
        
        strong {
          color: #e4e4e7;
          font-weight: 600;
        }
        
        .highlight-box {
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 12px;
          padding: 24px;
          margin: 25px 0;
        }
        
        .highlight-box h3 {
          color: #c4b5fd;
          margin-top: 0;
          margin-bottom: 15px;
        }
        
        .highlight-box ul {
          margin-bottom: 0;
        }
        
        .steps {
          display: grid;
          gap: 25px;
          margin: 30px 0;
        }
        
        .step {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 25px;
          transition: all 0.3s;
        }
        
        .step:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateX(5px);
        }
        
        .step-number {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #7c3aed, #5b21b6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.25rem;
        }
        
        .step-content h3 {
          margin-top: 0;
        }
        
        .step-content p {
          margin-bottom: 0;
        }
        
        .step-content ul {
          margin: 10px 0 0 0;
        }
        
        .note {
          background: rgba(255, 255, 255, 0.03);
          border-left: 3px solid #8b5cf6;
          padding: 15px 20px;
          margin: 20px 0;
          border-radius: 4px;
        }
        
        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin: 25px 0;
        }
        
        .comparison-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 24px;
        }
        
        .comparison-card h3 {
          color: #c4b5fd;
          margin-top: 0;
          margin-bottom: 15px;
        }
        
        .comparison-card ul {
          margin: 0;
          padding-left: 20px;
        }
        
        .subtext {
          font-size: 0.9rem;
          color: #71717a;
          font-style: italic;
        }
        
        .final-note {
          font-style: italic;
          color: #9ca3af;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
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
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          .container {
            padding: 40px 20px 80px;
          }
          
          .step {
            flex-direction: column;
          }
          
          .comparison-grid {
            grid-template-columns: 1fr;
          }
          
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