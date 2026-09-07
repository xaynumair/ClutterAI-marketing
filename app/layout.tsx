import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import SiteLoader from "./components/SiteLoader";
import { DESCRIPTION, SITE_URL, TAGLINE } from "./lib/site";

// Self-hosted through next/font: no request to Google at runtime, no flash of
// unstyled text. The serif (Georgia) is a system face and costs nothing.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
const body = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `ClutterAI — ${TAGLINE}`,
    template: "%s · ClutterAI",
  },
  description: DESCRIPTION,
  applicationName: "ClutterAI",
  keywords: [
    "ClutterAI", "AI workspace", "knowledge workspace", "meeting notes AI",
    "AI documents", "Slack search", "Gmail search", "coding agent", "daily briefing",
  ],
  openGraph: {
    type: "website",
    siteName: "ClutterAI",
    title: `ClutterAI — ${TAGLINE}`,
    description: DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `ClutterAI — ${TAGLINE}`,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#141413",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteLoader />
        <div className="ambient" aria-hidden="true">
          <div className="ambient-glow ambient-a" />
          <div className="ambient-glow ambient-b" />
          <div className="ambient-grid" />
        </div>
        <div className="site">
          <Navigation />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
