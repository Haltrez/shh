import type { Metadata } from "next";
import { getLanding, withYear } from "@/data/landings";
import { LandingPage } from "@/components/LandingPage";
import { ogPath } from "@/lib/og-path";
import { seo } from "@/lib/seo";

const l = getLanding("anonymous-casinos")!;

export const metadata: Metadata = seo({ title: withYear(l.title), description: l.description, path: "/anonymous-casinos", image: ogPath.top("all"), languages: { en: "/anonymous-casinos", es: "/es/casinos-anonimos" } });

export default function Page() {
  return <LandingPage l={l} />;
}
