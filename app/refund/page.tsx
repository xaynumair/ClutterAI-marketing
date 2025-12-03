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
              At ClutterAI, we stand behind our product. We offer a <strong>30-day money-back 
              guarantee</strong> for all new paid subscriptions. If you're not satisfied with our 
              Service for any reason, we'll refund your payment in full—no questions asked.
            </p>
          </section>
          
          <section>
            <h2>Eligibility</h2>
            <p>You are eligible for a refund if:</p>
            <ul>
              <li>You are a first-time subscriber to a paid plan</li>
              <li>You request a refund within 30 days of your initial payment</li>
              <li>Your account is in good standing (no violations of our Terms of Service)</li>
            </ul>
            
            <p><strong>Refunds are NOT available for:</strong></p>
            <ul>
              <li>Renewals or subsequent billing cycles (only the first month/year)</li>
              <li>Free tier users (no payment made)</li>
              <li>Accounts terminated for Terms of Service violations</li>
              <li>Partial refunds for unused portions of a subscription period</li>
              <li>Requests made after 30 days from the initial payment date</li>
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
                  <h3>Provide Information</h3>
                  <p>
                    Include your account email, reason for refund (optional), and order/transaction ID 
                    if available
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Confirmation</h3>
                  <p>
                    We'll review your request and respond within 2 business days with confirmation
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Processing</h3>
                  <p>
                    Once approved, refunds are processed within 5-10 business days via FastSpring
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2>Refund Processing</h2>
            <p>
              <strong>All refunds are processed through FastSpring</strong>, our payment processor. 
              Once we approve your refund:
            </p>
            <ul>
              <li>FastSpring will process the refund to your original payment method</li>
              <li>Processing typically takes 5-10 business days</li>
              <li>The exact timeframe depends on your bank or card issuer</li>
              <li>You'll receive a confirmation email from FastSpring when processed</li>
            </ul>
            <p>
              For questions about refund status, you can contact FastSpring support at: 
              <a href="https://fastspring.com/contact/" target="_blank" rel="noopener">https://fastspring.com/contact/</a>
            </p>
          </section>
          
          <section>
            <h2>What Happens After a Refund</h2>
            <p>Once your refund is processed:</p>
            <ul>
              <li>Your paid subscription will be canceled immediately</li>
              <li>Your account will revert to the free tier (3 questions per 12 hours)</li>
              <li>You'll retain access to your connected data and integrations</li>
              <li>You can upgrade again at any time</li>
            </ul>
          </section>
          
          <section>
            <h2>Team Plan Refunds</h2>
            <p>
              For Team plan subscriptions:
            </p>
            <ul>
              <li>Only the account administrator can request a refund</li>
              <li>The refund applies to all team members</li>
              <li>Refunds are prorated based on the number of active members</li>
              <li>Individual team members cannot request separate refunds</li>
            </ul>
          </section>
          
          <section>
            <h2>Abuse Prevention</h2>
            <p>
              While we offer generous refund terms, we reserve the right to deny refunds for:
            </p>
            <ul>
              <li>Repeated refund requests (multiple subscriptions/cancellations)</li>
              <li>Excessive usage before requesting refund (e.g., asking 1000+ questions then requesting refund)</li>
              <li>Fraudulent activity or payment disputes</li>
              <li>Attempts to abuse the refund policy</li>
            </ul>
          </section>
          
          <section>
            <h2>Cancellation Without Refund</h2>
            <p>
              You can cancel your subscription at any time from your account settings. When you cancel:
            </p>
            <ul>
              <li>You retain access until the end of your current billing period</li>
              <li>No refund is provided for the remaining time</li>
              <li>Your subscription will not renew</li>
              <li>Your account reverts to the free tier automatically</li>
            </ul>
            <p>
              Cancellation is different from requesting a refund. See our 
              <Link href="/terms">Terms of Service</Link> for more details.
            </p>
          </section>
          
          <section>
            <h2>Annual Subscriptions</h2>
            <p>
              For annual subscriptions:
            </p>
            <ul>
              <li>The 30-day refund window applies from your initial payment date</li>
              <li>Full refund of the annual amount if requested within 30 days</li>
              <li>No partial refunds for months 2-12</li>
              <li>You may cancel at any time but receive no refund after 30 days</li>
            </ul>
          </section>
          
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