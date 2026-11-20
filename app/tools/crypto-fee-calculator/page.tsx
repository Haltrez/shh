import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { ToolPage } from "@/components/ToolPage";
import { FeeCalculator } from "@/components/FeeCalculator";

export const metadata: Metadata = seo({
  title: "Crypto Deposit Fee Calculator for Casino Deposits",
  description: "See what share of a casino deposit you lose to exchange, network and casino fees, and whether a cheaper network would save you money. Free, no sign-up.",
  path: "/tools/crypto-fee-calculator",
});

const FAQ = [
  { q: "What fees do I pay to deposit crypto at a casino?", a: "Usually an exchange withdrawal fee, a network fee, and rarely a casino fee. Together they can be a big share of a small deposit." },
  { q: "Which network is cheapest for casino deposits?", a: "Usually Litecoin, Solana, or a stablecoin on Tron or a layer-2, as long as the casino supports it. See our fee comparison guide." },
  { q: "Why don't you show live fees?", a: "Network fees change constantly. Your wallet and exchange show the real fee at the moment you send, so the calculator uses those." },
];

export default function Page() {
  return (
    <ToolPage
      title="Crypto deposit fee calculator"
      path="/tools/crypto-fee-calculator"
      lead="Type in the fees your exchange and wallet show, and see how much of your casino deposit actually arrives."
      tool={<FeeCalculator />}
      faq={FAQ}
      related={["cheapest-coin-to-deposit", "how-to-buy-usdt-trc20", "how-to-deposit-crypto"]}
    />
  );
}
