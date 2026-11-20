import { cryptoGuides } from "./guides-crypto";
import { privacyGuides } from "./guides-privacy";
import { weeklyGuides } from "./weekly";
import type { Guide } from "./types";

/** Every guide, including ones scheduled for a future date. */
export const allGuides: Guide[] = [...cryptoGuides, ...privacyGuides, ...weeklyGuides];

const todayUtc = () => new Date().toISOString().slice(0, 10);

/**
 * Live = no publishAt, or publishAt on/before today (UTC). Evaluated per call, so ISR pages pick up new ones.
 * SHH_PREVIEW_SCHEDULED=1 (local checks only) treats every scheduled guide as live.
 */
export const isLive = (g: Guide) =>
  process.env.SHH_PREVIEW_SCHEDULED === "1" || !g.publishAt || g.publishAt <= todayUtc();

export const publishedGuides = () => allGuides.filter(isLive);

/** Live guides at the time this module is used (build time for static pages). */
export const guides: Guide[] = publishedGuides();

export const getGuide = (slug: string) => {
  const g = allGuides.find((x) => x.slug === slug);
  return g && isLive(g) ? g : undefined;
};
