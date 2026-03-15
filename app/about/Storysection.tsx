"use client";

import { Reveal } from "./Shared";

const LOCATION_TAGS = ["Đà Nẵng", "Hội An", "Bà Nà Hills", "Non Nước"];

export default function StorySection() {
  return (
    <section id="story" style={{ background: "var(--white)", padding: "0rem 2rem 4.5rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="story-grid"
          style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "3rem", alignItems: "center" }}
        >
          {/* Image column */}
          <Reveal dir="left">
            <div style={{ position: "relative" }}>
              <div style={{
                borderRadius: "28px", overflow: "hidden",
                aspectRatio: "4/4", boxShadow: "0 35px 75px rgba(80,50,10,0.18)",
              }}>
                <img
                  src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80"
                  alt="Hội An"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s", display: "block" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Decorative border */}
              <div style={{
                position: "absolute", top: "-16px", left: "-16px",
                width: "52%", height: "52%",
                border: "1.5px solid var(--amber)", borderRadius: "20px",
                opacity: 0.3, zIndex: -1,
              }} />

              {/* Floating badge – bottom right */}
              <div style={{
                position: "absolute", bottom: "24px", right: "-24px",
                background: "white", borderRadius: "20px",
                padding: "0.9rem 1.2rem",
                boxShadow: "0 18px 45px rgba(180,130,50,0.15)",
                border: "1px solid rgba(196,152,72,0.12)",
              }}>
                <div style={{
                  fontSize: "0.65rem", color: "var(--amber)",
                  textTransform: "uppercase", letterSpacing: "0.14em",
                  marginBottom: "0.25rem", fontWeight: 600,
                }}>
                  Đối tác tin cậy
                </div>
                <div style={{
                  fontSize: "1.5rem",
                  fontWeight: 700, color: "var(--brown)", lineHeight: 1,
                }}>
                  100% Địa phương
                </div>
              </div>

              {/* Floating medal – top right */}
              <div style={{
                position: "absolute", top: "30px", right: "-18px",
                background: "linear-gradient(135deg,var(--amber),var(--amber-light))",
                borderRadius: "16px", padding: "0.8rem 1rem",
                boxShadow: "0 12px 35px rgba(196,152,72,0.35)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "1.7rem" }}>🏅</div>
                <div style={{
                  fontSize: "0.6rem", color: "rgba(42,26,4,0.75)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  marginTop: "0.3rem", fontWeight: 600,
                }}>
                  Kiểm chứng
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <Reveal dir="right" delay={0.1}>
            <div>
              <span className="s-label">Về chúng tôi</span>
              <h2 className="s-title" style={{ marginTop: "0.6rem" }}>
                Câu chuyện của<br />
                <em style={{ color: "var(--amber)", fontStyle: "italic" }}>GO DA NANG</em>
              </h2>
              <div className="gold-line" />

              <p style={{ color: "#6a5a48", lineHeight: 1.75, marginBottom: "1.5rem", fontSize: "0.92rem" }}>
                GO DA NANG được tạo ra từ mong muốn đơn giản:{" "}
                <strong style={{ color: "var(--brown)" }}>
                  giúp du khách dễ dàng tìm đúng nơi ở – đúng tour – đúng trải nghiệm
                </strong>, thay vì phải mất thời gian lọc giữa quá nhiều thông tin rời rạc.
              </p>

              <p style={{ color: "#6a5a48", lineHeight: 1.75, fontSize: "0.92rem", marginBottom: "2rem" }}>
                Chúng tôi bắt đầu từ việc làm việc trực tiếp với các đối tác địa phương – chủ villa, đơn vị tour,
                spa và những người đang sống – làm du lịch tại Đà Nẵng. Từ đó{" "}
                <em>chọn lọc, kiểm chứng và giới thiệu</em> những dịch vụ thực sự phù hợp.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {LOCATION_TAGS.map((tag, i) => (
                  <span key={i} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.3rem",
                    fontSize: "0.8rem", color: "var(--taupe)", fontWeight: 500,
                    background: "rgba(196,152,72,0.08)", borderRadius: "20px",
                    padding: "0.3rem 0.8rem", border: "1px solid rgba(196,152,72,0.18)",
                    transition: "background .2s, transform .2s",
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLSpanElement).style.background = "rgba(196,152,72,0.16)";
                      (e.currentTarget as HTMLSpanElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLSpanElement).style.background = "rgba(196,152,72,0.08)";
                      (e.currentTarget as HTMLSpanElement).style.transform = "none";
                    }}
                  >
                    <span style={{ fontSize: "0.6rem", color: "var(--amber)" }}>✦</span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}