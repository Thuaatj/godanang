"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Math.floor(
          latest
        ).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function TravelBanner() {
  return (
    <section className="relative w-full min-h-[220px] lg:min-h-[260px] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2000)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-6 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white max-w-md w-full text-center lg:text-left"
        >
          <p className="text-[10px] tracking-[0.35em] uppercase text-white/60 mb-2">
            Danang Travel Collection
          </p>

          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-snug">
            Khám phá Đà Nẵng theo cách riêng của bạn
          </h2>

          <button className="mt-4 px-6 py-2 bg-white text-black text-xs font-medium rounded-full transition hover:bg-black hover:text-white border border-white">
            Khám phá tour
          </button>
        </motion.div>

        {/* RIGHT – Premium Floating Cards */}
        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.08 }}
            className="p-3 rounded-2xl text-center
                       bg-gradient-to-br from-pink-500/90 to-rose-500/90
                       text-white shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold">
              <Counter value={20} />+
            </h3>
            <p className="text-[10px] mt-1 opacity-80">
              Tour chọn lọc
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.08 }}
            className="p-3 rounded-2xl text-center
                       bg-gradient-to-br from-indigo-500/90 to-blue-500/90
                       text-white shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold">5★</h3>
            <p className="text-[10px] mt-1 opacity-80">
              Đánh giá cao
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.08 }}
            className="p-3 rounded-2xl text-center
                       bg-gradient-to-br from-emerald-500/90 to-teal-500/90
                       text-white shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold">
              <Counter value={1000} />+
            </h3>
            <p className="text-[10px] mt-1 opacity-80">
              Khách hài lòng
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.08 }}
            className="p-3 rounded-2xl text-center
                       bg-gradient-to-br from-amber-500/90 to-orange-500/90
                       text-white shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg font-bold">24/7</h3>
            <p className="text-[10px] mt-1 opacity-80">
              Hỗ trợ
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}