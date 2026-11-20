import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { formatDate } from "@/lib/format";
import { sweeps, SWEEPS_FACTS as F } from "@/data/sweeps";
import { Caveat } from "@/components/Caveat";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";

const year = new Date().getFullYear();
const usd = (n: number) => "$" + n.toLocaleString("en-US");

export const metadata: Metadata = seo({
  title: `US Sweepstakes Casinos ${year}: Rules, KYC, Redemption`,
  description:
    "US sweepstakes casinos we link to: excluded states, the ID check before prize redemption, minimums, limits and payout times, from their own rules.",
  path: "/sweepstakes-casinos",
});

const FAQ = [
  {
    q: "What is a sweepstakes casino?",
    a: "A social casino that runs on two virtual currencies: Gold Coins, which you play for fun and can buy, and Sweeps Coins, which you get free (with Gold Coin packs, daily gifts or by mail) and can redeem for prizes.",
  },
  {
    q: "Are sweepstakes casinos no-KYC?",
    a: `No. Both sites below verify your identity before a prize redemption, and can ask for photo ID and proof of address above ${usd(F.dailyBankLimitUsd)}. That's why they aren't in our no-KYC rankings.`,
  },
  { q: "Can I redeem in crypto?", a: "Not according to their rules: cash prizes are paid in US dollars to a bank account." },
  {
    q: "Which states can't play for Sweeps Coins?",
    a: `Their Sweeps Rules exclude ${F.excludedStates.join(", ")}. If you're in one of those states, our links send you to the Gold Coins (social play) version.`,
  },
];

export default function Sweepstakes() {
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / US sweepstakes casinos</div>
        <h1>US sweepstakes casinos</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>
          Not crypto and not no-KYC: these are US social casinos where Sweeps Coins can be redeemed for cash prizes
          after an ID check. Every fact below comes from their own Sweeps Rules and Terms.
        </p>
        <p className="meta-strip"><span>US only · 18+</span><span>checked {formatDate(F.checked)}</span></p>
      </div>

      <div className="wrap" style={{ paddingBottom: 56 }}>
        <h2 className="sr-only">Sites</h2>
        <div className="grid grid-2" style={{ marginBottom: 32 }}>
          {sweeps.map((s) => (
            <div key={s.slug} className="card">
              <h3 style={{ marginTop: 0 }}>{s.name}</h3>
              <p className="dim" style={{ fontSize: 15 }}>
                Gold Coins for play, Sweeps Coins redeemable from {usd(F.minRedemptionUsd)}. ID check before your
                first redemption.
              </p>
              <a className="btn btn-primary" href={`/go/${s.slug}?pos=sweeps`} rel="sponsored nofollow noopener" target="_blank">
                Sign up at {s.name} <ArrowUpRight size={16} aria-hidden />
              </a>
              <p className="faint" style={{ fontSize: 13, margin: "10px 0 0" }}>
                18+ · <a href={s.rulesUrl} rel="nofollow noopener" target="_blank">Sweeps Rules</a> ·{" "}
                <a href={s.termsUrl} rel="nofollow noopener" target="_blank">Terms</a>
              </p>
            </div>
          ))}
        </div>

        <div className="prose">
          <h2>The rules, side by side</h2>
          <p>Both sites publish identical rules (Sweeps Rules v3.2 and Terms v2.1, updated 30 March 2026).</p>
          <div className="table-wrap" style={{ marginBottom: 24 }}>
            <table className="data-table">
              <tbody>
                <tr><td>Sweeps Coins excluded in</td><td>{F.excludedStates.join(", ")}</td></tr>
                <tr><td>ID check</td><td>Before prize redemption; photo ID, proof of address or source of funds can be asked above {usd(F.dailyBankLimitUsd)}</td></tr>
                <tr><td>Before first redemption</td><td>One Gold Coin purchase, played through once</td></tr>
                <tr><td>Minimum redemption</td><td>{usd(F.minRedemptionUsd)} (100 Sweeps Coins)</td></tr>
                <tr><td>Bank redemption limit</td><td>{usd(F.dailyBankLimitUsd)} per day</td></tr>
                <tr><td>Redemption method</td><td>US dollars to a bank account (no crypto)</td></tr>
                <tr><td>Redemption time</td><td>{F.redemptionTime}</td></tr>
                <tr><td>Sweeps Coins expire</td><td>60 days after your last login</td></tr>
                <tr><td>Operator</td><td>Not named in their terms</td></tr>
              </tbody>
            </table>
          </div>
          <Caveat text="Watch out: neither site names the company behind it in its terms, and both require ID before paying out. If you want to keep your ID out of a casino's database, our no-KYC crypto casinos are the better fit." />
          <p>
            Looking for privacy instead? See the <Link href="/no-kyc-casinos">no-KYC crypto casinos</Link> we rank.
          </p>
          <h2>Questions</h2>
          <Faq items={FAQ} />
          <p className="faint" style={{ fontSize: 14 }}>
            18+. Only play where it&apos;s legal for you. Help is available 24/7 at the National Problem Gambling
            Helpline, 1-800-GAMBLER. <Link href="/responsible-gambling">Responsible gambling</Link>.
          </p>
        </div>
      </div>
      <JsonLd data={[breadcrumbs([["Home", "/"], ["US sweepstakes casinos", "/sweepstakes-casinos"]]), faqPage(FAQ)]} />
    </>
  );
}
