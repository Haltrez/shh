/**
 * Scatter Drop-style geo rules.
 *   []            → everywhere
 *   ["!US","!GB"] → everywhere except US and GB
 *   ["CA","NZ"]   → only CA and NZ
 * Unknown country (local dev, no header) → allowed.
 */
export function geoAllowed(geos: string[], country: string | null | undefined): boolean {
  if (!country || !geos.length) return true;
  const cc = country.toUpperCase();
  const excludes = geos.filter((g) => g.startsWith("!")).map((g) => g.slice(1).toUpperCase());
  const includes = geos.filter((g) => !g.startsWith("!")).map((g) => g.toUpperCase());
  if (excludes.includes(cc)) return false;
  if (includes.length && !includes.includes(cc)) return false;
  return true;
}
