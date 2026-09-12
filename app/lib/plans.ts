// The public plan ladder. Prices are copied from the app's catalogue
// (convex/planCatalogue.ts in the app repo, checked 7 Sep 2026). Features are
// described the way Claude's pricing page does it — relative usage and what
// each tier unlocks — not as question counts. If the app changes, change this
// file; nothing else on the site carries a price.

export type Plan = {
  id: string;
  name: string;
  group: "personal" | "team";
  blurb: string;
  monthly: number;           // USD per month (per seat for team plans)
  annual: number | null;     // USD per year; null = monthly only
  perSeat: boolean;
  minSeats?: number;
  popular?: boolean;
  note?: string;             // one line under the price
  plus?: string;             // "Everything in X, plus" header above the list
  features: string[];
  cta: string;
};

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    group: "personal",
    blurb: "After the trial — a real plan, not a teaser.",
    monthly: 0,
    annual: 0,
    perSeat: false,
    note: "Free forever",
    features: [
      "Chat with everything you've connected",
      "Notes and Chime, free forever",
      "Cadence and the Stride pipeline",
      "All 13 integrations",
      "Ask from Slack",
    ],
    cta: "Start free",
  },
  {
    id: "pro",
    name: "Pro",
    group: "personal",
    blurb: "For everyday work — writing, searching and light coding.",
    monthly: 19,
    annual: 192,
    perSeat: false,
    popular: true,
    plus: "Everything in Free, plus",
    features: [
      "Much more usage than Free",
      "Forge coding agent on Quick and Standard effort",
      "Pulse, Digest and Triage agents",
      "Folio, Attune, Facet and Easel",
      "Stride's after-meeting AI: proposals, follow-ups, research",
      "Attune meeting recording",
    ],
    cta: "Start free",
  },
  {
    id: "max5",
    name: "Max 5×",
    group: "personal",
    blurb: "For people who code with Forge most days.",
    monthly: 89,
    annual: null,
    perSeat: false,
    note: "Monthly only",
    plus: "Everything in Pro, plus",
    features: [
      "5× more usage than Pro",
      "Forge on Deep effort, its most capable mode",
      "Far more Attune recording time",
      "Higher ceilings on every app and agent",
    ],
    cta: "Start free",
  },
  {
    id: "max20",
    name: "Max 20×",
    group: "personal",
    blurb: "For heavy, all-day use across everything.",
    monthly: 200,
    annual: null,
    perSeat: false,
    note: "Monthly only",
    plus: "Everything in Pro, plus",
    features: [
      "20× more usage than Pro",
      "Forge on Deep effort, its most capable mode",
      "The most Attune recording time we offer",
      "The highest limits we offer",
    ],
    cta: "Start free",
  },
  {
    id: "team",
    name: "Team Standard",
    group: "team",
    blurb: "For teams who need shared knowledge and admin control.",
    monthly: 20,
    annual: 204,
    perSeat: true,
    minSeats: 3,
    popular: true,
    plus: "Everything in Pro, for every member",
    features: [
      "Shared documents, boards, tables and meetings",
      "Admin console with per-member usage",
      "Members never see billing",
      "Minimum 3 seats",
    ],
    cta: "Start a team",
  },
  {
    id: "teamPremium",
    name: "Team Premium",
    group: "team",
    blurb: "For teams where people code every day.",
    monthly: 99,
    annual: 1020,
    perSeat: true,
    minSeats: 3,
    plus: "Everything in Team Standard, plus",
    features: [
      "Max 5×-level usage for every member",
      "Forge on Deep effort for the whole team",
      "Assign per member — mix Standard and Premium seats",
    ],
    cta: "Start a team",
  },
];

export const PERSONAL_PLANS = PLANS.filter((p) => p.group === "personal");
export const TEAM_PLANS = PLANS.filter((p) => p.group === "team");

/** Rows of the comparison table. `null` renders as a dash. */
export type CompareRow = { label: string; values: Record<string, string | null> };
export const COMPARE: CompareRow[] = [
  { label: "Usage", values: { free: "Included", pro: "More than Free", max5: "5× Pro", max20: "20× Pro", team: "Pro-level, per member", teamPremium: "Max 5×-level, per member" } },
  { label: "Forge coding agent", values: { free: null, pro: "Quick + Standard", max5: "Deep", max20: "Deep", team: "Quick + Standard", teamPremium: "Deep" } },
  { label: "Pulse, Digest, Triage", values: { free: null, pro: "Included", max5: "Included", max20: "Included", team: "Included", teamPremium: "Included" } },
  { label: "Attune meeting recording", values: { free: null, pro: "Included", max5: "More time", max20: "Most time", team: "Included", teamPremium: "More time" } },
  { label: "Folio, Facet, Easel", values: { free: null, pro: "Included", max5: "Included", max20: "Included", team: "Included", teamPremium: "Included" } },
  { label: "Cadence, Chime, Stride pipeline", values: { free: "Included", pro: "Included", max5: "Included", max20: "Included", team: "Included", teamPremium: "Included" } },
  { label: "Stride after-meeting AI", values: { free: null, pro: "Included", max5: "Included", max20: "Included", team: "Included", teamPremium: "Included" } },
  { label: "Notes", values: { free: "Free forever", pro: "Included", max5: "Included", max20: "Included", team: "Included", teamPremium: "Included" } },
  { label: "Integrations", values: { free: "All 13", pro: "All 13", max5: "All 13", max20: "All 13", team: "All 13", teamPremium: "All 13" } },
  { label: "Shared documents, boards, notes", values: { free: null, pro: null, max5: null, max20: null, team: "Included", teamPremium: "Included" } },
  { label: "Admin console, per-member usage", values: { free: null, pro: null, max5: null, max20: null, team: "Included", teamPremium: "Included" } },
  { label: "Billing", values: { free: "—", pro: "Monthly or annual", max5: "Monthly", max20: "Monthly", team: "Monthly or annual", teamPremium: "Monthly or annual" } },
];
