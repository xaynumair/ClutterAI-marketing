"use client";

import { useEffect, useRef, useState } from "react";

function Spark({ size = 11 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" style={{ display: "block" }}>
      <g stroke="currentColor" strokeWidth="14" strokeLinecap="round">
        <line x1="50" y1="12" x2="50" y2="88" />
        <line x1="17" y1="31" x2="83" y2="69" />
        <line x1="83" y1="31" x2="17" y2="69" />
      </g>
    </svg>
  );
}

// ── The catalogue ────────────────────────────────────────────────────────────
// Everything here describes behaviour that ships today. `similar` gives people
// a foothold: naming a tool they already know explains an app faster than any
// paragraph can. It's a comparison, not a claim of compatibility.
type App = {
  id: string;
  name: string;
  role: string;
  similar: string;
  tagline: string;
  body: string;
  features: string[];
  plan: string;
};

const APPS: App[] = [
  {
    id: "folio",
    name: "Folio",
    role: "Documents",
    similar: "Like Google Docs or Notion pages",
    tagline: "Write things your team can actually find later.",
    body:
      "A full editor rather than a text box: real tables you can resize, checklists, headings and formatting that survives export. Every document is embedded as you write, so it turns up in chat answers alongside your Slack threads and tickets.",
    features: [
      "Tables, task lists, headings and inline formatting — no markdown syntax to learn",
      "Autosaves as you type; open a document on another device and it's there",
      "Share with your team in one click, or keep it private by default",
      "Export to Word, HTML or Markdown with tables intact",
      "Start from a template — meeting notes, project brief, to-do list — or a blank page",
      "Ask a question about any document without leaving it",
    ],
    plan: "Included on Pro and above",
  },
  {
    id: "notes",
    name: "Notes",
    role: "Notebooks",
    similar: "Like OneNote or Apple Notes",
    tagline: "The place for everything not ready to be a document.",
    body:
      "Nested pages, as deep as you like. Drag one page into another to reorganise, tag anything, and search across the lot by keyword or by meaning. Notes stays free on every plan, forever — writing, organising and searching cost nothing to run, so we don't charge for them.",
    features: [
      "Unlimited nesting — drag to reorder or to nest inside another page",
      "Tag pages and filter by tag; search by keyword or by meaning",
      "The same editor as Folio: tables, checklists, images",
      "Ask AI to summarise a whole notebook, or pull the tasks out of a page",
      "Deleting a page asks first when it has children — nothing disappears quietly",
    ],
    plan: "Free forever, on every plan",
  },
  {
    id: "attune",
    name: "Attune",
    role: "Meetings & classes",
    similar: "Like Otter.ai or Granola",
    tagline: "Listen once. Keep everything.",
    body:
      "Attune transcribes live — from your microphone or straight from a browser tab — and writes the notes as it goes. Afterwards it pulls out who committed to what, and those commitments land in the same task layer your agents read from.",
    features: [
      "Live transcription from your mic or from a shared browser tab",
      "Notes written as the meeting happens, not fifteen minutes after",
      "Ask questions about anything said, with the full transcript in context",
      "Class mode turns a lecture into flashcards for revision",
      "Action items become tracked follow-ups automatically",
      "Every session is searchable afterwards, alongside the rest of your work",
    ],
    plan: "Included on Pro and above",
  },
  {
    id: "facet",
    name: "Facet",
    role: "Data",
    similar: "Like Airtable or a smarter spreadsheet",
    tagline: "Ask your spreadsheet a question in English.",
    body:
      "Connect an Airtable base or upload a CSV and Facet mirrors it live. Type what you want in plain language — \"customers in the EU who churned after less than three months\" — and it compiles that into a real filter you can inspect and adjust.",
    features: [
      "Live mirror of your Airtable bases, or upload a CSV up to 25,000 rows",
      "Filter in plain English; see exactly what it understood",
      "Deduplicate on any column as a first-class operation",
      "AI columns that fill themselves — categorise, extract, summarise per row",
      "Runs tell you the cost before they start, and skip rows already filled",
      "Save a view and share it with your team",
    ],
    plan: "Included on Pro and above",
  },
  {
    id: "easel",
    name: "Easel",
    role: "Canvas",
    similar: "Like Miro, FigJam or Excalidraw",
    tagline: "Draw the thing, or have it drawn for you.",
    body:
      "An infinite whiteboard for architecture, planning and thinking out loud. Describe a system and Easel lays it out as a real diagram — and it can ground that drawing in your own repos and docs rather than in guesswork.",
    features: [
      "Full drawing tools — shapes, arrows, freehand, text, images",
      "Describe a diagram and watch it laid out automatically",
      "Ground a diagram in your own data, so it reflects your architecture",
      "Cluster loose sticky notes into themes in one click",
      "Turn a board into tracked tasks",
      "See who else is on the board with you",
    ],
    plan: "Included on Pro and above",
  },
];

