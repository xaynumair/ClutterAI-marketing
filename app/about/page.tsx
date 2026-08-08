"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const sections = sectionsRef.current.filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const collect = (el: HTMLElement | null) => {
    if (!el) return;
    if (!sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="about-page">
      {/* Ultra-Modern Animated Background */}
      <div className="bg-visuals" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-overlay" />
      </div>

      <div className="container">
        <article className="article">
          {/* Hero Section */}
          <header className="hero" ref={collect}>
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              About Us
            </div>
            
            <h1 className="headline">
              Building the Future of <span className="gradient-text">Knowledge Work</span>
            </h1>

            <p className="subtitle">
              ClutterAI helps professionals and teams find information instantly across all their connected apps—eliminating search friction and saving hours every week.
            </p>
          </header>

          {/* Mission Card */}
          <section className="section" ref={collect}>
            <div className="section-header">
              <h2>Our Mission</h2>
              <span className="badge">Vision</span>
            </div>

            <div className="mission-grid">
              <div className="stat-card">
                <div className="stat-glow" />
                <div className="stat-number">2.5</div>
                <div className="stat-label">Hours per day searching</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-glow" />
                <div className="stat-number">650</div>
                <div className="stat-label">Hours wasted per year</div>
              </div>

              <div className="stat-card">
                <div className="stat-glow" />
                <div className="stat-number">~30%</div>
                <div className="stat-label">Of the working week, spent looking instead of doing</div>
              </div>

              <div className="stat-card">
                <div className="stat-glow" />
                <div className="stat-number">1 in 5</div>
                <div className="stat-label">Salaries effectively spent on searching, per five people hired</div>
              </div>
            </div>

            <div className="content-card">
              <div className="card-glow" />
              <p className="large-text">
                Knowledge workers spend an average of 2.5 hours per day searching for information. That's 650 hours per year—wasted on something computers should handle automatically.
              </p>
              <p className="large-text">
                Put that in money, because that's what it is. Those hours are paid for at
                full salary: on a $80,000 package, roughly <strong>$24,000 a year, per person</strong>,
                buys nothing but the act of looking. A team of ten burns around a
                <strong> quarter of a million dollars annually</strong> hunting for information it
                already owns — and that figure ignores the slower cost: decisions delayed while
                someone digs, work redone because the earlier version was never found, and
                questions re-asked in channels that already answered them.
              </p>
              <p className="large-text">
                Nobody hires for that. It's the most expensive line item no company has ever
                put on a budget.
              </p>
              <p className="large-text">
                ClutterAI's mission is to <strong>eliminate search friction</strong>. We believe you should be able to ask a question in plain English and get an instant answer, no matter where your information lives.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="section" ref={collect}>
            <div className="section-header">
              <h2>How It Works</h2>
              <span className="badge">Simple & Secure</span>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Connect Your Apps</h3>
                  <p>
                    One-click integration with Google Drive, Gmail, Calendar, Slack, Notion, GitHub, GitLab, Linear, Jira, Confluence, Trello, Airtable and Zendesk. ClutterAI securely indexes your content in minutes, then keeps it current in real time.
                  </p>
                </div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Ask Questions</h3>
                  <p>
                    Ask in plain English — in the app or straight from Slack — like "what did we decide about the Q3 budget?" and get an instant answer with links to every source. Forge builds with your codebase, and agents like Triage, Digest and Pulse surface what needs you before you ask.
                  </p>
                </div>
                <div className="step-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </section>

          {/* What ClutterAI Does */}
          <section className="section" ref={collect}>
            <div className="section-header">
              <h2>What ClutterAI Does</h2>
              <span className="badge">The full picture</span>
            </div>

            <div className="security-grid">
              <div className="security-card">
                <h3>Unified search</h3>
                <p>
                  Ask one question and every connected tool answers at once — email, documents,
                  channels, tickets, calendars and your own notes. Every answer arrives with its
                  sources, one click from the original.
                </p>
              </div>

              <div className="security-card">
                <h3>Real-time sync</h3>
                <p>
                  Most tools crawl your data every few hours. ClutterAI listens: Slack messages and
                  email arrive by push the moment they happen, so an answer can include something
                  that landed a minute ago.
                </p>
              </div>

              <div className="security-card">
                <h3>ClutterAI for Slack</h3>
                <p>
                  Mention the bot in a channel or message it directly and ask about your own data
                  without leaving Slack. Channel replies are visible only to you — sharing an
                  answer with the room is always your explicit choice.
                </p>
              </div>

              <div className="security-card">
                <h3>Forge</h3>
                <p>
                  A technical workspace that builds with your codebase, issues and architecture
                  threads. Files stream into a side panel — tabbed, editable, versioned with
                  line-by-line diffs — and save to a workspace you can reopen any time.
                </p>
              </div>

              <div className="security-card">
                <h3>Triage</h3>
                <p>
                  Everything arrives at once and looks equally urgent. Triage sorts what came in
                  across your tools by what actually needs you, so you start with a short list
                  instead of the whole pile.
                </p>
              </div>

              <div className="security-card">
                <h3>Digest</h3>
                <p>
                  A daily brief of your obligations in both directions: what you promised, what
                  you're owed, and which questions are still open. Items close themselves when the
                  reply lands or the work ships.
                </p>
              </div>

              <div className="security-card">
                <h3>Pulse</h3>
                <p>
                  A dossier before every meeting — who you're meeting, the latest threads and files
                  between you, and what was left unresolved last time. Ready before you walk in.
                </p>
              </div>

              <div className="security-card">
                <h3>Decision timeline</h3>
                <p>
                  ClutterAI tracks the decisions your team makes and keeps them on a timeline —
                  including the ones later reversed. Click any decision to trace how it came to be.
                </p>
              </div>

              <div className="security-card">
                <h3>Notes &amp; workspace</h3>
                <p>
                  Write your own notes inside ClutterAI and they're searchable alongside everything
                  else, next to the files Forge has saved for you.
                </p>
              </div>

              <div className="security-card">
                <h3>Built for teams</h3>
                <p>
                  Invite your team, manage seats from an admin console, and keep an eye on
                  integration health — every member's data stays private to them.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section className="section" ref={collect}>
            <div className="section-header">
              <h2>Privacy & Security</h2>
              <span className="badge">Enterprise-Grade</span>
            </div>

            <div className="security-grid">
              <div className="security-card">
                <div className="security-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>End-to-End Encryption</h3>
                <p>Enterprise-grade encryption for data in transit and at rest. Your data is always protected.</p>
              </div>

              <div className="security-card">
                <div className="security-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Zero Training on Your Data</h3>
                <p>We never use your data to train AI models. Your information stays private, always.</p>
              </div>

              <div className="security-card">
                <div className="security-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11V6a3 3 0 016 0v5M4 11h16v10H4V11z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>SOC 2 & HIPAA Compliant</h3>
                <p>We follow industry best practices and maintain compliance with major security standards.</p>
              </div>

              <div className="security-card">
                <div className="security-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3>Full Data Control</h3>
                <p>Delete your data anytime. We remove it from our systems within 30 days, guaranteed.</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="section cta-section" ref={collect}>
            <div className="cta-card">
              <div className="cta-glow" />
              <h2 className="cta-title">Let's Talk</h2>
              <p className="cta-subtitle">
                Have questions or want to learn more? We'd love to hear from you.
              </p>
              <div className="cta-actions">
                <a href="mailto:support@clutter-ai.com" className="cta-button primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Email Us
                </a>
                <a href="/contact" className="cta-button secondary">
                  Visit Contact Page
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </article>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Unbounded:wght@700;800;900&family=Figtree:wght@300;400;500;600&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Only ONE scroll container on the page.
           - overflow-x: hidden on an element promotes overflow-y to auto, so the
             element becomes its own scroller → a second bar.
           - overflow-x: hidden on BOTH html and body does the same thing at
             document level → also a second bar.
           overflow-x: clip trims horizontally without creating a scroller. */
        :global(body) { background: #141413; }

        .about-page {
          min-height: 100vh;
          background: #141413;
          color: #f0ede8;
          position: relative;
          font-family: 'Figtree', sans-serif;
          overflow-x: clip;
        }

        /* Scrollbar styling — the marketing site is a separate app from
           app.clutter-ai.com, so it needs its own rules. */
        :global(html) { scrollbar-width: thin; scrollbar-color: rgba(240,237,232,0.18) transparent; }
        :global(::-webkit-scrollbar) { width: 10px; height: 10px; }
        :global(::-webkit-scrollbar-track) { background: transparent; }
        :global(::-webkit-scrollbar-thumb) {
          background: rgba(240,237,232,0.16);
          border-radius: 999px;
          border: 3px solid transparent;
          background-clip: content-box;
        }
        :global(::-webkit-scrollbar-thumb:hover) { background: rgba(240,237,232,0.3); background-clip: content-box; }

        /* Animated Background */
        .bg-visuals {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.35;
        }

        .orb-1 {
          width: 700px;
          height: 700px;
          top: -15%;
          right: -10%;
          background: radial-gradient(circle, rgba(240,237,232,0.10), transparent 70%);
          animation: float1 25s ease-in-out infinite;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          bottom: -10%;
          left: -10%;
          background: radial-gradient(circle, rgba(240,237,232,0.07), transparent 70%);
          animation: float2 30s ease-in-out infinite;
        }

        .orb-3 {
          width: 500px;
          height: 500px;
          top: 40%;
          left: 50%;
          background: radial-gradient(circle, rgba(240,237,232,0.05), transparent 70%);
          animation: float3 35s ease-in-out infinite;
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(40px, -40px) rotate(5deg); }
          66% { transform: translate(-30px, 30px) rotate(-5deg); }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-35px, 40px) rotate(-5deg); }
          66% { transform: translate(40px, -35px) rotate(5deg); }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          50% { transform: translate(calc(-50% + 30px), calc(-50% - 30px)) rotate(10deg); }
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(240,237,232,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240,237,232,0.02) 1px, transparent 1px);
          background-size: 100px 100px;
        }

        /* Layout */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 24px 80px;
          position: relative;
          z-index: 1;
        }

        .article {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Hero Section */
        .hero {
          text-align: center;
          margin-bottom: 100px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 100px;
          background: linear-gradient(135deg, rgba(240,237,232,0.15), rgba(240,237,232,0.08));
          border: 1px solid rgba(240,237,232,0.3);
          color: #f0ede8;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 32px;
        }

        .headline {
          font-family: 'Unbounded', sans-serif;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 24px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Painted text is opt-in: solid cream by default, gradient only where
           background-clip:text is genuinely supported. The old version also
           animated the filter property on this element, which makes clipped
           text vanish
           on several mobile browsers. */
        .gradient-text { color: #f0ede8; }

        @supports ((-webkit-background-clip: text) or (background-clip: text)) {
          .gradient-text {
            background: linear-gradient(135deg, #f0ede8 0%, #f0ede8 50%, rgba(240,237,232,0.6) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }

        @keyframes shimmer {
          0%, 100% { filter: hue-rotate(0deg) brightness(1); }
          50% { filter: hue-rotate(10deg) brightness(1.1); }
        }

        .subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Section Styles */
        .section {
          margin-bottom: 100px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .section.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .section-header h2 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .badge {
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(240,237,232,0.1);
          border: 1px solid rgba(240,237,232,0.3);
          color: rgba(240,237,232,0.75);
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Mission Section */
        .mission-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 32px;
        }

        .stat-card {
          position: relative;
          padding: 32px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(240,237,232,0.3);
          box-shadow: 0 20px 60px rgba(240,237,232,0.2);
        }

        .stat-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle at 50% 50%, rgba(240,237,232,0.15), transparent 60%);
          filter: blur(40px);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .stat-card:hover .stat-glow {
          opacity: 1;
        }

        .stat-number {
          font-size: 4rem;
          font-weight: 900;
          color: #f0ede8;
          line-height: 1;
          margin-bottom: 12px;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          font-weight: 500;
        }

        .content-card {
          position: relative;
          padding: 40px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .card-glow {
          position: absolute;
          inset: -60px;
          background: radial-gradient(circle at 50% 0%, rgba(240,237,232,0.1), transparent 50%);
          filter: blur(60px);
          opacity: 0.6;
          pointer-events: none;
        }

        .large-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
        }

        .large-text strong {
          color: #f0ede8;
          font-weight: 700;
        }

        /* Steps Grid */
        .steps-grid {
          display: grid;
          gap: 24px;
        }

        .step-card {
          position: relative;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 24px;
          align-items: start;
          padding: 32px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .step-card:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(240,237,232,0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .step-number {
          font-size: 3rem;
          font-weight: 900;
          color: rgba(240,237,232,0.24);
          line-height: 1;
        }

        .step-content h3 {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #fff;
        }

        .step-content p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
        }

        .step-icon {
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(240,237,232,0.2), rgba(240,237,232,0.1));
          border: 1px solid rgba(240,237,232,0.3);
          color: #f0ede8;
        }

        /* Security Grid */
        .security-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .security-card {
          padding: 32px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .security-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(240,237,232,0.3);
          box-shadow: 0 20px 60px rgba(240,237,232,0.15);
        }

        .security-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(240,237,232,0.2), rgba(240,237,232,0.1));
          border: 1px solid rgba(240,237,232,0.3);
          color: #f0ede8;
          margin-bottom: 20px;
        }

        .security-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #fff;
        }

        .security-card p {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
        }

        /* CTA Section */
        .cta-section {
          margin-bottom: 0;
        }

        .cta-card {
          position: relative;
          padding: 60px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-align: center;
          backdrop-filter: blur(20px);
        }

        .cta-glow {
          position: absolute;
          inset: -80px;
          background: radial-gradient(circle at 50% 50%, rgba(240,237,232,0.2), transparent 50%);
          filter: blur(80px);
          opacity: 0.8;
          pointer-events: none;
        }

        .cta-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 16px;
        }

        .cta-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 40px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        /* Ensure Link components get button styles */
        :global(a.cta-button) {
          display: inline-flex !important;
          align-items: center !important;
          text-decoration: none !important;
        }

        .cta-button.primary {
          background: linear-gradient(135deg, #f0ede8 0%, rgba(240,237,232,0.6) 100%);
          color: #fff;
          box-shadow: 0 8px 24px rgba(240,237,232,0.4);
        }

        .cta-button.primary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .cta-button.primary:hover::before {
          transform: translateX(100%);
        }

        .cta-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(240,237,232,0.5);
        }

        .cta-button.secondary {
          background: rgba(240,237,232,0.08);
          border: 1px solid rgba(240,237,232,0.3);
          color: #f0ede8;
          backdrop-filter: blur(10px);
        }

        .cta-button.secondary:hover {
          background: rgba(240,237,232,0.15);
          border-color: rgba(240,237,232,0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(240,237,232,0.3);
        }

        .cta-button.secondary svg {
          transition: transform 0.3s ease;
        }

        .cta-button.secondary:hover svg {
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .security-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 80px 20px 60px;
          }

          .mission-grid {
            grid-template-columns: 1fr;
          }

          .step-card {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .step-icon {
            margin: 0 auto;
          }

          .cta-card {
            padding: 40px 24px;
          }

          .cta-actions {
            flex-direction: column;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}