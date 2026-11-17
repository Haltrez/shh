import type { Guide } from "../types";
// Weekly articles: one file per article in this folder, imported and listed here (newest last).
// See docs/CONTENT.md for the rules every article must follow.
import { guide as sentCryptoWrongNetwork } from "./sent-crypto-wrong-network";
import { guide as noKycCasinoTrends2026 } from "./no-kyc-casino-trends-2026";
import { guide as cryptoGamblingMarket2026 } from "./crypto-gambling-market-2026";
import { guide as cryptoPrivacyRegulation2026 } from "./crypto-privacy-regulation-2026";
import { guide as cryptoNewsNovember2026 } from "./crypto-news-november-2026";
import { guide as cryptoCasinoWithdrawalPending } from "./crypto-casino-withdrawal-pending";
import { guide as stablecoinGamblingTrend } from "./stablecoin-gambling-trend";

export const weeklyGuides: Guide[] = [
  sentCryptoWrongNetwork,
  noKycCasinoTrends2026,
  cryptoGamblingMarket2026,
  cryptoPrivacyRegulation2026,
  cryptoNewsNovember2026,
  cryptoCasinoWithdrawalPending,
  stablecoinGamblingTrend,
];
