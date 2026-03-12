"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import Filters from "./Filters";
import HeaderNav from "@/component/HeaderNav";
import {  useScroll, useTransform } from "framer-motion";
import Footer from "@/component/Footer";
import BackToTopButton from "@/component/BackToTopButton";
import ContactDock from "@/component/ContactDock";
import { VILLAS_DATA } from "@/data/villas";

/* =======================
   DATA (imported from @/data/villas)
======================= */

const PAGE_SIZE = 9;

/* =======================
   PAGE
======================= */
export default function VillasPage() {
  const [filters, setFilters] = useState({
    areas: [] as string[],
    types: [] as string[],
    quick: [] as string[],
    amenities: [] as string[],
  });

  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc" | "rating-desc">("default");

  const [page, setPage] = useState(1);

  // Reset về trang 1 khi filters hoặc sort thay đổi
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
  }, [filters, sortBy]);

  const filteredAndSortedVillas = useMemo(() => {
    let result = VILLAS_DATA.filter((villa) => {
      // Khu vực
      if (filters.areas.length > 0 && !filters.areas.includes(villa.area)) {
        return false;
      }

      // Loại chỗ nghỉ
      if (filters.types.length > 0 && !filters.types.includes(villa.type)) {
        return false;
      }

      // Quick filters (phải thỏa mãn TẤT CẢ)
      if (filters.quick.length > 0) {
        if (!filters.quick.every((q: string) => villa.quickFilters.includes(q))) {
          return false;
        }
      }

      // Amenities (phải có TẤT CẢ)
      if (filters.amenities.length > 0) {
        if (!filters.amenities.every((am: string) => villa.amenities.includes(am))) {
          return false;
        }
      }

      return true;
    });

    // Áp dụng sort
    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating-desc":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Giữ nguyên thứ tự gốc
        break;
    }

    return result;
  }, [filters, sortBy]);

  const paginatedVillas = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredAndSortedVillas.slice(start, start + PAGE_SIZE);
  }, [filteredAndSortedVillas, page]);

  const totalPages = Math.ceil(filteredAndSortedVillas.length / PAGE_SIZE);

  const { scrollY } = useScroll();
