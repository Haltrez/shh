import type { Metadata } from "next";
import { getLanding, withYear } from "@/data/landings";
import { LandingPage } from "@/components/LandingPage";
import { ogPath } from "@/lib/og-path";
import { seo } from "@/lib/seo";

const l = getLanding("best-crypto-casinos")!;

export const metadata: Metadata = seo({ title: withYear(l.title), description: l.description, path: "/best-crypto-casinos", image: ogPath.top("all"), languages: { en: "/best-crypto-casinos", es: "/es/mejores-casinos-cripto" } });

export default function Page() {
  return <LandingPage l={l} />;
}
