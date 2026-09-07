import Link from "next/link";
import { Logo } from "./Logo";
import { APP_URL, SIGNUP_URL, SUPPORT_EMAIL, TAGLINE } from "../lib/site";

export function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-grid">
          <div>
            <Link href="/" className="ft-brand" aria-label="ClutterAI home">
              <Logo size={26} radius={7} />
              <span className="ft-brand-name">ClutterAI</span>
            </Link>
            <p className="ft-tag">{TAGLINE}</p>
          </div>
          <div className="ft-col">
            <h4>Product</h4>
            <Link href="/about">Why ClutterAI</Link>
            <Link href="/marketplace">Apps &amp; agents</Link>
            <Link href="/pricing">Pricing</Link>
            <a href={SIGNUP_URL}>Start free</a>
            <a href={APP_URL}>Log in</a>
          </div>
          <div className="ft-col">
            <h4>Workspace</h4>
            <Link href="/marketplace#folio">Folio</Link>
            <Link href="/marketplace#attune">Attune</Link>
            <Link href="/marketplace#facet">Facet</Link>
            <Link href="/marketplace#easel">Easel</Link>
            <Link href="/marketplace#notes">Notes</Link>
            <Link href="/marketplace#agents">Agents</Link>
          </div>
          <div className="ft-col">
            <h4>Company</h4>
            <Link href="/contact">Support</Link>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refund">Refunds</Link>
          </div>
        </div>
        <div className="ft-bottom">
          <span>© {new Date().getFullYear()} ClutterAI · Sheridan, Wyoming</span>
          <span>Your data is never used to train models. <Link href="/privacy">How we handle it →</Link></span>
        </div>
      </div>
    </footer>
  );
}
