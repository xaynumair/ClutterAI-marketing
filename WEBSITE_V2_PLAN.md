# Website v2 — from "a search bar over your apps" to "one workspace that knows your work"

Written 7 Sep 2026 after reading every page in this repo (`app/page.tsx`,
`about`, `marketplace`, `pricing`, `contact`, `privacy`, `terms`, `refund`,
`components/Navigation.tsx`, `components/SiteLoader.tsx`, `layout.tsx`,
`globals.css`), running the site locally, and checking every product claim
against the app repo (`../cutter-ai`: `convex/planCatalogue.ts`,
`src/lib/planCopy.ts`, `convex/usageLimits.ts`, `src/components/AgentsArea.tsx`,
`src/components/WorkspacePage.tsx`, `src/auth/*`, `AUTH_ONBOARDING_PLAN.md`).

## Status (7 Sep 2026, same day)

**Built.** Phases 0–6 below are implemented; `npm run build`, `tsc` and
`eslint` are clean; every route prerenders. Decisions taken on the user's
instruction: all seven plans shown, grouped "For one person" / "For teams";
coming-soon agents listed with a pill. Decisions taken by judgement: sign-in
headline kept, serif hero, door loader once per session, nav relabelled with
URLs unchanged, no analytics, Tailwind and the three unused packages removed,
14-day trial, OneDrive/Teams not listed (hidden in the app pending Microsoft
publisher verification).

**Legal pages were rewritten on the user's later instruction** (the original
"do not touch" rule was lifted for this pass). §2 below is kept as the record
of what was wrong; every item in it is now addressed except two that only
the user can settle: the legal entity name (no LLC/Inc. is stated anywhere)
and the refund rule for credit packs, which was written conservatively as
"not refundable once any credit is used" and should be confirmed.

**Shipped:**
- Foundation: tokens + global stylesheet, `next/font` (Bricolage Grotesque,
  Figtree; Georgia serif), per-route `metadata`, OG image, sitemap, robots,
  404, page transition, shared Footer, relabelled Nav, first-visit loader,
  dependency cleanup, data files in `app/lib/`.
- Home, Apps & agents (`/marketplace`), Pricing, Why ClutterAI (`/about`),
  Support (`/contact`) rebuilt as described in §4; seven scenes ported from the
  sign-in page plus a new Notes scene; "Search was the easy part" and "A
  Tuesday with ClutterAI" built as specified.
- Support form posts to `app/api/contact/route.ts` (Resend REST, honeypot,
  rate limit). **Needs `RESEND_API_KEY` in the deployment**; until then the
  page falls back to a pre-filled mailto and says so.
- `.well-known/microsoft-identity-association.json` renamed correctly.

**Not done / follow-ups:** Lighthouse run on the deployed site; a real-browser
pass on the below-the-fold animations (the preview pane cannot screenshot
them); OneDrive and Teams integrations once Microsoft verification clears;
the two legal questions above.

Original plan follows.

The one decision already made upstream: the sign-in page now says
**"One workspace that knows your work."** with the subtitle *"Chat, documents,
meetings, tables and a team of agents, all sharing one memory of your Gmail,
Slack, GitHub and more."* The website has to tell the same story, or people
arrive at sign-in and meet a different product.

---

## 0. The core problem in one table

| Surface | What the site says today | What the product actually is (from the code) |
|---|---|---|
| Hero | "Stop searching. Start knowing." + "Connect every tool… ask anything in plain English" | A workspace: Chat, five apps (Folio, Attune, Facet, Easel, Notes), eight agents, Teams with a shared memory |
| How it works (About) | Two steps: Connect apps → Ask questions | Connect → one memory → *write, meet, filter, draw, code, and be briefed* from it |
| "Values" strip (Home) | Connect in seconds / Ask anywhere / Get sourced answers | All three are about retrieval. Nothing about making things |
| Agents | "Four agents, always working" | Eight in `AgentsArea.tsx`: Pulse, Digest, Triage, Forge (live), Beacon (live, Teams-only), Ripple, Prism, Echo (coming soon, Teams-only) |
| Chat modes | "Two modes: search *your* data, or switch to General" | Modes were removed on 5 Sep. One input, automatic routing, a Web toggle, and every answer labelled "From your sources / General knowledge / From the web" |
| Free plan | "Generous free usage every 5 hours · All agents included · Forge starter allowance · Boosted first 48 hours" and, on the same page, "3 questions every 12 hours" | **14-day full Pro trial**, then Free = chat only (~10 questions/day) + Notes free forever. Forge, agents and Attune are paid-only (`usageLimits.ts` BUDGETS) |
| Plans | Free / Pro $19 ($190 yr) / Team $15 ($150 yr) | Student $9 · Pro $19 ($192 yr) · Max 5× $89 · Max 20× $200 · Team Standard $20/seat ($204 yr, min 3) · Team Premium $99/seat ($1,020 yr) (`planCatalogue.ts`) |
| Security (About) | "End-to-End Encryption", "SOC 2 & HIPAA Compliant" | TLS + encryption at rest (the server must read content to embed it, so it is not E2E). No SOC 2 or HIPAA attestation exists anywhere in the app or the policies. **These are false claims and a legal exposure — remove first.** |
| Contact form | "Message sent ✓" | `handleSubmit` only flips local state. Nothing is sent anywhere. Every message ever submitted was dropped. |

