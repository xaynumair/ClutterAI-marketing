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
          <p className="last-updated">Last Updated: December 3, 2025</p>
          
          <section>
            <h2>30-Day Money-Back Guarantee</h2>
            <p>
              We offer a 30‑day money‑back guarantee for new paid subscriptions purchased through our Paddle checkout. If you are not satisfied, request a refund within 30 days of your initial payment and we will evaluate and, if approved, refund the purchase amount to your original payment method.
            </p>
          </section>
          
          <section>
            <h2>Eligibility</h2>
            <p>To be eligible for a refund you must:</p>
            <ul>
              <li>Be a first‑time paying subscriber for the specific ClutterAI account and plan purchased (conversions from a free trial to the same paid plan do not automatically qualify as a new first‑time purchase).
</li>
              <li>Submit a refund request within 30 days of the initial payment date.</li>
              <li>Have an account in good standing (no unresolved Terms of Service violations or fraud).
</li>
            </ul>
            
            <p><strong>Refunds are NOT available for:</strong></p>
            <ul>
              <li>Renewals or subsequent billing cycles for the same account and plan;</li>
              <li>Free tier accounts (no payment made);</li>
              <li>Accounts terminated for Terms violations;</li>
              <li>Requests submitted after 30 days from the initial payment date;</li>
              <li>Purchases made through third parties (e.g., app stores or resellers) unless that third party’s policy allows refunds—contact the third party for those refunds.</li>
            </ul>
          </section>
          
          <section>
            <h2>How to Request a Refund</h2>
            <p>To request a refund, follow these steps:</p>
            
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Contact Support</h3>
                  <p>
                    Email us at <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> with 
                    the subject line "Refund Request"
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Provide required information</h3>
                  <p>
                    Include your account email, order/transaction ID (from Paddle receipt), purchase date, and reason (optional).
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Verification</h3>
                  <p>
                    We may request additional information to verify account ownership or detect abuse.
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Decision</h3>
                  <p>
                    We will acknowledge receipt within 2 business days and provide a decision within 5 business days.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2>Refund Processing</h2>
            <p>If we approve a refund, we will instruct Paddle to process the refund to the original payment method. Paddle typically completes refunds within 5–10 business days, but the exact timing depends on the payment method and bank. You will receive confirmation from both ClutterAI and Paddle when the refund is processed. Refunds may reverse any taxes collected where applicable. If a chargeback or dispute is open, we may withhold refund processing until the dispute is resolved.</p>
              
          </section>
          
          <section>
            <h2>What Happens After a Refund</h2>
            <p>Once your refund is processed:</p>
            <p>Upon approval of a refund, your paid subscription will be canceled immediately and your account will revert to the free tier. You will retain access to your connected data and integrations for 30 days after refund processing to allow export or migration; after that period we may delete or anonymize data in accordance with our Data Retention policy. If you prefer immediate deletion, contact support and we will process your request subject to legal and fraud‑prevention checks.</p>
          </section>
          
          <section>
            <h2>Team Plan Refunds</h2>
            <p>
              For Team plan subscriptions:
            </p>
            <p>Only the account administrator may request a refund for a Team plan. We will verify administrator status before processing. Refunds for Team plans are applied to the team subscription and, if approved, will be prorated based on the number of active seats and the unused portion of the billing period using the following formula: (Annual or monthly fee ÷ number of days in billing period) × unused days × active seats. Individual team members cannot request separate refunds unless authorized by the administrator.</p>
          </section>
          
          <section>
            <h2>Abuse Prevention</h2>
            <p>
              We reserve the right to deny refunds in cases of suspected abuse or fraud. Examples include:
            </p>
            <ul>
              <li>More than 3 refund requests from the same account or payment method within a 12‑month period;</li>
              <li>Excessive usage clearly inconsistent with normal evaluation (e.g., automated bulk queries or usage exceeding 1,000 queries within the refund window);</li>
              <li>Evidence of fraudulent activity or chargeback abuse.</li>
            
            </ul>
            <p>
We will notify you if we deny a refund and provide the reason.</p>
          </section>
          
          <section>
            <h2>Cancellation Without Refund</h2>
            <p>
              You can cancel your subscription at any time from your account settings. Cancelling a subscription stops future renewals but does not automatically trigger a refund. If you cancel, you retain paid access until the end of the current billing period and will not be charged on renewal. To request money back, follow the refund request process above.
            </p>
            
          </section>
          
          <section>
            <h2>Annual Subscriptions</h2>
            <p>
              For annual subscriptions:
            </p>
            <p>The 30‑day refund window applies from the initial payment date for annual plans. If approved within 30 days, we will refund the full annual amount. After 30 days, no partial refunds will be issued for the remaining months, except as required by law or at our discretion.</p>
          </section>
          
          <h2>Third‑Party Purchases and Chargebacks</h2>
          <p>Purchases made through third parties (app stores, resellers) are subject to the third party’s refund policy. For chargebacks, Paddle handles disputes as the merchant of record; we will cooperate with Paddle in dispute resolution and may deny refunds while a dispute is pending.</p>
          <section>
            <h2>Questions?</h2>
            <p>
              If you have questions about our refund policy or need assistance, contact us:
            </p>
            <ul>
              <li>Email: <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
              <li>Response time: Within 2 business days</li>
            </ul>
            <p>
              We're committed to your satisfaction and will work with you to resolve any issues.
            </p>
          </section>
        </article>
      </div>
      
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
          font-size: 1.15rem;
          margin-bottom: 10px;
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
          border-color: rgba(109, 40, 217, 0.3);
          transform: translateX(5px);
        }
        
        .step-number {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6d28d9, #5b21b6);
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
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          .step {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}