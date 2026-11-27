import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Gift } from "lucide-react";
import { bonusCasinos } from "@/lib/bonus";
import { rank, kycLevelOf, isReportedOnly } from "@/lib/score";
import { formatPayout } from "@/lib/format";
import { ogPath } from "@/lib/og-path";
import { seo } from "@/lib/seo";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { KycBadge } from "@/components/KycBadge";
import { CasinoLogo } from "@/components/CasinoLogo";
import { Faq } from "@/components/Faq";
import { Caveat } from "@/components/Caveat";
import { JsonLd } from "@/components/JsonLd";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `Crypto Casino Bonus Codes ${year}: No Code Needed`,
  description:
    "Every bonus at the no-KYC crypto casinos we rank: welcome offers, whether a code is needed, KYC rules and payout times. Updated with each casino check.",
  path: "/bonus",
  image: ogPath.top("all"),
  languages: { en: "/bonus", es: "/es/bonos" },
});

const FAQ = [
  { q: "Do I need a bonus code for these casinos?", a: "No. Every offer listed here applies when you sign up through our link. If a code is ever needed, it's shown on the casino's bonus page." },
  { q: "Which crypto casino has the best bonus?", a: "It depends on what you want. Bigger headline numbers usually come with tougher wagering requirements. MetaWin has no bonus at all, which means no bonus conditions on withdrawals." },
  { q: "Do bonuses affect KYC?", a: "Bonus terms can add checks before you withdraw bonus winnings. Each casino's page lists its KYC rules." },
  { q: "Can I decline a welcome bonus?", a: "Usually yes. If you might want to withdraw soon, playing without a bonus avoids wagering conditions." },
];

export default function BonusHub() {
  const casinos = rank(bonusCasinos());
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / Bonus codes</div>
        <h1>Crypto casino bonus codes {year}</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>
          No codes to copy: every offer below applies when you sign up through our link. Listed in the same order as
          our privacy ranking.
        </p>
      </div>

      <div className="wrap" style={{ paddingBottom: 56 }}>
        <div className="grid">
          {casinos.map((c, i) => (
            <article key={c.slug} className="card bonus-row">
              <span className="pick-rank mono">{String(i + 1).padStart(2, "0")}</span>
              <div className="bonus-row-main">
                <div className="pick-top">
                  <Link href={`/reviews/${c.slug}`} className="pick-name"><CasinoLogo c={c} size={26} /></Link>
                  <KycBadge level={kycLevelOf(c)} reported={isReportedOnly(c)} />
                  {c.featured ? <span className="badge badge-featured">Featured</span> : null}
                </div>
                <div className="bonus-offer">
                  <Gift size={18} color="var(--accent)" aria-hidden />
                  <span className="bonus-row-offer">{c.offer ? c.offer.text : "No welcome bonus (no wagering conditions)"}</span>
                </div>
                <div className="pick-meta mono">code: none needed · payout {formatPayout(c)}</div>
              </div>
              <div className="bonus-row-actions">
                <a
                  className="btn btn-primary"
                  href={`/go/${c.slug}?pos=bonus-hub-${i + 1}`}
                  rel="sponsored nofollow noopener"
                  target="_blank"
                >
                  {c.offer ? "Claim bonus" : "Visit"} {c.name} <ArrowUpRight size={16} aria-hidden />
                </a>
                <Link href={`/bonus/${c.slug}`} className="mono" style={{ fontSize: 13 }}>{c.name} bonus details →</Link>
              </div>
            </article>
          ))}
        </div>

        <div className="prose" style={{ marginTop: 40 }}>
          <Caveat text="Heads-up: welcome bonuses come with wagering requirements. Read each casino's bonus terms before you opt in. 18+, T&Cs apply." />
          <h2>Questions</h2>
          <Faq items={FAQ} />
        </div>
      </div>

      <JsonLd data={[breadcrumbs([["Home", "/"], ["Bonus codes", "/bonus"]]), faqPage(FAQ)]} />
    </>
  );
}
