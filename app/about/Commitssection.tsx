"use client";

import { Reveal } from "./Shared";

export default function CommitsSection() {
  return (
    <section style={{ background: "var(--white)", padding: "7rem 2rem" }}>
      <style>{`
        /* Postcard */
        .cc-postcard{border-radius:20px;overflow:hidden;background:white;box-shadow:0 6px 28px rgba(180,130,50,0.12);border:1px solid rgba(196,152,72,0.15);transition:transform 0.4s,box-shadow 0.4s;cursor:default;position:relative}
        .cc-postcard:hover{transform:translateY(-10px) rotate(0.4deg);box-shadow:0 30px 60px rgba(180,130,50,0.2)!important}
        .cc-postcard .cc-img{width:100%;height:140px;object-fit:cover}
        .cc-postcard .cc-stamp{position:absolute;top:12px;right:12px;width:40px;height:48px;background:linear-gradient(135deg,var(--amber),var(--amber-light));border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;box-shadow:0 2px 8px rgba(196,152,72,0.35);transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1)}
        .cc-postcard:hover .cc-stamp{transform:scale(1.1) rotate(-3deg)}
        /* Boarding pass */
        .cc-boarding{border-radius:20px;background:white;box-shadow:0 6px 28px rgba(122,158,110,0.12);border:1px solid rgba(122,158,110,0.2);overflow:hidden;transition:transform 0.4s,box-shadow 0.4s;cursor:default;position:relative}
        .cc-boarding:hover{transform:translateY(-10px);box-shadow:0 30px 60px rgba(122,158,110,0.2)!important}
        .cc-boarding .cc-top-strip{height:6px;background:linear-gradient(90deg,var(--sage),#a8cc9a)}
        .cc-boarding .cc-perforated{border-top:2px dashed rgba(122,158,110,0.3);margin:0 1.5rem;padding-top:1rem}
        .cc-boarding .cc-body{padding:1.5rem}
        .cc-boarding .cc-from-to{display:flex;align-items:center;gap:0.5rem;font-size:0.7rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--sage);font-weight:600;margin-bottom:0.8rem}
        .cc-plane{display:inline-block;transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1)}
        .cc-boarding:hover .cc-plane{transform:translateX(5px) scale(1.15)}
        /* Luggage tag */
        .cc-tag{border-radius:20px;background:white;box-shadow:0 6px 28px rgba(196,132,90,0.12);border:1px solid rgba(196,132,90,0.18);transition:transform 0.4s,box-shadow 0.4s;cursor:default;position:relative;overflow:hidden}
        .cc-tag:hover{transform:translateY(-10px) rotate(-0.5deg);box-shadow:0 30px 60px rgba(196,132,90,0.2)!important}
        .cc-tag::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--terracotta),#e8a87a)}
        .cc-tag .cc-body{padding:1.8rem 1.5rem 1.5rem}
        .cc-tag .cc-hole{width:20px;height:20px;border-radius:50%;border:2px solid rgba(196,132,90,0.3);position:absolute;bottom:1rem;right:1rem;transition:border-color 0.3s}
        .cc-tag:hover .cc-hole{border-color:rgba(196,132,90,0.7)}
        .cc-tag-icon{display:inline-block;font-size:2rem;margin-bottom:1rem;transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1)}
        .cc-tag:hover .cc-tag-icon{transform:scale(1.15) rotate(-8deg)}
        /* Passport */
        .cc-passport{background:white;border-radius:20px;overflow:hidden;box-shadow:0 6px 28px rgba(155,126,200,0.12);border:1px solid rgba(155,126,200,0.18);transition:transform 0.4s,box-shadow 0.4s;cursor:default;position:relative}
        .cc-passport:hover{transform:translateY(-10px) rotate(0.3deg);box-shadow:0 30px 60px rgba(155,126,200,0.22)!important}
        .cc-passport .cc-pp-cover{height:80px;background:linear-gradient(135deg,#4a3570,#7c5cbf);display:flex;align-items:center;padding:1.2rem 1.5rem;gap:0.8rem}
        .cc-passport .cc-body{padding:1.3rem 1.5rem 1.5rem}
        .cc-pp-icon{font-size:2rem;transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1)}
        .cc-passport:hover .cc-pp-icon{transform:scale(1.2)}
        @media(max-width:768px){.commit-grid{grid-template-columns:1fr!important}}
      `}</style>

      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="s-label">Lời hứa của chúng tôi</span>
            <h2 className="s-title" style={{ marginTop: "0.6rem" }}>Cam kết từ GO DA NANG</h2>
            <div className="gold-line" style={{ margin: "1rem auto 0" }} />
          </div>
        </Reveal>

        <div
          className="commit-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}
        >
          {/* 1 – Postcard */}
          <Reveal delay={0} dir="left">
            <div className="cc-postcard">
              <img className="cc-img" src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=700&q=75" alt="" />
              <div className="cc-stamp">📋</div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "0.62rem", color: "var(--taupe)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.4rem", fontWeight: 600 }}>— Cam kết #01</div>
                <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--brown)", marginBottom: "0.5rem" }}>Thông tin minh bạch</h3>
                <p style={{ color: "#7a6a55", lineHeight: 1.72, fontSize: "0.89rem" }}>Rõ ràng, trung thực – không che giấu, không phóng đại bất kỳ thông tin nào về dịch vụ.</p>
              </div>
            </div>
          </Reveal>

          {/* 2 – Boarding Pass */}
          <Reveal delay={0.1} dir="right">
            <div className="cc-boarding">
              <div className="cc-top-strip" />
              <div className="cc-body">
                <div className="cc-from-to">
                  <span>Du khách</span>
                  <span className="cc-plane">✈</span>
                  <span>Trải nghiệm thật</span>
                </div>
                <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>⭐</div>
                <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--brown)", marginBottom: "0.5rem" }}>Ưu tiên trải nghiệm thực</h3>
                <p style={{ color: "#7a6a55", lineHeight: 1.72, fontSize: "0.89rem", marginBottom: "1rem" }}>Trải nghiệm thật của khách hàng được đặt cao hơn mọi chỉ số kinh doanh.</p>
              </div>
              <div className="cc-perforated">
                <div style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0 1rem", fontSize: "0.68rem", color: "var(--sage)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  <span>Hạng: Thực tế</span>
                  <span>GO-DN-02</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3 – Luggage Tag */}
          <Reveal delay={0.15} dir="left">
            <div className="cc-tag">
              <div className="cc-body">
                <span className="cc-tag-icon">💬</span>
                <div style={{ fontSize: "0.62rem", color: "var(--terracotta)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 600 }}>— Cam kết #03</div>
                <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--brown)", marginBottom: "0.5rem" }}>Hỗ trợ nhanh chóng</h3>
                <p style={{ color: "#7a6a55", lineHeight: 1.72, fontSize: "0.89rem" }}>Đồng hành trước, trong và sau chuyến đi – luôn có mặt khi bạn cần hỗ trợ.</p>
                <div className="cc-hole" />
              </div>
            </div>
          </Reveal>

          {/* 4 – Passport */}
          <Reveal delay={0.2} dir="right">
            <div className="cc-passport">
              <div className="cc-pp-cover">
                <span className="cc-pp-icon">🔄</span>
                <div>
                  <div style={{ fontFamily: "'Lora',serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.2rem" }}>GO DA NANG</div>
                  <div style={{ fontFamily: "'Lora',serif", color: "white", fontWeight: 600, fontSize: "0.9rem" }}>Cam kết chất lượng</div>
                </div>
              </div>
              <div style={{ padding: "1.3rem 1.5rem 1.5rem" }}>
                <div style={{ fontSize: "0.62rem", color: "#9b7ec8", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem", fontWeight: 600 }}>— Cam kết #04</div>
                <h3 style={{ fontFamily: "'Lora',serif", fontSize: "1.35rem", fontWeight: 700, color: "var(--brown)", marginBottom: "0.5rem" }}>Không ngừng cải thiện</h3>
                <p style={{ color: "#7a6a55", lineHeight: 1.72, fontSize: "0.89rem" }}>Lắng nghe, học hỏi và nâng cấp chất lượng dịch vụ sau mỗi hành trình.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}