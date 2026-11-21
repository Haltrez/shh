import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { breadcrumbs, faqPage } from "@/lib/schema";
import { formatDate } from "@/lib/format";
import { sweeps, SWEEPS_FACTS as F } from "@/data/sweeps";
import { Caveat } from "@/components/Caveat";
import { Steps } from "@/components/Blocks";
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
  { q: "How do I get free Sweeps Coins?", a: "With marked Gold Coin packs, daily login gifts and free spins, or by mail: both sites send 1 Sweeps Coin per handwritten request once your identity is verified." },
  { q: "Do Sweeps Coins expire?", a: "Yes. On both sites, Sweeps Coins expire 60 days after your last login." },
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
          <h2>How sweepstakes casinos work</h2>
          <p>
            They run on two virtual currencies. <b>Gold Coins</b> are for play only: you can buy them, but they have no
            cash value and can&apos;t be redeemed. <b>Sweeps Coins</b> can&apos;t be bought. You get them free: as a
            bonus with marked Gold Coin packs, from daily gifts and free spins, or by mail. Sweeps Coins you win can be
            redeemed for prizes at 1 Sweeps Coin = $1.
          </p>
          <ul>
            <li><b>No purchase necessary:</b> both sites send 1 free Sweeps Coin per handwritten mail-in request, after you&apos;ve verified your identity.</li>
            <li><b>Playthrough:</b> Sweeps Coins must be played through once before they can be redeemed.</li>
            <li><b>Expiry:</b> Sweeps Coins expire 60 days after your last login.</li>
          </ul>

          <h2>How to redeem Sweeps Coins</h2>
          <Steps
            steps={[
              { name: "Make one Gold Coin purchase", need: "A payment method in your name", text: "Before your first redemption, both sites require one successful Gold Coin purchase, played through once, to validate your payment method." },
              { name: "Reach the minimum", need: `${F.minRedemptionUsd} Sweeps Coins`, text: `Redemptions start at ${usd(F.minRedemptionUsd)} (100 Sweeps Coins), played through at least once.` },
              { name: "Verify your identity", need: "Photo ID; proof of address above the limit", text: `Your account details must match your ID. Above ${usd(F.dailyBankLimitUsd)}, expect proof of address or source of funds.` },
              { name: "Request a bank redemption", need: "A US bank account", text: `Choose Prize Redemption in the Coin Store. Cash goes to your bank account, up to ${usd(F.dailyBankLimitUsd)} a day, and can take ${F.redemptionTime}.` },
            ]}
          />

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
