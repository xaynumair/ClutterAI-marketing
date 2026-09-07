"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import "./home.css";
import { Logo, Spark, Icon } from "../Logo";
import { CountUp, InView, Reveal, useInView } from "../Reveal";
import { SceneDeck } from "../scenes/SceneDeck";
import { PulseScene } from "../scenes/PulseScene";
import { AttuneScene } from "../scenes/AttuneScene";
import { FolioScene } from "../scenes/FolioScene";
import { FacetScene } from "../scenes/FacetScene";
import { at, Chip, Window, useTimeline, useTyped, Caret } from "../scenes/primitives";
import { INTEGRATIONS, INTEGRATION_COUNT } from "../../lib/integrations";
import { APPS } from "../../lib/apps";
import { AGENTS } from "../../lib/agents";
import { PLANS } from "../../lib/plans";
import { SIGNUP_URL, TRIAL_DAYS } from "../../lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` } as CSSProperties);

/* ── "Search was the easy part": results list → a document writing itself ── */
function EasyPart() {
  const q = useTyped("Q3 pricing memo", 300, 60);
  const phase = useTimeline([3600]); // 1 = the list gives way to Folio
  const results = [
    { src: "Drive", name: "Q3 pricing memo (final) (2).docx", meta: "Modified 3 months ago" },
    { src: "Slack", name: "#finance", meta: "43 messages mention pricing" },
    { src: "Notion", name: "Pricing v3", meta: "Last edited by Sarah" },
    { src: "Gmail", name: "Re: Re: Re: pricing memo", meta: "Thread · 12 replies" },
    { src: "Jira", name: "PRICE-112 · Update pricing page", meta: "Done" },
  ];
  return (
    <div className="hm-easy-stage">
      <div className={`hm-search ${phase >= 1 ? "is-gone" : ""}`}>
        <div className="hm-search-box sc-in" style={at(100)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          <span>{q.text}{!q.done && <Caret />}</span>
        </div>
        <div className="hm-results">
          {results.map((r, i) => (
            <div key={r.name} className="hm-result sc-in" style={at(1500 + i * 220)}>
              <span className="hm-result-src">{r.src}</span>
              <span className="hm-result-name">{r.name}</span>
              <span className="hm-result-meta">{r.meta}</span>
            </div>
          ))}
        </div>
        <p className="hm-search-verdict sc-in" style={at(2900)}>Five places. Which one is the answer?</p>
      </div>
      {phase >= 1 && (
        <div className="hm-easy-folio sc-in">
          <FolioScene />
          <p className="hm-easy-caption">The memo, written from all five — with the receipts.</p>
        </div>
      )}
    </div>
  );
}

/* ── Forge and Digest miniatures for the Tuesday ── */
function ForgeMini() {
  const phase = useTimeline([2600, 3400]);
  const lines = [72, 88, 54, 80, 46, 66];
  return (
    <Window app="Forge" title="migrate.ts" right={<span className="sc-pill">‹ v2 / 3 ›</span>}>
      <div className="hm-forge">
        <div className="hm-forge-tabs sc-in" style={at(100)}>
          <span className="is-on">migrate.ts</span><span>schema.sql</span><span>README.md</span>
        </div>
        <div className="hm-forge-code">
          {lines.map((w, i) => (
            <span key={i} className={`hm-code-line sc-in ${i === 2 || i === 4 ? "is-add" : ""}`} style={{ ...at(400 + i * 260), width: `${w}%` }} />
          ))}
        </div>
        {phase >= 1 && (
          <div className="sc-chip-row">
            <Chip delay={0}><Icon.GitHub /> api/schema.ts</Chip>
            <Chip delay={140}><Icon.Slack /> #architecture · retries</Chip>
            {phase >= 2 && <Chip delay={0} tone="accent">Saved to workspace</Chip>}
          </div>
        )}
      </div>
    </Window>
  );
}

function DigestMini() {
  const phase = useTimeline([3200]);
  return (
    <Window app="Digest" title="Tuesday, 17:30" right={<span className="sc-pill">Waiting on you: 2</span>}>
      <div className="hm-digest">
        <span className="sc-label sc-in" style={at(100)}>Waiting on you</span>
        <div className="sc-attune-item is-mine sc-in" style={at(300)}>
          <span className="sc-check"><Icon.Check /></span>
          <span>Send the numbers <span className="sc-dim">· promised tonight, in Design sync</span></span>
        </div>
        <div className="sc-attune-item sc-in" style={at(700)}>
          <span className="sc-check"><Icon.Check /></span>
          <span>Reply to Marcus about annual billing <span className="sc-dim">· 2 days open</span></span>
        </div>
        <span className="sc-label sc-in" style={{ ...at(1300), marginTop: 10 }}>Closed itself</span>
        <div className="sc-attune-item is-done sc-in" style={at(1500)}>
          <span className="sc-check"><Icon.Check /></span>
          <span className="sc-attune-item-text">Vendor quote <span className="sc-dim">· received 14:12</span></span>
        </div>
        <div className="sc-attune-item is-done sc-in" style={at(1800)}>
          <span className="sc-check"><Icon.Check /></span>
          <span className="sc-attune-item-text">Contract redline <span className="sc-dim">· legal replied</span></span>
        </div>
        {phase >= 1 && <span className="sc-chip is-accent sc-pop" style={at(0)}>14 updates filtered out — nothing needed from you</span>}
      </div>
    </Window>
  );
}

const DAY = [
  { time: "08:55", app: "Pulse", line: "Pulse has read the thread you forgot about.", Scene: PulseScene },
  { time: "09:00", app: "Attune", line: "Attune takes the notes. You take the meeting.", Scene: AttuneScene },
  { time: "10:30", app: "Folio", line: "The memo cites its sources while you type.", Scene: FolioScene },
  { time: "12:00", app: "Facet", line: "Ask the spreadsheet a question. Get a filter, not a formula.", Scene: FacetScene },
  { time: "14:00", app: "Forge", line: "Forge writes from your repo and your threads, not from a guess.", Scene: ForgeMini },
  { time: "17:30", app: "Digest", line: "Two things still need you. One of them is that deck.", Scene: DigestMini },
];

function Tuesday() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  // The rail follows whichever card is nearest the middle of the viewport,
  // so the clock and sentence always describe what the reader is looking at.
  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;
    let raf = 0;
    const pick = () => {
      raf = 0;
      const mid = window.innerHeight * 0.45;
      let best = 0;
      let bestDist = Infinity;
      els.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      setActive((a) => (a === best ? a : best));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(pick); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  const beat = DAY[active];
  return (
    <div className="hm-day">
      <div className="hm-day-rail">
        <div className="hm-day-sticky">
          <p className="kicker">A Tuesday with ClutterAI</p>
          <div key={active} className="hm-day-clock sc-in">
            <span className="hm-day-time">{beat.time}</span>
            <span className="hm-day-app">{beat.app}</span>
          </div>
          <p key={`l${active}`} className="hm-day-line sc-in" style={at(80)}>{beat.line}</p>
          <ol className="hm-day-dots" aria-hidden="true">
            {DAY.map((b, i) => <li key={b.time} className={i === active ? "is-on" : i < active ? "is-done" : ""} />)}
          </ol>
        </div>
      </div>
      <div className="hm-day-beats">
        {DAY.map((b, i) => (
          <div key={b.time} className="hm-beat" data-i={i} ref={(el) => { refs.current[i] = el; }}>
            <div className="hm-beat-time"><span>{b.time}</span><span className="hm-beat-app">{b.app}</span></div>
            <InView minHeight={300} threshold={0.3}><b.Scene /></InView>
            <p className="hm-beat-line">{b.line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Apps bento with hover peeks ── */
function Peek({ id }: { id: string }) {
  switch (id) {
    case "attune":
      return <div className="hm-peek hm-peek-attune"><span className="sc-label">Listening</span><span className="hm-wave">{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => <i key={i} style={{ "--i": i } as CSSProperties} />)}</span><span className="hm-peek-chip">&ldquo;send the deck by Thursday&rdquo; → task · Priya</span></div>;
    case "folio":
      return <div className="hm-peek hm-peek-folio"><span className="hm-pl" style={{ width: "80%" }} /><span className="hm-pl" style={{ width: "62%" }} /><span className="hm-pl hm-pl-new" style={{ width: "74%" }} /><span className="hm-peek-chip">from #finance · Notion</span></div>;
    case "facet":
      return <div className="hm-peek hm-peek-facet">{["Acme · High", "Northwind · Low", "Initech · High", "Globex · Low"].map((r, i) => <span key={r} className={`hm-fr hm-fr-${i}`}>{r}</span>)}</div>;
    case "easel":
      return <div className="hm-peek hm-peek-easel"><svg viewBox="0 0 220 70" aria-hidden="true"><path d="M40 35 C 70 35, 70 18, 96 18" pathLength={1} className="hm-edge" /><path d="M40 35 C 70 35, 70 52, 96 52" pathLength={1} className="hm-edge" /><path d="M148 18 L 176 18" pathLength={1} className="hm-edge" /><rect x="8" y="24" width="32" height="22" rx="6" /><rect x="96" y="7" width="52" height="22" rx="6" /><rect x="96" y="41" width="52" height="22" rx="6" /><rect x="176" y="7" width="36" height="22" rx="6" /></svg></div>;
    case "notes":
      return <div className="hm-peek hm-peek-notes"><span>📓 Journal</span><span className="hm-nt-child">2026-09-07</span><span>🧪 Product</span><span className="hm-nt-child hm-nt-move">Ideas for the offsite <span className="hm-peek-chip">planning</span></span></div>;
    default:
      return null;
  }
}

function Slack() {
  const phase = useTimeline([2200]);
  return (
    <div className="hm-slack sc-window">
      <div className="sc-head"><span className="sc-app">Slack</span><span className="sc-title">#accounts</span><span className="sc-head-right sc-pill">@ClutterAI</span></div>
      <div className="sc-body hm-slack-body">
        <div className="hm-slack-msg sc-in" style={at(150)}>
          <span className="sc-avatar">JT</span>
          <div><span className="hm-slack-name">Jordan</span><p>@ClutterAI what&rsquo;s the latest on the Acme renewal?</p></div>
        </div>
        {phase < 1 && <div className="sc-chat-thinking sc-in" style={at(900)}><span className="sc-dots"><i /><i /><i /></span>ClutterAI is searching…</div>}
        {phase >= 1 && (
          <div className="hm-slack-msg sc-in">
            <span className="sc-avatar" style={{ background: "transparent", border: 0 }}><Logo size={28} radius={8} /></span>
            <div>
              <span className="hm-slack-name">ClutterAI <span className="sc-dim">· Only visible to you</span></span>
              <p>Confirmed for the 1st at the current tier — Sarah replied yesterday afternoon. One open item: they asked for updated invoicing details before the term starts.</p>
              <div className="sc-chip-row">
                <Chip delay={250}><Icon.Gmail /> Renewal confirmation</Chip>
                <Chip delay={370}><Icon.Slack /> #accounts</Chip>
                <Chip delay={500} tone="accent">Share to channel</Chip>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TeamsMock() {
  const members = [
    { n: "Priya N.", role: "Owner", pct: 62 },
    { n: "Alex R.", role: "Member", pct: 41 },
    { n: "Sarah C.", role: "Admin", pct: 78 },
    { n: "Marcus O.", role: "Member", pct: 18 },
  ];
  return (
    <Window app="Admin" title="Acme · 4 seats" right={<span className="sc-pill">Team Standard</span>}>
      <div className="hm-team">
        <span className="sc-label sc-in" style={at(100)}>Usage this week</span>
        {members.map((m, i) => (
          <div key={m.n} className="hm-team-row sc-in" style={at(300 + i * 220)}>
            <span className="sc-avatar">{m.n.split(" ").map((s) => s[0]).join("")}</span>
            <span className="hm-team-name">{m.n} <span className="sc-dim">· {m.role}</span></span>
            <span className="hm-team-bar"><i style={{ ...d(600 + i * 220), "--w": `${m.pct}%` } as CSSProperties} /></span>
            <span className="hm-team-pct">{m.pct}%</span>
          </div>
        ))}
        <div className="sc-chip-row">
          <Chip delay={1400}>Invite by email</Chip>
          <Chip delay={1550}>Members never see billing</Chip>
          <Chip delay={1700} tone="accent">Shared: 12 docs · 3 boards</Chip>
        </div>
      </div>
    </Window>
  );
}

export function HomePage() {
  const { ref: heroRef, inView: heroVisible } = useInView<HTMLElement>({ threshold: 0.1 });
  const teaser = PLANS.filter((p) => ["free", "pro", "team"].includes(p.id));

  return (
    <div className="hm">
      {/* ── Hero ── */}
      <section className="hm-hero" ref={heroRef}>
        <div className="wrap hm-hero-grid">
          <div className={`hm-hero-copy ${heroVisible ? "in" : ""}`}>
            <h1 className="h-serif h-xl reveal-child" style={d(0)}>One workspace that knows your work.</h1>
            <p className="lede reveal-child" style={d(120)}>
              Chat, documents, meetings, tables, a whiteboard and a team of agents — all sharing one
              memory of your Slack, GitHub and the eleven other tools you&rsquo;re already paying for.
            </p>
            <div className="hm-hero-actions reveal-child" style={d(260)}>
              <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start your {TRIAL_DAYS} days <Icon.Arrow /></a>
              <Link href="/marketplace" className="btn btn-ghost btn-lg">See the apps</Link>
            </div>
            <p className="footnote reveal-child" style={d(340)}>No card · Full Pro for {TRIAL_DAYS} days · Notes free forever</p>
          </div>
          <div className={`hm-hero-panel ${heroVisible ? "in" : ""}`}>
            <div className="hm-blob hm-blob-a" /><div className="hm-blob hm-blob-b" /><div className="hm-dots" />
            <SceneDeck />
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section className="hm-marquee">
        <div className="hm-marquee-track">
          {[...INTEGRATIONS, ...INTEGRATIONS].map((it, i) => (
            <span key={i} className="hm-mq-item"><span className="hm-mq-logo">{it.logo}</span>{it.name}</span>
          ))}
        </div>
        <p className="hm-marquee-cap"><span className="serif-em">{INTEGRATION_COUNT === 13 ? "Thirteen" : INTEGRATION_COUNT} logins.</span> One memory.</p>
      </section>

      {/* ── Search was the easy part ── */}
      <Reveal as="section" className="section band-b hm-easy">
        <div className="wrap hm-two">
          <div className="hm-two-copy reveal-child" style={d(0)}>
            <p className="kicker">Not a search bar</p>
            <h2 className="h-display h-lg">Search was the easy part.</h2>
            <p className="lede">
              Any tool can find the file. ClutterAI is where the file gets <em>written</em>, the meeting gets
              <em> minuted</em>, the table gets <em>filtered</em>, the diagram gets <em>drawn</em> and the follow-up
              gets <em>chased</em> — and every one of those feeds the same memory.
            </p>
            <p className="lede">So the answer to &ldquo;what did we decide?&rdquo; is already in there. With the receipt.</p>
            <ul className="rows">
              <li className="row"><span className="row-mark"><Spark /></span>Every answer cites the message, file or ticket it came from</li>
              <li className="row"><span className="row-mark"><Spark /></span>Everything you make inside ClutterAI becomes searchable the moment you save it</li>
              <li className="row"><span className="row-mark"><Spark /></span>Agents read the same memory, so they never work from a stale copy</li>
            </ul>
          </div>
          <div className="hm-two-visual reveal-child" style={d(120)}>
            <InView minHeight={420} threshold={0.4}><EasyPart /></InView>
          </div>
        </div>
      </Reveal>

      {/* ── A Tuesday ── */}
      <section className="section hm-tuesday">
        <div className="wrap">
          <Reveal className="sec-head">
            <p className="kicker">The whole product, in one day</p>
            <h2 className="h-serif h-lg">Here is a Tuesday.</h2>
            <p className="lede">Six moments, six parts of ClutterAI, one memory underneath all of them. Scroll.</p>
          </Reveal>
          <Tuesday />
        </div>
      </section>

      {/* ── Apps ── */}
      <Reveal as="section" className="section band-b hm-apps" id="apps">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Workspace</p>
            <h2 className="h-display h-lg">Where the work actually happens.</h2>
            <p className="lede">Five apps for writing, listening, organising and drawing. Each is searchable the moment you save, so everything you make feeds the same knowledge your agents use. Hover for a peek.</p>
          </div>
          <div className="hm-bento">
            {APPS.map((a, i) => (
              <Link key={a.id} href={`/marketplace#${a.id}`} className={`card card-hover hm-app reveal-child hm-app-${a.id}`} style={d(i * 70)}>
                <div className="hm-app-head">
                  <h3 className="h-display h-sm">{a.name}</h3>
                  <span className="pill pill-muted">{a.role}</span>
                  {a.id === "notes" && <span className="pill pill-ok">Free forever</span>}
                </div>
                <span className="hm-app-similar">{a.similar}</span>
                <p className="hm-app-tag">{a.tagline}</p>
                <Peek id={a.id} />
              </Link>
            ))}
          </div>
          <Link href="/marketplace" className="hm-more">See what each app can do <Icon.Arrow /></Link>
        </div>
      </Reveal>

      {/* ── Agents ── */}
      <Reveal as="section" className="section hm-agents" id="agents">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Agents</p>
            <h2 className="h-display h-lg">Four agents, always working.</h2>
            <p className="lede">The apps are where you work. The agents work while you don&rsquo;t — on the same memory, so a promise made in a meeting is a line in tomorrow&rsquo;s briefing.</p>
          </div>
          <div className="hm-agent-grid">
            {AGENTS.map((ag, i) => (
              <Link key={ag.id} href={`/marketplace#agent-${ag.id}`} className="card card-hover hm-agent reveal-child" style={d(i * 60)}>
                <div className="hm-agent-top">
                  <Logo size={34} radius={10} className="hm-agent-logo" />
                </div>
                <h3 className="h-display h-sm">{ag.name}</h3>
                <span className="hm-agent-role">{ag.role}</span>
                <p className="hm-agent-tag">&ldquo;{ag.tagline}&rdquo;</p>
                <span className="hm-agent-similar">{ag.similar}</span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Ask anywhere ── */}
      <Reveal as="section" className="section band-b hm-ask" id="ask">
        <div className="wrap hm-two hm-two-flip">
          <div className="hm-two-visual reveal-child" style={d(120)}>
            <div className="hm-routes" aria-hidden="true">
              <span className="sc-route">From your sources</span>
              <span className="sc-route">General knowledge</span>
              <span className="sc-route">From the web</span>
            </div>
            <InView minHeight={280} threshold={0.4}><Slack /></InView>
          </div>
          <div className="hm-two-copy reveal-child" style={d(0)}>
            <p className="kicker">Ask, anywhere</p>
            <h2 className="h-display h-lg">One input. Your work, or the world.</h2>
            <p className="lede">
              Ask anything. It searches everything you&rsquo;ve connected first, and if nothing there
              answers the question it answers from general knowledge and says so. Flip the Web toggle
              when you want a live search of the web instead.
            </p>
            <ul className="rows">
              <li className="row"><span className="row-mark"><Spark /></span>Every answer is labelled: from your sources, general knowledge, or the web</li>
              <li className="row"><span className="row-mark"><Spark /></span>Mention <b>@ClutterAI</b> in Slack — replies are visible only to you until you share them</li>
              <li className="row"><span className="row-mark"><Spark /></span>Understands time: &ldquo;the latest invoice&rdquo; means the latest, down to minutes ago</li>
              <li className="row"><span className="row-mark"><Spark /></span>Ends every answer with the one follow-up question worth asking</li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* ── Teams ── */}
      <Reveal as="section" className="section hm-teams" id="teams">
        <div className="wrap hm-two">
          <div className="hm-two-copy reveal-child" style={d(0)}>
            <p className="kicker">Teams</p>
            <h2 className="h-display h-lg">One shared memory. Nobody else&rsquo;s inbox.</h2>
            <p className="lede">
              Share a document, a board, a table or a meeting and the whole team can search it. Your
              connected Gmail and Slack stay yours — sharing is always something you do, never something
              that happens to you.
            </p>
            <ul className="rows">
              <li className="row"><span className="row-mark"><Spark /></span>Invite by email; a link that lands people on a page that already knows the team</li>
              <li className="row"><span className="row-mark"><Spark /></span>Admin console with per-member usage, seats and integration health</li>
              <li className="row"><span className="row-mark"><Spark /></span>Members never see upgrade prompts or billing — that&rsquo;s the owner&rsquo;s job</li>
              <li className="row"><span className="row-mark"><Spark /></span>Mix Standard and Premium seats, member by member</li>
            </ul>
          </div>
          <div className="hm-two-visual reveal-child" style={d(120)}>
            <InView minHeight={300} threshold={0.4}><TeamsMock /></InView>
          </div>
        </div>
      </Reveal>

      {/* ── Security ── */}
      <Reveal as="section" className="section band-b hm-security" id="security">
        <div className="wrap hm-two">
          <div className="hm-two-copy reveal-child" style={d(0)}>
            <p className="kicker">Your data</p>
            <h2 className="h-serif h-lg">Yours. Still yours. Always yours.</h2>
            <p className="lede">
              ClutterAI never trains models on your content. Connections use OAuth with read-only access
              wherever the provider offers it, every answer is private to the person who asked, and
              disconnecting an app removes its indexed data.
            </p>
            <Link href="/privacy" className="hm-more">Read the privacy policy <Icon.Arrow /></Link>
          </div>
          <div className="hm-two-visual hm-badges">
            {[
              { t: "Private by default", s: "Answers are yours alone — even in a shared Slack channel" },
              { t: "OAuth, revocable any time", s: "Read-only scopes for Gmail, Drive and Calendar" },
              { t: "You control retention", s: "Disconnect an app and its indexed data is gone within 30 days" },
              { t: "No training. Ever.", s: "Your content is processed to answer you, and for nothing else" },
            ].map((b, i) => (
              <div key={b.t} className="card hm-badge reveal-child" style={d(i * 80)}>
                <Logo size={32} radius={9} />
                <div><div className="hm-badge-t">{b.t}</div><div className="hm-badge-s">{b.s}</div></div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Numbers ── */}
      <section className="section-tight hm-numbers">
        <div className="wrap hm-num-grid">
          <div className="hm-num"><span className="hm-num-v"><CountUp to={INTEGRATION_COUNT} /></span><span className="hm-num-l">tools connected in one place</span></div>
          <div className="hm-num"><span className="hm-num-v"><CountUp to={5} /></span><span className="hm-num-l">apps that feed one memory</span></div>
          <div className="hm-num"><span className="hm-num-v"><CountUp to={4} /></span><span className="hm-num-l">agents that work while you don&rsquo;t</span></div>
          <div className="hm-num"><span className="hm-num-v"><CountUp to={TRIAL_DAYS} /></span><span className="hm-num-l">days of everything, free</span></div>
          <div className="hm-num"><span className="hm-num-v"><CountUp to={1.8} decimals={1} /><small>h</small></span><span className="hm-num-l">a day the average knowledge worker spends looking for information<sup>*</sup></span></div>
        </div>
        <p className="wrap hm-num-src"><sup>*</sup> McKinsey Global Institute, <em>The social economy</em> (2012): about 19% of the working week.</p>
      </section>

      {/* ── Pricing teaser ── */}
      <Reveal as="section" className="section band-b hm-pricing" id="pricing">
        <div className="wrap">
          <div className="sec-head center">
            <p className="kicker">Pricing</p>
            <h2 className="h-display h-lg">Fourteen days of everything. Then a free plan that is actually a plan.</h2>
          </div>
          <div className="hm-price-grid">
            {teaser.map((p, i) => (
              <div key={p.id} className={`card card-hover hm-price reveal-child ${p.popular && p.id === "pro" ? "is-popular" : ""}`} style={d(i * 90)}>
                <div className="hm-price-head"><h3 className="h-display h-sm">{p.name}</h3>{p.id === "pro" && <span className="pill pill-accent">Most popular</span>}</div>
                <p className="hm-price-blurb">{p.blurb}</p>
                <p className="hm-price-amt">
                  <span className="hm-price-cur">$</span><span className="hm-price-n">{p.monthly}</span>
                  <span className="hm-price-per">{p.monthly === 0 ? "forever" : p.perSeat ? "/ seat / month" : "/ month"}</span>
                </p>
                {p.plus && <p className="hm-price-plus">{p.plus}:</p>}
                <ul className="hm-price-feats">{p.features.slice(0, 4).map((f) => <li key={f}><Spark size={8} />{f}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 36 }}>
            <Link href="/pricing" className="btn btn-ghost">All plans, including Max and Team Premium <Icon.Arrow /></Link>
          </div>
        </div>
      </Reveal>

      {/* ── Final CTA ── */}
      <Reveal as="section" className="section hm-final">
        <div className="hm-final-glow" />
        <div className="wrap hm-final-inner">
          <Logo size={72} radius={20} className="hm-final-logo" />
          <h2 className="h-serif h-xl">Fourteen days of all of it.</h2>
          <p className="lede center">Every app, every agent, no card. Chat and Notes stay free afterwards.</p>
          <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start free <Icon.Arrow /></a>
          <p className="footnote">Connect your first tool in two minutes · Or don&rsquo;t — chat works before anything is connected</p>
        </div>
      </Reveal>
    </div>
  );
}
