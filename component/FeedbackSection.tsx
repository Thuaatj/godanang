"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const feedbacks = [
  {
    name: "Nguyễn Minh Anh",
    location: "Hà Nội",
    avatar:
      "https://randomuser.me/api/portraits/women/65.jpg",
    content:
      "Chuyến đi Đà Nẵng thật sự tuyệt vời. Dịch vụ chuyên nghiệp, hướng dẫn viên thân thiện và lịch trình rất hợp lý.",
  },
  {
    name: "Trần Quốc Bảo",
    location: "TP. Hồ Chí Minh",
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Villa rất đẹp, view biển cực chill. Gia đình mình rất hài lòng và chắc chắn sẽ quay lại lần nữa.",
  },
  {
    name: "Lê Thu Trang",
    location: "Hải Phòng",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "Đặt tour nhanh, hỗ trợ nhiệt tình. Mọi thứ đúng như quảng cáo, trải nghiệm rất đáng nhớ.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
    },
  }),
};

export default function FeedbackSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Khách hàng nói gì về chúng tôi
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Những trải nghiệm thực tế từ du khách sau chuyến hành trình
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-3">
        {feedbacks.map((item, i) => (
          <motion.div
            key={item.name}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -10 }}
            className="
              group relative p-6 rounded-2xl
              bg-white/5 backdrop-blur-md
              border border-white/10
              hover:border-yellow-400/40
              transition-all duration-300
              overflow-hidden
            "
          >
            {/* Glow hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-yellow-400/10 to-transparent transition duration-500" />

            {/* Stars */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  size={16}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              &quot;{item.content}&quot;
            </p>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-400 text-sm">
                  {item.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
