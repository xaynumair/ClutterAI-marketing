import type { Metadata } from "next";
import Link from "next/link";
import { Legal } from "../components/legal/Legal";
import { PLANS } from "../lib/plans";
import { POSTAL_ADDRESS, SITE_URL, SUPPORT_EMAIL, TRIAL_DAYS } from "../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The agreement between you and ClutterAI: what the Service is, plans and billing, acceptable use, your content and ours.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: false },
};

const UPDATED = "September 7, 2026";

export default function Terms() {
  return (
    <Legal
      title="Terms of Service"
      updated={UPDATED}
      summary={
        <ul>
          <li>Every new account gets {TRIAL_DAYS} days of the full Pro plan with no card. Afterwards it moves to the Free plan on its own.</li>
          <li>Paid plans renew monthly or annually through Lemon Squeezy, our merchant of record. Upgrades apply immediately; downgrades at the end of the period you paid for.</li>
          <li>You own everything you connect or create. We get only the licence we need to store, index and answer from it — never to train models.</li>
          <li>AI output can be wrong. Check it before you rely on it, and review code before you run it.</li>
          <li>If you record a meeting with Attune, telling the other people is on you.</li>
        </ul>
      }
    >
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using ClutterAI (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service
          (&ldquo;Terms&rdquo;). If you do not agree, do not use the Service. These Terms are a legally binding agreement
          between you and ClutterAI (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
        </p>
        <p><strong>Contact information:</strong></p>
        <ul>
          <li>Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
          <li>Website: <a href={SITE_URL}>clutter-ai.com</a></li>
          <li>Address: {POSTAL_ADDRESS}</li>
        </ul>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>ClutterAI is a workspace built on a shared memory of your connected tools. It lets you:</p>
        <ul>
          <li><strong>Connect</strong> third-party services — Gmail, Google Drive, Google Calendar, Slack, Notion, GitHub, GitLab, Linear, Jira, Confluence, Trello, Airtable and Zendesk — and keep their content indexed and current, including real-time updates where the provider supports them.</li>
          <li><strong>Ask</strong> questions in natural language and receive AI-generated answers with links to their sources; the Service decides per question whether to answer from your sources, from general knowledge or, when you enable it, from the web, and labels the answer accordingly.</li>
          <li><strong>Use the ClutterAI app for Slack</strong> to ask the same questions by mentioning or messaging it.</li>
          <li><strong>Work in the Workspace apps:</strong> Folio (documents), Attune (live transcription and notes for meetings and classes), Facet (tables from Airtable or uploaded files, with plain-English filters and AI columns), Easel (a whiteboard that can draw from your data) and Notes (nested notebooks).</li>
          <li><strong>Run agents</strong> that work on your connected memory: Pulse (meeting briefings), Digest (daily briefing), Triage (ticket ranking and drafts), Forge (codebase intelligence and file generation); Beacon (contact lookup) on team plans; and further agents as they are released.</li>
          <li><strong>Form a team</strong> with a shared memory of explicitly shared items, an admin console and per-member usage.</li>
        </ul>
        <p>Features, integrations and agents may be added, changed or withdrawn. The current set is described at <Link href="/marketplace">clutter-ai.com/marketplace</Link>.</p>
      </section>

      <section>
        <h2>3. Account Registration</h2>
        <p>To use ClutterAI you must create an account with accurate and complete information. You are responsible for:</p>
        <ul>
          <li>Maintaining the confidentiality of your password and account credentials</li>
          <li>All activity that occurs under your account</li>
          <li>Notifying us immediately of any unauthorised access</li>
          <li>Keeping your account information current</li>
        </ul>
        <p>
          <strong>Age requirements:</strong> you must be at least 13 years old to use the Service, and at least the
          age of digital consent where you live (16 in some EU countries). If you are under 18 you must have
          parental consent. We will delete accounts that lack valid consent upon discovery.
        </p>
      </section>

      <section>
        <h2>4. Trial, Plans and Payments</h2>

        <h3>4.1 Free trial</h3>
        <p>
          Every new account receives <strong>{TRIAL_DAYS} days of full access equivalent to the Pro plan</strong>, starting at
          sign-up. No payment method is required. When the trial ends, the account moves to the Free plan
          automatically; nothing is charged and nothing is deleted. One trial per person.
        </p>

        <h3>4.2 Plans</h3>
        <p>ClutterAI offers the following plans. Prices are in US dollars and exclude any applicable tax.</p>
        <div className="lg-table-wrap">
          <table className="lg-table">
            <thead><tr><th>Plan</th><th>Price</th><th>Notes</th></tr></thead>
            <tbody>
              {PLANS.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>
                    {p.monthly === 0 ? "$0" : `$${p.monthly}${p.perSeat ? " per seat" : ""} per month`}
                    {p.annual ? `, or $${p.annual}${p.perSeat ? " per seat" : ""} per year` : p.monthly > 0 ? " (monthly billing only)" : ""}
                  </td>
                  <td>
                    {p.id === "free" && "After the trial: chat with a daily allowance, Notes, all integrations."}
                    {p.id === "student" && "Requires a valid .edu email address. We may ask for verification."}
                    {p.id === "pro" && "All Workspace apps and agents; Forge on Quick and Standard effort."}
                    {(p.id === "max5" || p.id === "max20") && "Higher allowances; Forge on Deep effort."}
                    {p.id === "team" && `Minimum ${p.minSeats} seats. Pro-level allowances for every member; shared memory; admin console.`}
                    {p.id === "teamPremium" && `Minimum ${p.minSeats} seats. Max 5×-level allowances for every member; seats can be mixed with Team Standard.`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Plan features, prices and availability are subject to change. Current details are at{" "}
          <Link href="/pricing">clutter-ai.com/pricing</Link>; the plan shown inside the application at the time of
          purchase governs what you receive.
        </p>

        <h3>4.3 Usage allowances</h3>
        <p>
          Each plan includes allowances for chat, Forge, agents, Attune recording minutes and Notes AI actions.
          Allowances are metered per user over rolling five-hour windows and a weekly ceiling, in units that
          reflect the cost of the models used. Approximate daily figures are published on the pricing page for
          guidance; the metering, not the approximation, is what applies. We may offer one-time credit packs
          that add to a team&rsquo;s allowance. We may adjust allowances to keep the Service sustainable and will
          give notice of reductions that materially affect paid plans.
        </p>

        <h3>4.4 Payment processing and merchant of record</h3>
        <p>
          <strong>All payments are processed by Lemon Squeezy LLC (&ldquo;Lemon Squeezy&rdquo;), which acts as our Merchant of Record.</strong>{" "}
          Lemon Squeezy, not ClutterAI, is the legal seller of record for all transactions. Your invoice and card
          statement will show <strong>Lemon Squeezy</strong> — this is expected. Lemon Squeezy:
        </p>
        <ul>
          <li>Processes all payments and stores payment information</li>
          <li>Issues receipts and invoices, which display Lemon Squeezy as the seller</li>
          <li>Handles payment disputes, chargebacks and refund processing</li>
          <li>Collects and remits applicable taxes (VAT, GST, sales tax and similar) globally</li>
          <li>Manages subscription billing and renewals</li>
          <li>Maintains PCI DSS compliance for all payment transactions</li>
        </ul>
        <p>
          By purchasing a subscription you agree to Lemon Squeezy&rsquo;s Buyer Terms:{" "}
          <a href="https://www.lemonsqueezy.com/buyer-terms" target="_blank" rel="noopener noreferrer">lemonsqueezy.com/buyer-terms</a>.
          We receive limited transaction data from Lemon Squeezy (email, subscription status, plan, seats, purchase
          date) solely to provide access to the Service. We never receive or store your full card details.
        </p>

        <h3>4.5 Billing, renewals and plan changes</h3>
        <ul>
          <li>Subscriptions are billed monthly or annually according to the cycle you choose. Max plans are available monthly only.</li>
          <li>Billing occurs automatically on your renewal date through Lemon Squeezy, and you authorise Lemon Squeezy to charge your payment method on file.</li>
          <li>Subscriptions renew automatically until cancelled before the renewal date.</li>
          <li><strong>Upgrades</strong> (a higher tier, or the same tier moving from monthly to annual) take effect immediately and are prorated for the remainder of the current period.</li>
          <li><strong>Downgrades</strong> (a lower tier, or annual to monthly) are scheduled for the end of the period already paid for; you keep your current plan until then. A scheduled downgrade can be cancelled before it takes effect.</li>
          <li>Team plans are billed per seat. Seats can be added at any time and are prorated; the minimum is three.</li>
          <li>You will receive a receipt from Lemon Squeezy for each charge.</li>
        </ul>

        <h3>4.6 Price changes</h3>
        <p>We may change subscription pricing. If we do:</p>
        <ul>
          <li>We will notify you at least 30 days in advance by email</li>
          <li>Changes apply to renewals after the notice period</li>
          <li>Periods already paid for are not affected</li>
          <li>You may cancel before the renewal date to avoid the new price</li>
        </ul>

        <h3>4.7 Cancellation</h3>
        <p>You may cancel at any time from Settings in the application, from the Lemon Squeezy customer portal linked in your receipt, or by emailing <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. On cancellation:</p>
        <ul>
          <li>You keep full access to paid features until the end of the current billing period</li>
          <li>No refund is provided for the unused portion of the period, except as set out in section 4.8</li>
          <li>Your account then moves to the Free plan</li>
          <li>Your data and connected services remain intact unless you delete your account</li>
        </ul>

        <h3>4.8 Refunds</h3>
        <p>
          We offer a <strong>30-day money-back guarantee</strong> on your first purchase of any plan, provided the account has
          made fewer than 20 queries. EU and UK consumers additionally retain their statutory 14-day right of
          withdrawal. Renewals, partial periods and used credit packs are generally not refundable. The{" "}
          <Link href="/refund">Refund Policy</Link> sets out the full rules and process; where these Terms and the
          Refund Policy differ on a refund question, the Refund Policy governs.
        </p>
      </section>

      <section>
        <h2>5. Acceptable Use</h2>
        <p>You agree to use the Service responsibly and NOT to:</p>
        <ul>
          <li>Violate any applicable law, regulation or third-party right</li>
          <li>Connect accounts, upload files or record conversations that you do not have the right to process, including recording people without any consent the law where you are requires</li>
          <li>Upload, transmit or distribute malicious code or harmful content</li>
          <li>Attempt to gain unauthorised access to the Service, other accounts or our systems</li>
          <li>Reverse engineer, decompile or attempt to derive source code from the Service</li>
          <li>Use the Service to harass, abuse, threaten or harm others</li>
          <li>Share your account credentials, or share a single seat between several people</li>
          <li>Scrape, crawl or extract data from the Service using automated tools</li>
          <li>Use the Service to build a competing product or for competitive analysis</li>
          <li>Resell, sublicense or redistribute the Service without authorisation</li>
          <li>Circumvent usage allowances, rate limits, trial limits or other technical restrictions, including by creating multiple accounts</li>
          <li>Interfere with or disrupt the Service or our infrastructure</li>
        </ul>
        <p><strong>Violation of these terms may result in immediate suspension or termination without refund.</strong></p>
      </section>

      <section>
        <h2>6. Content and Data</h2>

        <h3>6.1 Your Content</h3>
        <p>
          You retain full ownership of all content you upload, create, record or connect to ClutterAI (&ldquo;Your
          Content&rdquo;), including documents, notes, boards, tables, transcripts, generated files and connected
          service data. By using the Service you grant ClutterAI a limited, non-exclusive, royalty-free licence to:
        </p>
        <ul>
          <li>Store and process Your Content on our infrastructure and with the service providers listed in our Privacy Policy</li>
          <li>Index, embed and analyse Your Content to provide search, answers, agents and the Workspace apps</li>
          <li>Generate AI output — answers, briefings, notes, code, diagrams, table values — based on Your Content</li>
          <li>Display Your Content to you and, for items you explicitly share, to the members of your team</li>
          <li>Make backup copies for disaster recovery and business continuity</li>
        </ul>
        <p><strong>Privacy commitment:</strong></p>
        <ul>
          <li>We do NOT use Your Content to train AI models or machine learning systems, and our providers may not either</li>
          <li>We do NOT sell, rent or share Your Content with third parties for their purposes</li>
          <li>Your Content is encrypted in transit and at rest</li>
        </ul>

        <h3>6.2 Connected services</h3>
        <p>
          When you connect a third-party service you authorise ClutterAI to access the content you grant through
          OAuth, to store the OAuth tokens securely, and to sync content periodically and in real time to keep
          answers current. You can revoke access at any time from Integrations in the application or directly at
          the provider. Your use of each connected service remains subject to that provider&rsquo;s own terms.
        </p>

        <h3>6.3 AI-generated content</h3>
        <p>You acknowledge and agree that:</p>
        <ul>
          <li>AI-generated answers, briefings, notes, table values, diagrams and code may contain errors, omissions or outdated information</li>
          <li>You are solely responsible for verifying AI output before relying on it, and for reviewing generated code before running or deploying it</li>
          <li>Answers labelled as general knowledge or from the web were not drawn from your sources, and answers labelled as from your sources reflect only what was connected and indexed at the time</li>
          <li>We are not liable for decisions or outcomes based on AI output</li>
          <li>AI output does not constitute professional advice (legal, medical, financial or otherwise)</li>
        </ul>

        <h3>6.4 Recordings (Attune)</h3>
        <p>
          You are responsible for ensuring that recording or transcribing a meeting, call or class is lawful where
          you and the other participants are, including obtaining consent where required, and for informing
          participants. We provide the tool; the decision to record is yours.
        </p>

        <h3>6.5 Teams</h3>
        <ul>
          <li>The person who creates a team is its owner and is responsible for its billing, its members and their compliance with these Terms.</li>
          <li>Members can see items that other members have explicitly shared. Connected sources and private content remain private to each member.</li>
          <li>The owner and admins may add, remove and reassign members and seats. When a member leaves, items they shared remain with the team unless removed first.</li>
          <li>Members do not see billing and cannot purchase upgrades for the team; the owner does.</li>
        </ul>

        <h3>6.6 Third-party personal data you upload</h3>
        <p>
          Some features (for example Beacon, and Facet uploads) process data about people other than you. You
          warrant that you have a lawful basis to process that data and to share it with us, and that you will
          use the results lawfully. We act as your processor for that data.
        </p>
      </section>

      <section>
        <h2>7. Intellectual Property</h2>
        <p>
          The Service — including its software, models&rsquo; orchestration, user interface, design elements, logos and
          trademarks — is owned by ClutterAI and protected by copyright, trademark and other intellectual property
          laws. You are granted a limited, non-exclusive, non-transferable licence to use the Service for your
          personal or internal business purposes. You may not copy, modify, distribute or create derivative works
          from the Service. Output generated for you from Your Content is yours to use.
        </p>
      </section>

      <section>
        <h2>8. Third-Party Services and Integrations</h2>
        <p>ClutterAI integrates with and relies on third-party services, including:</p>
        <ul>
          <li><strong>Lemon Squeezy LLC:</strong> payment processing and merchant of record. <a href="https://www.lemonsqueezy.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
          <li><strong>Google</strong> (Gmail, Drive, Calendar), <strong>Slack</strong>, <strong>Notion</strong>, <strong>GitHub</strong>, <strong>GitLab</strong>, <strong>Atlassian</strong> (Jira, Confluence, Trello), <strong>Linear</strong>, <strong>Airtable</strong> and <strong>Zendesk</strong>: OAuth integrations and data access</li>
          <li><strong>Anthropic</strong> and <strong>OpenAI:</strong> AI and language model processing</li>
          <li><strong>Deepgram:</strong> speech-to-text</li>
          <li><strong>Pinecone:</strong> vector search infrastructure</li>
          <li><strong>Convex:</strong> database and backend infrastructure</li>
          <li><strong>Vercel:</strong> hosting and deployment</li>
          <li><strong>Resend:</strong> transactional email</li>
          <li><strong>Whitepages:</strong> people-search lookups for the Beacon agent</li>
        </ul>
        <p>
          Your use of these services through ClutterAI is subject to their respective terms and privacy policies.
          We are not responsible for the availability or practices of third-party services, and a change in a
          provider&rsquo;s API or terms may require us to change or withdraw an integration.
        </p>
      </section>

      <section>
        <h2>9. Service Availability</h2>
        <p>
          We strive to provide reliable, continuous service but cannot guarantee uninterrupted availability. The
          Service may be temporarily unavailable due to maintenance, emergency updates, third-party outages
          (including model providers) or events beyond our control. We will make reasonable efforts to notify
          users of planned downtime.
        </p>
      </section>

      <section>
        <h2>10. Disclaimers</h2>
        <p>
          <strong>THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</strong>{" "}
          TO THE MAXIMUM EXTENT PERMITTED BY LAW WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, UNINTERRUPTED OPERATION, AND THE ACCURACY OF CONTENT OR AI OUTPUT. Some jurisdictions
          do not allow the exclusion of implied warranties, so some exclusions may not apply to you.
        </p>
      </section>

      <section>
        <h2>11. Limitation of Liability</h2>
        <p>
          <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, CLUTTERAI AND ITS AFFILIATES SHALL NOT BE LIABLE FOR</strong>{" "}
          indirect, incidental, consequential, special or punitive damages, including loss of profits, data,
          goodwill or business opportunities.
        </p>
        <p>
          <strong>Liability cap:</strong> our total aggregate liability for all claims shall not exceed the amount you paid
          to ClutterAI (through Lemon Squeezy) in the 12 months preceding the claim, or US$100 if you have paid nothing.
        </p>
        <p>
          These limitations do not apply to liability arising from gross negligence, wilful misconduct, fraud, or
          other liability that cannot be excluded under applicable law.
        </p>
      </section>

      <section>
        <h2>12. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless ClutterAI, its affiliates, officers, directors, employees and
          agents from any claims, liabilities, damages and expenses arising from your use or misuse of the
          Service, your violation of these Terms, content or recordings you introduce to the Service, or your
          infringement of any right of another person or entity.
        </p>
      </section>

      <section>
        <h2>13. Termination</h2>
        <h3>13.1 By you</h3>
        <p>You may delete your account at any time from Settings or by contacting <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        <h3>13.2 By us</h3>
        <p>We may suspend or terminate your account for violation of these Terms, fraudulent or illegal activity, non-payment, or extended inactivity.</p>
        <h3>13.3 Effect of termination</h3>
        <ul>
          <li>Your access to the Service is disabled</li>
          <li>We retain your data for 30 days to allow recovery or reactivation</li>
          <li>After 30 days we securely delete or anonymise your personal data; backups are purged within 90 days</li>
          <li>Items you shared with a team remain with the team unless removed before termination</li>
          <li>Transaction records may be retained by Lemon Squeezy for legal and tax purposes</li>
          <li>No refund is provided for unused subscription time except as required by law or the Refund Policy</li>
        </ul>
        <p>You may request a data export before deletion by contacting <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
        <h3>13.4 Survival</h3>
        <p>Sections covering Intellectual Property, Disclaimers, Limitation of Liability, Indemnification and Governing Law survive termination.</p>
      </section>

      <section>
        <h2>14. Changes to Terms</h2>
        <p>We will notify you of material changes by:</p>
        <ul>
          <li>Sending an email to your registered address</li>
          <li>Posting a prominent notice on the Service</li>
          <li>Updating the &ldquo;Last updated&rdquo; date at the top of this document</li>
          <li>Providing at least 30 days&rsquo; notice for changes that materially affect your rights</li>
        </ul>
        <p>Your continued use of the Service after the effective date constitutes acceptance of the updated Terms.</p>
      </section>

      <section>
        <h2>15. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Wyoming and the applicable federal laws of the
          United States of America, without regard to conflict of law principles. ClutterAI is organised under
          the laws of the State of Wyoming with its registered office at {POSTAL_ADDRESS}.
        </p>
        <p>
          Any dispute arising out of or relating to these Terms or the Service shall be brought exclusively in the
          state or federal courts located in the State of Wyoming, and you consent to their personal jurisdiction.
        </p>
        <p>
          Nothing in these Terms affects your statutory rights as a consumer under applicable local law, including
          EU and UK consumer protection law. Payment-related disputes are additionally governed by Lemon Squeezy&rsquo;s
          Buyer Terms.
        </p>
      </section>

      <section>
        <h2>16. Miscellaneous</h2>
        <h3>16.1 Entire agreement</h3>
        <p>These Terms, together with our <Link href="/privacy">Privacy Policy</Link> and <Link href="/refund">Refund Policy</Link>, constitute the entire agreement between you and ClutterAI regarding the Service.</p>
        <h3>16.2 Severability</h3>
        <p>If any provision is found invalid or unenforceable, the remaining provisions continue in full force.</p>
        <h3>16.3 Waiver</h3>
        <p>Our failure to enforce any right or provision is not a waiver of it.</p>
        <h3>16.4 Assignment</h3>
        <p>You may not assign or transfer these Terms or your account without our prior written consent. We may assign these Terms without restriction.</p>
        <h3>16.5 Force majeure</h3>
        <p>We are not liable for any failure to perform due to circumstances beyond our reasonable control, including natural disasters, wars, internet outages or third-party service failures.</p>
      </section>

      <section>
        <h2>17. Contact Us</h2>
        <ul>
          <li>Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>, subject line &ldquo;Terms of Service Inquiry&rdquo;</li>
          <li>Address: {POSTAL_ADDRESS}</li>
        </ul>
        <p>For payment and subscription inquiries, you can also contact Lemon Squeezy at <a href="https://www.lemonsqueezy.com/support" target="_blank" rel="noopener noreferrer">lemonsqueezy.com/support</a>.</p>
      </section>
    </Legal>
  );
}
