"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const tourItems = [
  {
    id: "01",
    title: "Tour Đà Nẵng – Bà Nà Hills",
    image:
      "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1470&q=80",
    duration: "1 ngày",
    price: "1.290.000đ",
    rating: 4.8,
  },
  {
    id: "02",
    title: "Tour Đà Nẵng – Hội An",
    image:
      "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1470&q=80",
    duration: "1 ngày",
    price: "1.290.000đ",
    rating: 4.8,
  },
  {
    id: "03",
    title: "Tour Đà Nẵng – Ngũ Hành Sơn",
    image:
      "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1470&q=80",
    duration: "1 ngày",
    price: "1.290.000đ",
    rating: 4.8,
  },
  {
    id: "04",
    title: "Tour Đà Nẵng – Sơn Trà",
    image:
      "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1470&q=80",
    duration: "1 ngày",
    price: "1.290.000đ",
    rating: 4.8,
  },
  {
    id: "05",
    title: "Tour Đà Nẵng – Cù Lao Chàm",
    image:
      "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1470&q=80",
    duration: "1 ngày",
    price: "1.290.000đ",
    rating: 4.8,
  },
  {
    id: "06",
    title: "Tour Đà Nẵng – Sơn Trà",
    image:
      "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1470&q=80",
    duration: "1 ngày",
    price: "1.290.000đ",
    rating: 4.8,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function FeaturedTours() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <section 
      className="
        relative py-16 md:py-24 overflow-hidden
        bg-[linear-gradient(135deg,#FFF6D8_0%,#FFFFFF_50%,#FFE9A8_100%)]
      "
    >

      {/* Background */}
      {/* <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600320254374-ce2d293c324e?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div> */}

      <div className="max-w-[1500px] mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl  font-semibold tracking-wider uppercase text-black">
            CÁC TOUR NỔI BẬT
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Những hành trình được thiết kế tinh tế, mang đến trải nghiệm
            đẳng cấp và kỷ niệm khó quên.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={28}
          slidesPerView={4}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="!pb-16 tour-swiper"
        >
          {tourItems.map((tour) => (
            <SwiperSlide key={tour.id}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative h-[500px] rounded-xl overflow-hidden shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width:768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Title always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-xl font-bold text-white transition duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                    {tour.title}
                  </h3>
                </div>

                {/* Hover panel */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 min-h-[210px]">
                  <h3 className="text-lg font-bold mb-2 text-[#f7b01a]">
                    {tour.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-1">
                    ⏱ {tour.duration}
                  </p>

                  <p className="text-sm mb-1 text-gray-300">
                    Giá từ{" "}
                    <span className="text-[#f7b01a] font-semibold">
                      {tour.price}
                    </span>
                  </p>

                  <p className="text-sm text-gray-300 mb-3">
                    ⭐ {tour.rating}/5
                  </p>

                  <button className="w-full py-2 text-sm font-semibold bg-[#f7b01a] text-black hover:opacity-90 transition rounded-md">
                    Xem chi tiết
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation style */}
        <style jsx global>{`
          .tour-swiper .swiper-button-prev,
          .tour-swiper .swiper-button-next {
            width: 38px;
            height: 38px;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          .tour-swiper .swiper-button-prev::after,
          .tour-swiper .swiper-button-next::after {
            font-size: 14px;
            font-weight: bold;
            color: #000;
          }

          .tour-swiper .swiper-button-prev:hover,
          .tour-swiper .swiper-button-next:hover {
            background: #f7b01a;
          }

          .tour-swiper .swiper-button-prev {
            left: -10px;
          }

          .tour-swiper .swiper-button-next {
            right: -10px;
          }
        `}</style>
      </div>
    </section>
  );
}
