import type { Casino } from "./types";

export const formatPayout = (c: Casino) =>
  c.payoutMinutes ? (c.payoutMinutes.value < 60 ? `~${c.payoutMinutes.value} min` : `~${Math.round(c.payoutMinutes.value / 60)} h`) : "not yet tested";

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
