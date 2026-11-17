import type { Casino } from "@/lib/types";
import { kycLabel } from "./KycBadge";
import { formatPayout } from "@/lib/format";

export function MetaStrip({ c }: { c: Casino }) {
  return (
    <p className="meta-strip">
      <span>KYC: {c.kyc ? kycLabel(c.kyc.level).toLowerCase() : "being checked"}</span>
      <span>Payout: {formatPayout(c)}</span>
      <span>Coins: {c.coins ? c.coins.value.join(" ") : "–"}</span>
    </p>
  );
}
