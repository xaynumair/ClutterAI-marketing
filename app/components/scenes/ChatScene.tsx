"use client";

import { Icon } from "../Logo";
import { at, Caret, Chip, useTimeline, useTyped, Window } from "./primitives";

// Chat — one input, automatic routing. A question types, a short "searching"
// beat, then an answer labelled with where it came from and the sources.

export function ChatScene() {
  const q = useTyped("What did we decide about pricing last week?", 250, 30);
  const phase = useTimeline([2100, 3000]); // 1 = searching, 2 = answered

  return (
    <Window app="Chat" title="Ask anything — your work or the world">
      <div className="sc-chat">
        <div className="sc-chat-q sc-in" style={at(100)}>
          {q.text}
          {!q.done && <Caret />}
        </div>

        {phase === 1 && (
          <div className="sc-chat-thinking sc-in">
            <span className="sc-dots"><i /><i /><i /></span>
            Searching Slack, Notion, Gmail…
          </div>
        )}

        {phase >= 2 && (
          <div className="sc-chat-a sc-in">
            <span className="sc-route sc-pop" style={at(120)}>From your sources</span>
            <p>
              You settled on <strong>$20 per seat</strong> with annual billing at 20% off. Sarah
              confirmed it in #finance on Tuesday; the Notion page was updated the same day.
            </p>
            <div className="sc-chip-row">
              <Chip delay={250}><Icon.Slack /> #finance</Chip>
              <Chip delay={370}><Icon.Notion /> Pricing v3</Chip>
            </div>
          </div>
        )}
      </div>
    </Window>
  );
}
