"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Star, Mail, MapPin } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Flip-card data                                                      */
/* ------------------------------------------------------------------ */
const contacts = [
  {
    icon: Phone,
    label: "Hotline",
    value: "0382305993",
    href: "tel:0382305993",
  },
  {
    icon: Mail,
    label: "Email",
    value: "GODN@travel.com",
    href: "mailto:GODN@travel.com",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Đà Nẵng, Việt Nam",
    href: "https://www.google.com/maps/search/Đà+Nẵng+Việt+Nam",
  },
];


/* ------------------------------------------------------------------ */
/* FlipCard component                                                  */
/* ------------------------------------------------------------------ */
function FlipCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={label === "Địa chỉ" ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block w-36 h-36 cursor-pointer"
      style={{ perspective: "800px" }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out group"
        style={{ transformStyle: "preserve-3d" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "rotateY(180deg)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "rotateY(0deg)")
        }
      >
        {/* FRONT */}
        <div
          className="
            absolute inset-0 flex flex-col items-center justify-center
            rounded-2xl bg-white border border-black/10
            shadow-[0_4px_20px_rgba(0,0,0,0.12)]
          "
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className="
              w-14 h-14 rounded-full
              bg-black/5 flex items-center justify-center
              transition-all duration-300
              group-hover:bg-[#f7b01a]
            "
          >
            <Icon
              className="
                w-7 h-7 text-black
                transition-colors duration-300
                group-hover:text-white
              "
            />
          </div>

          <span className="mt-3 text-gray-700 text-xs font-semibold uppercase">
            {label}
          </span>
        </div>

        {/* BACK */}
        <div
          className="
            absolute inset-0 flex flex-col items-center justify-center
            rounded-2xl bg-white
            shadow-[0_4px_24px_rgba(0,0,0,0.18)]
            border border-[#f7b01a]/30
          "
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-[#f7b01a] text-xs font-bold uppercase mb-2">
            {label}
          </span>
          <span className="text-gray-900 font-bold text-sm text-center px-3">
            {value}
          </span>
        </div>
      </div>
    </a>
  );
}


/* ------------------------------------------------------------------ */
/* Main section                                                        */
/* ------------------------------------------------------------------ */
export default function FinalCTASection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[560px] overflow-hidden">
      {/* ============================================================
          LEFT 30% – ảnh du lịch
          ============================================================ */}
      <div className="relative w-full lg:w-[40%] h-56 lg:h-auto">
        <img
          src="https://diff.vn/wp-content/uploads/2025/02/Ban-sao-cua-4-1.jpg"
          alt="Travel"
          className="w-full h-full object-cover"
        />
        {/* gradient overlay mẫu sang phải để blend với panel vàng */}
        <div className=" inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f7b01a]" />
      </div>

      {/* ============================================================
          RIGHT 70% – nội dung trên nền #f5aa09
          ============================================================ */}
      <div className="relative w-full lg:w-[60%] bg-[#ffd700] flex items-center justify-center py-16 lg:py-10 overflow-hidden">
        {/* decorative blobs – tạo depth */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-black/8 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-2xl pointer-events-none" />

        {/* content wrapper */}
        <div className="relative z-[1] w-full max-w-2xl mx-auto px-6 lg:px-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block mb-5"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg border border-white/60">
              <Star className="w-5 h-5 text-[#f7b01a] fill-[#f7b01a]" />
              <span className="text-gray-900 font-bold text-sm">
                Ưu đãi đặc biệt
              </span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]"
          >
            Sẵn sàng cho chuyến đi <br />
            <span className="text-gray-900">tiếp theo của bạn?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white/90 text-base md:text-lg font-medium mb-10 max-w-xl mx-auto drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
          >
            Đặt ngay hôm nay để nhận ưu đãi lên đến{" "}
            <span className="font-black text-gray-900">30%</span> và trải
            nghiệm những điều tuyệt vời nhất tại Đà Nẵng
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-4 rounded-xl
                bg-gray-900 text-white font-bold text-lg
                shadow-[0_6px_24px_rgba(0,0,0,0.25)]
                hover:shadow-[0_10px_32px_rgba(0,0,0,0.35)]
                transition-all duration-300
                flex items-center justify-center gap-2 group
              "
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Đặt tour ngay</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-4 rounded-xl
                bg-white text-gray-900 font-bold text-lg
                shadow-[0_6px_24px_rgba(0,0,0,0.15)]
                hover:shadow-[0_10px_32px_rgba(0,0,0,0.25)]
                transition-all duration-300
                flex items-center justify-center gap-2 group
                border border-white/60
              "
            >
              <Phone className="w-5 h-5 text-[#f7b01a] group-hover:rotate-12 transition-transform" />
              <span>Liên hệ tư vấn</span>
            </motion.button>
          </motion.div>

          {/* ============================================================
              Flip Cards – liên hệ
              ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            {contacts.map((c, i) => (
              <FlipCard
                key={i}
                icon={c.icon}
                label={c.label}
                value={c.value}
                href={c.href}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}