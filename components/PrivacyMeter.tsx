import { meterSegments } from "@/lib/score";

export function PrivacyMeter({ score }: { score: number | null }) {
  const on = meterSegments(score);
  const label = score === null ? "Privacy score pending" : `Privacy score ${score} out of 100`;
  return (
    <span className="meter" role="img" aria-label={label} title={label}>
      <span className="meter-bar" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={`meter-seg${i < on ? " on" : ""}`} />
        ))}
      </span>
      <span className="meter-num" aria-hidden="true">{score === null ? "––" : score}</span>
    </span>
  );
}
