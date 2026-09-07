import type { Metadata } from "next";
import { MarketplacePage } from "../components/marketplace/MarketplacePage";

export const metadata: Metadata = {
  title: "Apps & agents",
  description:
    "Five apps — Folio, Attune, Facet, Easel, Notes — and eight agents, all reading from one memory of your tools. See each one doing its job.",
  alternates: { canonical: "/marketplace" },
};

export default function Page() {
  return <MarketplacePage />;
}