const bgY = useTransform(scrollY, [0, 600], [0, 120]);
const bgScale = useTransform(scrollY, [0, 600], [1.08, 1]);


  return (
    <>
    <HeaderNav />
    <ContactDock /> 
    <BackToTopButton />
      {/* ================= HERO ================= */}
       <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/b0/23/2b/caption.jpg?h=-1&s=1&w=1200)",
        }}
      />

      {/* Overlay cinematic */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80" />

      {/* Noise layer */}
      <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-semibold
                tracking-tight
                leading-tight
                text-center
                text-white
              "
            >
              <span
                className="
                  relative
                  bg-gradient-to-r
                  from-white
                  via-sky-100
                  to-indigo-100
                  bg-clip-text
                  text-transparent
                  animate-gradient
                  drop-shadow-[0_4px_25px_rgba(255,255,255,0.55)]
                "
              >
                Villas tại Đà Nẵng
              </span>

            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-6 text-lg sm:text-xl md:text-2xl text-white/85 font-light"
            >
               Tuyển chọn villa nghỉ dưỡng cao cấp – vị trí đẹp – không gian riêng tư
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => {
          document.getElementById("title")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="
          absolute bottom-10 left-1/2 -translate-x-1/2 z-20
          flex flex-col items-center gap-3
          cursor-pointer
          text-white
        "
      >
        {/* Glow mạnh hơn */}
        <div className="absolute -inset-8 rounded-full bg-white/30 blur-3xl" />

        <span
          className="
            relative
            text-[10px] sm:text-xs
            uppercase
            tracking-[0.25em] sm:tracking-[0.4em]
            font-medium sm:font-semibold
            text-white/90
            drop-shadow-[0_1px_8px_rgba(255,255,255,0.6)]
          "
        >
          Khám phá các villa
        </span>

        <div className="w-[2px] h-16 bg-gradient-to-b from-white via-white/70 to-transparent" />

        <svg
          className="w-6 h-6 drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {/* SECTION HEADER */}
      <div id="title" className="mb-1 mt-10 text-center scroll-mt-24">
        <h2
          className="
            text-3xl md:text-4xl lg:text-5xl
            font-semibold
            tracking-tight
            text-gray-900
          "
        >
          Các căn villa tại Đà Nẵng
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Tuyển chọn villa nghỉ dưỡng cao cấp, vị trí đẹp, phù hợp cho gia đình & nhóm bạn
        </p>

        {/* Accent line */}
        <div className="mt-8 flex justify-center">
          <div className="h-[2px] w-20 bg-gradient-to-r from-[#f7b01a] to-[#ffd36a]" />
        </div>
      </div>

      {/* ================= GRID ================= */}
      <section id="villas" className="max-w-[1600px] mx-auto px-8 py-5 flex flex-col lg:flex-row gap-16 scroll-mt-28">
        {/* SIDEBAR FILTER */}
        <Filters filters={filters} setFilters={setFilters} />

        {/* GRID */}
        <div className="flex-1">
          {/* Sort & Title */}
          <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-semibold">
              {filteredAndSortedVillas.length} villa phù hợp
            </h2>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "default" | "price-asc" | "price-desc" | "rating-desc")
              }
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#f7b01a] bg-white text-sm"
            >
              <option value="default">Sắp xếp mặc định</option>
              <option value="price-asc">Giá: Thấp → Cao</option>
              <option value="price-desc">Giá: Cao → Thấp</option>
              <option value="rating-desc">Đánh giá cao → thấp</option>
            </select>
          </div>

          {filteredAndSortedVillas.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-lg">
              Không tìm thấy villa nào phù hợp với bộ lọc hiện tại.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-0">
              <AnimatePresence mode="wait">
                {paginatedVillas.map((villa, index) => (
                  <VillaCard key={villa.id} villa={villa} index={index} />
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-16 flex-wrap">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-4 py-2 border text-sm font-medium rounded transition-colors ${
                    page === i + 1
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-[#f7b01a] hover:text-[#f7b01a]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative mt-32">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000)",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">
            Gợi ý dành riêng cho bạn
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
            Chưa biết chọn villa nào?
          </h2>

          <p className="text-white/85 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Hãy để chúng tôi giúp bạn tìm ra villa phù hợp nhất với nhu cầu nghỉ dưỡng,
            ngân sách và trải nghiệm mong muốn tại Đà Nẵng.
          </p>

          <button
            className="
              inline-flex items-center gap-3
              bg-[#f7b01a] text-black
              px-8 py-4
              rounded-full
              font-semibold
              hover:bg-[#ffc94a]
              transition-all duration-300
              hover:scale-105
              shadow-lg shadow-black/30
            "
          >
            ✨ Nhận gợi ý villa phù hợp
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* =======================
   CARD
======================= */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function VillaCard({ villa, index }: { villa: any; index: number }) {
  const offset = index % 3 === 1 ? "mt-16" : index % 3 === 2 ? "mt-8" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative group ${offset}`}
    >
      {/* IMAGE */}
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        <img
          src={villa.images[0]}
          alt={villa.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* FEATURES */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 text-white text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {villa.quickFilters.includes("privatePool") && (
            <span className="bg-black/40 px-3 py-1 rounded">🏊 Hồ bơi riêng</span>
          )}
          {villa.quickFilters.includes("nearBeach") && (
            <span className="bg-black/40 px-3 py-1 rounded">🌊 Gần biển</span>
          )}
          {villa.amenities.includes("bbq") && (
            <span className="bg-black/40 px-3 py-1 rounded">🍖 BBQ</span>
          )}
        </div>

        {villa.tag && (
          <div className="absolute top-4 left-4 bg-[#f7b01a] text-black text-xs px-3 py-1 rounded font-medium">
            {villa.tag}
          </div>
        )}
      </div>

      {/* INFO */}
      <div
        className="
          relative
          -mt-24
          bg-white
          p-6
          w-[90%]
          ml-[0%]
          mr-[5%]
          shadow-[0_18px_40px_rgba(0,0,0,0.12)]
          group-hover:-translate-y-2
          transition-transform duration-500
        "
      >

        <div className="text-xs uppercase text-gray-500 tracking-wide">{villa.area}</div>
        <h3 className="text-lg font-semibold mt-1 line-clamp-2">{villa.name}</h3>

        <div className="flex justify-between items-center mt-4 text-sm">
          <span>👤 {villa.capacity} người</span>
          <span className="font-semibold text-[#f7b01a]">
            {villa.price.toLocaleString("vi-VN")}đ / đêm
          </span>
        </div>

        <div className="mt-5 flex gap-3">
          <button className="flex-1 border border-gray-300 px-4 py-2 text-sm rounded hover:border-[#f7b01a] transition">
            Chi tiết
          </button>
          <button className="flex-1 bg-black text-white px-4 py-2 text-sm rounded hover:bg-[#f7b01a] hover:text-black transition">
            Tư vấn
          </button>
        </div>
      </div>
    </motion.div>

    
  );
  
}

