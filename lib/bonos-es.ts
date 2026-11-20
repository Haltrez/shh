import { bonusCasinos } from "./bonus";
import { casinosEs } from "@/data/casinos-es";
import { rank } from "./score";

/** Casinos with a Spanish bonus page: tracked partners with Spanish copy, LatAm-wide ones first. */
export const bonosCasinos = () => {
  const r = rank(bonusCasinos().filter((c) => casinosEs[c.slug]));
  return [...r.filter((c) => c.latam), ...r.filter((c) => !c.latam)];
};
