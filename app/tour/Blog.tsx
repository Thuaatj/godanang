"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const banners = [
  {
    id: 1,
    title: "Bay trên biển Đà Nẵng",
    subtitle: "Dù lượn Sơn Trà",
    desc:
      "Ngắm trọn đường bờ biển và thành phố từ trên cao trong trải nghiệm dù lượn đầy phấn khích tại bán đảo Sơn Trà.",
    image:
      "https://bvhttdl.mediacdn.vn/291773308735864832/2024/11/11/z547312928926446a1399f2631d44411eb38e8beba9d79-17312262449301265607830-1731287249970-17312872500711559533576.jpg",
  },
  {
    id: 2,
    title: "Chạm vào văn hoá địa phương",
    subtitle: "Workshop nấu ăn",
    desc:
      "Khám phá ẩm thực miền Trung qua những buổi nấu ăn cùng đầu bếp bản địa trong không gian gần gũi, ấm cúng.",
    image:
      "https://danangfantasticity.com/wp-content/uploads/2025/11/giao-luu-van-hoa-hoi-an-nhat-ban-lan-thu-21-da-nang-2025-05.jpg",
  },
  {
    id: 3,
    title: "Thư giãn trọn vẹn",
    subtitle: "Massage & Spa",
    desc:
      "Tái tạo năng lượng với các liệu trình spa chuyên sâu, mang lại cảm giác thư thái sau hành trình khám phá Đà Nẵng.",
    image:
      "https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tywrxqs1mzajymbrbemm/Tr%E1%BA%A3inghi%E1%BB%87mTigonSpaMassage%E1%BB%9F%C4%90%C3%A0N%E1%BA%B5ng-KlookVi%E1%BB%87tNam.jpg",
  },
];


export default function ExperienceSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 flex">
        <div className="w-[53%] bg-white" />
        <div className="w-[48%] bg-[#f5f1ea]" />
      </div>

      {/* DESKTOP */}
      <div className="relative max-w-6xl mx-auto px-6 space-y-10 hidden md:block">
        {banners.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`relative flex ${
                reverse ? "justify-end" : "justify-start"
              } group`}
            >
              {/* IMAGE */}
              <div className="relative w-[52%] h-[230px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.03]
                  "
                />
              </div>

              {/* CARD */}
              <motion.div
                initial={{ opacity: 0, x: reverse ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                className={`
                  absolute top-1/2 -translate-y-1/2
                  ${reverse ? "left-[32%]" : "right-[32%]"}
                  bg-white/95
                  w-[280px]
                  p-4
                  shadow-lg
                  transition-all duration-500 ease-out
                  group-hover:-translate-y-[54%]
                  group-hover:shadow-2xl
                `}
              >
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                  Kinh nghiệm
                </p>

                <h3 className="text-base font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mb-1">
                  {item.subtitle}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {item.desc}
                </p>

                <Link
                  href="#"
                  className="
                    inline-flex items-center gap-1
                    text-sm font-medium text-black
                    border-b border-black
                    transition-all duration-300
                    hover:opacity-70
                  "
                >
                  Khám phá →
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE */}
      <div className="block md:hidden relative px-5 space-y-7">
        {banners.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="
              bg-white shadow-md overflow-hidden
              transition-transform duration-300
              active:scale-[0.98]
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-base">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                {item.subtitle}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                {item.desc}
              </p>
              <span className="text-sm font-medium underline">
                Khám phá
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
