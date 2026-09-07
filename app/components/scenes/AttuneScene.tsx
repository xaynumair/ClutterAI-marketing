"use client";

import { Icon } from "../Logo";
import { at, useClock, useTimeline, Window } from "./primitives";

// Attune — a recording is running: the waveform moves, transcript lines arrive
// on the left, and each one that contains a commitment becomes an action item
// on the right, with an owner.

const TRANSCRIPT = [
  { who: "Priya", text: "Let's ship the deck by Friday.", t: 500 },
  { who: "Alex", text: "I'll get legal to look at the contract.", t: 1900 },
  { who: "You", text: "I can send the numbers tonight.", t: 3300 },
];

const ITEMS = [
  { text: "Ship the deck", who: "Priya", when: "Fri", t: 1250, mine: false },
  { text: "Legal review of contract", who: "Alex", when: "", t: 2650, mine: false },
  { text: "Send the numbers", who: "You", when: "Tonight", t: 4050, mine: true },
];

export function AttuneScene() {
  const clock = useClock(12 * 60 + 4);
  const phase = useTimeline([5000]); // 1 = third item checked

  return (
    <Window app="Attune" title="Design sync" right={<span className="sc-pill is-rec"><i /> REC {clock}</span>}>
      <div className="sc-attune">
        <div className="sc-attune-col">
          <div className="sc-attune-head">
            <span className="sc-label">Transcript</span>
            <span className="sc-wave" aria-hidden="true">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}
            </span>
          </div>
          {TRANSCRIPT.map((l) => (
            <p key={l.text} className="sc-attune-line sc-in" style={at(l.t)}>
              <span className="sc-attune-who">{l.who}</span> {l.text}
            </p>
          ))}
        </div>

        <div className="sc-attune-col">
          <span className="sc-label">Action items</span>
          {ITEMS.map((it, i) => (
            <div key={it.text} className={`sc-attune-item sc-in${it.mine ? " is-mine" : ""}${i === 2 && phase >= 1 ? " is-done" : ""}`} style={at(it.t)}>
              <span className="sc-check"><Icon.Check /></span>
              <span className="sc-attune-item-text">
                {it.text}
                <span className="sc-dim">{" · "}{it.who}{it.when ? ` · ${it.when}` : ""}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
