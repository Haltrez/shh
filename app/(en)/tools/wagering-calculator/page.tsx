import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import { ToolPage } from "@/components/ToolPage";
import { WageringCalculator } from "@/components/WageringCalculator";

export const metadata: Metadata = seo({
  title: "Wagering Calculator: Is the Casino Bonus Worth It?",
  description: "Work out how much you must bet to clear a casino bonus, what the wagering costs on average, and whether the bonus is worth taking. Free, no sign-up.",
  path: "/tools/wagering-calculator",
});

const FAQ = [
  { q: "How do I calculate wagering requirements?", a: "Multiply the amount the requirement applies to (bonus, or deposit plus bonus) by the multiplier. A $100 bonus at 35x needs $3,500 in bets." },
  { q: "How much does wagering cost?", a: "On average, total bets multiplied by the house edge. At 96% RTP (4% edge), $3,500 of wagering costs about $140." },
  { q: "Why does game weighting matter?", a: "If a game only counts 10% toward wagering, you have to bet ten times as much on it to clear the same requirement." },
  { q: "Is a bonus ever worth it?", a: "When the expected cost of wagering is lower than the bonus, which usually means a low multiplier on the bonus only and slots that count 100%." },
];

export default function Page() {
  return (
    <ToolPage
      title="Wagering requirement calculator"
      path="/tools/wagering-calculator"
      lead="Enter a bonus's terms to see how much you'd have to bet, what that costs on average, and whether the bonus is worth taking."
      tool={<WageringCalculator />}
      faq={FAQ}
      related={["wagering-requirements-explained", "crypto-casino-withdrawal-pending", "cheapest-coin-to-deposit"]}
    />
  );
}
