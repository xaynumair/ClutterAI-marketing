"use client";

import { Icon } from "../Logo";
import { at, Caret, useTimeline, useTyped, Window } from "./primitives";

// Facet — a plain-English filter types into the bar, rows that don't match
// fold away, then an AI column appears and fills itself.

const ROWS = [
  { name: "Northwind", plan: "Team", seen: "3 Sep", risk: "Low", keep: false, why: "" },
  { name: "Acme Corp", plan: "Pro", seen: "12 May", risk: "High", keep: true, why: "No logins since 12 May" },
  { name: "Globex", plan: "Team", seen: "1 Sep", risk: "Low", keep: false, why: "" },
  { name: "Initech", plan: "Pro", seen: "28 May", risk: "High", keep: true, why: "Card failed twice" },
  { name: "Umbrella", plan: "Team", seen: "6 Jun", risk: "Med", keep: true, why: "Seats dropped 20 → 3" },
];

export function FacetScene() {
  const q = useTyped("customers who churned after May", 300, 34);
  const phase = useTimeline([1900, 2700]); // 1 = filtered, 2 = AI column

  return (
    <Window app="Facet" title="Customers" right={<span className="sc-pill">{phase >= 1 ? "3 rows" : "48 rows"}</span>}>
      <div className="sc-facet">
        <div className="sc-facet-filter sc-in" style={at(100)}>
          <Icon.Sparkles />
          <span className="sc-facet-query">
            {q.text}
            {!q.done && <Caret />}
          </span>
        </div>

        <div className={`sc-grid${phase >= 2 ? " has-ai" : ""}`}>
          <div className="sc-grid-row is-head sc-in" style={at(300)}>
            <span>Customer</span><span>Plan</span><span>Last seen</span><span>Risk</span>
            <span className="sc-grid-ai"><Icon.Sparkles size={10} /> Why?</span>
          </div>
          {ROWS.map((r, i) => (
            <div key={r.name} className={`sc-grid-row sc-in${phase >= 1 && !r.keep ? " is-out" : ""}${phase >= 1 && r.keep ? " is-hit" : ""}`} style={at(450 + i * 90)}>
              <span>{r.name}</span>
              <span className="sc-dim">{r.plan}</span>
              <span className="sc-dim">{r.seen}</span>
              <span className={`sc-risk is-${r.risk.toLowerCase()}`}>{r.risk}</span>
              <span className="sc-grid-ai">
                {phase >= 2 && r.keep && <span className="sc-reveal" style={at(200 + i * 220)}>{r.why}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
