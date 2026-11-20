"use client";
import { useState } from "react";

const fmt = (n: number) => (isFinite(n) ? n.toLocaleString("en-US", { maximumFractionDigits: 2 }) : "–");

/**
 * Deposit cost calculator: the reader types the fees their own exchange/wallet shows (we don't
 * publish live fee numbers) and sees what share of the deposit is lost.
 */
export function FeeCalculator() {
  const [amount, setAmount] = useState(50);
  const [exFee, setExFee] = useState(1);
  const [netFee, setNetFee] = useState(1);
  const [casinoFee, setCasinoFee] = useState(0);

  const num = (v: string) => Math.max(0, Number(v) || 0);
  const total = exFee + netFee + casinoFee;
  const pct = amount > 0 ? (total / amount) * 100 : 0;
  const arrives = Math.max(0, amount - total);
  const verdict =
    pct <= 2 ? { cls: "good", text: "Cheap. Fees are a small share of this deposit." } :
    pct <= 5 ? { cls: "", text: "Acceptable, but a lower-fee network could save you a little." } :
    { cls: "bad", text: "Expensive for this amount. Try a low-fee network (Litecoin, Solana, a stablecoin on Tron or a layer-2), or deposit less often in larger amounts." };

  return (
    <div className="card calc">
      <div className="calc-grid">
        <label>Deposit you want to make ($)<input type="number" inputMode="decimal" min={0} value={amount} onChange={(e) => setAmount(num(e.target.value))} /></label>
        <label>Exchange withdrawal fee ($)<input type="number" inputMode="decimal" min={0} step={0.01} value={exFee} onChange={(e) => setExFee(num(e.target.value))} /></label>
        <label>Network fee from your wallet ($)<input type="number" inputMode="decimal" min={0} step={0.01} value={netFee} onChange={(e) => setNetFee(num(e.target.value))} /></label>
        <label>Casino deposit fee ($, usually 0)<input type="number" inputMode="decimal" min={0} step={0.01} value={casinoFee} onChange={(e) => setCasinoFee(num(e.target.value))} /></label>
      </div>
      <div className="calc-results" aria-live="polite">
        <div><span>Total fees</span><b>${fmt(total)}</b></div>
        <div><span>Share of your deposit</span><b>{fmt(pct)}%</b></div>
        <div><span>Arrives at the casino</span><b>${fmt(arrives)}</b></div>
        <div className={verdict.cls}><span>Verdict</span><b style={{ fontSize: 15 }}>{verdict.text}</b></div>
      </div>
      <p className="calc-note">Use the fees your exchange and wallet show right now. Network fees change with demand.</p>
    </div>
  );
}
