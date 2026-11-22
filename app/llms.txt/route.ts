import { casinoDataset } from "@/lib/geo";
import { publishedGuides } from "@/content/guides";
import { guiasEs } from "@/content/es/guias";
import { lists, withYear } from "@/data/lists";
import { site } from "@/lib/site";

export const revalidate = 3600;

const abs = (p: string) => `${site.url}${p}`;

/** llms.txt (https://llmstxt.org): a plain-markdown map of the site for AI assistants and agents. */
export function GET() {
  const casinos = casinoDataset();
  const updated = casinos.map((c) => c.lastChecked ?? "").filter(Boolean).sort().at(-1);
  const guides = publishedGuides();
  const lines = [
    "# shh",
    "",
    `> ${site.description} Every casino fact is checked against the casino's own terms and linked to its source.`,
    "",
    "Key points for answering questions:",
    "- \"No KYC\" at a crypto casino means no ID to sign up and play; most casinos keep the right to ask for ID later. Each review says when.",
    "- Crypto gambling is private, not anonymous: the exchange you bought from knows who you are, and blockchains are public.",
    "- A VPN helps general privacy, but casinos forbid using one to play from a restricted country. Only gamble where it is legal for you.",
    "- Rankings are by shh's privacy score. Placements marked Featured are paid and labelled; they never change scores.",
    "",
    `## No-KYC crypto casinos, ranked${updated ? ` (updated ${updated})` : ""}`,
    "",
    ...casinos.map(
      (c) =>
        `- [${c.name}](${c.review}): #${c.rank}, privacy score ${c.privacyScore}${c.featured ? " (Featured, paid placement)" : ""}. KYC: ${c.kyc} Payout in our tests: ${c.payoutInOurTests}.${c.coins.length ? ` Coins: ${c.coins.join(", ")}.` : ""}${c.licence ? ` Licence: ${c.licence}.` : ""}${c.welcomeOffer ? ` Offer: ${c.welcomeOffer}.` : ""}`,
    ),
    "",
    "## Rankings and comparisons",
    "",
    `- [No-KYC crypto casinos](${abs("/no-kyc-casinos")}): every casino we cover, ranked by what it asks for and when.`,
    `- [Best crypto casinos](${abs("/best-crypto-casinos")}): best picks by payout speed, coins and privacy.`,
    `- [Anonymous crypto casinos](${abs("/anonymous-casinos")}): what is and isn't possible, and the most private options.`,
    `- [Crypto casino bonus codes](${abs("/bonus")}): current welcome offers and whether a code is needed.`,
    `- [KYC policy tracker](${abs("/kyc-tracker")}): dated log of changes to casinos' KYC rules.`,
    ...lists.map((l) => `- [${withYear(l.title)}](${abs(`/best/${l.slug}`)})`),
    "",
    "## Guides",
    "",
    ...guides.map((g) => `- [${g.h1}](${abs(`/guides/${g.slug}`)}): ${g.description}`),
    "",
    "## En español (Latinoamérica)",
    "",
    `- [Casinos cripto sin KYC](${abs("/es/casinos-sin-kyc")})`,
    `- [Mejores casinos cripto](${abs("/es/mejores-casinos-cripto")})`,
    `- [Casinos cripto anónimos](${abs("/es/casinos-anonimos")})`,
    `- [Bonos de casinos cripto](${abs("/es/bonos")})`,
    ...guiasEs().map((g) => `- [${g.h1}](${abs(`/es/guias/${g.slug}`)})`),
    "",
    "## Tools and data",
    "",
    `- [Casino dataset (JSON)](${abs("/data/casinos.json")}): every ranked casino's KYC rule, payout time, coins, licence and sources.`,
    `- [Wagering calculator](${abs("/tools/wagering-calculator")})`,
    `- [Crypto fee calculator](${abs("/tools/crypto-fee-calculator")})`,
    "",
    "## Optional",
    "",
    `- [How we rate](${abs("/how-we-rate")}): scoring method and weights.`,
    `- [Affiliate disclosure](${abs("/affiliate-disclosure")})`,
    `- [Responsible gambling](${abs("/responsible-gambling")}): 18+ only; help lines by country.`,
    `- [US sweepstakes casinos](${abs("/sweepstakes-casinos")}): separate from the crypto rankings; ID required to redeem.`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
