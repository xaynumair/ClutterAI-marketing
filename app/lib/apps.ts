// The five Workspace apps. Taglines and behaviour match the app
// (src/components/WorkspacePage.tsx and the per-app plan docs in the app
// repo). `similar` is a foothold, not a claim of compatibility.

export type App = {
  id: "folio" | "attune" | "facet" | "easel" | "notes";
  name: string;
  role: string;
  similar: string;
  tagline: string;
  body: string;
  features: string[];
  plan: string;
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
      { name: "Attune", how: "meeting notes land in a document you can keep editing" },
    ],
  },
  {
    id: "attune",
    name: "Attune",
    role: "Meetings & classes",
    similar: "Like Otter.ai or Granola",
    tagline: "Listen once. Keep everything.",
    body:
      "Attune transcribes live — from your microphone or straight from a browser tab — and writes the notes as it goes. Afterwards it pulls out who committed to what, and those commitments land in the same task layer your agents read from.",
    features: [
      "Live transcription from your mic or from a shared browser tab",
      "Notes written as the meeting happens, not fifteen minutes after",
      "Ask questions about anything said, with the full transcript in context",
      "Class mode turns a lecture into flashcards for revision",
      "Action items become tracked follow-ups automatically",
      "Every session is searchable afterwards, alongside the rest of your work",
    ],
    plan: "Included on Pro, Max and Team plans — recording time grows with the tier",
    playsWith: [
      { name: "Pulse", how: "what was promised in a meeting shows up in your next briefing" },
      { name: "Digest", how: "action items with your name on them appear in tomorrow's list" },
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
      { name: "Digest", how: "sticky notes turned into tasks show up in your daily list" },
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
    playsWith: [
      { name: "Chat", how: "your notes are searched alongside everything else" },
      { name: "Digest", how: "tasks pulled out of a page are tracked" },
    ],
  },
];
