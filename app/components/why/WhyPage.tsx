"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import "./why.css";
import { Logo, Spark, Icon } from "../Logo";
import { CountUp, InView, Reveal } from "../Reveal";
import { at } from "../scenes/primitives";
import { POSTAL_ADDRESS, SIGNUP_URL, SUPPORT_EMAIL, TRIAL_DAYS } from "../../lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` } as CSSProperties);

// McKinsey Global Institute, "The social economy" (2012): knowledge workers
// spend ~19% of the week searching for and gathering information — about
// 1.8 hours of an 8-hour day. Everything below derives from that one figure.
const SHARE = 0.19;
const HOURS_PER_YEAR = 1.8 * 230; // ≈ 414 h, on 230 working days

function Calculator() {
  const [people, setPeople] = useState(8);
  const [salary, setSalary] = useState(80000);
  const hours = Math.round(HOURS_PER_YEAR * people);
  const cost = Math.round(salary * SHARE * people);
  const fmt = (n: number) => n.toLocaleString("en-US");
  return (
    <div className="card wy-calc">
      <div className="wy-calc-controls">
        <label>
          <span>People on the team</span>
          <input type="range" min={1} max={60} value={people} onChange={(e) => setPeople(Number(e.target.value))} aria-label="People on the team" />
          <output>{people}</output>
        </label>
        <label>
          <span>Average salary (USD)</span>
          <input type="range" min={40000} max={220000} step={5000} value={salary} onChange={(e) => setSalary(Number(e.target.value))} aria-label="Average salary" />
          <output>${fmt(salary)}</output>
        </label>
      </div>
      <div className="wy-calc-out">
        <div><span className="wy-calc-n">{fmt(hours)}</span><span className="wy-calc-l">hours a year spent looking, not doing</span></div>
        <div><span className="wy-calc-n">${fmt(cost)}</span><span className="wy-calc-l">of salary a year, buying the act of searching</span></div>
      </div>
      <p className="footnote">19% of the working week (McKinsey Global Institute, 2012), on 230 working days. Your mileage will vary; the shape won&rsquo;t.</p>
    </div>
  );
}

function Diagram() {
  const tools = ["Gmail", "Slack", "GitHub", "Notion", "Jira", "Drive", "Calendar"];
  const outs = ["Chat", "Folio", "Attune", "Facet", "Easel", "Pulse", "Digest", "Forge"];
  const H = 360;
  const ty = (i: number) => 28 + i * ((H - 56) / (tools.length - 1));
  const oy = (i: number) => 22 + i * ((H - 44) / (outs.length - 1));
  return (
    <svg viewBox={`0 0 760 ${H}`} className="wy-diagram" aria-hidden="true">
      {tools.map((t, i) => (
        <g key={t}>
          <path d={`M150 ${ty(i)} C 250 ${ty(i)}, 260 ${H / 2}, 330 ${H / 2}`} pathLength={1} className="sc-draw" style={at(300 + i * 90)} />
          <g className="sc-node" style={at(120 + i * 90)} transform={`translate(30 ${ty(i) - 15})`}>
            <rect width="120" height="30" rx="9" /><text x="60" y="19" textAnchor="middle">{t}</text>
          </g>
        </g>
      ))}
      <g className="sc-node" style={at(1000)} transform={`translate(330 ${H / 2 - 40})`}>
        <rect width="100" height="80" rx="18" fill="#000" stroke="rgba(240,237,232,0.25)" />
        <g stroke="#fff" strokeWidth="6" strokeLinecap="round" transform="translate(30 20) scale(0.4)">
          <line x1="50" y1="16" x2="50" y2="43" /><line x1="50" y1="57" x2="50" y2="84" />
          <line x1="20" y1="33" x2="43.5" y2="46.5" /><line x1="56.5" y1="53.5" x2="80" y2="67" />
          <line x1="80" y1="33" x2="56.5" y2="46.5" /><line x1="43.5" y1="53.5" x2="20" y2="67" />
        </g>
        <text x="50" y="70" textAnchor="middle" className="wy-diagram-cap">one memory</text>
      </g>
      {outs.map((o, i) => (
        <g key={o}>
          <path d={`M430 ${H / 2} C 500 ${H / 2}, 520 ${oy(i)}, 610 ${oy(i)}`} pathLength={1} className="sc-draw" style={at(1400 + i * 80)} />
          <g className={`sc-node ${i >= 5 ? "is-tilt" : ""}`} style={at(1700 + i * 80)} transform={`translate(610 ${oy(i) - 14})`}>
            <rect width="110" height="28" rx="9" /><text x="55" y="18" textAnchor="middle">{o}</text>
          </g>
        </g>
      ))}
    </svg>
  );
}

