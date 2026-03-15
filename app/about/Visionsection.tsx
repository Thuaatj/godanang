"use client";

import { Reveal, WaveDivider } from "./Shared";

const MISSIONS = [
  "Đơn giản hóa việc lên kế hoạch du lịch cho mọi người",
  "Mang trải nghiệm địa phương chất lượng đến gần hơn với du khách",
  "Đồng hành cùng đối tác địa phương phát triển bền vững",
];

export default function VisionSection() {
  return (
    <section
    style={{
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.8)), url('https://naocungdi.com/wp-content/uploads/2020/03/da-nang-thanh-pho-dang-song-nhat-viet-nam.jpg.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "8rem 2rem",
  position: "relative",
  overflow: "hidden",
}}
    >
      <style>{`
        @keyframes ping {
  0%{
    transform:scale(1);
    opacity:0.9;
  }
  70%{
    opacity:0.5;
  }
  100%{
    transform:scale(3.5);
    opacity:0;
  }
}
        @media(max-width:768px){ .vision-grid{grid-template-columns:1fr!important} }
      `}</style>

      {/* Decorative rings */}
      {[400, 280].map((s, i) => (
        <div key={i} style={{
          position: "absolute", right: `${-s / 4}px`, top: "50%",
          transform: "translateY(-50%)",
          width: s, height: s, borderRadius: "50%",
          border: `1px solid rgba(196,152,72,${0.08 - i * 0.03})`,
          zIndex: 1, pointerEvents: "none",
        }} />
      ))}

      <WaveDivider fill="var(--cream)" position="top" variant="sharp" flip />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 3 }}>
        <div
          className="vision-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}
        >
          {/* Vision */}
          <Reveal dir="left">
            <div style={{
                padding: "3rem",
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(196,152,72,0.25)",
                borderRadius: "28px",
                backdropFilter: "blur(5px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
                }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(196,152,72,0.12)", borderRadius: "30px",
                padding: "0.4rem 1rem", marginBottom: "1.8rem",
              }}>
                <span>🎯</span>
                <span style={{ color: "var(--amber-light)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Tầm nhìn
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(1.7rem,3vw,2.4rem)",
                color: "white", lineHeight: 1.28,
                marginBottom: "1.5rem", fontWeight: 700,
              }}>
                Nền tảng du lịch địa phương uy tín hàng đầu tại{" "}
                <em style={{ color: "var(--amber-light)" }}>Đà Nẵng & miền Trung</em>
              </h2>
              <p style={{ color: "rgba(255,240,200,0.6)", lineHeight: 1.85, fontSize: "0.97rem" }}>
                Nơi du khách có thể tìm thấy mọi trải nghiệm chất lượng trong một hệ sinh thái duy nhất –
                được kiểm chứng, được yêu thích, được tin tưởng.
              </p>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal dir="right" delay={0.15}>
            <div style={{
  padding: "3rem",
  background: "rgba(197, 193, 193, 0.1)",
  border: "1px solid rgba(196,152,72,0.25)",
  borderRadius: "28px",
  backdropFilter: "blur(5px)",
  boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
}}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(196,152,72,0.12)", borderRadius: "30px",
                padding: "0.4rem 1rem", marginBottom: "1.8rem",
              }}>
                <span>🚀</span>
                <span style={{ color: "var(--amber-light)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Sứ mệnh
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                {MISSIONS.map((text, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <div style={{
                        width: "32px", height: "32px", borderRadius: "50%",
                        background: "linear-gradient(135deg,var(--amber),var(--amber-light))",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.76rem", fontWeight: 700, color: "#2a1a04",
                        position: "relative", zIndex: 1,
                      }}>
                        {i + 1}
                      </div>
                      <div style={{
                        position: "absolute", inset: 0, borderRadius: "50%",
                        border: "2px solid rgba(196,152,72,0.4)",
                        animation: `ping 2.5s ease-out ${i * 0.6}s infinite`,
                      }} />
                    </div>
                    <p style={{ color: "rgba(255,240,200,0.8)", lineHeight: 1.7, paddingTop: "0.25rem", fontSize: "0.96rem" }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <WaveDivider fill="var(--cream2)" position="bottom" variant="gentle" />
    </section>
  );
}