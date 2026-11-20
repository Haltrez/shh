import type { Metadata } from "next";
import { getLanding, withYear } from "@/data/landings";
import { LandingPage } from "@/components/LandingPage";
import { seo } from "@/lib/seo";

const l = getLanding("best-crypto-casinos")!;

export const metadata: Metadata = seo({ title: withYear(l.title), description: l.description, path: "/best-crypto-casinos" });

export default function Page() {
  return <LandingPage l={l} />;
}
