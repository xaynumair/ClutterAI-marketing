"use client";

import { useEffect, useRef, useState } from "react";

const INTEGRATIONS = [
  { name: "Slack", logo: <svg viewBox="0 0 54 54" width="15" height="15"><g fill="none" fillRule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"/></g></svg> },
  { name: "Notion", logo: <svg viewBox="0 0 100 100" width="15" height="15"><path d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.807-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.94c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z" fill="#fff"/><path fillRule="evenodd" d="M61.35.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.387 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143c-4.273-3.107-6.02-3.5-12.817-2.917zM25.92 19.523c-5.247.353-6.437.433-9.417-1.99L8.927 11.507c-.77-.78-.383-1.753 1.557-1.947l53.193-3.887c4.467-.39 6.793 1.167 8.54 2.527l9.123 6.61c.39.197 1.36 1.36.193 1.36l-54.933 3.307-.68.047zM19.803 88.3V30.367c0-2.53.777-3.697 3.103-3.893L86 22.78c2.14-.193 3.107 1.167 3.107 3.693v57.547c0 2.53-.39 4.67-3.883 4.863l-60.377 3.5c-3.493.193-5.043-.97-5.043-4.083zm59.6-54.827c.387 1.75 0 3.5-1.75 3.7l-2.91.577v42.773c-2.527 1.36-4.853 2.137-6.797 2.137-3.107 0-3.883-.973-6.21-3.887l-19.03-29.94v28.967l6.02 1.363s0 3.5-4.857 3.5l-13.39.777c-.39-.78 0-2.723 1.357-3.11l3.497-.97v-38.3L30.48 40.667c-.39-1.75.58-4.277 3.3-4.473l14.367-.967 19.8 30.327v-26.83l-5.047-.58c-.39-2.143 1.163-3.7 3.103-3.89l13.4-.78z" fill="#000"/></svg> },
  { name: "GitHub", logo: <svg viewBox="0 0 24 24" width="15" height="15" fill="white"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg> },
  { name: "GitLab", logo: <svg viewBox="0 0 380 380" width="15" height="15"><path d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54a6.86,6.86,0,0,0-2.32-3.52,7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z" fill="#FC6D26"/><path d="M282.83,170.73l-.27-.69a88.3,88.3,0,0,0-35.15,15.8L190,229.25c19.55,14.79,36.57,27.64,36.57,27.64l40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z" fill="#E24329"/><path d="M153.43,256.89l19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91S209.55,244,190,229.25C170.45,244,153.43,256.89,153.43,256.89Z" fill="#FC6D26"/><path d="M132.58,186.84A88.19,88.19,0,0,0,97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82S170.45,244,190,229.25Z" fill="#E24329"/></svg> },
  { name: "Linear", logo: <svg viewBox="0 0 100 100" width="15" height="15"><defs><linearGradient id="lg-a" x1="6.22" y1="6.22" x2="91.12" y2="91.12" gradientUnits="userSpaceOnUse"><stop stopColor="#5E6AD2"/><stop offset="1" stopColor="#4353FF"/></linearGradient></defs><path d="M1.225 61.523c-.222-.948.908-1.546 1.596-.857L39.334 97.178c.689.689.091 1.819-.857 1.596C20.052 94.452 5.548 79.948 1.225 61.523ZM.002 46.889c-.018.283.089.56.29.761L52.35 99.708c.201.201.477.307.761.29 2.369-.148 4.694-.46 6.962-.926.765-.157 1.03-1.096.478-1.648L2.576 39.449c-.552-.552-1.491-.286-1.648.478-.466 2.269-.778 4.593-.926 6.962ZM4.211 29.705c-.166.374-.082.811.208 1.1l64.776 64.776c.289.289.726.374 1.1.208 1.786-.796 3.517-1.693 5.185-2.684.552-.328.637-1.087.183-1.541L8.436 24.337c-.454-.454-1.213-.369-1.541.183-.991 1.668-1.888 3.4-2.684 5.185ZM12.659 18.074c-.37-.37-.393-.964-.044-1.354C21.78 6.46 35.111 0 49.952 0 77.593 0 100 22.407 100 50.048c0 14.84-6.459 28.172-16.72 37.338-.39.349-.984.326-1.354-.044L12.659 18.074Z" fill="url(#lg-a)"/></svg> },
  { name: "Jira", logo: <svg viewBox="0 0 256 256" width="15" height="15"><defs><linearGradient id="jira-a" x1="98%" x2="59%" y1="0%" y2="41%"><stop offset="18%" stopColor="#0052CC"/><stop offset="100%" stopColor="#2684FF"/></linearGradient><linearGradient id="jira-b" x1="101%" x2="55%" y1="0%" y2="45%"><stop offset="18%" stopColor="#0052CC"/><stop offset="100%" stopColor="#2684FF"/></linearGradient></defs><path fill="url(#jira-a)" d="M244.658 0H121.707a55.502 55.502 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0z"/><path fill="url(#jira-b)" d="M183.822 60.836H60.871c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.502c0-5.891-4.776-10.666-10.666-10.666z"/><path fill="#2684FF" d="M122.951 121.672H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.455V132.338c0-5.891-4.776-10.666-10.667-10.666z"/></svg> },
  { name: "Confluence", logo: <svg viewBox="-.022 .04 256.072 245.94" width="15" height="15"><defs><linearGradient id="cf-a"><stop offset="0" stopColor="#0052cc"/><stop offset="1" stopColor="#2684ff"/></linearGradient><linearGradient id="cf-b" gradientUnits="userSpaceOnUse" x1="243.35" x2="83.149" xlinkHref="#cf-a" y1="261.618" y2="169.549"/><linearGradient id="cf-c" gradientUnits="userSpaceOnUse" x1="12.633" x2="172.873" xlinkHref="#cf-a" y1="-15.48" y2="76.589"/></defs><path d="M9.11 187.79c-2.64 4.3-5.63 9.34-7.99 13.33a8.13 8.13 0 0 0-.84 5.97c.24 1.01.68 1.95 1.28 2.79s1.36 1.56 2.23 2.12l53.03 32.69a8.1 8.1 0 0 0 6.12-.01c.87-.64 1.6-1.45 2.15-2.38 2.14-3.56 4.85-8.17 7.76-13.09 21.02-34.47 42.32-30.25 80.37-12.16l52.6 24.94a8.13 8.13 0 0 0 10.97-4.07l25.25-56.93a8.15 8.15 0 0 0-.79-7.78c-11.09-5.22-33.16-15.49-52.94-25.17-71.95-34.71-132.66-32.42-179.12 42.99z" fill="url(#cf-b)"/><path d="M246.88 58.38c2.67-4.3 5.66-9.33 7.99-13.32a8.155 8.155 0 0 0-1.53-9.07l-52.95-32.69a8.09 8.09 0 0 0-6.12.02c-.87.64-1.6 1.45-2.16 2.38-2.09 3.56-4.85 8.17-7.76 13.09-21.1 34.63-42.2 30.41-80.29 12.32l-52.55-24.95a8.19 8.19 0 0 0-11 4.69l-25.25 57.09a8.191 8.191 0 0 0 1.38 8.81c11.13 5.23 33.2 15.49 52.94 25.18 71.76 34.7 132.66 32.42 179.09-43z" fill="url(#cf-c)"/></svg> },
  { name: "Trello", logo: <svg viewBox="0 0 256 256" width="15" height="15"><rect width="256" height="256" fill="#0079BF" rx="25"/><rect x="144.64" y="33.28" width="78.08" height="112" fill="#fff" rx="12"/><rect x="33.28" y="33.28" width="78.08" height="176" fill="#fff" rx="12"/></svg> },
  { name: "Airtable", logo: <img src="https://logosandtypes.com/wp-content/uploads/2022/04/airtable.svg" alt="" width="15" height="15" /> },
  { name: "Zendesk", logo: <img src="https://cdn.simpleicons.org/zendesk/888" alt="" width="15" height="15" /> },
  { name: "Gmail", logo: <svg viewBox="0 0 48 48" width="15" height="15"><path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"/><path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8 4.924 8 3 9.924 3 12.298z"/><path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8 43.076 8 45 9.924 45 12.298z"/></svg> },
  { name: "Drive", logo: <svg viewBox="0 0 87.3 78" width="15" height="15"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0-1.2 4.5h27.5z" fill="#00ac47"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/><path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg> },
  { name: "Calendar", logo: <svg viewBox="0 0 48 48" width="15" height="15"><rect width="22" height="22" x="13" y="13" fill="#fff"/><polygon fill="#1e88e5" points="25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"/><path fill="#1e88e5" d="M22.943 23.745c.625-.574 1.013-1.37 1.013-2.249 0-1.747-1.533-3.168-3.417-3.168-1.602 0-2.972 1.009-3.33 2.453l1.657.421c.165-.664.868-1.146 1.673-1.146.942 0 1.709.646 1.709 1.44 0 .794-.767 1.44-1.709 1.44h-.997v1.728h.997c1.081 0 1.993.751 1.993 1.64 0 .904-.866 1.64-1.931 1.64-.962 0-1.784-.61-1.914-1.418L17 26.802c.262 1.636 1.81 2.87 3.6 2.87 2.007 0 3.64-1.511 3.64-3.368C24.24 25.281 23.736 24.363 22.943 23.745z"/><polygon fill="#4caf50" points="34,42 14,42 13,38 14,34 34,34 35,38"/><polygon fill="#fbc02d" points="38,35 42,34 42,14 38,13 34,14 34,34"/><path fill="#1e88e5" d="M34 14l1-4-1-4H9C7.343 6 6 7.343 6 9v25l4 1 4-1V14H34z"/><polygon fill="#e53935" points="34,34 34,42 42,34"/><path fill="#1565c0" d="M39 6h-5v8h8V9C42 7.343 40.657 6 39 6z"/><path fill="#1565c0" d="M9 42h5v-8H6v5C6 40.657 7.343 42 9 42z"/></svg> },
];

// The ClutterAI logo — black tile, white asterisk (matches the app icon).
// A hairline keeps it readable against the dark page.
function Logo({ size = 32, radius = 9 }: { size?: number; radius?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" className="logo-svg">
      <rect x="0" y="0" width="100" height="100" rx={radius * (100 / size)} fill="#000" />
      <rect
        x="0.8" y="0.8" width="98.4" height="98.4"
        rx={radius * (100 / size) - 0.8}
        fill="none" stroke="rgba(240,237,232,0.16)" strokeWidth="1.6"
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
  );
}

const TAB_SECTIONS = [
  { id: "search", label: "Ask" },
  { id: "realtime", label: "Real-time" },
  { id: "slack-bot", label: "Slack" },
  { id: "agents", label: "Agents" },
  { id: "security", label: "Security" },
];

const HERO_QUERIES = [
  "What did we decide about the pricing change?",
  "Summarise everything about the Q3 launch",
  "What am I still waiting on from the design team?",
  "Which customers asked about SSO last month?",
];

const SHOWCASE = [
  {
    key: "ask",
    label: "Ask",
    prompt: "What did we decide about the pricing change?",
    answer: [
      "The team settled on a three-tier structure in the leadership channel on the 14th, after the pricing review thread.",
      "The mid tier moved up, and the annual discount stayed where it was.",
    ],
    chips: ["Email · Pricing review", "#leadership", "Pricing doc v4"],
  },
  {
    key: "recall",
    label: "Recall",
    prompt: "What am I still waiting on?",
    answer: [
      "Three things are outstanding: a contract redline promised last Tuesday, design feedback on the onboarding flow, and a vendor quote.",
      "Two were promised to you this week — the third has been open for eleven days.",
    ],
    chips: ["3 open items", "Digest"],
  },
  {
    key: "build",
    label: "Build",
    prompt: "Draft the migration script we discussed",
    answer: [
      "Working from the schema in your repo and the constraints agreed in the architecture thread.",
      "The full file is open in the panel — and saved to your workspace so you can pick it up later.",
    ],
    chips: ["migrate.ts", "Forge workspace"],
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("search");
  const [queryIdx, setQueryIdx] = useState(0);
  const [showcase, setShowcase] = useState(0);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setInterval(() => setQueryIdx((i: number) => (i + 1) % HERO_QUERIES.length), 3400);
    return () => clearInterval(t);
  }, [mounted]);

  // Reveal-on-scroll — hardened so content can never be stranded invisible.
  // Everything starts at opacity 0 and waits for the ".in" class, so any
  // failure of the observer leaves whole sections blank. Three safeguards:
  //   1. threshold 0 — sections taller than the viewport still trigger
  //      (a percentage threshold on a very tall element may never be met)
  //   2. an immediate pass that reveals anything already on screen at mount
  //   3. a failsafe that reveals everything after 2.5s no matter what,
  //      plus an instant reveal-all if IntersectionObserver is unavailable
  useEffect(() => {
    if (!mounted) return;
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-child, .demo")
    );
    if (nodes.length === 0) return;

    const revealAll = () => nodes.forEach((el) => el.classList.add("in"));

    if (typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((el) => {
      // Already visible at mount (e.g. behind the loader)? Reveal now.
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      else io.observe(el);
    });

    const failsafe = window.setTimeout(revealAll, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const els = TAB_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const spy = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveTab(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => spy.observe(el));
    return () => spy.disconnect();
  }, [mounted]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sc = SHOWCASE[showcase];

  return (
    <div className="root">
      <div className="bg-glow bg-glow-a" />
      <div className="bg-glow bg-glow-b" />
      <div className="bg-grid" />

      {/* ── Hero ── */}
      <main className="hero sec-a">
        <div className="hero-inner">
          <div className={`hero-left ${mounted ? "hero-left-in" : ""}`}>
            <h1 className="headline">
              <span className="hl-line">Stop</span>
              <span className="hl-line hl-dim">searching.</span>
              <span className="hl-line">Start</span>
              <span className="hl-line hl-dim">knowing.</span>
            </h1>
          </div>
          <div className={`hero-right ${mounted ? "hero-right-in" : ""}`}>
            <p className="subtext">
              Connect every tool your team uses. Ask anything in plain English —
              in the app or right inside Slack — and get answers with sources,
              synced the moment things happen.
            </p>

            <div className="hero-ask">
              <span className="ha-logo"><Logo size={22} radius={6} /></span>
              <span key={queryIdx} className="ha-text">{HERO_QUERIES[queryIdx]}</span>
              <span className="ha-caret" />
            </div>

            <div className="hero-actions">
              <a href="https://app.clutter-ai.com/signup" className="cta-primary">Start for free</a>
              <a href="/pricing" className="cta-ghost">See pricing →</a>
            </div>
            <p className="hero-footnote">No credit card required · 2-minute setup</p>
          </div>
        </div>
      </main>

      {/* ── Marquee ── */}
      <section className="marquee-wrap sec-b">
        <div className="marquee">
          <div className="marquee-track">
            {[...INTEGRATIONS, ...INTEGRATIONS].map((item, i) => (
              <span key={i} className="mq-item">
                <span className="logo-icon">{item.logo}</span>
                <span className="mq-name">{item.name}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section tabs ── */}
      <div className="section-tabs">
        <div className="section-tabs-inner">
          {TAB_SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={scrollTo(s.id)}
              className={`stab ${activeTab === s.id ? "stab-active" : ""}`}>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Showcase ── */}
      <section className="showcase sec-a reveal">
        <div className="showcase-inner">
          <h2 className="sec-title center">How teams use ClutterAI</h2>
          <div className="sc-tabs">
            {SHOWCASE.map((s, i) => (
              <button key={s.key} onClick={() => setShowcase(i)}
                className={`sc-tab ${i === showcase ? "sc-tab-active" : ""}`}>{s.label}</button>
            ))}
          </div>
          <div className="sc-panel" key={sc.key}>
            <div className="sc-prompt"><span className="sc-label">Prompt</span>{sc.prompt}</div>
            <div className="sc-answer">
              <span className="sc-logo"><Logo size={32} radius={9} /></span>
              <div className="sc-answer-body">
                {sc.answer.map((p, i) => (
                  <p key={i} className="sc-p" style={{ "--i": i } as React.CSSProperties}>{p}</p>
                ))}
                <div className="sc-chips">
                  {sc.chips.map((c, i) => (
                    <span key={c} className="sc-chip" style={{ "--i": i } as React.CSSProperties}>↗ {c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="problem sec-b reveal">
        <div className="problem-inner">
          <div className="problem-stat">
            <span className="problem-num">1.8</span>
            <span className="problem-unit">hrs/day</span>
          </div>
          <div className="problem-text">
            <p className="problem-lead">The average employee spends 1.8 hours every day searching for information — not working on it.</p>
            <p className="problem-sub">That's 9.3 hours every week. Businesses hire 5 employees, but one is effectively off searching for answers all day. <span className="problem-source">McKinsey Global Institute</span></p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats sec-a">
        <div className="stats-inner">
          {[
            { n: "13+", l: "Integrations" },
            { n: "Real-time", l: "New messages searchable in seconds" },
            { n: "<2s", l: "Average answer time" },
            { n: "1", l: "Place for everything" },
          ].map((s, i) => (
            <div key={s.n} className="stat reveal-child" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
              <span className="stat-num">{s.n}</span>
              <span className="stat-label">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ask ── */}
      <section id="search" className="feat sec-b reveal">
        <div className="feat-inner">
          <div className="feat-copy reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
            <p className="feat-kicker"><span className="fk-dot" />Unified search</p>
            <h2 className="feat-title">One question.<br />Every tool answers.</h2>
            <p className="feat-desc">
              Ask in plain English and ClutterAI searches everything you've
              connected at once — email threads, documents, channels, tickets,
              notes — then writes back an answer, not a list of links.
            </p>
            <ul className="feat-rows">
              <li className="feat-row"><span className="fr-mark">✳</span>Every answer cites its sources — one click jumps to the exact email, file, or message</li>
              <li className="feat-row"><span className="fr-mark">✳</span>Understands time — "the latest invoice" means the latest, down to minutes ago</li>
              <li className="feat-row"><span className="fr-mark">✳</span>Two modes: search <em>your</em> data, or switch to General for anything beyond it</li>
              <li className="feat-row"><span className="fr-mark">✳</span>Filter by source when you know where to look — answers get faster and sharper</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mock demo">
              <div className="demo-q">Where did we land on the vendor contract?</div>
              <div className="demo-thinking">
                <span className="dt-dot" /><span className="dt-dot" /><span className="dt-dot" />
                <span className="dt-text">Searching your workspace…</span>
              </div>
              <div className="demo-a">
                <p className="demo-p" style={{ "--i": 0 } as React.CSSProperties}>
                  You agreed to the revised terms on the 9th — net-30 payment, twelve-month commit, with the security addendum attached.
                </p>
                <p className="demo-p" style={{ "--i": 1 } as React.CSSProperties}>
                  Legal signed off the following morning in the operations channel.
                </p>
                <div className="demo-chips">
                  {["Email · Contract v3", "#operations", "Vendor terms.pdf"].map((c, i) => (
                    <span key={c} className="demo-chip" style={{ "--i": i + 2 } as React.CSSProperties}>↗ {c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real-time ── */}
      <section id="realtime" className="feat sec-a reveal">
        <div className="feat-inner feat-flip">
          <div className="feat-visual">
            <div className="mock demo">
              <div className="demo-event" style={{ "--i": 0 } as React.CSSProperties}>
                <span className="mock-dot" />
                <span className="mock-event-text">New message in <b>#product</b></span>
                <span className="mock-event-time">now</span>
              </div>
              <div className="demo-event" style={{ "--i": 1 } as React.CSSProperties}>
                <span className="mock-dot" />
                <span className="mock-event-text">Email from <b>a supplier</b></span>
                <span className="mock-event-time">2s ago</span>
              </div>
              <div className="demo-event demo-event-done" style={{ "--i": 2 } as React.CSSProperties}>
                <span className="mock-dot mock-dot-done" />
                <span className="mock-event-text">Indexed &amp; searchable</span>
                <span className="mock-event-time">✓</span>
              </div>
              <div className="demo-progress"><span className="dp-bar" /></div>
            </div>
          </div>
          <div className="feat-copy reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
            <p className="feat-kicker"><span className="fk-dot" />Real-time sync</p>
            <h2 className="feat-title">As fresh as<br />right now.</h2>
            <p className="feat-desc">
              Most search tools crawl your data every few hours. ClutterAI
              listens. Messages and email arrive by push the moment they happen —
              so answers reflect what happened minutes ago, not last week.
            </p>
            <ul className="feat-rows">
              <li className="feat-row"><span className="fr-mark">✳</span>A message is searchable seconds after it's posted — edits included</li>
              <li className="feat-row"><span className="fr-mark">✳</span>New email lands in your index the moment it lands in your inbox</li>
              <li className="feat-row"><span className="fr-mark">✳</span>Background syncs still run as a safety net, so nothing slips through</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Slack ── */}
      <section id="slack-bot" className="feat sec-b reveal">
        <div className="feat-inner">
          <div className="feat-copy reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
            <p className="feat-kicker"><span className="fk-dot" />ClutterAI for Slack</p>
            <h2 className="feat-title">Answers where<br />your team already is.</h2>
            <p className="feat-desc">
              Mention <b>@ClutterAI</b> in any channel, or just send it a direct
              message, and ask about your own connected data without ever
              leaving Slack.
            </p>
            <ul className="feat-rows">
              <li className="feat-row"><span className="fr-mark">✳</span>Channel replies are visible only to you — private data never prints publicly</li>
              <li className="feat-row"><span className="fr-mark">✳</span>Worth sharing? One click posts the answer to the channel — your choice, always</li>
              <li className="feat-row"><span className="fr-mark">✳</span>DM the bot for a private back-and-forth, sources included</li>
              <li className="feat-row"><span className="fr-mark">✳</span>Same account, same limits, same security as the app</li>
            </ul>
          </div>
          <div className="feat-visual">
            <div className="mock demo">
              <div className="demo-slack-msg">
                <span className="mock-avatar">A</span>
                <div className="mock-slack-body">
                  <span className="mock-slack-name">Teammate</span>
                  <span className="mock-slack-text">@ClutterAI what's the latest on the renewal?</span>
                </div>
              </div>
              <div className="demo-thinking">
                <span className="dt-dot" /><span className="dt-dot" /><span className="dt-dot" />
                <span className="dt-text">ClutterAI is searching…</span>
              </div>
              <div className="demo-slack-reply">
                <span className="mock-avatar mock-avatar-bot"><Logo size={30} radius={9} /></span>
                <div className="mock-slack-body">
                  <span className="mock-slack-name">ClutterAI <span className="mock-eph">Only visible to you</span></span>
                  <p className="demo-p" style={{ "--i": 0 } as React.CSSProperties}>
                    The renewal is confirmed for the 1st at the current tier — the account owner replied yesterday afternoon.
                  </p>
                  <p className="demo-p" style={{ "--i": 1 } as React.CSSProperties}>
                    One open item: they asked for updated invoicing details before the term starts.
                  </p>
                  <div className="demo-chips">
                    {["Email · Renewal confirmation", "#accounts"].map((c, i) => (
                      <span key={c} className="demo-chip" style={{ "--i": i + 2 } as React.CSSProperties}>↗ {c}</span>
                    ))}
                  </div>
                  <span className="demo-share" style={{ "--i": 4 } as React.CSSProperties}>Share to channel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Agents ── */}
      <section id="agents" className="agents sec-a reveal">
        <div className="agents-inner">
          <div className="agents-head">
            <p className="feat-kicker"><span className="fk-dot" />Agents</p>
            <h2 className="sec-title">Four agents, always working.</h2>
            <p className="agents-sub">
              ClutterAI doesn't stop at answering questions. Each agent owns a
              different job — sorting, building, briefing and preparing — and
              every one of them runs on the same connected knowledge.
            </p>
          </div>

          {/* Forge */}
          <div className="agent">
            <div className="agent-copy reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
              <div className="agent-head">
                <span className="agent-logo"><Logo size={38} radius={11} /></span>
                <div>
                  <h3 className="agent-name">Forge</h3>
                  <p className="agent-role">The technical workspace</p>
                </div>
              </div>
              <p className="agent-desc">
                Forge builds <em>with</em> your knowledge — your repos, issues,
                architecture threads and docs — and remembers the conversation as
                you iterate, so "make it handle retries" continues the work
                instead of starting over.
              </p>
              <ul className="feat-rows">
                <li className="feat-row"><span className="fr-mark">✳</span>Complete files stream into a side panel — tabbed, editable, syntax-highlighted</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Save to your workspace and reopen any file in any conversation, any day</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Each revision becomes a version — flip between them and see the line-by-line diff</li>
                <li className="feat-row"><span className="fr-mark">✳</span>A decision timeline of what your team decided — click one to trace how it came to be</li>
              </ul>
            </div>
            <div className="agent-visual">
              <div className="mock mock-forge demo">
                <div className="mock-tabs">
                  <span className="mock-tab mock-tab-active">migrate.ts</span>
                  <span className="mock-tab">config.yaml</span>
                  <span className="mock-ver">‹ v2 / 3 ›</span>
                </div>
                <div className="mock-code">
                  {[70, 85, 60, 80, 45].map((w, i) => (
                    <span key={i}
                      className={`demo-code-line ${i === 2 || i === 4 ? "demo-code-add" : ""}`}
                      style={{ "--i": i, width: `${w}%` } as React.CSSProperties} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Triage */}
          <div className="agent agent-flip">
            <div className="agent-visual">
              <div className="mock demo">
                <div className="mock-digest-head">Needs you today</div>
                <div className="demo-digest-row" style={{ "--i": 0 } as React.CSSProperties}>
                  <span className="mock-badge">Urgent</span>
                  <span className="demo-digest-text">Customer escalation waiting on a reply since yesterday</span>
                </div>
                <div className="demo-digest-row" style={{ "--i": 1 } as React.CSSProperties}>
                  <span className="mock-badge">Reply</span>
                  <span className="demo-digest-text">Two threads asked you a direct question</span>
                </div>
                <div className="demo-digest-row demo-digest-done" style={{ "--i": 2 } as React.CSSProperties}>
                  <span className="mock-badge mock-badge-done">Noise ✓</span>
                  <span className="demo-digest-text">14 updates filtered out — nothing needed from you</span>
                </div>
              </div>
            </div>
            <div className="agent-copy reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
              <div className="agent-head">
                <span className="agent-logo"><Logo size={38} radius={11} /></span>
                <div>
                  <h3 className="agent-name">Triage</h3>
                  <p className="agent-role">Signal from noise</p>
                </div>
              </div>
              <p className="agent-desc">
                Everything arrives at once and looks equally important. Triage
                reads what came in across your connected tools and sorts it by
                what actually needs you — so you start with the short list
                instead of the whole pile.
              </p>
              <ul className="feat-rows">
                <li className="feat-row"><span className="fr-mark">✳</span>Separates what's urgent, what needs a reply, and what's just noise</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Works across sources at once — messages and email ranked together, not app by app</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Every item links straight back to where it came from</li>
              </ul>
            </div>
          </div>

          {/* Digest */}
          <div className="agent">
            <div className="agent-visual">
              <div className="mock demo">
                <div className="mock-digest-head">Today's Digest</div>
                <div className="demo-digest-row" style={{ "--i": 0 } as React.CSSProperties}>
                  <span className="mock-badge">Waiting on</span>
                  <span className="demo-digest-text">Contract redline — promised to you Tuesday</span>
                </div>
                <div className="demo-digest-row" style={{ "--i": 1 } as React.CSSProperties}>
                  <span className="mock-badge">You promised</span>
                  <span className="demo-digest-text">Onboarding copy by end of week</span>
                </div>
                <div className="demo-digest-row demo-digest-done" style={{ "--i": 2 } as React.CSSProperties}>
                  <span className="mock-badge mock-badge-done">Resolved ✓</span>
                  <span className="demo-digest-text">Vendor quote — received this morning</span>
                </div>
              </div>
            </div>
            <div className="agent-copy reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
              <div className="agent-head">
                <span className="agent-logo"><Logo size={38} radius={11} /></span>
                <div>
                  <h3 className="agent-name">Digest</h3>
                  <p className="agent-role">Your daily brief</p>
                </div>
              </div>
              <p className="agent-desc">
                Every morning, Digest reads what moved across your workspace and
                writes back what actually needs you — not a feed, a short list of
                obligations in both directions.
              </p>
              <ul className="feat-rows">
                <li className="feat-row"><span className="fr-mark">✳</span>Commitments you made, replies you're owed, and questions left unanswered</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Items close themselves — when the reply lands or the task ships, the ledger updates</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Anything that goes quiet for too long ages out on its own, so the list stays honest</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Every item links back to the message or email it came from</li>
              </ul>
            </div>
          </div>

          {/* Pulse */}
          <div className="agent agent-flip">
            <div className="agent-copy reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
              <div className="agent-head">
                <span className="agent-logo"><Logo size={38} radius={11} /></span>
                <div>
                  <h3 className="agent-name">Pulse</h3>
                  <p className="agent-role">Meeting intelligence</p>
                </div>
              </div>
              <p className="agent-desc">
                Pulse reads your calendar and builds a dossier before each
                meeting: who you're meeting, everything you've exchanged, and
                what's still unresolved between you.
              </p>
              <ul className="feat-rows">
                <li className="feat-row"><span className="fr-mark">✳</span>The last threads, files and decisions involving each attendee</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Open items with that person, so nothing is forgotten in the room</li>
                <li className="feat-row"><span className="fr-mark">✳</span>Ready before you walk in — no prep, no digging through history</li>
              </ul>
            </div>
            <div className="agent-visual">
              <div className="mock demo">
                <div className="demo-pulse-head" style={{ "--i": 0 } as React.CSSProperties}>
                  <span className="dp-time">10:00</span>
                  <span className="dp-title">Quarterly review</span>
                </div>
                <div className="demo-pulse-row" style={{ "--i": 1 } as React.CSSProperties}>
                  <span className="dpr-label">Attendees</span>
                  <span className="dpr-value">3 people · 2 you've met before</span>
                </div>
                <div className="demo-pulse-row" style={{ "--i": 2 } as React.CSSProperties}>
                  <span className="dpr-label">Last thread</span>
                  <span className="dpr-value">Budget adjustments, 4 days ago</span>
                </div>
                <div className="demo-pulse-row" style={{ "--i": 3 } as React.CSSProperties}>
                  <span className="dpr-label">Unresolved</span>
                  <span className="dpr-value">Headcount question from the last review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="values sec-b">
        <div className="values-inner">
          {[
            { n: "01", t: "Connect in seconds", d: "Link email, chat, drives, docs and trackers with secure OAuth. Your data is indexed and ready to search immediately." },
            { n: "02", t: "Ask anywhere", d: "In the app, or straight from Slack. No Boolean operators, no folder diving — type what you're after and every connected tool is searched at once." },
            { n: "03", t: "Get sourced answers", d: "Every answer includes the exact document, message, or issue it came from. One click to jump straight to the source." },
          ].map((v, i) => (
            <div key={v.n} className="value-card reveal-child" style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
              <div className="value-num">{v.n}</div>
              <h3 className="value-title">{v.t}</h3>
              <p className="value-desc">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="integrations sec-a reveal">
        <div className="integrations-inner">
          <p className="integrations-label">Works with the tools you already use</p>
          <div className="logo-strip">
            {INTEGRATIONS.map((item, i) => (
              <div key={item.name} className="logo-item reveal-child" style={{ "--d": `${i * 35}ms` } as React.CSSProperties}>
                <span className="logo-icon">{item.logo}</span>
                <span className="logo-name">{item.name}</span>
              </div>
            ))}
          </div>
          <p className="integrations-more">+ more coming soon</p>
        </div>
      </section>

      {/* ── Security ── */}
      <section id="security" className="privacy sec-b reveal">
        <div className="privacy-inner">
          <div className="privacy-left reveal-child" style={{ "--d": "0ms" } as React.CSSProperties}>
            <h2 className="privacy-title">Your data stays yours.</h2>
            <p className="privacy-sub">
              ClutterAI never trains on your data. Connections are OAuth-secured
              with read-only access by default, every search is private to the
              person who runs it, and any integration can be disconnected — and
              its indexed data removed — at any time.
            </p>
            <a href="/privacy" className="privacy-link">Read our privacy policy →</a>
          </div>
          <div className="privacy-right">
            {[
              { t: "Private by default", s: "Answers are yours alone — even in shared Slack channels" },
              { t: "OAuth secured", s: "Read-only access by default, revocable any time" },
              { t: "You control retention", s: "Disconnect an app and its indexed data goes with it" },
            ].map((b, i) => (
              <div key={b.t} className="privacy-badge reveal-child" style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <span className="pb-logo"><Logo size={34} radius={10} /></span>
                <div><div className="pb-title">{b.t}</div><div className="pb-sub">{b.s}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Powered by ── */}
      <section className="powered sec-a reveal">
        <div className="powered-inner">
          <p className="powered-label">Powered by</p>
          <div className="powered-grid">
            {["Anthropic", "OpenAI", "Pinecone", "Convex", "Microsoft", "Vercel", "Hostinger"].map((name) => (
              <div key={name} className="powered-item reveal-child">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final-cta sec-b reveal">
        <div className="final-glow" />
        <div className="final-inner">
          <span className="final-logo"><Logo size={64} radius={18} /></span>
          <h2 className="final-title">Stop wasting time<br />searching.</h2>
          <a href="https://app.clutter-ai.com/signup" className="cta-primary large">Start for free →</a>
          <p className="hero-footnote">Free to start · Connect your first tool in two minutes</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand"><Logo size={22} radius={7} /><span className="footer-wordmark">ClutterAI</span></span>
          <nav className="footer-nav">
            <a href="/privacy" className="footer-link">Privacy</a>
            <a href="/refund" className="footer-link">Refunds</a>
            <a href="/terms" className="footer-link">Terms</a>
            <a href="mailto:support@clutter-ai.com" className="footer-link">Contact</a>
          </nav>
          <span className="footer-copy">© {new Date().getFullYear()} ClutterAI</span>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,700;12..96,800&family=Unbounded:wght@700;800;900&family=Figtree:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .root {
          min-height: 100vh; background: #141413; color: #f0ede8;
          font-family: 'Figtree', sans-serif; overflow-x: hidden; position: relative;
        }

        /* ── Alternating section shades ── */
        /* Two shades, alternating — base is the darker warm gray */
        .sec-a { background: #141413; }
        .sec-b { background: #262624; }
        .sec-a, .sec-b { position: relative; }

        /* ── Ambient background ── */
        .bg-glow { position: fixed; border-radius: 50%; pointer-events: none; z-index: 0;
          filter: blur(120px); opacity: 0.45; }
        .bg-glow-a { width: 620px; height: 620px; top: -180px; left: -160px;
          background: radial-gradient(circle, rgba(240,237,232,0.09) 0%, transparent 68%);
          animation: drift-a 26s ease-in-out infinite; }
        .bg-glow-b { width: 540px; height: 540px; top: 42%; right: -180px;
          background: radial-gradient(circle, rgba(240,237,232,0.06) 0%, transparent 68%);
          animation: drift-b 32s ease-in-out infinite; }
        @keyframes drift-a { 0%,100% { transform: translate(0,0); } 50% { transform: translate(70px,60px); } }
        @keyframes drift-b { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-60px,-50px); } }
        .bg-grid { position: fixed; inset: 0; z-index: 0; pointer-events: none; opacity: 0.4;
          background-image:
            linear-gradient(rgba(240,237,232,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240,237,232,0.028) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 90% 55% at 50% 0%, #000 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 90% 55% at 50% 0%, #000 40%, transparent 100%); }
        .root > *:not(.bg-glow):not(.bg-grid) { position: relative; z-index: 1; }

        /* ── Reveal ── */
        .reveal { opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
        .reveal.in { opacity: 1; transform: none; }
        .reveal-child { opacity: 0; transform: translateY(18px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1) var(--d,0ms), transform 0.6s cubic-bezier(0.16,1,0.3,1) var(--d,0ms); }
        .reveal-child.in { opacity: 1; transform: none; }

        /* ── Logo ── */
        .logo-svg { display: block; border-radius: inherit; }

        /* ── Hero ── */
        .hero { min-height: 100vh; padding: 0 40px; display: flex; flex-direction: column; justify-content: center; }
        .hero-inner { max-width: 1200px; margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: end;
          padding-top: 140px; padding-bottom: 90px; }
        .hero-left { opacity: 0; transform: translateX(-28px);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.2s; }
        .hero-left.hero-left-in { opacity: 1; transform: none; }
        @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        .headline { font-family: 'Unbounded', sans-serif; font-weight: 800;
          font-size: clamp(4rem, 7vw, 7.5rem); line-height: 0.95; letter-spacing: -0.05em;
          display: flex; flex-direction: column; }
        .hl-line { display: block; }
        .hl-dim { color: rgba(240,237,232,0.22); }
        .hero-right { opacity: 0; transform: translateX(20px);
          transition: opacity 1s cubic-bezier(0.16,1,0.3,1) 0.5s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.5s;
          display: flex; flex-direction: column; gap: 24px; padding-bottom: 8px; }
        .hero-right.hero-right-in { opacity: 1; transform: none; }
        .subtext { font-size: 1.05rem; line-height: 1.7; color: rgba(240,237,232,0.52); font-weight: 300; }
        .hero-ask { display: flex; align-items: center; gap: 12px; padding: 14px 16px;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
          background: rgba(255,255,255,0.03); overflow: hidden;
          box-shadow: 0 18px 50px rgba(0,0,0,0.4); }
        .ha-logo { display: flex; flex-shrink: 0; }
        .ha-text { font-size: 0.9rem; color: rgba(240,237,232,0.75); flex: 1;
          animation: swap-in 0.55s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes swap-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .ha-caret { width: 2px; height: 16px; background: #f0ede8; flex-shrink: 0;
          animation: blink 1.1s step-end infinite; }
        .hero-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
        .hero-footnote { font-size: 0.77rem; color: rgba(240,237,232,0.22); font-weight: 300; }

        /* ── Marquee ── */
        .marquee-wrap { border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06); padding: 22px 0; overflow: hidden; }
        .marquee { position: relative;
          mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
        .marquee-track { display: flex; gap: 40px; width: max-content; animation: scroll-x 42s linear infinite; }
        .marquee:hover .marquee-track { animation-play-state: paused; }
        @keyframes scroll-x { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .mq-item { display: flex; align-items: center; gap: 9px; opacity: 0.42; transition: opacity 0.25s; }
        .mq-item:hover { opacity: 1; }
        .mq-name { font-size: 0.84rem; font-weight: 500; color: rgba(240,237,232,0.7); white-space: nowrap; }

        /* ── Section tabs ── */
        .section-tabs { position: sticky; top: 88px; z-index: 90;
          background: rgba(20,20,19,0.92); backdrop-filter: blur(22px);
          border-bottom: 1px solid rgba(255,255,255,0.06); }
        .section-tabs-inner { max-width: 1200px; margin: 0 auto; padding: 10px 40px;
          display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; }
        .section-tabs-inner::-webkit-scrollbar { display: none; }
        .stab { padding: 8px 16px; font-size: 0.82rem; font-weight: 500; border-radius: 999px;
          color: rgba(240,237,232,0.38); text-decoration: none; white-space: nowrap;
          border: 1px solid transparent;
          transition: color 0.25s ease, background 0.3s ease, border-color 0.3s ease; }
        .stab:hover { color: rgba(240,237,232,0.75); background: rgba(255,255,255,0.04); }
        .stab-active { color: #141413; background: #f0ede8; border-color: #f0ede8; }

        .sec-title { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(1.9rem, 3.4vw, 2.7rem); letter-spacing: -0.05em; color: #f0ede8; line-height: 1.1; }
        .center { text-align: center; }

        /* ── Showcase ── */
        .showcase { padding: 100px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .showcase-inner { max-width: 900px; margin: 0 auto; }
        .sc-tabs { display: flex; justify-content: center; gap: 6px; margin: 30px 0 26px; flex-wrap: wrap; }
        .sc-tab { padding: 9px 20px; border-radius: 999px; font-family: 'Figtree', sans-serif;
          font-size: 0.85rem; font-weight: 500; cursor: pointer; color: rgba(240,237,232,0.45);
          background: transparent; border: 1px solid rgba(255,255,255,0.1);
          transition: color 0.25s, background 0.25s, border-color 0.25s, transform 0.25s cubic-bezier(0.16,1,0.3,1); }
        .sc-tab:hover { color: #f0ede8; transform: translateY(-1px); }
        .sc-tab-active { color: #141413; background: #f0ede8; border-color: #f0ede8; }
        .sc-panel { border: 1px solid rgba(255,255,255,0.09); border-radius: 22px;
          background: rgba(255,255,255,0.025); padding: 26px;
          display: flex; flex-direction: column; gap: 20px;
          animation: panel-in 0.5s cubic-bezier(0.16,1,0.3,1) both;
          box-shadow: 0 24px 70px rgba(0,0,0,0.45); }
        @keyframes panel-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .sc-prompt { display: flex; flex-direction: column; gap: 8px;
          font-size: 0.98rem; color: #f0ede8; font-weight: 500; }
        .sc-label { font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(240,237,232,0.3); font-weight: 500; }
        .sc-answer { display: flex; gap: 14px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.07); }
        .sc-logo { flex-shrink: 0; display: flex; }
        .sc-answer-body { display: flex; flex-direction: column; gap: 12px; }
        .sc-p { font-size: 0.92rem; line-height: 1.75; color: rgba(240,237,232,0.6); font-weight: 300;
          animation: rise-in 0.55s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(var(--i, 0) * 260ms + 200ms); }
        .sc-chips { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 2px; }
        .sc-chip { font-size: 0.72rem; color: rgba(240,237,232,0.55); padding: 6px 12px;
          border: 1px solid rgba(255,255,255,0.09); border-radius: 999px; background: rgba(255,255,255,0.02);
          transition: border-color 0.2s, color 0.2s;
          animation: rise-in 0.5s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(var(--i, 0) * 110ms + 800ms); }
        .sc-chip:hover { border-color: rgba(255,255,255,0.24); color: #f0ede8; }
        @keyframes rise-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

        /* ── CTAs ── */
        .cta-primary { display: inline-flex; align-items: center; padding: 14px 30px;
          background: #f0ede8; color: #141413; font-family: 'Figtree', sans-serif;
          font-weight: 600; font-size: 0.92rem; text-decoration: none; border-radius: 999px;
          transition: background 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s; }
        .cta-primary:hover { background: #fff; transform: translateY(-2px); box-shadow: 0 14px 36px rgba(240,237,232,0.16); }
        .cta-primary.large { padding: 17px 42px; font-size: 1rem; }
        .cta-ghost { font-size: 0.92rem; color: rgba(240,237,232,0.45); text-decoration: none; transition: color 0.2s; }
        .cta-ghost:hover { color: #f0ede8; }

        /* ── Problem ── */
        .problem { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 90px 40px; }
        .problem-inner { max-width: 1200px; margin: 0 auto; display: grid;
          grid-template-columns: auto 1fr; gap: 64px; align-items: center; }
        .problem-stat { display: flex; align-items: baseline; gap: 8px; flex-shrink: 0; }
        .problem-num { font-family: 'Unbounded', sans-serif; font-weight: 900;
          font-size: clamp(5rem, 9vw, 9rem); color: #f0ede8; letter-spacing: -0.06em; line-height: 1; }
        .problem-unit { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(1.2rem, 2vw, 1.8rem); color: rgba(240,237,232,0.35);
          letter-spacing: -0.03em; align-self: flex-end; padding-bottom: 0.15em; }
        .problem-text { display: flex; flex-direction: column; gap: 16px; }
        .problem-lead { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(1.1rem, 2vw, 1.5rem); color: #f0ede8; letter-spacing: -0.03em; line-height: 1.3; }
        .problem-sub { font-size: 0.9rem; line-height: 1.7; color: rgba(240,237,232,0.42); font-weight: 300; }
        .problem-source { font-size: 0.75rem; font-weight: 500; letter-spacing: 0.08em;
          text-transform: uppercase; color: rgba(240,237,232,0.22); }

        /* ── Stats ── */
        .stats { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 48px 40px; }
        .stats-inner { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: center; }
        .stat { padding: 0 56px; display: flex; flex-direction: column; align-items: center; gap: 6px; }
        .stat + .stat { border-left: 1px solid rgba(255,255,255,0.08); }
        .stat-num { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 2.1rem; color: #f0ede8; letter-spacing: -0.05em; line-height: 1; }
        .stat-label { font-size: 0.82rem; color: rgba(240,237,232,0.38); font-weight: 300;
          text-align: center; max-width: 190px; }

        /* ── Feature sections ── */
        .feat { padding: 118px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); scroll-margin-top: 124px; }
        .feat-inner { max-width: 1200px; margin: 0 auto; display: grid;
          grid-template-columns: 1.05fr 0.95fr; gap: 90px; align-items: center; }
        .feat-flip { grid-template-columns: 0.95fr 1.05fr; }
        .feat-kicker { display: inline-flex; align-items: center; gap: 9px; font-size: 0.7rem;
          font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase;
          color: rgba(240,237,232,0.4); margin-bottom: 18px; padding: 6px 14px 6px 11px;
          border-radius: 999px; border: 1px solid rgba(255,255,255,0.09); background: rgba(255,255,255,0.03); }
        .fk-dot { width: 5px; height: 5px; border-radius: 999px; background: rgba(240,237,232,0.7); }
        .feat-title { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(2rem, 3.6vw, 3rem); letter-spacing: -0.05em; color: #f0ede8;
          line-height: 1.05; margin-bottom: 22px; }
        .feat-desc { font-size: 0.98rem; line-height: 1.78; color: rgba(240,237,232,0.48);
          font-weight: 300; margin-bottom: 28px; max-width: 460px; }
        .feat-desc b, .feat-rows b { font-weight: 600; color: rgba(240,237,232,0.85); }
        .feat-desc em, .feat-rows em { font-style: italic; }
        .feat-rows { list-style: none; display: flex; flex-direction: column; }
        .feat-row { display: flex; gap: 14px; align-items: baseline; padding: 13px 0;
          font-size: 0.88rem; line-height: 1.65; color: rgba(240,237,232,0.55); font-weight: 300;
          border-top: 1px solid rgba(255,255,255,0.05); transition: color 0.25s, padding-left 0.3s ease; }
        .feat-row:hover { color: rgba(240,237,232,0.85); padding-left: 5px; }
        .fr-mark { color: rgba(240,237,232,0.25); flex-shrink: 0; font-size: 0.8rem; transition: color 0.25s; }
        .feat-row:hover .fr-mark { color: rgba(240,237,232,0.6); }

        /* ── Cards / mocks ── */
        .mock { position: relative; border: 1px solid rgba(255,255,255,0.09); border-radius: 20px;
          background: linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.015));
          padding: 26px; display: flex; flex-direction: column; gap: 14px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.45);
          transition: border-color 0.35s ease, transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease; }
        .mock::before {
          content: ""; position: absolute; inset: -1px; border-radius: 21px; pointer-events: none;
          background: linear-gradient(140deg, rgba(240,237,232,0.28), transparent 38%, transparent 62%, rgba(240,237,232,0.16));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; padding: 1px;
          opacity: 0; transition: opacity 0.4s ease; }
        .mock:hover::before { opacity: 1; }
        .mock:hover { transform: translateY(-6px); box-shadow: 0 34px 90px rgba(0,0,0,0.6); }

        /* ── Animated demos (play when scrolled into view) ── */
        .demo { opacity: 0; transform: translateY(24px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }
        .demo.in { opacity: 1; transform: none; }
        .demo-q { font-size: 0.88rem; color: #f0ede8; font-weight: 500; padding: 11px 15px;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 14px 14px 4px 14px;
          align-self: flex-end; background: rgba(255,255,255,0.06); opacity: 0; }
        .demo.in .demo-q { animation: rise-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s both; }

        .demo-thinking { display: flex; align-items: center; gap: 6px; opacity: 0; }
        .demo.in .demo-thinking { animation: think 2.6s ease forwards 0.5s; }
        @keyframes think { 0% { opacity: 0; } 12% { opacity: 1; } 78% { opacity: 1; } 100% { opacity: 0; height: 0; margin: -7px 0; } }
        .dt-dot { width: 5px; height: 5px; border-radius: 999px; background: rgba(240,237,232,0.5); }
        .demo.in .dt-dot:nth-child(1) { animation: bob 1s ease-in-out infinite 0s; }
        .demo.in .dt-dot:nth-child(2) { animation: bob 1s ease-in-out infinite 0.15s; }
        .demo.in .dt-dot:nth-child(3) { animation: bob 1s ease-in-out infinite 0.3s; }
        @keyframes bob { 0%,100% { transform: translateY(0); opacity: 0.4; } 50% { transform: translateY(-3px); opacity: 1; } }
        .dt-text { font-size: 0.76rem; color: rgba(240,237,232,0.4); margin-left: 4px; }

        .demo-a { display: flex; flex-direction: column; gap: 12px; }
        .demo-p { font-size: 0.87rem; line-height: 1.7; color: rgba(240,237,232,0.62);
          font-weight: 300; opacity: 0; }
        .demo.in .demo-p { animation: rise-in 0.6s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(2.6s + var(--i, 0) * 0.45s); }
        .demo-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .demo-chip { font-size: 0.7rem; color: rgba(240,237,232,0.5); padding: 5px 11px;
          border: 1px solid rgba(255,255,255,0.09); border-radius: 999px;
          background: rgba(255,255,255,0.03); opacity: 0;
          transition: border-color 0.2s, color 0.2s; }
        .demo.in .demo-chip { animation: rise-in 0.45s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(2.6s + var(--i, 0) * 0.16s); }
        .demo-chip:hover { border-color: rgba(255,255,255,0.26); color: #f0ede8; }

        .demo-event { display: flex; align-items: center; gap: 12px; padding: 12px 15px;
          border: 1px solid rgba(255,255,255,0.08); border-radius: 13px;
          background: rgba(255,255,255,0.02); opacity: 0; }
        .demo.in .demo-event { animation: rise-in 0.55s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(0.2s + var(--i, 0) * 0.7s); }
        .demo-event-done { border-color: rgba(150,215,180,0.24); background: rgba(150,215,180,0.05); }
        .mock-dot { width: 7px; height: 7px; border-radius: 999px; background: #f0ede8;
          flex-shrink: 0; animation: blink 1.8s ease-in-out infinite; }
        .mock-dot-done { background: rgba(150,215,180,0.9); animation: none; }
        .mock-event-text { font-size: 0.82rem; color: rgba(240,237,232,0.6); flex: 1; }
        .mock-event-text b { color: rgba(240,237,232,0.9); font-weight: 600; }
        .mock-event-time { font-size: 0.72rem; color: rgba(240,237,232,0.28); }
        .demo-progress { height: 3px; border-radius: 999px; background: rgba(255,255,255,0.06); overflow: hidden; }
        .dp-bar { display: block; height: 100%; width: 0; border-radius: 999px; background: rgba(240,237,232,0.5); }
        .demo.in .dp-bar { animation: fill 2.2s cubic-bezier(0.16,1,0.3,1) 0.3s forwards; }
        @keyframes fill { to { width: 100%; } }

        .demo-slack-msg { display: flex; gap: 12px; align-items: flex-start; opacity: 0; }
        .demo.in .demo-slack-msg { animation: rise-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .demo-slack-reply { display: flex; gap: 12px; align-items: flex-start; padding-left: 4px; opacity: 0; }
        .demo.in .demo-slack-reply { animation: rise-in 0.55s cubic-bezier(0.16,1,0.3,1) 2.5s both; }
        .mock-avatar { width: 30px; height: 30px; border-radius: 9px; flex-shrink: 0;
          background: rgba(255,255,255,0.08); color: rgba(240,237,232,0.7);
          display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 600; }
        .mock-avatar-bot { background: transparent; }
        .mock-slack-body { display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .mock-slack-name { font-size: 0.78rem; font-weight: 600; color: rgba(240,237,232,0.8); }
        .mock-slack-text { font-size: 0.85rem; color: rgba(240,237,232,0.55); line-height: 1.5; }
        .mock-eph { font-size: 0.66rem; font-weight: 400; color: rgba(240,237,232,0.3); margin-left: 8px; }
        .demo-share { font-size: 0.72rem; font-weight: 500; color: rgba(240,237,232,0.7);
          padding: 6px 13px; border: 1px solid rgba(255,255,255,0.16); border-radius: 999px;
          align-self: flex-start; opacity: 0; transition: background 0.2s, border-color 0.2s; }
        .demo.in .demo-share { animation: rise-in 0.45s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(2.6s + var(--i, 0) * 0.16s); }
        .mock:hover .demo-share { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.3); }

        .mock-forge { padding: 0; overflow: hidden; }
        .mock-tabs { display: flex; align-items: center; gap: 4px; padding: 11px 15px;
          border-bottom: 1px solid rgba(255,255,255,0.07); }
        .mock-tab { font-size: 0.72rem; color: rgba(240,237,232,0.35); padding: 6px 12px;
          border-radius: 9px 9px 0 0; border: 1px solid transparent; }
        .mock-tab-active { color: #f0ede8; background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.1); }
        .mock-ver { margin-left: auto; font-size: 0.68rem; color: rgba(240,237,232,0.35);
          padding: 5px 10px; border: 1px solid rgba(255,255,255,0.08); border-radius: 999px; }
        .mock-code { display: flex; flex-direction: column; gap: 10px; padding: 24px 18px 28px; }
        .demo-code-line { height: 9px; border-radius: 4px; background: rgba(240,237,232,0.13);
          display: block; opacity: 0; transform: translateX(-8px); }
        .demo.in .demo-code-line { animation: type-line 0.5s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(0.3s + var(--i, 0) * 0.32s); }
        @keyframes type-line { to { opacity: 1; transform: none; } }
        .demo-code-add { background: rgba(150,215,180,0.28); }

        .mock-digest-head { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 0.85rem; color: rgba(240,237,232,0.75); letter-spacing: -0.02em; padding-bottom: 4px; }
        .demo-digest-row { display: flex; align-items: center; gap: 12px; padding: 11px 13px;
          border: 1px solid rgba(255,255,255,0.07); border-radius: 12px;
          background: rgba(255,255,255,0.02); opacity: 0; }
        .demo.in .demo-digest-row { animation: rise-in 0.55s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(0.25s + var(--i, 0) * 0.55s); }
        .demo-digest-done { opacity: 0.65; border-color: rgba(150,215,180,0.2); }
        .demo-digest-text { font-size: 0.79rem; color: rgba(240,237,232,0.55); line-height: 1.5; }
        .mock-badge { font-size: 0.62rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase;
          color: rgba(240,237,232,0.5); padding: 5px 9px; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px; flex-shrink: 0; min-width: 94px; text-align: center; }
        .mock-badge-done { color: rgba(150,215,180,0.85); border-color: rgba(150,215,180,0.3); }

        .demo-pulse-head { display: flex; align-items: baseline; gap: 12px; padding-bottom: 6px;
          border-bottom: 1px solid rgba(255,255,255,0.07); opacity: 0; }
        .demo.in .demo-pulse-head, .demo.in .demo-pulse-row {
          animation: rise-in 0.55s cubic-bezier(0.16,1,0.3,1) both;
          animation-delay: calc(0.25s + var(--i, 0) * 0.5s); }
        .dp-time { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 1.1rem; color: #f0ede8; letter-spacing: -0.03em; }
        .dp-title { font-size: 0.85rem; color: rgba(240,237,232,0.6); }
        .demo-pulse-row { display: flex; gap: 14px; align-items: baseline; opacity: 0; }
        .dpr-label { font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(240,237,232,0.32); min-width: 92px; flex-shrink: 0; }
        .dpr-value { font-size: 0.83rem; color: rgba(240,237,232,0.6); line-height: 1.5; }

        /* ── Agents ── */
        .agents { padding: 120px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); scroll-margin-top: 124px; }
        .agents-inner { max-width: 1200px; margin: 0 auto; }
        .agents-head { max-width: 620px; margin-bottom: 76px; }
        .agents-sub { font-size: 1rem; line-height: 1.78; color: rgba(240,237,232,0.48);
          font-weight: 300; margin-top: 18px; }
        .agent { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 80px;
          align-items: center; padding: 56px 0; border-top: 1px solid rgba(255,255,255,0.06); }
        .agent-flip { grid-template-columns: 0.95fr 1.05fr; }
        .agent-head { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
        .agent-logo { display: flex; flex-shrink: 0; transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        .agent:hover .agent-logo { transform: rotate(90deg); }
        .agent-name { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 1.7rem; letter-spacing: -0.04em; color: #f0ede8; line-height: 1.1; }
        .agent-role { font-size: 0.78rem; letter-spacing: 0.06em; text-transform: uppercase;
          color: rgba(240,237,232,0.32); margin-top: 4px; }
        .agent-desc { font-size: 0.95rem; line-height: 1.8; color: rgba(240,237,232,0.5);
          font-weight: 300; margin-bottom: 26px; max-width: 460px; }
        .agent-desc em { font-style: italic; }

        /* ── Values ── */
        .values { padding: 100px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .values-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; overflow: hidden; }
        .value-card { padding: 52px 44px; background: rgba(255,255,255,0.012);
          border-right: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; gap: 16px;
          transition: background 0.35s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        .value-card:last-child { border-right: none; }
        .value-card:hover { background: rgba(255,255,255,0.055); }
        .value-num { font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.68rem;
          font-weight: 800; letter-spacing: 0.12em; color: rgba(240,237,232,0.18); }
        .value-title { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 1.18rem; color: #f0ede8; letter-spacing: -0.03em; line-height: 1.2; }
        .value-desc { font-size: 0.87rem; color: rgba(240,237,232,0.42); line-height: 1.72; font-weight: 300; }

        /* ── Integrations ── */
        .integrations { padding: 90px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .integrations-inner { max-width: 1000px; margin: 0 auto; text-align: center; }
        .integrations-label { font-size: 0.7rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(240,237,232,0.25); margin-bottom: 30px; }
        .logo-strip { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .logo-item { display: flex; align-items: center; gap: 8px; padding: 9px 17px;
          border: 1px solid rgba(255,255,255,0.07); border-radius: 999px; background: rgba(255,255,255,0.02);
          transition: border-color 0.2s, background 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1); }
        .logo-item:hover { border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.07); transform: translateY(-3px); }
        .logo-icon { width: 15px; height: 15px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .logo-name { font-size: 0.8rem; font-weight: 500; color: rgba(240,237,232,0.52); }
        .integrations-more { margin-top: 18px; font-size: 0.76rem; color: rgba(240,237,232,0.18); font-weight: 300; }

        /* ── Privacy ── */
        .privacy { padding: 110px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); scroll-margin-top: 124px; }
        .privacy-inner { max-width: 1200px; margin: 0 auto; display: grid;
          grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
        .privacy-title { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(2rem, 3.5vw, 2.8rem); letter-spacing: -0.05em; color: #f0ede8;
          line-height: 1.08; margin-bottom: 20px; }
        .privacy-sub { font-size: 0.92rem; line-height: 1.78; color: rgba(240,237,232,0.45);
          font-weight: 300; margin-bottom: 28px; }
        .privacy-link { font-size: 0.87rem; color: rgba(240,237,232,0.45); text-decoration: none;
          border-bottom: 1px solid rgba(240,237,232,0.16); padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s; }
        .privacy-link:hover { color: #f0ede8; border-color: rgba(240,237,232,0.5); }
        .privacy-right { display: flex; flex-direction: column; gap: 10px; }
        .privacy-badge { display: flex; align-items: center; gap: 16px; padding: 20px 24px;
          border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; background: rgba(255,255,255,0.02);
          transition: border-color 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1), background 0.2s; }
        .privacy-badge:hover { border-color: rgba(255,255,255,0.2); transform: translateX(6px); background: rgba(255,255,255,0.055); }
        .pb-logo { flex-shrink: 0; display: flex; }
        .pb-title { font-family: 'Bricolage Grotesque', sans-serif; font-size: 0.87rem; font-weight: 800;
          color: rgba(240,237,232,0.85); letter-spacing: -0.02em; margin-bottom: 3px; }
        .pb-sub { font-size: 0.75rem; color: rgba(240,237,232,0.35); font-weight: 300; line-height: 1.5; }

        /* ── Powered by ── */
        .powered { padding: 60px 40px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .powered-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .powered-label { font-size: 0.68rem; font-weight: 500; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(240,237,232,0.2); margin-bottom: 22px; }
        .powered-grid { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
        .powered-item { padding: 8px 19px; border: 1px solid rgba(255,255,255,0.07); border-radius: 999px;
          font-size: 0.78rem; font-weight: 500; color: rgba(240,237,232,0.28);
          transition: border-color 0.2s, color 0.2s; }
        .powered-item:hover { border-color: rgba(255,255,255,0.18); color: rgba(240,237,232,0.6); }

        /* ── Final CTA ── */
        .final-cta { padding: 140px 40px; border-bottom: 1px solid rgba(255,255,255,0.06);
          position: relative; overflow: hidden; }
        .final-glow { position: absolute; width: 700px; height: 400px; left: 50%; top: 50%;
          transform: translate(-50%,-50%); border-radius: 50%; filter: blur(120px); pointer-events: none;
          background: radial-gradient(circle, rgba(240,237,232,0.1) 0%, transparent 70%); }
        .final-inner { max-width: 800px; margin: 0 auto; position: relative;
          display: flex; flex-direction: column; align-items: center; gap: 26px; text-align: center; }
        .final-logo { display: flex; animation: float-y 5s ease-in-out infinite; }
        @keyframes float-y { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        .final-title { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: clamp(2.4rem, 4.4vw, 3.6rem); letter-spacing: -0.05em; color: #f0ede8; line-height: 1.0; }

        /* ── Footer ── */
        .footer { padding: 26px 40px; border-top: 1px solid rgba(255,255,255,0.06); background: #141413; }
        .footer-inner { max-width: 1200px; margin: 0 auto; display: flex;
          align-items: center; justify-content: space-between; gap: 16px; }
        .footer-brand { display: flex; align-items: center; gap: 9px; }
        .footer-wordmark { font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
          font-size: 0.86rem; color: rgba(240,237,232,0.28); letter-spacing: -0.03em; }
        .footer-nav { display: flex; gap: 20px; }
        .footer-link { font-size: 0.78rem; color: rgba(240,237,232,0.26); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: rgba(240,237,232,0.6); }
        .footer-copy { font-size: 0.74rem; color: rgba(240,237,232,0.16); }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .hero-inner { grid-template-columns: 1fr; gap: 44px; padding-top: 110px; padding-bottom: 60px; }
          .hero-left { transform: translateY(20px); }
          .hero-right { transform: translateY(16px); }
          .stats-inner { flex-wrap: wrap; gap: 24px 0; }
          .stat { padding: 0 30px; }
          .stat + .stat { border-left: none; border-top: 1px solid rgba(255,255,255,0.08);
            padding-top: 24px; width: 100%; align-items: flex-start; }
          .stat-label { text-align: left; }
          .values-inner { grid-template-columns: 1fr; }
          .value-card { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .value-card:last-child { border-bottom: none; }
          .problem-inner { grid-template-columns: 1fr; gap: 28px; }
          .problem-num { font-size: clamp(4rem, 16vw, 6rem); }
          .privacy-inner { grid-template-columns: 1fr; gap: 44px; }
          .feat { padding: 84px 40px; }
          .feat-inner, .feat-flip { grid-template-columns: 1fr; gap: 46px; }
          .feat-flip .feat-visual { order: 2; }
          .agents { padding: 88px 40px; }
          .agents-head { margin-bottom: 48px; }
          .agent, .agent-flip { grid-template-columns: 1fr; gap: 40px; padding: 44px 0; }
          .agent-flip .agent-visual { order: 2; }
        }
        @media (max-width: 640px) {
          .hero, .stats, .values, .integrations, .privacy, .powered, .final-cta,
          .feat, .showcase, .agents { padding-left: 20px; padding-right: 20px; }
          .footer { padding: 20px; }
          .footer-inner { flex-direction: column; text-align: center; gap: 12px; }
          .headline { font-size: clamp(3.2rem, 11vw, 4.5rem); }
          .section-tabs-inner { padding: 10px 12px; }
          .sc-panel { padding: 20px; }
          .agent-name { font-size: 1.4rem; }
        }
      `}</style>
    </div>
  );
}