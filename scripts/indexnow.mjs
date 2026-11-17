#!/usr/bin/env node
/**
 * Submit every URL in the live sitemaps to IndexNow (Bing, Yandex, Seznam, Naver…).
 *   SITE_URL=https://shhcasinos.com INDEXNOW_KEY=xxxx npm run indexnow
 * INDEXNOW_KEY must match the one set in Vercel (served at /indexnow.txt).
 */
const site = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");
const key = process.env.INDEXNOW_KEY;
if (!site || !key) {
  console.error("Set SITE_URL and INDEXNOW_KEY.");
  process.exit(1);
}

const robots = await (await fetch(`${site}/robots.txt`)).text();
const sitemaps = [...robots.matchAll(/^Sitemap:\s*(\S+)/gim)].map((m) => m[1]);
const urls = [];
for (const sm of sitemaps) {
  const xml = await (await fetch(sm)).text();
  urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
}
if (!urls.length) {
  console.error("No URLs found in sitemaps.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(site).host, key, keyLocation: `${site}/indexnow.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} for ${urls.length} URLs`);
process.exit(res.ok ? 0 : 1);
