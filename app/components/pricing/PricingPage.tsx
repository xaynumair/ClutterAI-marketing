"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import "./pricing.css";
import { Spark, Icon } from "../Logo";
import { Reveal, useTween } from "../Reveal";
import { Accordion } from "../Accordion";
import { COMPARE, PERSONAL_PLANS, TEAM_PLANS, PLANS, type Plan } from "../../lib/plans";
import { APP_URL, SIGNUP_URL, SUPPORT_EMAIL, TRIAL_DAYS } from "../../lib/site";

type Cycle = "monthly" | "annual";
const d = (ms: number) => ({ "--d": `${ms}ms` } as CSSProperties);

/** Price shown on a card: per month (annual ÷ 12 when annual is selected). */
function shownPrice(p: Plan, cycle: Cycle) {
  if (cycle === "annual" && p.annual !== null && p.annual > 0) return p.annual / 12;
  return p.monthly;
}

function Price({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const v = useTween(value);
  return <span className="pr-n">{v.toFixed(decimals)}</span>;
}

function PlanCard({ p, cycle, seats, i }: { p: Plan; cycle: Cycle; seats: number; i: number }) {
  const monthlyOnly = p.annual === null;
  const price = shownPrice(p, cycle);
  const annualTotal = cycle === "annual" && p.annual ? p.annual : null;
  const teamTotal = p.perSeat ? price * seats : null;
  const href = p.group === "team" ? `${APP_URL}` : SIGNUP_URL;
  return (
    <div className={`card pr-card reveal-child ${p.popular ? "is-popular" : ""} ${p.group === "team" ? "is-team" : ""}`} style={d(i * 70)}>
      {p.popular && <span className="pr-flag">{p.group === "team" ? "Most teams pick this" : "Most popular"}</span>}
      <div className="pr-card-head">
        <h3 className="h-display h-sm">{p.name}</h3>
        <p className="pr-blurb">{p.blurb}</p>
      </div>
      <div className="pr-price">
        <span className="pr-cur">$</span>
        <Price value={price} decimals={Number.isInteger(price) ? 0 : 0} />
        <span className="pr-per">
          {p.monthly === 0 ? "forever" : p.perSeat ? "per seat / month" : "per month"}
        </span>
      </div>
      <p className="pr-note">
        {p.monthly === 0 && "After your free trial. No card, ever."}
        {p.monthly > 0 && monthlyOnly && "Monthly only — the highest limits don't lock in for a year."}
        {p.monthly > 0 && !monthlyOnly && cycle === "annual" && annualTotal !== null && (
          p.perSeat ? `Billed $${annualTotal} per seat a year` : `Billed $${annualTotal} a year — two months free`
        )}
        {p.monthly > 0 && !monthlyOnly && cycle === "monthly" && (p.note ?? "Billed monthly. Cancel any time.")}
      </p>
      {p.perSeat && (
        <p className="pr-team-total">
          {seats} seats ≈ <b>${Math.round((teamTotal ?? 0))}</b> / month{cycle === "annual" && p.annual ? ` (billed $${p.annual * seats} a year)` : ""}
        </p>
      )}
      <a href={href} className={`btn ${p.popular ? "btn-primary" : "btn-ghost"} pr-cta`}>{p.cta}</a>
      {p.plus && <p className="pr-plus">{p.plus}:</p>}
      <ul className="pr-feats">
        {p.features.map((f) => <li key={f}><Spark size={8} />{f}</li>)}
      </ul>
    </div>
  );
}

const FAQ = [
  { q: "What exactly happens after the 14 days?", a: <p>Your account moves to the Free plan on its own. Nothing is deleted, nothing is charged and no card was ever asked for. You keep chat, Notes, and all of your integrations. Forge, the agents, Attune and the other apps wait until you pick a paid plan.</p> },
  { q: "Why is my card statement from Lemon Squeezy?", a: <p>Lemon Squeezy is our merchant of record: they process the payment, collect tax and issue the receipt. So the charge shows as <b>Lemon Squeezy</b>, not ClutterAI. That is expected and means the payment went through.</p> },
  { q: "How is usage measured?", a: <p>Usage is metered in rolling five-hour windows with a weekly ceiling, the same way Claude does it — so a busy afternoon doesn’t lock you out for the day, and a quiet week doesn’t bank unused capacity. Each tier up multiplies the allowance; the app shows you where you are at any time.</p> },
  { q: "Can I switch plans later?", a: <p>Yes, from Settings in the app. Upgrades apply immediately and are prorated. Downgrades are scheduled for the end of the period you already paid for, so you keep what you have until then.</p> },
  { q: "Do you offer refunds?", a: <p>There is a 30-day money-back guarantee on your first purchase of any plan, provided the account has made fewer than 20 queries. EU and UK consumers also keep their statutory 14-day right. The full rules are in the <Link href="/refund">Refund Policy</Link>.</p> },
  { q: "Can I cancel any time?", a: <p>Yes — from account settings or the Lemon Squeezy customer portal in your receipt email. You keep access until the end of the billing period, then move to Free.</p> },
  { q: "What is the difference between Team Standard and Team Premium?", a: <p>Standard gives every member Pro-level usage. Premium gives every member Max 5×-level usage, including Forge on Deep effort. You can mix them — assign Premium to the people who code all day and Standard to everyone else. Both need at least three seats.</p> },
  { q: "Do team members see billing or upgrade prompts?", a: <p>No. Billing belongs to the team owner. Members see how much of the team allowance they have used and can ask their admin for more, but never a checkout.</p> },
];

export function PricingPage() {
  const [cycle, setCycle] = useState<Cycle>("monthly");
  const [seats, setSeats] = useState(5);

  return (
    <div className="pr">
      <section className="pr-hero">
        <div className="wrap center pr-hero-inner">
          <p className="kicker">Pricing</p>
          <h1 className="h-serif h-xl">Fourteen days of everything. Then pick a plan.</h1>
          <p className="lede">Every number on this page is the one you&rsquo;ll see inside the app. No card to start, no hidden fees, cancel any time.</p>

          <div className="pr-trial">
            {[
              { t: "Day 0", s: "Sign up. No card." },
              { t: `Days 1–${TRIAL_DAYS}`, s: "Full Pro: every app, every agent, Forge and Attune." },
              { t: `Day ${TRIAL_DAYS + 1}`, s: "Free plan keeps chat and Notes. Nothing is deleted." },
            ].map((s, i) => (
              <div key={s.t} className="pr-trial-step reveal-child" style={d(i * 120)}>
                <span className="pr-trial-t">{s.t}</span><span className="pr-trial-s">{s.s}</span>
              </div>
            ))}
          </div>

          <div className="pr-toggle" role="group" aria-label="Billing cycle">
            <button type="button" className={cycle === "monthly" ? "is-on" : ""} onClick={() => setCycle("monthly")}>Monthly</button>
            <button type="button" className={cycle === "annual" ? "is-on" : ""} onClick={() => setCycle("annual")}>
              Annual <span className="pr-save">2 months free</span>
            </button>
          </div>
        </div>
      </section>

      <Reveal as="section" className="section-tight pr-group">
        <div className="wrap">
          <div className="pr-group-head">
            <h2 className="h-display h-md">For one person</h2>
            <p className="small">Free, Pro and the two Max tiers. Max is where Forge runs at full depth.</p>
          </div>
          <div className="pr-grid pr-grid-5">
            {PERSONAL_PLANS.map((p, i) => <PlanCard key={p.id} p={p} cycle={cycle} seats={seats} i={i} />)}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section-tight band-b pr-group">
        <div className="wrap">
          <div className="pr-group-head pr-group-head-row">
            <div>
              <h2 className="h-display h-md">For teams</h2>
              <p className="small">One shared memory, an admin console, and billing that members never see. Minimum three seats.</p>
            </div>
            <label className="pr-seats">
              <span>Seats</span>
              <input type="range" min={3} max={50} value={seats} onChange={(e) => setSeats(Number(e.target.value))} aria-label="Number of seats" />
              <output>{seats}</output>
            </label>
          </div>
          <div className="pr-grid pr-grid-2">
            {TEAM_PLANS.map((p, i) => <PlanCard key={p.id} p={p} cycle={cycle} seats={seats} i={i} />)}
          </div>
          <p className="footnote" style={{ marginTop: 18 }}>
            Mix seats: a team of {seats} could put two people on Premium and the rest on Standard. Starting a team happens inside the app after you sign in.
          </p>
        </div>
      </Reveal>

      <Reveal as="section" className="section pr-compare">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Side by side</p>
            <h2 className="h-display h-lg">What each plan includes.</h2>
          </div>
          <div className="pr-table-wrap">
            <table className="pr-table">
              <thead>
                <tr>
                  <th scope="col">&nbsp;</th>
                  {PLANS.map((p) => <th key={p.id} scope="col">{p.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {PLANS.map((p) => {
                      const v = row.values[p.id];
                      return <td key={p.id} className={v ? "" : "is-dash"}>{v ?? "—"}</td>;
                    })}
                  </tr>
                ))}
                <tr>
                  <th scope="row">Price</th>
                  {PLANS.map((p) => (
                    <td key={p.id} className="is-price">
                      {p.monthly === 0 ? "$0" : `$${p.monthly}`}{p.perSeat ? " / seat" : ""}{p.monthly > 0 ? " / mo" : ""}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section band-b pr-faq">
        <div className="wrap pr-faq-grid">
          <div>
            <p className="kicker">Questions</p>
            <h2 className="h-display h-lg">The ones people actually ask.</h2>
            <p className="lede" style={{ marginTop: 16 }}>Anything else? <a href={`mailto:${SUPPORT_EMAIL}`} className="pr-link">{SUPPORT_EMAIL}</a> — or the <Link href="/contact" className="pr-link">support page</Link>.</p>
          </div>
          <Accordion items={FAQ} />
        </div>
      </Reveal>

      <section className="section center">
        <div className="wrap wrap-narrow pr-cta">
          <h2 className="h-serif h-lg">Start with the {TRIAL_DAYS} days.</h2>
          <p className="lede">Decide later. The trial is the whole product, not a taste of it.</p>
          <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start free <Icon.Arrow /></a>
        </div>
      </section>
    </div>
  );
}
