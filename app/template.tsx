// Remounts on every navigation, so the page rises in without the door loader.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
