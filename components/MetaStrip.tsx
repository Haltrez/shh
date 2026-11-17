import type { Casino } from "@/lib/types";
import { kycLabel } from "./KycBadge";
import { formatPayout } from "@/lib/format";
import { coinsOf, isReportedOnly, kycLevelOf } from "@/lib/score";

export function MetaStrip({ c }: { c: Casino }) {
  const level = kycLevelOf(c);
  const coins = coinsOf(c);
  return (
    <p className="meta-strip">
      <span>
        KYC: {level ? kycLabel(level).toLowerCase() : "being checked"}
        {isReportedOnly(c) ? " (reported)" : ""}
      </span>
      <span>Payout: {formatPayout(c)}</span>
      <span>Coins: {coins?.length ? coins.join(" ") : "–"}</span>
    </p>
  );
}
