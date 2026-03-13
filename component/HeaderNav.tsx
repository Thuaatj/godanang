"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { navItems } from "@/data/navigation-data";

import Link from "next/link";

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
    <div className="relative ">
      

      {/* Overlay */}
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
            whileHover={{ scale: 1.12, rotate: -1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex items-center gap-2 cursor-pointer z-[60]"
          >
            <Image
              src="/images/logoreal.png"
              alt="GoDaNang Logo"
              width={208}
              height={48}
              priority
              className={`
                h-10 w-auto
                md:h-12
                transition-all duration-300
                object-contain
                ${
                  scrolled
                    ? "drop-shadow-[0_0_10px_rgba(247,176,26,0.9)] hover:drop-shadow-[0_0_18px_rgba(247,176,26,1)]"
                    : ""
                }
              `}
            />
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
                <Link
                  href={item.href}
                  className="cursor-pointer group-hover:text-yellow-300 transition"
                >
                  {item.label}
                </Link>
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
                        <Link
                          href={sub.href ?? item.href}
                          key={sub.title}
                          onClick={() => setOpenMenu(false)}
                          className="flex items-center gap-3 rounded-lg p-2 transition hover:bg-white/10 group/item"
                        >
                          <div className="w-20 h-16 overflow-hidden rounded-lg flex-shrink-0">
                            <Image
                              src={sub.image}
                              alt={sub.title}
                              width={120}
                              height={80}
                              className="object-cover w-full h-full transition duration-300 group-hover/item:scale-110"
                            />
                          </div>
                          <p className="text-sm font-medium transition group-hover/item:text-yellow-300">
                            {sub.title}
                          </p>
                        </Link>
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
        

        {/* Small hamburger dropdown on desktop */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute right-6 top-16 md:right-10 md:top-16 z-[55] bg-black/90 backdrop-blur-md rounded-lg px-6 py-5 text-sm space-y-4 min-w-[180px] text-white shadow-xl hidden md:block"
            >
              <p className="hover:text-yellow-300 cursor-pointer transition">Giới thiệu</p>
              <Link href="/contact" onClick={() => setOpenMenu(false)} className="hover:text-yellow-300 cursor-pointer transition block">Liên hệ</Link>
              <Link href="/policy" onClick={() => setOpenMenu(false)} className="hover:text-yellow-300 cursor-pointer transition block">Chính sách</Link>
            </motion.div>
          )}
        </AnimatePresence>

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
              {/* Menu header */}
              <div className="flex justify-between items-center p-6 border-b border-white/20 bg-black/70">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={() => setOpenMenu(false)}>
                  <X size={28} />
                </button>
              </div>
      
              {/* Main content */}
              <div className="flex-1 px-4 py-6 flex flex-col gap-3 text-white text-base">
                {navItems.map((item) => (
                  <div key={item.label} className="w-full">
                    {item.subItems ? (
                      <>
                        <div className="flex items-center w-full py-4 px-5 rounded-xl bg-black/40 hover:bg-white/10 transition">
                          {/* Navigate to the page */}
                          <a
                            href={item.href}
                            onClick={() => setOpenMenu(false)}
                            className="flex-1 text-left font-medium"
                          >
                            {item.label}
                          </a>
      
                          {/* Toggle submenu */}
                          <button
                            onClick={() => toggleSubMobile(item.label)}
                            className="ml-3 p-2"
                            aria-label="Toggle submenu"
                          >
                            <ChevronDown
                              className={`transition-transform duration-300 ${
                                openMobileSub === item.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
      
      
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
                            <Link
                              href={sub.href ?? item.href}
                              key={sub.title}
                              onClick={() => {
                                setOpenMenu(false);
                                setOpenMobileSub(null);
                              }}
                              className="flex items-center gap-4 rounded-xl bg-black/30 px-4 py-3 transition hover:bg-white/5"
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
                            </Link>
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
      
                {/* Footer links */}
                <div className="mt-auto pt-8 pb-6 border-t border-white/20 space-y-4 text-sm px-5">
                  <p className="hover:text-yellow-300 cursor-pointer py-2">Giới thiệu</p>
                  <Link href="/contact" onClick={() => setOpenMenu(false)} className="hover:text-yellow-300 cursor-pointer py-2 block">Liên hệ</Link>
                  <Link href="/policy" onClick={() => setOpenMenu(false)} className="hover:text-yellow-300 cursor-pointer py-2 block">Chính sách</Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}






