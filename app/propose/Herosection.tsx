"use client";

export default function TravelShowcaseSection() {
  return (
    <section
  style={{
    padding: "140px 60px",
    minHeight: "110vh",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'Be Vietnam Pro', sans-serif",
    color: "#fff",
    perspective: "1px",
    perspectiveOrigin: "50% 50%",
    transformStyle: "preserve-3d",
  }}
>
  
      {/* Background layer – di chuyển chậm hơn */}
      <div
  className="bg-parallax"
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage: `url('https://danangfantasticity.com/wp-content/uploads/2020/05/mot-buoi-sang-that-khac-cung-binh-minh-tren-bien-da-nang.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
  }}
/>

      {/* Overlay tối + golden tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0, 20, 40, 0.65), rgba(0, 20, 40, 0.75))",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 70% 20%, rgba(240,216,144,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Nội dung chính – di chuyển bình thường (translateZ(0) ngầm định) */}
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          paddingTop: 80, 
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 80,
          position: "relative",
          zIndex: 1,
          transform: "translateZ(0px)", // foreground bình thường
        }}
      >
        {/* LEFT CONTENT – giữ nguyên */}
        <div>
          <h2
            style={{
              fontSize: 50,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 40,
              letterSpacing: "-0.5px",
              textShadow: "0 4px 20px rgba(0,0,0,0.7)",
            }}
          >
            Trải nghiệm du lịch <br />
            đỉnh cao tại{" "}
            <span style={{ color: "#F0D890", textShadow: "0 0 25px rgba(240,216,144,0.8)" }}>
              Đà Nẵng
            </span>
          </h2>


          <p
            style={{
              lineHeight: 1.9,
              fontSize: 18,
              opacity: 0.92,
              maxWidth: 460,
              marginBottom: 35,
              letterSpacing: "0.3px",
            }}
          >
            Khám phá bãi biển cát trắng mịn, villa view biển đẳng cấp và hành trình riêng tư chỉ có tại GO DANANG – nơi giấc mơ Đà Nẵng trở thành hiện thực.
          </p>

         <button
  className="travel-link"
  onClick={() => {
    document
      .getElementById("choose-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Khám phá ngay
  <span className="arrow">→</span>

</button>
        </div>

        {/* RIGHT IMAGE STACK – giữ nguyên animation fan-out */}
        <div
          style={{
            position: "relative",
            height: 480,
            width: 640,
            margin: "0 auto",
            perspective: "1400px",
            transform: "translateZ(0.1px)", // foreground stack cũng ở gần hơn một chút
          }}
          className="image-stack animate-on-load"
        >
          {[
            { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", left: -20, top: 100, rotate: -22, z: 1 },
            { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470", left: 80, top: 50, rotate: -10, z: 2 },
            { src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff", left: 200, top: 0, rotate: 0, z: 3 },
            { src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", left: 320, top: -60, rotate: 10, z: 4 },
            { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", left: 460, top: -100, rotate: 22, z: 5 },
          ].map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`Da Nang travel ${i + 1}`}
              style={{
                position: "absolute",
                width: 240,
                height: 360,
                objectFit: "cover",
                borderRadius: 20,
                left: img.left,
                top: img.top,
                transform: `rotate(${img.rotate}deg) translateZ(${i * 20}px)`,
                boxShadow: "0 30px 60px rgba(0,0,0,0.7), 0 0 40px rgba(240,216,144,0.2)",
                zIndex: img.z,
                transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                cursor: "pointer",
                opacity: 0,
                transformOrigin: "center center",
              }}
              className={`stack-img delay-${i}`}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(${img.rotate}deg) scale(1.12) translateZ(${i * 40}px)`;
                e.currentTarget.style.boxShadow = "0 50px 100px rgba(0,0,0,0.8), 0 0 60px rgba(240,216,144,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${img.rotate}deg) translateZ(${i * 20}px)`;
                e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.7), 0 0 40px rgba(240,216,144,0.2)";
              }}
            />
          ))}
        </div>
      </div>

       {/* WAVE DIVIDER BOTTOM */}
  <svg
    viewBox="0 0 1440 110"
    preserveAspectRatio="none"
    style={{
      position: "absolute",
      bottom:40,
      left: 0,
      width: "100%",
      height: "110px",
      zIndex: 10,
      pointerEvents: "none",
    }}
  >
    <path
      d="M0,0 C300,100 900,-40 1440,40 L1440,110 L0,110 Z"
      fill="#ffffff"
    />
  </svg>

      <style jsx>{`
        .image-stack {
          perspective: 1400px;
        }

        .stack-img {
          transition: all 1.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, opacity, box-shadow;
        }

        .animate-on-load .stack-img {
          opacity: 0;
          transform: rotate(var(--init-rotate)) scale(0.7) translateY(100px) translateZ(-100px);
        }

        .animate-on-load .stack-img.delay-0 { animation: fanOut 2.2s forwards; animation-delay: 0.6s; }
        .animate-on-load .stack-img.delay-1 { animation: fanOut 2.2s forwards; animation-delay: 1s; }
        .animate-on-load .stack-img.delay-2 { animation: fanOut 2.2s forwards; animation-delay: 1.4s; }
        .animate-on-load .stack-img.delay-3 { animation: fanOut 2.2s forwards; animation-delay: 1.8s; }
        .animate-on-load .stack-img.delay-4 { animation: fanOut 2.2s forwards; animation-delay: 2.2s; }

        @keyframes fanOut {
          to {
            opacity: 1;
            transform: rotate(var(--final-rotate)) scale(1) translateY(0) translateZ(0);
          }
        }

        .stack-img.delay-0 { --init-rotate: -35deg; --final-rotate: -22deg; }
        .stack-img.delay-1 { --init-rotate: -25deg; --final-rotate: -10deg; }
        .stack-img.delay-2 { --init-rotate: 0deg;   --final-rotate: 0deg;   }
        .stack-img.delay-3 { --init-rotate: 25deg;  --final-rotate: 10deg;  }
        .stack-img.delay-4 { --init-rotate: 35deg;  --final-rotate: 22deg;  }

        .bg-parallax{
          transform: translateZ(-1px) scale(2.4);
          z-index: -2;
          animation: bgZoomOut 5s cubic-bezier(.22,.61,.36,1) forwards;
        }

        @keyframes bgZoomOut{
          0%{
            transform: translateZ(-1px) scale(2.4);
          }
          100%{
            transform: translateZ(-1px) scale(2);
          }
        }

.travel-link {
      background: none;
      border: none;
      color: #e8c870;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      position: relative;
      letter-spacing: 0.3px;
      transition: color 0.3s ease;
    }

    .travel-link:hover {
      color: #f4dea2;
    }

    .travel-link .arrow {
      transition: transform 0.35s ease;
    }

    .travel-link:hover .arrow {
      transform: translateX(36px);
    }

    .travel-link::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0%;
      height: 2px;
      background: linear-gradient(90deg, #e8c870, #f4dea2);
      transition: width 0.35s ease;
    }

    .travel-link:hover::after {
      width: 120%;
    }

    /* ===== MOBILE RESPONSIVE ===== */

@media (max-width: 768px) {

  section {
    padding: 100px 24px !important;
    min-height: auto !important;
  }

  /* Layout 1 cột */

  section > div:nth-child(4) {
    grid-template-columns: 1fr !important;
    gap: 60px !important;
    text-align: center;
  }

  /* Title */

  h2 {
    font-size: 34px !important;
    line-height: 1.25 !important;
  }

  /* paragraph */

  p {
    font-size: 16px !important;
    max-width: 100% !important;
    margin-left: auto;
    margin-right: auto;
  }

  /* button */

  .travel-link {
    font-size: 18px;
    justify-content: center;
  }

  /* IMAGE STACK */

  .image-stack {
    width: 100% !important;
    height: 360px !important;
    transform: scale(0.78);
  }

  .stack-img {
    width: 160px !important;
    height: 240px !important;
  }

  /* wave divider ẩn */

  svg {
    display: none;
  }
}


/* ===== SMALL PHONE ===== */

@media (max-width: 480px) {

  section {
    padding: 90px 20px !important;
  }

  h2 {
    font-size: 30px !important;
  }

  .image-stack {
    transform: scale(0.65);
    height: 300px !important;
  }

}
  /* ===== MOBILE FIX IMAGE STACK ===== */

@media (max-width:768px){

  .image-stack{
    width:100% !important;
    height:320px !important;
    transform:none !important;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
  }

  .stack-img{
    width:140px !important;
    height:210px !important;
    left:33% !important;
    top:15% !important;
    transform-origin:center !important;
  }

  /* reposition từng ảnh cho cân */

  .stack-img.delay-0{
    transform:translate(-160px,-20px) rotate(-18deg) !important;
  }

  .stack-img.delay-1{
    transform:translate(-80px,-40px) rotate(-8deg) !important;
  }

  .stack-img.delay-2{
    transform:translate(0px,-60px) rotate(0deg) !important;
  }

  .stack-img.delay-3{
    transform:translate(80px,-40px) rotate(8deg) !important;
  }

  .stack-img.delay-4{
    transform:translate(160px,-20px) rotate(18deg) !important;
  }

} 
      `}</style>
    </section>
  );
}