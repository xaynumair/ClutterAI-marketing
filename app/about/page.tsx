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
            </div>

            <div className="content-card">
              <div className="card-glow" />
              <p className="large-text">
                Knowledge workers spend an average of 2.5 hours per day searching for information. That's 650 hours per year—wasted on something computers should handle automatically.
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
                    One-click integration with Google Drive, Gmail, Slack, Calendar, and Notion. ClutterAI securely indexes your content in minutes.
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
                    Use natural language like "What did Sarah say about Q3 budget?" or "Find the Acme contract" and get instant answers with source links.
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
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .about-page {
          min-height: 100vh;
          background: #0a0a0a;
          color: #fff;
          position: relative;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif;
          overflow-x: hidden;
        }

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
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent 70%);
          animation: float1 25s ease-in-out infinite;
        }

        .orb-2 {
          width: 600px;
          height: 600px;
          bottom: -10%;
          left: -10%;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.35), transparent 70%);
          animation: float2 30s ease-in-out infinite;
        }

        .orb-3 {
          width: 500px;
          height: 500px;
          top: 40%;
          left: 50%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.25), transparent 70%);
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
            linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px);
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
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(124, 58, 237, 0.08));
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 32px;
        }

        .headline {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 24px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .gradient-text {
          background: linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 50%, #7c3aed 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
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
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .badge {
          padding: 6px 14px;
          border-radius: 100px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #a78bfa;
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
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
        }

        .stat-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 60%);
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
          background: linear-gradient(135deg, #c4b5fd, #8b5cf6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
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
          background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1), transparent 50%);
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
          color: #c4b5fd;
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
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .step-number {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(124, 58, 237, 0.1));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }

        .step-content h3 {
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
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.1));
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
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
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 60px rgba(139, 92, 246, 0.15);
        }

        .security-icon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.1));
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
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
          background: radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.2), transparent 50%);
          filter: blur(80px);
          opacity: 0.8;
          pointer-events: none;
        }

        .cta-title {
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
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          color: #fff;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.4);
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
          box-shadow: 0 12px 32px rgba(139, 92, 246, 0.5);
        }

        .cta-button.secondary {
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
          backdrop-filter: blur(10px);
        }

        .cta-button.secondary:hover {
          background: rgba(139, 92, 246, 0.15);
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
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