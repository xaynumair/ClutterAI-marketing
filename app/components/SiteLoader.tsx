"use client";

import { useEffect, useState } from "react";

/**
 * SiteLoader — covers the first paint with two doors that slide apart once the
 * page has actually finished loading.
 *
 * Everything here is INLINE styled on purpose. The flash you see on a cold load
 * is styled-jsx CSS arriving after the HTML, so a loader that depended on that
 * same CSS would flash too. Inline styles are in the markup itself, so this
 * paints correctly on the very first frame.
 */
export default function SiteLoader() {
  const [open, setOpen] = useState(false);   // doors sliding apart
  const [gone, setGone] = useState(false);   // unmounted entirely

  useEffect(() => {
    const MIN_SHOW = 650;   // don't flash the loader on fast loads
    const start = Date.now();

    const begin = () => {
      const wait = Math.max(0, MIN_SHOW - (Date.now() - start));
      window.setTimeout(() => setOpen(true), wait);
    };

    if (document.readyState === "complete") begin();
    else window.addEventListener("load", begin, { once: true });

    // Safety net: never trap the page behind the loader
    const failsafe = window.setTimeout(() => setOpen(true), 5000);

    // Hold the scroll position while the doors are shut
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("load", begin);
      window.clearTimeout(failsafe);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "";
    const t = window.setTimeout(() => setGone(true), 1100);
    return () => window.clearTimeout(t);
  }, [open]);

  if (gone) return null;

  const door: React.CSSProperties = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50.5vw",
    background: "#141413",
    transition: "transform 900ms cubic-bezier(0.76, 0, 0.24, 1)",
    willChange: "transform",
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: open ? "none" : "auto",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes cl-breathe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(0.94); }
        }
        @keyframes cl-sweep {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(220%); }
        }
      `}</style>

      {/* Doors */}
      <div style={{ ...door, left: 0, transform: open ? "translateX(-100%)" : "translateX(0)" }} />
      <div style={{ ...door, right: 0, transform: open ? "translateX(100%)" : "translateX(0)" }} />

      {/* Seam highlight — a hairline of light where the doors meet */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "50%",
          width: 1,
          marginLeft: -0.5,
          background: "rgba(240,237,232,0.14)",
          opacity: open ? 0 : 1,
          transition: "opacity 300ms ease",
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 22,
          opacity: open ? 0 : 1,
          transform: open ? "scale(1.08)" : "scale(1)",
          transition: "opacity 380ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div style={{ animation: "cl-breathe 1.8s ease-in-out infinite" }}>
          <svg width="76" height="76" viewBox="0 0 100 100" aria-hidden="true">
            <rect x="0" y="0" width="100" height="100" rx="24" fill="#000" />
            <rect
              x="0.9" y="0.9" width="98.2" height="98.2" rx="23.1"
              fill="none" stroke="rgba(240,237,232,0.18)" strokeWidth="1.8"
            />
            <g stroke="#fff" strokeWidth="7.5" strokeLinecap="round">
              <line x1="50" y1="16" x2="50" y2="43" />
              <line x1="50" y1="57" x2="50" y2="84" />
              <line x1="20" y1="33" x2="43.5" y2="46.5" />
              <line x1="56.5" y1="53.5" x2="80" y2="67" />
              <line x1="80" y1="33" x2="56.5" y2="46.5" />
              <line x1="43.5" y1="53.5" x2="20" y2="67" />
            </g>
          </svg>
        </div>

        {/* Loading bar */}
        <div
          style={{
            width: 108,
            height: 2,
            borderRadius: 999,
            background: "rgba(240,237,232,0.12)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "45%",
              height: "100%",
              borderRadius: 999,
              background: "rgba(240,237,232,0.75)",
              animation: "cl-sweep 1.15s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}