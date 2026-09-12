// The eight Workspace apps. Taglines and behaviour match the app
// (src/components/WorkspacePage.tsx and the per-app plan docs in the app
// repo, checked 12 Sep 2026). `similar` is a foothold, not a claim of
// compatibility. Order is the order they appear on the site.

export type AppId = "folio" | "attune" | "cadence" | "stride" | "facet" | "easel" | "chime" | "notes";

export type App = {
  id: AppId;
  name: string;
  role: string;
  similar: string;
  tagline: string;
  body: string;
  features: string[];
  plan: string;
  free?: boolean; // shown with a "Free forever" pill
  playsWith: { name: string; how: string }[];
};

export const APPS: App[] = [
  {
    id: "folio",
    name: "Folio",
    role: "Documents",
    similar: "Like Google Docs or Notion pages",
    tagline: "Write things your team can actually find later.",
    body:
      "A full editor rather than a text box: real tables you can resize, checklists, headings and formatting that survives export. Every document is embedded as you write, so it turns up in chat answers alongside your Slack threads and tickets — with the facts it used cited inline.",
    features: [
      "Tables, task lists, headings and inline formatting — no markdown syntax to learn",
      "Autosaves as you type; open a document on another device and it's there",
      "Share with your team in one click, or keep it private by default",
      "Export to Word, HTML or Markdown with tables intact",
      "Start from a template — meeting notes, project brief, to-do list — or a blank page",
      "Ask a question about any document without leaving it",
    ],
    plan: "Included on Pro, Max and Team plans",
    playsWith: [
      { name: "Chat", how: "every document you write becomes a source for answers" },
      { name: "Stride", how: "a weekly pipeline review or a proposal lands here as a document" },
    ],
  },
  {
    id: "attune",
    name: "Attune",
    role: "Meetings & classes",
    similar: "Like Otter.ai or Granola",
    tagline: "Listen once. Keep everything.",
    body:
      "Attune transcribes live — from your microphone or straight from a browser tab, with no bot joining the call — and writes the notes as it goes. Afterwards it pulls out who committed to what, and those commitments land in the same task layer your agents read from.",
    features: [
      "Live transcription from your mic or from a shared browser tab — no bot in the meeting",
      "Notes written as the meeting happens, not fifteen minutes after",
      "Ask questions about anything said, with the full transcript in context",
      "Class mode turns a lecture into flashcards for revision",
      "Action items become tracked follow-ups automatically",
      "A recording that overlaps a deal's meeting files itself in Stride",
    ],
    plan: "Included on Pro, Max and Team plans — recording time grows with the tier",
    playsWith: [
      { name: "Cadence", how: "start a recording from the meeting and it's already titled and linked" },
      { name: "Pulse", how: "what was promised in a meeting shows up in your next briefing" },
    ],
  },
  {
    id: "cadence",
    name: "Cadence",
    role: "Meetings",
    similar: "Like Google Calendar, with a memory",
    tagline: "Your meetings, with everything you know about the people in them.",
    body:
      "Cadence is where meetings live: when, who's coming, what's on the agenda, and what's known about each attendee. Every meeting has a lifecycle — needs prep, happening, needs follow-up, done — and Pulse is called at the two moments that matter, so you walk in briefed and walk out with the follow-up written.",
    features: [
      "Agenda, week, day and month views of your connected calendar and the meetings you create here",
      "Attendees, agenda and links on every meeting; a people directory that remembers roles and companies",
      "Invite anyone by email — people on ClutterAI see it in their own Cadence and can accept or decline",
      "A lifecycle strip with one primary action: Prepare, Record with Attune, Follow up",
      "Pulse briefings and follow-ups a click away, with their status shown on the meeting",
      "Share manual meetings and contacts with your team",
    ],
    plan: "Included on every plan; Pulse briefings come with Pro and above",
    playsWith: [
      { name: "Pulse", how: "Cadence owns the meeting, Pulse owns the intelligence about it" },
      { name: "Chime", how: "today's meetings sit in your Today view next to your tasks" },
    ],
  },
  {
    id: "stride",
    name: "Stride",
    role: "Sales",
    similar: "Like a CRM that fills itself in",
    tagline: "Your deals, kept moving. Nothing typed.",
    body:
      "A pipeline for people who sell: accounts, deals, stages and the people on each one. Meetings and recordings file themselves against the right deal. After every meeting Stride proposes the updates — next step, close date, who promised what — each with a verbatim quote from the transcript, and you approve them item by item. Each morning, Today tells you whose turn it is.",
    features: [
      "Pipeline board and table, a deal page with next step, timeline, people and memory with evidence",
      "Attune recordings and Cadence meetings file themselves against the deal",
      "After-meeting proposals, every item quoting the transcript — approve, edit or skip each one",
      "Follow-up emails drafted from the meeting, ready to send",
      "Ask chat “where are we with Acme?” and get the deal's status with its sources",
      "Account research with citations, a proof finder over your own docs, and a weekly review you can export to Folio",
    ],
    plan: "Pipeline included on every plan; after-meeting AI on Pro and above",
    playsWith: [
      { name: "Digest", how: "a Pipeline section in your morning briefing, deals that need you first" },
      { name: "Teams", how: "share a deal, comment with @mentions, hand it off, review the team's pipeline" },
    ],
  },
  {
    id: "facet",
    name: "Facet",
    role: "Data",
    similar: "Like Airtable or a smarter spreadsheet",
    tagline: "Ask your spreadsheet a question in English.",
    body:
      "Connect an Airtable base or upload a CSV or Excel file and Facet mirrors it live. Type what you want in plain language — \"customers in the EU who churned after less than three months\" — and it compiles that into a real filter you can inspect and adjust.",
    features: [
      "Live mirror of your Airtable bases, or upload a CSV or Excel sheet up to 25,000 rows",
      "Filter in plain English; see exactly what it understood",
      "Typed columns — dates, selects, numbers — with the right operators for each",
      "AI columns that fill themselves — categorise, extract, summarise per row",
      "Runs tell you the cost before they start, and skip rows already filled",
      "Group, summarise and save a view, then share it with your team",
    ],
    plan: "Included on Pro, Max and Team plans",
    playsWith: [
      { name: "Digest", how: "track rows and they become commitments you're reminded about" },
      { name: "Chat", how: "ask about any record without leaving the grid" },
    ],
  },
  {
    id: "easel",
    name: "Easel",
    role: "Canvas",
    similar: "Like Miro, FigJam or Excalidraw",
    tagline: "Draw the thing, or have it drawn for you.",
    body:
      "An infinite whiteboard for architecture, planning and thinking out loud. Describe a system and Easel lays it out as a real diagram — and it can ground that drawing in your own repos and docs rather than in guesswork.",
    features: [
      "Full drawing tools — shapes, arrows, freehand, text, images",
      "Describe a diagram and watch it laid out automatically",
      "Ground a diagram in your own data, so it reflects your architecture",
      "Cluster loose sticky notes into themes in one click",
      "Turn a board into tracked tasks",
      "See who else is on the board with you",
    ],
    plan: "Included on Pro, Max and Team plans",
    playsWith: [
      { name: "Forge", how: "a diagram drawn from the repo is one Forge asks the same questions of" },
      { name: "Chime", how: "sticky notes turned into tasks show up in your Today" },
    ],
  },
  {
    id: "chime",
    name: "Chime",
    role: "Tasks & reminders",
    similar: "Like Todoist, with a memory of what you promised",
    tagline: "Tasks and reminders that find you.",
    body:
      "Type a task the way you'd say it — “send Susan the deck tomorrow at 3pm #Work !!” — and Chime files the date, time, list and priority. Reminders ring as system notifications with sound, in your browser and on your phone, with Done and Snooze right on them. And it watches what you've promised across your tools, so the things you said you'd do turn up as suggestions.",
    features: [
      "Quick-add in plain English: dates, times, “every weekday”, lists and priorities, all parsed as you type",
      "Tasks and reminders kept distinct — a reminder always rings at its time",
      "Today shows what's overdue, what's due and today's meetings from Cadence",
      "Repeat, snooze, subtasks, priorities and lists with colours",
      "Notifications that reach you outside the app, with Done and Snooze buttons on them",
      "Suggested: commitments spotted in your tools and meetings, one click to track",
    ],
    plan: "Free forever, on every plan",
    free: true,
    playsWith: [
      { name: "Stride", how: "an approved next step becomes a task with the deal attached" },
      { name: "Attune", how: "action items with your name on them arrive as suggestions" },
    ],
  },
  {
    id: "notes",
    name: "Notes",
    role: "Notebooks",
    similar: "Like OneNote or Apple Notes",
    tagline: "The place for everything not ready to be a document.",
    body:
      "Nested pages, as deep as you like. Drag one page into another to reorganise, label anything, and search across the lot by keyword or by meaning. Notes stays free on every plan, forever — writing, organising and searching cost nothing to run, so we don't charge for them.",
    features: [
      "Unlimited nesting — drag to reorder or to nest inside another page",
      "Labels with colours and icons; filter by label; search by keyword or by meaning",
      "The same editor as Folio: tables, checklists, images, slash commands",
      "Templates and a daily note; pinned and recent pages",
      "Ask AI to summarise a whole notebook, or pull the tasks out of a page",
      "Download any page as Markdown or HTML",
    ],
    plan: "Free forever, on every plan",
    free: true,
    playsWith: [
      { name: "Chat", how: "your notes are searched alongside everything else" },
      { name: "Chime", how: "tasks pulled out of a page are tracked and remind you" },
    ],
  },
];

export const APP_COUNT = APPS.length;
