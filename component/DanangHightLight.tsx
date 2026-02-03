"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const news = [
  {
    tag: "TOUR",
    title: "Cầu Vàng Bà Nà Hills – Khám phá biểu tượng du lịch Đà Nẵng",
    date: "15 THÁNG 01 2026",
    image:
      "https://ik.imagekit.io/tvlk/image/imageResource/2025/05/21/1747823159711-3981979535a520f3f666583e5094da2b.webp",
    location: "Đà Nẵng",
  },
  {
    tag: "KINH NGHIỆM",
    title: "Hội An về đêm – Trải nghiệm phố cổ lung linh đèn lồng",
    date: "08 THÁNG 01 2026",
    image:
      "https://mia.vn/media/uploads/blog-du-lich/pho-co-hoi-an-ve-dem-6-1740477602.jpg",
    location: "Hội An",
  },
  {
    tag: "VILLA",
    title: "Villa ven biển Mỹ Khê – Không gian nghỉ dưỡng giữa thành phố",
    date: "20 THÁNG 12 2025",
    image:
      "https://image.vietgoing.com/destination/large/vietgoing_uen2103258292.webp",
    location: "Đà Nẵng",
  },
];


export default function NewsCards() {
  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://duongmay.com/wp-content/uploads/2025/05/Son-Tra-2238-1654169672.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/30" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-yellow-400/30 text-yellow-800 rounded-full text-sm font-semibold mb-4">
            Khám phá
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tin Tức & Sự Kiện
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Cập nhật những điểm đến hấp dẫn và trải nghiệm độc đáo tại Việt Nam
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {news.map((item, index) => (
            <motion.article
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 60, scale: 1.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-180px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 1.12,
              }}
            >
              <div className="bg-white/95 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700">
                {/* Image */}
                <div className="relative h-[280px] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full h-full"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </motion.div>

                  {/* Overlay – FIXED */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1.5 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full">
                    {item.tag}
                  </span>

                  {/* Location */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>

                  <div className="h-px bg-gradient-to-r from-yellow-400 to-transparent" />

                  <div className="flex items-center gap-2 text-yellow-600 font-semibold text-sm group-hover:gap-4 transition-all">
                    Đọc thêm
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
