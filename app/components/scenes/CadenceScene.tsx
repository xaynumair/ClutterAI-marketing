"use client";

import { Icon } from "../Logo";
import { at, Chip, useTimeline, Window } from "./primitives";

// Cadence — the day's meetings assemble in an agenda. Each carries who's
// coming and where it is in its lifecycle; one flips from "Needs prep" to
// "Briefing ready" as Pulse finishes, and an invitation comes back accepted.

const MEETINGS = [
  { time: "09:00", title: "Design sync", who: "Priya, Alex", state: "Recorded with Attune", tone: "neutral" as const },
  { time: "11:30", title: "Acme renewal", who: "Sarah Chen · VP Finance, Marcus Oduya", state: "Needs prep", tone: "neutral" as const },
  { time: "15:00", title: "1:1 with Lena", who: "Lena Berg", state: "Invited", tone: "neutral" as const },
];

export function CadenceScene() {
  const phase = useTimeline([2600, 4200]); // 1 = briefing ready, 2 = invite accepted

  return (
    <Window app="Cadence" title="Tuesday 9 Sep" right={<span className="sc-pill"><Icon.Calendar /> 3 meetings</span>}>
      <div className="sc-cadence">
        {MEETINGS.map((m, i) => {
          const briefed = i === 1 && phase >= 1;
          const accepted = i === 2 && phase >= 2;
          return (
            <div key={m.title} className={`sc-cad-row sc-in${i === 1 ? " is-next" : ""}`} style={at(300 + i * 420)}>
              <span className="sc-cad-time">{m.time}</span>
              <div className="sc-row-text">
                <div className="sc-row-title">{m.title}</div>
                <div className="sc-row-sub">{m.who}</div>
                <div className="sc-cad-agenda sc-in" style={at(700 + i * 420)}>
                  {i === 1 ? "Agenda: annual discount · seats 40 → 55 · security report" : i === 0 ? "Agenda: deck review" : "Agenda: Q4 plan"}
                </div>
              </div>
              {briefed ? (
                <Chip key="ready" delay={0} tone="accent">Briefing ready</Chip>
              ) : accepted ? (
                <Chip key="acc" delay={0} tone="accent">Accepted</Chip>
              ) : (
                <span className="sc-chip sc-pop" style={at(900 + i * 420)}>{m.state}</span>
              )}
            </div>
          );
        })}
        <div className="sc-cad-foot sc-in" style={at(1900)}>
          <span className="sc-label">Next up · 11:30</span>
          <div className="sc-chip-row">
            <Chip delay={2000}>Prepare with Pulse</Chip>
            <Chip delay={2150}>Record with Attune</Chip>
            <Chip delay={2300}>Open the deal in Stride</Chip>
          </div>
        </div>
      </div>
    </Window>
  );
}
