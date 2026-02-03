"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const villas = [
  {
    id: 1,
    url: "https://the-paradise-pool-house.danang-hotels.com/en/",
    name: "The Paradise Pool House By Han River!",
    tag: "Trung tâm - View sông Hàn",
    location: "K42/15 Trần Quốc Toản, Quận Hải Châu, TP. Đà Nẵng",
    guests: "10 khách",
    bedrooms: "5 phòng ngủ",
    beds: "5 giường",
    bathrooms: "5 phòng tắm",
    price: "10.436.363",
    imageMain:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/646384780.jpg?k=b63b532e8cdae1263092f24a53173e47f4c904deebdec18d3d750044013e71b5&o=",
    floorPlan:
      "https://pix10.agoda.net/hotelImages/65412100/0/efbd2a959704a95a91c2cca0a55efa71.jpg?ce=0&s=800x600",
  },
  {
    id: 2,
    url: "https://www.airbnb.com.vn/rooms/9652490",
    name: "Perfect Vacation Pool Villa",
    tag: "Sơn Trà - Private Pool",
    location: "Số 24-26 Lê Thước, Sơn Trà, Đà Nẵng",
    guests: "15 khách",
    bedrooms: "6 phòng ngủ",
    beds: "10 giường",
    bathrooms: "7 phòng tắm",
    price: "11.466.376",
    imageMain:
      "https://a0.muscache.com/im/pictures/84a0cdca-cf84-4005-a6fc-e1cd9cfb4d6e.jpg?im_w=720",
    floorPlan:
      "https://a0.muscache.com/im/pictures/cc063f56-3c1a-42cc-b6d6-e2fa0f14fce8.jpg?im_w=720",
  },
  {
    id: 3,
    url: "https://www.airbnb.com.vn/rooms/16443021",
    name: "The Stunning & Luxurious Villa by My Khe beach",
    tag: "Biển Mỹ Khê - 5 Sao",
    location: "Số 58 Lê Mạnh Trinh, Sơn Trà, Đà Nẵng",
    guests: "15 khách",
    bedrooms: "6 phòng ngủ",
    beds: "10 giường",
    bathrooms: "7 phòng tắm",
    price: "13.585.797",
    imageMain:
      "https://a0.muscache.com/im/pictures/miso/Hosting-16443021/original/a0fe6cfc-c609-4149-b938-da5e9cca0196.jpeg?im_w=1200",
    floorPlan:
      "https://a0.muscache.com/im/pictures/miso/Hosting-16443021/original/91c34029-d79c-440d-b244-3234edd9eac1.jpeg?im_w=720",
  },
  {
    id: 4,
    url: "https://www.agoda.com/the-charming-pool-villa-nearby-my-khe-beach/hotel/da-nang-vn.html",
    name: "The Charming Pool Villa For Vacation By My Khe Beach",
    tag: "Biển Mỹ Khê - Rooftop View",
    location: "12 Nguyễn Hữu Thông, An Hải, Sơn Trà, Đà Nẵng",
    guests: "15 khách",
    bedrooms: "6 phòng ngủ",
    beds: "10 giường",
    bathrooms: "7 phòng tắm",
    price: "14.512.103",
    imageMain:
      "https://pix8.agoda.net/hotelImages/4914022/0/3a17d35588e818cb40869e9e79cfaadd.jpg?ca=0&ce=1&s=1024x",
    floorPlan:
      "https://pix8.agoda.net/hotelImages/4914022/0/562eca5e841c582d45ca8b4a2145c5b1.jpg?ce=0&s=1024x",
  },
];

// Ảnh nền du lịch Đà Nẵng (dùng ảnh công ty không cần license)
const BG_IMAGE =
  "https://seaproperty.vn/wp-content/uploads/2023/05/fusion-resort-villas-da-nang-noi-that-33.jpg";

