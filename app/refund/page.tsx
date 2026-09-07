import type { Metadata } from "next";
import Link from "next/link";
import { Legal } from "../components/legal/Legal";
import { POSTAL_ADDRESS, SUPPORT_EMAIL, TRIAL_DAYS } from "../lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "The 30-day money-back guarantee, how to request a refund, what is not refundable, and your statutory rights.",
  alternates: { canonical: "/refund" },
  robots: { index: true, follow: false },
};

const UPDATED = "September 7, 2026";

export default function Refund() {
  return (
    <Legal
      title="Refund Policy"
      updated={UPDATED}
      summary={
        <ul>
          <li>The {TRIAL_DAYS}-day trial costs nothing and asks for no card, so there is nothing to refund — it simply ends.</li>
          <li>Your <strong>first purchase</strong> of any plan has a 30-day money-back guarantee, as long as the account has made fewer than 20 queries.</li>
          <li>EU and UK consumers also keep their statutory 14-day right to cancel.</li>
          <li>Renewals, partial periods and used credit packs are not refunded. Cancelling stops the next charge; it doesn&rsquo;t refund the current one.</li>
          <li>Email us before disputing a charge with your bank — it is faster for everyone.</li>
        </ul>
      }
    >
      <section>
        <h2>Overview</h2>
        <p>
          ClutterAI uses <strong>Lemon Squeezy LLC as our Merchant of Record</strong> for all payments. Lemon Squeezy, not
          ClutterAI, is the legal seller of record for your purchase and handles payment processing, receipts, tax
          collection and refund processing. Your invoice and card statement will show <strong>Lemon Squeezy</strong> — this is
          expected and correct.
        </p>
        <p>
          Every new account starts with a {TRIAL_DAYS}-day trial of the full Pro plan with no payment method required.
          Because nothing is charged for the trial, the guarantee below applies to your first paid purchase.
        </p>
        <p>
          We want you to be happy with ClutterAI. If you are not, this policy explains your options. Our 30-day
          money-back guarantee is subject to a fair-usage limit: accounts that have submitted 20 or more queries
          are not eligible.
        </p>
      </section>

      <section>
        <h2>30-Day Money-Back Guarantee</h2>
        <p>We offer a <strong>30-day money-back guarantee</strong> on new subscription purchases. It applies to:</p>
        <ul>
          <li>Your first purchase of any ClutterAI plan — Student, Pro, Max 5×, Max 20×, Team Standard or Team Premium — on either monthly or annual billing</li>
          <li>Purchases made within the last 30 days from the date of payment</li>
          <li>Subscriptions purchased through our checkout (powered by Lemon Squeezy)</li>
          <li>Accounts that have submitted <strong>fewer than 20 queries</strong> in total since sign-up</li>
        </ul>
        <p>
          If you are not satisfied within your first 30 days and have made fewer than 20 queries, you can request
          a full refund. The limit exists to prevent abuse of the guarantee while giving genuine new users ample
          opportunity to evaluate the service — on top of the free trial that preceded the purchase.
        </p>
        <p>
          <strong>Accounts that have submitted 20 or more queries are not eligible for the 30-day money-back guarantee</strong>,
          as that level of usage indicates the service has been meaningfully evaluated and used.
        </p>
        <p>EU and UK consumers retain their statutory 14-day cancellation right regardless of query count — see the EU/UK section below.</p>

        <h3>What&rsquo;s covered</h3>
        <ul>
          <li>Full refund of your initial subscription payment, including annual payments</li>
          <li>For team plans, the full initial payment for all seats in the first purchase</li>
          <li>Processed within 5–10 business days after approval, to your original payment method</li>
          <li>A simple request by email</li>
        </ul>
      </section>

      <section>
        <h2>How to Request a Refund</h2>
        <h3>Step 1 — Email our support team</h3>
        <p>Send an email to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the subject line &ldquo;Refund Request&rdquo;.</p>
        <h3>Step 2 — Include the required information</h3>
        <ul>
          <li>Your account email address</li>
          <li>Your Lemon Squeezy order number (in your receipt email)</li>
          <li>For team plans, confirmation that you are the team owner</li>
          <li>A brief reason for the request (optional, but it helps us improve)</li>
        </ul>
        <h3>Step 3 — We process your request</h3>
        <p>
          We verify the purchase and, if it is within the 30-day window and under the query limit, approve the
          refund. Lemon Squeezy then processes it to your original payment method within 5–10 business days.
        </p>
        <p>
          <strong>Note:</strong> Lemon Squeezy also reserves the right to issue refunds within 60 days of purchase at its own
          discretion to prevent chargebacks, so a refund may occasionally be issued after the 30-day window.
        </p>
      </section>

      <section>
        <h2>Refunds After 30 Days</h2>
        <p>After the guarantee period, requests are handled case by case at the discretion of ClutterAI and Lemon Squeezy. We consider refunds for:</p>
        <ul>
          <li>Technical issues that prevented you from using the service and that our support team could not resolve</li>
          <li>Accidental duplicate purchases or billing errors</li>
          <li>Exceptional circumstances, or where the law requires it</li>
        </ul>
        <p>
          Contact <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> with the details. We respond within 5 business days.
          Partial refunds for unused portions of a billing period are generally not provided unless required by law.
        </p>
      </section>

      <section>
        <h2>EU/UK Consumer Right to Cancel (14 Days)</h2>
        <p>
          If you are a consumer in the European Union, the United Kingdom or another jurisdiction with similar
          consumer protection law, you have a statutory right to cancel your subscription within <strong>14 days of
          purchase</strong> without giving a reason.
        </p>
        <p>
          <strong>Important:</strong> by using ClutterAI&rsquo;s paid features after purchase (for example asking questions,
          running agents, recording with Attune or generating files with Forge), you expressly request immediate
          performance of the digital service and acknowledge that you lose your 14-day cancellation right once the
          service has been fully performed, as permitted by Article 16(m) of the EU Consumer Rights Directive and
          equivalent UK law.
        </p>
        <p>
          If you have not used the paid features, you keep your full 14-day right and can cancel and be refunded by
          contacting <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> within 14 days.
        </p>
        <p>Our 30-day money-back guarantee provides additional protection beyond the statutory period, even after you have started using the service.</p>
      </section>

      <section>
        <h2>What Happens After a Refund</h2>
        <ul>
          <li>Your subscription is cancelled immediately</li>
          <li>You lose access to paid features: Forge, the agents, Attune, Folio, Facet and Easel</li>
          <li>Your account moves to the Free plan — chat with a daily allowance, Notes, and your integrations</li>
          <li>For team plans, every member&rsquo;s seat ends and the team&rsquo;s shared items remain readable by their owners</li>
          <li>Your connected services and existing data remain intact; you can export your data at any time</li>
        </ul>
        <p>
          <strong>Data retention:</strong> nothing is deleted because of a refund. Data is deleted only if you delete your
          account, after which our normal 30-day retention and 90-day backup purge apply.
        </p>
      </section>

      <section>
        <h2>Subscription Cancellation vs. Refund</h2>
        <h3>Cancellation</h3>
        <ul>
          <li>Stops future billing</li>
          <li>You keep access until the end of the current billing period</li>
          <li>No refund for the current period</li>
          <li>Done any time from Settings in the app or the Lemon Squeezy customer portal</li>
          <li>Account moves to the Free plan when the period ends</li>
        </ul>
        <h3>Downgrade</h3>
        <ul>
          <li>Scheduled for the end of the period you already paid for; you keep the current plan until then</li>
          <li>Can be undone before it takes effect</li>
          <li>Not a refund</li>
        </ul>
        <h3>Refund request</h3>
        <ul>
          <li>Returns your payment for the current period</li>
          <li>Access to paid features ends when the refund is approved</li>
          <li>Available within 30 days of a first purchase with fewer than 20 queries, or as otherwise approved</li>
          <li>Requested by email</li>
        </ul>
        <p>Cancelling prevents future charges but does not by itself entitle you to a refund unless you are within the guarantee.</p>
      </section>

      <section>
        <h2>Refund Processing Time</h2>
        <ul>
          <li><strong>Processing by Lemon Squeezy:</strong> 5–10 business days from approval</li>
          <li><strong>Bank or card processing:</strong> an additional 3–5 business days depending on your institution</li>
          <li><strong>Total:</strong> expect the refund within 8–15 business days of approval</li>
        </ul>
        <p>Refunds go to the original payment method. If you paid by card, the refund appears as a credit on your statement.</p>
      </section>

      <section>
        <h2>Non-Refundable Items</h2>
        <p>The following are generally not eligible for refunds:</p>
        <ul>
          <li>Subscription renewals beyond the first 30 days, unless exceptional circumstances apply</li>
          <li>Partial-period refunds for mid-cycle cancellations or downgrades (you keep access until the period ends)</li>
          <li>Purchases made through unauthorised third-party resellers</li>
          <li>Subscriptions obtained through promotional codes or discounts, unless otherwise stated in the promotion</li>
          <li>One-time credit packs once any credit from the pack has been used</li>
          <li>Team plan refunds requested by someone other than the team owner</li>
        </ul>
        <p>These limitations are subject to applicable consumer protection law in your jurisdiction. If you believe you are entitled to a refund under local law, please contact us.</p>
      </section>

      <section>
        <h2>Chargebacks</h2>
        <p>
          <strong>Please contact us before disputing a charge with your bank or card issuer.</strong> Emailing{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> is always the fastest way to resolve a billing concern; we
          respond within 1–2 business days and will work to make things right.
        </p>
        <p>Initiating a chargeback without contacting us first may result in:</p>
        <ul>
          <li>Immediate suspension of your ClutterAI account</li>
          <li>A ban from future purchases where Lemon Squeezy is the merchant</li>
          <li>Liquidated damages of up to US$100 per incident, as set out in Lemon Squeezy&rsquo;s <a href="https://www.lemonsqueezy.com/buyer-terms" target="_blank" rel="noopener noreferrer">Buyer Terms</a></li>
        </ul>
        <p>Lemon Squeezy actively defends against fraudulent chargebacks on our behalf. If a charge was made in error, contact us first and we will resolve it without a bank dispute.</p>
      </section>

      <section>
        <h2>Refund Abuse and Fraud Prevention</h2>
        <p>To protect the service and its users, we reserve the right to:</p>
        <ul>
          <li>Deny refund requests that show evidence of fraud or abuse, including repeated trial or refund cycling across accounts</li>
          <li>Limit refunds for users with a history of excessive refund requests</li>
          <li>Investigate suspicious refund patterns</li>
          <li>Permanently ban accounts engaged in refund fraud</li>
        </ul>
        <p>Lemon Squeezy also has fraud prevention measures in place and may deny refunds at its discretion if it detects fraudulent activity.</p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>We may update this Refund Policy to reflect changes in our practices, legal requirements or Lemon Squeezy&rsquo;s policies. Material changes will be communicated by:</p>
        <ul>
          <li>Email to your registered address</li>
          <li>A prominent notice on our website and in the application</li>
          <li>An update to the &ldquo;Last updated&rdquo; date at the top of this policy</li>
        </ul>
        <p>Your continued use of ClutterAI after changes take effect constitutes acceptance of the updated policy.</p>
      </section>

      <section>
        <h2>Questions or Issues?</h2>
        <ul>
          <li><strong>ClutterAI Support:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> — refund requests, account issues and general questions</li>
          <li><strong>Lemon Squeezy Support:</strong> <a href="https://www.lemonsqueezy.com/support" target="_blank" rel="noopener noreferrer">lemonsqueezy.com/support</a> — payment processing, receipts and billing questions</li>
          <li><strong>Mailing address:</strong> {POSTAL_ADDRESS}</li>
        </ul>
        <p>
          This Refund Policy is part of our <Link href="/terms">Terms of Service</Link> and is subject to applicable
          consumer protection law in your jurisdiction. Nothing in it limits your statutory rights as a consumer.
        </p>
      </section>
    </Legal>
  );
}
