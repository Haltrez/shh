import Link from "next/link";
import type { Metadata } from "next";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Free Crypto Casino Tools and Calculators",
  description: "Free calculators for crypto casino players: wagering requirements, deposit fees, plus our KYC policy tracker. No sign-up.",
  path: "/tools",
});

const TOOLS = [
  { href: "/tools/wagering-calculator", name: "Wagering requirement calculator", desc: "How much you must bet to clear a bonus, and whether it's worth it." },
  { href: "/tools/crypto-fee-calculator", name: "Crypto deposit fee calculator", desc: "What share of a casino deposit you lose to fees." },
  { href: "/kyc-tracker", name: "KYC policy tracker", desc: "When every crypto casino we track can ask for ID, with sources." },
];

export default function Tools() {
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / Tools</div>
        <h1>Free crypto casino tools</h1>
      </div>
      <div className="wrap" style={{ paddingBottom: 56 }}>
        <div className="grid grid-3">
          {TOOLS.map((t) => (
            <Link key={t.href} href={t.href} className="card link-card">
              <h2 style={{ fontSize: "1.12rem", margin: "0 0 8px" }}>{t.name}</h2>
              <p>{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
