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
          <p className="last-updated">Last Updated: December 9, 2025</p>
          
          <section>
            <h2>Overview</h2>
            <p>
              ClutterAI uses Paddle as our merchant of record for all subscription payments. All refund requests are subject to Paddle's refund policy and are processed at Paddle's discretion.
            </p>
          </section>
          
          <section>
            <h2>Consumer Right to Cancel (14 Days)</h2>
            <p>
              If you are a consumer in a jurisdiction with consumer protection laws (such as the EU, UK, or similar regions), you have the right to cancel your subscription within 14 days of purchase without giving any reason, provided you have not accessed or used the digital service.
            </p>
            <p>
              Once you access ClutterAI's features (such as connecting integrations, asking questions, or uploading files), you waive this 14-day cancellation right as permitted by law for digital content that has been accessed.
            </p>
          </section>
          
          <section>
            <h2>General Refund Policy</h2>
            <p>
              For purchases where the 14-day consumer cancellation right does not apply (either because the period has expired or you have accessed the service), refund requests are handled by Paddle on a case-by-case basis at their sole discretion.
            </p>
            <p>
              Paddle may refuse refund requests if they find evidence of fraud, refund abuse, or other manipulative behavior.
            </p>
          </section>
          
          <section>
            <h2>How to Request a Refund</h2>
            <p>To request a refund:</p>
            
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Contact Paddle Support</h3>
                  <p>
                    Visit <a href="https://paddle.com/support" target="_blank" rel="noopener noreferrer">paddle.com/support</a> or 
                    contact us at <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Provide Information</h3>
                  <p>
                    Include your order number, email address used for purchase, and reason for refund request
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Processing</h3>
                  <p>
                    Paddle will review your request and notify you of their decision. If approved, refunds are typically processed within 5-14 business days to your original payment method.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2>What Happens After a Refund</h2>
            <p>If your refund is approved by Paddle:</p>
            <ul>
              <li>Your subscription will be canceled</li>
              <li>You will lose access to paid features</li>
              <li>Your account will revert to the free tier</li>
              <li>You may retain access to export your data for a limited period</li>
            </ul>
          </section>
          
          <section>
            <h2>Subscriptions and Cancellations</h2>
            <p>
              You can cancel your subscription at any time from your account settings. Canceling stops future billing but does not automatically entitle you to a refund. You will retain access until the end of your current billing period.
            </p>
            <p>
              There are no refunds for unused portions of subscription periods unless required by law or approved by Paddle.
            </p>
          </section>
          
          <section>
            <h2>Third-Party Purchases</h2>
            <p>
              If you purchased through a third-party platform (such as an app store), that platform's refund policy applies instead of Paddle's. Contact the third party directly for refund requests.
            </p>
          </section>
          
          <section>
            <h2>Questions?</h2>
            <p>
              For questions about refunds or subscription billing, contact:
            </p>
            <ul>
              <li>Paddle Support: <a href="https://paddle.com/support" target="_blank" rel="noopener noreferrer">paddle.com/support</a></li>
              <li>ClutterAI Support: <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
            </ul>
            <p>
              This policy is subject to Paddle's Terms of Service and applicable consumer protection laws in your jurisdiction.
            </p>
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
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          .step {
            flex-direction: column;
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