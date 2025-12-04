"use client";

import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Student",
      description: "Perfect for students with .edu email",
      priceMonthly: 9,
      priceAnnual: 90,
      features: [
        "Unlimited questions",
        "Google Drive integration",
        "Gmail integration",
        "Slack integration",
        "Calendar integration",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Individual",
      description: "For professionals and freelancers",
      priceMonthly: 19,
      priceAnnual: 190,
      features: [
        "Everything in Student",
        "24/7 support",
        "Advanced search filters",
        "Export capabilities",
        "Custom integrations",
      ],
      cta: "Start For Free",
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
      cta: "Get Started",
      popular: false,
      minSeats: 3,
    },
  ];

  // Filter plans for rendering: hide Team plan when annual billing is selected
  const visiblePlans = plans.filter((p) => {
    if (p.name === "Team" && billingCycle === "annual") return false;
    return true;
  });

  return (
    <div className="pricing-page">
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <div className="grid-background"></div>

      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        <header>
          <h1>
            Simple, <span className="gradient">transparent</span> pricing
          </h1>
          <p className="subtitle">
            Start free. Upgrade when you're ready. No hidden fees. Cancel anytime.
          </p>

          <div className="billing-toggle" role="tablist" aria-label="Billing cycle toggle">
            <button
              aria-pressed={billingCycle === "monthly"}
              className={billingCycle === "monthly" ? "active" : ""}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              aria-pressed={billingCycle === "annual"}
              className={billingCycle === "annual" ? "active" : ""}
              onClick={() => setBillingCycle("annual")}
            >
              Annual
              <span className="save-badge">Save 17%</span>
            </button>
          </div>
        </header>

        <div className="plans-grid" role="list">
          {visiblePlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`plan-card ${plan.popular ? "popular" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
              aria-label={`${plan.name} plan`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="price" aria-hidden="false">
                <span className="currency">$</span>
                <span className="amount">
                  {billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual}
                </span>
                <span className="period">
                  {plan.priceNote || `/${billingCycle === "monthly" ? "month" : "year"}`}
                </span>
              </div>

              {plan.minSeats && billingCycle === "monthly" && (
                <p className="min-seats">Minimum {plan.minSeats} members</p>
              )}

              <a
                href={plan.name === "Team" ? "/contact" : "https://app.clutter-ai.com/signup"}
                className={`cta-button ${plan.popular ? "primary" : "secondary"}`}
                role="button"
              >
                {plan.cta}
              </a>

              <ul className="features" aria-hidden="false">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className="checkmark" aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="faq-section" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I try before I buy?</h3>
              <p>
                Yes! All plans start with a free tier: 3 questions every 12 hours, forever. No credit card required.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I cancel anytime?</h3>
              <p>Absolutely. Cancel anytime from your account settings. No questions asked.</p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major credit cards, debit cards, and PayPal through our secure payment processor.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer refunds?</h3>
              <p>
                Yes! We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund you in full.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pricing-page {
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
          background-image: linear-gradient(to right, rgba(88, 28, 135, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(88, 28, 135, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          animation: float 25s infinite ease-in-out;
          opacity: 0.2;
        }

        .orb-1 {
          top: 10%;
          right: 10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(88, 28, 135, 0.3) 0%, transparent 70%);
        }

        .orb-2 {
          bottom: 10%;
          left: 10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(107, 33, 168, 0.25) 0%, transparent 70%);
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(50px, -50px);
          }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
          position: relative;
          z-index: 2;
        }

        .back-link {
          display: inline-block;
          color: #a1a1aa;
          text-decoration: none;
          margin-bottom: 30px;
          transition: color 0.3s;
        }

        .back-link:hover {
          color: #c4b5fd;
        }

        header {
          text-align: center;
          margin-bottom: 80px;
        }

        h1 {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #a1a1aa;
          margin-bottom: 40px;
        }

        .billing-toggle {
          display: inline-flex;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 4px;
          gap: 4px;
        }

        .billing-toggle button {
          padding: 12px 24px;
          background: transparent;
          border: none;
          color: #a1a1aa;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          font-weight: 600;
          position: relative;
        }

        .billing-toggle button.active {
          background: rgba(109, 40, 217, 0.2);
          color: white;
        }

        .save-badge {
          display: inline-block;
          margin-left: 8px;
          padding: 2px 8px;
          background: #16a34a;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-bottom: 100px;
        }

        .plan-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 40px;
          position: relative;
          transition: all 0.3s ease;
          animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .plan-card:hover {
          transform: translateY(-5px);
          border-color: rgba(109, 40, 217, 0.3);
          background: rgba(255, 255, 255, 0.03);
        }

        .plan-card.popular {
          border-color: rgba(109, 40, 217, 0.5);
          background: rgba(109, 40, 217, 0.05);
          box-shadow: 0 0 60px rgba(109, 40, 217, 0.2);
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #6d28d9, #5b21b6);
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .plan-card h3 {
          font-size: 1.75rem;
          margin-bottom: 10px;
        }

        .plan-description {
          color: #a1a1aa;
          margin-bottom: 30px;
        }

        .price {
          display: flex;
          align-items: baseline;
          margin-bottom: 10px;
        }

        .currency {
          font-size: 1.5rem;
          color: #a1a1aa;
        }

        .amount {
          font-size: 4rem;
          font-weight: 800;
          margin: 0 8px;
        }

        .period {
          color: #a1a1aa;
          font-size: 1rem;
        }

        .min-seats {
          color: #71717a;
          font-size: 0.9rem;
          margin-bottom: 30px;
        }

        .cta-button {
          display: block;
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s;
          margin-bottom: 30px;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #6d28d9, #5b21b6);
          color: white;
        }

        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(109, 40, 217, 0.4);
        }

        .cta-button.secondary {
          background: rgba(109, 40, 217, 0.1);
          color: #c4b5fd;
          border: 1px solid rgba(109, 40, 217, 0.3);
        }

        .cta-button.secondary:hover {
          background: rgba(109, 40, 217, 0.2);
        }

        .features {
          list-style: none;
          padding: 0;
        }

        .features li {
          padding: 12px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .checkmark {
          color: #7c3aed;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .faq-section {
          margin-top: 100px;
        }

        .faq-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 60px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 30px;
          transition: all 0.3s;
        }

        .faq-item:hover {
          border-color: rgba(109, 40, 217, 0.3);
          transform: translateY(-3px);
        }

        .faq-item h3 {
          font-size: 1.25rem;
          margin-bottom: 15px;
          color: #c4b5fd;
        }

        .faq-item p {
          color: #a1a1aa;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }

          .plans-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}