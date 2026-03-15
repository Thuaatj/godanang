"use client";

import { useEffect, useRef, useState } from "react";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "120px 60px",
        background: "#F5EFE0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes cta-rotate {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes cta-pulse {
          0%,100% { opacity: .5; transform: translate(-50%,-50%) scale(1); }
          50%      { opacity: .8; transform: translate(-50%,-50%) scale(1.05); }
        }
        @media(max-width:640px){
          .cta-pad { padding:80px 20px!important; }
          .cta-h2  { font-size:36px!important; }
          .cta-btn { padding:16px 32px!important; font-size:15px!important; }
        }
      `}</style>

      {/* Rotating ring bg */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 700, height: 700, borderRadius: "50%",
        border: "1px solid rgba(224,90,58,0.08)",
        animation: "cta-rotate 30s linear infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 500, height: 500, borderRadius: "50%",
        border: "1px solid rgba(26,107,138,0.07)",
        animation: "cta-rotate 20s linear infinite reverse",
        pointerEvents: "none",
      }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(224,90,58,0.06) 0%, transparent 70%)",
        animation: "cta-pulse 5s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      {/* Corner decorations */}
      <div style={{
        position: "absolute", top: 40, left: 60, fontSize: 28,
        opacity: 0.08, fontFamily: "'Playfair Display', serif", color: "#2C2825",
        transform: visible ? "none" : "translateX(-20px)",
        transition: "opacity .8s .3s, transform .8s .3s",
        ...(visible ? { opacity: 0.08 } : { opacity: 0 }),
      }}>✦</div>
      <div style={{
        position: "absolute", bottom: 40, right: 60, fontSize: 20,
        opacity: visible ? 0.06 : 0, fontFamily: "'Playfair Display', serif", color: "#2C2825",
        transition: "opacity .8s .5s",
      }}>✦</div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
        {/* Label */}
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: 3,
          textTransform: "uppercase", color: "#E05A3A", marginBottom: 20,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
          transition: "opacity .6s ease, transform .6s ease",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          <span style={{ display: "inline-block", width: 20, height: 1.5, background: "#E05A3A", borderRadius: 2 }} />
          Cùng nhau tạo nên điều đặc biệt
          <span style={{ display: "inline-block", width: 20, height: 1.5, background: "#E05A3A", borderRadius: 2 }} />
        </div>

        <h2
          className="cta-h2"
          style={{
            fontSize: 58, fontWeight: 900,
            color: "#2C2825", lineHeight: 1.08, marginBottom: 20,
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(24px)",
            transition: "opacity .7s ease .1s, transform .7s ease .1s",
          }}
        >
          ĐÀ NẴNG SẼ{" "}
          <em style={{
            fontStyle: "italic", color: "#1A6B8A",
            position: "relative", display: "inline-block",
          }}>
            HAY HƠN
            <span style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
              background: "linear-gradient(90deg, #1A6B8A 0%, rgba(26,107,138,0.2) 100%)",
              borderRadius: 2,
              transform: visible ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "transform .8s ease .6s",
            }} />
          </em>
          {" "}KHI BẠN CÙNG GÓP MẶT
        </h2>

        <p style={{
          fontSize: 16, lineHeight: 1.8, color: "#7A6E65", marginBottom: 52,
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
          transition: "opacity .65s ease .2s, transform .65s ease .2s",
        }}>
          GO DANANG không chỉ là nền tảng đặt dịch vụ, mà là nơi cộng đồng cùng nhau tạo nên những chuyến đi đáng nhớ.
        </p>

        {/* CTA Button */}
        <button
          className="cta-btn"
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => document.getElementById("choose-section")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            padding: "20px 52px",
            background: hovered
              ? "linear-gradient(135deg, #E05A3A 0%, #c44a2a 100%)"
              : "#E05A3A",
            color: "#fff", border: "none", borderRadius: 100,
            fontFamily: "inherit", fontWeight: 700, fontSize: 17, cursor: "pointer",
            boxShadow: hovered
              ? "0 12px 36px rgba(224,90,58,0.45)"
              : "0 4px 20px rgba(224,90,58,0.32)",
            transition: "all .35s cubic-bezier(.34,1.56,.64,1)",
            transform: hovered ? "translateY(-3px) scale(1.02)" : "translateY(0) scale(1)",
            opacity: visible ? 1 : 0,
            animation: visible ? "none" : "none",
          }}
          style2={{ // will be ignored, just for transitions
            opacity: visible ? 1 : 0,
          } as React.CSSProperties}
        >
          <span>👉</span>
          <span>Bắt đầu chia sẻ cùng GO DANANG</span>
          <span style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "grid", placeItems: "center",
            fontSize: 13,
            transition: "transform .3s ease",
            transform: hovered ? "translateX(4px)" : "translateX(0)",
          }}>→</span>
        </button>

        {/* Sub text */}
        <p style={{
          fontSize: 13, color: "#A09285", marginTop: 20,
          opacity: visible ? 1 : 0,
          transition: "opacity .7s ease .5s",
        }}>
          Miễn phí · Không cần đăng ký · Gửi trong 2 phút
        </p>
      </div>
    </section>
  );
}