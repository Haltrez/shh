"use client";
import { useEffect } from "react";
import { track } from "@vercel/analytics";

/**
 * One delegated listener: every click on a /go/<target> link (Claim bonus, Visit, VPN)
 * becomes a Vercel Analytics custom event "outbound_click" with the casino, the page
 * it was clicked on and the card position. No personal data is sent.
 */
export function OutboundTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href^="/go/"]') as HTMLAnchorElement | null;
      if (!a) return;
      const url = new URL(a.href, location.origin);
      track("outbound_click", {
        casino: url.pathname.replace(/^\/go\//, ""),
        page: location.pathname,
        pos: url.searchParams.get("pos") ?? "none",
        label: (a.textContent || "").trim().slice(0, 40),
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
