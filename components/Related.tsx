import Link from "next/link";
import { guides } from "@/content/guides";
import { lists } from "@/data/lists";
import { allCasinos } from "@/lib/data";
import { isPublished } from "@/lib/score";

export function RelatedGuides({ slugs, title = "Guides" }: { slugs: string[]; title?: string }) {
  const items = slugs.map((s) => guides.find((g) => g.slug === s)).filter((g) => g !== undefined);
  if (!items.length) return null;
  return (
    <div className="card">
      <h3 style={{ fontSize: "1rem" }}>{title}</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15 }}>
        {items.map((g) => (
          <li key={g.slug}><Link href={`/guides/${g.slug}`}>{g.h1}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export function RelatedLists({ slugs }: { slugs: string[] }) {
  const items = slugs.map((s) => lists.find((l) => l.slug === s)).filter((l) => l !== undefined);
  if (!items.length) return null;
  return (
    <div className="card">
      <h3 style={{ fontSize: "1rem" }}>Lists</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15 }}>
        <li><Link href="/no-kyc-casinos">All no-KYC casinos</Link></li>
        {items.map((l) => (
          <li key={l.slug}><Link href={`/best/${l.slug}`}>{l.short}</Link></li>
        ))}
      </ul>
    </div>
  );
}

/** Up to n verified reviews, preferring the given slugs. */
export function RelatedReviews({ prefer = [], n = 3 }: { prefer?: string[]; n?: number }) {
  const verified = allCasinos.filter(isPublished);
  const picked = [
    ...prefer.map((s) => verified.find((c) => c.slug === s)).filter((c) => c !== undefined),
    ...verified,
  ].filter((c, i, arr) => arr.findIndex((x) => x.slug === c.slug) === i).slice(0, n);
  if (!picked.length) return null;
  return (
    <div className="card">
      <h3 style={{ fontSize: "1rem" }}>Reviews</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15 }}>
        {picked.map((c) => (
          <li key={c.slug}><Link href={`/reviews/${c.slug}`}>{c.name} review</Link></li>
        ))}
      </ul>
    </div>
  );
}
