import { cryptoGuides } from "./guides-crypto";
import { privacyGuides } from "./guides-privacy";
import type { Guide } from "./types";

export const guides: Guide[] = [...cryptoGuides, ...privacyGuides];
export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
