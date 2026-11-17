import { ImageResponse } from "next/og";

export const alt = "shh: straight answers on crypto casino privacy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#07080B",
          backgroundImage:
            "linear-gradient(#1F2330 1px, transparent 1px), linear-gradient(90deg, #1F2330 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#E7E9EE",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 600 }}>
          <div style={{ width: 44, height: 18, background: "#E7E9EE", borderRadius: 4 }} />
          shh
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            Play without
            <div style={{ width: 300, height: 70, background: "#E7E9EE", borderRadius: 6 }} />
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>your ID.</div>
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 28, color: "#9AA1B2", fontFamily: "monospace" }}>
          <span style={{ color: "#7CF5C8" }}>no-KYC crypto casinos</span>
          <span>·</span>
          <span>private, not anonymous</span>
        </div>
      </div>
    ),
    size,
  );
}
