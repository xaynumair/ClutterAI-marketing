"use client";

import { useEffect, useRef, useState } from "react";
import { SiGoogledrive, SiGmail, SiSlack, SiGooglecalendar } from "react-icons/si";
import {
  AiOutlineFileSearch,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlineCalendar,
  AiOutlineBulb,
} from "react-icons/ai";
import { RiFileList2Line, RiScales3Line, RiSparklingFill } from "react-icons/ri";

/* Inline component to type out short prompt chips with a blinking cursor */
function PromptTyper({
  text,
  startDelay = 400,
  speed = 24,
}: {
  text: string;
  startDelay?: number;
  speed?: number;
}) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setOutput(text);
      setDone(true);
      return;
    }
    let pos = 0;
    const timeoutId = window.setTimeout(() => {
      const intervalId = window.setInterval(() => {
        pos++;
        setOutput(text.slice(0, pos));
        if (pos >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, startDelay, speed]);

  return (
    <span className="prompt-chip" aria-live="polite">
      <span className="prompt-text">{output}</span>
      {!done && <span className="type-cursor" aria-hidden="true">|</span>}
    </span>
  );
}

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Stop searching";
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Entrance animation: IntersectionObserver to add "in-view" class with stagger
  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>(".integration-card"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            const idx = Number(el.dataset.index ?? 0);
            el.style.setProperty("--enter-delay", `${idx * 120}ms`);
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  // Mouse tilt handlers (uses CSS variables for smooth GPU transforms)
  function handleMouseMove(e: React.MouseEvent, el: HTMLElement | null) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (py - 0.5) * -8; // rotateX
    const ry = (px - 0.5) * 10; // rotateY
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--s", "1.03");
  }

  function handleMouseLeave(el: HTMLElement | null) {
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--s", `1`);
  }

  const integrations = [
    {
      name: "Drive",
      desc: "Search across your Drive files and get sourced answers instantly.",
      Icon: SiGoogledrive,
    },
    {
      name: "Gmail",
      desc: "Ask questions about your inbox and surface relevant messages and attachments.",
      Icon: SiGmail,
    },
    {
      name: "Slack",
      desc: "Search across channels and DMs to find conversations and context fast.",
      Icon: SiSlack,
    },
    {
      name: "Calendar",
      desc: "Find events, meeting notes and schedule context without leaving the app.",
      Icon: SiGooglecalendar,
    },
  ];

  return (
    <div className="homepage">
      {/* Decorative background layers */}
      <div className="bg-gradient" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
      </div>

      <main className="hero">
        <div className="card" role="region" aria-label="Hero">
          <header className="hero-head">
            <h1 className="title">
              <span className="typed">{typedText}</span>
              <span className="cursor" aria-hidden="true">|</span>
              <br />
              <span className="accent">Start knowing</span>
            </h1>

            <p className="lead">
              Connect Drive, Gmail, Slack and more. Ask questions in plain English and get instant answers with source links — no more wasting time.
            </p>
          </header>

          <div className="actions" role="group" aria-label="Primary actions">
            <a
              href="https://app.clutter-ai.com/signup"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Start Free
            </a>

            <a href="/pricing" className="btn btn-outline">
              View Pricing
            </a>
          </div>

          <p className="footnote">Free plan • No credit card required • Enterprise-ready</p>
        </div>
      </main>

      {/* Integrations section (horizontal grid) */}
      <section className="integrations" aria-label="Integrations">
        <div className="integrations-inner">
          <h2 className="integrations-title">Integrations</h2>
          <p className="integrations-sub">
            Connect the tools you already use. We surface answers from your files, mail, calendar and team chat.
          </p>

          <div className="integration-grid" role="list" ref={cardsRef}>
            {integrations.map((item, idx) => {
              const Icon = item.Icon;
              const style = {
                ["--float-duration" as any]: `${6 + idx * 0.6}s`,
                ["--float-distance" as any]: `${8 + idx * 2}px`,
              } as React.CSSProperties;

              return (
                <article
                  key={item.name}
                  className="integration-card"
                  role="listitem"
                  aria-label={`${item.name} integration`}
                  data-index={idx}
                  style={style}
                  onMouseMove={(e) => handleMouseMove(e, e.currentTarget as HTMLElement)}
                  onMouseLeave={() =>
                    handleMouseLeave(document.querySelector(`.integration-card[data-index="${idx}"]`))
                  }
                >
                  <div className="integration-float">
                    <div className="integration-icon" aria-hidden="true">
                      <Icon size={48} aria-hidden="true" />
                    </div>
                    <div className="integration-body">
                      <h3 className="integration-name">{item.name}</h3>
                      <p className="integration-desc">{item.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* New card: More integrations coming soon (centered) */}
            <article
              className="integration-card coming-soon"
              role="listitem"
              aria-label="More integrations coming soon"
              data-index={integrations.length}
              style={
                {
                  ["--float-duration" as any]: `${6 + integrations.length * 0.6}s`,
                  ["--float-distance" as any]: `10px`,
                } as React.CSSProperties
              }
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget as HTMLElement)}
              onMouseLeave={() =>
                handleMouseLeave(document.querySelector(`.integration-card[data-index="${integrations.length}"]`))
              }
            >
              <div className="integration-float">
                <div className="integration-icon" aria-hidden="true">
                  {/* plus icon */}
                  <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true" focusable="false">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path fill="#cfd3e8" d="M11 11V6h2v5h5v2h-5v5h-2v-5H6v-2z" />
                  </svg>
                </div>
                <div className="integration-body">
                  <h3 className="integration-name">More integrations</h3>
                  <p className="integration-desc">Coming soon</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Single Source of Truth section */}
      <section className="ssot" aria-label="Single Source of Truth">
        <div className="ssot-inner">
          <h2 className="ssot-title">The Single Source of Truth</h2>

          <div className="ssot-copy centered">
            <p className="ssot-lead">
              Stop toggling between tabs. <strong>ClutterAI</strong> connects your entire digital life so you can search, recall, and converse with information from your most important tools — all in one place.
            </p>

            <p className="ssot-paragraph">
              You know the answer is somewhere — an email, a Slack thread, or a Drive folder — but finding it often takes 15 minutes and five open tabs.
            </p>

            <p className="ssot-solution">
              <span className="solution-label">ClutterAI Solution:</span>
              <span className="solution-body"> Ask one question, get one definitive answer — instantly cross-referenced across all connected apps.</span>
            </p>
          </div>

          <div className="ssot-table-wrap" role="region" aria-label="ClutterAI capabilities table">
            <table className="ssot-table" summary="Tools connected, what ClutterAI understands, and engaging example prompts">
              <thead>
                <tr>
                  <th>Tool connected</th>
                  <th>What ClutterAI understands</th>
                  <th>Try these prompts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="tool-cell">
                      <span className="tool-icon"><AiOutlineFileSearch size={22} aria-hidden="true" /></span>
                      <span className="tool-name">Google Drive</span>
                    </div>
                  </td>
                  <td>File content, titles, owners, and folder structure.</td>
                  <td>
                    <div className="prompt-list">
                      <PromptTyper text="Find the Q4 competitive analysis spreadsheet" startDelay={500} speed={22} />
                      <span className="prompt-chip">Open the latest “Roadmap” doc</span>
                      <span className="prompt-chip">Show files shared by Brian last week</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="tool-cell">
                      <span className="tool-icon"><AiOutlineMail size={22} aria-hidden="true" /></span>
                      <span className="tool-name">Gmail</span>
                    </div>
                  </td>
                  <td>Email content, attachments, and conversational context.</td>
                  <td>
                    <div className="prompt-list">
                      <PromptTyper text="What delivery terms did Brian confirm?" startDelay={900} speed={24} />
                      <span className="prompt-chip">Summarize yesterday’s thread with Alice</span>
                      <span className="prompt-chip">Find invoices from October</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="tool-cell">
                      <span className="tool-icon"><AiOutlineMessage size={22} aria-hidden="true" /></span>
                      <span className="tool-name">Slack</span>
                    </div>
                  </td>
                  <td>Channel history, DMs, file shares, and threaded discussions.</td>
                  <td>
                    <div className="prompt-list">
                      <PromptTyper text="What was the final decision in #product?" startDelay={1300} speed={26} />
                      <span className="prompt-chip">Summarize the #marketing campaign thread</span>
                      <span className="prompt-chip">Show links shared in design chat</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="tool-cell">
                      <span className="tool-icon"><AiOutlineCalendar size={22} aria-hidden="true" /></span>
                      <span className="tool-name">Calendar</span>
                    </div>
                  </td>
                  <td>Meeting notes, attendees, and related attachments.</td>
                  <td>
                    <div className="prompt-list">
                      <PromptTyper text="What action items did I commit to with Alex?" startDelay={1700} speed={24} />
                      <span className="prompt-chip">Summarize last week’s leadership sync</span>
                      <span className="prompt-chip">Find meetings with agenda docs attached</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visually engaging bottom section: Context Synthesis */}
      <section className="synthesis" aria-label="Context Synthesis">
        <div className="synthesis-inner">
          <div className="synthesis-header">
            <span className="synthesis-badge" aria-hidden="true">
              <AiOutlineBulb size={18} />
              <span>ClutterAI synthesis</span>
            </span>
            <h3 className="synthesis-title">But that’s not it</h3>
            <p className="synthesis-sub">
              Beyond keyword search — turn scattered information into decisions.
            </p>
          </div>

          {/* Icon-led feature grid with floating animations */}
          <div className="synthesis-grid" role="list">
            <article
              className="synth-card"
              role="listitem"
              aria-label="Summarize dense documents"
              style={
                {
                  ["--float-distance" as any]: "8px",
                  ["--float-duration" as any]: "7.2s",
                  ["--float-delay" as any]: "0ms",
                } as React.CSSProperties
              }
            >
              <div className="synth-icon" aria-hidden="true">
                <RiFileList2Line size={28} />
              </div>
              <h4 className="synth-name">Summarize documents</h4>
              <ul className="synth-points">
                <li>
                  <span className="point-icon" aria-hidden="true"><AiOutlineFileSearch /></span>
                  <span className="point-text">Instant key takeaways</span>
                </li>
                <li>
                  <span className="point-icon" aria-hidden="true"><RiSparklingFill /></span>
                  <span className="point-text">Highlights & decisions</span>
                </li>
              </ul>
            </article>

            <article
              className="synth-card"
              role="listitem"
              aria-label="Extract decisions from emails"
              style={
                {
                  ["--float-distance" as any]: "7px",
                  ["--float-duration" as any]: "7.8s",
                  ["--float-delay" as any]: "160ms",
                } as React.CSSProperties
              }
            >
              <div className="synth-icon" aria-hidden="true">
                <AiOutlineMail size={28} />
              </div>
              <h4 className="synth-name">Email decision finder</h4>
              <ul className="synth-points">
                <li>
                  <span className="point-icon" aria-hidden="true"><RiScales3Line /></span>
                  <span className="point-text">Final terms & approvals</span>
                </li>
                <li>
                  <span className="point-icon" aria-hidden="true"><AiOutlineMail /></span>
                  <span className="point-text">Week-long threads distilled</span>
                </li>
              </ul>
            </article>

            <article
              className="synth-card"
              role="listitem"
              aria-label="Summarize Slack threads"
              style={
                {
                  ["--float-distance" as any]: "9px",
                  ["--float-duration" as any]: "7.0s",
                  ["--float-delay" as any]: "320ms",
                } as React.CSSProperties
              }
            >
              <div className="synth-icon" aria-hidden="true">
                <AiOutlineMessage size={28} />
              </div>
              <h4 className="synth-name">Slack thread digest</h4>
              <ul className="synth-points">
                <li>
                  <span className="point-icon" aria-hidden="true"><AiOutlineMessage /></span>
                  <span className="point-text">Channel decisions</span>
                </li>
                <li>
                  <span className="point-icon" aria-hidden="true"><RiSparklingFill /></span>
                  <span className="point-text">Links & files curated</span>
                </li>
              </ul>
            </article>

            <article
              className="synth-card"
              role="listitem"
              aria-label="Prepare calendar action items"
              style={
                {
                  ["--float-distance" as any]: "6px",
                  ["--float-duration" as any]: "8.2s",
                  ["--float-delay" as any]: "480ms",
                } as React.CSSProperties
              }
            >
              <div className="synth-icon" aria-hidden="true">
                <AiOutlineCalendar size={28} />
              </div>
              <h4 className="synth-name">Calendar action items</h4>
              <ul className="synth-points">
                <li>
                  <span className="point-icon" aria-hidden="true"><AiOutlineCalendar /></span>
                  <span className="point-text">Attendees & notes mapped</span>
                </li>
                <li>
                  <span className="point-icon" aria-hidden="true"><RiSparklingFill /></span>
                  <span className="point-text">Next steps surfaced</span>
                </li>
              </ul>
            </article>
          </div>

          {/* Prompt chips row */}
          <div className="synthesis-prompts" aria-label="Quick prompts">
            <span className="prompt-chip">Summarize the Q4 review deck</span>
            <span className="prompt-chip">What decisions happened in #product?</span>
            <span className="prompt-chip">Pull action items from my last meeting</span>
            <span className="prompt-chip">Show final delivery terms from Brian</span>
          </div>

          {/* Closing line */}
          <p className="synthesis-cta-line">
            Stop reading and comparing — get synthesized answers that drive decisions.
          </p>
        </div>
      </section>

      {/* Bottom trust & privacy card section */}
      <section className="trust" aria-label="Privacy and trust">
        <div className="trust-inner">
          <div className="trust-card">
            <div className="trust-glow" aria-hidden="true" />
            <h3 className="trust-title">“Your data, you eyes”</h3>
            <p className="trust-sub">
              ClutterAI ensures your data is only accessible by you.
            </p>
            <a className="trust-link" href="/about" rel="noopener noreferrer">
              Read more on the About page
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="footer-inner">
          <nav className="footer-nav" aria-label="Legal links">
            <a className="footer-link" href="/privacy">Privacy Policy</a>
            <a className="footer-link" href="/refund">Refund Policy</a>
            <a className="footer-link" href="/terms">Terms and Conditions</a>
          </nav>
          <p className="footer-copy">© {new Date().getFullYear()} ClutterAI</p>
        </div>
      </footer>

      <style jsx>{`
        :root {
          --card-bg: linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0.01));
        }

        .homepage {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(180deg, #05040a 0%, #07050b 100%);
          color: #eef0f6;
          overflow-x: hidden;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial;
        }

        /* Background layers */
        .bg-gradient { position: fixed; inset: -20%; background: radial-gradient(1200px 600px at 10% 20%, rgba(124,58,237,0.12), transparent 12%), radial-gradient(1000px 500px at 90% 80%, rgba(91,33,182,0.10), transparent 12%); filter: blur(40px); z-index: 0; pointer-events: none; }
        .bg-grid { position: fixed; inset: 0; background-image: linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 72px 72px; opacity: 0.04; z-index: 0; pointer-events: none; }
        .bg-orbs { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
        .orb { position: absolute; border-radius: 50%; filter: blur(60px); transform: translateZ(0); opacity: 0.9; mix-blend-mode: screen; }
        .orb-a { width: 520px; height: 520px; left: -8%; top: -6%; background: radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0) 60%); animation: floatA 18s ease-in-out infinite; }
        .orb-b { width: 420px; height: 420px; right: -6%; bottom: -8%; background: radial-gradient(circle, rgba(91,33,182,0.18) 0%, rgba(91,33,182,0) 60%); animation: floatB 22s ease-in-out infinite; }
        .orb-c { width: 300px; height: 300px; left: 50%; top: 30%; transform: translate(-50%, -50%); background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0) 60%); animation: floatC 26s ease-in-out infinite; }
        @keyframes floatA { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.05); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes floatB { 0% { transform: translate(0,0) scale(1); } 50% { transform: translate(-30px,40px) scale(0.98); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes floatC { 0% { transform: translate(-50%,-50%) scale(1); } 50% { transform: translate(-40%,-60%) scale(1.02); } 100% { transform: translate(-50%,-50%) scale(1); } }

        /* Hero */
        .hero { width: 100%; max-width: 1200px; padding: 64px 28px 40px; z-index: 10; display: flex; align-items: center; justify-content: center; }
        .card { width: 100%; background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.04); border-radius: 18px; padding: 48px; box-shadow: 0 10px 40px rgba(2,6,23,0.6); backdrop-filter: blur(8px) saturate(120%); display:flex; flex-direction:column; gap:20px; align-items:center; text-align:center; }

        .title { margin: 0; font-size: clamp(2.6rem, 5.6vw, 4.2rem); line-height: 1.02; font-weight: 900; color: #ffffff; letter-spacing: -0.03em; text-shadow: 0 8px 30px rgba(2,6,23,0.6), 0 0 14px rgba(124,58,237,0.08); }
        .typed { color: #f0f1ff; } .cursor { color: #d6b8ff; margin-left: 6px; display:inline-block; animation: blink 1s steps(2,start) infinite; }
        @keyframes blink { 0%,50%{opacity:1}51%,100%{opacity:0} }
        .lead { margin:8px 0 0; color:#cfd3e8; font-size:1.05rem; max-width:820px; line-height:1.6; }

        .accent {
          display: inline-block;
          background: linear-gradient(90deg, #ffd6ff 0%, #b78bff 30%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          padding-left: 6px;
          transform: translateY(-2px);
        }

        .actions { display:flex; gap:14px; align-items:center; margin-top:18px; justify-content:center; }
        .btn { display:inline-flex; align-items:center; justify-content:center; padding:12px 22px; border-radius:12px; font-weight:700; font-size:1rem; text-decoration:none; transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease; cursor:pointer; }
        .btn-primary { background: linear-gradient(90deg, #7c3aed 0%, #5b21b6 100%); color:white; border:1px solid rgba(124,58,237,0.14); box-shadow:0 10px 30px rgba(91,33,182,0.18); }
        .btn-primary:hover { transform: translateY(-4px); box-shadow:0 18px 50px rgba(91,33,182,0.26); }
        .btn-outline { background: transparent; color:#e6e6f8; border:1px solid rgba(124,58,237,0.22); }
        .btn-outline:hover { background: rgba(124,58,237,0.04); transform: translateY(-2px); }

        .footnote { margin:6px 0 0; color:#aeb0c8; font-size:0.95rem; }

        .integrations { width:100%; max-width:1200px; padding:48px 28px 96px; z-index:10; display:flex; justify-content:center; }
        .integrations-inner { width:100%; text-align:center; }
        .integrations-title { margin:0 0 8px; font-size:1.6rem; font-weight:800; color:#fff; }
        .integrations-sub { margin:0 0 28px; color:#cfd3e8; max-width:900px; margin-left:auto; margin-right:auto; }

        /* Horizontal grid */
        .integration-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
          margin-top: 8px;
          align-items: start;
        }

        .integration-card {
          --rx: 0deg;
          --ry: 0deg;
          --s: 1;
          --elev: 18px;
          background: var(--card-bg);
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 14px;
          padding: 18px;
          display:flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          text-align: center;
          transition: transform 420ms cubic-bezier(.16,.84,.44,1), box-shadow 420ms cubic-bezier(.16,.84,.44,1), border-color 220ms ease, opacity 420ms ease, filter 420ms ease;
          transform-style: preserve-3d;
          will-change: transform;
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) scale(var(--s));
          box-shadow: 0 calc(var(--elev)) 40px rgba(2,6,23,0.45);
          opacity: 0;
          filter: blur(6px) saturate(0.95);
        }

        /* wrapper animated vertically only */
        .integration-float {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          will-change: transform;
        }

        .integration-card.in-view {
          opacity: 1;
          filter: blur(0) saturate(1);
          transform: perspective(900px) rotateX(0deg) rotateY(0deg) scale(1);
          transition: transform 520ms cubic-bezier(.16,.84,.44,1) var(--enter-delay), opacity 420ms ease var(--enter-delay), filter 420ms ease var(--enter-delay);
        }

        .integration-card:hover,
        .integration-card:focus-within {
          --s: 1.04;
          --elev: 26px;
          border-color: rgba(124,58,237,0.14);
        }

        /* Vertical-only floating animation (each card has its own variables) */
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(calc(-1 * var(--float-distance, 8px))); }
          100% { transform: translateY(0); }
        }
        .integration-card.in-view .integration-float {
          animation-name: floatY;
          animation-duration: var(--float-duration, 6s);
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-delay: var(--enter-delay, 0ms);
        }

        .integration-icon {
          width: 64px;
          height: 64px;
          display:flex;
          align-items:center;
          justify-content:center;
          border-radius:12px;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          transition: transform 320ms cubic-bezier(.16,.84,.44,1), box-shadow 320ms ease;
          transform: translateZ(30px);
        }
        .integration-icon svg { width:48px; height:48px; display:block; }

        .integration-body { display:block; }
        .integration-name { margin:0; font-size:1.05rem; font-weight:800; color:#fff; transform: translateZ(20px); }
        .integration-desc { margin:0; color:#cfd3e8; font-size:0.95rem; line-height:1.4; transform: translateZ(18px); }

        .integration-card.coming-soon {
          border-style: dashed;
          border-color: rgba(255,255,255,0.06);
          background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
          grid-column: 1 / -1;
          justify-self: center;
          max-width: 360px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        .integration-card.coming-soon .integration-desc { color: #bfc4d9; font-weight:600; }

        .integration-card:focus-within, .integration-card:focus {
          outline: none;
          box-shadow: 0 0 0 4px rgba(124,58,237,0.12), 0 calc(var(--elev)) 40px rgba(2,6,23,0.45);
        }

        @media (prefers-reduced-motion: reduce) {
          .integration-card,
          .integration-card.in-view,
          .integration-card.in-view .integration-float,
          .synth-card,
          .trust-card {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }

        @media (max-width: 1100px) {
          .integration-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .integration-card.coming-soon { grid-column: 1 / -1; max-width: 520px; }
        }
        @media (max-width: 520px) {
          .integration-grid { grid-template-columns: 1fr; gap: 12px; }
          .hero { padding: 40px 18px 24px; }
          .card { padding: 28px; border-radius: 14px; }
          .title { font-size: clamp(2rem, 8.5vw, 2.8rem); }
        }

        /* SSOT section */
        .ssot {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 64px 20px 96px;
          z-index: 10;
        }
        .ssot-inner {
          width: 100%;
          max-width: 980px;
          color: #e9ecf8;
          text-align: center;
        }
        .ssot-title {
          margin: 0 auto 18px;
          font-size: clamp(1.6rem, 2.6vw, 2.2rem);
          font-weight: 900;
          line-height: 1.05;
          background: linear-gradient(90deg, #ffd6ff 0%, #b78bff 30%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          letter-spacing: -0.01em;
          text-align: center;
        }
        .ssot-copy.centered {
          margin: 0 auto 28px;
          max-width: 820px;
          text-align: center;
        }
        .ssot-lead {
          margin: 0 0 12px;
          color: #e6e9fb;
          font-size: 1.05rem;
          line-height: 1.6;
          font-weight: 600;
        }
        .ssot-paragraph {
          margin: 0 0 12px;
          color: #cfd6ee;
          line-height: 1.7;
          font-size: 1rem;
          font-style: italic;
          opacity: 0.95;
        }
        .ssot-solution {
          margin: 12px 0 0;
          color: #fff;
          font-weight: 700;
          line-height: 1.4;
          display: inline-flex;
          align-items: baseline;
          gap: 10px;
          justify-content: center;
          font-size: 1rem;
        }
        .solution-label {
          display: inline-block;
          padding: 6px 10px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(124,58,237,0.12), rgba(124,58,237,0.06));
          color: #fff;
          font-weight: 800;
          font-size: 0.95rem;
        }
        .solution-body { color: #e6e9fb; font-weight: 600; }

        .ssot-table-wrap {
          overflow-x: auto;
          background: linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.005));
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 12px;
          padding: 18px;
          margin-top: 28px;
        }
        .ssot-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 720px;
        }
        .ssot-table thead th {
          text-align: left;
          padding: 12px 16px;
          font-weight: 800;
          color: #fff;
          background: linear-gradient(90deg, rgba(124,58,237,0.06), rgba(91,33,182,0.04));
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }
        .ssot-table tbody td {
          padding: 12px 16px;
          color: #cfd6ee;
          border-bottom: 1px solid rgba(255,255,255,0.02);
          vertical-align: top;
          font-size: 0.98rem;
        }
        .ssot-table tbody tr:last-child td { border-bottom: none; }

        /* Tool cell with icon */
        .tool-cell {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          color: #fff;
        }
        .tool-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
        }
        .tool-name { display: inline-block; }

        /* Prompt list: concise, tappable chips + typer */
        .prompt-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }
        .prompt-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(124,58,237,0.12);
          color: #f0efff;
          border: 1px solid rgba(124,58,237,0.22);
          font-weight: 600;
          font-size: 0.9rem;
          line-height: 1.2;
          white-space: nowrap;
        }
        .prompt-text { display: inline-block; }
        .type-cursor {
          display: inline-block;
          width: 1ch;
          color: #d6b8ff;
          animation: blink 1s steps(2, start) infinite;
        }

        /* Visual synthesis section */
        .synthesis {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 56px 20px 72px;
          z-index: 10;
          background: linear-gradient(180deg, rgba(124,58,237,0.02), transparent 40%);
        }
        .synthesis-inner {
          width: 100%;
          max-width: 1100px;
          color: #eaf0ff;
          text-align: center;
          padding: 12px;
        }
        .synthesis-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }
        .synthesis-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(124,58,237,0.12);
          border: 1px solid rgba(124,58,237,0.22);
          color: #f5f3ff;
          font-weight: 700;
          font-size: 0.86rem;
        }
        .synthesis-title {
          margin: 0;
          font-size: clamp(1.4rem, 2.6vw, 2rem);
          font-weight: 900;
          letter-spacing: -0.01em;
          background: linear-gradient(90deg, #ffd6ff 0%, #b78bff 30%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .synthesis-sub {
          margin: 0;
          color: #dfe7ff;
          opacity: 0.9;
        }

        /* Feature grid */
        .synthesis-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(220px, 1fr));
          gap: 16px;
          margin: 18px 0 16px;
        }
        .synth-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          border: 1px solid rgba(255,255,255,0.04);
          border-radius: 14px;
          padding: 16px;
          text-align: left;
          backdrop-filter: blur(6px) saturate(120%);
          transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
          /* Floating animation variables (overridden inline per card) */
          animation-name: floatYSynth;
          animation-duration: var(--float-duration, 7.2s);
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-delay: var(--float-delay, 0ms);
        }
        .synth-card:hover {
          transform: translateY(-4px);
          border-color: rgba(124,58,237,0.16);
          box-shadow: 0 14px 40px rgba(2,6,23,0.45);
        }
        @keyframes floatYSynth {
          0% { transform: translateY(0); }
          50% { transform: translateY(calc(-1 * var(--float-distance, 8px))); }
          100% { transform: translateY(0); }
        }

        .synth-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(124,58,237,0.14), rgba(124,58,237,0.06));
          color: #fff;
          margin-bottom: 10px;
        }
        .synth-name {
          margin: 0 0 8px;
          font-size: 1.02rem;
          font-weight: 800;
          color: #fff;
        }
        .synth-points {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 6px;
        }
        .synth-points li {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #dfe7ff;
        }
        .point-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: rgba(255,255,255,0.06);
          color: #e9e6ff;
        }

        /* Prompt chips row */
        .synthesis-prompts {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          justify-content: center;
          margin: 10px 0 0;
        }
        .synthesis-cta-line {
          margin: 14px 0 0;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(90deg, rgba(124,58,237,0.10), rgba(124,58,237,0.04));
          display: inline-block;
          padding: 10px 14px;
          border-radius: 12px;
        }

        /* Trust & privacy bottom section */
        .trust {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 48px 20px 56px;
          z-index: 10;
        }
        .trust-inner {
          width: 100%;
          max-width: 1100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .trust-card {
          position: relative;
          width: 100%;
          max-width: 980px;
          border-radius: 20px;
          padding: 36px 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 24px 60px rgba(2,6,23,0.55);
          backdrop-filter: blur(8px) saturate(130%);
          text-align: center;
          overflow: hidden;
          animation: floatTrust 8s ease-in-out infinite;
        }
        .trust-glow {
          position: absolute;
          inset: -20%;
          background:
            radial-gradient(600px 260px at 10% 30%, rgba(124,58,237,0.18), transparent 60%),
            radial-gradient(520px 220px at 90% 70%, rgba(91,33,182,0.12), transparent 60%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }
        .trust-title {
          position: relative;
          z-index: 1;
          margin: 0;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 900;
          line-height: 1.1;
          background: linear-gradient(90deg, #ffd6ff 0%, #b78bff 30%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          letter-spacing: -0.01em;
        }
        .trust-sub {
          position: relative;
          z-index: 1;
          margin: 10px 0 14px;
          color: #e9ecf8;
          font-size: 1.02rem;
          opacity: 0.95;
        }
        .trust-link {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: 12px;
          background: linear-gradient(90deg, #7c3aed 0%, #5b21b6 100%);
          color: #fff;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(91,33,182,0.18);
          transition: transform 160ms ease, box-shadow 160ms ease;
        }
        .trust-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 50px rgba(91,33,182,0.26);
        }
        @keyframes floatTrust {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        /* Footer */
        .site-footer {
          width: 100%;
          border-top: 1px solid rgba(255,255,255,0.06);
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.015));
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 18px 20px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #cfd3e8;
        }
        .footer-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .footer-link {
          color: #e9ecf8;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 6px 10px;
          border-radius: 8px;
          transition: background 160ms ease, color 160ms ease;
        }
        .footer-link:hover {
          background: rgba(124,58,237,0.12);
          color: #ffffff;
        }
        .footer-copy {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        @media (max-width: 640px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
        }

        /* Responsive */
        @media (max-width: 960px) {
          .synthesis-grid { grid-template-columns: repeat(2, minmax(220px, 1fr)); }
        }
        @media (max-width: 520px) {
          .synthesis-grid { grid-template-columns: 1fr; }
          .prompt-chip { padding: 7px 10px; font-size: 0.88rem; }
          .trust-card { padding: 28px 20px; }
          .trust-title { font-size: clamp(1.4rem, 4vw, 2rem); }
        }
      `}</style>
    </div>
  );
}