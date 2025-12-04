"use client";

import Link from "next/link";
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
      { threshold: 0.18 }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Ultra-modern background: multi-layer parallax gradients + morphing metaballs */}
      <div className="bg-wrap" aria-hidden="true">
        <div className="bg-gradient-layer" />
        <div className="bg-noise" />
        <svg className="bg-grid" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="6" height="6" patternUnits="userSpaceOnUse">
              <path d="M 6 0 L 0 0 0 6" fill="none" stroke="rgba(124,58,237,0.07)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
        <div className="metaballs">
          <div className="ball ball-a" />
          <div className="ball ball-b" />
          <div className="ball ball-c" />
        </div>
      </div>

      <div className="container">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        <article className="article">
          {/* Hero */}
          <header
            className="hero section-reveal"
            ref={(el) => el && sectionsRef.current.push(el)}
          >
            <h1 className="headline">
              About <span className="gradient">ClutterAI</span>
              <span className="headline-underline" aria-hidden="true" />
            </h1>

            <p className="large">
              We're building the future of knowledge work. ClutterAI helps professionals and teams
              find information instantly across all their connected apps.
            </p>
          </header>

          {/* Mission */}
          <section
            className="section"
            ref={(el) => el && sectionsRef.current.push(el as HTMLElement)}
          >
            <div className="section-head">
              <h2 className="title-underline">Our Mission</h2>
              <span className="section-badge" aria-hidden="true">Vision & Impact</span>
            </div>

            <div className="glass two-col tilt-hover">
              <p>
                Knowledge workers spend an average of 2.5 hours per day searching for information.
                That's 12.5 hours per week, or 650 hours per year—wasted on something computers
                should handle automatically.
              </p>
              <p>
                ClutterAI's mission is to eliminate search friction. We believe you should be able to
                ask a question in plain English and get an instant answer, no matter where your
                information lives.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section
            className="section"
            ref={(el) => el && sectionsRef.current.push(el as HTMLElement)}
          >
            <div className="section-head">
              <h2 className="title-underline">How It Works</h2>
              <span className="section-badge" aria-hidden="true">One-click, secure</span>
            </div>

            <div className="timeline">
              <div className="timeline-line" aria-hidden="true" />
              <div className="glass step-card reveal-stagger" style={{ ["--d" as any]: "0ms" }}>
                <div className="step-icon pulse" aria-hidden="true">①</div>
                <p>
                  Connect your Google Drive, Gmail, Slack, and other tools with one click. ClutterAI
                  securely indexes your content and makes it searchable through a simple chat interface.
                </p>
              </div>
              <div className="glass step-card reveal-stagger" style={{ ["--d" as any]: "160ms" }}>
                <div className="step-icon pulse" aria-hidden="true">②</div>
                <p>
                  Ask questions like "What did Sarah say about the Q3 budget?" or "Find the contract
                  we sent to Acme Corp" and get instant answers with source links. It's that simple.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy & Security */}
          <section
            className="section"
            ref={(el) => el && sectionsRef.current.push(el as HTMLElement)}
          >
            <div className="section-head">
              <h2 className="title-underline">Privacy & Security</h2>
              <span className="section-badge" aria-hidden="true">Enterprise-grade</span>
            </div>

            <div className="security-grid">
              <div className="glass security-card magnetic">
                <p>
                  Your data is yours. We use enterprise-grade encryption for data in transit and at rest.
                  We never train AI models on your data. You can delete your data at any time, and we'll
                  remove it from our systems within 30 days.
                </p>
              </div>
              <div className="glass security-card magnetic">
                <p>
                  ClutterAI is SOC 2 Type II and HIPAA compliant and follows industry best practices
                  for data security and privacy.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section
            className="section"
            ref={(el) => el && sectionsRef.current.push(el as HTMLElement)}
          >
            <div className="section-head">
              <h2 className="title-underline">Contact Us</h2>
              <span className="section-badge" aria-hidden="true">We’re listening</span>
            </div>

            <div className="glass contact">
              <p>
                Have questions? Want to learn more? We'd love to hear from you.
              </p>
              <p>
                Email us at: <a href="support@clutter-ai.com">support@clutter-ai.com</a>
              </p>

              <Link href="/contact" className="contact-button">
                Get in Touch →
              </Link>
            </div>
          </section>
        </article>
      </div>

      <style jsx>{`
        :root {
          --bg: #07060a;
          --text: #e9ecf8;
          --muted: #a1a1aa;
          --accent-1: #7c3aed;
          --accent-2: #5b21b6;
          --accent-3: #b78bff;
          --glass-bg: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.012));
          --glass-border: rgba(255,255,255,0.06);
          --rim: rgba(183,139,255,0.35);
          --rim-soft: rgba(183,139,255,0.12);
        }

        * { box-sizing: border-box; }

        .about-page {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          position: relative;
          overflow: clip;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        /* Background layers */
        .bg-wrap { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
        .bg-gradient-layer {
          position: absolute; inset: -10%;
          background:
            radial-gradient(1000px 600px at 10% 20%, rgba(124,58,237,0.18), transparent 40%),
            radial-gradient(1000px 600px at 90% 80%, rgba(91,33,182,0.16), transparent 40%),
            conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.08), transparent, rgba(124,58,237,0.08));
          filter: blur(40px);
          animation: bgDrift 22s ease-in-out infinite;
        }
        .bg-noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.04'/></svg>");
          opacity: 0.5;
        }
        .bg-grid { position: absolute; inset: 0; opacity: 0.06; }
        @keyframes bgDrift {
          0%   { transform: translateY(0) scale(1); }
          50%  { transform: translateY(-18px) scale(1.02); }
          100% { transform: translateY(0) scale(1); }
        }

        /* Morphing metaballs */
        .metaballs { position: absolute; inset: 0; overflow: hidden; }
        .ball {
          position: absolute; border-radius: 50%;
          filter: blur(60px); mix-blend-mode: screen; opacity: 0.9;
          animation: blob 18s ease-in-out infinite;
        }
        .ball-a { width: 420px; height: 420px; left: -6%; top: -8%; background: radial-gradient(circle, rgba(124,58,237,0.28) 0%, rgba(124,58,237,0) 60%); animation-duration: 24s; }
        .ball-b { width: 360px; height: 360px; right: -8%; bottom: -6%; background: radial-gradient(circle, rgba(91,33,182,0.24) 0%, rgba(91,33,182,0) 60%); animation-duration: 26s; animation-direction: reverse; }
        .ball-c { width: 300px; height: 300px; left: 44%; top: 30%; background: radial-gradient(circle, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0) 60%); animation-duration: 32s; }
        @keyframes blob {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(30px,-24px) scale(1.06); }
          66%  { transform: translate(-26px,28px) scale(0.98); }
          100% { transform: translate(0,0) scale(1); }
        }

        /* Layout */
        .container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 64px 24px;
          position: relative;
          z-index: 2;
        }

        .back-link {
          display: inline-flex; align-items: center; gap: 8px;
          color: #aeb0c8; text-decoration: none; font-weight: 600;
          margin-bottom: 28px; padding: 8px 12px; border-radius: 10px;
          background: rgba(255,255,255,0.02);
          transition: transform 160ms ease, color 160ms ease, box-shadow 160ms ease;
        }
        .back-link:hover { color: #fff; transform: translateY(-2px); box-shadow: 0 8px 26px rgba(2,6,23,0.45); }

        .article { animation: articleIn 720ms ease-out; }
        @keyframes articleIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }

        /* Hero */
        .hero { margin-bottom: 12px; position: relative; }
        .headline {
          position: relative;
          font-size: clamp(2.4rem, 5.4vw, 3.6rem);
          font-weight: 900; letter-spacing: -0.02em; line-height: 1.06;
          margin: 0 0 10px;
        }
        .gradient {
          background: linear-gradient(90deg, #ffd6ff, var(--accent-3) 35%, var(--accent-1) 100%);
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          animation: hueShift 10s ease-in-out infinite alternate;
        }
        @keyframes hueShift {
          0% { filter: hue-rotate(0deg) }
          100% { filter: hue-rotate(12deg) }
        }
        .headline-underline {
          position: absolute; left: 0; bottom: -10px;
          width: 0%; height: 3px; border-radius: 999px;
          background: linear-gradient(90deg, #ffd6ff, #b78bff, #7c3aed);
          box-shadow: 0 8px 18px rgba(124,58,237,0.35);
          animation: underlineGrow 1s ease 260ms forwards;
        }
        @keyframes underlineGrow { to { width: 44% } }

        .large {
          font-size: clamp(1.08rem, 1.8vw, 1.35rem);
          line-height: 1.75; color: var(--muted);
          max-width: 980px;
        }

        /* Section header */
        .section { margin: 26px 0; }
        .section-head {
          display: flex; align-items: baseline; justify-content: space-between;
          gap: 12px; margin-bottom: 12px;
        }
        h2 {
          font-size: clamp(1.5rem, 2.6vw, 2rem); margin: 0; color: #c4b5fd;
          font-weight: 800; letter-spacing: -0.01em; position: relative;
        }
        .title-underline::after {
          content: ""; position: absolute; left: 0; bottom: -8px;
          width: 28%; height: 2px; border-radius: 999px;
          background: linear-gradient(90deg, rgba(124,58,237,0.3), rgba(91,33,182,0.2));
          transform-origin: left; animation: titleBar 1s ease forwards;
        }
        @keyframes titleBar { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .section-badge {
          display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px;
          background: linear-gradient(90deg, rgba(124,58,237,0.12), rgba(91,33,182,0.06));
          border: 1px solid rgba(255,255,255,0.06);
          color: #e9ecf8; font-weight: 700; font-size: 0.82rem;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05);
        }

        /* Glass surfaces with rim-light (fixed) */
        .glass {
          position: relative;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          border-radius: 16px; padding: 18px;
          box-shadow:
            0 14px 40px rgba(2,6,23,0.45),          /* depth */
            inset 0 0 0 1px rgba(255,255,255,0.04), /* subtle inner stroke */
            0 0 0 0 transparent;                    /* placeholder for hover glow */
          backdrop-filter: blur(8px) saturate(120%);
          overflow: hidden;
        }
        /* Replace spinning span with a fixed rim-light via ::after */
        .glass::after {
          content: "";
          position: absolute; inset: 0;
          border-radius: 16px;
          pointer-events: none;
          /* Soft outer glow hugging the border */
          box-shadow:
            0 0 0 2px var(--rim-soft), /* soft color wash */
            0 0 26px var(--rim);        /* outer glow */
          opacity: 0.35;               /* tasteful default */
          transition: opacity 200ms ease, box-shadow 200ms ease;
        }
        .glass:hover::after {
          opacity: 0.55;
          box-shadow:
            0 0 0 2px var(--rim-soft),
            0 0 36px var(--rim);
        }

        /* Tilt hover (subtle 3D) */
        .tilt-hover { transform: perspective(900px) translateZ(0) rotateX(0) rotateY(0); transition: transform 220ms cubic-bezier(.16,.84,.44,1), box-shadow 220ms ease; }
        .tilt-hover:hover { transform: perspective(900px) rotateX(-1.2deg) rotateY(1.6deg) translateY(-2px); box-shadow: 0 18px 48px rgba(2,6,23,0.55); }

        /* Two-column grid */
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        /* Timeline */
        .timeline { position: relative; display: grid; gap: 14px; }
        .timeline-line {
          position: absolute; left: 18px; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(180deg, rgba(124,58,237,0.24), rgba(91,33,182,0.12));
          border-radius: 999px; opacity: 0.7;
        }
        .step-card { display: grid; grid-template-columns: 44px 1fr; gap: 12px; align-items: start; }
        .step-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: grid; place-items: center; color: #fff; font-weight: 900;
          background: linear-gradient(180deg, rgba(124,58,237,0.22), rgba(124,58,237,0.08));
          box-shadow: 0 10px 24px rgba(2,6,23,0.45);
        }
        .pulse { animation: pulse 2.8s ease-in-out infinite; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 0 rgba(124,58,237,0)); }
          50% { transform: scale(1.06); filter: drop-shadow(0 0 14px rgba(124,58,237,0.35)); }
        }

        /* Security cards */
        .security-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .security-card { transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease; }
        .security-card:hover { transform: translateY(-4px); box-shadow: 0 18px 48px rgba(2,6,23,0.55); border-color: rgba(124,58,237,0.18); }

        /* Contact CTA */
        .contact { display: grid; gap: 8px; }
        a { color: var(--accent-1); text-decoration: none; font-weight: 700; transition: color 160ms ease; }
        a:hover { color: #a78bfa; }
        .contact-button {
          position: relative;
          display: inline-flex; align-items: center; justify-content: center;
          margin-top: 10px; padding: 12px 18px; border-radius: 12px;
          background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
          color: #fff; font-weight: 800; text-decoration: none;
          box-shadow: 0 10px 30px rgba(91,33,182,0.18);
          transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
          overflow: hidden;
        }
        .contact-button::after {
          content: ""; position: absolute; inset: 0;
          background: radial-gradient(400px 140px at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.15), transparent 60%);
          opacity: 0; transition: opacity 160ms ease;
        }
        .contact-button:hover { transform: translateY(-2px); box-shadow: 0 18px 50px rgba(91,33,182,0.26); filter: brightness(1.06); }
        .contact-button:hover::after { opacity: 1; }

        /* Mouse glow for CTA */
        .contact-button {
          --mx: 50%;
          --my: 50%;
        }
        .contact-button:hover { cursor: pointer; }
        .contact-button:where(:hover, :focus-visible) { outline: none; }

        /* Paragraphs */
        p { font-size: 1.05rem; line-height: 1.75; color: var(--muted); margin: 0; }

        /* Reveal animations */
        .section-reveal { opacity: 0; transform: translateY(12px) scale(0.992); transition: transform 520ms cubic-bezier(.16,.84,.44,1), opacity 420ms ease; }
        .section-reveal.in-view { opacity: 1; transform: translateY(0) scale(1); }
        .section { opacity: 0; transform: translateY(16px); transition: transform 540ms cubic-bezier(.16,.84,.44,1), opacity 420ms ease; }
        .section.in-view { opacity: 1; transform: translateY(0); }
        .reveal-stagger { opacity: 0; transform: translateY(12px); transition: transform 520ms cubic-bezier(.16,.84,.44,1) var(--d), opacity 420ms ease var(--d); }
        .section.in-view .reveal-stagger { opacity: 1; transform: translateY(0); }

        /* Responsive */
        @media (max-width: 980px) {
          .two-col, .security-grid { grid-template-columns: 1fr; }
          .timeline-line { left: 12px; }
          .step-card { grid-template-columns: 40px 1fr; }
          .step-icon { width: 40px; height: 40px; }
        }
        @media (max-width: 640px) {
          .container { padding: 52px 16px; }
          .section-head { flex-direction: column; align-items: flex-start; gap: 6px; }
          .glass { border-radius: 14px; padding: 16px; }
          .glass::after { border-radius: 14px; }
        }

        /* Motion reduction */
        @media (prefers-reduced-motion: reduce) {
          .bg-gradient-layer, .ball, .pulse, .gradient, .title-underline::after, .headline-underline,
          .tilt-hover, .reveal-stagger, .section, .section-reveal {
            animation: none !important; transition: none !important;
          }
        }
      `}</style>

      {/* Mouse glow tracking for CTA */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(){
              var root = document;
              root.addEventListener('mousemove', function(e){
                var target = e.target.closest('.contact-button');
                if(!target) return;
                var rect = target.getBoundingClientRect();
                var x = ((e.clientX - rect.left) / rect.width) * 100;
                var y = ((e.clientY - rect.top) / rect.height) * 100;
                target.style.setProperty('--mx', x + '%');
                target.style.setProperty('--my', y + '%');
              }, { passive: true });
            })();
          `,
        }}
      />
    </div>
  );
}