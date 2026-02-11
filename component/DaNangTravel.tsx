"use client";

import { useEffect, useRef, useState } from "react";

const DaNangAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Chỉ chạy 1 lần (tương tự AOS once: true)
        }
      },
      {
        threshold: 0.1, // Kích hoạt khi 10% section vào viewport
        rootMargin: "0px 0px -10% 0px", // Trigger sớm hơn chút để mượt
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200px] md:h-[220px] overflow-hidden"
    >
      {/* Background blocks */}
      <div className="absolute inset-0 z-0 flex">
        {/* Vàng */}
        <div
          className={`
            w-[38%] bg-[#ffd700] skew-x-[-12deg] origin-left transition-transform duration-1000 ease-out
            ${isVisible ? "translate-x-0" : "-translate-x-full"}
          `}
        />
        {/* Xám */}
        <div
          className={`
            w-[34%] bg-gray-100 -ml-24 skew-x-[-12deg] origin-left transition-transform duration-1000 ease-out
            ${isVisible ? "translate-x-0" : "-translate-x-full"}
          `}
          style={{ transitionDelay: "0.3s" }}
        />
        {/* Trắng */}
        <div
          className={`
            flex-1 bg-white skew-x-[-12deg] origin-left transition-transform duration-1000 ease-out
            ${isVisible ? "translate-x-0" : "-translate-x-full"}
          `}
          style={{ transitionDelay: "0.6s" }}
        />
      </div>

      {/* Content - dùng AOS cho text nếu muốn, hoặc transition opacity */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div
            className={`transition-opacity duration-800 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          >
            <span className="block text-xs font-semibold tracking-widest text-black uppercase mb-2">
              About Da Nang
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Đà Nẵng <br className="hidden md:block" />
              Thành phố biển đáng sống
            </h2>
          </div>

          <div
            className={`transition-opacity duration-800 delay-200 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Thiên nhiên hài hòa cùng nhịp sống hiện đại, điểm đến nghỉ dưỡng
              hàng đầu miền Trung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaNangAbout;