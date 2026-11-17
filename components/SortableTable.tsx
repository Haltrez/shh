"use client";
import { useMemo, useState } from "react";
import { ArrowDownUp } from "lucide-react";

export type Row = {
  slug: string;
  name: string;
  score: number | null;
  kyc: string;
  payout: number | null;
  payoutLabel: string;
  minDeposit: number | null;
  coins: string;
  geos: string[];
};

type Key = "score" | "payout" | "minDeposit";

export function SortableTable({ rows }: { rows: Row[] }) {
  const [key, setKey] = useState<Key>("score");
  const sorted = useMemo(() => {
    const dir = key === "score" ? -1 : 1; // score high→low, others low→high
    return [...rows].sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      if (av === null && bv === null) return 0;
      if (av === null) return 1;
      if (bv === null) return -1;
      return (av - bv) * dir;
    });
  }, [rows, key]);

  const th = (k: Key, label: string) => (
    <th aria-sort={key === k ? (k === "score" ? "descending" : "ascending") : "none"}>
      <button type="button" onClick={() => setKey(k)}>
        {label} <ArrowDownUp size={12} aria-hidden />
      </button>
    </th>
  );

  return (
    <table className="cmp">
      <thead>
        <tr>
          <th>Casino</th>
          {th("score", "Privacy score")}
          <th>KYC</th>
          {th("payout", "Payout")}
          {th("minDeposit", "Min deposit")}
          <th>Coins</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map((r) => (
          <tr key={r.slug} data-geos={JSON.stringify(r.geos)}>
            <td>
              <a href={`/reviews/${r.slug}`}>{r.name}</a>
            </td>
            <td className="mono">{r.score ?? "pending"}</td>
            <td>{r.kyc}</td>
            <td className="mono">{r.payoutLabel}</td>
            <td className="mono">{r.minDeposit !== null ? `$${r.minDeposit}` : "–"}</td>
            <td className="mono">{r.coins}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