Retrieval with citations is the foundation. The site currently sells the
foundation and never shows the house.

---

## 1. Page-by-page audit (what exists, what's wrong)

### 1.1 Home (`app/page.tsx`, 1,386 lines)
Good bones: warm dark palette, alternating `#141413` / `#262624` bands,
IntersectionObserver reveals with a failsafe, six animated "demo" mocks that
play on scroll, a logo marquee, a sticky section-tab bar. Keep the mechanics.

Problems:
- Headline, subtext, rotating hero questions, "Values" strip, final CTA
  ("Stop wasting time searching") are all search-first.
- The Workspace bento comes *after* four long agent sections and the
  integrations grid — the most differentiating part of the product is the
  last thing on the page.
- "Four agents" (there are eight). Agent role lines disagree with the app's own
  taglines (e.g. Triage is "ticket intelligence" in-app, "signal from noise"
  here).
- "1.8 hrs/day … McKinsey" on Home vs "2.5 hours / 650 hours / ~30%" on About.
  Pick one figure and one source; the two pages currently contradict each other.
- Hero questions and demo copy are fine, but nothing on the page is *fun*:
  no wit, no specifics beyond fictional threads, no moment that makes someone
  smile or forward the link.
- Airtable and Zendesk logos are hot-linked from `logosandtypes.com` and
  `simpleicons.org` (third-party requests, can break, privacy).
- "Powered by … Hostinger / Microsoft" chips add nothing and Anthropic is
  absent from the privacy policy's processor list (see §2).
- Text at 16–28 % opacity (`.hl-dim`, footnotes, `.value-num`) is below WCAG AA
  contrast.
- No footer on any page except Home and the legal pages.

### 1.2 About → nav label "Overview" (`app/about/page.tsx`, 930 lines)
- Different design language from Home: orbs, gradient badges, glowing hover
  shadows, `Unbounded` 900 headline. Reads as a different site.
- Hero: "Building the Future of Knowledge Work" + "find information instantly
  across all their connected apps" — search-first, and generic.
- Mission stats (2.5 h, 650 h, ~30 %, 1 in 5) conflict with Home (see above)
  and the "$24,000 a year per person" maths is presented as fact.
- "How It Works" is two steps. Step 2 crams Forge/Triage/Digest/Pulse into one
  sentence.
- "What ClutterAI Does" is a 10-card wall of text with the same card style as
  the security grid beneath it.
- Security cards: **End-to-End Encryption, SOC 2 & HIPAA Compliant** (false),
  "within 30 days, guaranteed" (policy says backups purge within 90).
- Both CTA buttons are `color: #fff` on a cream gradient — white text on
  near-white. Illegible.
- No footer.

### 1.3 Marketplace (`app/marketplace/page.tsx`, 392 lines)
The best page on the site: honest catalogue, "Like Google Docs / Otter /
Airtable / Miro" footholds, sticky rail, accent colour `#D97757` (the same
terracotta the sign-in page uses). Keep its structure and voice; it is the
template for the tone of the whole site.

Problems:
- Static. Five apps, zero motion, no visual of any app. The sign-in page
  already has six animated scenes for exactly these apps (`src/auth/scenes/`)
  — port them.
- Agents: four of eight. No availability flags ("Teams only", "coming soon").
- Uses `#0A0A0A` background while Home uses `#141413`. Three different page
  backgrounds across the site (Home/About `#141413`, Marketplace/Pricing/
  Contact `#0A0A0A`, legal `#141413` + `#262624`).
- CTA copy "Try all of it for 14 days. Every app, every agent, no card. Chat and
  Notes stay free afterwards." is the only place on the site that describes
  the trial correctly. It should be everywhere.
- No footer.

### 1.4 Pricing (`app/pricing/page.tsx`, 451 lines)
- Every number is wrong or missing (table in §0). Annual "Save 17 %" is also
  wrong (192/228 = 15.8 %; Team 204/240 = 15 %). Say "2 months free" or "~16 %".
- Free card says "All agents included" and "Forge (starter allowance)" — both
  paid-only in the app. Someone who signs up for those on Free will feel lied
  to on day 15.
- The annual toggle *hides* the Team plan (`visiblePlans` filter). Team has an
  annual price ($204/seat).
