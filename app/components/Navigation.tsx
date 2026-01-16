"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
  const pathname = usePathname() ?? "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Refs for logo
  const svgRef = useRef<SVGSVGElement | null>(null);
  const aiTspanRef = useRef<SVGTSpanElement | null>(null);
  const starRef = useRef<SVGGElement | null>(null);

  // Removed dynamic positioning - star now has static position

  // Scroll detection for enhanced blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
      `}</style>

      <nav className={`navigation ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Top navigation">
        <div className="nav-shell">
          <div className="nav-container">
            {/* Ambient glow effect */}
            <div className="nav-glow" aria-hidden="true"></div>
            
            <Link href="/" className="logo" aria-label="Home">
              <svg
                ref={svgRef}
                viewBox="0 0 560 100"
                preserveAspectRatio="xMinYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-svg"
                role="img"
                aria-label="Clutter AI logo"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c4b5fd" />
                    <stop offset="100%" stopColor="#a78bfa" />
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
                  x="330"
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
                  transform="translate(430 50)"
                  opacity="0.95"
                  aria-hidden="true"
                >
                  <line x1="0" y1="-24" x2="0" y2="-4" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="0" y1="4" x2="0" y2="24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="-21" y1="-12" x2="-3" y2="-2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="3" y1="2" x2="21" y2="12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="21" y1="-12" x2="3" y2="-2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="-3" y1="2" x2="-21" y2="12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                </g>
              </svg>
            </Link>

            {/* Right side: links + login + mobile toggle */}
            <div className="nav-right">
              <div className="desktop-menu" role="navigation" aria-label="Main navigation">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${isActive(link.href) ? "active" : ""}`}
                  >
                    <span className="link-text">{link.label}</span>
                    {isActive(link.href) && (
                      <span className="active-indicator" aria-hidden="true"></span>
                    )}
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
                <span className="button-text">Log in</span>
                <svg className="button-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
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
                  <span className="mobile-link-text">{link.label}</span>
                  {isActive(link.href) && (
                    <span className="mobile-active-dot" aria-hidden="true"></span>
                  )}
                </Link>
              ))}

              <a
                className="mobile-login"
                href="https://app.clutter-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Open ClutterAI app"
              >
                Log in
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          )}
        </div>
      </nav>

      <style jsx>{`
        /* Navigation Shell - Floating Island Design */
        .navigation {
          position: fixed;
          top: 20px;
          left: 0;
          right: 0;
          z-index: 1000;
          pointer-events: none;
          transition: top 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navigation.scrolled {
          top: 12px;
        }

        .nav-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          pointer-events: auto;
        }

        /* Ultra-Modern Glass Container */
        .nav-container {
          position: relative;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 10px 20px;
          border-radius: 100px;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .scrolled .nav-container {
          background: rgba(5, 5, 5, 0.75);
          backdrop-filter: blur(24px) saturate(200%);
          box-shadow: 
            0 12px 48px rgba(0, 0, 0, 0.5),
            0 4px 12px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        /* Ambient Glow Effect */
        .nav-glow {
          position: absolute;
          inset: -50%;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(139, 92, 246, 0.15) 0%,
            transparent 50%
          );
          filter: blur(40px);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
          animation: glow 3s ease-in-out infinite;
        }

        .nav-container:hover .nav-glow {
          opacity: 1;
        }

        /* Logo - Enhanced */
        .logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: float 3s ease-in-out infinite;
        }

        .logo:hover {
          transform: translateY(-2px) scale(1.02);
          filter: drop-shadow(0 10px 30px rgba(139, 92, 246, 0.4));
        }

        .logo-svg {
          height: 42px;
          width: auto;
          display: block;
          overflow: visible;
        }

        .logo-star {
          transition: all 0.3s ease;
        }

        .logo:hover .logo-star {
          transform: translate(430px, 50px) rotate(15deg) scale(1.1);
        }

        /* Right Section */
        .nav-right {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }

        /* Desktop Menu - Pill Navigation */
        .desktop-menu {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Navigation Links - Magnetic Hover Effect */
        :global(.nav-link) {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          padding: 0 18px;
          border-radius: 100px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          overflow: hidden;
        }

        :global(.nav-link::before) {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 100px;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.1) 0%,
            rgba(124, 58, 237, 0.05) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        :global(.nav-link:hover) {
          color: rgba(255, 255, 255, 1);
          transform: translateY(-1px);
        }

        :global(.nav-link:hover::before) {
          opacity: 1;
        }

        /* Active Link State */
        :global(.nav-link.active) {
          color: #ffffff;
          background: linear-gradient(
            135deg,
            rgba(139, 92, 246, 0.2) 0%,
            rgba(124, 58, 237, 0.15) 100%
          );
          box-shadow: 
            0 4px 12px rgba(139, 92, 246, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .active-indicator {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a78bfa, #8b5cf6);
          box-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
        }

        /* Launch App Button - Premium CTA */
        .login-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          height: 40px;
          padding: 0 20px;
          border-radius: 100px;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          box-shadow: 
            0 4px 12px rgba(139, 92, 246, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .login-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .login-button:hover::before {
          transform: translateX(100%);
        }

        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 24px rgba(139, 92, 246, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .button-arrow {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .login-button:hover .button-arrow {
          transform: translateX(2px);
        }

        /* Mobile Menu Button - Animated Hamburger */
        .mobile-menu-button {
          display: none;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          cursor: pointer;
          padding: 10px;
          border-radius: 12px;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 20px;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .mobile-menu-button:hover {
          background: rgba(139, 92, 246, 0.2);
          border-color: rgba(139, 92, 246, 0.4);
        }

        /* Mobile Menu - Modern Dropdown */
        .mobile-menu {
          display: none;
        }

        .mobile-login {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 20px;
          margin: 8px 8px 8px;
          border-radius: 16px;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          text-align: center;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
          transition: all 0.3s ease;
        }

        .mobile-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }

          .login-button {
            display: none;
          }

          .mobile-menu-button {
            display: flex;
          }

          .nav-shell {
            padding: 0 16px;
          }

          .nav-container {
            padding: 8px 16px;
            border-radius: 24px;
          }

          .logo-svg {
            height: 38px;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 12px;
            background: rgba(10, 10, 10, 0.85);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 24px;
            padding: 8px;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(20px) saturate(180%);
            animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          :global(.mobile-link) {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 16px;
            color: rgba(255, 255, 255, 0.8);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            border-radius: 16px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          :global(.mobile-link:hover) {
            background: rgba(139, 92, 246, 0.1);
            color: #ffffff;
            transform: translateX(4px);
          }

          :global(.mobile-link.active) {
            background: linear-gradient(
              135deg,
              rgba(139, 92, 246, 0.2) 0%,
              rgba(124, 58, 237, 0.15) 100%
            );
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
          }

          .mobile-active-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: linear-gradient(135deg, #a78bfa, #8b5cf6);
            box-shadow: 0 0 8px rgba(139, 92, 246, 0.6);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;