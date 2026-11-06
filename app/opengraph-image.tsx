import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F6F3EC",
          padding: "80px",
          fontFamily: "serif",
          border: "12px solid #D9D4C7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "#D9480F",
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              letterSpacing: "0.15em",
              color: "#5C5A52",
              textTransform: "uppercase",
            }}
          >
            {site.about.availability}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 400,
              color: "#1A1A17",
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {site.name}
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#1A1A17",
              margin: 0,
              fontFamily: "sans-serif",
            }}
          >
            {site.role}, {site.locationDisplay}.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #D9D4C7",
            paddingTop: "24px",
            fontFamily: "monospace",
            fontSize: "20px",
            color: "#5C5A52",
          }}
        >
          <span>github.com/Muhammad08-dot</span>
          <span>{site.email}</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
