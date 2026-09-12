"use client";

import { Icon } from "../Logo";
import { at, Caret, Chip, useTimeline, useTyped, Window } from "./primitives";

// Chime — a task is typed the way you'd say it and the parse appears as
// chips; the Today list fills in; then a reminder rings as a notification
// with Done and Snooze on it.

export function ChimeScene() {
  const q = useTyped("Send Susan the deck tomorrow at 3pm #Work !!", 300, 30);
  const phase = useTimeline([2400, 3300, 5200]); // 1 = parsed, 2 = list, 3 = it rings

  return (
    <Window app="Chime" title="Today" right={<span className="sc-pill"><Icon.Bell /> 2 ring today</span>}>
      <div className="sc-chime">
        <div className="sc-facet-filter sc-in" style={at(100)}>
          <span className="sc-chime-plus">+</span>
          <span>{q.text}{!q.done && <Caret />}</span>
        </div>
        {phase >= 1 && (
          <div className="sc-chip-row sc-chime-parse">
            <Chip delay={0}><Icon.Calendar size={10} /> Tomorrow · 3:00 pm</Chip>
            <Chip delay={130}>#Work</Chip>
            <Chip delay={260} tone="accent">High priority</Chip>
            <Chip delay={390}><Icon.Bell size={10} /> Rings 15 min before</Chip>
          </div>
        )}

        {phase >= 2 && (
          <div className="sc-chime-list">
            <span className="sc-label sc-in" style={at(0)}>Today</span>
            <div className="sc-attune-item sc-in" style={at(120)}>
              <span className="sc-chime-bell"><Icon.Bell size={11} /></span>
              <span>Send the numbers <span className="sc-dim">· rings 18:00 · from Design sync</span></span>
            </div>
            <div className="sc-attune-item sc-in" style={at(300)}>
              <span className="sc-check"><Icon.Check /></span>
              <span>Book the venue before the 20th <span className="sc-dim">· from Notes</span></span>
            </div>
            <div className="sc-attune-item sc-in" style={at(480)}>
              <span className="sc-check"><Icon.Check /></span>
              <span>Acme renewal <span className="sc-dim">· 11:30 · Cadence</span></span>
            </div>
          </div>
        )}

        {phase >= 3 && (
          <div className="sc-chime-toast sc-pop" style={at(0)}>
            <span className="sc-chime-bell is-ringing"><Icon.Bell size={13} /></span>
            <div className="sc-chime-toast-text">
              <div className="sc-row-title">Send the numbers</div>
              <div className="sc-row-sub">Rang 18:00 · in your browser and on your phone</div>
            </div>
            <span className="sc-chime-btn">Done</span>
            <span className="sc-chime-btn is-ghost">Snooze 1 h</span>
          </div>
        )}
      </div>
    </Window>
  );
}
