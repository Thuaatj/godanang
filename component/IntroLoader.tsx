"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function IntroLoader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[9999] overflow-hidden will-change-transform"
        >
          {/* Background */}
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000)",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.77, 0, 0.175, 1],
              }}
            >
              <h1 className="text-4xl md:text-5xl tracking-[0.45em] font-light">
                GODANANG TRAVEL
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="origin-left h-[1px] bg-white/70 mt-8 mx-auto w-[140px]"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-6 text-xs tracking-[0.35em] uppercase"
              >
                Discover Your Own Journey
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}