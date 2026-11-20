import type { Metadata } from "next";
import { TrustPage } from "@/components/TrustPage";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Responsible Gambling: Limits, Breaks and Free Help",
  description: "Set deposit limits, take a cool-off, self-exclude at a casino, block gambling sites on your devices, and find free, confidential help lines.",
  path: "/responsible-gambling",
});

const HELP: [string, string, string][] = [
  ["International", "Gambling Therapy: free online support in many languages", "https://www.gamblingtherapy.org"],
  ["International", "Gamblers Anonymous", "https://www.gamblersanonymous.org"],
  ["UK", "National Gambling Helpline (GamCare): 0808 8020 133", "https://www.gamcare.org.uk"],
  ["UK", "GambleAware", "https://www.begambleaware.org"],
  ["US", "National Problem Gambling Helpline: 1-800-GAMBLER", "https://www.ncpgambling.org"],
  ["Australia", "Gambling Help Online: 1800 858 858", "https://www.gamblinghelponline.org.au"],
  ["Canada", "Responsible Gambling Council", "https://www.responsiblegambling.org"],
];

export default function Page() {
  return (
    <TrustPage
      title="Responsible gambling"
      path="/responsible-gambling"
      lead="Gambling is entertainment that costs money. Decide what you can afford to lose before you start, and use the tools that make sticking to it easy."
    >
      <h2 style={{ marginTop: 0 }}>Before you play</h2>
      <ul>
        <li>Set a deposit limit in the casino account. Do it before your first deposit, when you&apos;re thinking clearly.</li>
        <li>Keep gambling funds in a separate wallet. When it&apos;s empty, you&apos;re done.</li>
        <li>Set a time limit. Crypto casinos never close.</li>
        <li>Don&apos;t chase losses, and don&apos;t gamble with money meant for bills, debt or savings.</li>
      </ul>

      <h2>Tools at the casino</h2>
      <ul>
        <li><b>Deposit limits</b>: daily, weekly or monthly caps.</li>
        <li><b>Cool-off</b>: a short break, usually 24 hours to a few weeks.</li>
        <li><b>Self-exclusion</b>: closes your account for months or permanently. Ask support if you can&apos;t find it in settings.</li>
      </ul>
      <p>Each of our reviews lists which of these the casino offers.</p>

      <h2>Block gambling on your devices</h2>
      <p>
        Blocking software stops gambling sites loading on your phone and computer, including crypto casinos that
        aren&apos;t part of any national scheme. BetBlocker is free; paid options exist too. If you&apos;ve
        self-excluded, a blocker helps make that decision stick.
      </p>

      <h2>Signs it&apos;s becoming a problem</h2>
      <ul>
        <li>Spending more than you planned, or hiding how much.</li>
        <li>Borrowing, selling things or dipping into savings to gamble.</li>
        <li>Feeling anxious or irritable when you&apos;re not playing.</li>
        <li>Gambling to win back losses or to escape other problems.</li>
      </ul>

      <h2>Free, confidential help</h2>
      <div className="table-wrap">
        <table className="data-table">
          <thead><tr><th>Where</th><th>Service</th></tr></thead>
          <tbody>
            {HELP.map(([where, name, url]) => (
              <tr key={url}>
                <td>{where}</td>
                <td><a href={url} rel="noopener" target="_blank">{name}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="faint" style={{ fontSize: 14, marginTop: 12 }}>
        18+ only. If you&apos;re under 18, this site isn&apos;t for you.
      </p>
    </TrustPage>
  );
}
