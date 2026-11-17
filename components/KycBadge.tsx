import { ShieldCheck, ShieldAlert, ShieldX, Clock } from "lucide-react";
import type { KycLevel } from "@/lib/types";

const MAP = {
  none: { label: "No KYC", Icon: ShieldCheck },
  "on-request": { label: "KYC on request", Icon: ShieldAlert },
  full: { label: "Full KYC", Icon: ShieldX },
} as const;

export function KycBadge({ level }: { level?: KycLevel }) {
  if (!level) {
    return (
      <span className="badge badge-pending">
        <Clock size={13} aria-hidden /> Being checked
      </span>
    );
  }
  const { label, Icon } = MAP[level];
  return (
    <span className={`badge badge-${level}`}>
      <Icon size={13} aria-hidden /> {label}
    </span>
  );
}

export const kycLabel = (level?: KycLevel) => (level ? MAP[level].label : "Being checked");
