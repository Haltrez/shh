import { casinos as real } from "@/data/casinos";
import { demoCasinos } from "@/data/demo-casinos";
import type { Casino } from "./types";

const demoAllowed =
  process.env.SHH_DEMO === "1" && process.env.VERCEL_ENV !== "production";

export const allCasinos: Casino[] = demoAllowed ? [...real, ...demoCasinos] : real;
export const findCasino = (slug: string) => allCasinos.find((c) => c.slug === slug);
