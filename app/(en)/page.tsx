import Link from "next/link";
import type { Metadata } from "next";
import { Lock, EyeOff, Zap } from "lucide-react";
import { allCasinos } from "@/lib/data";
import { rank, isPublished } from "@/lib/score";
import { lists } from "@/data/lists";
import { publishedGuides } from "@/content/guides";
import { CasinoCard } from "@/components/CasinoCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Caveat } from "@/components/Caveat";
import { VpnBox } from "@/components/VpnBox";
import { faqPage, itemList } from "@/lib/schema";
import { ogPath } from "@/lib/og-path";
import { seo } from "@/lib/seo";
import { formatDate } from "@/lib/format";
import { TopPicks } from "@/components/TopPicks";

const year = new Date().getFullYear();

export const metadata: Metadata = seo({
  title: `Best No-KYC Crypto Casinos ${year}: Privacy Ranked | shh`,
  description: "No-KYC crypto casinos ranked by what they actually ask for: ID at sign-up, withdrawal checks, payout speed and coins. Checked against each casino's terms.",
  path: "/",
  image: ogPath.top("all"), absolute: true,
  languages: { en: "/", es: "/es" },
});

const FAQ = [
  {
    q: "What is a no-KYC crypto casino?",
    a: "A casino that lets you sign up, deposit and usually withdraw without uploading ID. Almost all still keep the right to ask for ID in specific cases, such as large withdrawals or anti-money-laundering checks. We list those triggers for each casino.",
  },
  {
    q: "Is crypto gambling anonymous?",
    a: "No. It's private, not anonymous. The casino may not hold your ID, but the exchange you bought from does, and blockchains are public.",
  },
  {
    q: "Can I use a VPN at these casinos?",
    a: "A VPN doesn't change where you're allowed to gamble. Most casinos' terms forbid using one to get around country restrictions and can void winnings if they detect it. Each review quotes the casino's own rule.",
  },
  {
    q: "How do you rank casinos?",
    a: "By a privacy score built from KYC at sign-up (40%), KYC triggers (20%), payout speed (20%), coin choice (10%) and licence and terms clarity (10%). Paid placements are labelled and don't change the score.",
  },
  {
    q: "Which coin is cheapest to deposit?",
    a: "Usually Litecoin, Solana, or a stablecoin on a low-fee network, as long as the casino accepts it. Bitcoin and Ethereum mainnet get expensive when busy.",
  },
];

const FEATURED = ["is-crypto-gambling-anonymous", "how-to-buy-crypto", "how-to-deposit-crypto", "cheapest-coin-to-deposit", "what-is-kyc-at-casinos", "usdt-trc20-vs-erc20"];

export const revalidate = 3600;

export default function Home() {
  const guides = publishedGuides();
  const ranked = rank(allCasinos);
  const lastUpdate = allCasinos.map((c) => c.lastChecked ?? c.reported?.asOf ?? "").filter(Boolean).sort().at(-1) ?? new Date().toISOString().slice(0, 10);
  const latest = [...guides]
    .filter((g) => !FEATURED.includes(g.slug))
    .sort((a, b) => b.updated.localeCompare(a.updated) || guides.indexOf(b) - guides.indexOf(a))
    .slice(0, 3);
  const top = ranked.slice(0, 5);
  const featuredGuides = FEATURED
    .map((s) => guides.find((g) => g.slug === s)!)
    .filter(Boolean);

  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
          <div className="eyebrow">
            <Lock size={14} aria-hidden /> no-KYC · low-KYC · crypto only
          </div>
          <h1>
            <span className="h1-kicker">No-KYC crypto casinos.</span>
            Play without{" "}
            <span className="redact" tabIndex={0}>
              uploading
            </span>{" "}
            your ID.
          </h1>
          <p className="lead">
            Which crypto casinos let you play without ID, how fast they pay, which coins they take, and exactly when
            they can still ask who you are. Straight answers, checked against each casino&apos;s own terms.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
            <Link className="btn btn-primary" href="/no-kyc-casinos">See the ranking</Link>
            <Link className="btn btn-ghost" href="/guides/is-crypto-gambling-anonymous">Is it anonymous? (No.)</Link>
          </div>
          </div>
          <div className="hero-picks">
            <TopPicks place="home-hero" title="Top picks today" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Top no-KYC crypto casinos</h2>
            <span className="mono">ranked by privacy score · updated {formatDate(lastUpdate)} · <Link href="/how-we-rate">method</Link></span>
          </div>
          <div className="grid">
            {top.map((c, i) => (
              <CasinoCard key={c.slug} c={c} rank={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <h2>Compare all</h2>
            <Link href="/no-kyc-casinos" className="mono">full list →</Link>
          </div>
          <ComparisonTable casinos={ranked} mobileCards={false} />
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="grid grid-3">
            <div className="card">
              <EyeOff size={20} color="var(--accent)" aria-hidden />
              <h3 style={{ marginTop: 12 }}>Private, not anonymous</h3>
              <p className="dim" style={{ margin: 0 }}>
                A no-KYC casino doesn&apos;t hold your ID. Your exchange does, and the blockchain is public. We say
                which is which.
              </p>
            </div>
            <div className="card">
              <Lock size={20} color="var(--accent)" aria-hidden />
              <h3 style={{ marginTop: 12 }}>Every trigger, listed</h3>
              <p className="dim" style={{ margin: 0 }}>
                Withdrawal thresholds, AML checks, source-of-funds requests: quoted from the terms, with the date we
                checked.
              </p>
            </div>
            <div className="card">
              <Zap size={20} color="var(--accent)" aria-hidden />
              <h3 style={{ marginTop: 12 }}>Payouts we timed</h3>
              <p className="dim" style={{ margin: 0 }}>
                We only print a payout time once we&apos;ve made a withdrawal ourselves. Marketing copy doesn&apos;t
                count.
              </p>
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <VpnBox pos="home" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>By coin and feature</h2></div>
          <div className="grid grid-3">
            {lists.map((l) => (
              <Link key={l.slug} href={`/best/${l.slug}`} className="card link-card">
                <h3>{l.short}</h3>
                <p>{l.criteria}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Latest</h2>
            <Link href="/guides" className="mono">all articles →</Link>
          </div>
          <div className="grid grid-3">
            {latest.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card link-card">
                <span className="cat">{g.category} · {formatDate(g.updated)}</span>
                <h3>{g.h1}</h3>
                <p>{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="section-head">
            <h2>Crypto guides</h2>
            <Link href="/guides" className="mono">all guides →</Link>
          </div>
          <div className="grid grid-3">
            {featuredGuides.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="card link-card">
                <span className="cat">{g.category}</span>
                <h3>{g.h1}</h3>
                <p>{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap prose">
          <h2 style={{ marginTop: 0 }}>Questions</h2>
          <Faq items={FAQ} />
          <Caveat text="Heads-up: only play where online gambling is legal for you. A VPN doesn't change that, and most casinos void winnings when their country rules are broken." />
        </div>
      </section>

      <JsonLd data={[faqPage(FAQ), itemList("Best no-KYC crypto casinos", ranked.filter(isPublished))]} />
    </>
  );
}
