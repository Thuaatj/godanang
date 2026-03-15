"use client";

import { Counter, Reveal } from "./Shared";

const STATS = [
  { end: 200,  suffix: "+",    label: "Tour chọn lọc" },
  { end: 50,   suffix: "+",    label: "Villa & Resort" },
  { end: 5000, suffix: "+",    label: "Khách hài lòng" },
  { end: 3,    suffix: " năm", label: "Kinh nghiệm" },
];

export default function StatsSection() {
  return (
    <section style={{ background: "var(--white)", padding: "5rem 2rem 5rem" }}>
      <div style={{ maxWidth: "980px", margin: "0 auto" }}>
        <div
          className="stats-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1rem" }}
        >
          {STATS.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{
                textAlign: "center", padding: "1.8rem 1rem",
                background: "var(--white)", borderRadius: "20px",
                boxShadow: "0 2px 20px rgba(196,152,72,0.08)",
                border: "1px solid rgba(196,152,72,0.1)",
                transition: "transform .3s ease, box-shadow .3s ease",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(196,152,72,0.16)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "none";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 20px rgba(196,152,72,0.08)";
                }}
              >
                <Counter end={c.end} suffix={c.suffix} label={c.label} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}