export default function FeaturedVillas() {
  return (
    <section className="relative py-10 lg:py-14 overflow-hidden">
      {/* ============================================================
          LAYER 1 – Ảnh nền du lịch (fixed, cover)
          ============================================================ */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BG_IMAGE}
          alt="Da Nang travel background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>

      {/* ============================================================
          LAYER 2 – Overlay vàng nhẹ + mỡ để che ảnh nền
                     Dùng nhiều layer chồng lên:
                     • gradient vàng mềm (chính)
                     • backdrop-blur nhẹ để làm mờ chi tiết ảnh
                     • lớp white mỏng ở đầu & cuối section tạo fade
          ============================================================ */}

      {/* Blur layer – làm mờ ảnh nền một chút để content dễ đọc */}
      <div className="absolute inset-0 z-[0] backdrop-blur-[0px]" />

      {/* Golden overlay chính */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,176,26,0.22) 90%, rgba(255,243,204,0.75) 95%, rgba(255,248,220,0.82) 90%, rgba(255,243,204,0.75) 70%, rgba(247,176,26,0.22) 100%)",
        }}
      />

      {/* Fade trắng ở top & bottom để blend với các section khác */}
      <div
        className="absolute top-0 left-0 right-0 h-12 z-[3]"
        // style={{
        //   background: "linear-gradient(to bottom, #ffffff, transparent)",
        // }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-12 z-[3]"
        // style={{
        //   background: "linear-gradient(to top, #ffffff, transparent)",
        // }}
      />

      {/* ============================================================
          LAYER 3 – Content (z-[4] để đứng trên tất cả overlay)
          ============================================================ */}
      <div className="relative z-[4] max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black uppercase tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
            VILLA YÊU THÍCH
          </h2>

          <div className="w-24 h-1 bg-[#f7b01a] mx-auto mt-4 mb-5 shadow-[0_2px_6px_rgba(247,176,26,0.5)]" />

          <p className="text-lg text-gray-700 max-w-3xl mx-auto drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)]">
            Những căn villa được thiết kế tinh tế, mang đến trải nghiệm nghỉ
            dưỡng thượng lưu tại Đà Nẵng
          </p>
        </motion.div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          speed={900}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="pb-12"
        >
          {villas.map((villa) => (
            <SwiperSlide key={villa.id}>
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                {/* ===================== LEFT – Info card ===================== */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="order-2 lg:order-1"
                >
                  {/* Card wrapper – white bg mạnh để nổi bật trên ảnh nền */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-6 lg:p-8 border border-[#f7b01a]/20">
                    <h3 className="text-3xl lg:text-4xl font-bold text-black mb-2">
                      {villa.name}
                    </h3>

                    <div className="w-16 h-[3px] bg-[#f7b01a] mb-4" />

                    <p className="text-[#f7b01a] text-lg mb-2 font-medium">
                      {villa.tag}
                    </p>

                    <p className="text-gray-600 text-sm mb-6">
                      📍 {villa.location}
                    </p>

                    <div className="bg-gradient-to-br from-[#f7b01a]/10 via-white to-[#f7b01a]/5 p-5 lg:p-6 rounded-xl border border-[#f7b01a]/10">
                      {/* Grid thông tin */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#f7b01a]/20 flex items-center justify-center">
                            <span className="text-xl">👥</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Số khách</p>
                            <p className="font-bold text-black">
                              {villa.guests}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#f7b01a]/20 flex items-center justify-center">
                            <span className="text-xl">🛏️</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Phòng ngủ</p>
                            <p className="font-bold text-black">
                              {villa.bedrooms}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#f7b01a]/20 flex items-center justify-center">
                            <span className="text-xl">🛋️</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Số giường</p>
                            <p className="font-bold text-black">
                              {villa.beds}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#f7b01a]/20 flex items-center justify-center">
                            <span className="text-xl">🚿</span>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Phòng tắm</p>
                            <p className="font-bold text-black">
                              {villa.bathrooms}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Giá */}
                      <div className="pt-5 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 text-lg font-medium">
                            Giá / đêm
                          </span>
                          <div className="text-right">
                            <span className="text-3xl lg:text-4xl font-black text-[#f7b01a]">
                              {villa.price}
                            </span>
                            <span className="text-xl font-bold text-black ml-1">
                              đ
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Button */}
                      <a
                        href={villa.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="
                            w-full mt-6 py-4 px-6 rounded-xl
                            bg-gradient-to-r from-[#f7b01a] to-[#ff8c00]
                            hover:from-[#ff8c00] hover:to-[#f7b01a]
                            text-white font-bold text-lg
                            shadow-[0_8px_30px_rgba(247,176,26,0.4)]
                            hover:shadow-[0_12px_40px_rgba(247,176,26,0.6)]
                            transition-all duration-300
                            flex items-center justify-center gap-2
                          "
                        >
                          <span>Xem Villa</span>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.button>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* ===================== RIGHT – Main image ===================== */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2 }}
                  className="order-1 lg:order-2 relative group"
                >
                  {/* Image container với border & shadow để nổi bật trên bg */}
                  <div className="relative aspect-[4/3] lg:aspect-[3/3] overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.22)] border-2 border-white/60">
                    <Image
                      src={villa.imageMain}
                      alt={villa.name}
                      fill
                      className="object-cover transition duration-1000 group-hover:scale-110 group-hover:brightness-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute inset-0 shadow-[inset_0_-120px_120px_rgba(247,176,26,0.25)]" />
                  </div>

                  {/* FLOOR PLAN – nổi bật hơn với border trắng & shadow */}
                  <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 w-32 h-32 lg:w-48 lg:h-48 overflow-hidden border-[3px] border-white rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
                    <Image
                      src={villa.floorPlan}
                      alt="Floor Plan"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}