// The public plan ladder. Every number here is copied from the app's own
// catalogue — convex/planCatalogue.ts (PLAN_INFO) and src/lib/planCopy.ts
// (PLAN_FEATURES / PLAN_BLURB) in the app repo, checked 7 Sep 2026 — and the
// free tier from convex/usageLimits.ts (BUDGETS). If the app changes, change
// this file; nothing else on the site carries a price.

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
      "~10 chat questions a day",
      "All 13 integrations",
      "Notes — free forever",
      "Ask from Slack",
    ],
    cta: "Start free",
  },
  {
    id: "student",
    name: "Student",
    group: "personal",
    blurb: "The full workspace, at a student price.",
    monthly: 9,
    annual: 90,
    perSeat: false,
    note: "Needs a valid .edu address",
    features: [
      "~20 chat questions a day",
      "All Workspace apps and agents",
      "Student pricing, same depth",
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
    features: [
      "~34 chat questions a day",
      "Forge on Quick and Standard effort",
      "All Workspace apps and agents",
      "2 hours of Attune recording a month",
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
    features: [
      "~100 chat questions a day",
      "Forge on Deep effort — Opus, ~8 questions a day",
      "Everything in Pro, with far higher ceilings",
      "9 hours of Attune recording a month",
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
    features: [
      "~400 chat questions a day",
      "Forge on Deep effort — Opus, ~23 questions a day",
      "The highest limits we offer",
      "21 hours of Attune recording a month",
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
    features: [
      "Pro-level usage for every member",
      "Shared documents, boards and notes",
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
    features: [
      "Max 5×-level usage for every member",
      "Forge on Deep effort — Opus, for the whole team",
      "Everything in Team Standard",
      "Assign per member — mix Standard and Premium",
    ],
    cta: "Start a team",
  },
];

export const PERSONAL_PLANS = PLANS.filter((p) => p.group === "personal");
export const TEAM_PLANS = PLANS.filter((p) => p.group === "team");

/** Rows of the comparison table. `null` renders as a dash. */
export type CompareRow = { label: string; values: Record<string, string | null> };
export const COMPARE: CompareRow[] = [
  { label: "Chat questions (approx. per day)", values: { free: "10", student: "20", pro: "34", max5: "100", max20: "400", team: "34", teamPremium: "100" } },
  { label: "Forge coding agent", values: { free: null, student: "Quick + Standard", pro: "Quick + Standard", max5: "Deep (Opus)", max20: "Deep (Opus)", team: "Quick + Standard", teamPremium: "Deep (Opus)" } },
  { label: "Pulse, Digest, Triage", values: { free: null, student: "Included", pro: "Included", max5: "Included", max20: "Included", team: "Included", teamPremium: "Included" } },
  { label: "Attune recording", values: { free: null, student: "Included", pro: "2 h / month", max5: "9 h / month", max20: "21 h / month", team: "2 h / month", teamPremium: "9 h / month" } },
  { label: "Folio, Facet, Easel", values: { free: null, student: "Included", pro: "Included", max5: "Included", max20: "Included", team: "Included", teamPremium: "Included" } },
  { label: "Notes", values: { free: "Free forever", student: "Included", pro: "Included", max5: "Included", max20: "Included", team: "Included", teamPremium: "Included" } },
  { label: "Integrations", values: { free: "All 13", student: "All 13", pro: "All 13", max5: "All 13", max20: "All 13", team: "All 13", teamPremium: "All 13" } },
  { label: "Shared documents, boards, notes", values: { free: null, student: null, pro: null, max5: null, max20: null, team: "Included", teamPremium: "Included" } },
  { label: "Admin console, per-member usage", values: { free: null, student: null, pro: null, max5: null, max20: null, team: "Included", teamPremium: "Included" } },
  { label: "Beacon (contact lookup)", values: { free: null, student: null, pro: null, max5: null, max20: null, team: "Included", teamPremium: "Included" } },
  { label: "Billing", values: { free: "—", student: "Monthly or annual", pro: "Monthly or annual", max5: "Monthly", max20: "Monthly", team: "Monthly or annual", teamPremium: "Monthly or annual" } },
];

/** Months of the year you effectively pay for on an annual plan. */
export function annualMonths(p: Plan) {
  return p.annual ? Math.round((p.annual / p.monthly) * 10) / 10 : null;
}
