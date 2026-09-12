"use client";

import { useEffect, useState, type ComponentType } from "react";
import { useReducedMotion } from "./primitives";
import { ChatScene } from "./ChatScene";
import { PulseScene } from "./PulseScene";
import { FolioScene } from "./FolioScene";
import { AttuneScene } from "./AttuneScene";
import { FacetScene } from "./FacetScene";
import { EaselScene } from "./EaselScene";
import { NotesScene } from "./NotesScene";
import { CadenceScene } from "./CadenceScene";
import { ChimeScene } from "./ChimeScene";
import { StrideScene } from "./StrideScene";

// ── SCENE DECK ───────────────────────────────────────────────────────────
// The same deck the sign-in page plays: one miniature of each surface doing
// its job. Chat is one scene of seven, because answers-with-sources is the
// foundation, not the product. Each scene owns its timeline; this file only
// sequences, cross-fades and shows the tab strip.

export type SceneId = "chat" | "pulse" | "folio" | "attune" | "cadence" | "stride" | "chime" | "facet" | "easel" | "notes";

export interface SceneDef {
  id: SceneId;
  label: string;
  caption: string;
  duration: number;
  Scene: ComponentType;
}

export const SCENES: SceneDef[] = [
  { id: "chat", label: "Chat", duration: 7000, Scene: ChatScene, caption: "Ask anything. Every answer says where it came from." },
  { id: "pulse", label: "Pulse", duration: 7200, Scene: PulseScene, caption: "Walk into meetings already knowing what matters." },
  { id: "folio", label: "Folio", duration: 8000, Scene: FolioScene, caption: "Documents that write themselves from what your team knows." },
  { id: "attune", label: "Attune", duration: 8000, Scene: AttuneScene, caption: "Live meeting notes, with the action items already assigned." },
  { id: "cadence", label: "Cadence", duration: 7600, Scene: CadenceScene, caption: "Your meetings, with everything you know about the people in them." },
  { id: "stride", label: "Stride", duration: 8200, Scene: StrideScene, caption: "Your deals, kept moving. Nothing typed." },
  { id: "chime", label: "Chime", duration: 8000, Scene: ChimeScene, caption: "Tasks and reminders that find you." },
  { id: "facet", label: "Facet", duration: 8000, Scene: FacetScene, caption: "Your tables, filtered in plain English." },
  { id: "easel", label: "Easel", duration: 7800, Scene: EaselScene, caption: "A whiteboard that draws from your own work." },
  { id: "notes", label: "Notes", duration: 7600, Scene: NotesScene, caption: "A notebook that's free forever, and feeds everything else." },
];

export const SCENE_BY_ID = Object.fromEntries(SCENES.map((s) => [s.id, s])) as Record<SceneId, SceneDef>;

const LEAVE_MS = 380;

export function SceneDeck({ ids, showCaption = true, showTabs = true, className = "" }: {
  ids?: SceneId[]; showCaption?: boolean; showTabs?: boolean; className?: string;
}) {
  const scenes = ids ? ids.map((id) => SCENE_BY_ID[id]) : SCENES;
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const duration = reduced ? 8000 : scenes[index].duration;
    const t1 = window.setTimeout(() => setLeaving(true), duration - LEAVE_MS);
    const t2 = window.setTimeout(() => {
      setLeaving(false);
      setIndex((i) => (i + 1) % scenes.length);
    }, duration);
    return () => { window.clearTimeout(t1); window.clearTimeout(t2); };
  }, [index, reduced, scenes]);

  const jump = (i: number) => {
    if (i === index) return;
    setLeaving(false);
    setIndex(i);
  };

  const { Scene, caption, id } = scenes[index];

  return (
    <div className={`sc-stage ${className}`}>
      <div key={id} className={`sc-scene${leaving ? " is-leaving" : ""}`} aria-hidden="true">
        <Scene />
        {showCaption && <p className="sc-caption">{caption}</p>}
      </div>
      {showTabs && (
        <div className="sc-tabs" role="tablist" aria-label="Product tour">
          {scenes.map((s, i) => (
            <button key={s.id} type="button" role="tab" aria-selected={i === index} className={`sc-tab${i === index ? " is-on" : ""}`} onClick={() => jump(i)}>
              {s.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** One scene, playing once; a Replay button restarts it. */
export function SceneCard({ id, className = "" }: { id: SceneId; className?: string }) {
  const [run, setRun] = useState(0);
  const { Scene } = SCENE_BY_ID[id];
  return (
    <div className={`sc-card ${className}`}>
      <div key={run} aria-hidden="true"><Scene /></div>
      <button type="button" className="sc-replay" onClick={() => setRun((r) => r + 1)} aria-label="Replay the demo">
        ↻ Replay
      </button>
    </div>
  );
}
