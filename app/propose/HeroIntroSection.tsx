"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Counter states (giữ nguyên như cũ)
  const [counts, setCounts] = useState({ places: 0, tours: 0, members: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = { places: 500, tours: 200, members: 10000 };
    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;

    const increment = {
      places: Math.ceil(targets.places / steps),
      tours: Math.ceil(targets.tours / steps),
      members: Math.ceil(targets.members / steps),
    };

    let current = { places: 0, tours: 0, members: 0 };
    const timer = setInterval(() => {
      current = {
        places: Math.min(current.places + increment.places, targets.places),
        tours: Math.min(current.tours + increment.tours, targets.tours),
        members: Math.min(current.members + increment.members, targets.members),
      };

      setCounts(current);

      if (
        current.places >= targets.places &&
        current.tours >= targets.tours &&
        current.members >= targets.members
      ) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
  ref={sectionRef}
  style={{
    padding: "70px 30px 30px",
    background: "linear-gradient(to bottom, #ffffff, #fefaf0)",
    position: "relative",
    overflow: "visible",
    zIndex: 5,
    marginTop: -110,
    fontFamily: "'Be Vietnam Pro', sans-serif",
  }}
>
  {/* WAVE DIVIDER (đè lên section phía trên) */}
  <svg
  viewBox="0 0 1440 110"
  preserveAspectRatio="none"
  style={{
    position: "absolute",
    top: 610,
    left: 0,
    width: "100%",
    height: "110px",
    zIndex: 10,
  }}
>
  <path
    d="M0,60 C300,110 900,10 1440,60 L1440,0 L0,0 Z"
    fill="#ffffff"
  />
</svg>

  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(255,255,255,0.82)",
      zIndex: 0,
    }}
  />

  <div
    style={{
      maxWidth: 900,
      margin: "0 auto",
      textAlign: "center",
      position: "relative",
      zIndex: 1,
    }}
  >
    {/* Line divider */}
    <div
      style={{
        height: 2,
        background: "linear-gradient(to right, transparent, #D4B25A, transparent)",
        margin: "0 auto 40px",
        maxWidth: 400,
        borderRadius: 2,
        boxShadow: "0 0 15px rgba(212,178,90,0.3)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scaleX(1)" : "scaleX(0.5)",
        transition: "all 1.2s ease-out",
      }}
    />

    <h3
      style={{
        fontSize: 40,
        fontWeight: 700,
        marginBottom: 24,
        color: "#2C2010",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.95)",
        transition: "all 1s ease-out",
        textShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      CÙNG NHAU TẠO NÊN <br />
      NHỮNG HÀNH TRÌNH ĐÁNG NHỚ TẠI ĐÀ NẴNG
    </h3>

    <p
      style={{
        fontSize: 18,
        color: "#6B5020",
        lineHeight: 1.8,
        maxWidth: 680,
        margin: "0 auto 50px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 1.2s ease-out 0.3s",
      }}
    >
      Nếu bạn biết một nơi đáng đi, một villa đẹp hay một tour thú vị tại Đà Nẵng —
      hãy chia sẻ để cộng đồng GO DANANG có thêm những trải nghiệm tuyệt vời.
    </p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 40,
        flexWrap: "wrap",
      }}
    >
      {[
        { num: counts.places, label: "Địa điểm", suffix: "+" },
        { num: counts.tours, label: "Tour hay", suffix: "+" },
        { num: counts.members, label: "Thành viên", suffix: "K+" },
      ].map((item, i) => (
        <div
          key={item.label}
          style={{
            textAlign: "center",
            minWidth: 140,
            padding: "15px 20px",
            borderRadius: 16,
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(139,105,20,0.12)",
            transition: "all 0.5s ease",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: `${0.4 + i * 0.2}s`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-10px) scale(1.06)";
            e.currentTarget.style.boxShadow = "0 25px 60px rgba(139,105,20,0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(139,105,20,0.12)";
          }}
        >
          <div
            style={{
              fontSize: 35,
              fontWeight: 800,
              color: "#8B6914",
              marginBottom: 8,
            }}
          >
            {item.num.toLocaleString()}
            {item.suffix}
          </div>

          <div
            style={{
              fontSize: 15,
              color: "#A08050",
              fontWeight: 500,
            }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        height: 2,
        background: "linear-gradient(to right, transparent, #D4B25A, transparent)",
        margin: "60px auto 0",
        maxWidth: 400,
        borderRadius: 2,
        boxShadow: "0 0 15px rgba(212,178,90,0.3)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scaleX(1)" : "scaleX(0.5)",
        transition: "all 1.2s ease-out 0.6s",
      }}
    />
  </div>

  <style jsx>{`

/* ===== MOBILE ===== */

@media (max-width:768px){

  section{
    padding:60px 20px 20px !important;
    margin-top:0 !important;
  }

  /* SVG wave */

  section svg{
    top:620px !important;
    height:80px !important;
  }

  /* title */

  h3{
    font-size:28px !important;
    line-height:1.3 !important;
  }

  /* text */

  p{
    font-size:16px !important;
    margin-bottom:40px !important;
  }

  /* stats */

  section > div > div:nth-child(4){
    gap:18px !important;
  }

  section > div > div:nth-child(4) > div{
    min-width:100px !important;
    padding:14px 14px !important;
  }

  section > div > div:nth-child(4) > div div:first-child{
    font-size:26px !important;
  }

}


/* ===== SMALL PHONE ===== */

@media (max-width:480px){

  section{
    padding:50px 16px 20px !important;
  }

  section svg{
    top:650px !important;
    height:60px !important;
  }

  h3{
    font-size:24px !important;
  }

}
  /* ===== HIDE WAVE ON MOBILE ===== */

@media (max-width:768px){

  section svg{
    display:none !important;
  }

  section{
    margin-top:0 !important;
    padding:60px 20px 30px !important;
  }

}

`}</style>
</section>
  );
}