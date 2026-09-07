"use client";

import { at, Window } from "./primitives";

// Easel — a workflow draws itself: nodes pop in one at a time, the connectors
// are inked between them, and a sticky note lands with a rule pulled from Slack.

const NODES = [
  { id: "lead", x: 62, y: 115, w: 96, h: 40, label: "Website lead", t: 300 },
  { id: "enrich", x: 200, y: 52, w: 96, h: 40, label: "Enrich lead", t: 1100 },
  { id: "route", x: 200, y: 178, w: 96, h: 40, label: "Qualified?", t: 1900, tilt: true },
  { id: "crm", x: 348, y: 52, w: 96, h: 40, label: "CRM deal", t: 2700 },
  { id: "slack", x: 348, y: 178, w: 96, h: 40, label: "Slack · #sales", t: 3400 },
];

const EDGES = [
  { d: "M110 115 C 140 115, 140 52, 152 52", t: 1400 },
  { d: "M110 115 C 140 115, 140 178, 152 178", t: 2200 },
  { d: "M248 52 L 300 52", t: 3000 },
  { d: "M248 178 L 300 178", t: 3700 },
];

export function EaselScene() {
  return (
    <Window app="Easel" title="Lead routing" right={<span className="sc-pill">Drawn from #sales</span>}>
      <div className="sc-easel">
        <svg viewBox="0 0 430 230" className="sc-easel-svg" aria-hidden="true">
          <defs>
            <pattern id="sc-dots" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(240,237,232,0.10)" />
            </pattern>
          </defs>
          <rect width="430" height="230" fill="url(#sc-dots)" />
          {EDGES.map((e) => <path key={e.d} d={e.d} pathLength={1} className="sc-draw" style={at(e.t)} />)}
          {NODES.map((n) => (
            <g key={n.id} transform={`translate(${n.x - n.w / 2} ${n.y - n.h / 2})`}>
              <g className={`sc-node${n.tilt ? " is-tilt" : ""}`} style={at(n.t)}>
                <rect width={n.w} height={n.h} rx="10" />
                <text x={n.w / 2} y={n.h / 2 + 4} textAnchor="middle">{n.label}</text>
              </g>
            </g>
          ))}
          <g transform="translate(258 100)">
            <g className="sc-note" style={at(4300)}>
              <rect width="118" height="46" rx="4" />
              <text x="10" y="19">Enterprise leads</text>
              <text x="10" y="35">→ Alex, same day</text>
            </g>
          </g>
        </svg>
      </div>
    </Window>
  );
}
