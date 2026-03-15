"use client";

import { Reveal, WaveDivider } from "./Shared";

const SERVICES = [
  {
    icon: "🔍", num: "01",
    title: "Chọn lọc dịch vụ chất lượng",
    desc: "Tour – Villa – Spa được kiểm tra, trải nghiệm và đánh giá thực tế trước khi giới thiệu.",
    img: "https://i.pinimg.com/736x/41/d3/4f/41d34f0f7e73c07212c618d2f37052ee.jpg",
    col: "#c49848",
  },
  {
    icon: "🤝", num: "02",
    title: "Kết nối du khách & địa phương",
    desc: "Giúp dịch vụ địa phương tiếp cận đúng khách hàng, đúng nhu cầu – tạo giá trị hai chiều.",
    img: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&q=80",
    col: "#b87c3a",
  },
  {
    icon: "📍", num: "03",
    title: "Gợi ý trải nghiệm phù hợp",
    desc: "Cá nhân hóa theo thời gian, ngân sách và phong cách du lịch riêng của từng người.",
    img: "https://dntt.mediacdn.vn/197608888129458176/2023/5/27/4-copy-1685183206682243075231.jpg",
    col: "#7a9e6e",
  },
  {
    icon: "📈", num: "04",
    title: "Hệ sinh thái du lịch bền vững",
    desc: "Ưu tiên giá trị lâu dài thay vì số lượng – xây dựng cùng cộng đồng địa phương.",
    img: "https://img.cand.com.vn/resize/800x800/NewFiles/Images/2023/06/20/Untitled_1-1687258929221.jpg",
    col: "#c4845a",
  },
];

export default function ServicesSection() {
  return (
    <section
  style={{
    backgroundImage:
      "linear-gradient(rgba(20,10,0,0.18), rgba(20,10,0,0.8)), url('https://media.thuonghieucongluan.vn/uploads/2019_04_28/1-1556406850.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "7rem 2rem",
    position: "relative",
    overflow: "hidden",
  }}
>
      <style>{`
        .svc-card{
  position:relative;
  border-radius:24px;
  overflow:hidden;
  cursor:pointer;
  height:370px;

  background:rgba(255,255,255,0.06);
  backdrop-filter:blur(8px);

  border:1px solid rgba(255,255,255,0.15);

  transition:
  transform 0.5s cubic-bezier(0.16,1,0.3,1),
  box-shadow 0.5s;
}
        .svc-card:hover{
  transform:translateY(-14px) scale(1.03);

  box-shadow:
  0 40px 90px rgba(0,0,0,0.45),
  0 10px 40px rgba(0,0,0,0.3);
}
        .svc-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.8s cubic-bezier(0.16,1,0.3,1)}
        .svc-card:hover .svc-img{transform:scale(1.12)}
        .svc-content{position:absolute;inset:0;padding:2rem;display:flex;flex-direction:column;justify-content:flex-end}
        .svc-num{font-size:4.5rem;font-weight:700;color:rgba(255,255,255,0.1);line-height:1;position:absolute;top:0.8rem;right:1.2rem;transition:color 0.4s}
        .svc-card:hover .svc-num{color:rgba(255,255,255,0.22)}
        .svc-icon-pill{display:inline-flex;align-items:center;gap:0.4rem;padding:0.3rem 0.8rem;border-radius:20px;font-size:0.85rem;margin-bottom:0.9rem;backdrop-filter:blur(8px);transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1)}
        .svc-card:hover .svc-icon-pill{transform:scale(1.08) translateY(-2px)}
        .svc-title{font-size:1.35rem;font-weight:700;color:white;line-height:1.25;margin-bottom:0.4rem}
        .svc-desc{font-size:0.85rem;color:rgba(255,255,255,0);line-height:1.65;overflow:hidden;max-height:0;transition:color 0.4s 0.1s,max-height 0.4s}
        .svc-card:hover .svc-desc{color:rgba(255,255,255,0.82);max-height:80px}
        .svc-more{display:inline-flex;align-items:center;gap:0.3rem;font-size:0.8rem;color:rgba(255,255,255,0);margin-top:0.6rem;transition:color 0.3s 0.15s,transform 0.3s 0.15s;transform:translateX(-8px)}
        .svc-card:hover .svc-more{color:rgba(255,255,255,0.9);transform:translateX(0)}
        .svc-bar{position:absolute;bottom:0;left:0;right:0;height:3px;transform:scaleX(0);transform-origin:left;transition:transform 0.5s cubic-bezier(0.16,1,0.3,1)}
        .svc-card:hover .svc-bar{transform:scaleX(1)}
        @media(max-width:1024px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:768px){.svc-grid{grid-template-columns:1fr!important}.svc-card{height:300px}.svc-desc{color:rgba(255,255,255,0.78)!important;max-height:80px!important}.svc-more{color:rgba(255,255,255,0.85)!important;transform:translateX(0)!important}}
      `}</style>

      {/* Background radial glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(ellipse at 10% 50%,rgba(196,152,72,0.06) 0%,transparent 55%),radial-gradient(ellipse at 90% 20%,rgba(196,132,90,0.05) 0%,transparent 50%)",
      }} />

      <WaveDivider fill="var(--cream)" position="top" variant="gentle" flip />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span 
  className="s-label"
  style={{
    color: "#ffd27a",
    fontWeight: 600,
    letterSpacing: "1px",
    textShadow: "0 4px 20px rgba(0,0,0,0.6)"
  }}
>
  Hoạt động hàng ngày
</span>

<h2
  className="s-title"
  style={{
    marginTop: "0.6rem",
    color: "#fff",
    textShadow: "0 8px 35px rgba(0,0,0,0.7)"
  }}
>
  GO DA NANG đang làm gì?
</h2>
            <div className="gold-line" style={{ margin: "1rem auto 0" }} />
          </div>
        </Reveal>

        <div
          className="svc-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.2rem" }}
        >
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 0.1} dir="up">
              <div className="svc-card" style={{ boxShadow: "0 8px 30px rgba(80,50,10,0.14)" }}>
                <img className="svc-img" src={s.img} alt={s.title} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(180deg,rgba(26,15,4,0.08) 0%,rgba(26,15,4,0.78) 55%,rgba(26,15,4,0.95) 100%)",
                }} />
                <div className="svc-num">{s.num}</div>
                <div className="svc-content">
                  <div
                    className="svc-icon-pill"
                    style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)" }}
                  >
                    <span>{s.icon}</span>
                  </div>
                  <h3 className="svc-title">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <span className="svc-more">Tìm hiểu thêm →</span>
                </div>
                <div className="svc-bar" style={{ background: s.col }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <WaveDivider fill="var(--cream)" position="bottom" variant="sharp" />
    </section>
  );
}