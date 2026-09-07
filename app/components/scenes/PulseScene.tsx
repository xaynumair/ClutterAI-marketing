"use client";

import { Icon } from "../Logo";
import { at, Avatar, Chip, useTimeline, Window } from "./primitives";

// Pulse — a briefing assembles itself before a meeting: the prep bar fills,
// then one dossier row per attendee, then talking points.

const PEOPLE = [
  { initials: "SC", name: "Sarah Chen", role: "VP Finance, Acme", last: "Asked for the security report · Tue", promise: "You owe: security report" },
  { initials: "MO", name: "Marcus Oduya", role: "Procurement", last: "Pushed back on annual billing", promise: "They owe: usage numbers" },
  { initials: "LB", name: "Lena Berg", role: "Champion", last: "Forwarded the renewal thread", promise: null },
];

export function PulseScene() {
  const phase = useTimeline([1500]); // 1 = briefing ready

  return (
    <Window app="Pulse" title="Acme renewal" right={<span className="sc-pill"><Icon.Clock /> in 25 min</span>}>
      <div className="sc-pulse">
        <div className="sc-progress sc-in" style={at(150)}>
          <span className="sc-progress-label">{phase >= 1 ? "Briefing ready" : "Preparing briefing…"}</span>
          <span className="sc-progress-bar"><i /></span>
        </div>

        <div className="sc-pulse-rows">
          {PEOPLE.map((p, i) => (
            <div key={p.name} className="sc-row sc-in" style={at(1700 + i * 420)}>
              <Avatar initials={p.initials} delay={1750 + i * 420} />
              <div className="sc-row-text">
                <div className="sc-row-title">{p.name} <span className="sc-dim">· {p.role}</span></div>
                <div className="sc-row-sub">{p.last}</div>
              </div>
              {p.promise && <Chip delay={2050 + i * 420} tone="accent">{p.promise}</Chip>}
            </div>
          ))}
        </div>

        <div className="sc-pulse-points sc-in" style={at(3400)}>
          <span className="sc-label">Talking points</span>
          <div className="sc-chip-row">
            <Chip delay={3550}>Annual discount: hold at 20%</Chip>
            <Chip delay={3700}>Seats went 40 → 55 since March</Chip>
          </div>
        </div>
      </div>
    </Window>
  );
}
