"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// ── In-view helpers ──────────────────────────────────────────────────────
// One IntersectionObserver hook, three small wrappers:
//   <Reveal>  — adds "in" once visible, so .reveal / .reveal-child animate
//   <InView>  — mounts its children only once visible (scenes start their
//               timelines on mount, so this is what makes them play on scroll)
//   <CountUp> — tweens a number the first time it scrolls into view
// Everything is hardened: if IntersectionObserver is missing or never fires,
// a failsafe reveals the element anyway. Nothing can be stranded invisible.

export function useInView<T extends HTMLElement>(opts: { threshold?: number; rootMargin?: string; once?: boolean; failsafeMs?: number } = {}) {
  const { threshold = 0.2, rootMargin = "0px 0px -8% 0px", once = true, failsafeMs = 3000 } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const t = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(t);
    }

    // The observer reports the current intersection as soon as it starts
    // observing, so anything already on screen at mount reveals at once.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    const failsafe = once ? window.setTimeout(() => setInView(true), failsafeMs) : undefined;
    return () => { io.disconnect(); if (failsafe) window.clearTimeout(failsafe); };
  }, [threshold, rootMargin, once, failsafeMs]);

  return { ref, inView };
}

type RevealProps = {
  as?: "div" | "section" | "article" | "ul" | "li" | "header" | "footer" | "span";
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  threshold?: number;
  id?: string;
};

export function Reveal({ as = "div", className = "", style, children, threshold, id }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold });
  const Tag = as as "div";
  return (
    <Tag ref={ref} id={id} className={`reveal ${inView ? "in" : ""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

export function InView({ children, minHeight, className = "", threshold = 0.35, placeholder }: {
  children: ReactNode; minHeight?: number | string; className?: string; threshold?: number; placeholder?: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold, rootMargin: "0px 0px -5% 0px", failsafeMs: 4000 });
  return (
    <div ref={ref} className={className} style={{ minHeight }}>
      {inView ? children : placeholder ?? null}
    </div>
  );
}

export function CountUp({ to, from = 0, duration = 1400, decimals = 0, prefix = "", suffix = "", className = "" }: {
  to: number; from?: number; duration?: number; decimals?: number; prefix?: string; suffix?: string; className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.6 });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = reduced ? 1 : Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, from, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  );
}

/** Tween between two numbers whenever `to` changes (pricing toggle). */
export function useTween(to: number, duration = 420) {
  const [value, setValue] = useState(to);
  const fromRef = useRef(to);
  useEffect(() => {
    const from = fromRef.current;
    if (from === to) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = reduced ? 1 : Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = from + (to - from) * eased;
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = to;
    };
    raf = requestAnimationFrame(tick);
    // Background tabs don't run animation frames; make sure the final value
    // lands anyway.
    const settle = window.setTimeout(() => { fromRef.current = to; setValue(to); }, duration + 80);
    return () => { cancelAnimationFrame(raf); window.clearTimeout(settle); };
  }, [to, duration]);
  return value;
}
