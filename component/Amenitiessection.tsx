/* eslint-disable react-hooks/purity */
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Flame,
  Leaf,
  Utensils,
  Sailboat,
  Waves,
  Plane,
} from "lucide-react";

/* ================= DATA ================= */
const whyChooseItems = [
  {
    icon: Leaf,
    title: "Spa & Massage",
    description: "Thư giãn toàn diện với liệu trình chăm sóc cao cấp.",
  },
  {
    icon: Flame,
    title: "Xông hơi – Onsen",
    description: "Không gian onsen riêng tư, tái tạo năng lượng.",
  },
  {
    icon: Utensils,
    title: "Workshop Trải Nghiệm",
    description: "Nấu ăn, làm gốm, khám phá văn hóa bản địa.",
  },
  {
    icon: Sailboat,
    title: "Du thuyền biển",
    description: "Trải nghiệm Đà Nẵng từ góc nhìn sang trọng trên biển.",
  },
  {
    icon: Waves,
    title: "Jetski – Cano",
    description: "Hoạt động thể thao biển sôi động & an toàn.",
  },
  {
    icon: Plane,
    title: "Đưa đón sân bay",
    description: "Dịch vụ đưa đón riêng, đúng giờ & tiện lợi.",
  },
];

/* ================= VARIANTS ================= */
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.8,
      ease: "easeOut", // ✅ TS-safe – mượt
    },
  },
};

/* ================= COMPONENT ================= */
export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7b01a] py-12 lg:py-16">
      {/* RIGHT IMAGE */}
      <div className="absolute top-0 right-0 h-full w-[38%] hidden lg:block">
        <Image
          src="https://bvhttdl.mediacdn.vn/291773308735864832/2024/11/11/z547312928926446a1399f2631d44411eb38e8beba9d79-17312262449301265607830-1731287249970-17312872500711559533576.jpg"
          alt="Luxury interior"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-[#f7e3b2]/12" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7e3b2]/25 via-[#f7e3b2]/10 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT */}
          <motion.div
            className="lg:col-span-7 space-y-10 lg:-ml-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
          >
            {/* TITLE */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-black">
                Trải nghiệm & tiện ích
              </h2>
              <div className="w-20 h-[2px] bg-black/70" />
            </motion.div>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
              {whyChooseItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className={`
                    group relative rounded-lg p-5 lg:p-6
                    bg-black/85 text-white
                    border border-white/5
                    shadow-[0_14px_40px_rgba(0,0,0,0.35)]
                    overflow-hidden
                    ${index % 2 !== 0 ? "lg:translate-y-10" : "lg:-translate-y-2"}
                  `}
                >
                  {/* GOLD LINE */}
                  <div className="absolute top-0 left-0 h-[2px] w-10 group-hover:w-full bg-[#f7b01a] transition-all duration-500 ease-out" />

                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(500px_circle_at_20%_0%,rgba(247,176,26,0.18),transparent_45%)]" />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* ICON */}
                    <div className="shrink-0 mt-1">
                      <div className="p-2.5 rounded-md bg-[#f7b01a]/15 border border-[#f7b01a]/30">
                        <item.icon className="w-5 h-5 text-[#f7b01a]" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* TEXT */}
                    <div className="flex-1 space-y-1.5">
                      <h3 className="text-sm font-semibold uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* ARROW */}
                    <div className="mt-1 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300 text-[#f7b01a]">
                      →
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SPACE */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