- FAQ: "3 questions every 12 hours" (stale `rateLimits.ts` figure; the live
  metering is `usageLimits.ts`) and "we'll refund you in full" without the
  Refund Policy's *fewer than 20 queries* condition — the pricing page must
  match the policy, not the other way round.
- Student, Max 5×, Max 20×, Team Premium do not appear. Decision needed (§9).
- Team CTA goes to `app.clutter-ai.com` root rather than sign-up.
- Nothing explains what "usage" means. The app's own copy ("~34 chat questions
  a day", "2 hours of Attune recording a month") is human and should be reused
  verbatim from `src/lib/planCopy.ts`.
- No trial mention, no footer, `← Back` link instead of the nav.

### 1.5 Support / Contact (`app/contact/page.tsx`, 388 lines)
- Form is a mock (see §0). Needs a route handler; the app already uses Resend.
- No self-serve answers. The questions people actually have (why does my card
  say Lemon Squeezy; how do I disconnect Slack; how do I delete my data; how
  do refunds work) are all answered in the legal pages but never surfaced.
- `app/contact/.gitignore` is a stray copy of the root ignore file.

### 1.6 Navigation, loader, layout, footer
- `layout.tsx` metadata: title `CLUTTERAI`, description **"Generated by
  CLUTTERAI Team"**. That is the Google snippet and the link preview for the
  whole site today. No per-page titles (every page is a client component
  with no `metadata`), no OpenGraph image, no `sitemap.ts`, no `robots.ts`,
  no canonical.
- `layout.tsx` loads Geist, Geist Mono and Inter via `next/font`, then every
  page `@import`s Figtree / Bricolage Grotesque / Unbounded from Google Fonts
  inside `styled-jsx` (9 imports across the site). Result: render-blocking
  font CSS, FOUT, duplicate requests, a third-party request on every page
  view (relevant to §2.1 item 7), and the reason `SiteLoader` exists — its own
  comment says it covers "styled-jsx CSS arriving after the HTML".
- `SiteLoader` "doors" (650 ms minimum, 900 ms slide, 1.1 s before unmount)
  on every hard load. Nice once; a tax on every return visit.
- Nav labels: "Overview" for the About page is vague. "Log in" opens the app in
  a new tab (`target="_blank"`), which is unusual for a product's own login.
- `globals.css` still carries the old purple neon hover theme (`#9b30ff`),
  Tailwind v3 `@tailwind` directives under Tailwind v4, and `body { font-family:
  Arial }`. Nothing in `app/` uses a Tailwind utility class; `tailwind.config.js`
  and `postcss.config.js` inside `app/` are stray.
- `framer-motion`, `lucide-react`, `react-icons` are dependencies with zero
  imports.
- `public/.well-known/microsoft-identity-association (1).json` — the " (1)" is
  from a browser download. Microsoft looks for
  `/.well-known/microsoft-identity-association.json` exactly, so publisher
  domain verification for the Entra app `c0ab325b-…` cannot currently succeed.
- `README.md` is the create-next-app default.

---

## 2. Legal pages — problems noticed (READ ONLY, not edited)

These are for the user to act on. Nothing below has been changed.

### 2.1 Privacy Policy (`app/privacy/page.tsx`, last updated 28 Feb 2026)
1. §2.2 lists five connected services (Drive, Gmail, Slack, Calendar, Notion).
   The Terms and the site list thirteen: GitHub, GitLab, Linear, Jira,
   Confluence, Trello, Airtable, Zendesk are missing here.
2. §3.1 names **OpenAI GPT-4** and Pinecone as the AI processors. The app now
   runs on Anthropic Claude models (Haiku 4.5, Sonnet 5, Opus 5 per
   `modelRouter`), `gpt-4.1-mini` for some agents, **Deepgram** for Attune
   transcription, and **Resend** for email. §4.1 (sub-processors) has the same
   gap: Anthropic, Deepgram, Resend absent.
3. Nothing about **audio**: Attune records microphone and tab audio and stores
   transcripts (and, per `ATTUNE_V2_PLAN.md`, will keep audio for playback).
   Recording other people needs a consent statement and a "you are responsible
   for consent" clause; several US states and the EU require all-party consent.
4. Nothing about **uploaded files** (CSV/Excel for Facet and Beacon) or about
   **Beacon returning third parties' phone numbers** — that is personal data of
   people who are not users and needs a stated legal basis.
5. Nothing about **Teams**: what teammates can see (the onboarding says
   "Everything your team has shared is searchable by you now"), what happens
   to a member's data when they are removed, who the controller is.
6. §2.1 "Password (encrypted)" contradicts §5 "hashed and salted" — say hashed.
7. Scope is `app.clutter-ai.com` only. The marketing site currently makes
   Google Fonts requests on every page (IP address sent to Google; a German
   court ruled this needs disclosure or consent in 2022). Self-hosting fonts
   (§6) removes the problem; if analytics are ever added, the policy must say
   so (it currently promises no tracking cookies — good, keep it true).
