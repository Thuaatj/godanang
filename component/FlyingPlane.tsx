"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FlyingPlane() {
  return (
    <motion.div
      className="
        fixed 
        top-[40%] 
        left-0 
        z-50 
        pointer-events-none
      "
      animate={{
        x: ["-10vw", "30vw", "60vw", "90vw"],
        y: [0, -50, 50, -30],
        rotateZ: [0, -12, 12, -6],
        rotateY: [0, 18, -18, 0],
      }}
      transition={{
        duration: 18, // bay chậm
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* ✈️ Máy bay */}
      <Image
        src="/airplane-3d.svg"
        alt="Airplane"
        width={120}
        height={120}
        className="
          drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]
        "
      />

      {/* 💨 Khói sau máy bay */}
      <Smoke />
    </motion.div>
  );
}

/* ================= KHÓI ================= */

function Smoke() {
  return (
    <motion.div
      className="
        absolute 
        left-[-90px] 
        top-1/2 
        -translate-y-1/2
      "
      animate={{
        x: [-10, -70],
        opacity: [0.9, 0],
        scale: [1, 2.4],
      }}
      transition={{
        duration: 3,
        ease: "easeOut",
        repeat: Infinity,
      }}
    >
      <div
        className="
          w-56 
          h-16
          bg-gradient-to-r
          from-[#b91c1c]/90
          via-[#ef4444]/70
          to-transparent
          rounded-full
          blur-2xl
        "
      />
    </motion.div>
  );
}
