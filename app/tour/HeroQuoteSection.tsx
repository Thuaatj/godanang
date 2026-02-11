"use client";

import Image from "next/image";

export default function HeroQuoteSection() {
  return (
    <section className="relative h-[320px] md:h-[320px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark + blur overlay */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <div className="mb-3 text-lg">🔥</div>

          <p className="text-sm md:text-base leading-relaxed text-white/85">
            Ðà Nẵng không chỉ nổi tiếng với những bãi biển tuyệt đẹp mà còn là nơi có nhiều điểm đến hấp dẫn mà du khách không thể bỏ lỡ. Một trong những điểm đến nổi bật nhất chính là Ngũ Hành Sơn. Đây là một cụm núi đá vôi nằm cách trung tâm thành phố khoảng 8 km về phía đông nam. Với những hang động kỳ bí và các ngôi chùa cổ kính, Ngũ Hành Sơn là nơi lý tưởng để khám phá văn hóa và lịch sử địa phương.
          </p>

          <button className="mt-6 px-6 py-2 text-sm tracking-widest border border-white/60 hover:bg-white hover:text-black transition">
            KHÁM PHÁ NGAY
          </button>
        </div>
      </div>
    </section>
  );
}