8. Gmail and Drive use restricted Google scopes. Google's verification expects
   the **Limited Use** disclosure verbatim ("…use and transfer to any other app
   of information received from Google APIs will adhere to the Google API
   Services User Data Policy, including the Limited Use requirements"). It is
   not there.
9. §11 third-party policy links: only Google, Slack, Notion.

### 2.2 Terms of Service (`app/terms/page.tsx`)
1. §2 "Description of Service" omits the Workspace apps (Folio, Attune, Facet,
   Easel, Notes), Beacon, Automations and Teams' shared memory.
2. §4.1 plan list is a generation old: "Free Tier: 3 questions every 12 hours",
   "Student $9", "Individual $19", "Team $15/member". Live catalogue: Student
   $9/$90, Pro $19/$192, Max 5× $89, Max 20× $200 (monthly only), Team Standard
   $20/seat ($204 yr, min 3), Team Premium $99/seat ($1,020 yr). No mention of
   the 14-day full-access trial, rolling 5-hour usage windows and weekly caps,
   credit packs, or that Forge/agents/Attune are paid-only.
3. §4.3 "Subscriptions are billed monthly" — annual billing exists; upgrades
   are prorated immediately and downgrades scheduled for period end
   (`billingPlanChange.ts`). Worth stating.
4. §4.6 promises a 30-day money-back guarantee with no conditions; the Refund
   Policy adds "fewer than 20 queries". §16.1 says the Refund Policy is part of
   the agreement, so the documents conflict on their face — say which controls.
5. §8 third-party list lacks Anthropic, Deepgram, Resend, Atlassian, GitHub,
   GitLab, Linear, Trello, Airtable, Zendesk (and Microsoft if OneDrive/Teams
   ship).
6. No Team clauses: content ownership inside a team, effect of member removal,
   owner's responsibility for members, visibility of shared content.
7. No Attune clause placing recording-consent responsibility on the user.
8. "ClutterAI is operated by ClutterAI" — no legal entity name (LLC / Inc.)
   anywhere, only the Sheridan, WY address.
9. Internal inconsistency to confirm in the app: `entitlements.ts` comments say
   "21-day trial", `usageLimits.ts` sets `TRIAL_DAYS = 14`. The Marketplace page
   says 14. The Terms should state whichever is true.

### 2.3 Refund Policy (`app/refund/page.tsx`)
1. Plan names "Student, Individual, or Team" and "Free Tier (3 questions every
   12 hours)" (twice) are outdated — same catalogue as above.
2. Nothing on annual purchases (a $1,020 annual Team Premium seat under the
   same 30-day / 20-query rule?) or on credit packs.
3. Pricing-page FAQ contradicts this policy (no 20-query cap mentioned). Fix
   on the pricing page (in scope), not here.
4. "Team plan refunds require approval from the team administrator" — fine,
   but say what happens to the seats.

---

## 3. The story the site should tell

### 3.1 One line, everywhere
**One workspace that knows your work.** (already live on sign-in; keep the
site and the app in one voice). Alternatives if the user wants a change on
the site only — see §9.

Subtitle for the site (slightly more playful than sign-in, same facts):
*Chat, documents, meetings, tables, a whiteboard and a team of agents —
all sharing one memory of your Gmail, Slack, GitHub and the ten other tools
you're already paying for.*

### 3.2 The argument, in order
1. **The problem, made human.** Not "1.8 hours searching" as a stat card, but
   the Tuesday everyone recognises: the decision that lives in a Slack thread
   from March, the spreadsheet nobody can filter, the meeting where you promised
   something you've forgotten. One figure, one source, cited once
   (recommend McKinsey 2012: 1.8 h/day ≈ 19 % of the week; drop the 2.5 h/650 h
   set, which is a different study).
2. **Search was the easy part.** Any tool can find the file. ClutterAI is where
   the file gets *written*, the meeting gets *minuted*, the table gets
   *filtered*, the diagram gets *drawn*, the follow-up gets *chased* — and
   every one of those feeds the same memory. This is the section that kills
   the "search tool" impression.
3. **A Tuesday with ClutterAI.** The whole product as one scrolling day:
   8:55 Pulse briefs you · 9:00 Attune listens · 10:30 Folio writes the memo
   with citations · 12:00 Facet answers "customers who churned after May" ·
   14:00 Forge ships the migration · 17:30 Digest tells you what you still
   owe. Six beats, six apps/agents, one memory.
4. **The apps** (five) and **the agents** (eight, honestly flagged) — each with
   its "Like X" foothold. Marketplace goes deep; Home stays at one line each.
5. **Ask, anywhere.** Chat in the app or in Slack; every answer labelled with
   where it came from; the Web toggle when you want the world instead of your
   work.
6. **Teams.** One shared memory, admin console, per-member usage, members never
   see billing.
