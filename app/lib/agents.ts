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
    tagline: "Know your day before it starts",
    similar: "Like a morning stand-up",
    body:
      "Every morning, Digest reads your calendar, open threads, tickets, your pipeline and the last 24 hours across every tool — then hands you a headline, your top three priorities, who's waiting on you and what you promised. Items close themselves when the reply lands.",
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
    role: "Coding agent",
    tagline: "Build with your codebase already in context",
    similar: "Like Claude Code or Cursor",
    body:
      "Write, debug and refactor alongside your repos, issues and docs. Forge writes complete files you can preview, edit and save, versions every revision, reads screenshots of errors, searches the web when it helps, and lets you pick how much effort a question deserves.",
  },
];
