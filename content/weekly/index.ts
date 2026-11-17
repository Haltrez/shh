import type { Guide } from "../types";
// Weekly articles: one file per article in this folder, imported and listed here (newest last).
// See docs/CONTENT.md for the rules every article must follow.
import { guide as sentCryptoWrongNetwork } from "./sent-crypto-wrong-network";

export const weeklyGuides: Guide[] = [sentCryptoWrongNetwork];
