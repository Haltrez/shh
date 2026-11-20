import type { Metadata } from "next";
import { site } from "./site";

/** Cut at a word boundary so meta descriptions never end mid-word. */
export function clip(text: string, max = 155): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s]+$/, "") + "…";
}

/**
 * Canonical + Open Graph + Twitter for one page. Next.js doesn't copy <title>/description
 * into og:* on its own, so every page should spread this into its metadata.
 */
export function seo(opts: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  modifiedTime?: string;
  /** Title already includes the brand suffix (use with `title: { absolute }`). */
  absolute?: boolean;
  /** hreflang alternates, e.g. { en: "/", es: "/es" }. */
  languages?: Record<string, string>;
  locale?: string;
}): Metadata {
  const ogTitle = opts.absolute ? opts.title : `${opts.title} | ${site.name}`;
  return {
    title: opts.absolute ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: {
      canonical: opts.path,
      ...(opts.languages ? { languages: { ...opts.languages, "x-default": opts.languages.en ?? opts.path } } : {}),
    },
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url: opts.path,
      siteName: site.name,
      type: opts.type ?? "website",
      locale: opts.locale ?? "en",
      ...(opts.modifiedTime ? { modifiedTime: opts.modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: opts.description },
  };
}
