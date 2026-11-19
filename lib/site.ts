/**
 * Site URL, in order of preference:
 *  1. NEXT_PUBLIC_SITE_URL (set this once the domain is connected in Vercel)
 *  2. https://www.shhcasinos.com on any Vercel build
 *  3. localhost for local dev
 */
const PRODUCTION_URL = "https://www.shhcasinos.com";

const resolveUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  // Canonicals, sitemaps and schema always point at the real domain on Vercel
  // (preview deploys are noindex anyway). Local dev uses localhost.
  if (process.env.VERCEL) return PRODUCTION_URL;
  return "http://localhost:3000";
};

export const site = {
  name: "shh",
  tagline: "Straight answers on privacy.",
  url: resolveUrl().replace(/\/$/, ""),
  description:
    "A privacy-first guide to no-KYC and low-KYC crypto casinos: what each one asks for, how fast it pays, which coins it takes.",
  author: {
    name: "The shh editors",
    url: "/about",
  },
  year: new Date().getFullYear(),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@shhcasinos.com",
};

export const absolute = (path: string) => `${site.url}${path === "/" ? "" : path}`;
