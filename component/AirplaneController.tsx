"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type AirplaneControllerProps = {
  sectionRefs: React.RefObject<HTMLElement | null>[];
};

export default function AirplaneController({
  sectionRefs,
}: AirplaneControllerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // ===== Detect section đang active =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(
              (ref) => ref.current === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.45,
      }
    );

    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  // ===== Zig Zag trái / phải =====
  const isLeft = activeIndex % 2 === 0;

  return (
    <motion.div
      className="fixed top-[35%] z-[999] pointer-events-none"
      animate={{
        x: isLeft ? "12vw" : "70vw",
        y: activeIndex * 70,
        rotate: isLeft ? -10 : 10,
        scaleX: isLeft ? -1 : 1,
      }}
      transition={{
        type: "tween",
        duration: 1.8, // bay chậm
        ease: "easeInOut",
      }}
    >
      {/* ================= KHÓI LỚP 1 ================= */}
      <motion.div
        className="absolute top-1/2 -translate-y-1/2"
        animate={{
          x: isLeft ? -80 : 80,
          opacity: [0.7, 0.3, 0],
          scale: [1, 1.4, 1.8],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      >
        <div className="w-28 h-7 bg-gradient-to-r from-[#f7b01a] to-transparent rounded-full blur-xl" />
      </motion.div>

      {/* ================= KHÓI LỚP 2 ================= */}
      <motion.div
  className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
  animate={{
    x: isLeft ? 140 : -140,
    opacity: [0.8, 0.5, 0],
    scale: [0.8, 1.4, 2.2],
    rotateZ: isLeft ? [0, -8, -16] : [0, 8, 16],
  }}
  transition={{
    duration: 2.6,
    delay: 0.3,
    repeat: Infinity,
    ease: "easeOut",
  }}
>
  {/* LAYER 1 – LÕI NÓNG (đỏ đậm) */}
  <div className="
    absolute w-36 h-8
    bg-gradient-to-r
    from-red-600/90 via-orange-500/80 to-transparent
    rounded-full
    blur-lg
    shadow-[0_0_40px_rgba(255,80,0,0.9)]
  " />

  {/* LAYER 2 – KHÓI GIỮA */}
  <div className="
    absolute left-6 top-2 w-44 h-10
    bg-gradient-to-r
    from-[#f7b01a]/70 via-orange-400/60 to-transparent
    rounded-full
    blur-xl
    mix-blend-screen
  " />

  {/* LAYER 3 – KHÓI LAN */}
  <div className="
    absolute left-14 top-4 w-56 h-12
    bg-gradient-to-r
    from-yellow-300/40 to-transparent
    rounded-full
    blur-2xl
    opacity-70
  " />
</motion.div>



      {/* ================= MÁY BAY ================= */}
      <Image
        src="/airplane.png"   // ⚠️ ảnh phải nằm trong /public
        alt="Airplane"
        width={90}
        height={90}
        className="relative z-10 drop-shadow-2xl"
      />
    </motion.div>
  );
}
