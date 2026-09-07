import type { Metadata } from "next";
import { SupportPage } from "../components/support/SupportPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Quick answers to the questions people actually ask, and a form that reaches a human — usually within a day.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <SupportPage />;
}
