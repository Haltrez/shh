type Lang = "en" | "es";

/** Paths of page-specific share images, served by app/og/[lang]/[kind]/[id]/route.tsx (see lib/og.tsx). */
export const ogPath = {
  casino: (slug: string, lang: Lang = "en") => `/og/${lang}/casino/${slug}`,
  bonus: (slug: string, lang: Lang = "en") => `/og/${lang}/bonus/${slug}`,
  vs: (pair: string, lang: Lang = "en") => `/og/${lang}/vs/${pair}`,
  top: (scope: string, lang: Lang = "en") => `/og/${lang}/top/${scope}`,
  text: (title: string, lang: Lang = "en") => `/og/${lang}/text/${Buffer.from(title, "utf8").toString("base64url")}`,
};
