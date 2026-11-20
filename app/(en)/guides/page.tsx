import Link from "next/link";
import type { Metadata } from "next";
import { publishedGuides } from "@/content/guides";
import type { Guide } from "@/content/types";
import { VpnBox } from "@/components/VpnBox";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Crypto Casino Guides: Buy, Deposit, Withdraw, Privacy",
  description: "Plain guides to buying crypto, choosing a wallet, depositing and withdrawing at casinos, network fees, KYC and what privacy really means on a blockchain.",
  path: "/guides",
  languages: { en: "/guides", es: "/es/guias" },
});

const ORDER: Guide["category"][] = ["Trends & news", "Crypto basics", "Casino know-how", "Money", "Privacy"];

export const revalidate = 3600;

export default function Guides() {
  const guides = publishedGuides();
  return (
    <>
      <div className="wrap page-head">
        <div className="crumbs"><Link href="/">Home</Link> / Guides</div>
        <h1>Guides</h1>
        <p className="lead dim prose" style={{ fontSize: "1.1rem" }}>
          How to buy, move and protect crypto for casino play, and what privacy does and doesn&apos;t mean.
        </p>
      </div>
      <div className="wrap" style={{ paddingBottom: 48 }}>
        {ORDER.map((cat) => {
          const items = guides.filter((g) => g.category === cat);
          if (!items.length) return null;
          return (
            <section key={cat} style={{ marginBottom: 40 }}>
              <h2 style={{ marginTop: 0, fontSize: "1.2rem" }} className="mono">{cat.toLowerCase()}</h2>
              <div className="grid grid-3">
                {items.map((g) => (
                  <Link key={g.slug} href={`/guides/${g.slug}`} className="card link-card">
                    <h3>{g.h1}</h3>
                    <p>{g.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
        <VpnBox pos="guides-index" />
      </div>
    </>
  );
}
