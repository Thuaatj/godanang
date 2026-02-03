"use client";

import { useEffect, useRef, useState } from "react";

const DaNangTravelExperience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Chỉ chạy một lần
        }
      },
      {
        threshold: 0.15, // Kích hoạt khi ~15% section vào viewport
        rootMargin: "0px 0px -10% 0px",
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
      {/* Background blocks với hiệu ứng sweep từ trái sang phải */}
      <div className="absolute inset-0 z-0 flex">
        {/* Trắng – đầu tiên */}
        <div
          className={`
            flex-1 bg-white skew-x-[12deg] origin-left
            transition-transform duration-1000 ease-out
            ${isVisible ? "translate-x-0" : "-translate-x-full"}
          `}
        />

        {/* Xám – delay giữa */}
        <div
          className={`
            w-[34%] bg-gray-100 -mr-24 skew-x-[12deg] origin-right
            transition-transform duration-1000 ease-out
            ${isVisible ? "translate-x-0" : "-translate-x-full"}
          `}
          style={{ transitionDelay: "0.3s" }}
        />

        {/* Vàng – delay cuối */}
        <div
          className={`
            w-[38%] bg-[#f7b01a] skew-x-[12deg] origin-right
            transition-transform duration-1000 ease-out
            ${isVisible ? "translate-x-0" : "-translate-x-full"}
          `}
          style={{ transitionDelay: "0.6s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* LEFT – Small text */}
          <div
            className={`transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Biển xanh, núi non, ẩm thực đặc sắc và những hành trình khám phá mang
              dấu ấn bản địa khó quên.
            </p>
          </div>

          {/* RIGHT – Main content */}
          <div
            className={`transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <span className="block text-xs font-semibold tracking-widest text-white uppercase mb-2 lg:ml-58">
              Travel Experience
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug lg:ml-58">
              Trải nghiệm du lịch <br className="hidden md:block" />
              đậm chất miền Trung
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaNangTravelExperience;