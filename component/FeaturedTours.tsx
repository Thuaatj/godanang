"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { MapPin, Clock, Star, ArrowRight, Users } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const tourItems = [
  {
    id: "01",
    title: "Tour Đà Nẵng – Bà Nà Hills",
    image:
      "https://atravel.vn/storage/upload/ctv/b%C3%A0%20n%C3%A0%20hills/ba-na-hills-1.jpg", // Bà Nà Hills Golden Bridge
    duration: "1 ngày",
    price: "1.290.000đ",
    rating: 4.8,
    reviews: 256,
    location: "Bà Nà Hills",
    highlights: ["Cầu Vàng", "Cáp treo", "Fantasy Park"],
  },
  {
    id: "02",
    title: "Tour Đà Nẵng – Hội An",
    image:
      "https://product.hstatic.net/200000539057/product/anh_man_hinh_2025-04-24_luc_15.14.36_0486ff3d79e84acf804faed936bc55c1_master.png", // Hội An Ancient Town
    duration: "1 ngày",
    price: "950.000đ",
    rating: 4.9,
    reviews: 342,
    location: "Phố cổ Hội An",
    highlights: ["Phố cổ", "Đèn lồng", "Ẩm thực"],
  },
  {
    id: "03",
    title: "Tour Đà Nẵng – Ngũ Hành Sơn",
    image:
      "https://cungdulich.vn/wp-content/uploads/ngu-hanh-son.jpg", // Mountain temple
    duration: "Nửa ngày",
    price: "650.000đ",
    rating: 4.7,
    reviews: 189,
    location: "Ngũ Hành Sơn",
    highlights: ["Động Huyền Không", "Chùa Linh Ứng"],
  },
  {
    id: "04",
    title: "Tour Đà Nẵng – Sơn Trà",
    image:
      "https://hoangphuan.com/wp-content/uploads/2024/05/chua-linh-ung-chon-binh-yen-giua-long-da-nang-013-2.jpg", // Mountain coastal view
    duration: "Nửa ngày",
    price: "580.000đ",
    rating: 4.6,
    reviews: 145,
    location: "Bán đảo Sơn Trà",
    highlights: ["Chùa Linh Ứng", "Bãi Bụt", "Khỉ rừng"],
  },
  {
    id: "05",
    title: "Tour Đà Nẵng – Cù Lao Chàm",
    image:
      "https://vcdn1-dulich.vnecdn.net/2024/06/01/CLC1-jpeg-7292-1717256606.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=y8KS482Nkfmh385M5PjGMg", // Island beach
    duration: "1 ngày",
    price: "1.450.000đ",
    rating: 4.9,
    reviews: 298,
    location: "Đảo Cù Lao Chàm",
    highlights: ["Lặn biển", "Bãi Chồng", "Hải sản tươi"],
  },
  {
    id: "06",
    title: "Tour Đà Nẵng – Huế",
    image:
      "https://lienbangtravel.com/files/product/du-lich-da-nang-hue-hoi-an-quang-binh-tron-goi-5-ngay-23ijtxmi.jpg", // Imperial city
    duration: "1 ngày",
    price: "1.190.000đ",
    rating: 4.8,
    reviews: 267,
    location: "Cố đô Huế",
    highlights: ["Đại Nội", "Chùa Thiên Mụ", "Ẩm thực Huế"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export default function FeaturedTours() {
  return (
    <section className="relative py-6 md:py-8 overflow-hidden">

        
      {/* Background Image with Yellow Tint */}
      <div className="absolute inset-0">
      <Image
        src="https://www.vietnamairlines.com/~/media/Images/HeroBannerDestination/Vietnam/Herro%20banner/DANANG/Hero%20banner/1300x450/Danang_banner_2600x1111_0.jpg"
        alt="Travel Background"
        fill
        className="
          object-cover
          brightness-110
          contrast-105
          saturate-110
          "
        />

          {/* Overlay làm sáng – KHÔNG làm mờ ảnh */}
          <div className="absolute inset-0 bg-white/30" />

          {/* Overlay vàng nhẹ */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f7b01a]/70 via-transparent to-[#f7b01a]/30" />
        </div>


      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-[#f7b01a]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#f7b01a]/15 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f7b01a]/30 backdrop-blur-sm border border-[#f7b01a]/40">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#f7b01a]" />
              <span className="text-black font-semibold text-xs md:text-sm">Khám phá Đà Nẵng</span>
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider uppercase text-black mb-3">
            🌟 CÁC TOUR NỔI BẬT
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#f7b01a] to-transparent mx-auto mb-4" />

          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Những hành trình được thiết kế tinh tế, mang đến trải nghiệm đẳng cấp và kỷ niệm khó quên
          </p>
        </motion.div>

        {/* Tours Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={28}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 22 },
            1280: { slidesPerView: 4, spaceBetween: 26 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          loop
          className="!pb-12 md:!pb-14 tour-swiper"
        >
          {tourItems.map((tour, index) => (
            <SwiperSlide key={tour.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative h-[420px] md:h-[440px] rounded-2xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Tour Number Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span className="text-lg md:text-xl font-black text-[#f7b01a]">{tour.id}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-black/60 backdrop-blur-md flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-semibold text-xs md:text-sm">{tour.rating}</span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 px-2.5 py-1.5 md:px-3 md:py-2 rounded-lg bg-white/95 backdrop-blur-sm">
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#f7b01a]" />
                    <span className="text-xs md:text-sm font-semibold text-gray-800 truncate">{tour.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 md:p-4">
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1.5 md:mb-2 line-clamp-2 group-hover:text-[#f7b01a] transition-colors duration-300">
                    {tour.title}
                  </h3>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1 md:gap-1.5 mb-2 md:mb-3">
                    {tour.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full bg-[#f7b01a]/10 text-xs font-medium text-gray-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Info Row */}
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 text-xs md:text-sm text-gray-600">
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#f7b01a]" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 md:gap-1.5">
                      <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#f7b01a]" />
                      <span className="hidden sm:inline">{tour.reviews} reviews</span>
                      <span className="sm:hidden">{tour.reviews}</span>
                    </div>
                  </div>

                  {/* Price & Button */}
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5 md:mb-1">Giá từ</p>
                      <p className="text-lg md:text-xl font-black text-[#f7b01a]">
                        {tour.price}
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl
                        bg-gradient-to-r from-[#f7b01a] to-orange-500
                        text-white font-semibold text-xs md:text-sm
                        shadow-lg hover:shadow-xl
                        transition-all duration-300
                        group/btn
                      "
                    >
                      <span>Đặt ngay</span>
                      <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f7b01a]/5 to-transparent" />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 md:mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="
              inline-flex items-center gap-2 md:gap-3 
              px-6 py-2.5 md:px-8 md:py-3 rounded-full
              bg-white border-2 border-[#f7b01a]
              text-[#f7b01a] font-bold text-base md:text-lg
              hover:bg-[#f7b01a] hover:text-white
              shadow-lg hover:shadow-xl
              transition-all duration-300
              group
            "
          >
            <span>Xem tất cả các tour</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .tour-swiper .swiper-button-prev,
        .tour-swiper .swiper-button-next {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .tour-swiper .swiper-button-prev,
          .tour-swiper .swiper-button-next {
            width: 48px;
            height: 48px;
          }
        }

        .tour-swiper .swiper-button-prev::after,
        .tour-swiper .swiper-button-next::after {
          font-size: 16px;
          font-weight: bold;
          color: #000;
        }

        @media (min-width: 768px) {
          .tour-swiper .swiper-button-prev::after,
          .tour-swiper .swiper-button-next::after {
            font-size: 18px;
          }
        }

        .tour-swiper .swiper-button-prev:hover,
        .tour-swiper .swiper-button-next:hover {
          background: #f7b01a;
          transform: scale(1.1);
        }

        .tour-swiper .swiper-button-prev:hover::after,
        .tour-swiper .swiper-button-next:hover::after {
          color: #fff;
        }

        .tour-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .tour-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
          }
        }

        .tour-swiper .swiper-pagination-bullet-active {
          background: #f7b01a;
          width: 24px;
          border-radius: 5px;
        }

        @media (min-width: 768px) {
          .tour-swiper .swiper-pagination-bullet-active {
            width: 30px;
          }
        }

        @media (max-width: 640px) {
          .tour-swiper .swiper-button-prev {
            left: 8px;
          }

          .tour-swiper .swiper-button-next {
            right: 8px;
          }
        }
      `}</style>
    </section>
  );
}