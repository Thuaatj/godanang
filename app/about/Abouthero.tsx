"use client";

import { useEffect, useState } from "react";
import { Reveal, WaveDivider } from "./Shared";

export default function AboutHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fn = (e: MouseEvent) =>
      setMouse({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });

    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#1a0f04",

        perspective: "1px",
        perspectiveOrigin: "50% 50%",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background parallax */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          transform: "translateZ(-1px) scale(2)",
          animation: "heroDepth 5s ease-out forwards",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1920&q=85"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(160deg,rgba(26,15,4,0.72) 0%,rgba(50,30,8,0.5) 45%,rgba(196,152,72,0.1) 100%)",
          }}
        />
      </div>

      {/* Warm floating orbs */}
      {[
        { s: 340, x: "70%", y: "10%", c: "rgba(196,152,72,0.07)", a: 9 },
        { s: 240, x: "5%", y: "60%", c: "rgba(196,152,72,0.05)", a: 12 },
      ].map((o, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: o.s,
            height: o.s,
            left: o.x,
            top: o.y,
            borderRadius: "50%",
            background: `radial-gradient(circle,${o.c},transparent)`,
            animation: `floatY ${o.a}s ease-in-out ${i}s infinite`,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Floating shapes */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            zIndex: 2,
            width: `${6 + i * 3}px`,
            height: `${6 + i * 3}px`,
            borderRadius: i % 3 === 0 ? "50%" : i % 3 === 1 ? "3px" : "50% 0",
            background: `rgba(196,152,72,${0.12 + i * 0.04})`,
            left: `${6 + i * 13}%`,
            top: `${22 + (i % 4) * 18}%`,
            animation: `floatRotate ${5 + i}s ease-in-out ${i * 0.5}s infinite`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(6rem,10vw,10rem) 2rem 6rem",
        //   transform: `translate(${mouse.x * 7}px,${mouse.y * 7}px)`,
          transition: "transform 0.15s ease",
        }}
      >
        <div style={{ maxWidth: "720px" }}>
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "rgba(196,152,72,0.14)",
                border: "1px solid rgba(196,152,72,0.28)",
                borderRadius: "30px",
                padding: "0.35rem 1.1rem",
                marginBottom: "1.8rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--amber)",
                  boxShadow: "0 0 8px var(--amber)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: "var(--amber-light)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Nền tảng du lịch địa phương
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              style={{
                fontSize: "clamp(3rem,7vw,5.8rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.06,
                marginBottom: "1.4rem",
              }}
            >
              GO DA NANG
              <span
                style={{
                  display: "block",
                  fontStyle: "italic",
                  color: "var(--amber-light)",
                  fontSize: "0.68em",
                }}
              >
                Trải nghiệm theo cách của bạn
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1.08rem",
                lineHeight: 1.88,
                marginBottom: "0.8rem",
                maxWidth: "560px",
              }}
            >
              Nền tảng kết nối du lịch địa phương, giúp du khách khám phá{" "}
              <strong style={{ color: "rgba(255,248,220,0.95)" }}>
                Đà Nẵng – Hội An
              </strong>{" "}
              qua tour chọn lọc, villa nghỉ dưỡng và trải nghiệm bản địa chất lượng.
            </p>

            <p
              style={{
                color: "rgba(255,248,220,0.4)",
                fontSize: "0.93rem",
                marginBottom: "2.8rem",
                fontStyle: "italic",
              }}
            >
              &quot;Chúng tôi không bán chuyến đi đại trà – chúng tôi mang đến hành trình phù hợp với từng người.&quot;
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <a href="#story" className="cta-btn cta-gold">
              Khám phá ngay <span>↓</span>
            </a>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            color: "rgba(255,240,200,0.3)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          cuộn xuống
        </span>

        <div
          style={{
            width: "1px",
            height: "52px",
            background:
              "linear-gradient(to bottom,rgba(196,152,72,0.6),transparent)",
            animation: "scrollDrop 2s ease-in-out infinite",
          }}
        />
      </div>

      <WaveDivider fill="var(--cream)" position="bottom" variant="gentle" />
    </section>
  );
}