const AGENTS = [
  { name: "Forge", role: "Coding", similar: "Like Claude Code or Cursor", line: "Writes, debugs and refactors with your repos, issues and docs already in context. Choose how much effort each question deserves." },
  { name: "Pulse", role: "Meeting prep", similar: "Like a chief of staff", line: "Briefs you before a meeting on who's involved, what was last said, and what's still open." },
  { name: "Triage", role: "Ticket queue", similar: "Like a support lead", line: "Ranks every open ticket by urgency and drafts a fix grounded in ones you've already resolved." },
  { name: "Digest", role: "Daily briefing", similar: "Like a morning stand-up", line: "Each morning: what changed, what's waiting on you, and what you promised someone." },
];

export default function Marketplace() {
  const [active, setActive] = useState<string>(APPS[0].id);
  const rootRef = useRef<HTMLDivElement>(null);

  // Highlight the app you're currently reading in the rail
  useEffect(() => {
    const els = APPS.map((a) => document.getElementById(a.id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.1, 0.5, 1] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="page" ref={rootRef}>
      {/* ── Hero ── */}
      <section className="mk-hero">
        <p className="feat-kicker"><span className="fk-dot" />Marketplace</p>
        <h1 className="mk-title">Everything in the<br />workspace.</h1>
        <p className="mk-sub">
          Five apps and four agents, all reading from the same connected
          knowledge. Anything you make in one becomes searchable everywhere else.
        </p>
      </section>

      {/* ── Apps ── */}
      <section className="mk-body">
        <aside className="mk-rail">
          <p className="mk-rail-label">Apps</p>
          {APPS.map((a) => (
            <a key={a.id} href={`#${a.id}`}
              className={`mk-rail-link ${active === a.id ? "mk-rail-active" : ""}`}>
              {a.name}
              <span className="mk-rail-role">{a.role}</span>
            </a>
          ))}
        </aside>

        <div className="mk-apps">
          {APPS.map((app) => (
            <article key={app.id} id={app.id} className="mk-app">
              <div className="mk-app-head">
                <h2 className="mk-app-name">{app.name}</h2>
                <span className="mk-app-role">{app.role}</span>
              </div>
              <p className="mk-similar">{app.similar}</p>
              <p className="mk-app-tagline">{app.tagline}</p>
              <p className="mk-app-body">{app.body}</p>
              <ul className="mk-features">
                {app.features.map((f, i) => (
                  <li key={i} className="mk-feature">
                    <span className="mk-feature-mark"><Spark /></span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mk-plan">{app.plan}</p>
            </article>
          ))}

          {/* Agents, briefly — they have their own section on the landing page */}
          <article className="mk-app mk-agents">
            <div className="mk-app-head">
              <h2 className="mk-app-name">Agents</h2>
              <span className="mk-app-role">Always running</span>
            </div>
            <p className="mk-app-body">
              The apps are where you work. The agents work while you don't.
            </p>
            <div className="mk-agent-grid">
              {AGENTS.map((ag) => (
                <div key={ag.name} className="mk-agent">
                  <div className="mk-agent-head">
                    <h3 className="mk-agent-name">{ag.name}</h3>
                    <span className="mk-agent-role">{ag.role}</span>
                  </div>
                  <p className="mk-agent-similar">{ag.similar}</p>
                  <p className="mk-agent-line">{ag.line}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mk-cta-section">
        <h2 className="mk-cta-title">Try all of it for 14 days.</h2>
        <p className="mk-cta-sub">
          Every app, every agent, no card. Chat and Notes stay free afterwards.
        </p>
        <a href="https://app.clutter-ai.com/signup" className="mk-cta">Start free →</a>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Figtree:wght@300;400;500;600&display=swap');

        .page {
          background: #0A0A0A; color: #F0EDE8;
          font-family: 'Figtree', -apple-system, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* Hero */
        .mk-hero { max-width: 1200px; margin: 0 auto; padding: 88px 32px 68px; }
        .feat-kicker {
          display: flex; align-items: center; gap: 8px; margin: 0 0 22px;
          font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em;
          color: rgba(240,237,232,0.45);
        }
        .fk-dot { width: 6px; height: 6px; border-radius: 50%; background: #D97757; display: inline-block; }
        .mk-title {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(46px, 7vw, 78px); line-height: 1.03;
          letter-spacing: -0.03em; margin: 0 0 26px;
        }
        .mk-sub {
          font-size: 20px; line-height: 1.58; max-width: 620px; margin: 0;
          color: rgba(240,237,232,0.62);
        }

        /* Body layout */
        .mk-body {
          max-width: 1200px; margin: 0 auto; padding: 0 32px 96px;
          display: grid; grid-template-columns: 190px 1fr; gap: 68px;
          align-items: start;
        }
        .mk-rail { position: sticky; top: 88px; }
        .mk-rail-label {
          font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;
          color: rgba(240,237,232,0.32); margin: 0 0 16px;
        }
        .mk-rail-link {
          display: flex; flex-direction: column; gap: 2px;
          padding: 10px 0 10px 15px; text-decoration: none;
          border-left: 2px solid rgba(240,237,232,0.08);
          color: rgba(240,237,232,0.5);
          font-size: 16px; transition: color .2s ease, border-color .2s ease;
        }
        .mk-rail-link:hover { color: rgba(240,237,232,0.8); }
        .mk-rail-active { color: #F0EDE8; border-left-color: #D97757; }
        .mk-rail-role {
          font-size: 12px; text-transform: uppercase; letter-spacing: 0.07em;
          color: rgba(240,237,232,0.3);
        }

        /* App entries */
        .mk-apps { display: flex; flex-direction: column; gap: 96px; }
        .mk-app { scroll-margin-top: 88px; }
        .mk-app-head { display: flex; align-items: baseline; gap: 14px; margin-bottom: 10px; }
        .mk-app-name {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 44px; letter-spacing: -0.025em; margin: 0;
        }
        .mk-app-role {
          font-size: 13px; text-transform: uppercase; letter-spacing: 0.09em;
          color: rgba(240,237,232,0.38);
        }
        /* The "like X" line — a foothold before the pitch */
        .mk-similar {
          display: inline-block; margin: 0 0 18px;
          padding: 5px 13px; border-radius: 999px;
          background: rgba(217,119,87,0.10);
          border: 1px solid rgba(217,119,87,0.22);
          font-size: 14px; color: #D97757;
        }
        .mk-app-tagline {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 500;
          font-size: 25px; line-height: 1.32; color: rgba(240,237,232,0.9);
          margin: 0 0 18px; letter-spacing: -0.015em;
        }
        .mk-app-body {
          font-size: 18px; line-height: 1.7; max-width: 660px; margin: 0 0 30px;
          color: rgba(240,237,232,0.62);
        }
        .mk-features { list-style: none; padding: 0; margin: 0 0 26px; display: grid; gap: 13px; }
        .mk-feature {
          display: flex; align-items: flex-start; gap: 13px;
          font-size: 17px; line-height: 1.58; color: rgba(240,237,232,0.76);
        }
        .mk-feature-mark { color: #D97757; margin-top: 7px; flex-shrink: 0; }
        .mk-plan {
          display: inline-block; padding: 7px 15px; border-radius: 999px;
          border: 1px solid rgba(240,237,232,0.14);
          font-size: 14px; color: rgba(240,237,232,0.55); margin: 0;
        }

        /* Agents */
        .mk-agents { border-top: 1px solid rgba(240,237,232,0.08); padding-top: 60px; }
        .mk-agent-grid {
          display: grid; gap: 16px; margin-top: 10px;
          grid-template-columns: repeat(auto-fit, minmax(268px, 1fr));
        }
        .mk-agent {
          padding: 26px 24px; border-radius: 16px;
          border: 1px solid rgba(240,237,232,0.08);
          background: rgba(240,237,232,0.016);
        }
        .mk-agent-head { display: flex; align-items: baseline; gap: 9px; margin-bottom: 6px; }
        .mk-agent-name {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 700;
          font-size: 21px; margin: 0;
        }
        .mk-agent-role {
          font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.08em;
          color: rgba(240,237,232,0.32);
        }
        .mk-agent-similar { font-size: 13.5px; color: #D97757; margin: 0 0 10px; }
        .mk-agent-line { font-size: 16px; line-height: 1.6; margin: 0; color: rgba(240,237,232,0.6); }

        /* CTA */
        .mk-cta-section {
          text-align: center; padding: 100px 32px 116px;
          border-top: 1px solid rgba(240,237,232,0.07);
        }
        .mk-cta-title {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(34px, 5vw, 54px); letter-spacing: -0.025em; margin: 0 0 16px;
        }
        .mk-cta-sub { font-size: 18px; color: rgba(240,237,232,0.58); margin: 0 0 34px; }
        .mk-cta {
          display: inline-block; padding: 16px 34px; border-radius: 999px;
          background: #F0EDE8; color: #0A0A0A;
          font-size: 18px; font-weight: 600; text-decoration: none;
          transition: opacity .2s ease;
        }
        .mk-cta:hover { opacity: 0.88; }

        @media (max-width: 900px) {
          .mk-body { grid-template-columns: 1fr; gap: 40px; }
          .mk-rail {
            position: static; display: flex; gap: 8px; overflow-x: auto;
            padding-bottom: 8px;
          }
          .mk-rail-label { display: none; }
          .mk-rail-link {
            border-left: none; border-bottom: 2px solid rgba(240,237,232,0.08);
            padding: 9px 16px 9px 0; white-space: nowrap;
          }
          .mk-rail-active { border-bottom-color: #D97757; }
          .mk-rail-role { display: none; }
        }
        @media (max-width: 640px) {
          .mk-hero, .mk-body, .mk-cta-section { padding-left: 20px; padding-right: 20px; }
          .mk-hero { padding-top: 56px; }
          .mk-apps { gap: 68px; }
          .mk-app-name { font-size: 36px; }
          .mk-app-tagline { font-size: 21px; }
          .mk-app-body { font-size: 17px; }
          .mk-feature { font-size: 16px; }
        }
      `}</style>
    </div>
  );
}