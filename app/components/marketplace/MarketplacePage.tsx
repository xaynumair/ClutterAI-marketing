"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import "./marketplace.css";
import { Logo, Spark, Icon } from "../Logo";
import { InView, Reveal } from "../Reveal";
import { SceneCard } from "../scenes/SceneDeck";
import { APPS } from "../../lib/apps";
import { AGENTS } from "../../lib/agents";
import { SIGNUP_URL, TRIAL_DAYS } from "../../lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` } as CSSProperties);

export function MarketplacePage() {
  const [active, setActive] = useState<string>(APPS[0].id);

  // Highlight the entry being read in the rail
  useEffect(() => {
    const ids = [...APPS.map((a) => a.id), "agents"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis) setActive(vis.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.05, 0.3, 0.6] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="mk">
      {/* Hero */}
      <section className="mk-hero">
        <div className="wrap">
          <p className="kicker">Apps &amp; agents</p>
          <h1 className="h-serif h-xl">Everything in the workspace.</h1>
          <p className="lede">
            Eight apps you work in and four agents that work while you don&rsquo;t, all reading from the same
            connected memory. Anything you make in one becomes searchable everywhere else — and every entry
            below is a real miniature of the app doing its job. Hover to replay.
          </p>
          <div className="mk-free">
            <span className="pill pill-ok">Notes and Chime: free forever</span>
            <span className="pill pill-ok">Cadence and the Stride pipeline: on every plan</span>
            <span className="pill">Chat: free after the trial</span>
            <span className="pill pill-accent">Everything else: {TRIAL_DAYS} days free, then Pro, Max or Team</span>
          </div>
        </div>
      </section>

      <section className="wrap mk-body">
        <aside className="mk-rail" aria-label="On this page">
          <p className="mk-rail-label">Apps</p>
          {APPS.map((a) => (
            <a key={a.id} href={`#${a.id}`} className={`mk-rail-link ${active === a.id ? "is-on" : ""}`}>
              {a.name}<span className="mk-rail-role">{a.role}</span>
            </a>
          ))}
          <p className="mk-rail-label" style={{ marginTop: 18 }}>Agents</p>
          <a href="#agents" className={`mk-rail-link ${active === "agents" ? "is-on" : ""}`}>
            All four<span className="mk-rail-role">Always running</span>
          </a>
        </aside>

        <div className="mk-entries">
          {APPS.map((app) => (
            <Reveal as="article" key={app.id} id={app.id} className="mk-app" threshold={0.08}>
              <div className="mk-app-head reveal-child" style={d(0)}>
                <h2 className="h-display mk-app-name">{app.name}</h2>
                <span className="mk-app-role">{app.role}</span>
                {app.free && <span className="pill pill-ok">Free forever</span>}
              </div>
              <span className="pill pill-accent reveal-child" style={d(60)}>{app.similar}</span>
              <p className="mk-app-tagline reveal-child" style={d(120)}>{app.tagline}</p>
              <p className="mk-app-body reveal-child" style={d(180)}>{app.body}</p>

              <div className="mk-scene reveal-child" style={d(240)}>
                <InView minHeight={320} threshold={0.3}><SceneCard id={app.id} /></InView>
              </div>

              <ul className="rows mk-features">
                {app.features.map((f, i) => (
                  <li key={i} className="row reveal-child" style={d(280 + i * 40)}><span className="row-mark"><Spark /></span>{f}</li>
                ))}
              </ul>

              <div className="mk-plays reveal-child" style={d(520)}>
                <span className="sc-label">Plays well with</span>
                <div className="mk-plays-row">
                  {app.playsWith.map((p) => (
                    <span key={p.name} className="mk-play"><b>{p.name}</b> — {p.how}</span>
                  ))}
                </div>
              </div>
              <p className="pill mk-plan reveal-child" style={d(560)}>{app.plan}</p>
            </Reveal>
          ))}

          {/* Agents */}
          <Reveal as="article" id="agents" className="mk-app mk-agents" threshold={0.05}>
            <div className="mk-app-head reveal-child" style={d(0)}>
              <h2 className="h-display mk-app-name">Agents</h2>
              <span className="mk-app-role">Always running</span>
            </div>
            <p className="mk-app-tagline reveal-child" style={d(80)}>The apps are where you work. The agents work while you don&rsquo;t.</p>
            <p className="mk-app-body reveal-child" style={d(140)}>
              Each one owns a different job — briefing, summarising, ranking, building — and every one
              of them runs on the same connected memory, on every paid plan.
            </p>
            <div className="mk-agent-grid">
              {AGENTS.map((ag, i) => (
                <div key={ag.id} id={`agent-${ag.id}`} className="card card-hover mk-agent reveal-child" style={d(200 + i * 60)}>
                  <div className="mk-agent-top">
                    <Logo size={34} radius={10} className="mk-agent-logo" />
                  </div>
                  <h3 className="h-display h-sm">{ag.name}</h3>
                  <span className="mk-agent-role">{ag.role}</span>
                  <p className="mk-agent-tag">&ldquo;{ag.tagline}&rdquo;</p>
                  <p className="mk-agent-body">{ag.body}</p>
                  <span className="mk-agent-similar">{ag.similar}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section band-b center mk-cta">
        <div className="wrap wrap-narrow mk-cta-inner">
          <h2 className="h-serif h-lg">Try all of it for {TRIAL_DAYS} days.</h2>
          <p className="lede">Every app, every agent, no card. Chat and Notes stay free afterwards.</p>
          <div className="mk-cta-actions">
            <a href={SIGNUP_URL} className="btn btn-primary btn-lg">Start free <Icon.Arrow /></a>
            <Link href="/pricing" className="btn btn-ghost btn-lg">See pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
