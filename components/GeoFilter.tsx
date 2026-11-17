"use client";
import { useEffect } from "react";
import { geoAllowed } from "@/lib/geo";

/**
 * Pages are static, so country filtering happens after load: elements with
 * data-geos='["!US"]' are hidden for visitors from excluded countries.
 * /go/[casino] enforces the same rule server-side.
 */
export function GeoFilter() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-geos]");
    if (!els.length) return;
    fetch("/api/geo")
      .then((r) => r.json())
      .then(({ country }: { country: string | null }) => {
        els.forEach((el) => {
          try {
            const geos = JSON.parse(el.dataset.geos || "[]") as string[];
            if (!geoAllowed(geos, country)) el.hidden = true;
          } catch {}
        });
      })
      .catch(() => {});
  }, []);
  return null;
}
