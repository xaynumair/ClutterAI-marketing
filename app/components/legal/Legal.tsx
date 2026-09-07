import Link from "next/link";
import type { ReactNode } from "react";
import "./legal.css";

// Shared shell for the three legal pages: kicker, serif title, date, an
// optional plain-English summary box, then the sections.
export function Legal({ title, updated, summary, children }: {
  title: string; updated: string; summary?: ReactNode; children: ReactNode;
}) {
  return (
    <div className="lg">
      <div className="wrap lg-wrap">
        <header className="lg-head">
          <p className="kicker">Legal</p>
          <h1 className="h-serif h-xl">{title}</h1>
          <p className="lg-updated">Last updated: {updated}</p>
          <nav className="lg-nav" aria-label="Legal documents">
            <Link href="/terms">Terms</Link><span>·</span>
            <Link href="/privacy">Privacy</Link><span>·</span>
            <Link href="/refund">Refunds</Link>
          </nav>
        </header>
        {summary && (
          <aside className="card lg-summary">
            <p className="lg-summary-title">In plain English</p>
            {summary}
            <p className="lg-summary-note">This box is a summary. The sections below are the policy.</p>
          </aside>
        )}
        <article className="lg-body">{children}</article>
      </div>
    </div>
  );
}
