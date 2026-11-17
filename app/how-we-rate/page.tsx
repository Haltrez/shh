import Link from "next/link";
import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { WEIGHTS, WEIGHT_LABELS } from "@/lib/score";
import { Caveat } from "@/components/Caveat";

export const metadata: Metadata = {
  title: "How We Rate Crypto Casinos: The Privacy Score",
  description:
    "How the shh privacy score works: KYC at sign-up 40%, KYC triggers 20%, payout speed 20%, coin choice 10%, terms clarity 10%. Sources and re-check schedule.",
  alternates: { canonical: "/how-we-rate" },
};

const DETAIL: Record<keyof typeof WEIGHTS, string> = {
  kycSignup: "Can you create an account, deposit and play with only an email? 5 = email only; 0 = ID before deposit.",
  kycTriggers: "How narrow and clearly stated are the cases where ID can be requested later? Specific thresholds score higher than vague 'at our discretion' language.",
  payoutSpeed: "Measured from our own test withdrawals, request to spendable in our wallet. No test, no points.",
  coinChoice: "Number of coins and low-fee networks supported, especially stablecoins on cheap chains, LTC and SOL.",
  termsClarity: "Licence stated and checkable; terms readable; VPN, country and bonus rules spelled out.",
};

export default function Page() {
  return (
    <TrustPage
      title="How we rate"
      path="/how-we-rate"
      lead="One number, the privacy score (0–100), built from five things you can check yourself in a casino's terms. Commission never moves it."
    >
      <h2 style={{ marginTop: 0 }}>The privacy score</h2>
      <div className="table-wrap" style={{ marginBottom: 24 }}>
        <table className="data-table">
          <thead><tr><th>Weight</th><th>Factor</th><th>What we look at</th></tr></thead>
          <tbody>
            {(Object.keys(WEIGHTS) as (keyof typeof WEIGHTS)[]).map((k) => (
              <tr key={k}>
                <td>{Math.round(WEIGHTS[k] * 100)}%</td>
                <td style={{ fontFamily: "inherit", whiteSpace: "nowrap" }}>{WEIGHT_LABELS[k]}</td>
                <td>{DETAIL[k]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Each factor is scored 0–5, weighted, and scaled to 100. The five-segment privacy meter on each casino card is
        that score in steps of 20.
      </p>

      <h2>Where the facts come from</h2>
      <ul>
        <li>The casino&apos;s own terms and conditions, FAQ, cashier and bonus pages. Every fact in a review&apos;s fact box links to its source.</li>
        <li>Our own accounts: sign-up, deposit and withdrawal, timed.</li>
        <li>Never: forum rumours presented as fact, invented user reviews, or win stories.</li>
      </ul>

      <h2>Badges</h2>
      <ul>
        <li><b style={{ color: "var(--accent)" }}>No KYC</b>: no ID at sign-up or for normal withdrawals.</li>
        <li><b style={{ color: "var(--warn)" }}>KYC on request</b>: no ID at sign-up; routine thresholds or triggers.</li>
        <li><b style={{ color: "#ffa86b" }}>KYC at first withdrawal</b>: no ID to sign up or deposit; ID before your first cash-out.</li>
        <li><b style={{ color: "var(--danger)" }}>Full KYC</b>: ID before you can play.</li>
      </ul>
      <p>
        A badge marked <span className="mono">REPORTED</span> comes from third-party reviews, linked on the card. It
        hasn&apos;t been confirmed against the casino&apos;s own terms yet.
      </p>

      <h2>Scores from reported data</h2>
      <p>
        Until we&apos;ve read a casino&apos;s terms ourselves, its score uses only what we know: the reported KYC level,
        our own payout tests, and the coins it takes where those are known. Licence and terms clarity is left out, and
        the other weights are scaled up to fill the gap. When sources disagree about ID checks, we score the casino a
        notch lower. A casino with no KYC information at all gets no score.
      </p>

      <h2>Re-checks</h2>
      <p>
        We re-check every casino monthly and whenever its terms change. The &ldquo;last checked&rdquo; date on each
        review and list is the date of the most recent full check. A casino with no KYC information shows no score
        at all.
      </p>

      <h2>Money and rankings</h2>
      <p>
        We earn commission when you sign up through some links. Casinos can pay for a labelled <b>Featured</b> spot.
        Neither changes the score or the order of ranked tables. Every review has a mandatory cons section. See our{" "}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
      <Caveat text="Heads-up: a high privacy score isn't a recommendation to gamble. It tells you what a casino asks of you, not whether you'll win." />
    </TrustPage>
  );
}
