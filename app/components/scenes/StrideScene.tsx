"use client";

import { Icon } from "../Logo";
import { at, Chip, useTimeline, Window } from "./primitives";

// Stride — a deal after a meeting. The recording filed itself; the proposed
// updates arrive, each with a quote from the transcript; "Approve" applies
// them, the health score climbs, the next step becomes a Chime task and the
// follow-up email is drafted.

const PROPOSALS = [
  { text: "Close date → 30 Sep", quote: "“we'd need it live before Q4”" },
  { text: "Next step: send the redlined MSA by Friday", quote: "“send us the redline and we'll turn it around”" },
  { text: "Add Dana Whitfield · Legal", quote: "“Dana will review the contract”" },
  { text: "They promised: budget sign-off this week", quote: "“I'll get sign-off by Thursday”" },
];

const STAGES = ["Qualified", "Proposal", "Contract", "Won"];

export function StrideScene() {
  const phase = useTimeline([3600, 4400]); // 1 = approved, 2 = follow-up drafted
  const health = phase >= 1 ? 70 : 50;

  return (
    <Window app="Stride" title="Acme Logistics — annual plan" right={<span className={`sc-pill${phase >= 1 ? " is-ok" : ""}`}>Health {health}</span>}>
      <div className="sc-stride">
        <div className="sc-stg-row sc-in" style={at(100)}>
          {STAGES.map((s, i) => (
            <span key={s} className={`sc-stg${i === 1 ? " is-on" : ""}${i < 1 ? " is-done" : ""}`}>{s}</span>
          ))}
        </div>

        <div className="sc-stride-filed sc-in" style={at(500)}>
          <span className="sc-chip"><Icon.Handshake /> Acme renewal · 11:30</span>
          <span className="sc-dim">recording filed itself · 4 updates proposed</span>
        </div>

        <span className="sc-label sc-in" style={at(900)}>After the meeting</span>
        {PROPOSALS.map((p, i) => (
          <div key={p.text} className={`sc-attune-item sc-in${phase >= 1 ? " is-done" : ""}`} style={at(1000 + i * 330)}>
            <span className="sc-check"><Icon.Check /></span>
            <span>
              <span className="sc-attune-item-text">{p.text}</span>
              <span className="sc-stride-quote">{p.quote}</span>
            </span>
          </div>
        ))}

        {phase < 1 ? (
          <div className="sc-chip-row"><Chip delay={2500} tone="accent">Approve all</Chip><Chip delay={2650}>Edit</Chip></div>
        ) : (
          <div className="sc-chip-row">
            <Chip delay={0} tone="accent">Applied 4 updates</Chip>
            <Chip delay={150}>Chime task: redlined MSA · Fri</Chip>
            {phase >= 2 && <Chip delay={0}>Follow-up drafted</Chip>}
          </div>
        )}
      </div>
    </Window>
  );
}
