"use client";

import { useEffect, useRef, useState } from "react";

const INTEGRATIONS = [
  { name: "Slack", logo: <svg viewBox="0 0 54 54" width="15" height="15"><g fill="none" fillRule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"/></g></svg> },
  { name: "Notion", logo: <svg viewBox="0 0 100 100" width="15" height="15"><path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="#fff"/><path fillRule="evenodd" d="M61.35.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143c-4.273-3.107-6.02-3.5-12.817-2.917zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.39 6.793 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.933 3.307-.68.047zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693v57.547c0 2.53-.39 4.67-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083zm59.6-54.827c.387 1.75 0 3.5-1.75 3.7l-2.91.577v42.773c-2.527 1.36-4.853 2.137-6.797 2.137-3.107 0-3.883-.973-6.21-3.887l-19.03-29.94v28.967l6.02 1.363s0 3.5-4.857 3.5l-13.39.777c-.39-.78 0-2.723 1.357-3.11l3.497-.97v-38.3L30.48 40.667c-.39-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327v-26.83l-5.047-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.4-.78z" fill="#000"/></svg> },
  { name: "GitHub", logo: <svg viewBox="0 0 24 24" width="15" height="15" fill="white"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg> },
  { name: "GitLab", logo: <svg viewBox="0 0 380 380" width="15" height="15"><path d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54a6.86,6.86,0,0,0-2.32-3.52,7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z" fill="#FC6D26"/><path d="M282.83,170.73l-.27-.69a88.3,88.3,0,0,0-35.15,15.8L190,229.25c19.55,14.79,36.57,27.64,36.57,27.64l40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z" fill="#E24329"/><path d="M153.43,256.89l19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91S209.55,244,190,229.25C170.45,244,153.43,256.89,153.43,256.89Z" fill="#FC6D26"/><path d="M132.58,186.84A88.19,88.19,0,0,0,97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82S170.45,244,190,229.25Z" fill="#E24329"/></svg> },
  { name: "Linear", logo: <svg viewBox="0 0 100 100" width="15" height="15"><defs><linearGradient id="lg-a" x1="6.22" y1="6.22" x2="91.12" y2="91.12" gradientUnits="userSpaceOnUse"><stop stopColor="#5E6AD2"/><stop offset="1" stopColor="#4353FF"/></linearGradient></defs><path d="M1.225 61.523c-.222-.948.908-1.546 1.596-.857L39.334 97.178c.689.689.091 1.819-.857 1.596C20.052 94.452 5.548 79.948 1.225 61.523ZM.002 46.889c-.018.283.089.56.29.761L52.35 99.708c.201.201.477.307.761.29 2.369-.148 4.694-.46 6.962-.926.765-.157 1.03-1.096.478-1.648L2.576 39.449c-.552-.552-1.491-.286-1.648.478-.466 2.269-.778 4.593-.926 6.962ZM4.211 29.705c-.166.374-.082.811.208 1.1l64.776 64.776c.289.289.726.374 1.1.208 1.786-.796 3.517-1.693 5.185-2.684.552-.328.637-1.087.183-1.541L8.436 24.337c-.454-.454-1.213-.369-1.541.183-.991 1.668-1.888 3.4-2.684 5.185ZM12.659 18.074c-.37-.37-.393-.964-.044-1.354C21.78 6.46 35.111 0 49.952 0 77.593 0 100 22.407 100 50.048c0 14.84-6.459 28.172-16.72 37.338-.39.349-.984.326-1.354-.044L12.659 18.074Z" fill="url(#lg-a)"/></svg> },
  { name: "Jira", logo: <svg viewBox="0 0 256 256" width="15" height="15"><defs><linearGradient id="jira-a" x1="98%" x2="59%" y1="0%" y2="41%"><stop offset="18%" stopColor="#0052CC"/><stop offset="100%" stopColor="#2684FF"/></linearGradient><linearGradient id="jira-b" x1="101%" x2="55%" y1="0%" y2="45%"><stop offset="18%" stopColor="#0052CC"/><stop offset="100%" stopColor="#2684FF"/></linearGradient></defs><path fill="url(#jira-a)" d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z"/><path fill="url(#jira-b)" d="M183.822 60.836H60.871c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.502c0-5.891-4.776-10.666-10.666-10.666z"/><path fill="#2684FF" d="M122.951 121.672H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.455V132.338c0-5.891-4.776-10.666-10.667-10.666z"/></svg> },
  { name: "Confluence", logo: <svg viewBox="-.022 .04 256.072 245.94" width="15" height="15"><defs><linearGradient id="cf-a"><stop offset="0" stopColor="#0052cc"/><stop offset="1" stopColor="#2684ff"/></linearGradient><linearGradient id="cf-b" gradientUnits="userSpaceOnUse" x1="243.35" x2="83.149" xlinkHref="#cf-a" y1="261.618" y2="169.549"/><linearGradient id="cf-c" gradientUnits="userSpaceOnUse" x1="12.633" x2="172.873" xlinkHref="#cf-a" y1="-15.48" y2="76.589"/></defs><path d="M9.11 187.79c-2.64 4.3-5.63 9.34-7.99 13.33a8.13 8.13 0 0 0-.84 5.97c.24 1.01.68 1.95 1.28 2.79s1.36 1.56 2.23 2.12l53.03 32.69a8.1 8.1 0 0 0 6.12-.01c.87-.64 1.6-1.45 2.15-2.38 2.14-3.56 4.85-8.17 7.76-13.09 21.02-34.47 42.32-30.25 80.37-12.16l52.6 24.94a8.13 8.13 0 0 0 10.97-4.07l25.25-56.93a8.15 8.15 0 0 0-.79-7.78c-11.09-5.22-33.16-15.49-52.94-25.17-71.95-34.71-132.66-32.42-179.12 42.99z" fill="url(#cf-b)"/><path d="M246.88 58.38c2.67-4.3 5.66-9.33 7.99-13.32a8.155 8.155 0 0 0-1.53-9.07l-52.95-32.69a8.09 8.09 0 0 0-6.12.02c-.87.64-1.6 1.45-2.16 2.38-2.09 3.56-4.85 8.17-7.76 13.09-21.1 34.63-42.2 30.41-80.29 12.32l-52.55-24.95a8.19 8.19 0 0 0-11 4.69l-25.25 57.09a8.191 8.191 0 0 0 1.38 8.81c11.13 5.23 33.2 15.49 52.94 25.18 71.76 34.7 132.66 32.42 179.09-43z" fill="url(#cf-c)"/></svg> },
  { name: "Trello", logo: <svg viewBox="0 0 256 256" width="15" height="15"><rect width="256" height="256" fill="#0079BF" rx="25"/><rect x="144.64" y="33.28" width="78.08" height="112" fill="#fff" rx="12"/><rect x="33.28" y="33.28" width="78.08" height="176" fill="#fff" rx="12"/></svg> },
  { name: "Airtable", logo: <img src="https://logosandtypes.com/wp-content/uploads/2022/04/airtable.svg" alt="" width="15" height="15" /> },
  { name: "Zendesk", logo: <img src="https://cdn.simpleicons.org/zendesk/888" alt="" width="15" height="15" /> },
  { name: "Gmail", logo: <svg viewBox="0 0 48 48" width="15" height="15"><path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"/><path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8 4.924 8 3 9.924 3 12.298z"/><path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8 43.076 8 45 9.924 45 12.298z"/></svg> },
  { name: "Drive", logo: <svg viewBox="0 0 87.3 78" width="15" height="15"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.5z" fill="#00ac47"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/><path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg> },
  { name: "Calendar", logo: <svg viewBox="0 0 48 48" width="15" height="15"><rect width="22" height="22" x="13" y="13" fill="#fff"/><polygon fill="#1e88e5" points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"/><path fill="#1e88e5" d="M22.943 23.745c.625-.574 1.013-1.37 1.013-2.249 0-1.747-1.533-3.168-3.417-3.168-1.602 0-2.972 1.009-3.33 2.453l1.657.421c.165-.664.868-1.146 1.673-1.146.942 0 1.709.646 1.709 1.44 0 .794-.767 1.44-1.709 1.44h-.997v1.728h.997c1.081 0 1.993.751 1.993 1.64 0 .904-.866 1.64-1.931 1.64-.962 0-1.784-.61-1.914-1.418L17 26.802c.262 1.636 1.81 2.87 3.6 2.87 2.007 0 3.64-1.511 3.64-3.368C24.24 25.281 23.736 24.363 22.943 23.745z"/><polygon fill="#4caf50" points="34,42 14,42 13,38 14,34 34,34 35,38"/><polygon fill="#fbc02d" points="38,35 42,34 42,14 38,13 34,14 34,34"/><path fill="#1e88e5" d="M34 14l1-4-1-4H9C7.343 6 6 7.343 6 9v25l4 1 4-1V14H34z"/><polygon fill="#e53935" points="34,34 34,42 42,34"/><path fill="#1565c0" d="M39 6h-5v8h8V9C42 7.343 40.657 6 39 6z"/><path fill="#1565c0" d="M9 42h5v-8H6v5C6 40.657 7.343 42 9 42z"/></svg> },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-child").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [mounted]);

  return (
    <div className="root">

      {/* ── Nav ── */}
      <header className={`nav ${mounted ? "nav-in" : ""}`}>
        <div className="nav-inner">
          <a href="/" className="wordmark">ClutterAI</a>
          <nav className="nav-links">
            <a href="/pricing" className="nav-link">Pricing</a>
            <a href="/about" className="nav-link">About</a>
            <a href="https://app.clutter-ai.com/signup" className="nav-cta">Get started →</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <main className="hero">
        <div className="hero-inner">
          <div className={`hero-left ${mounted ? "hero-left-in" : ""}`}>
            <h1 className="headline">
              <span className="hl-line">Stop</span>
              <span className="hl-line hl-dim">searching.</span>
              <span className="hl-line">Start</span>
              <span className="hl-line hl-dim">knowing.</span>
            </h1>
          </div>
          <div className={`hero-right ${mounted ? "hero-right-in" : ""}`}>
            <p className="subtext">
              Connect every tool your team uses. Ask anything in plain English.
              Get answers with sources — not links to go search yourself.
            </p>
            <div className="hero-actions">
              <a href="https://app.clutter-ai.com/signup" className="cta-primary">Start for free</a>
              <a href="/pricing" className="cta-ghost">See pricing →</a>
            </div>
            <p className="hero-footnote">No credit card required · 2-minute setup</p>
          </div>
        </div>
        <div className={`hero-rule ${mounted ? "hero-rule-in" : ""}`} />
      </main>


      {/* ── Problem statement ── */}
      <section className="problem reveal">
        <div className="problem-inner">
          <div className="problem-stat">
            <span className="problem-num">1.8</span>
            <span className="problem-unit">hrs/day</span>
          </div>
          <div className="problem-text">
            <p className="problem-lead">The average employee spends 1.8 hours every day searching for information — not working on it.</p>
            <p className="problem-sub">That's 9.3 hours every week. Businesses hire 5 employees, but one is effectively off searching for answers all day. <span className="problem-source">McKinsey Global Institute</span></p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats">
        <div className="stats-inner">
          {[
            { n: "12+", l: "Integrations" },
            { n: "1", l: "Question to search everything" },
            { n: "<2s", l: "Average answer time" },
            { n: "SOC 2", l: "Security standard" },
          ].map((s, i) => (
            <div key={s.n} className="stat reveal-child" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <span className="stat-num">{s.n}</span>
              <span className="stat-label">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="values">
        <div className="values-inner">
          {[
            { n: "01", t: "Connect in seconds", d: "Link Slack, Notion, GitHub, Linear, Jira and more with secure OAuth. Your data is indexed and ready to search immediately." },
            { n: "02", t: "Ask in plain English", d: "No Boolean operators. No folder diving. Type exactly what you're looking for and ClutterAI searches every connected tool at once." },
            { n: "03", t: "Get sourced answers", d: "Every answer includes the exact document, message, or issue it came from. One click to jump straight to the source." },
          ].map((v, i) => (
            <div key={v.n} className="value-card reveal-child" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
              <div className="value-num">{v.n}</div>
              <h3 className="value-title">{v.t}</h3>
              <p className="value-desc">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="integrations reveal">
        <div className="integrations-inner">
          <p className="integrations-label">Works with the tools you already use</p>
          <div className="logo-strip">
            {INTEGRATIONS.map((item, i) => (
              <div key={item.name} className="logo-item reveal-child" style={{ "--d": `${i * 35}ms` } as React.CSSProperties}>
                <span className="logo-icon">{item.logo}</span>
                <span className="logo-name">{item.name}</span>
              </div>
            ))}
          </div>
          <p className="integrations-more">+ more coming soon</p>
        </div>
      </section>

      {/* ── Privacy ── */}
      <section className="privacy reveal">
        <div className="privacy-inner">
          <div className="privacy-left reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
            <h2 className="privacy-title">Your data stays yours.</h2>
            <p className="privacy-sub">ClutterAI never trains on your data. Every search is private, every connection is OAuth-secured, and you can disconnect any integration instantly.</p>
            <a href="/about" className="privacy-link">Read our privacy approach →</a>
          </div>
          <div className="privacy-right">
            {[
              { icon: "🔒", t: "Your eyes only", s: "Data never leaves your control" },
              { icon: "⚡", t: "OAuth secured", s: "Read-only access by default" },
              { icon: "✓", t: "SOC 2 compliant", s: "Enterprise-grade security" },
            ].map((b, i) => (
              <div key={b.t} className="privacy-badge reveal-child" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <div className="pb-icon">{b.icon}</div>
                <div><div className="pb-title">{b.t}</div><div className="pb-sub">{b.s}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Powered by ── */}
      <section className="powered reveal">
        <div className="powered-inner">
          <p className="powered-label">Powered by</p>
          <div className="powered-grid">
            {["OpenAI", "Pinecone", "Convex", "Microsoft", "Vercel", "Hostinger"].map((name, i) => (
              <div key={name} className="powered-item reveal-child" style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta reveal">
        <div className="final-inner">
          <h2 className="final-title">Stop wasting time<br />searching.</h2>
          <a href="https://app.clutter-ai.com/signup" className="cta-primary large">Start for free →</a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-wordmark">ClutterAI</span>
          <nav className="footer-nav">
            <a href="/privacy" className="footer-link">Privacy</a>
            <a href="/refund" className="footer-link">Refunds</a>
            <a href="/terms" className="footer-link">Terms</a>
            <a href="mailto:support@clutter-ai.com" className="footer-link">Contact</a>
          </nav>
          <span className="footer-copy">© {new Date().getFullYear()} ClutterAI</span>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Unbounded:wght@700;800;900&family=Figtree:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .root {
          min-height: 100vh; background: #0a0a0a; color: #f0ede8;
          font-family: 'Figtree', sans-serif; overflow-x: hidden;
        }

        /* ── Reveal system ── */
        .reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1),
                      transform 0.75s cubic-bezier(0.16,1,0.3,1);
        }
        .reveal.in { opacity: 1; transform: none; }

        .reveal-child {
          opacity: 0; transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1) var(--d,0ms),
                      transform 0.6s cubic-bezier(0.16,1,0.3,1) var(--d,0ms);
        }
        .reveal-child.in { opacity: 1; transform: none; }

        /* ── Nav ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(10,10,10,0.88); backdrop-filter: blur(20px);
          opacity: 0; transform: translateY(-10px);
          transition: opacity 0.55s ease 0.05s, transform 0.55s ease 0.05s;
        }
        .nav.nav-in { opacity: 1; transform: none; }
        .nav-inner {
          max-width: 1200px; margin: 0 auto; padding: 0 40px;
          height: 60px; display: flex; align-items: center; justify-content: space-between;
        }
        .wordmark {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 1.1rem; color: #f0ede8; text-decoration: none; letter-spacing: -0.03em;
        }
        .nav-links { display: flex; align-items: center; gap: 28px; }
        .nav-link { font-size: 0.88rem; color: rgba(240,237,232,0.45); text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #f0ede8; }
        .nav-cta {
          font-size: 0.88rem; font-weight: 500; color: #f0ede8; text-decoration: none;
          padding: 7px 16px; border: 1px solid rgba(255,255,255,0.14); border-radius: 6px;
          transition: background 0.2s, border-color 0.2s;
        }
        .nav-cta:hover { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.28); }

        /* ── Hero ── */
        .hero {
          min-height: 100vh; padding: 0 40px;
          display: flex; flex-direction: column; justify-content: center;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .hero-inner {
          max-width: 1200px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1.1fr 0.9fr;
          gap: 80px; align-items: end;
          padding-top: 130px; padding-bottom: 90px;
        }

        /* Headline slides in from left */
        .hero-left {
          opacity: 0; transform: translateX(-28px);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s,
                      transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s;
        }
        .hero-left.hero-left-in { opacity: 1; transform: none; }

        .headline {
          font-family: 'Unbounded', sans-serif; font-weight: 800;
          font-size: clamp(4rem, 7vw, 7.5rem);
          line-height: 0.95; letter-spacing: -0.05em;
          display: flex; flex-direction: column;
        }
        .hl-line { display: block; }
        .hl-dim { color: rgba(240,237,232,0.22); }

        /* Subtext fades in from right */
        .hero-right {
          opacity: 0; transform: translateX(20px);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1) 0.5s,
                      transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s;
          display: flex; flex-direction: column; gap: 28px; padding-bottom: 8px;
        }
        .hero-right.hero-right-in { opacity: 1; transform: none; }

        .subtext { font-size: 1.05rem; line-height: 1.7; color: rgba(240,237,232,0.52); font-weight: 300; }
        .hero-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .hero-footnote { font-size: 0.77rem; color: rgba(240,237,232,0.22); font-weight: 300; }

        /* Rule draws in */
        .hero-rule {
          max-width: 1200px; width: calc(100% - 80px); margin: 0 auto;
          height: 1px; background: rgba(255,255,255,0.06);
          transform: scaleX(0); transform-origin: left;
          transition: transform 1.3s cubic-bezier(0.16,1,0.3,1) 0.9s;
        }
        .hero-rule.hero-rule-in { transform: scaleX(1); }

        /* ── CTAs ── */
        .cta-primary {
          display: inline-flex; align-items: center;
          padding: 13px 28px; background: #f0ede8; color: #0a0a0a;
          font-family: 'Figtree', sans-serif; font-weight: 600; font-size: 0.92rem;
          text-decoration: none; border-radius: 6px;
          transition: background 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s;
        }
        .cta-primary:hover { background: #fff; transform: translateY(-2px); box-shadow: 0 12px 30px rgba(240,237,232,0.12); }
        .cta-primary.large { padding: 16px 40px; font-size: 1rem; }
        .cta-ghost { font-size: 0.92rem; color: rgba(240,237,232,0.45); text-decoration: none; transition: color 0.2s; letter-spacing: 0.01em; }
        .cta-ghost:hover { color: #f0ede8; }

        /* ── Problem ── */
        .problem { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 80px 40px; }
        .problem-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: auto 1fr;
          gap: 64px; align-items: center;
        }
        .problem-stat {
          display: flex; align-items: baseline; gap: 8px;
          flex-shrink: 0;
        }
        .problem-num {
          font-family: 'Unbounded', sans-serif; font-weight: 900;
          font-size: clamp(5rem, 9vw, 9rem);
          color: #f0ede8; letter-spacing: -0.06em; line-height: 1;
        }
        .problem-unit {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(1.2rem, 2vw, 1.8rem);
          color: rgba(240,237,232,0.35); letter-spacing: -0.03em; align-self: flex-end; padding-bottom: 0.15em;
        }
        .problem-text { display: flex; flex-direction: column; gap: 16px; }
        .problem-lead {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(1.1rem, 2vw, 1.5rem); color: #f0ede8;
          letter-spacing: -0.03em; line-height: 1.3;
        }
        .problem-sub { font-size: 0.9rem; line-height: 1.7; color: rgba(240,237,232,0.42); font-weight: 300; }
        .problem-source {
          font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(240,237,232,0.22);
        }

        /* ── Stats ── */
        .stats { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 48px 40px; }
        .stats-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: center;
        }
        .stat {
          padding: 0 60px; display: flex; flex-direction: column; align-items: center; gap: 6px;
        }
        .stat + .stat { border-left: 1px solid rgba(255,255,255,0.08); }
        .stat-num {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 2.2rem; color: #f0ede8; letter-spacing: -0.05em; line-height: 1;
        }
        .stat-label { font-size: 0.82rem; color: rgba(240,237,232,0.38); font-weight: 300; text-align: center; }

        /* ── Values ── */
        .values { padding: 100px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .values-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; overflow: hidden;
        }
        .value-card {
          padding: 52px 44px; background: #0a0a0a;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column; gap: 16px;
          transition: background 0.35s ease;
        }
        .value-card:last-child { border-right: none; }
        .value-card:hover { background: #111; }
        .value-num {
          font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.68rem;
          font-weight: 800; letter-spacing: 0.12em; color: rgba(240,237,232,0.16);
        }
        .value-title {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 1.18rem; color: #f0ede8; letter-spacing: -0.03em; line-height: 1.2;
        }
        .value-desc { font-size: 0.87rem; color: rgba(240,237,232,0.42); line-height: 1.72; font-weight: 300; }

        /* ── Integrations ── */
        .integrations { padding: 80px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .integrations-inner { max-width: 1000px; margin: 0 auto; text-align: center; }
        .integrations-label {
          font-size: 0.7rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(240,237,232,0.25); margin-bottom: 30px;
        }
        .logo-strip { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .logo-item {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 16px; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 999px; background: rgba(255,255,255,0.02);
          transition: border-color 0.2s, background 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .logo-item:hover { border-color: rgba(255,255,255,0.16); background: rgba(255,255,255,0.05); transform: translateY(-2px); }
        .logo-icon { width: 15px; height: 15px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-name { font-size: 0.8rem; font-weight: 500; color: rgba(240,237,232,0.52); }
        .integrations-more { margin-top: 18px; font-size: 0.76rem; color: rgba(240,237,232,0.18); font-weight: 300; }

        /* ── Privacy ── */
        .privacy { padding: 100px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .privacy-inner {
          max-width: 1200px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start;
        }
        .privacy-title {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(2rem, 3.5vw, 2.8rem); letter-spacing: -0.05em;
          color: #f0ede8; line-height: 1.08; margin-bottom: 20px;
        }
        .privacy-sub { font-size: 0.92rem; line-height: 1.78; color: rgba(240,237,232,0.45); font-weight: 300; margin-bottom: 28px; }
        .privacy-link {
          font-size: 0.87rem; color: rgba(240,237,232,0.45); text-decoration: none;
          border-bottom: 1px solid rgba(240,237,232,0.16); padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .privacy-link:hover { color: #f0ede8; border-color: rgba(240,237,232,0.5); }
        .privacy-right { display: flex; flex-direction: column; gap: 10px; }
        .privacy-badge {
          display: flex; align-items: center; gap: 16px;
          padding: 18px 22px; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px; background: rgba(255,255,255,0.02);
          transition: border-color 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1), background 0.2s;
        }
        .privacy-badge:hover { border-color: rgba(255,255,255,0.14); transform: translateX(5px); background: rgba(255,255,255,0.04); }
        .pb-icon { font-size: 1.2rem; width: 34px; text-align: center; flex-shrink: 0; opacity: 0.6; }
        .pb-title { font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.87rem; font-weight: 800; color: rgba(240,237,232,0.8); letter-spacing: -0.02em; margin-bottom: 3px; }
        .pb-sub { font-size: 0.74rem; color: rgba(240,237,232,0.3); font-weight: 300; }

        /* ── Powered by ── */
        .powered { padding: 60px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .powered-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .powered-label {
          font-size: 0.68rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(240,237,232,0.2); margin-bottom: 22px;
        }
        .powered-grid { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .powered-item {
          padding: 7px 18px; border: 1px solid rgba(255,255,255,0.07);
          border-radius: 6px; font-size: 0.78rem; font-weight: 500;
          color: rgba(240,237,232,0.28); letter-spacing: 0.01em;
          transition: border-color 0.2s, color 0.2s;
        }
        .powered-item:hover { border-color: rgba(255,255,255,0.14); color: rgba(240,237,232,0.52); }

        /* ── Final CTA ── */
        .final-cta { padding: 120px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .final-inner { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 36px; text-align: center; }
        .final-title {
          font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(2.4rem, 4vw, 3.5rem); letter-spacing: -0.05em;
          color: #f0ede8; line-height: 1.0;
        }

        /* ── Footer ── */
        .footer { padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.06); }
        .footer-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .footer-wordmark { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800; font-size: 0.86rem; color: rgba(240,237,232,0.22); letter-spacing: -0.03em; }
        .footer-nav { display: flex; gap: 20px; }
        .footer-link { font-size: 0.78rem; color: rgba(240,237,232,0.26); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: rgba(240,237,232,0.6); }
        .footer-copy { font-size: 0.74rem; color: rgba(240,237,232,0.16); }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; padding-top: 100px; padding-bottom: 60px; }
          .hero-left { transform: translateY(20px); }
          .hero-right { transform: translateY(16px); }
          .stats-inner { flex-wrap: wrap; gap: 24px 0; }
          .stat { padding: 0 30px; }
          .stat + .stat { border-left: none; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 24px; width: 100%; align-items: flex-start; }
          .values-inner { grid-template-columns: 1fr; }
          .value-card { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .value-card:last-child { border-bottom: none; }
          .problem-inner { grid-template-columns: 1fr; gap: 28px; }
          .problem-num { font-size: clamp(4rem, 16vw, 6rem); }
          .privacy-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 640px) {
          .hero, .stats, .values, .integrations, .privacy, .powered, .final-cta { padding-left: 20px; padding-right: 20px; }
          .hero-rule { width: calc(100% - 40px); }
          .footer { padding: 20px; }
          .footer-inner { flex-direction: column; text-align: center; gap: 12px; }
          .nav-inner { padding: 0 20px; }
          .headline { font-size: clamp(3.2rem, 11vw, 4.5rem); }
        }
      `}</style>
    </div>
  );
}