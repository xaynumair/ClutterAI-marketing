"use client";

import { useEffect, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";

// ── SCENE PRIMITIVES ─────────────────────────────────────────────────────
// A copy of src/auth/scenes/primitives.tsx from the app, so the site and the
// sign-in page share one visual language. Every scene is a static layout plus
// a timeline: a Window with an app chip in its header, and three motions —
// rise in (.sc-in), pop (.sc-pop), reveal like handwriting (.sc-reveal) —
// each delayed per element with `at(ms)`.

export const at = (ms: number): CSSProperties => ({ "--d": `${ms}ms` } as CSSProperties);

const RM_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeRM = (cb: () => void) => {
  const mq = window.matchMedia?.(RM_QUERY);
  if (!mq) return () => {};
  mq.addEventListener?.("change", cb);
  return () => mq.removeEventListener?.("change", cb);
};
const readRM = () => !!window.matchMedia?.(RM_QUERY).matches;
const readRMServer = () => false;

export function useReducedMotion() {
  return useSyncExternalStore(subscribeRM, readRM, readRMServer);
}

/** Which phase of a scene we're in: 0 until marks[0] ms, 1 until marks[1] … */
export function useTimeline(marks: number[]) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timers = marks.map((m, i) => window.setTimeout(() => setPhase(i + 1), m));
    return () => timers.forEach((t) => window.clearTimeout(t));
    // marks are literals per scene
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return reduced ? marks.length : phase;
}

/** Text that types itself out from `start` ms. */
export function useTyped(text: string, start = 0, speed = 32) {
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);
  useEffect(() => {
    let i = 0;
    let t = window.setTimeout(step, start);
    function step() {
      i += 1;
      setN(i);
      if (i < text.length) t = window.setTimeout(step, speed + (text[i - 1] === " " ? 18 : 0));
    }
    return () => window.clearTimeout(t);
  }, [text, start, speed]);
  const shown = reduced ? text.length : n;
  return { text: text.slice(0, shown), done: shown >= text.length, started: shown > 0 };
}

/** A ticking mm:ss clock, for the Attune recording pill. */
export function useClock(startSeconds: number) {
  const [s, setS] = useState(startSeconds);
  useEffect(() => {
    const t = window.setInterval(() => setS((v) => v + 1), 1000);
    return () => window.clearInterval(t);
  }, []);
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  return `${mm}:${ss.toString().padStart(2, "0")}`;
}

export function Window({ app, title, right, children, className = "" }: {
  app: string; title: string; right?: ReactNode; children: ReactNode; className?: string;
}) {
  return (
    <div className={`sc-window ${className}`}>
      <div className="sc-head">
        <span className="sc-app">{app}</span>
        <span className="sc-title">{title}</span>
        {right && <span className="sc-head-right">{right}</span>}
      </div>
      <div className="sc-body">{children}</div>
    </div>
  );
}

export function Caret() {
  return <span className="sc-caret" />;
}

export function Chip({ children, delay = 0, tone = "neutral", className = "" }: {
  children: ReactNode; delay?: number; tone?: "neutral" | "accent"; className?: string;
}) {
  return (
    <span className={`sc-chip sc-pop${tone === "accent" ? " is-accent" : ""} ${className}`} style={at(delay)}>
      {children}
    </span>
  );
}

export function Avatar({ initials, delay = 0 }: { initials: string; delay?: number }) {
  return <span className="sc-avatar sc-pop" style={at(delay)}>{initials}</span>;
}
