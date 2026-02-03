"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ChevronDown, Compass, Home, Plane } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Trang chủ", href: "#hero" },
  {
    label: "Tour",
    href: "#tours",
    subItems: [
      { title: "Tour Đà Nẵng", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBlhgR34ogaBdZ2HZtrb7Ey1RqRNtEhUSPw&s" },
      { title: "Tour Hội An", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBlhgR34ogaBdZ2HZtrb7Ey1RqRNtEhUSPw&s" },
      { title: "Tour Huế", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBlhgR34ogaBdZ2HZtrb7Ey1RqRNtEhUSPw&s" },
      { title: "Tour Bà Nà Hills", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBlhgR34ogaBdZ2HZtrb7Ey1RqRNtEhUSPw&s" },
    ],
  },
  {
    label: "Villa",
    href: "#villas",
    subItems: [
      { title: "Villa Biển", image: "https://source.unsplash.com/400x300/?beach,villa" },
      { title: "Villa Núi", image: "https://source.unsplash.com/400x300/?mountain,villa" },
      { title: "Villa Hồ Bơi", image: "https://source.unsplash.com/400x300/?pool,villa" },
      { title: "Villa Nghỉ Dưỡng", image: "https://source.unsplash.com/400x300/?resort,villa" },
    ],
  },
  { label: "Tiện ích", href: "#amenities" },
  { label: "Blog", href: "#blog" },
  {
    label: "Đề xuất",
    href: "#cta",
    subItems: [
      { title: "Tư vấn Tour", image: "https://source.unsplash.com/400x300/?travel,guide" },
      { title: "Tư vấn Villa", image: "https://source.unsplash.com/400x300/?luxury,hotel" },
      { title: "Combo Du Lịch", image: "https://source.unsplash.com/400x300/?flight,hotel" },
      { title: "Tư vấn riêng", image: "https://source.unsplash.com/400x300/?consulting" },
    ],
  },
];

const cards = [
  {
    title: "Villa",
    desc: "Không gian nghỉ dưỡng được chọn lọc kỹ lưỡng, kết hợp thiên nhiên, tiện nghi cao cấp và sự riêng tư tuyệt đối, mang đến trải nghiệm lưu trú trọn vẹn cho mọi chuyến đi.",
    icon: <Home className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Tour",
    desc: "Hành trình khám phá bản địa được thiết kế linh hoạt, giúp du khách trải nghiệm văn hóa, thiên nhiên và con người địa phương một cách chân thực và sâu sắc.",
    icon: <Compass className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    title: "Vé máy bay",
    desc: "Giải pháp đặt vé máy bay nhanh chóng, đa dạng hãng bay và mức giá tối ưu, giúp bạn chủ động lịch trình và tiết kiệm chi phí di chuyển.",
    icon: <Plane className="w-8 h-8 md:w-10 md:h-10" />,
  },
];



export default function Hero() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileSub, setOpenMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubMobile = (label: string) => {
    setOpenMobileSub(openMobileSub === label ? null : label);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <Image
        src="/images/hero_banner.png"
        alt="Explore Vietnam"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="inset-0 bg-black/45 z-[1]" />
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full z-[1000]
          transition-all duration-300
          ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
          -webkit-transform: translate3d(0,0,0);
          transform: translate3d(0,0,0);
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between h-16 md:h-auto md:py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: -2 }}
            className="flex items-center gap-2 cursor-pointer z-[60]"
          >
            {/* <Image src="/images/Thiết kế chưa có tên (1).png" alt="Logo" width={36} height={36} /> */}
            <span className="font-bold tracking-widest text-white">GODANANG</span>
          </motion.div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-white text-sm tracking-wide">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <span className="cursor-pointer group-hover:text-yellow-300 transition">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 group-hover:w-full transition-all" />

                {item.subItems && (
                  <div
                    className="
                      absolute top-full mt-1
                      left-1/2 -translate-x-1/2
                      opacity-0 pointer-events-none
                      group-hover:opacity-100 group-hover:pointer-events-auto
                      transition-all duration-200 z-[9999]
                    "
                  >
                    <div className="bg-black/80 backdrop-blur rounded-2xl p-5 grid grid-cols-2 gap-4 w-[520px] min-w-max">
                      {item.subItems.map((sub) => (
                        <div
                          key={sub.title}
                          className="flex items-center gap-3 cursor-pointer group/item hover:bg-white/10 rounded-lg p-2 transition"
                        >
                          <div className="w-20 h-16 overflow-hidden rounded-lg flex-shrink-0">
                            <Image
                              src={sub.image}
                              alt={sub.title}
                              width={120}
                              height={80}
                              className="object-cover w-full h-full group-hover/item:scale-110 transition duration-300"
                            />
                          </div>
                          <p className="text-sm font-medium group-hover/item:text-yellow-300 transition">
                            {sub.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* HAMBURGER MENU */}
          <div className="z-[2000]">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="p-2 text-white transition hover:text-yellow-300"
              aria-label="Toggle menu"
            >
              {openMenu ? <X size={26} className="text-white" /> : <Menu size={26} className="text-white" />}
            </button>
          </div>
        </div>
        

        {/* Dropdown nhỏ của hamburger trên desktop */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute right-6 top-16 md:right-10 md:top-16 z-[55] bg-black/90 backdrop-blur-md rounded-lg px-6 py-5 text-sm space-y-4 min-w-[180px] text-white shadow-xl hidden md:block"
            >
              <p className="hover:text-yellow-300 cursor-pointer transition">Giới thiệu</p>
              <p className="hover:text-yellow-300 cursor-pointer transition">Liên hệ</p>
              <p className="hover:text-yellow-300 cursor-pointer transition">Chính sách</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Full Menu */}
        {/* Mobile Full Menu */}
      </header>
      <AnimatePresence>
  {openMenu && (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.3 }}
      className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-[999] overflow-y-auto"
    >
      <div className="flex flex-col min-h-full">
        {/* Header của menu */}
        <div className="flex justify-between items-center p-6 border-b border-white/20 bg-black/70">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={() => setOpenMenu(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Nội dung chính - ưu tiên hiển thị navItems đầu tiên */}
        <div className="flex-1 px-4 py-6 flex flex-col gap-3 text-white text-base">
          {navItems.map((item) => (
            <div key={item.label} className="w-full">
              {item.subItems ? (
                <>
                  <button
                    onClick={() => toggleSubMobile(item.label)}
                    className="flex items-center justify-between w-full py-4 px-5 rounded-xl hover:bg-white/10 transition text-left font-medium bg-black/40"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${openMobileSub === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {openMobileSub === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-6 pr-4 py-4 grid grid-cols-1 gap-3">
                          {item.subItems.map((sub) => (
                            <div
                              key={sub.title}
                              className="flex items-center gap-4 py-3 px-4 hover:bg-white/5 rounded-xl transition bg-black/30"
                            >
                              <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0">
                                <Image
                                  src={sub.image}
                                  alt={sub.title}
                                  width={80}
                                  height={60}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <span className="text-base">{sub.title}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <a
                  href={item.href}
                  className="block py-4 px-5 rounded-xl hover:bg-white/10 transition font-medium bg-black/40"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}

          {/* Phần phụ - đẩy xuống dưới cùng */}
          <div className="mt-auto pt-8 pb-6 border-t border-white/20 space-y-4 text-sm px-5">
            <p className="hover:text-yellow-300 cursor-pointer py-2">Giới thiệu</p>
            <p className="hover:text-yellow-300 cursor-pointer py-2">Liên hệ</p>
            <p className="hover:text-yellow-300 cursor-pointer py-2">Chính sách</p>
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Phần title với chữ GO và text animation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-[10] px-4">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          {/* Chữ GO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-yellow-500"
          >
            GO
          </motion.div>

          {/* Dãy chữ "Khám phá hành trình của bạn" xuất hiện từ GO */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-white"
            >
              {/* Logo image */}
              <Image
                src="/images/Thiết kế chưa có tên (1).png"
                alt="Logo"
                width={44}
                height={44}
                className="object-contain"
              />

              <span>Khám phá hành trình của bạn</span>
            </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            bg-white rounded-full px-4 py-3
            flex items-center gap-3
            text-black w-full max-w-[520px]
            shadow-xl
          "
        >
         <input
          placeholder="Bạn muốn đi đâu?"
          className="
            flex-1 outline-none text-sm
            bg-transparent
            px-2
          "
        />
  
          <button
            className="
              bg-yellow-400
              w-10 h-10
              rounded-full
              flex items-center justify-center
              hover:scale-110 transition
              shrink-0
            "
          >
            <Search size={18} />
          </button>
        </motion.div>
      </div>

      {/* Bottom cards với icon mới */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 z-[10]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15 }}
              whileHover={{ y: -8, scale: 1.04 }}
              className="
                bg-black/45 backdrop-blur-md
                rounded-xl
                p-4 md:p-6
                text-white cursor-pointer
                hover:bg-black/60 transition-all
                flex items-center gap-4
              "
            >
              {/* ICON */}
              <div className="text-yellow-400">
                {card.icon}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="uppercase text-xs md:text-sm tracking-widest">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm opacity-80 mt-1">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}