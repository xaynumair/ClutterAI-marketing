"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const pathname = usePathname() ?? "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Refs for logo measurement / star placement (do not touch the logo visuals)
  const svgRef = useRef<SVGSVGElement | null>(null);
  const aiTspanRef = useRef<SVGTSpanElement | null>(null);
  const starRef = useRef<SVGGElement | null>(null);

  const GAP = 10;

  const positionStar = () => {
    const ai = aiTspanRef.current;
    const star = starRef.current;
    if (!ai || !star) return;

    try {
      const box = ai.getBBox();
      const x = box.x + box.width + GAP;
      const y = box.y + box.height / 2;
      star.setAttribute("transform", `translate(${x} ${y})`);
    } catch {
      // noop - getBBox can throw if SVG not ready
    }
  };

  useLayoutEffect(() => {
    positionStar();

    const fonts = (document as any).fonts;
    if (fonts?.ready) {
      fonts.ready.then(() => {
        requestAnimationFrame(positionStar);
      });
    } else {
      const id = setTimeout(() => requestAnimationFrame(positionStar), 50);
      return () => clearTimeout(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, mobileMenuOpen]);

  useEffect(() => {
    const onResize = () => requestAnimationFrame(positionStar);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        @keyframes neonPulse {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(124, 58, 237, 0.0);
          }
          50% {
            box-shadow: 0 8px 24px rgba(124, 58, 237, 0.25);
          }
        }
      `}</style>

      <nav className="navigation" role="navigation" aria-label="Top navigation">
        <div className="nav-shell">
          <div className="nav-container">
            <Link href="/" className="logo" aria-label="Home">
              <svg
                ref={svgRef}
                viewBox="0 0 520 100"
                preserveAspectRatio="xMinYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-svg"
                role="img"
                aria-label="Clutter AI logo"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#c4b5fd" />
                  </linearGradient>
                </defs>

                <text
                  x="10"
                  y="70"
                  fontFamily="Futura, Arial, sans-serif"
                  fontSize="60"
                  fontWeight="500"
                  fill="white"
                  letterSpacing="8"
                >
                  CLUTTER
                </text>

                <text
                  x="345"
                  y="70"
                  fontFamily="Futura, Arial, sans-serif"
                  fontSize="60"
                  fontWeight="500"
                  letterSpacing="8"
                >
                  <tspan ref={aiTspanRef} fill="url(#gradient)">
                    AI
                  </tspan>
                </text>

                <g
                  ref={starRef}
                  className="logo-star"
                  transform="translate(450 50)"
                  opacity="0.95"
                  aria-hidden="true"
                >
                  <line x1="0" y1="-24" x2="0" y2="-4" stroke="#f8f8f8ff" strokeWidth="3" />
                  <line x1="0" y1="4" x2="0" y2="24" stroke="#ffffffff" strokeWidth="3" />
                  <line x1="-21" y1="-12" x2="-3" y2="-2" stroke="#ffffffff" strokeWidth="3" />
                  <line x1="3" y1="2" x2="21" y2="12" stroke="#ffffffff" strokeWidth="3" />
                  <line x1="21" y1="-12" x2="3" y2="-2" stroke="#ffffffff" strokeWidth="3" />
                  <line x1="-3" y1="2" x2="-21" y2="12" stroke="#ffffffff" strokeWidth="3" />
                </g>
              </svg>
            </Link>

            <div className="desktop-menu" role="navigation" aria-label="Main navigation">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                >
                  <span className="link-inner">
                    <span className="link-text">{link.label}</span>
                    <span className="link-underline" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>

            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen((s) => !s)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {mobileMenuOpen && (
            <div id="mobile-menu" className="mobile-menu" role="menu">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-link ${isActive(link.href) ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mobile-link-text">{link.label}</span>
                  <span className="mobile-link-underline" aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        /* NAV SHELL: centers content and provides rounded glass panel */
        .navigation {
          position: fixed;
          top: 18px;
          left: 0;
          right: 0;
          z-index: 1000;
          pointer-events: none; /* allow inner shell to handle pointer events */
        }

        .nav-shell {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          pointer-events: auto;
        }

        /*
          Ultra-modern glassy container:
          - increased corner radius for a very rounded look
          - reduced vertical padding to lower overall height
          - ensure text isn't crushed by keeping comfortable horizontal padding
        */
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 8px 18px; /* reduced vertical padding to lower height */
          border-radius: 40px; /* very rounded edges */
          background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02));
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 10px 40px rgba(2, 6, 23, 0.45), inset 0 1px 0 rgba(255,255,255,0.02);
          backdrop-filter: blur(14px) saturate(140%);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .nav-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 48px rgba(2, 6, 23, 0.55);
        }

        .logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 220ms ease, filter 220ms ease;
        }
        .logo:hover {
          transform: translateY(-1px);
          filter: drop-shadow(0 8px 28px rgba(147, 51, 234, 0.35));
        }
        /* slightly reduced logo height so it fits the shorter nav without crowding */
        .logo-svg {
          height: 44px;
          width: auto;
          display: block;
          overflow: visible;
        }

        /* Desktop menu sits inside the glass card */
        .desktop-menu {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        :global(.nav-link) {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 36px; /* reduced height to match the slimmer nav */
          padding: 0 14px; /* keep horizontal padding so text doesn't get crushed */
          border-radius: 20px; /* pill-like buttons */
          text-decoration: none;
          color: #eef0f6;
          font-weight: 700;
          font-size: 0.98rem;
          line-height: 1; /* ensure single-line layout */
          transition: transform 160ms ease, color 160ms ease, box-shadow 160ms ease, background 160ms ease;
          isolation: isolate;
          background: transparent;
          border: none;
          white-space: nowrap; /* prevent wrapping that could look cramped */
        }

        .nav-link .link-inner {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: relative;
        }
        .nav-link .link-text {
          position: relative;
          z-index: 2;
        }
        .nav-link .link-underline {
          position: absolute;
          bottom: -8px;
          left: 50%;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #b78bff, #7c3aed);
          border-radius: 999px;
          transform: translateX(-50%);
          opacity: 0;
          transition: width 220ms ease, opacity 160ms ease;
        }

        :global(.nav-link::before) {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: linear-gradient(90deg, rgba(124,58,237,0.06), rgba(91,33,182,0.04));
          background-size: 200% 100%;
          opacity: 0;
          z-index: 0;
          transition: opacity 160ms ease;
        }

        :global(.nav-link:hover) {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(2,6,23,0.45);
        }
        :global(.nav-link:hover::before) {
          opacity: 1;
          animation: shimmer 1800ms linear infinite;
        }
        .nav-link:hover .link-underline {
          width: 64%;
          opacity: 1;
        }

        :global(.nav-link.active) {
          color: #ffffff;
          background: linear-gradient(180deg, rgba(124,58,237,0.14), rgba(124,58,237,0.08));
          box-shadow: 0 12px 36px rgba(2,6,23,0.45);
          border: 1px solid rgba(124,58,237,0.18);
        }
        :global(.nav-link.active::after) {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 36%;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #ffd6ff, #b78bff, #7c3aed);
          filter: drop-shadow(0 8px 18px rgba(124,58,237,0.4));
        }

        /* Mobile menu button */
        .mobile-menu-button {
          display: none;
          background: linear-gradient(180deg, rgba(124,58,237,0.14), rgba(124,58,237,0.08));
          border: 1px solid rgba(124,58,237,0.28);
          color: #f0eaff;
          font-size: 1.4rem;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 12px;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
        }
        .mobile-menu-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(2,6,23,0.45);
          background: linear-gradient(180deg, rgba(124,58,237,0.22), rgba(124,58,237,0.12));
        }

        /* Mobile menu (rounded glass panel) */
        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-menu-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .nav-shell {
            padding: 0 12px;
          }
          /* keep mobile container rounded but slightly less tall */
          .nav-container {
            padding: 8px 12px;
            border-radius: 32px;
          }
          .logo-svg {
            height: 40px;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 12px;
            background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02));
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 28px; /* very rounded */
            padding: 10px;
            box-shadow: 0 14px 40px rgba(2,6,23,0.45);
            backdrop-filter: blur(12px) saturate(120%);
          }
          :global(.mobile-link) {
            position: relative;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 14px;
            color: #eef0f6;
            text-decoration: none;
            font-weight: 700;
            font-size: 1rem;
            border-radius: 14px;
            border: none;
            background: transparent;
            transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease, color 160ms ease, padding-left 160ms ease;
            white-space: nowrap;
          }
          :global(.mobile-link:hover) {
            transform: translateY(-1px);
            color: #ffffff;
            box-shadow: 0 10px 28px rgba(2,6,23,0.45);
            background: linear-gradient(180deg, rgba(124,58,237,0.12), rgba(124,58,237,0.06));
          }
          :global(.mobile-link.active) {
            color: #ffffff;
            border-radius: 14px;
            background: linear-gradient(180deg, rgba(124,58,237,0.16), rgba(124,58,237,0.08));
          }
          .mobile-link-text {
            position: relative;
            z-index: 2;
          }
          .mobile-link-underline {
            position: absolute;
            left: 16px;
            bottom: 10px;
            width: 0%;
            height: 2px;
            background: linear-gradient(90deg, #b78bff, #7c3aed);
            border-radius: 999px;
            opacity: 0;
            transition: width 200ms ease, opacity 160ms ease;
          }
          :global(.mobile-link:hover) .mobile-link-underline,
          :global(.mobile-link.active) .mobile-link-underline {
            width: 28%;
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo,
          .nav-link,
          .mobile-menu-button,
          .mobile-link {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;