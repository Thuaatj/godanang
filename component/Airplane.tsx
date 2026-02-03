"use client";

import { motion } from "framer-motion";

export default function Airplane({ index }: { index: number }) {
  return (
    <motion.div
      animate={{
        y: index * 80,
        rotate: index % 2 === 0 ? 360 : -360,
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
      className="fixed right-6 top-1/3 z-50 text-[#f7b01a]"
    >
      <svg
        className="w-10 h-10 drop-shadow-lg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M2.5 19l8.5-7 8.5 7-1.5-5-7-5 7-5 1.5-5-8.5 7-8.5-7 1.5 5 7 5-7 5z" />
      </svg>
    </motion.div>
  );
}
