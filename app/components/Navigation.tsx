"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Navigation: React.FC = () => {
  const pathname = usePathname() ?? "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Support" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navigation ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Top navigation">
        <div className="nav-shell">
          <div className="nav-container">

            {/* Logo — favicon only */}
            <Link href="/" className="logo" aria-label="ClutterAI home">
              <svg
                width="28"
                height="28"
                viewBox="-28 -28 56 56"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <line x1="0" y1="-24" x2="0" y2="-4"  stroke="#f0ede8" strokeWidth="2.8" strokeLinecap="round" />
                <line x1="0" y1="4"  x2="0" y2="24"   stroke="#f0ede8" strokeWidth="2.8" strokeLinecap="round" />
                <line x1="-21" y1="-12" x2="-3" y2="-2" stroke="#f0ede8" strokeWidth="2.8" strokeLinecap="round" />
                <line x1="3"  y1="2"  x2="21" y2="12"  stroke="#f0ede8" strokeWidth="2.8" strokeLinecap="round" />
                <line x1="21" y1="-12" x2="3"  y2="-2" stroke="#f0ede8" strokeWidth="2.8" strokeLinecap="round" />
                <line x1="-3" y1="2"  x2="-21" y2="12" stroke="#f0ede8" strokeWidth="2.8" strokeLinecap="round" />
              </svg>
            </Link>

            {/* Right side */}
            <div className="nav-right">
              <div className="desktop-menu" role="navigation" aria-label="Main navigation">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <a
                className="login-button"
                href="https://app.clutter-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open ClutterAI app"
              >
                Log in
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="btn-arrow">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <button
                className="mobile-menu-button"
                onClick={() => setMobileMenuOpen((s) => !s)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
              >
                <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
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
                  {link.label}
                </Link>
              ))}
              <a
                className="mobile-login"
                href="https://app.clutter-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in →
              </a>
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600&display=swap');

        .navigation {
          position: fixed;
          top: 20px;
          left: 0;
          right: 0;
          z-index: 1000;
          pointer-events: none;
          transition: top 0.3s ease;
        }
        .navigation.scrolled { top: 12px; }

        .nav-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          pointer-events: auto;
        }

        .nav-container {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 10px 20px;
          border-radius: 999px;
          background: rgba(10,10,10,0.7);
          border: 1px solid rgba(240,237,232,0.07);
          backdrop-filter: blur(20px) saturate(160%);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }
        .scrolled .nav-container {
          background: rgba(6,6,6,0.82);
          box-shadow: 0 12px 48px rgba(0,0,0,0.5);
        }

        /* Logo */
        .logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          opacity: 0.9;
          transition: opacity 0.2s;
        }
        .logo:hover { opacity: 1; }

        /* Right */
        .nav-right {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-left: auto;
        }

        /* Desktop nav links */
        .desktop-menu {
          display: inline-flex;
          align-items: center;
          gap: 2px;
        }

        :global(.nav-link) {
          display: inline-flex;
          align-items: center;
          height: 34px;
          padding: 0 16px;
          border-radius: 999px;
          text-decoration: none;
          color: rgba(240,237,232,0.45);
          font-family: 'Figtree', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        :global(.nav-link:hover) {
          color: rgba(240,237,232,0.85);
          background: rgba(240,237,232,0.05);
        }
        :global(.nav-link.active) {
          color: #f0ede8;
          background: rgba(240,237,232,0.08);
        }

        /* Log in CTA */
        .login-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 36px;
          padding: 0 18px;
          border-radius: 999px;
          background: #f0ede8;
          color: #0a0a0a;
          font-family: 'Figtree', sans-serif;
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          margin-left: 6px;
        }
        .login-button:hover {
          background: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(240,237,232,0.12);
        }
        .btn-arrow {
          transition: transform 0.2s ease;
        }
        .login-button:hover .btn-arrow {
          transform: translateX(2px);
        }

        /* Hamburger */
        .mobile-menu-button {
          display: none;
          background: rgba(240,237,232,0.05);
          border: 1px solid rgba(240,237,232,0.1);
          color: #f0ede8;
          cursor: pointer;
          padding: 10px;
          border-radius: 10px;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }
        .mobile-menu-button:hover {
          background: rgba(240,237,232,0.1);
          border-color: rgba(240,237,232,0.2);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 18px;
        }
        .hamburger span {
          display: block;
          width: 100%;
          height: 1.5px;
          background: #f0ede8;
          border-radius: 2px;
          transition: all 0.25s ease;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }

        /* Mobile menu */
        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .login-button { display: none; }
          .mobile-menu-button { display: flex; }

          .nav-shell { padding: 0 16px; }
          .nav-container { padding: 8px 16px; border-radius: 20px; }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            margin-top: 10px;
            background: rgba(10,10,10,0.92);
            border: 1px solid rgba(240,237,232,0.07);
            border-radius: 16px;
            padding: 6px;
            backdrop-filter: blur(20px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.5);
            animation: slideDown 0.25s ease;
          }

          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-8px); }
            to   { opacity: 1; transform: none; }
          }

          :global(.mobile-link) {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            color: rgba(240,237,232,0.55);
            text-decoration: none;
            font-family: 'Figtree', sans-serif;
            font-weight: 500;
            font-size: 0.92rem;
            border-radius: 10px;
            transition: color 0.2s, background 0.2s;
          }
          :global(.mobile-link:hover) {
            color: #f0ede8;
            background: rgba(240,237,232,0.05);
          }
          :global(.mobile-link.active) {
            color: #f0ede8;
            background: rgba(240,237,232,0.07);
          }

          .mobile-login {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px 16px;
            margin: 4px 0 2px;
            border-radius: 10px;
            background: #f0ede8;
            color: #0a0a0a;
            text-decoration: none;
            font-family: 'Figtree', sans-serif;
            font-weight: 600;
            font-size: 0.92rem;
            transition: background 0.2s;
          }
          .mobile-login:hover { background: #fff; }
        }

        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navigation;