7. **Your data stays yours.** True claims only.
8. **14 days of everything, then a real free plan.** Then the CTA.

### 3.3 Voice rules ("more fun to read")
- Specific beats grand: name the PR number, the channel, the amount. The
  existing demos already do this well; the headings don't.
- One joke per section, never in the headline. Wry, not wacky. (Example
  kicker under the integrations marquee: *"Thirteen logins. One memory."*)
- "Like Otter", "Like Miro", "Like Claude Code" footholds stay — they explain
  an app faster than a paragraph.
- Never promise what the code doesn't do. "Coming soon" is an honest label;
  "All agents included" on Free was not.
- Numbers are tables or count-ups, not prose.
- Address the reader as *you*; the product as *it*, never *we* except in the
  security section and About.

---

## 4. Page-by-page plan

### 4.1 Home — new section order
| # | Section | Content | Motion (see §5 vocabulary) |
|---|---|---|---|
| 1 | Hero | Serif headline (matches sign-in), subtitle, CTA "Start your 14 days" + "See the apps →", footnote "No card · full Pro for 14 days · Notes free forever". Right: the **scene deck** ported from `src/auth/scenes/` (Chat · Pulse · Folio · Attune · Facet · Easel) in a window card with a tab strip. | `rise` stagger on the left; scene deck loops (~40 s); blobs drift. |
| 2 | Integrations marquee | Existing marquee, inline SVGs only, kicker "Thirteen logins. One memory." | Marquee (existing), pause on hover. |
| 3 | Search was the easy part | Two-beat comparison: a search box types "Q3 pricing memo" → flat list of six links (beat 1, fades and greys out) → the same query becomes a Folio document writing itself with a citation chip "from #finance · Notion" (beat 2). Copy: three sentences. | `type`, `line-fill`, `chip-pop`; plays once on view, replay button. |
| 4 | A Tuesday with ClutterAI | Scroll-pinned: left column is a sticky clock (08:55 → 17:30) and one sentence; right column swaps a card per beat (Pulse brief, Attune transcript + action items, Folio memo, Facet grid re-sorting, Forge diff, Digest "waiting on you (2)"). | Scroll-linked progress (IntersectionObserver per beat), `row-fade`, `draw` for the Facet re-sort, count-up on the clock. Reduced motion: all six cards stacked, fully rendered. |
| 5 | Apps bento | Existing 6-card bento (Attune, Forge lead; Folio, Facet, Easel; Notes full-width "free forever"). Each card gets a **hover peek**: Facet rows re-order, Easel edges draw, Attune waveform pulses, Folio a line fills, Forge a diff line turns green, Notes a page nests. | Hover-only micro-animations, 400 ms, no JS. |
| 6 | Agents | "Eight agents. Four of them are working right now." 8 tiles: Pulse, Digest, Triage, Forge (live · pulsing dot), Beacon (live · Teams), Ripple, Prism, Echo (coming soon). App taglines verbatim from `AgentsArea.tsx`. | Tile flip on hover to the tagline; status dot `pulse`. |
| 7 | Ask, anywhere | Merge today's "Ask" and "Slack" sections: one input, automatic routing, answer labels ("From your sources" / "General knowledge" / "From the web"), Web toggle, @ClutterAI in Slack with "only visible to you". Existing Slack demo stays. | Existing demo animation; add the label chip popping in. |
| 8 | Teams | Shared memory, invite by email, admin console with per-member usage, members never see billing. One mock: admin console with three member rows and usage bars filling. | `row-fade` + bar `fill`. |
| 9 | Your data stays yours | Read-only OAuth by default, private answers even in shared channels, disconnect removes indexed data within 30 days, no training on your data. Remove Powered-by chips. Link to policy. | `rise`. |
| 10 | Numbers | 13 tools · 5 apps · 8 agents · 14-day trial · 1.8 h/day (cited) | count-up on view. |
| 11 | Pricing teaser | Three cards (Free / Pro / Team Standard) with the real numbers + "See all plans →" | `rise` stagger. |
| 12 | Final CTA | "Fourteen days of all of it." Big logo, slow 90° rotation on hover. | `float`. |
| 13 | Footer | Shared component (§4.6). | — |

Sticky section tabs stay, relabelled: Why · A day · Apps · Agents · Ask · Teams · Security · Pricing.

### 4.2 About → "Why ClutterAI" (rename nav label from "Overview")
Turn it from a feature wall into a short editorial page:
1. Hero: "The tools won. The knowledge lost." + three sentences.
2. The problem: one stat (same as Home), one source, and the money version as
   a **calculator** the reader can play with (team size × salary → hours and
   dollars a year), instead of asserted figures.
3. How it works, three steps with an **animated diagram**: tools on the left
   → one memory in the middle → apps and agents on the right, edges drawing
   as you scroll (`draw` primitive; SVG stroke-dashoffset like the Easel
   scene).
