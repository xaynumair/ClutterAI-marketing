import type { Metadata } from "next";
import { PricingPage } from "../components/pricing/PricingPage";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fourteen days of everything free, then Free, Student, Pro, Max or Team. Every price here is the one you'll see in the app.",
  alternates: { canonical: "/pricing" },
};

export default function Page() {
  return <PricingPage />;
}
