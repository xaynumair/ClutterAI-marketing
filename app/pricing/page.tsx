"use client";

import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Student",
      description: "For students with a .edu email",
      priceMonthly: 9,
      priceAnnual: 90,
      features: [
        "Unlimited questions",
        "Notion integration",
        "GitHub & GitLab",
        "Gmail & Google Drive",
        "Google Calendar",
        "Email support",
      ],
      cta: "Start for free",
      popular: false,
    },
    {
      name: "Individual",
      description: "For professionals and freelancers",
      priceMonthly: 19,
      priceAnnual: 190,
      features: [
        "Everything in Student",
        "Slack integration",
        "Jira & Confluence",
        "Linear integration",
        "Trello & Airtable",
        "Zendesk integration",
        "Priority support",
      ],
      cta: "Start for free",
      popular: true,
    },
    {
      name: "Team",
      description: "For teams and organizations",
      priceMonthly: 15,
      priceAnnual: 150,
      priceNote: "per member/month",
      features: [
        "Everything in Individual",
        "Team knowledge sharing",
        "Admin dashboard",
        "Member management",
        "Dedicated support",
        "SSO (coming soon)",
      ],
      cta: "Get started",
      popular: false,
      minSeats: 3,
    },
  ];

  const visiblePlans = plans.filter((p) => {
    if (p.name === "Team" && billingCycle === "annual") return false;
    return true;
  });

  return (
    <div className="root">
      <div className="container">
        <Link href="/" className="back-link">← Back</Link>

        <header className="header">
          <p className="eyebrow">Pricing</p>
          <h1 className="headline">Simple, transparent<br />pricing.</h1>
          <p className="subtitle">Start free. Upgrade when you're ready.<br />No hidden fees. Cancel anytime.</p>

          <div className="billing-toggle">
            <button
              className={billingCycle === "monthly" ? "active" : ""}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={billingCycle === "annual" ? "active" : ""}
              onClick={() => setBillingCycle("annual")}
            >
              Annual
              <span className="save-badge">Save 17%</span>
            </button>
          </div>
        </header>

        <div className="plans-grid">
          {visiblePlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {plan.popular && <div className="popular-badge">Most popular</div>}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.description}</p>
              </div>

              <div className="price-row">
                <span className="currency">$</span>
                <span className="amount">
                  {billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual}
                </span>
                <span className="period">
                  {plan.priceNote || (billingCycle === "monthly" ? "/month" : "/year")}
                </span>
              </div>

              {plan.minSeats && billingCycle === "monthly" && (
                <p className="min-seats">Minimum {plan.minSeats} members</p>
              )}

              <a
                href={plan.name === "Team" ? "https://app.clutter-ai.com" : "https://app.clutter-ai.com/signup"}
                className={`cta-btn ${plan.popular ? "cta-primary" : "cta-secondary"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.cta}
              </a>

              <ul className="features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="check">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <section className="faq">
          <h2 className="faq-title">Frequently asked questions</h2>
          <div className="faq-grid">
            {[
              { q: "Can I try before I buy?", a: "Yes. All plans start with a free tier — 3 questions every 12 hours, forever. No credit card required." },
              { q: "Can I cancel anytime?", a: "Absolutely. Cancel anytime from your account settings. No questions asked." },
              { q: "What payment methods do you accept?", a: "We accept all major credit cards, debit cards, and PayPal through our secure payment processor." },
              { q: "Do you offer refunds?", a: "Yes. We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund you in full." },
            ].map((item) => (
              <div key={item.q} className="faq-item">
                <h3 className="faq-q">{item.q}</h3>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Unbounded:wght@700;800;900&family=Figtree:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .root {
          min-height: 100vh;
          background: #0a0a0a;
          color: #f0ede8;
          font-family: 'Figtree', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 48px 40px 120px;
        }

        .back-link {
          display: inline-block;
          font-size: 0.85rem;
          color: rgba(240,237,232,0.35);
          text-decoration: none;
          margin-bottom: 60px;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .back-link:hover { color: rgba(240,237,232,0.7); }

        /* ── Header ── */
        .header { margin-bottom: 80px; text-align: center; }
        .eyebrow {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.28);
          margin-bottom: 20px;
        }
        .headline {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          letter-spacing: -0.05em;
          line-height: 0.97;
          color: #f0ede8;
          margin-bottom: 20px;
        }
        .subtitle {
          font-size: 1rem;
          color: rgba(240,237,232,0.45);
          font-weight: 300;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        /* ── Billing toggle ── */
        .billing-toggle {
          display: inline-flex;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 4px;
          gap: 4px;
        }
        .billing-toggle button {
          padding: 10px 22px;
          background: transparent;
          border: none;
          color: rgba(240,237,232,0.4);
          border-radius: 5px;
          cursor: pointer;
          font-family: 'Figtree', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .billing-toggle button.active {
          background: rgba(255,255,255,0.08);
          color: #f0ede8;
        }
        .save-badge {
          padding: 2px 7px;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.2);
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #4ade80;
        }

        /* ── Plans grid ── */
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 100px;
        }

        .plan-card {
          position: relative;
          padding: 44px 40px;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          animation: fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) both;
          transition: background 0.2s;
        }
        .plan-card:hover { background: #0f0f0f; }
        .plan-card.popular { background: #0d0d0d; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: none; }
        }

        .popular-badge {
          display: inline-flex;
          align-self: flex-start;
          padding: 4px 12px;
          background: rgba(240,237,232,0.06);
          border: 1px solid rgba(240,237,232,0.12);
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(240,237,232,0.5);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .plan-header { margin-bottom: 28px; }
        .plan-name {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          color: #f0ede8;
          letter-spacing: -0.03em;
          margin-bottom: 6px;
        }
        .plan-desc { font-size: 0.85rem; color: rgba(240,237,232,0.35); font-weight: 300; }

        .price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 8px;
        }
        .currency {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          color: rgba(240,237,232,0.45);
          letter-spacing: -0.02em;
        }
        .amount {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 3.6rem;
          color: #f0ede8;
          letter-spacing: -0.06em;
          line-height: 1;
        }
        .period {
          font-size: 0.85rem;
          color: rgba(240,237,232,0.32);
          font-weight: 300;
          padding-bottom: 4px;
        }
        .min-seats {
          font-size: 0.78rem;
          color: rgba(240,237,232,0.22);
          font-weight: 300;
          margin-bottom: 0;
        }

        /* ── CTAs ── */
        .cta-btn {
          display: block;
          width: 100%;
          padding: 13px 20px;
          border-radius: 6px;
          font-family: 'Figtree', sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          text-align: center;
          text-decoration: none;
          transition: all 0.2s;
          margin-top: 28px;
          margin-bottom: 32px;
        }
        .cta-primary {
          background: #f0ede8;
          color: #0a0a0a;
        }
        .cta-primary:hover {
          background: #fff;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(240,237,232,0.1);
        }
        .cta-secondary {
          background: transparent;
          color: rgba(240,237,232,0.55);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .cta-secondary:hover {
          border-color: rgba(255,255,255,0.2);
          color: #f0ede8;
          background: rgba(255,255,255,0.04);
        }

        /* ── Features list ── */
        .features { list-style: none; padding: 0; flex: 1; }
        .features li {
          padding: 11px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.88rem;
          color: rgba(240,237,232,0.55);
          font-weight: 300;
        }
        .check {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(240,237,232,0.35);
          flex-shrink: 0;
          width: 16px;
        }

        /* ── FAQ ── */
        .faq-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          letter-spacing: -0.05em;
          color: #f0ede8;
          margin-bottom: 48px;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          overflow: hidden;
        }
        .faq-item {
          padding: 36px 40px;
          background: #0a0a0a;
          transition: background 0.2s;
        }
        .faq-item:hover { background: #0f0f0f; }
        .faq-q {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          color: #f0ede8;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .faq-a {
          font-size: 0.88rem;
          color: rgba(240,237,232,0.4);
          line-height: 1.7;
          font-weight: 300;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .faq-grid { grid-template-columns: 1fr; }
          .plans-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .container { padding: 32px 20px 80px; }
          .headline { font-size: 2.4rem; }
          .amount { font-size: 2.8rem; }
        }
      `}</style>
    </div>
  );
}