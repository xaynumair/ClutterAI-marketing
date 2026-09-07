// The four agents that ship today, as the app lists them
// (src/components/AgentsArea.tsx in the app repo). Taglines are the app's own.
// Unreleased agents are not listed on the site.

export type Agent = {
  id: string;
  name: string;
  role: string;
  tagline: string;
  similar: string;
  body: string;
};

export const AGENTS: Agent[] = [
  {
    id: "pulse",
    name: "Pulse",
    role: "Meeting intelligence",
    tagline: "Walk in already knowing what matters",
    similar: "Like a chief of staff",
    body:
      "Before any meeting, Pulse cross-references your email, Slack and Notion or Confluence to brief you on who's involved, what was last discussed, and the open action items between you.",
  },
  {
    id: "digest",
    name: "Digest",
    role: "Daily briefing",
    tagline: "Your day, summarised at a glance",
    similar: "Like a morning stand-up",
    body:
      "Every morning, Digest reads the last 24 hours across your integrations and writes back what needs you: commitments you made, replies you're owed, and questions still open. Items close themselves when the reply lands.",
  },
  {
    id: "triage",
    name: "Triage",
    role: "Ticket intelligence",
    tagline: "Know what's on fire, first",
    similar: "Like a support lead",
    body:
      "Reads your Jira, Linear and Zendesk queue, ranks every open ticket by urgency, and drafts a suggested fix grounded in tickets you've already resolved.",
  },
  {
    id: "forge",
    name: "Forge",
    role: "Codebase intelligence",
    tagline: "Every answer your codebase has, but never told you",
    similar: "Like Claude Code or Cursor",
    body:
      "Ask anything about your codebase. Forge searches GitHub, GitLab, Linear, Jira, Confluence and Slack at once, writes complete files into a side panel, versions every revision, and lets you pick how much effort a question deserves.",
  },
];
