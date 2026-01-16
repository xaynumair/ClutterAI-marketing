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
          <p className="last-updated">Last Updated: January 16, 2026</p>
          
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
              When you connect third-party services (Google Drive, Gmail, Slack, Calendar, Notion), we collect 
              and store:
            </p>
            <ul>
              <li>Files and documents you've granted us access to</li>
              <li>Email messages and metadata</li>
              <li>Slack messages and channel information</li>
              <li>Calendar events and details</li>
              <li>Notion pages, databases, and workspace content</li>
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
            
            <h3>2.4 Payment and Transaction Information</h3>
            <p>
              <strong>All payments are processed by Gumroad, which acts as our Merchant of Record.</strong> 
              This means Gumroad, not ClutterAI, is the seller of record for all transactions. We do not 
              store your credit card information. Gumroad collects and processes:
            </p>
            <ul>
              <li>Payment information (credit/debit card details)</li>
              <li>Billing address and contact information</li>
              <li>Transaction history and receipts</li>
              <li>Tax information (VAT, sales tax, etc.)</li>
              <li>Purchase metadata</li>
            </ul>
            <p>
              Gumroad's use of your payment information is governed by their Privacy Policy, 
              available at: <a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer">https://gumroad.com/privacy</a>
            </p>
            <p>
              We receive limited transaction data from Gumroad (such as your email, subscription status, 
              and purchase date) solely to provide you access to the Service. We do not receive your 
              full payment card details.
            </p>
          </section>
          
          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Provide and maintain the Service</li>
              <li>Process your questions through our AI-powered search engine</li>
              <li>Index and enable semantic search across your connected content</li>
              <li>Generate relevant search results using natural language processing</li>
              <li>Verify subscription status and grant access (via Paddle)</li>
              <li>Send service updates and support communications</li>
              <li>Improve our Service and develop new features</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h3>3.1 AI Processing</h3>
            <p>
              To provide intelligent search functionality, we process your queries and content using:
            </p>
            <ul>
              <li><strong>OpenAI GPT-4:</strong> Your search queries are sent to OpenAI to understand intent and generate responses. OpenAI processes queries in accordance with their data usage policies for API customers.</li>
              <li><strong>Pinecone Vector Database:</strong> Your document content is converted to vector embeddings and stored in Pinecone to enable semantic search. This allows you to find information based on meaning, not just keywords.</li>
            </ul>
            <p>
              <strong>Important: We do not use your data to train AI models.</strong> Your content is processed 
              solely to provide search functionality to you. OpenAI's API does not use customer data submitted 
              via API to train or improve their models. Your content remains private and is only used to answer 
              your specific questions.
            </p>
          </section>
          
          <section>
            <h2>4. Data Sharing and Third-Party Service Providers</h2>
            <p>
              To provide ClutterAI's functionality, we share your information with trusted third-party 
              service providers. These providers process data only as necessary to deliver our Service 
              and are bound by data processing agreements to protect your information.
            </p>
            
            <h3>4.1 Essential Service Providers</h3>
            <ul>
              <li><strong>Gumroad:</strong> Merchant of record for all transactions, payment processing, tax handling, and subscription management. <a href="https://gumroad.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Convex:</strong> Backend database and authentication infrastructure for storing your account data and preferences. <a href="https://www.convex.dev/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Vercel:</strong> Web hosting and deployment platform. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>OpenAI:</strong> Natural language processing and AI-powered query understanding. Your search queries are sent to OpenAI's API to generate intelligent responses. OpenAI does not use API customer data for training. <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><strong>Pinecone:</strong> Vector database infrastructure for semantic search. Your document content is converted to vector embeddings and stored in Pinecone to enable meaning-based search across your connected services. <a href="https://www.pinecone.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            </ul>
            
            <h3>4.2 Data Processing Agreements</h3>
            <p>
              We have data processing agreements in place with all service providers listed above to ensure:
            </p>
            <ul>
              <li>Your data is processed only for the purposes described in this policy</li>
              <li>Appropriate security measures are maintained</li>
              <li>Data is not used for their own purposes or shared with other parties</li>
              <li>Compliance with applicable data protection regulations (GDPR, CCPA, etc.)</li>
            </ul>
            
            <h3>4.3 What We Do NOT Do</h3>
            <p><strong>We do not:</strong></p>
            <ul>
              <li>Sell your personal data to third parties</li>
              <li>Use your data for advertising purposes</li>
              <li>Share your data with non-essential third parties</li>
              <li>Train AI models on your private content</li>
              <li>Allow service providers to use your data for their own purposes</li>
            </ul>
            
            <h3>4.4 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law, court order, or government request, 
              or to protect our rights, property, or safety.
            </p>
            
            <h3>4.5 Legal Basis for Processing (EU/UK Users)</h3>
            <p>If you are an EU/UK resident, we process personal data on the following legal bases:</p>
            <ul>
              <li><strong>Contract:</strong> To provide the Service and perform our contract with you (account management, subscription access, connected services integration, search functionality).</li>
              <li><strong>Legitimate Interest:</strong> To improve the Service, detect fraud, ensure security, and analyze usage patterns (we balance these interests against your rights).</li>
              <li><strong>Consent:</strong> Where required (e.g., optional marketing communications or explicit opt‑in features). You may withdraw consent at any time.</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations.</li>
            </ul>
            
            <h3>4.6 Business Transfers</h3>
            <p>
              If ClutterAI is acquired or merged with another company, your information may be 
              transferred as part of that transaction. We will notify you via email and/or a prominent 
              notice on our Service of any change in ownership or use of your personal information.
            </p>
          </section>
          
          <section>
            <h2>5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information:
            </p>
            <ul>
              <li>TLS/SSL encryption for data in transit</li>
              <li>Encryption at rest for sensitive data</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular security audits and monitoring</li>
              <li>Secure credential storage (passwords are hashed and salted)</li>
              <li>OAuth tokens encrypted and stored securely</li>
            </ul>
            <p>
              In the event of a data breach affecting personal data, we will notify affected users 
              and regulators as required by applicable law (including within 72 hours for GDPR-covered incidents).
            </p>
            <p>
              However, no system is 100% secure. While we strive to protect your data using commercially 
              reasonable measures, we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2>6. Your Rights and Choices</h2>
            
            <h3>6.1 General Rights</h3>
            <p>Subject to local law, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correct:</strong> Update inaccurate or incomplete information</li>
              <li><strong>Delete:</strong> Request deletion of your account and associated data</li>
              <li><strong>Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
              <li><strong>Lodge a Complaint:</strong> File a complaint with your data protection authority</li>
            </ul>
            
            <h3>6.2 How to Exercise Your Rights</h3>
            <p>
              To exercise these rights, email <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> with 
              "Data Request" in the subject line. Include your account email and a description of your request.
            </p>
            <p>
              We will acknowledge receipt within 5 business days and respond substantively within 30 days 
              (or as required by applicable law). If we cannot comply, we will explain the reasons and any 
              available remedies.
            </p>
            
            <h3>6.3 EU/UK Residents</h3>
            <p>
              EU and UK residents may lodge a complaint with their local data protection authority. 
              A list of EU data protection authorities is available at: 
              <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer">https://edpb.europa.eu/about-edpb/board/members_en</a>
            </p>
            
            <h3>6.4 California Residents (CCPA/CPRA)</h3>
            <p>
              If you are a California resident, you have additional rights under the California Consumer 
              Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
            </p>
            <ul>
              <li>Right to know what personal information is collected, used, shared, or sold</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of the sale or sharing of personal information</li>
              <li>Right to correct inaccurate personal information</li>
              <li>Right to limit use of sensitive personal information</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
            <p>
              <strong>We do not sell or share personal information</strong> as defined by the CCPA/CPRA.
            </p>
            <p>
              To exercise California privacy rights, email <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> with 
              "California Privacy Request" in the subject line.
            </p>
            
            <h3>6.5 Subscription and Payment Management</h3>
            <p>
              For subscription changes, billing questions, or refund requests, please contact Gumroad 
              directly or manage your subscription through your Gumroad account. You can also email 
              us at <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> and we will assist you.
            </p>
            
            <h3>6.6 Connected Services Management</h3>
            <p>
              You can disconnect any integrated service (Gmail, Google Drive, Slack, Calendar, Notion) at any 
              time through your account settings. Disconnecting will:
            </p>
            <ul>
              <li>Immediately revoke ClutterAI's access to that service</li>
              <li>Stop syncing new content from that service</li>
              <li>Retain previously indexed content for up to 30 days (for data recovery)</li>
              <li>Permanently delete all associated data after 30 days</li>
            </ul>
          </section>
          
          <section>
            <h2>7. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide the Service and fulfill 
              the purposes described in this Privacy Policy:
            </p>
            <ul>
              <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
              <li><strong>After Account Deletion:</strong> Most data deleted within 30 days; backups purged within 90 days</li>
              <li><strong>Vector Embeddings:</strong> Deleted from Pinecone within 30 days of account deletion</li>
              <li><strong>Transaction Records:</strong> Retained by Gumroad as required for legal, tax, and accounting purposes (typically 7 years)</li>
              <li><strong>Legal Obligations:</strong> Data retained as required by law</li>
              <li><strong>Aggregated/Anonymized Data:</strong> May be retained indefinitely for analytics and service improvement</li>
            </ul>
            <p>
              If you require earlier deletion or a data export, contact <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
            </p>
          </section>
          
          <section>
            <h2>8. Cookies and Tracking</h2>
            <p>
              We use essential cookies necessary for the Service to function:
            </p>
            <ul>
              <li><strong>Authentication Cookies:</strong> To keep you logged in</li>
              <li><strong>Session Cookies:</strong> To maintain your session and preferences</li>
              <li><strong>Security Cookies:</strong> To detect fraud and abuse</li>
            </ul>
            <p>
              <strong>We do not use advertising or third-party tracking cookies.</strong>
            </p>
          </section>
          
          <section>
            <h2>9. Children's Privacy</h2>
            <p>
              The Service is not intended for children under 13 (or 16 in the EU/UK). If you are under 
              the age of consent in your jurisdiction, you must obtain parental consent before using 
              the Service.
            </p>
            <p>
              If we learn we have collected personal data from a child without appropriate consent, 
              we will delete it promptly. If you believe we may have collected information from a child, 
              please contact us at <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
            </p>
          </section>
          
          <section>
            <h2>10. International Data Transfers</h2>
            <p>
              Your data may be transferred to and processed in the United States and other countries 
              where our service providers operate. These countries may have different data protection 
              laws than your country of residence.
            </p>
            <p>
              For transfers from the EEA/UK to countries without adequate data protection laws, we rely 
              on appropriate safeguards such as:
            </p>
            <ul>
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions by the European Commission</li>
              <li>Other lawful transfer mechanisms under GDPR</li>
            </ul>
            <p>
              You may request a copy of the safeguards in place by contacting 
              <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
            </p>
          </section>
          
          <section>
            <h2>11. Third-Party Services</h2>
            <p>
              When you connect third-party services (Google Drive, Gmail, Slack, Calendar, Notion), 
              you are also subject to their respective privacy policies:
            </p>
            <ul>
              <li>Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
              <li>Slack: <a href="https://slack.com/privacy-policy" target="_blank" rel="noopener noreferrer">https://slack.com/privacy-policy</a></li>
              <li>Notion: <a href="https://www.notion.so/Privacy-Policy" target="_blank" rel="noopener noreferrer">https://www.notion.so/Privacy-Policy</a></li>
            </ul>
            <p>
              We only access data you explicitly authorize through OAuth permissions. You can revoke 
              our access at any time through your account settings or the third-party service directly.
            </p>
          </section>
          
          <section>
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors.
            </p>
            <p>
              We will notify you of material changes by:
            </p>
            <ul>
              <li>Sending an email to your registered email address</li>
              <li>Posting a prominent notice on our Service</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
            </ul>
            <p>
              Your continued use of the Service after changes take effect constitutes acceptance of 
              the updated Privacy Policy.
            </p>
          </section>
          
          <section>
            <h2>13. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data 
              practices, please contact us at:
            </p>
            <ul>
              <li>Email: <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
              <li>Subject Line: "Privacy Inquiry"</li>
            </ul>
            <p>
              For payment and subscription inquiries, contact Gumroad at: 
              <a href="https://gumroad.com/contact" target="_blank" rel="noopener noreferrer">https://gumroad.com/contact</a>
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
          font-size: 1.25rem;
          margin: 30px 0 15px;
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