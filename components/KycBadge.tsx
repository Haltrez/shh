import { ShieldCheck, ShieldAlert, ShieldX, Clock } from "lucide-react";
import type { KycLevel } from "@/lib/types";
import { kycText, t, type Lang } from "@/lib/i18n";

const MAP = {
  none: { label: "No KYC", Icon: ShieldCheck },
  "on-request": { label: "KYC on request", Icon: ShieldAlert },
  full: { label: "Full KYC", Icon: ShieldX },
} as const;

export function KycBadge({ level, reported, lang = "en" }: { level?: KycLevel; reported?: boolean; lang?: Lang }) {
  if (!level) {
    return (
      <span className="badge badge-pending">
        <Clock size={13} aria-hidden /> {kycText(undefined, lang)}
      </span>
    );
  }
  const { Icon } = MAP[level];
  const label = kycText(level, lang);
  return (
    <span
      className={`badge badge-${level}${reported ? " badge-reported" : ""}`}
      title={reported ? "Reported by third-party reviews; not yet confirmed against the casino's terms" : undefined}
    >
      <Icon size={13} aria-hidden /> {label}
      {reported ? <span className="badge-tag">{t(lang).reported}</span> : null}
    </span>
  );
}

export const kycLabel = (level?: KycLevel) => (level ? MAP[level].label : "Being checked");
