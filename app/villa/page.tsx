"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import Filters from "./Filters";
import HeaderNav from "@/component/HeaderNav";
import {  useScroll, useTransform } from "framer-motion";
import Footer from "@/component/Footer";
import BackToTopButton from "@/component/BackToTopButton";
import ContactDock from "@/component/ContactDock";


/* =======================
   DATA
======================= */
export const VILLAS_DATA = [
  {
    id: 1,
    name: "Furama Villas Danang",
    type: "villa",
    area: "Mỹ Khê",
    capacity: 8,
    price: 7200000,
    rating: 9.2,
    stars: 5,
    distanceToCenter: 2,
    quickFilters: ["nearBeach", "privatePool", "seaView", "wifi", "parking", "airConditioner"],
    amenities: ["kitchen", "bbq", "balcony", "bathtub", "garden"],
    tag: "Best view",
    images: [
      "https://mvilla.vn/uploads/article/monkey-villa-1752312844.webp",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
    ],
  },
  {
    id: 2,
    name: "Sol Villa Đà Nẵng",
    type: "villa",
    area: "Sơn Trà",
    capacity: 10,
    price: 8500000,
    rating: 8.8,
    stars: 4,
    distanceToCenter: 4,
    quickFilters: ["nearBeach", "privatePool", "wifi", "airConditioner"],
    amenities: ["kitchen", "balcony", "tv", "washingMachine"],
    tag: "Được yêu thích",
    images: [
      "https://cache.marriott.com/is/image/marriotts7prod/mc-dadnn-villa-ocean-30719%3ASquare?fit=constrain&wid=1200",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    ],
  },
  {
    id: 3,
    name: "Monkey - M Villa Da Nang",
    type: "villa",
    area: "Sông Hàn",
    capacity: 12,
    price: 9800000,
    rating: 9.0,
    stars: 5,
    distanceToCenter: 1.5,
    quickFilters: ["privatePool", "seaView", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "bathtub", "balcony"],
    tag: "Best view",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
      "https://images.unsplash.com/photo-1600573472591-ee6981cf5c26?w=1600",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600",
    ],
  },
  {
    id: 4,
    name: "N&N DA NANG BEACH VILLA",
    type: "villa",
    area: "Ngũ Hành Sơn",
    capacity: 6,
    price: 5600000,
    rating: 8.2,
    stars: 4,
    distanceToCenter: 5,
    quickFilters: ["nearBeach", "wifi", "airConditioner"],
    amenities: ["kitchen", "balcony"],
    tag: "",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/8c/7f/d3/birdview.jpg?h=-1&s=1&w=900",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498c?w=1600",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?w=1600",
    ],
  },
  {
    id: 5,
    name: "The Salt Villas Da Nang",
    type: "villa",
    area: "Sơn Trà",
    capacity: 14,
    price: 11500000,
    rating: 9.1,
    stars: 5,
    distanceToCenter: 6,
    quickFilters: ["privatePool", "garden", "wifi", "parking", "airConditioner"],
    amenities: ["kitchen", "bbq", "garden", "washingMachine"],
    tag: "Được yêu thích",
    images: [
      "https://vinpearlresortvietnam.com/wp-content/uploads/villa-vinpearl-da-nang-resort-11-1.jpg",
      "https://images.unsplash.com/photo-1600573472631-8a48f86d9c47?w=1600",
      "https://images.unsplash.com/photo-1600607688040-0b8a21d71f2d?w=1600",
    ],
  },
  {
    id: 6,
    name: "Villa Đà Nẵng - Villa Hội An",
    type: "villa",
    area: "Mỹ Khê",
    capacity: 8,
    price: 6900000,
    rating: 8.5,
    stars: 4,
    distanceToCenter: 2.5,
    quickFilters: ["nearBeach", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "balcony"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600",
      "https://images.unsplash.com/photo-1600585152911-46e3b9d8b5f6?w=1600",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?w=1600",
    ],
  },
  {
    id: 7,
    name: "Villa Đà Nẵng",
    type: "resort",
    area: "Sơn Trà",
    capacity: 16,
    price: 13500000,
    rating: 9.4,
    stars: 5,
    distanceToCenter: 7,
    quickFilters: ["privatePool", "seaView", "wifi", "parking", "airConditioner"],
    amenities: ["kitchen", "bbq", "jacuzzi", "balcony", "garden"],
    tag: "Best view",
    images: [
      "https://song-cat-villa-31nl.danang-hotels.com/data/Pics/OriginalPhoto/14729/1472907/1472907901/song-cat-villa-31nl-da-nang-pic-20.JPEG",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
    ],
  },
  {
    id: 8,
    name: "Cho Thuê Villa Đà Nẵng",
    type: "villa",
    area: "Ngũ Hành Sơn",
    capacity: 10,
    price: 8200000,
    rating: 8.7,
    stars: 4,
    distanceToCenter: 4.5,
    quickFilters: ["nearBeach", "privatePool", "wifi", "airConditioner"],
    amenities: ["kitchen", "balcony", "tv"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600",
    ],
  },
  {
    id: 9,
    name: "Villa Resort Đà Nẵng Abogo",
    type: "apartment",
    area: "Sông Hàn",
    capacity: 6,
    price: 5900000,
    rating: 8.0,
    stars: 4,
    distanceToCenter: 1,
    quickFilters: ["wifi", "airConditioner"],
    amenities: ["kitchen", "washingMachine", "tv"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498c?w=1600",
      "https://images.unsplash.com/photo-1600573472631-8a48f86d9c47?w=1600",
    ],
  },
  {
    id: 10,
    name: "Pool Villa",
    type: "villa",
    area: "Mỹ Khê",
    capacity: 12,
    price: 10200000,
    rating: 9.0,
    stars: 5,
    distanceToCenter: 2,
    quickFilters: ["nearBeach", "privatePool", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "balcony", "bathtub"],
    tag: "Được yêu thích",
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600",
      "https://images.unsplash.com/photo-1600573472591-ee6981cf5c26?w=1600",
      "https://images.unsplash.com/photo-1600607688040-0b8a21d71f2d?w=1600",
    ],
  },
  {
    id: 11,
    name: "Da Nang Villa",
    type: "villa",
    area: "Sơn Trà",
    capacity: 8,
    price: 7400000,
    rating: 8.6,
    stars: 4,
    distanceToCenter: 5,
    quickFilters: ["privatePool", "wifi", "airConditioner"],
    amenities: ["kitchen", "garden"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600",
    ],
  },
  {
    id: 12,
    name: "Ana Villa apartment",
    type: "resort",
    area: "Sơn Trà",
    capacity: 18,
    price: 15800000,
    rating: 9.5,
    stars: 5,
    distanceToCenter: 8,
    quickFilters: ["privatePool", "seaView", "wifi", "parking", "airConditioner"],
    amenities: ["kitchen", "bbq", "jacuzzi", "garden"],
    tag: "Best view",
    images: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1600",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498c?w=1600",
    ],
  },
  {
    id: 13,
    name: "Pearl Villa at Furama Danang",
    type: "homestay",
    area: "Ngũ Hành Sơn",
    capacity: 6,
    price: 5200000,
    rating: 7.8,
    stars: 4,
    distanceToCenter: 5.5,
    quickFilters: ["nearBeach", "wifi", "airConditioner"],
    amenities: ["kitchen", "balcony"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
    ],
  },
  {
    id: 14,
    name: "Pool Villa Da Nang ",
    type: "villa",
    area: "Mỹ Khê",
    capacity: 14,
    price: 12500000,
    rating: 9.3,
    stars: 5,
    distanceToCenter: 2,
    quickFilters: ["nearBeach", "privatePool", "seaView", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "bathtub", "balcony"],
    tag: "Được yêu thích",
    images: [
      "https://mvilla.vn/uploads/article/marisol-villa-1733291461.webp",
      "https://images.unsplash.com/photo-1600573472631-8a48f86d9c47?w=1600",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600",
    ],
  },
  {
    id: 15,
    name: "Song Cat Villa 2",
    type: "villa",
    area: "Sông Hàn",
    capacity: 10,
    price: 8700000,
    rating: 8.9,
    stars: 4,
    distanceToCenter: 1.2,
    quickFilters: ["seaView", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "balcony"],
    tag: "Best view",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/544231815.jpg?k=227d30adb18e78b92e827bce080d62f0dc737e2ed9c59049a8992ad09b8aced1&o=",
      "https://images.unsplash.com/photo-1600585152911-46e3b9d8b5f6?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    ],
  },
];

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

