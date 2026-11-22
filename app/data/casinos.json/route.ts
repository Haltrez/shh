import { casinoDataset } from "@/lib/geo";
import { site } from "@/lib/site";

export const revalidate = 3600;

/** Public, citable dataset: every ranked casino's KYC rule, payout time, coins and licence, with sources. */
export function GET() {
  const casinos = casinoDataset();
  const body = {
    name: "shh no-KYC crypto casino dataset",
    description: site.description,
    publisher: site.url,
    license: "Free to cite with a link to the source page on shhcasinos.com",
    methodology: `${site.url}/how-we-rate`,
    disclosure: `${site.url}/affiliate-disclosure`,
    updated: casinos.map((c) => c.lastChecked ?? "").filter(Boolean).sort().at(-1) ?? null,
    notes: [
      "privacyScore is shh's 0-100 score (weights: KYC at sign-up 40%, KYC triggers 20%, payout speed 20%, coin choice 10%, licence and terms clarity 10%).",
      "featured=true marks a paid placement. It never changes privacyScore.",
      "No casino is anonymous: crypto gambling is private, not anonymous.",
    ],
    casinos,
  };
  return new Response(JSON.stringify(body, null, 2), {
    headers: { "Content-Type": "application/json; charset=utf-8", "Access-Control-Allow-Origin": "*" },
  });
}
