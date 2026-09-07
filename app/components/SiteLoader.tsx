"use client";

import { useEffect, useState } from "react";

/**
 * SiteLoader — two doors that slide apart on the first visit of a session.
 *
 * With fonts self-hosted and the stylesheet server-rendered, this is no longer
 * covering a flash; it is a brand moment. So it plays once per browser
 * session (sessionStorage flag) and stays out of the way afterwards. Styles
 * are inline so the very first frame paints correctly, and an inline script
 * hides it before paint on return visits.
 */
const KEY = "clutterai:doors";

export default function SiteLoader() {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem(KEY) === "1"; } catch { /* private mode */ }
    if (seen) {
      // The inline script already hid it; unmount on the next tick.
      const t = window.setTimeout(() => setGone(true), 0);
      return () => window.clearTimeout(t);
    }
    try { sessionStorage.setItem(KEY, "1"); } catch { /* ignore */ }

    const MIN_SHOW = 520;
    const start = Date.now();
    const begin = () => {
      const wait = Math.max(0, MIN_SHOW - (Date.now() - start));
      window.setTimeout(() => setOpen(true), wait);
    };
    if (document.readyState === "complete") begin();
    else window.addEventListener("load", begin, { once: true });
    const failsafe = window.setTimeout(() => setOpen(true), 3500);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("load", begin);
      window.clearTimeout(failsafe);
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "";
    const t = window.setTimeout(() => setGone(true), 950);
    return () => window.clearTimeout(t);
  }, [open]);

  if (gone) return null;

  const door: React.CSSProperties = {
    position: "absolute", top: 0, bottom: 0, width: "50.5vw", background: "#141413",
    transition: "transform 800ms cubic-bezier(0.76, 0, 0.24, 1)", willChange: "transform",
  };

  return (
    <div
      id="cl-doors"
      aria-hidden="true"
      suppressHydrationWarning
      style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: open ? "none" : "auto", overflow: "hidden" }}
    >
      {/* Runs during HTML parsing: hides the doors before first paint on return visits. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `try{if(sessionStorage.getItem(${JSON.stringify(KEY)})==="1"){document.getElementById("cl-doors").style.display="none"}}catch(e){}`,
        }}
      />
      <style>{`
        @keyframes cl-breathe { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .55; transform: scale(.94); } }
        @keyframes cl-sweep { 0% { transform: translateX(-100%); } 100% { transform: translateX(220%); } }
      `}</style>
      <div style={{ ...door, left: 0, transform: open ? "translateX(-100%)" : "translateX(0)" }} />
      <div style={{ ...door, right: 0, transform: open ? "translateX(100%)" : "translateX(0)" }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: 1, marginLeft: -0.5, background: "rgba(240,237,232,0.14)", opacity: open ? 0 : 1, transition: "opacity 300ms ease" }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22,
        opacity: open ? 0 : 1, transform: open ? "scale(1.08)" : "scale(1)", transition: "opacity 380ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)" }}>
        <div style={{ animation: "cl-breathe 1.8s ease-in-out infinite" }}>
          <svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true">
            <rect x="0" y="0" width="100" height="100" rx="24" fill="#000" />
            <rect x="0.9" y="0.9" width="98.2" height="98.2" rx="23.1" fill="none" stroke="rgba(240,237,232,0.18)" strokeWidth="1.8" />
            <g stroke="#fff" strokeWidth="7.5" strokeLinecap="round">
              <line x1="50" y1="16" x2="50" y2="43" /><line x1="50" y1="57" x2="50" y2="84" />
              <line x1="20" y1="33" x2="43.5" y2="46.5" /><line x1="56.5" y1="53.5" x2="80" y2="67" />
              <line x1="80" y1="33" x2="56.5" y2="46.5" /><line x1="43.5" y1="53.5" x2="20" y2="67" />
            </g>
          </svg>
        </div>
        <div style={{ width: 108, height: 2, borderRadius: 999, background: "rgba(240,237,232,0.12)", overflow: "hidden" }}>
          <div style={{ width: "45%", height: "100%", borderRadius: 999, background: "rgba(240,237,232,0.75)", animation: "cl-sweep 1.15s ease-in-out infinite" }} />
        </div>
      </div>
    </div>
  );
}
