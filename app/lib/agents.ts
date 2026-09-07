// The eight agents, exactly as the app lists them
// (src/components/AgentsArea.tsx in the app repo, 7 Sep 2026). Taglines are
// the app's own. `status` mirrors the app's `available` / `teamsOnly` flags.

export type Agent = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  similar: string;
  body: string;
  status: "live" | "teams" | "soon";
};

export const AGENTS: Agent[] = [
  {
    id: "pulse",
    name: "Pulse",
    role: "Meeting intelligence",
    tagline: "Walk in already knowing what matters",
    similar: "Like a chief of staff",
    body:
      "Before any meeting, Pulse cross-references your Gmail, Slack and Notion or Confluence to brief you on who's involved, what was last discussed, and the open action items between you.",
    status: "live",
  },
  {
    id: "digest",
    name: "Digest",
    role: "Daily briefing",
    tagline: "Your day, summarised at a glance",
    similar: "Like a morning stand-up",
    body:
      "Every morning, Digest reads the last 24 hours across your integrations and writes back what needs you: commitments you made, replies you're owed, and questions still open. Items close themselves when the reply lands.",
    status: "live",
  },
  {
    id: "triage",
    name: "Triage",
    role: "Ticket intelligence",
    tagline: "Know what's on fire, first",
    similar: "Like a support lead",
    body:
      "Reads your Jira, Linear and Zendesk queue, ranks every open ticket by urgency, and drafts a suggested fix grounded in tickets you've already resolved.",
    status: "live",
  },
  {
    id: "forge",
    name: "Forge",
    role: "Codebase intelligence",
    tagline: "Every answer your codebase has, but never told you",
    similar: "Like Claude Code or Cursor",
    body:
      "Ask anything about your codebase. Forge searches GitHub, GitLab, Linear, Jira, Confluence and Slack at once, writes complete files into a side panel, versions every revision, and lets you pick how much effort a question deserves.",
    status: "live",
  },
  {
    id: "beacon",
    name: "Beacon",
    role: "Person lookup",
    tagline: "Surface contacts from any list",
    similar: "Like a research assistant",
    body:
      "Upload a CSV or Excel file of names and locations. Beacon finds and returns verified phone numbers for each contact — one by one, in the background.",
    status: "teams",
  },
  {
    id: "ripple",
    name: "Ripple",
    role: "Email discovery",
    tagline: "Find verified emails at scale",
    similar: "Like Hunter",
    body: "Turn a list of professionals into a list of verified business emails, ready for outreach.",
    status: "soon",
  },
  {
    id: "prism",
    name: "Prism",
    role: "Company intelligence",
    tagline: "Enrich companies with live data",
    similar: "Like Clearbit",
    body: "Append funding stage, headcount, tech stack and key contacts to any list of companies.",
    status: "soon",
  },
  {
    id: "echo",
    name: "Echo",
    role: "Data enrichment",
    tagline: "Fill gaps in any dataset",
    similar: "Like a very patient analyst",
    body: "Use AI cross-referencing to append missing fields across any structured data file.",
    status: "soon",
  },
];

export const STATUS_LABEL: Record<Agent["status"], string> = {
  live: "Live",
  teams: "Teams",
  soon: "Coming soon",
};
