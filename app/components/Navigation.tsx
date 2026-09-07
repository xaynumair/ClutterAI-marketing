"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { APP_URL, SIGNUP_URL } from "../lib/site";

// Routes stay as they were (/about, /marketplace) so old links keep working;
// only the labels changed to say what the pages are about.
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Why ClutterAI" },
  { href: "/marketplace", label: "Apps & agents" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Support" },
];

export function Navigation() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} aria-label="Main">
      <div className="nav-shell">
        <div className="nav-bar">
          <Link href="/" className="nav-logo" aria-label="ClutterAI home">
            <Logo size={28} radius={8} />
            <span className="nav-wordmark">ClutterAI</span>
          </Link>

          <div className="nav-links">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={`nav-link ${isActive(l.href) ? "active" : ""}`} aria-current={isActive(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <a href={APP_URL} className="nav-login">Log in</a>
            <a href={SIGNUP_URL} className="btn btn-primary nav-cta">Start free</a>
          </div>

          <button
            type="button"
            className="nav-burger"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <span className={`burger ${open ? "open" : ""}`}><span /><span /><span /></span>
          </button>
        </div>

        {open && (
          <div id="mobile-menu" className="nav-mobile">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <a href={APP_URL}>Log in</a>
            <a href={SIGNUP_URL} className="nav-mobile-cta">Start free →</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
