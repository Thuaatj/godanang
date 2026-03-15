"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function TrustSection() {
  const { ref: sectionRef, visible } = useInView(0.15);

  const items = [
    {
      num: "01",
      bold: "GO DANANG được xây dựng từ góc nhìn của người đi du lịch",
      rest: "không phải chỉ người bán dịch vụ. Chúng tôi hiểu bạn tìm kiếm gì.",
      icon: "✈️",
    },
    {
      num: "02",
      bold: "Mỗi đề xuất đều được đội ngũ chọn lọc, kiểm tra và trải nghiệm lại",
      rest: "trước khi đưa lên nền tảng. Không có nội dung quảng cáo.",
      icon: "🧭",
    },
    {
      num: "03",
      bold: "Những gợi ý hay sẽ giúp cộng đồng có nhiều lựa chọn chất lượng",
      rest: "và đúng gu địa phương hơn.",
      icon: "🌴",
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "90px 50px 60px",
        background: "#ffffff",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* WAVE DIVIDER */}
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 600,
          left: 0,
          width: "100%",
          height: "180px",
          zIndex: 5,
        }}
      >
        <path
          d="M0,90 C200,180 400,-20 720,90 C1040,200 1240,-40 1440,90 L1440,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>

      <style>{`
        @keyframes line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        @keyframes number-rise {
          from { opacity:0; transform: translateY(20px); }
          to   { opacity:1; transform: translateY(0); }
        }

        @media(max-width:640px){
          .trust-grid  { grid-template-columns:1fr!important; gap:40px!important; }
          .trust-h2    { font-size:28px!important; }
        }

        @media(max-width:640px){

  .trust-grid{
    grid-template-columns:1fr!important;
    gap:40px!important;
  }

  .trust-h2{
    font-size:28px!important;
  }

  /* ẨN WAVE MOBILE */

  section svg{
    display:none;
  }

}
      `}</style>

      <div
        className="trust-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 60,
          alignItems: "start",
        }}
      >
        {/* LEFT */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateX(-30px)",
            transition: "all .7s ease",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#C8A84B",
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 14,
                height: 2,
                background: "#C8A84B",
              }}
            />
            Vì sao chúng tôi lắng nghe
          </div>

          <h3
            className="trust-h2"
            style={{
              fontSize: 32,
              fontWeight: 900,
              color: "#1f2937",
              lineHeight: 1.25,
              fontStyle: "italic",
            }}
          >
            VÌ MỖI HÀNH TRÌNH ĐỀU BẮT ĐẦU TỪ{" "}
            <em style={{ color: "#DFC070" }}>TRẢI NGHIỆM THẬT</em>
          </h3>

          <div
            style={{
              marginTop: 32,
              width: 48,
              height: 3,
              background: "linear-gradient(90deg, #C8A84B, transparent)",
            }}
          />
        </div>

        {/* RIGHT */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {items.map(({ num, bold, rest, icon }, i) => (
            <div
              key={num}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.05)";
              }}
              style={{
                display: "flex",
                gap: 20,
                padding: "28px 20px",
                borderRadius: 20,
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "all .35s ease",
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateX(30px)",
                transitionDelay: `${i * 0.15 + 0.2}s`,
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  color: "rgba(200,168,75,0.25)",
                  lineHeight: 1,
                  width: 52,
                }}
              >
                {num}
              </div>

              <div>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>

                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#3f3f3f" }}>{bold}</strong>
                  {" — "}
                  {rest}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}