4. What you can do from the first minute (from the onboarding's own "Done"
   screen): chat works before anything is connected; Notes are free; connect
   one tool and the rest lights up.
5. Who it's for: individuals, students (Student plan), teams — one line each.
6. Security, honest version (same block as Home). Remove SOC 2 / HIPAA / E2E.
7. Company: Sheridan, WY, support address, link to Support.
Fix: CTA buttons `color` → `#141413`; unify background/tokens with Home; drop
the orbs in favour of the shared background.

### 4.3 Marketplace → "Apps & Agents"
Keep the layout and voice. Add:
- One **live scene** per app at the top of its entry (the sign-in scenes,
  scaled up; Notes gets a new small scene: a page nesting under another and a
  label chip attaching). Each replays on hover or via a "Replay" button.
- Per-app "Plays well with" cross-links (Attune → Pulse follow-ups, Facet →
  Digest tracking, Folio → Chat citations, Easel → Forge/GitHub grounding).
- Agents: all eight, with `available` / `teamsOnly` flags rendered as pills
  ("Teams", "Coming soon"), taglines verbatim from the app.
- "What's free" strip: Notes free forever; Chat ~10/day after the trial;
  everything else on Pro and above (matches BUDGETS).
- Rail becomes Apps + Agents.
- Shared background and footer.

### 4.4 Pricing — mirror the app catalogue exactly
- Source the numbers from one file (`app/lib/plans.ts`) that copies
  `planCatalogue.ts` + `planCopy.ts` bullets verbatim, with a comment saying
  where they came from and the date.
- Cards: Free · Pro · Max (5× / 20× as a segmented control inside one card,
  monthly only) · Team (Standard / Premium segmented, per seat, min 3).
  Student as a small row beneath ("$9 with a .edu address").
- Toggle monthly/annual: price **tweens** between values; "2 months free"
  badge on annual; Max shows "monthly only".
- "What happens after 14 days" strip: full Pro during the trial → Free keeps
  chat (~10/day) + Notes; no card; nothing is deleted.
- Usage in human terms, reusing the app's bullets: "~34 chat questions a day",
  "Forge on Quick and Standard effort", "2 hours of Attune recording a month".
- Comparison table (sticky header) — Chat / Forge effort / Agents / Attune
  minutes / Apps / Teams features / Support.
- Team **seat calculator**: seats × price × cycle, min 3, shows the annual
  saving.
- FAQ accordion (animated height), corrected: refunds link to the Refund
  Policy and state the 30-day / fewer-than-20-queries rule; "your statement
  will say Lemon Squeezy"; cancel anytime keeps access to period end;
  downgrades happen at renewal.
- CTAs: Free/Pro/Max → `app.clutter-ai.com/signup`; Team → signup (confirm
  whether the app accepts a `?plan=team` hint; if not, plain signup).

### 4.5 Support
- Make the form real: `app/api/contact/route.ts` → Resend (env
  `RESEND_API_KEY`, `SUPPORT_TO=support@clutter-ai.com`), honeypot field,
  rate-limit by IP, success state only after a 200. Fallback link
  `mailto:support@clutter-ai.com` always visible.
- "Quick answers" accordion above the form: card statement says Lemon
  Squeezy; refund rules (link); disconnect an integration; delete my data;
  invite my team; response times.
- Keep the two-column layout; add footer; drop the stray `.gitignore`.

### 4.6 Shared: navigation, footer, layout
- Nav: Home · Why ClutterAI · Apps & Agents · Pricing · Support · **Log in**
  (same tab) · **Start free** (primary, links to signup). Keep the pill.
- Footer component used on every non-legal page: product links, Apps,
  Agents, Pricing, Support, Terms · Privacy · Refunds, "© 2026 ClutterAI ·
  Sheridan, WY", the asterisk logo. (Legal pages keep their own footer —
  they are not edited.)
- `app/layout.tsx`: real `metadata` (title template `%s · ClutterAI`,
  description, OpenGraph, Twitter card, theme-color), `next/font` for the
  display and body faces, global stylesheet with tokens.
- Page transitions: `app/template.tsx` with a 200 ms fade/rise, replacing
  the door loader for client-side navigations.
- `SiteLoader`: once `next/font` + a global stylesheet remove the FOUC, the
  loader is a brand moment, not a fix. Recommend: keep it for the first visit
  per session only (`sessionStorage` flag), shorten to ~450 ms, or drop it
  (decision in §9).
- Add `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`
  (generated with `next/og`: logo + "One workspace that knows your work."),
  a `not-found.tsx` in the site's style.

---

## 5. Animation system

The sign-in page established a vocabulary; the site should reuse it so the
app and the marketing feel like one thing. Port `src/auth/scenes/primitives.tsx`
into `app/components/motion/` (the marketing site cannot import from the app
repo) and keep the two in step by hand.

