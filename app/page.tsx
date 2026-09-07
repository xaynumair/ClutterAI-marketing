import type { Metadata } from "next";
import { HomePage } from "./components/home/HomePage";
import { DESCRIPTION, TAGLINE } from "./lib/site";

export const metadata: Metadata = {
  title: { absolute: `ClutterAI — ${TAGLINE}` },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
