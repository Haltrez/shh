import { site } from "@/lib/site";

/** Single sitemap index for Search Console: /sitemap_index.xml lists the five section sitemaps. */
const IDS = ["pages", "reviews", "lists", "guides", "compare", "bonus"];

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${IDS.map((id) => `  <sitemap><loc>${site.url}/sitemap/${id}.xml</loc><lastmod>${today}</lastmod></sitemap>`).join("\n")}
</sitemapindex>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
