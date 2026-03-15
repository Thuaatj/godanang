"use client";

import { useEffect, useState, useCallback } from "react";
import { Reveal, WaveDivider } from "./Shared";

const PARTNERS = [
  { name: "Villa Đà Nẵng Luxury",   tag: "Lưu trú cao cấp",          icon: "🏡" },
  { name: "Hội An Heritage Tours",  tag: "Tour trải nghiệm",          icon: "🛶" },
  { name: "Mỹ Khê Beach Resort",    tag: "Nghỉ dưỡng biển",           icon: "🌊" },
  { name: "Bà Nà Hills Explorer",   tag: "Tour khám phá",             icon: "🚡" },
  { name: "Lotus Spa & Wellness",   tag: "Thư giãn & Spa",            icon: "🌸" },
  { name: "Phố Cổ Food Tour",       tag: "Ẩm thực địa phương",        icon: "🍜" },
  { name: "Sơn Trà Eco Tours",      tag: "Sinh thái & Thiên nhiên",   icon: "🌿" },
];

function PartnerCarousel() {
  const [active, setActive] = useState(0);
  const len = PARTNERS.length;
  const next = useCallback(() => setActive(a => (a + 1) % len), [len]);
  const prev = useCallback(() => setActive(a => (a - 1 + len) % len), [len]);

  useEffect(() => {
    const t = setInterval(next, 3400);
    return () => clearInterval(t);
  }, [next]);

  const getPos = (i: number) => {
    let d = i - active;
    if (d > len / 2) d -= len;
    if (d < -len / 2) d += len;
    return d;
  };

  return (
    <div style={{
      position: "relative", height: "320px",
      display: "flex", alignItems: "center", justifyContent: "center",
      userSelect: "none",
    }}>
      {PARTNERS.map((p, i) => {
        const d = getPos(i);
        const abs = Math.abs(d);
        if (abs > 2) return null;
        const isActive = d === 0;

        return (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              position: "absolute", width: "260px",
              transform: `translateX(${d * 210}px) scale(${isActive ? 1 : abs === 1 ? 0.74 : 0.54})`,
              opacity: isActive ? 1 : abs === 1 ? 0.5 : 0.25,
              zIndex: 10 - abs,
              transition: "all 0.6s cubic-bezier(0.34,1.4,0.64,1)",
              cursor: isActive ? "default" : "pointer",
            }}
          >
            <div style={{
              background: isActive ? "linear-gradient(145deg,#fff8ed,#ffffff)" : "rgba(255,255,255,0.6)",
              border: isActive ? "1.5px solid rgba(196,152,72,0.5)" : "1px solid rgba(196,152,72,0.15)",
              borderRadius: "24px", padding: "2.2rem 1.8rem", textAlign: "center",
              boxShadow: isActive ? "0 30px 70px rgba(180,130,50,0.18), 0 0 0 1px rgba(196,152,72,0.1)" : "none",
            }}>
              <div style={{ fontSize: "2.8rem", marginBottom: "1rem" }}>{p.icon}</div>
              <div style={{
                fontFamily: "'Lora',serif", fontSize: "1.25rem", fontWeight: 600,
                color: isActive ? "#2a1f0e" : "#8a7560", marginBottom: "0.5rem",
              }}>
                {p.name}
              </div>
              <div style={{
                display: "inline-block",
                background: isActive ? "rgba(196,152,72,0.12)" : "transparent",
                border: isActive ? "1px solid rgba(196,152,72,0.3)" : "none",
                borderRadius: "20px", padding: "0.2rem 0.8rem",
                fontSize: "0.7rem",
                color: isActive ? "var(--amber)" : "#b0a090",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                {p.tag}
              </div>
            </div>
          </div>
        );
      })}

      {/* Arrow buttons */}
      {([{ fn: prev, side: "left" as const, lbl: "‹" }, { fn: next, side: "right" as const, lbl: "›" }]).map(({ fn, side, lbl }) => (
        <button
          key={side}
          onClick={fn}
          style={{
            position: "absolute", [side]: "0", zIndex: 20,
            width: "42px", height: "42px", borderRadius: "50%",
            background: "rgba(196,152,72,0.12)", border: "1px solid rgba(196,152,72,0.3)",
            color: "var(--amber)", fontSize: "1.4rem", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(196,152,72,0.25)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(196,152,72,0.12)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}
        >
          {lbl}
        </button>
      ))}

      {/* Dots */}
      <div style={{
        position: "absolute", bottom: "-14px", left: "50%",
        transform: "translateX(-50%)", display: "flex", gap: "6px",
      }}>
        {PARTNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: active === i ? "22px" : "6px", height: "6px",
              borderRadius: "3px", border: "none", cursor: "pointer",
              background: active === i ? "var(--amber)" : "rgba(196,152,72,0.25)",
              transition: "all 0.3s", padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section style={{
      background: "linear-gradient(160deg,#2a1a04,#3d2810,#251508)",
      padding: "7rem 2rem 6rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(ellipse at 50% 100%,rgba(196,152,72,0.1) 0%,transparent 60%)",
      }} />

      <WaveDivider fill="var(--cream2)" position="top" variant="gentle" flip />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <span className="s-label" style={{ color: "var(--amber-light)" }}>Cùng nhau phát triển</span>
            <h2 className="s-title on-dark" style={{ marginTop: "0.6rem" }}>
              Đối tác & Nhà đầu tư đồng hành
            </h2>
            <div className="gold-line" style={{ margin: "1rem auto 1.5rem" }} />
            <p style={{
              color: "rgba(255,240,200,0.52)", maxWidth: "560px",
              margin: "0 auto 3rem", lineHeight: 1.85, fontSize: "0.97rem",
            }}>
              GO DA NANG hợp tác cùng các đơn vị lưu trú, tour và dịch vụ uy tín tại Đà Nẵng Hội An.
              Luôn sẵn sàng mở rộng với những đối tác có chung tầm nhìn.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}><PartnerCarousel /></Reveal>

        <Reveal delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "4.5rem" }}>
            <a href="#" className="cta-btn cta-gold">Trở thành đối tác →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}