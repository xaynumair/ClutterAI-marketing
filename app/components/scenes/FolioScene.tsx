"use client";

import { Icon } from "../Logo";
import { at, Caret, Chip, useTimeline, useTyped, Window } from "./primitives";

// Folio — a memo writes itself: the title types, the outline grows, paragraphs
// reveal like handwriting, and the facts it used are cited inline as they land.

export function FolioScene() {
  const title = useTyped("Q3 pricing memo", 250, 55);
  const phase = useTimeline([5200]); // 1 = saved

  return (
    <Window app="Folio" title="Documents" right={phase >= 1 ? <span className="sc-pill sc-pop">Saved · just now</span> : undefined}>
      <div className="sc-folio">
        <aside className="sc-folio-outline">
          <span className="sc-label sc-in" style={at(300)}>Outline</span>
          <span className="sc-in" style={at(700)}>Summary</span>
          <span className="sc-in" style={at(2200)}>What changed</span>
          <span className="sc-in" style={at(3600)}>Decision</span>
        </aside>

        <div className="sc-folio-page">
          <h3 className="sc-folio-title">
            {title.text}
            {!title.done && <Caret />}
          </h3>

          <p className="sc-line sc-reveal" style={at(1200)}>
            Annual billing moves to a flat 20% discount for every tier from 1 October.
          </p>
          <p className="sc-line sc-reveal" style={at(1750)}>
            Sarah confirmed the number in #finance on Tuesday
            <Chip delay={2500}><Icon.Slack size={10} /> #finance</Chip>
            and the pricing page was updated the same day.
          </p>

          <h4 className="sc-folio-h sc-in" style={at(3300)}>Decision</h4>
          <p className="sc-line sc-reveal" style={at(3700)}>
            Pro stays at <strong>$20 per seat</strong>; Team Premium adds the Forge allowance.
            <Chip delay={4400}><Icon.Notion size={10} /> Pricing v3</Chip>
          </p>
        </div>
      </div>
    </Window>
  );
}
