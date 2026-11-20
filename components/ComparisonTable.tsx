import type { Casino } from "@/lib/types";
import { privacyScore, kycLevelOf, isReportedOnly, coinsOf } from "@/lib/score";
import { formatPayout } from "@/lib/format";
import { kycLabel } from "./KycBadge";
import { CasinoCard } from "./CasinoCard";
import { SortableTable, type Row } from "./SortableTable";

/** Sortable table ≥ 640px; collapses to casino cards below that. */
export function ComparisonTable({ casinos, mobileCards = true }: { casinos: Casino[]; mobileCards?: boolean }) {
  const rows: Row[] = casinos.map((c) => ({
    slug: c.slug,
    name: c.name,
    score: privacyScore(c),
    kyc: kycLabel(kycLevelOf(c)) + (isReportedOnly(c) ? " (reported)" : ""),
    payout: c.payoutMinutes?.value ?? null,
    payoutLabel: formatPayout(c),
    minDeposit: c.minDepositUsd?.value ?? null,
    coins: coinsOf(c)?.join(" ") || "–",
  }));
  return (
    <>
      <div className={`table-wrap${mobileCards ? " collapse" : ""}`}>
        <SortableTable rows={rows} />
      </div>
      {mobileCards ? (
        <div className="cmp-cards">
        {casinos.map((c, i) => (
          <CasinoCard key={c.slug} c={c} rank={i + 1} />
        ))}
        </div>
      ) : null}
    </>
  );
}
