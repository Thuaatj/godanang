"use client";

import { Reveal } from "./Shared";

const VALUES = [
  {
    num: "01",
    title: "Chân thật",
    desc: "Thông tin rõ ràng, không phóng đại. Trải nghiệm thật luôn được đặt lên hàng đầu. Mọi đề xuất đều đến từ sự trải nghiệm và kiểm chứng thực tế.",
    emoji: "🎯",
    accent: "#c49848",
    bg: "linear-gradient(135deg,#fff8ed,#fef0d4)",
  },
  {
    num: "02",
    title: "Chọn lọc",
    desc: "Không nhiều nhưng đúng và phù hợp. Mỗi đề xuất đều qua kiểm chứng kỹ lưỡng.",
    emoji: "✨",
    accent: "#b87c3a",
    bg: "linear-gradient(170deg,#fffcf5,#fff8e8)",
  },
  {
    num: "03",
    title: "Địa phương hóa",
    desc: "Tôn trọng văn hóa, con người và giá trị bản địa của Đà Nẵng – Hội An.",
    emoji: "🌿",
    accent: "#7a9e6e",
    bg: "linear-gradient(135deg,#f7fff4,#ecf9e8)",
  },
  {
    num: "04",
    title: "Khách hàng làm trung tâm",
    desc: "Mỗi hành trình đều bắt đầu từ nhu cầu thực tế và mong muốn của du khách.",
    emoji: "❤️",
    accent: "#c4845a",
    bg: "linear-gradient(135deg,#fff5f0,#ffe8dc)",
  },
  {
    num: "05",
    title: "Bền vững",
    desc: "Phát triển du lịch song hành cùng cộng đồng và môi trường địa phương.",
    emoji: "♻️",
    accent: "#9b7ec8",
    bg: "linear-gradient(135deg,#f8f4ff,#ede5ff)",
  },
];

