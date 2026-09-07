import type { Metadata } from "next";
import { WhyPage } from "../components/why/WhyPage";

export const metadata: Metadata = {
  title: "Why ClutterAI",
  description:
    "The tools won; the knowledge lost. Why we built one workspace with one memory of everything your team uses, and how it works.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <WhyPage />;
}
