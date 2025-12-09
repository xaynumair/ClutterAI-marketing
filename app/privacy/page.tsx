"use client";

import Link from "next/link";

export default function Privacy() {
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
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: December 3, 2025</p>
          
          <section>
            <h2>1. Introduction</h2>
            <p>
              ClutterAI ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our service at app.clutter-ai.com (the "Service").
            </p>
          </section>
          
          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Account Information</h3>
            <p>
              When you create an account, we collect:
            </p>
            <ul>
              <li>Email address</li>
              <li>Name</li>
              <li>Password (encrypted)</li>
              <li>Profile information you choose to provide</li>
            </ul>
            
            <h3>2.2 Connected Service Data</h3>
            <p>
              When you connect third-party services (Google Drive, Gmail, Slack, Calendar), we collect 
              and store:
            </p>
            <ul>
              <li>Files and documents you've granted us access to</li>
              <li>Email messages and metadata</li>
              <li>Slack messages and channel information</li>
              <li>Calendar events and details</li>
            </ul>
            
            <h3>2.3 Usage Information</h3>
            <p>We automatically collect:</p>
            <ul>
              <li>Questions you ask our AI</li>
              <li>Search queries and interactions</li>
              <li>Device information and IP address</li>
              <li>Browser type and operating system</li>
              <li>Usage statistics and analytics</li>
            </ul>
            
            <h3>2.4 Payment Information</h3>
            <p>
              <strong>Payment processing is handled by Paddle, our third-party payment processor.</strong> 
              We do not store your credit card information. Paddle collects and processes:
            </p>
            <ul>
              <li>Credit/debit card information</li>
              <li>Billing address</li>
              <li>Transaction history</li>
            </ul>
            <p>
              Paddle's use of your payment information is governed by their Privacy Policy, 
              available at: <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener">https://www.paddle.com/legal/privacy</a>
            </p>
          </section>
          
          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide and maintain the Service</li>
              <li>Process your questions through our AI engine</li>
              <li>Index and search your connected content</li>
              <li>Process payments and manage subscriptions (via Paddle)</li>
              <li>Send service updates and support communications</li>
              <li>Improve our Service and develop new features</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              <strong>We do NOT use your data to train AI models.</strong> Your content remains private 
              and is only used to answer your specific questions.
            </p>
          </section>
          
          <section>
            <h2>4. Data Sharing and Disclosure</h2>
            <p>We share your information only in these circumstances:</p>
            
            <h3>4.1 Service Providers</h3>
            <ul>
              <li><strong>Paddle:</strong> Payment processing and merchant of record</li>
              <li><strong>Convex:</strong> Database and backend infrastructure</li>
              <li><strong>Vercel:</strong> Hosting and deployment</li>
              <li><strong>OpenAI:</strong> AI processing (prompts only, not stored content)</li>
              <li><strong>Pinecone:</strong> Vector search infrastructure</li>
            
            </ul>
            
            <h3>4.2 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, court order, or government request.
            </p>
            
            <h3>4.3 Legal Basis for Processing
              <ul>
              <p>If you are an EU/UK resident, we process personal data on the following legal bases:</p>
              <li><strong>Contract:</strong>to provide the Service and perform our contract with you (account management, billing, access to connected services).</li>
              <li><strong>Legitimate interest:</strong>to improve the Service, detect fraud, and ensure security (we balance these interests against your rights).</li>
              <li><strong>Consent:</strong>where required (e.g., optional marketing communications or explicit opt‑in features).
You may withdraw consent at any time where processing is based on consent.</li>
</ul>
            </h3>
            <h3>4.4 Business Transfers</h3>
            <p>
              If ClutterAI is acquired or merged with another company, your information may be 
              transferred as part of that transaction.
            </p>
          </section>
          
          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards such as TLS in transit, encryption at rest, access controls, and regular security reviews. In the event of a data breach affecting personal data, we will notify affected users and regulators as required by law and, where applicable, within 72 hours of becoming aware of the breach.
            </p>
            
            <p>
              However, no system is 100% secure. While we strive to protect your data, we cannot 
              guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2>6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <p>Subject to local law, you have the right to: access, correct, delete, restrict processing, object to processing, receive a portable copy, and lodge a complaint with a supervisory authority. To exercise these rights, email <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> with “Data Request” in the subject and include your account email and a description of the request. We will acknowledge receipt within 5 business days and respond substantively within 30 days (or as required by applicable law). If we cannot comply, we will explain the reasons and any available remedies. EU/UK residents may also lodge a complaint with their local data protection authority.</p>
            <p>If you are a California resident, you have additional rights under the CCPA/CPRA, including the right to know, delete, and opt out of the sale of personal information. We do not sell personal information as defined by the CCPA. To exercise California privacy rights, email support@clutter‑ai.com with “California Privacy Request.”</p>
           
          </section>
          
          <section>
            <h2>7. Data Retention</h2>
            <p>
             We retain account data while your account is active. After account deletion or refund, we retain data for 30 days for recovery and fraud prevention and purge backups within 90 days, except for transaction records required for legal or tax purposes (retained by Paddle). We may retain aggregated or anonymized data indefinitely. If you require earlier deletion or an export, contact <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
            </p>
           
          </section>
          
          <section>
            <h2>8. Cookies and Tracking</h2>
            <p>
              We use essential cookies for authentication and session management. We do not use 
              advertising or tracking cookies.
            </p>
          </section>
          
          <section>
            <h2>9. Children's Privacy</h2>
            <p>
             The Service is not intended for children under 13. If you are under the age of consent in your jurisdiction (for example, 16 in some EU countries), you must obtain parental consent before using the Service. If we learn we have collected personal data from a child without consent, we will delete it.
            </p>
          </section>
          
          <section>
            <h2>10. International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in the United States and other countries. Where transfers occur from the EEA/UK, we rely on appropriate safeguards such as Standard Contractual Clauses or other lawful transfer mechanisms. You may request a copy of the safeguards by contacting support@clutter‑ai.com.
            </p>
          </section>
          
          <section>
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We'll notify you of significant 
              changes via email or a notice on our Service.
            </p>
          </section>
          
          <section>
            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
              <li>Website: <a href="https://clutter-ai.com/contact">clutter-ai.com/contact</a></li>
            </ul>
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
          right: 10%;
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
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}