"use client";
import { useState } from "react";

const fmt = (n: number) => (isFinite(n) ? n.toLocaleString("en-US", { maximumFractionDigits: 2 }) : "–");

/** Bonus wagering calculator: total bets needed, expected cost, and expected value of taking the bonus. */
export function WageringCalculator() {
  const [bonus, setBonus] = useState(100);
  const [deposit, setDeposit] = useState(100);
  const [mult, setMult] = useState(35);
  const [applies, setApplies] = useState<"bonus" | "both">("bonus");
  const [rtp, setRtp] = useState(96);
  const [weight, setWeight] = useState(100);

  const base = applies === "bonus" ? bonus : bonus + deposit;
  const wagering = base * mult;
  const effective = weight > 0 ? wagering / (weight / 100) : Infinity;
  const edge = Math.max(0, (100 - rtp) / 100);
  const expectedCost = effective * edge;
  const ev = bonus - expectedCost;

  const num = (v: string) => Math.max(0, Number(v) || 0);

  return (
    <div className="card calc">
      <div className="calc-grid">
        <label>Bonus amount ($)<input type="number" inputMode="decimal" min={0} value={bonus} onChange={(e) => setBonus(num(e.target.value))} /></label>
        <label>Your deposit ($)<input type="number" inputMode="decimal" min={0} value={deposit} onChange={(e) => setDeposit(num(e.target.value))} /></label>
        <label>Wagering requirement (x)<input type="number" inputMode="decimal" min={0} value={mult} onChange={(e) => setMult(num(e.target.value))} /></label>
        <label>Applies to
          <select value={applies} onChange={(e) => setApplies(e.target.value as "bonus" | "both")}>
            <option value="bonus">Bonus only</option>
            <option value="both">Deposit + bonus</option>
          </select>
        </label>
        <label>Game RTP (%)<input type="number" inputMode="decimal" min={0} max={100} step={0.1} value={rtp} onChange={(e) => setRtp(Math.min(100, num(e.target.value)))} /></label>
        <label>Game counts toward wagering (%)<input type="number" inputMode="decimal" min={0} max={100} value={weight} onChange={(e) => setWeight(Math.min(100, num(e.target.value)))} /></label>
      </div>
      <div className="calc-results" aria-live="polite">
        <div><span>Wagering required</span><b>${fmt(wagering)}</b></div>
        <div><span>Bets you actually place</span><b>${fmt(effective)}</b></div>
        <div><span>Expected cost of wagering</span><b>${fmt(expectedCost)}</b></div>
        <div className={ev >= 0 ? "good" : "bad"}><span>Expected value of the bonus</span><b>{ev >= 0 ? "+" : "−"}${fmt(Math.abs(ev))}</b></div>
      </div>
      <p className="calc-note">
        {ev >= 0
          ? "On average this bonus is worth more than the wagering costs, but results swing a lot in practice."
          : "On average the wagering costs more than the bonus is worth. Playing without it is usually the better deal."}{" "}
        Averages only; read the casino&apos;s bonus terms for max bet, time limits and game weighting.
      </p>
    </div>
  );
}