Primitives (all CSS keyframes; JS only for scene timers, typed text and the
IntersectionObserver trigger):
| Name | What | Where used |
|---|---|---|
| `rise` | opacity 0→1, translateY 14px→0, 70 ms stagger | every section entrance |
| `line-fill` | `clip-path: inset(0 100% 0 0)` → `inset(0)` | text lines in Folio/Attune scenes, "search was the easy part" |
| `chip-pop` | scale 0.9→1 + fade | source chips, labels, "coming soon" pills |
| `row-fade` | opacity + translateY 6px, per-row delay | Pulse/Digest/Team rows |
| `draw` | SVG `stroke-dashoffset` to 0 | Easel scene, "how it works" diagram |
| `type` | JS-driven typed text with caret | hero question, search box, Facet filter |
| `fill` | width 0→100 % | progress and usage bars |
| `count-up` | JS requestAnimationFrame number tween on view | stats, pricing toggle, seat calculator |
| `pulse` | opacity 1→0.4 loop | "live" status dots |
| `float` | translateY ±9 px loop | logo in the final CTA (exists) |

Rules:
- One card size, one radius (20 px), one header chip style across every scene
  and mock. Only the content differs. This is what makes six demos read as one
  product.
- Scenes play when ≥40 % visible, once; a small "Replay" affordance on hover.
  Nothing loops forever except the hero deck, the marquee and status dots.
- `prefers-reduced-motion`: every scene renders its final frame; the hero
  deck cross-fades every 8 s; count-ups show the final number.
- Budget: no animation library. Remove `framer-motion` (unused). A 60-line
  `useInView` hook and the primitives file cover everything above.
- Never animate `filter` or `box-shadow` on large elements (the About page's
  orb blur is the heaviest thing on the site today). Transform and opacity
  only; `will-change` on the hero deck card.

---

## 6. Technical plan

1. **Design tokens + global stylesheet.** `app/styles/tokens.css`:
   `--bg-0 #141413`, `--bg-1 #1C1B18`, `--bg-2 #262624`, `--ink #F0EDE8`,
   `--ink-2 #A6A199`, `--ink-3 rgba(240,237,232,.45)` (minimum body contrast),
   `--accent #D97757`, `--ok rgba(150,215,180,.9)`, radii, shadows, the
   reveal easings. Replace the three page backgrounds with `--bg-0`. Retire
   the purple neon rules and the Arial body font in `globals.css`.
2. **Fonts via `next/font/google`** in `layout.tsx`: Bricolage Grotesque
   (display), Figtree (body), and Georgia/`ui-serif` as the editorial serif
   (zero download; matches the sign-in page). Drop Unbounded, Inter, Geist.
   Delete all nine `@import url('fonts.googleapis…')` lines. This also
   resolves §2.1 item 7.
3. **Split pages into server shell + client body** so each route can export
   `metadata`; move the styled-jsx blocks into CSS modules or the global
   sheet so the CSS ships with the HTML (no more FOUC, no more need for the
   loader as a fix).
4. **Shared components**: `Footer`, `Section`, `Mock` (the window card),
   `SceneDeck` + `scenes/*`, `CountUp`, `useInView`, `Logo`, `Spark`,
   `IntegrationLogos` (all inline SVG; add Airtable and Zendesk marks).
5. **Data files**: `app/lib/plans.ts`, `app/lib/apps.ts`, `app/lib/agents.ts`,
   `app/lib/integrations.ts` — one source per list, imported by Home,
   Marketplace and Pricing so they cannot drift again.
6. **Contact route** (§4.5).
7. **Housekeeping**: rename the `.well-known` file; delete `app/contact/
   .gitignore`, `app/tailwind.config.js`, `app/postcss.config.js`; remove the
   Tailwind directives and packages (nothing uses them) or convert to the v4
   `@import "tailwindcss"` if the user wants Tailwind for new work; remove
   `framer-motion`, `lucide-react`, `react-icons`; real `README.md`.
8. **SEO**: metadata, OG image, sitemap, robots, canonical, `lang`,
   structured data (`Organization`, `SoftwareApplication` with offers).
9. **Accessibility pass**: minimum text opacity 0.45 on `#141413`; visible
   focus rings on the pill nav and tabs; the section-tab bar gets
   `aria-current`; every mock is `aria-hidden` with a text alternative in
   the copy beside it.
10. **Verify before publishing** (things the code did not settle): whether
    Slack and Gmail arrive by push or by the 12-hour cron (`calendar.ts`,
    `githubSync.ts`, `notionSync.ts` are cron); the "<2 s average answer"
    figure (no source); whether OneDrive and Microsoft Teams integrations are
    live (`OneDriveButton.tsx`, `TeamsButton.tsx` exist); the trial length
    (14 vs the "21" comment).

---

## 7. Copy drafts

