import type { Metadata } from "next";
import { getLanding, withYear } from "@/data/landings";
import { LandingPage } from "@/components/LandingPage";
import { seo } from "@/lib/seo";

const l = getLanding("anonymous-casinos")!;

export const metadata: Metadata = seo({ title: withYear(l.title), description: l.description, path: "/anonymous-casinos" });

export default function Page() {
  return <LandingPage l={l} />;
}
