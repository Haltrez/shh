import { allCasinos } from "./data";
import { isPublished } from "./score";

/** Casinos that get a /bonus/[casino] page: published partners with a tracking link. */
export const bonusCasinos = () => allCasinos.filter((c) => isPublished(c) && c.affiliateUrl);
