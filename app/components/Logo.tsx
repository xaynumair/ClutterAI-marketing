// The ClutterAI mark: a black tile with a white asterisk (matches the app
// icon). `Spark` is the bare asterisk, used as a bullet — an SVG rather than
// the ✳ character, which phones paint as a green emoji.

export function Logo({ size = 32, radius = 9, className = "" }: { size?: number; radius?: number; className?: string }) {
  const r = radius * (100 / size);
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" className={className} style={{ borderRadius: radius, flexShrink: 0 }}>
      <rect x="0" y="0" width="100" height="100" rx={r} fill="#000" />
      <rect x="0.8" y="0.8" width="98.4" height="98.4" rx={r - 0.8} fill="none" stroke="rgba(240,237,232,0.16)" strokeWidth="1.6" />
      <g stroke="#fff" strokeWidth="7.5" strokeLinecap="round">
        <line x1="50" y1="16" x2="50" y2="43" />
        <line x1="50" y1="57" x2="50" y2="84" />
        <line x1="20" y1="33" x2="43.5" y2="46.5" />
        <line x1="56.5" y1="53.5" x2="80" y2="67" />
        <line x1="80" y1="33" x2="56.5" y2="46.5" />
        <line x1="43.5" y1="53.5" x2="20" y2="67" />
      </g>
    </svg>
  );
}

export function Spark({ size = 10, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true" className={className} style={{ display: "block", flexShrink: 0 }}>
      <g stroke="currentColor" strokeWidth="14" strokeLinecap="round">
        <line x1="50" y1="12" x2="50" y2="88" />
        <line x1="17" y1="31" x2="83" y2="69" />
        <line x1="83" y1="31" x2="17" y2="69" />
      </g>
    </svg>
  );
}

/* Small mono icons used inside scenes and mocks. */
export const Icon = {
  Clock: ({ size = 11 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  ),
  Check: ({ size = 10 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
  ),
  Sparkles: ({ size = 12 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9L12 2zm7 12l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14zM5 15l.7 2 2 .7-2 .7L5 20.5l-.7-2.1-2-.7 2-.7L5 15z" /></svg>
  ),
  Arrow: ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="arrow"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
  ),
  Mail: ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
  ),
  Slack: ({ size = 11 }: { size?: number }) => (
    <svg viewBox="0 0 54 54" width={size} height={size} aria-hidden="true"><g fill="none"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"/><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"/><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"/><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336 0v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"/></g></svg>
  ),
  Notion: ({ size = 11 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="4" fill="#f0ede8" /><path d="M7.5 17.5V6.8l1.9-.2 6.1 8.6V6.5h1.5v11l-1.9.2-6.1-8.6v8.4z" fill="#141413" /></svg>
  ),
  Gmail: ({ size = 11 }: { size?: number }) => (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true"><path fill="#4caf50" d="M45 16.2l-5 2.75-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"/><path fill="#1e88e5" d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"/><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/><path fill="#c62828" d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8 4.924 8 3 9.924 3 12.298z"/><path fill="#fbc02d" d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8 43.076 8 45 9.924 45 12.298z"/></svg>
  ),
  GitHub: ({ size = 11 }: { size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
  ),
};
