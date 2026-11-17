"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function PromoCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="promo"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          /* clipboard blocked – code is still visible to copy by hand */
        }
      }}
      aria-label={`Copy promo code ${code}`}
    >
      <span className="label">CODE</span>
      {code}
      {copied ? <Check size={15} aria-hidden color="var(--accent)" /> : <Copy size={15} aria-hidden />}
      <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
    </button>
  );
}
