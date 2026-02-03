"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Chẳng biết nên nói gì cả, chỉ thấy rằng: muốn hét lên thật to để cảm ơn các bạn!",
    author: "Sally Nguyễn",
    tour: "Tour Hà Nội – An Lạc Resort 2 ngày 1 đêm",
    tourImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    quote:
      "Cảm ơn PYS Travel đã cử HDV Triệu Tôn Pháy đồng hành cùng đoàn, luôn tạo tiếng cười trong suốt hành trình dài.",
    author: "Minh Hoàng",
    tour: "Tour Hà Giang mùa hoa tam giác mạch",
    tourImage: "https://images.unsplash.com/photo-1601581875039-e8d2d7b6a0d1?w=800&q=80",
  },
  {
    quote:
      "Tour Phú Quốc quá đỉnh, villa đẹp lung linh, dịch vụ tận tâm từ A đến Z!",
    author: "Lan Anh",
    tour: "Tour Phú Quốc – Thiên đường nghỉ dưỡng",
    tourImage: "https://images.unsplash.com/photo-1580130718646-9f694209b207?w=800&q=80",
  },
];

export default function CustomerTestimonials() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-cyan-600 to-blue-800 overflow-hidden">
      {/* Background subtle jumping person */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1552673594-64d0d2d3d4b8?w=1920&q=30" // hình người nhảy vui vẻ
          alt="Background joy"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
            Khách hàng nói về chúng tôi
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-cyan-100 max-w-3xl mx-auto">
            Mang lại sự hài lòng ngoài mong đợi cho khách hàng luôn là mục tiêu hàng đầu của PYS Travel
          </p>
        </motion.div>

        {/* Swiper Slide Quotes */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
          }}
          centeredSlides={true}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="pb-12 md:pb-16"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-cyan-200/30 max-w-2xl mx-auto"
              >
                <p className="text-gray-800 text-base md:text-lg leading-relaxed italic mb-6">
                  &quot;{item.quote}&quot;
                </p>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="font-semibold text-gray-900">{item.author}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.tour}</p>
                  </div>
                  <a
                    href="#"
                    className="text-cyan-600 hover:text-cyan-800 font-medium text-sm underline"
                  >
                    [Xem thêm]
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom "Đã đi tour" cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:mt-12"
        >
          {testimonials.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20"
            >
              <div className="flex items-center gap-4 p-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-300">
                  <Image
                    src={item.tourImage}
                    alt={item.tour}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="inline-block bg-cyan-700 text-white text-xs font-medium px-3 py-1 rounded-full mb-1">
                    Đã đi tour
                  </div>
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {item.tour}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}