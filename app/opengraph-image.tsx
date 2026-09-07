import { ImageResponse } from "next/og";
import { TAGLINE } from "./lib/site";

export const alt = `ClutterAI — ${TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The link preview for every page: logo tile, the one line, the subtitle.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(160deg, #141413 0%, #1f1e1b 100%)",
          color: "#f0ede8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 100 100">
            <rect x="0" y="0" width="100" height="100" rx="24" fill="#000" />
            <rect x="1" y="1" width="98" height="98" rx="23" fill="none" stroke="rgba(240,237,232,0.2)" strokeWidth="2" />
            <g stroke="#fff" strokeWidth="7.5" strokeLinecap="round">
              <line x1="50" y1="16" x2="50" y2="43" />
              <line x1="50" y1="57" x2="50" y2="84" />
              <line x1="20" y1="33" x2="43.5" y2="46.5" />
              <line x1="56.5" y1="53.5" x2="80" y2="67" />
              <line x1="80" y1="33" x2="56.5" y2="46.5" />
              <line x1="43.5" y1="53.5" x2="20" y2="67" />
            </g>
          </svg>
          <div style={{ fontSize: 34, fontFamily: "sans-serif", fontWeight: 700, letterSpacing: -1 }}>ClutterAI</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -2, maxWidth: 1000 }}>{TAGLINE}</div>
          <div style={{ fontSize: 30, lineHeight: 1.4, color: "#a6a199", fontFamily: "sans-serif", maxWidth: 940 }}>
            Chat, documents, meetings, tables, a whiteboard and a team of agents — sharing one memory of your tools.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, fontFamily: "sans-serif", fontSize: 22, color: "#d97757" }}>
          <span>14 days of everything free</span>
          <span style={{ color: "#5c5950" }}>·</span>
          <span style={{ color: "#a6a199" }}>clutter-ai.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