**Hero.** One workspace that knows your work. / *Chat, documents, meetings,
tables, a whiteboard and a team of agents — all sharing one memory of your
Gmail, Slack, GitHub and the ten other tools you're already paying for.* /
[Start your 14 days] [See the apps →] / *No card. Full Pro for 14 days. Notes
free forever.*

**Search was the easy part.** *Any tool can find the file. ClutterAI is where
the file gets written, the meeting gets minuted, the table gets filtered and
the follow-up gets chased. Every one of those feeds the same memory — so the
answer to "what did we decide?" is already in there, with the receipt.*

**A Tuesday with ClutterAI.** 08:55 *Pulse: "Acme renewal in 25 minutes. Last
exchange: their CFO asked about SSO. Open promise: you owe them updated
invoicing details."* · 09:00 *Attune is listening. Notes write themselves;
"send the deck by Thursday" becomes a task with your name on it.* · 10:30
*Folio: the Q3 pricing memo, with the figure from #finance cited inline.* ·
12:00 *Facet: "customers in the EU who churned after less than three months"
— a real filter you can inspect, not a guess.* · 14:00 *Forge: the migration
script, from your schema and the architecture thread, versioned.* · 17:30
*Digest: two things still waiting on you. One of them is that deck.*

**Agents.** Eight agents. Four are working right now. — Pulse *Walk in already
knowing what matters* · Digest *Your day, summarised at a glance* · Triage
*Know what's on fire, first* · Forge *Every answer your codebase has, but never
told you* · Beacon *(Teams)* *Surface contacts from any list* · Ripple, Prism,
Echo *(coming soon)*.

**Ask, anywhere.** *One input. Ask about your work or the world; it decides
where to look and tells you which it did. In Slack, @ClutterAI answers where
only you can see it — sharing with the room is always your click.*

**Pricing kicker.** *Fourteen days of everything. Then a free plan that is
actually a plan.*

**Final CTA.** *Fourteen days of all of it.* [Start free →]

Marketplace app copy stays as written today (it is the best copy on the site);
Notes gains "Free forever — writing, organising and searching cost us nothing
to run, so we don't charge for them" (already there; promote it to Home).

---

## 8. Order of work

| Phase | What | Est. |
|---|---|---|
| 0 — Truth | Pricing numbers and Free-plan bullets from the catalogue; remove SOC 2 / HIPAA / E2E; fix white-on-cream buttons; make the contact form send; rename the `.well-known` file; fix the pricing FAQ to match the Refund Policy. Ship the same day. | ½ day |
| 1 — Foundation | Tokens, `next/font`, global stylesheet, metadata/OG/sitemap/robots, Footer, Nav rename, template transition, loader decision, dependency cleanup, data files. | 1 day |
| 2 — Home | New section order, port the scene deck, "Search was the easy part", "A Tuesday", agents ×8, Teams block, count-ups, pricing teaser. | 2 days |
| 3 — Apps & Agents | Scenes per app, Notes scene, cross-links, eight agents with flags, "what's free" strip. | 1½ days |
| 4 — Pricing | Cards, toggle tween, comparison table, seat calculator, FAQ accordion, trial strip. | 1 day |
| 5 — Why + Support | Editorial rewrite, calculator, animated diagram, quick answers. | 1 day |
| 6 — Polish | Mobile pass on every page, reduced-motion pass, contrast, Lighthouse ≥ 95 perf/SEO/a11y, cross-browser (the About page's `background-clip:text` guard shows mobile Safari has bitten before). | ½ day |

Total ≈ 7½ working days. Phase 0 is independent and should not wait for the
rest.

---

## 9. Decisions needed from the user

1. **Headline on the site.** Keep "One workspace that knows your work." (same
   as sign-in — recommended), or a site-specific variant: "Do your work here."
   / "Everything you work with. One AI that remembers all of it."
2. **Public plan ladder.** Show Max 5× / Max 20× / Team Premium / Student on the
   public pricing page (they are all purchasable in the app), or keep the
   public page to Free / Pro / Team and let the app reveal the rest?
3. **Coming-soon agents.** List Ripple, Prism and Echo as "coming soon", or
   hide them until they ship?
4. **Serif hero.** Move the site's hero and pull-quotes to the serif used on
   sign-in (recommended for continuity), or keep Bricolage everywhere and
   drop only Unbounded?
5. **Door loader.** First visit per session, every hard load, or gone?
6. **Nav labels.** "Why ClutterAI" and "Apps & Agents" as proposed, or keep
   "Overview" and "Marketplace"?
7. **Analytics.** Add none (policy stays true as written), or add a
   cookie-less tool and update the Privacy Policy accordingly (your edit).
8. **Tailwind.** Remove it (nothing uses it), or keep and fix the v4 setup for
   future work?
9. Confirm the trial length (14 days per `usageLimits.ts`) and whether
   OneDrive / Microsoft Teams integrations are live enough to list.