export default function ValuesSection() {
  return (
    <section style={{ background: "var(--white)", padding: "0rem 2rem" }}>
      <style>{`

        /* Panorama card */

        .val-panorama{
          grid-column:1/-1;
          background:linear-gradient(135deg,#fff8ed,#fef0d4);
          border-radius:24px;
          padding:0;
          overflow:hidden;
          display:flex;
          box-shadow:0 4px 28px rgba(196,152,72,0.1);
          border:1px solid rgba(196,152,72,0.15);
          transition:transform 0.4s,box-shadow 0.4s;
        }

        .val-panorama:hover{
          transform:translateY(-8px);
          box-shadow:0 24px 55px rgba(196,152,72,0.2)!important;
        }

        .val-pano-icon{
          font-size:4rem;
          transition:transform 0.4s;
        }

        .val-panorama:hover .val-pano-icon{
          transform:scale(1.15) rotate(-5deg);
        }

        /* Tall cards */

        .val-tall{
          border-radius:24px;
          padding:1.5rem 2rem;
          overflow:hidden;
          position:relative;
          box-shadow:0 4px 24px rgba(196,152,72,0.08);
          border:1px solid rgba(196,152,72,0.12);
          transition:transform 0.4s,box-shadow 0.4s;
          min-height:200px;
          display:flex;
          flex-direction:column;
          justify-content:flex-end;
        }

        .val-tall:hover{
          transform:translateY(-10px);
          box-shadow:0 26px 55px rgba(180,130,50,0.18)!important;
        }

        .val-tall-num{
          font-size:5rem;
          font-weight:700;
          position:absolute;
          top:-1rem;
          right:0.5rem;
          line-height:1;
          opacity:0.06;
        }

        .val-tall-emoji{
          font-size:2rem;
          margin-bottom:1rem;
        }

        /* Diamond */

        .val-diamond{
          background:linear-gradient(135deg,#fff5f0,#ffe8dc);
          border-radius:24px;
          padding:2.2rem;
          overflow:hidden;
          position:relative;
          box-shadow:0 4px 24px rgba(196,132,90,0.1);
          border:1px solid rgba(196,132,90,0.15);
          transition:transform 0.4s;
        }

        .val-diamond:hover{
          transform:translateY(-10px);
        }

        .val-dia-icon{
          font-size:2.4rem;
          margin-bottom:1.2rem;
        }

        /* Banner */

        .val-banner{
          grid-column:1/-1;
          border-radius:24px;
          overflow:hidden;
          position:relative;
          box-shadow:0 4px 28px rgba(155,126,200,0.12);
          border:1px solid rgba(155,126,200,0.18);
          background:linear-gradient(135deg,#f8f4ff,#ede5ff);
          transition:transform 0.4s;
        }

        .val-banner:hover{
          transform:translateY(-8px);
        }

        .val-banner-icon{
          font-size:3rem;
        }

        /* ===== MOBILE RESPONSIVE ===== */

        @media(max-width:768px){

          section{
            padding:0rem 1rem!important;
          }

          /* panorama stack */

          .val-panorama{
            flex-direction:column;
          }

          .val-panorama > div:first-child{
            width:100%;
          }

          .val-panorama > div:last-child{
            border-left:none!important;
            border-top:1px dashed rgba(196,152,72,0.25);
          }

          /* row 2 grid */

          .val-main-grid{
            grid-template-columns:1fr!important;
          }

          /* row 3 grid */

          .val-row3{
            grid-template-columns:1fr!important;
          }

          /* banner layout */

          .val-banner-content{
            flex-direction:column;
            align-items:flex-start!important;
          }

          .val-banner-icon{
            font-size:2.4rem;
          }

          .val-tall-num{
            font-size:3rem;
          }

        }

      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="s-label">DNA của chúng tôi</span>
            <h2 className="s-title" style={{ marginTop: "0.6rem" }}>
              Giá trị cốt lõi
            </h2>
            <div className="gold-line" style={{ margin: "1rem auto 0" }} />
          </div>
        </Reveal>

        {/* Panorama */}
        <Reveal>
          <div className="val-panorama" style={{ marginBottom: "1.3rem" }}>
            <div
              style={{
                flex: "0 0 220px",
                background:
                  "linear-gradient(135deg,var(--amber),var(--amber-light))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2.5rem",
              }}
            >
              <div>
                <div className="val-pano-icon">{VALUES[0].emoji}</div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginTop: "0.5rem",
                  }}
                >
                  {VALUES[0].num}
                </div>
              </div>
            </div>

            <div
              style={{
                flex: 1,
                padding: "1.8rem 2.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 700,
                  marginBottom: "0.8rem",
                }}
              >
                {VALUES[0].title}
              </h3>

              <p style={{ lineHeight: 1.8, maxWidth: "520px" }}>
                {VALUES[0].desc}
              </p>
            </div>

            <div
              style={{
                flex: "0 0 180px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                borderLeft: "1px dashed rgba(196,152,72,0.25)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 700 }}>100%</div>
                <div style={{ fontSize: "0.7rem" }}>Thật sự</div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Row 2 */}
        <div
          className="val-main-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.3rem",
            marginBottom: "1.3rem",
          }}
        >
          {VALUES.slice(1, 3).map((v, i) => (
            <Reveal key={i}>
              <div className="val-tall" style={{ background: v.bg }}>
                <div className="val-tall-num">{v.num}</div>

                <div>
                  <div className="val-tall-emoji">{v.emoji}</div>

                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    {v.title}
                  </h3>

                  <p style={{ marginTop: "0.5rem" }}>{v.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Row 3 */}
        <div
          className="val-row3"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "1.3rem",
          }}
        >
          <Reveal>
            <div className="val-diamond">
              <span className="val-dia-icon">{VALUES[3].emoji}</span>

              <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }}>
                {VALUES[3].title}
              </h3>

              <p style={{ marginTop: "0.5rem" }}>{VALUES[3].desc}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="val-banner">
              <div
                className="val-banner-content"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  padding: "1.8rem 2.2rem",
                  gap: "2rem",
                }}
              >
                <div className="val-banner-icon">{VALUES[4].emoji}</div>

                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1.55rem", fontWeight: 700 }}>
                    {VALUES[4].title}
                  </h3>

                  <p style={{ marginTop: "0.5rem", maxWidth: "460px" }}>
                    {VALUES[4].desc}
                  </p>
                </div>

                <div style={{ opacity: 0.5 }}>
                  <div style={{ fontSize: "5rem", fontWeight: 700 }}>∞</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}