export function WhyPage() {
  return (
    <div className="wy">
      <section className="wy-hero">
        <div className="wrap wy-hero-inner">
          <p className="kicker">Why ClutterAI</p>
          <h1 className="h-serif h-xl">The tools won.<br />The knowledge lost.</h1>
          <p className="lede">
            Every team now runs on a dozen excellent tools, and every one of them keeps its own memory. The decision
            is in a Slack thread from March. The number is in a spreadsheet nobody can filter. The promise was made
            in a meeting and remembered by no one. We built ClutterAI so the memory could be one thing, and so the
            work could happen on top of it.
          </p>
        </div>
      </section>

      <Reveal as="section" className="section band-b wy-problem">
        <div className="wrap wy-two">
          <div className="wy-two-copy reveal-child" style={d(0)}>
            <p className="kicker">The problem</p>
            <h2 className="h-display h-lg">About <span className="serif-em"><CountUp to={1.8} decimals={1} /> hours</span> of every working day goes to looking for things.</h2>
            <p className="lede">
              That is McKinsey&rsquo;s number: roughly a fifth of the week spent searching for and gathering information.
              Nobody hires for it. It is the most expensive line no company has ever put on a budget — and it is
              paid at full salary.
            </p>
            <p className="lede">Slide the numbers to your team&rsquo;s. It stops being abstract quite quickly.</p>
          </div>
          <div className="reveal-child" style={d(120)}><Calculator /></div>
        </div>
      </Reveal>

      <Reveal as="section" className="section wy-how">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">How it works</p>
            <h2 className="h-display h-lg">Connect once. Everything draws from the same memory.</h2>
            <p className="lede">Not a search index bolted onto your tools — a memory the apps write into and the agents read from.</p>
          </div>
          <InView minHeight={380} threshold={0.3}><Diagram /></InView>
          <div className="wy-steps">
            {[
              { n: "01", t: "Connect", s: "Link Gmail, Slack, GitHub and the rest with OAuth — read-only wherever the provider offers it. Indexing starts immediately and stays current." },
              { n: "02", t: "Work here", s: "Write in Folio, listen with Attune, filter in Facet, draw in Easel, keep notes. Every save becomes part of the memory, cited by source." },
              { n: "03", t: "Let the agents run", s: "Pulse briefs you before meetings, Digest each morning, Triage on the queue, Forge on the codebase — from the same memory, never a stale copy." },
            ].map((s, i) => (
              <div key={s.n} className="card wy-step reveal-child" style={d(i * 100)}>
                <span className="wy-step-n">{s.n}</span>
                <h3 className="h-display h-sm">{s.t}</h3>
                <p>{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section band-b wy-first">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">From the first minute</p>
            <h2 className="h-serif h-lg">Useful before you connect anything.</h2>
          </div>
          <div className="wy-first-grid">
            {[
              { t: "Chat works on day zero", s: "Ask about the world before a single tool is linked. The moment you connect one, answers start coming from your own work — and say so." },
              { t: "Notes are free forever", s: "Writing, organising and searching cost nothing to run, so we don't charge for them. A notebook that feeds everything else, on every plan." },
              { t: `${TRIAL_DAYS} days of the real thing`, s: "Not a bigger free tier: the actual product. Forge, agents, Attune, all of it. You can't evaluate a coding agent on a taste." },
            ].map((c, i) => (
              <div key={c.t} className="card card-hover wy-first-card reveal-child" style={d(i * 90)}>
                <Logo size={34} radius={10} />
                <h3 className="h-display h-sm">{c.t}</h3>
                <p>{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section wy-who">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Who it&rsquo;s for</p>
            <h2 className="h-display h-lg">One person, a class, or the whole team.</h2>
          </div>
          <div className="wy-who-grid">
            <div className="reveal-child" style={d(0)}>
              <h3 className="h-serif h-md">You</h3>
              <p>Your inbox, your files, your notes, your meetings — searched by you, written by you, briefed to you. Nothing shared unless you share it.</p>
              <Link href="/pricing" className="wy-link">Pro and Max plans <Icon.Arrow /></Link>
            </div>
            <div className="reveal-child" style={d(90)}>
              <h3 className="h-serif h-md">Students</h3>
              <p>Attune&rsquo;s class mode turns a lecture into notes and flashcards. Notes hold the rest. The whole workspace for $9 a month with a .edu address.</p>
              <Link href="/pricing" className="wy-link">Student plan <Icon.Arrow /></Link>
            </div>
            <div className="reveal-child" style={d(180)}>
              <h3 className="h-serif h-md">Teams</h3>
              <p>One shared memory of documents, boards and meetings; private inboxes; an admin console; and billing that members never have to think about.</p>
              <Link href="/pricing#teams" className="wy-link">Team plans <Icon.Arrow /></Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="section band-b wy-security">
        <div className="wrap wy-two">
          <div className="wy-two-copy reveal-child" style={d(0)}>
            <p className="kicker">Security, honestly</p>
            <h2 className="h-display h-lg">What we do with your data, and what we don&rsquo;t.</h2>
            <p className="lede">No badges we haven&rsquo;t earned. Here is the actual list.</p>
          </div>
          <ul className="rows reveal-child" style={d(120)}>
            <li className="row"><span className="row-mark"><Spark /></span>Your content is never used to train AI models — ours or anyone else&rsquo;s</li>
            <li className="row"><span className="row-mark"><Spark /></span>Encrypted in transit (TLS) and at rest; OAuth tokens stored encrypted</li>
            <li className="row"><span className="row-mark"><Spark /></span>Gmail, Drive and Calendar are connected with read-only scopes</li>
            <li className="row"><span className="row-mark"><Spark /></span>Answers are private to the person who asked, even in a shared Slack channel</li>
            <li className="row"><span className="row-mark"><Spark /></span>Disconnect any app and its indexed data is removed within 30 days; delete your account and the rest follows</li>
            <li className="row"><span className="row-mark"><Spark /></span>Payments are handled by Lemon Squeezy; we never see your card</li>
            <li className="row"><span className="row-mark"><Spark /></span>The full list of processors, retention periods and your rights is in the <Link href="/privacy" className="wy-link-inline">privacy policy</Link></li>
          </ul>
        </div>
      </Reveal>

      <section className="section wy-company">
        <div className="wrap wy-company-inner">
          <div>
            <p className="kicker">The company</p>
            <h2 className="h-serif h-lg">Small team. Big memory.</h2>
            <p className="lede">ClutterAI is built by a small team and registered in Sheridan, Wyoming. We answer support ourselves, usually within a day.</p>
            <p className="small" style={{ marginTop: 12 }}>{POSTAL_ADDRESS}</p>
          </div>
          <div className="wy-company-actions">
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start your {TRIAL_DAYS} days <Icon.Arrow /></a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="btn btn-ghost btn-lg"><Icon.Mail size={16} /> {SUPPORT_EMAIL}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
