"use client";

import { at, Caret, useTimeline, useTyped, Window } from "./primitives";

// Notes — the free one. A page tree on the left, a page on the right: a title
// types, labels attach, a checklist fills in, and one item gets ticked when
// "pull the tasks out" runs.

export function NotesScene() {
  const title = useTyped("Ideas for the offsite", 250, 50);
  const phase = useTimeline([2400, 4200]); // 1 = labels on, 2 = tasks extracted

  return (
    <Window app="Notes" title="Notebooks" right={<span className="sc-pill">Free forever</span>}>
      <div className="sc-notes">
        <aside className="sc-notes-tree">
          <span className="sc-in" style={at(200)}>📓 Journal</span>
          <span className="sc-in is-child" style={at(400)}>2026-09-07</span>
          <span className="sc-in" style={at(600)}>🧪 Product</span>
          <span className="sc-in is-child is-on" style={at(800)}>Ideas for the offsite</span>
          <span className="sc-in is-child" style={at(1000)}>Interview notes</span>
        </aside>
        <div className="sc-notes-page">
          <h3 className="sc-folio-title">
            {title.text}
            {!title.done && <Caret />}
          </h3>
          <div className="sc-notes-labels">
            {phase >= 1 && (
              <>
                <span className="sc-notes-label sc-pop" style={at(0)}><i style={{ background: "#d97757" }} /> planning</span>
                <span className="sc-notes-label sc-pop" style={at(160)}><i style={{ background: "#96d7b4" }} /> team</span>
              </>
            )}
          </div>
          <p className="sc-line sc-reveal" style={at(1300)}>Two days, somewhere with no Wi-Fi in the meeting room.</p>
          <p className="sc-notes-check sc-in" style={at(1900)}><i /> Book the venue before the 20th</p>
          <p className={`sc-notes-check sc-in${phase >= 2 ? " is-done" : ""}`} style={at(2100)}><i /> Ask Priya for the budget line</p>
          <p className="sc-notes-check sc-in" style={at(2300)}><i /> Draft the agenda in Folio</p>
          {phase >= 2 && <span className="sc-chip is-accent sc-pop" style={at(0)}>3 tasks tracked</span>}
        </div>
      </div>
    </Window>
  );
}
