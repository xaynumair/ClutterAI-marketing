import Link from "next/link";
import { Logo } from "./components/Logo";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="wrap wrap-narrow center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
        <Logo size={64} radius={18} />
        <p className="kicker">404</p>
        <h1 className="h-serif h-lg">This page isn&rsquo;t in the memory.</h1>
        <p className="lede">
          Which is unusual, because everything else is. Try the front page, or ask
          support and we&rsquo;ll find it for you.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">Front page</Link>
          <Link href="/contact" className="btn btn-ghost">Support</Link>
        </div>
      </div>
    </section>
  );
}
