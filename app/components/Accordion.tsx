"use client";

import { useId, useState, type ReactNode } from "react";

// A plain, accessible accordion: one button per row, animated open height.
export type AccordionItem = { q: string; a: ReactNode };

export function Accordion({ items, className = "" }: { items: AccordionItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();
  return (
    <div className={`acc ${className}`}>
      {items.map((it, i) => {
        const isOpen = open === i;
        const id = `${base}-${i}`;
        return (
          <div key={it.q} className={`acc-item ${isOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="acc-q"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{it.q}</span>
              <span className="acc-plus" aria-hidden="true" />
            </button>
            <div id={id} className="acc-a" role="region" aria-hidden={!isOpen}>
              <div className="acc-a-inner">{it.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
