import type { Casino } from "@/lib/types";

/**
 * Partner casinos.
 *
 * Every fact field is a `Sourced<T>` and must link to the casino's own T&Cs / FAQ page.
 * Leave a field out rather than guess. A casino with `lastChecked: null` is shown as
 * "being checked", gets no score, and its review page is noindex.
 *
 * Fill `affiliateUrl` and `offer.code` from the existing Scatter Drop tracking sheet.
 */
const base = (slug: string, name: string): Casino => ({
  slug,
  name,
  affiliateUrl: "",
  geos: ["!US"],
  lastChecked: null,
});

export const casinos: Casino[] = [
  base("koalabet", "KoalaBet"),
  base("bitstarz", "BitStarz"),
  base("7bit", "7Bit Casino"),
  base("mirax", "Mirax Casino"),
  base("playamo", "PlayAmo"),
  base("cashy", "Cashy"),
  // base("cosmobet", "CosmoBet"), // uncomment once signed
];

export const getCasino = (slug: string) => casinos.find((c) => c.slug === slug);
