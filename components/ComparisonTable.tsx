import type { Casino } from "@/lib/types";
import { privacyScore } from "@/lib/score";
import { formatPayout } from "@/lib/format";
import { kycLabel } from "./KycBadge";
import { CasinoCard } from "./CasinoCard";
import { SortableTable, type Row } from "./SortableTable";

/** Sortable table ≥ 640px; collapses to casino cards below that. */
export function ComparisonTable({ casinos }: { casinos: Casino[] }) {
  const rows: Row[] = casinos.map((c) => ({
    slug: c.slug,
    name: c.name,
    score: privacyScore(c),
    kyc: kycLabel(c.kyc?.level),
    payout: c.payoutMinutes?.value ?? null,
    payoutLabel: formatPayout(c),
    minDeposit: c.minDepositUsd?.value ?? null,
    coins: c.coins?.value.join(" ") ?? "–",
    geos: c.geos,
  }));
  return (
    <>
      <div className="table-wrap collapse">
        <SortableTable rows={rows} />
      </div>
      <div className="cmp-cards">
        {casinos.map((c, i) => (
          <CasinoCard key={c.slug} c={c} rank={i + 1} />
        ))}
      </div>
    </>
  );
}
