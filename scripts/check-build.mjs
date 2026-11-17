#!/usr/bin/env node
/**
 * Post-build checks on the prerendered HTML (run after `next build`):
 *  - <title> ≤ 60 chars, meta description ≤ 155, exactly one <h1>
 *  - canonical present; JSON-LD parses; no Review/AggregateRating schema
 *  - every internal href points at a page that exists
 *  - no banned phrases (plan §2)
 * Exits 1 on errors. Warnings (e.g. unchecked casinos) don't fail the build.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = ".next/server/app";
const BANNED = [/100% anonymous/i, /untraceable/i, /not on gamstop/i, /casinos? that works? with vpn/i, /bypass/i];
const DYNAMIC_OK = [/^\/go\//, /^\/api\//, /^\/indexnow\.txt$/, /^\/sitemap\//, /^\/robots\.txt$/];

const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".html")) files.push(p);
  }
})(ROOT);

const routeOf = (f) => {
  const r = "/" + relative(ROOT, f).replace(/\.html$/, "").replace(/(^|\/)index$/, "");
  return r === "/" ? "/" : r.replace(/\/$/, "");
};
const routes = new Set(files.map(routeOf));
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");

let errors = 0;
let warnings = 0;
const err = (r, m) => { errors++; console.log(`✗ ${r}: ${m}`); };
const warn = (r, m) => { warnings++; console.log(`! ${r}: ${m}`); };

for (const f of files) {
  const route = routeOf(f);
  if (route.startsWith("/_")) continue;
  const html = readFileSync(f, "utf8");
  const noindex = /<meta name="robots" content="noindex/.test(html);

  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  if (!title) err(route, "missing <title>");
  else if (title.length > 60) err(route, `title ${title.length} chars: "${title}"`);
  if (!desc) err(route, "missing meta description");
  else if (desc.length > 155) err(route, `description ${desc.length} chars`);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1 && route !== "/404") err(route, `${h1s} <h1> elements`);
  if (!/<link rel="canonical"/.test(html) && route !== "/404") err(route, "missing canonical");
  if (noindex) warn(route, "noindex (unchecked casino or empty list)");

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const json = JSON.stringify(JSON.parse(m[1]));
      if (/"@type":"(Review|AggregateRating)"/.test(json)) err(route, "Review/AggregateRating schema is banned");
    } catch {
      err(route, "invalid JSON-LD");
    }
  }

  const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  for (const re of BANNED) {
    // Allowed inside sentences that warn against it (e.g. "promises 100% anonymous … is wrong").
    const hit = text.match(new RegExp(`.{0,80}${re.source}.{0,80}`, "i"));
    if (hit && !/wrong|lying|won.t|don.t|never|red flag|claims that/i.test(hit[0])) err(route, `banned phrase: "${hit[0].trim()}"`);
  }

  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1].replace(/\/$/, "") || "/";
    if (href.startsWith("/_next") || DYNAMIC_OK.some((re) => re.test(href))) continue;
    if (/\.(svg|png|webp|ico|txt|xml)$/.test(href)) continue;
    if (!routes.has(href)) err(route, `broken internal link ${href}`);
  }
}

console.log(`\n${files.length} pages · ${errors} errors · ${warnings} warnings`);
process.exit(errors ? 1 : 0);
