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
          <p className="last-updated">Last Updated: December 21, 2025</p>

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
            <p>
              <strong>Contact Information:</strong>
            </p>
            <ul>
              <li>Business Address: Street 1, Sector D, Block DD, Bahria Town, Lahore, Pakistan</li>
              <li>Email: <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
              <li>Website: <a href="https://clutter-ai.com">clutter-ai.com</a></li>
            </ul>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>ClutterAI is an AI-powered knowledge search platform that allows you to:</p>
            <ul>
              <li>Connect third-party services (Google Drive, Gmail, Slack, Calendar, Notion)</li>
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
              applicable to their jurisdiction (e.g., 16 in some EU countries). If you are under that 
              age, parental consent is required. We will delete accounts that lack valid consent upon 
              discovery.
            </p>
          </section>

          <section>
            <h2>4. Subscription Plans and Payments</h2>

            <h3>4.1 Plans</h3>
            <p>ClutterAI offers multiple subscription plans:</p>
            <ul>
              <li>
                <strong>Free Tier:</strong> 3 questions every 12 hours with access to basic features
              </li>
              <li>
                <strong>Student Plan:</strong> $9/month (requires valid .edu email address for verification)
              </li>
              <li>
                <strong>Individual Plan:</strong> $19/month for unlimited questions and advanced features
              </li>
              <li>
                <strong>Team Plan:</strong> $15/member/month (minimum 3 members, includes team management and shared workspaces)
              </li>
            </ul>
            <p>
              Plan features, pricing, and availability are subject to change. Current plan details 
              are available at <a href="https://clutter-ai.com/pricing">clutter-ai.com/pricing</a>
            </p>

            <h3>4.2 Payment Processing and Merchant of Record</h3>
            <p>
              <strong>
                All payments for subscriptions are processed by Gumroad, Inc. ("Gumroad"), which 
                acts as our Merchant of Record.
              </strong>
            </p>
            <p>
              This means that <strong>Gumroad, not ClutterAI</strong>, is the seller of record for 
              all transactions. Gumroad:
            </p>
            <ul>
              <li>Processes all payments and stores payment information</li>
              <li>Issues receipts and invoices</li>
              <li>Handles payment disputes, chargebacks, and refund processing</li>
              <li>Collects and remits applicable taxes (VAT, sales tax, etc.)</li>
              <li>Manages subscription billing and renewals</li>
            </ul>
            <p>
              By purchasing a subscription, you agree to Gumroad's Terms of Service:{" "}
              <a
                href="https://gumroad.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://gumroad.com/terms
              </a>
            </p>
            <p>
              We receive limited transaction data from Gumroad (email, subscription status, purchase 
              date) solely to provide you access to the Service. We do not receive or store your full 
              payment card details.
            </p>

            <h3>4.3 Billing and Renewals</h3>
            <ul>
              <li>Subscriptions are billed monthly or annually based on your plan selection</li>
              <li>Billing occurs automatically on your renewal date through Gumroad</li>
              <li>You authorize Gumroad to charge your payment method on file</li>
              <li>Subscriptions automatically renew unless cancelled prior to the renewal date</li>
              <li>You will receive a receipt from Gumroad for each billing cycle</li>
            </ul>

            <h3>4.4 Price Changes</h3>
            <p>
              We reserve the right to modify subscription pricing. In the event of a price change:
            </p>
            <ul>
              <li>We will notify you at least 30 days in advance via email</li>
              <li>For annual subscriptions, we will notify you at least 7 days before renewal</li>
              <li>Price changes apply to renewals after the notice period</li>
              <li>Existing paid periods are not subject to retroactive price increases</li>
              <li>You may cancel before the renewal date to avoid the new pricing</li>
            </ul>

            <h3>4.5 Cancellation</h3>
            <p>You may cancel your subscription at any time through:</p>
            <ul>
              <li>Your ClutterAI account settings</li>
              <li>Your Gumroad account or library</li>
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
              We offer a <strong>30-day money-back guarantee</strong> for new subscriptions purchased 
              directly through Gumroad. This applies to your first purchase of any plan.
            </p>
            <p>
              <strong>To request a refund:</strong>
            </p>
            <ul>
              <li>Email <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a> within 30 days of your initial purchase</li>
              <li>Include your account email and Gumroad order/receipt number</li>
              <li>Provide a brief reason for the refund request (optional but helpful)</li>
            </ul>
            <p>
              Approved refunds will be processed by Gumroad within 7-14 business days. The refund 
              will be issued to your original payment method.
            </p>
            <p>
              <strong>Refund Limitations:</strong>
            </p>
            <ul>
              <li>Partial-period refunds for mid-cycle cancellations are not provided except as required by law or at our sole discretion</li>
              <li>Renewals (second month onwards) are generally not eligible for refunds unless required by law</li>
              <li>Purchases made through third-party resellers are subject to their refund policies</li>
              <li>Team plan refunds require approval from the team administrator</li>
            </ul>
            <p>
              See our complete <Link href="/refund">Refund Policy</Link> for additional details.
            </p>
          </section>

          <section>
            <h2>5. Acceptable Use</h2>
            <p>You agree to use the Service responsibly and NOT to:</p>
            <ul>
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Infringe on intellectual property rights or proprietary information</li>
              <li>Upload, transmit, or distribute malicious code, viruses, malware, or harmful content</li>
              <li>Attempt to gain unauthorized access to the Service, other accounts, or our systems</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to derive source code from the Service</li>
              <li>Use the Service to harass, abuse, threaten, or harm others</li>
              <li>Share your account credentials with unauthorized users</li>
              <li>Scrape, crawl, or extract data using automated tools or bots</li>
              <li>Use the Service for competitive analysis or to build a competing product</li>
              <li>Resell, sublicense, or redistribute the Service without authorization</li>
              <li>Circumvent usage limits, rate limiting, or other technical restrictions</li>
              <li>Interfere with or disrupt the Service or our infrastructure</li>
            </ul>
            <p>
              <strong>Violation of these terms may result in immediate account suspension or 
              termination without refund.</strong>
            </p>
          </section>

          <section>
            <h2>6. Content and Data</h2>

            <h3>6.1 Your Content</h3>
            <p>
              You retain full ownership rights to all content you upload, create, or connect to 
              ClutterAI ("Your Content"). This includes:
            </p>
            <ul>
              <li>Files and documents from connected services</li>
              <li>Email messages and attachments</li>
              <li>Slack messages and shared files</li>
              <li>Calendar events and meeting notes</li>
              <li>Notion pages and databases</li>
              <li>Questions, queries, and interactions with our AI</li>
            </ul>
            <p>
              By using the Service, you grant ClutterAI a limited, non-exclusive, royalty-free 
              license to:
            </p>
            <ul>
              <li>Store and process Your Content on our servers and infrastructure</li>
              <li>Index and analyze Your Content to provide search functionality</li>
              <li>Generate AI-powered answers and insights based on Your Content</li>
              <li>Display Your Content to you and authorized users on your team (for Team plans)</li>
              <li>Make backup copies for disaster recovery and business continuity</li>
            </ul>
            <p>
              <strong>Privacy Commitment:</strong>
            </p>
            <ul>
              <li>We do NOT use Your Content to train AI models or machine learning systems</li>
              <li>We do NOT sell, rent, or share Your Content with third parties for their purposes</li>
              <li>We only share Your Content with service providers necessary to operate the Service (see Privacy Policy)</li>
              <li>Your Content is encrypted in transit and at rest</li>
            </ul>

            <h3>6.2 Connected Services</h3>
            <p>
              When you connect third-party services (Google Drive, Gmail, Slack, Calendar, Notion), 
              you authorize ClutterAI to:
            </p>
            <ul>
              <li>Access content you've explicitly granted permission to via OAuth authorization</li>
              <li>Store OAuth tokens securely to maintain the connection</li>
              <li>Periodically sync content to keep search results current</li>
              <li>Read, index, and analyze the authorized content</li>
            </ul>
            <p>
              You can revoke our access at any time through:
            </p>
            <ul>
              <li>Your ClutterAI account settings</li>
              <li>The third-party service's permission management page</li>
            </ul>
            <p>
              <strong>Note:</strong> Revoking access will limit or disable functionality related 
              to that service but will not delete your ClutterAI account or other data.
            </p>

            <h3>6.3 AI-Generated Content</h3>
            <p>
              ClutterAI uses artificial intelligence and large language models to generate answers 
              based on Your Content. You acknowledge and agree that:
            </p>
            <ul>
              <li>AI-generated responses may contain errors, inaccuracies, or outdated information</li>
              <li>AI responses are generated based on patterns and should not be considered definitive</li>
              <li>You are solely responsible for verifying the accuracy of AI-generated information before relying on it</li>
              <li>We are not liable for decisions, actions, or outcomes based on AI-generated responses</li>
              <li>AI responses do not constitute professional advice (legal, medical, financial, etc.)</li>
            </ul>
            <p>
              For critical decisions, always verify information with authoritative sources and 
              consult qualified professionals.
            </p>
          </section>

          <section>
            <h2>7. Intellectual Property</h2>
            <p>
              The Service, including its software, algorithms, user interface, design elements, 
              logos, trademarks, and all related intellectual property, is owned by ClutterAI and 
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to access and use 
              the Service for your personal or internal business purposes. You may not:
            </p>
            <ul>
              <li>Copy, modify, distribute, or create derivative works from the Service</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>Use our trademarks, logos, or branding without written permission</li>
              <li>Frame, mirror, or replicate any part of the Service</li>
            </ul>
          </section>

          <section>
            <h2>8. Third-Party Services and Integrations</h2>
            <p>
              ClutterAI integrates with and relies on third-party services and providers:
            </p>
            <ul>
              <li><strong>Gumroad:</strong> Payment processing and merchant of record</li>
              <li><strong>Google (Drive, Gmail, Calendar):</strong> OAuth integration and data access</li>
              <li><strong>Slack:</strong> Workspace integration</li>
              <li><strong>Notion:</strong> Workspace and database integration</li>
              <li><strong>OpenAI:</strong> AI and language model processing</li>
              <li><strong>Convex:</strong> Database infrastructure</li>
              <li><strong>Vercel:</strong> Hosting and deployment</li>
              <li><strong>Pinecone:</strong> Vector search infrastructure</li>
            </ul>
            <p>
              Your use of these third-party services through ClutterAI is subject to their respective 
              terms of service and privacy policies. Links to key policies:
            </p>
            <ul>
              <li>Gumroad: <a href="https://gumroad.com/terms" target="_blank" rel="noopener noreferrer">https://gumroad.com/terms</a></li>
              <li>Google: <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">https://policies.google.com/terms</a></li>
              <li>Slack: <a href="https://slack.com/terms-of-service" target="_blank" rel="noopener noreferrer">https://slack.com/terms-of-service</a></li>
              <li>Notion: <a href="https://www.notion.so/Terms-and-Privacy" target="_blank" rel="noopener noreferrer">https://www.notion.so/Terms-and-Privacy</a></li>
            </ul>
            <p>
              We are not responsible for the availability, functionality, security, or practices of 
              third-party services. Service disruptions or changes to third-party APIs may affect 
              ClutterAI's functionality.
            </p>
          </section>

          <section>
            <h2>9. Service Availability and Support</h2>
            <p>
              We strive to provide reliable, continuous service but cannot guarantee uninterrupted 
              availability. The Service may be temporarily unavailable due to:
            </p>
            <ul>
              <li>Scheduled maintenance (announced in advance when possible)</li>
              <li>Emergency maintenance or security updates</li>
              <li>Third-party service outages</li>
              <li>Technical issues, infrastructure failures, or force majeure events</li>
            </ul>
            <p>
              We will make reasonable efforts to notify users of planned downtime and restore service 
              promptly during outages.
            </p>
          </section>

          <section>
            <h2>10. Disclaimers</h2>
            <p>
              <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY 
              KIND, EITHER EXPRESS OR IMPLIED.</strong>
            </p>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT 
              LIMITED TO:
            </p>
            <ul>
              <li>Merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Uninterrupted, timely, secure, or error-free operation</li>
              <li>Accuracy, reliability, or completeness of content or AI responses</li>
              <li>Freedom from viruses, malware, or other harmful components</li>
              <li>Results obtained from using the Service</li>
              <li>Correction of errors or defects</li>
            </ul>
            <p>
              Some jurisdictions do not allow the exclusion of implied warranties, so some of the 
              above exclusions may not apply to you. You may have additional rights under local law.
            </p>
          </section>

          <section>
            <h2>11. Limitation of Liability</h2>
            <p>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLUTTERAI AND ITS AFFILIATES, OFFICERS, 
              DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:</strong>
            </p>
            <ul>
              <li>Indirect, incidental, consequential, special, punitive, or exemplary damages</li>
              <li>Loss of profits, revenue, data, goodwill, or business opportunities</li>
              <li>Business interruption or work stoppage</li>
              <li>Cost of substitute services or procurement</li>
              <li>Damages arising from use or inability to use the Service</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Errors, omissions, or inaccuracies in AI-generated content</li>
              <li>Actions or inactions of third-party services</li>
            </ul>
            <p>
              <strong>LIABILITY CAP:</strong> Our total aggregate liability for all claims arising 
              out of or relating to these Terms or the Service shall not exceed the amount you paid 
              to ClutterAI in the 12 months preceding the claim.
            </p>
            <p>
              <strong>Exceptions:</strong> The above limitations do not apply to liability arising from:
            </p>
            <ul>
              <li>Gross negligence or willful misconduct</li>
              <li>Fraud or fraudulent misrepresentation</li>
              <li>Death or personal injury caused by our negligence</li>
              <li>Breaches of data protection obligations (where applicable)</li>
              <li>Other liability that cannot be excluded under applicable law</li>
            </ul>
            <p>
              Some jurisdictions do not allow these limitations, so they may not apply to you in 
              their entirety.
            </p>
          </section>

          <section>
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless ClutterAI, its affiliates, officers, 
              directors, employees, agents, and service providers from and against any claims, 
              liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) 
              arising from or relating to:
            </p>
            <ul>
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms or applicable laws</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Your Content or any content you submit, post, or transmit</li>
              <li>Your breach of any representations or warranties in these Terms</li>
            </ul>
            <p>
              We reserve the right to assume exclusive defense and control of any matter subject to 
              indemnification by you, and you agree to cooperate with our defense of such claims.
            </p>
          </section>

          <section>
            <h2>13. Termination</h2>

            <h3>13.1 Termination by You</h3>
            <p>
              You may terminate your account at any time by:
            </p>
            <ul>
              <li>Deleting your account through account settings</li>
              <li>Contacting support at <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a></li>
            </ul>

            <h3>13.2 Termination by Us</h3>
            <p>
              We reserve the right to suspend or terminate your account and access to the Service, 
              with or without notice, for:
            </p>
            <ul>
              <li>Violation of these Terms or our policies</li>
              <li>Fraudulent, abusive, or illegal activity</li>
              <li>Non-payment of fees or failed payment attempts</li>
              <li>Extended periods of inactivity</li>
              <li>Requests by law enforcement or government agencies</li>
              <li>Any reason, at our sole discretion, with reasonable notice when feasible</li>
            </ul>

            <h3>13.3 Effect of Termination</h3>
            <p>
              Upon termination of your account:
            </p>
            <ul>
              <li>Your access to the Service will be immediately disabled</li>
              <li>We will retain your data for 30 days to allow for recovery or reactivation</li>
              <li>After 30 days, we will securely delete or anonymize your personal data</li>
              <li>Backup copies will be purged within 90 days</li>
              <li>Transaction records may be retained by Gumroad as required for legal, tax, and accounting purposes</li>
              <li>No refunds will be provided for unused subscription time (except as required by law)</li>
            </ul>
            <p>
              You may request a data export before deletion by contacting 
              <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
            </p>

            <h3>13.4 Survival</h3>
            <p>
              The following sections survive termination: Intellectual Property, Disclaimers, 
              Limitation of Liability, Indemnification, Governing Law, and any other provisions 
              that by their nature should survive.
            </p>
          </section>

          <section>
            <h2>14. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. When we make material changes:
            </p>
            <ul>
              <li>We will notify you via email to your registered email address</li>
              <li>We will post a prominent notice on the Service</li>
              <li>We will update the "Last Updated" date at the top of this document</li>
              <li>We will provide at least 30 days' notice for changes that materially affect your rights</li>
            </ul>
            <p>
              Your continued use of the Service after the effective date of changes constitutes your 
              acceptance of the updated Terms. If you do not agree to the changes, you must stop 
              using the Service and may cancel your account.
            </p>
          </section>

          <section>
            <h2>15. Governing Law and Dispute Resolution</h2>

            <h3>15.1 Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of Pakistan, 
              without regard to its conflict of law principles.
            </p>

            <h3>15.2 Jurisdiction and Venue</h3>
            <p>
              Any disputes arising out of or relating to these Terms or the Service shall be subject 
              to the exclusive jurisdiction of the courts located in Lahore, Pakistan. You consent 
              to personal jurisdiction in these courts.
            </p>

            <h3>15.3 Consumer Rights</h3>
            <p>
              Nothing in these Terms affects your statutory rights as a consumer under applicable 
              local law, including EU consumer protection laws. If you are an EU consumer, you may 
              also have the right to bring proceedings in the courts of your country of residence.
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
              If any provision of these Terms is found to be invalid or unenforceable, the remaining 
              provisions will continue in full force and effect.
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
              control, including natural disasters, wars, acts of terrorism, internet outages, or 
              third-party service failures.
            </p>
          </section>

          <section>
            <h2>17. Contact Us</h2>
            <p>
              If you have questions, concerns, or feedback about these Terms, please contact us:
            </p>
            <ul>
              <li>
                Email: <a href="mailto:support@clutter-ai.com">support@clutter-ai.com</a>
              </li>
              <li>
                Subject Line: "Terms of Service Inquiry"
              </li>
              <li>
                Address: Street 1, Sector D, Block DD, Bahria Town, Lahore, Pakistan
              </li>
            </ul>
            <p>
              For payment and subscription-related inquiries, you may also contact Gumroad at:{" "}
              <a href="https://gumroad.com/contact" target="_blank" rel="noopener noreferrer">
                https://gumroad.com/contact
              </a>
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
          font-weight: 500;
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
          h1 { font-size: 2rem; }
          h2 { font-size: 1.5rem; }
          
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