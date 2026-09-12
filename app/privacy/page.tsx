import type { Metadata } from "next";
import Link from "next/link";
import { Legal } from "../components/legal/Legal";
import { POSTAL_ADDRESS, SUPPORT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What ClutterAI collects, which providers process it, how long it is kept, and the rights you have over it.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: false },
};

const UPDATED = "September 7, 2026";

export default function Privacy() {
  return (
    <Legal
      title="Privacy Policy"
      updated={UPDATED}
      summary={
        <ul>
          <li>We store what you connect (email, files, chat, tickets, code) and what you make in ClutterAI (documents, notes, boards, tables, transcripts) so we can answer you and run your agents.</li>
          <li>Your content is processed by a short list of providers under their API terms — Anthropic, OpenAI, Deepgram, Pinecone, Convex, Vercel, Resend, Lemon Squeezy — and <strong>never used to train AI models</strong>.</li>
          <li>Teammates see only what you explicitly share. Your Gmail, Slack and other connected sources are yours alone.</li>
          <li>Disconnect an app and its indexed data is gone within 30 days. Delete your account and the rest follows.</li>
          <li>No advertising, no data sales, no third-party tracking cookies, no analytics scripts on this website.</li>
        </ul>
      }
    >
      <section>
        <h2>1. Introduction</h2>
        <p>
          ClutterAI (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, disclose and safeguard your information when you use the ClutterAI
          application at app.clutter-ai.com, the ClutterAI app for Slack, and this website at clutter-ai.com
          (together, the &ldquo;Service&rdquo;).
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>

        <h3>2.1 Account information</h3>
        <ul>
          <li>Email address and display name</li>
          <li>If you sign in with a password: the password, stored only as a salted hash</li>
          <li>If you sign in with Google: your Google account email, name and profile picture</li>
          <li>Preferences you set, including how you told us you plan to use ClutterAI during onboarding</li>
        </ul>

        <h3>2.2 Connected service data</h3>
        <p>
          When you connect a third-party service through OAuth, we collect and store the content you grant
          access to so that it can be indexed, searched and used to answer your questions. Which content depends
          on the service:
        </p>
        <ul>
          <li><strong>Gmail:</strong> email messages, attachments metadata and headers (read-only scope)</li>
          <li><strong>Google Drive:</strong> the files and documents you grant access to (read-only scope)</li>
          <li><strong>Google Calendar:</strong> events, attendees and details (read-only scope)</li>
          <li><strong>Slack:</strong> messages in the channels you select, direct messages you send to the ClutterAI app, and channel and user information</li>
          <li><strong>Notion and Confluence:</strong> pages, databases and workspace content</li>
          <li><strong>GitHub and GitLab:</strong> repositories, files, issues, pull or merge requests and their discussions</li>
          <li><strong>Linear, Jira and Trello:</strong> issues, cards, comments and project metadata</li>
          <li><strong>Airtable:</strong> bases, tables, records and field definitions</li>
          <li><strong>Zendesk:</strong> tickets, comments and requester details</li>
        </ul>
        <p>
          Some connectors, such as GitHub and GitLab, do not offer a purely read-only permission for private
          repositories; we request the narrowest scope the provider allows and use it only to read.
        </p>

        <h3>2.3 Content you create in ClutterAI</h3>
        <ul>
          <li>Questions you ask and the answers you receive, including which sources were used</li>
          <li>Folio documents, Notes pages and labels, Easel boards and Facet sheets, including files you upload to Facet (CSV or Excel)</li>
          <li>Cadence meetings you create, their agendas, links and invitations, and the people directory you build (names, roles, companies and email addresses of attendees)</li>
          <li>Chime tasks, reminders and the notification history that goes with them</li>
          <li>Stride accounts, deals, contacts, logged activity (notes, calls and emails you log or paste), proposed updates and their transcript quotes, drafts and research briefs</li>
          <li>Files generated and saved by Forge, and their versions</li>
          <li>Attune transcripts, notes, flashcards and the action items extracted from them</li>
          <li>Tasks, commitments and decisions that agents extract from the above</li>
        </ul>

        <h3>2.4 Audio (Attune)</h3>
        <p>
          When you start an Attune session, audio from your microphone and, if you choose, a shared browser tab
          is streamed to our speech-to-text provider in real time. We store the resulting transcript and the
          notes derived from it. <strong>We do not currently retain the audio itself</strong> once it has been transcribed.
          You are responsible for telling the other people in a meeting or class that it is being transcribed and
          for obtaining any consent the law where you are requires.
        </p>

        <h3>2.5 Files you upload</h3>
        <p>
          Spreadsheets you upload to Facet (CSV or Excel) may contain personal data about people who are not
          ClutterAI users. You must have a lawful basis to process it and to share it with us; we process it
          only to show, filter and enrich it for you.
        </p>

        <h3>2.6 Usage information</h3>
        <ul>
          <li>Usage metering events: which features you used, when, and approximately how much model capacity they consumed. These are needed to enforce plan limits and to bill correctly.</li>
          <li>Device information, IP address, browser type and operating system</li>
          <li>If you turn notifications on, the browser&rsquo;s push subscription (an endpoint and keys issued by your browser) so reminders can reach you when the tab is closed, and a delivery record per notification</li>
          <li>Diagnostic logs and error reports</li>
        </ul>
        <p>We do not run third-party analytics or advertising scripts in the application or on this website.</p>

        <h3>2.7 Team information</h3>
        <p>
          If you create or join a team, we store the team name, the email addresses of members and invitees,
          each member&rsquo;s role and seat type, and per-member usage totals. Team owners and admins can see the
          members list, roles and usage totals in the admin console.
        </p>

        <h3>2.8 Payment and transaction information</h3>
        <p>
          <strong>All payments are processed by Lemon Squeezy LLC (&ldquo;Lemon Squeezy&rdquo;), which acts as our Merchant of Record.</strong>{" "}
          This means Lemon Squeezy, not ClutterAI, is the legal seller of record for all transactions. Your invoice
          and card statement will show <strong>Lemon Squeezy</strong>, not ClutterAI — this is expected and confirms your
          purchase was processed successfully. We do not store your card details. Lemon Squeezy collects and processes:
        </p>
        <ul>
          <li>Payment information (credit or debit card details)</li>
          <li>Billing address and contact information</li>
          <li>Transaction history and receipts</li>
          <li>Tax information (VAT, GST, sales tax and similar)</li>
          <li>Purchase metadata</li>
        </ul>
        <p>
          Lemon Squeezy&rsquo;s use of your payment information is governed by their Privacy Policy at{" "}
          <a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer">lemonsqueezy.com/privacy</a>.
          We receive limited transaction data from Lemon Squeezy (your email, subscription status, plan, seat
          count and purchase date) solely to provide you access to the Service.
        </p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate and maintain the Service</li>
          <li>Index your connected content and the content you create, so it can be searched by keyword and by meaning</li>
          <li>Decide, for each question, whether to answer from your sources, from general knowledge or from the web, and generate the answer with citations</li>
          <li>Run agents on your behalf, including scheduled ones such as Digest each morning and Pulse before meetings, and produce briefings, rankings, drafts, code and extracted tasks</li>
          <li>Transcribe Attune sessions and produce notes, flashcards and action items</li>
          <li>Ring the reminders you set and deliver notifications through the channels you turned on</li>
          <li>Propose deal updates and follow-up drafts from your meetings, and research accounts on the web when you ask</li>
          <li>Meter usage against your plan and enforce limits</li>
          <li>Verify subscription status and grant access (via Lemon Squeezy)</li>
          <li>Send transactional email: sign-in codes, team invitations, service updates and support replies</li>
          <li>Improve the Service and develop new features, using aggregated or anonymised information</li>
          <li>Detect and prevent fraud or abuse, and comply with legal obligations</li>
        </ul>

        <h3>3.1 AI processing</h3>
        <p>To provide these features we send content to the following AI providers through their APIs:</p>
        <ul>
          <li><strong>Anthropic (Claude models):</strong> generating answers, running agents, Forge, Facet AI columns, Easel diagram generation, Attune notes and summaries. Anthropic does not use API inputs or outputs to train its models.</li>
          <li><strong>OpenAI:</strong> converting content to vector embeddings so it can be searched by meaning, and some agent tasks. OpenAI does not use API customer data to train its models.</li>
          <li><strong>Deepgram:</strong> real-time speech-to-text for Attune.</li>
          <li><strong>Pinecone:</strong> storing the vector embeddings that make semantic search possible.</li>
        </ul>
        <div className="lg-callout">
          <p><strong>We do not use your data to train AI models, and neither do these providers.</strong> Your content is processed only to provide the Service to you.</p>
        </div>
      </section>

      <section>
        <h2>4. Data Sharing and Third-Party Service Providers</h2>
        <p>
          To provide ClutterAI we share information with a small number of service providers. Each processes data
          only as necessary to deliver its part of the Service and is bound by its data processing terms.
        </p>

        <h3>4.1 Service providers (sub-processors)</h3>
        <ul>
          <li><strong>Lemon Squeezy LLC:</strong> merchant of record, payment processing, tax handling and subscription management. <a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong>Convex:</strong> database, backend functions and authentication infrastructure. <a href="https://www.convex.dev/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong>Vercel:</strong> hosting and deployment of the application and this website. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong>Anthropic:</strong> language models for answers, agents and generation. <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong>OpenAI:</strong> embeddings and some agent tasks. <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong>Pinecone:</strong> vector database for semantic search. <a href="https://www.pinecone.io/privacy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong>Deepgram:</strong> speech-to-text for Attune. <a href="https://deepgram.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><strong>Resend:</strong> transactional email delivery. <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
        </ul>

        <h3>4.2 What we require of them</h3>
        <ul>
          <li>Your data is processed only for the purposes described in this policy</li>
          <li>Appropriate security measures are maintained</li>
          <li>Your data is not used for their own purposes, including model training, or shared with other parties</li>
          <li>Compliance with applicable data protection regulations (GDPR, UK GDPR, CCPA and similar)</li>
        </ul>

        <h3>4.3 Teams</h3>
        <p>If you are part of a team on ClutterAI:</p>
        <ul>
          <li>Teammates can see only the items you explicitly share: Folio documents, Easel boards, Facet views, Attune sessions, Cadence meetings and contacts, and Stride deals you mark as shared. Shared items are searchable by every member. A shared deal shows teammates its facts, summary, people and activity metadata; the bodies of logged emails, proposals and your tasks stay with you.</li>
          <li><strong>Your connected sources — Gmail, Slack, Drive and the rest — are never visible to teammates.</strong> Answers to your questions are private to you.</li>
          <li>Team owners and admins can see member email addresses, roles, seat assignments and usage totals. They cannot read your questions, answers or private content.</li>
          <li>If you leave or are removed from a team, items you shared remain available to the team unless you unshare or delete them first. Your private content stays with your account.</li>
        </ul>

        <h3>4.4 The ClutterAI app for Slack</h3>
        <p>
          When you mention @ClutterAI or send it a direct message, we receive the message text, your Slack user
          identifier and the channel identifier, and we answer using your own ClutterAI account and connected
          data. Replies in channels are ephemeral — visible only to you — unless you choose to share one.
        </p>

        <h3>4.5 What we do NOT do</h3>
        <ul>
          <li>Sell your personal data to third parties</li>
          <li>Use your data for advertising purposes</li>
          <li>Share your data with non-essential third parties</li>
          <li>Train AI models on your private content, or allow our providers to</li>
        </ul>

        <h3>4.6 Legal requirements</h3>
        <p>
          We may disclose your information if required by law, court order or government request, or to protect
          our rights, property or safety or those of others.
        </p>

        <h3>4.7 Legal basis for processing (EU/UK users)</h3>
        <ul>
          <li><strong>Contract:</strong> to provide the Service and perform our agreement with you</li>
          <li><strong>Legitimate interest:</strong> to improve the Service, meter usage, detect fraud and ensure security</li>
          <li><strong>Consent:</strong> where required, for example optional communications. You may withdraw consent at any time.</li>
          <li><strong>Legal obligation:</strong> to comply with applicable laws</li>
        </ul>

        <h3>4.8 Business transfers</h3>
        <p>
          If ClutterAI is acquired or merged with another company, your information may be transferred as part of
          that transaction. We will notify you by email and by a prominent notice on the Service of any change in ownership.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <ul>
          <li>TLS encryption for data in transit</li>
          <li>Encryption at rest for stored content and credentials</li>
          <li>OAuth tokens stored encrypted; read-only scopes requested wherever the provider offers them (Gmail, Google Drive, Google Calendar)</li>
          <li>Passwords stored only as salted hashes</li>
          <li>Access controls, authentication requirements and monitoring</li>
        </ul>
        <p>
          In the event of a data breach affecting personal data, we will notify affected users and regulators as
          required by applicable law, including within 72 hours for incidents covered by the GDPR.
        </p>
        <p>
          No system is completely secure. We protect your data using commercially reasonable measures but cannot
          guarantee absolute security.
        </p>

        <h3>5.1 Google API Services</h3>
        <p>
          ClutterAI&rsquo;s use and transfer to any other app of information received from Google APIs will adhere to
          the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>,
          including the Limited Use requirements. Google user data is used only to provide the features you
          have enabled, is never sold, and is never used for advertising or to train generalised AI models.
        </p>
      </section>

      <section>
        <h2>6. Your Rights and Choices</h2>

        <h3>6.1 General rights</h3>
        <p>Subject to local law, you have the right to:</p>
        <ul>
          <li><strong>Access:</strong> request a copy of your personal data</li>
          <li><strong>Correct:</strong> update inaccurate or incomplete information</li>
          <li><strong>Delete:</strong> request deletion of your account and associated data</li>
          <li><strong>Restrict processing:</strong> limit how we use your data</li>
          <li><strong>Object:</strong> object to processing based on legitimate interests</li>
          <li><strong>Data portability:</strong> receive your data in a portable format</li>
          <li><strong>Withdraw consent:</strong> withdraw previously given consent</li>
          <li><strong>Lodge a complaint:</strong> file a complaint with your data protection authority</li>
        </ul>

        <h3>6.2 How to exercise your rights</h3>
        <p>
          Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with &ldquo;Data Request&rdquo; in the subject line.
          We will acknowledge receipt within 5 business days and respond within 30 days. Account deletion is also
          available from Settings inside the application.
        </p>

        <h3>6.3 EU/UK residents</h3>
        <p>
          EU and UK residents may lodge a complaint with their local data protection authority. A list of EU
          authorities is at <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer">edpb.europa.eu</a>.
        </p>

        <h3>6.4 California residents (CCPA/CPRA)</h3>
        <p>If you are a California resident you also have the right to know what personal information is collected, used, shared or sold; to delete it; to correct it; to opt out of its sale or sharing; and not to be discriminated against for exercising these rights.</p>
        <p><strong>We do not sell or share personal information</strong> as defined by the CCPA/CPRA.</p>

        <h3>6.5 Subscription and payment management</h3>
        <p>
          Change or cancel your plan from Settings in the application, through the Lemon Squeezy customer portal
          linked in your receipt email, or by emailing <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          For payment-specific questions you can also contact Lemon Squeezy&rsquo;s{" "}
          <a href="https://www.lemonsqueezy.com/support" target="_blank" rel="noopener noreferrer">support portal</a>.
        </p>

        <h3>6.6 Connected services management</h3>
        <p>You can disconnect any integrated service at any time from Integrations in the application. Disconnecting will:</p>
        <ul>
          <li>Immediately revoke ClutterAI&rsquo;s access to that service</li>
          <li>Stop syncing new content from it</li>
          <li>Retain previously indexed content for up to 30 days (for recovery if you reconnect)</li>
          <li>Permanently delete the associated content and embeddings after 30 days</li>
        </ul>
        <p>You can also revoke access directly at the provider, for example from Google&rsquo;s account permissions page or Slack&rsquo;s app settings.</p>
      </section>

      <section>
        <h2>7. Data Retention</h2>
        <ul>
          <li><strong>Active accounts:</strong> data is retained while your account is active</li>
          <li><strong>Disconnected sources:</strong> indexed content deleted within 30 days of disconnection</li>
          <li><strong>Attune audio:</strong> not retained after transcription; transcripts and notes are kept with your account</li>
          <li><strong>Uploaded files (Facet):</strong> kept until you delete the sheet, or your account</li>
          <li><strong>After account deletion:</strong> most data deleted within 30 days; backups purged within 90 days</li>
          <li><strong>Vector embeddings:</strong> deleted from Pinecone within 30 days of account deletion</li>
          <li><strong>Usage metering events:</strong> retained for as long as needed to bill and to resolve disputes about limits</li>
          <li><strong>Transaction records:</strong> retained by Lemon Squeezy as required for legal and tax purposes (typically 7 years)</li>
          <li><strong>Aggregated or anonymised data:</strong> may be retained indefinitely</li>
        </ul>
        <p>For earlier deletion or a data export, contact <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
      </section>

      <section>
        <h2>8. Cookies, Local Storage and Tracking</h2>
        <p>The application uses only what it needs to function:</p>
        <ul>
          <li><strong>Authentication cookies and tokens:</strong> to keep you signed in</li>
          <li><strong>Session and preference storage:</strong> to remember your settings and where you left off</li>
          <li><strong>Security cookies:</strong> to detect fraud and abuse</li>
        </ul>
        <p>
          This website (clutter-ai.com) sets no cookies, loads its fonts from our own servers rather than a
          third party, and runs no analytics or advertising scripts. It uses browser session storage only to
          remember that you have seen the loading animation.
        </p>
        <p><strong>We do not use advertising or third-party tracking cookies anywhere.</strong></p>
      </section>

      <section>
        <h2>9. Children&rsquo;s Privacy</h2>
        <p>
          The Service is not intended for children under 13 (or 16 in the EU/UK). If we learn we have collected
          personal data from a child without appropriate consent, we will delete it promptly. Contact us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> if you believe we may have collected information from a child.
        </p>
      </section>

      <section>
        <h2>10. International Data Transfers</h2>
        <p>
          Your data may be transferred to and processed in the United States and other countries where our
          service providers operate. For transfers from the EEA and UK we rely on appropriate safeguards such as
          Standard Contractual Clauses approved by the European Commission and the UK International Data Transfer Addendum.
        </p>
      </section>

      <section>
        <h2>11. Third-Party Services</h2>
        <p>When you connect a third-party service, your use of that service is also subject to its own privacy policy:</p>
        <ul>
          <li>Google (Gmail, Drive, Calendar): <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
          <li>Slack: <a href="https://slack.com/privacy-policy" target="_blank" rel="noopener noreferrer">slack.com/privacy-policy</a></li>
          <li>Notion: <a href="https://www.notion.so/Privacy-Policy" target="_blank" rel="noopener noreferrer">notion.so/Privacy-Policy</a></li>
          <li>GitHub: <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">github.com privacy statement</a></li>
          <li>GitLab: <a href="https://about.gitlab.com/privacy/" target="_blank" rel="noopener noreferrer">about.gitlab.com/privacy</a></li>
          <li>Atlassian (Jira, Confluence, Trello): <a href="https://www.atlassian.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">atlassian.com/legal/privacy-policy</a></li>
          <li>Linear: <a href="https://linear.app/privacy" target="_blank" rel="noopener noreferrer">linear.app/privacy</a></li>
          <li>Airtable: <a href="https://www.airtable.com/company/privacy" target="_blank" rel="noopener noreferrer">airtable.com/company/privacy</a></li>
          <li>Zendesk: <a href="https://www.zendesk.com/company/agreements-and-terms/privacy-notice/" target="_blank" rel="noopener noreferrer">zendesk.com privacy notice</a></li>
        </ul>
        <p>
          We only access data you explicitly authorise through OAuth. You can revoke our access at any time
          through Integrations in the application or directly at the provider.
        </p>
      </section>

      <section>
        <h2>12. Changes to This Policy</h2>
        <p>We will notify you of material changes by:</p>
        <ul>
          <li>Sending an email to your registered email address</li>
          <li>Posting a prominent notice on the Service</li>
          <li>Updating the &ldquo;Last updated&rdquo; date at the top of this policy</li>
        </ul>
        <p>Your continued use of the Service after changes take effect constitutes acceptance of the updated policy.</p>
      </section>

      <section>
        <h2>13. Contact Us</h2>
        <p>For questions about this Privacy Policy or our data practices:</p>
        <ul>
          <li>Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, subject line &ldquo;Privacy Inquiry&rdquo;</li>
          <li>Address: {POSTAL_ADDRESS}</li>
        </ul>
        <p>
          For payment and subscription inquiries, you can also contact Lemon Squeezy at{" "}
          <a href="https://www.lemonsqueezy.com/support" target="_blank" rel="noopener noreferrer">lemonsqueezy.com/support</a>.
          See also our <Link href="/terms">Terms of Service</Link> and <Link href="/refund">Refund Policy</Link>.
        </p>
      </section>
    </Legal>
  );
}
