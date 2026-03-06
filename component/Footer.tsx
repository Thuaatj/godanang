"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin, ChevronRight, AtSign } from "lucide-react";

const quickLinks = [
  { name: "Trang chủ", href: "#" },
  { name: "Tour", href: "/tour" },
  { name: "Villa", href: "/villa" },
  { name: "Tiện ích", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Đề xuất", href: "#" },
];

const policies = [
  { name: "Điều khoản sử dụng", href: "/about" },
  { name: "Chính sách bảo mật", href: "#" },
  { name: "Chính sách hoàn tiền", href: "#" }
];

const contactInfo = {
  phone: {
    label: "0776711777",
    href: "tel:0776711777",
  },
  email: {
    label: "godn6868@gmail.com",
    href: "mailto:godn6868@gmail.com",
  },
  address: {
    label: "Đà Nẵng, Việt Nam",
    href: "https://www.google.com/maps/search/Đà+Nẵng+Việt+Nam",
  },
};


const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587024129118", color: "text-blue-400 hover:text-blue-300" },
  { icon: Instagram, href: "https://www.instagram.com/godanang6868", color: "text-pink-400 hover:text-pink-300" },
  { icon: Phone, href: "tel:0776711777", color: "text-green-400 hover:text-green-300" },
  { icon: AtSign, href: "https://www.threads.net/@godanang6868", color: "text-gray-300 hover:text-white" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transition: { duration: 0.6, ease: "easeOut" as any },
  },
};


export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black text-gray-300 overflow-hidden">
      {/* Subtle overlay pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.08),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-4 pb-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12"
        >
          {/* Column 1: Logo + Slogan + Contact */}
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-md">
                <Image
                  src="/images/Thiết kế chưa có tên (1).png"   // 👉 đặt logo trong thư mục /public
                  alt="GODANANG Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                  priority
                />
              </div>

              <h3 className="text-xl font-bold text-white tracking-wide">
                GODANANG
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Đồng hành cùng bạn khám phá vẻ đẹp Việt Nam và thế giới.
            </p>

            <div className="space-y-2 text-sm">
            <a
              href={contactInfo.phone.href}
              className="flex items-center gap-2 group hover:text-cyan-400 transition-colors"
            >
              <Phone
                size={16}
                className="text-gray-400 transition-colors group-hover:text-cyan-400"
              />
              <span>{contactInfo.phone.label}</span>
            </a>

            <a
              href={contactInfo.email.href}
              className="flex items-center gap-2 group hover:text-cyan-400 transition-colors"
            >
              <Mail
                size={16}
                className="text-gray-400 transition-colors group-hover:text-cyan-400"
              />
              <span>{contactInfo.email.label}</span>
            </a>

            <a
              href={contactInfo.address.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 group hover:text-cyan-400 transition-colors"
            >
              <MapPin
                size={16}
                className="text-gray-400 mt-1 transition-colors group-hover:text-cyan-400"
              />
              <span className="line-clamp-2">
                {contactInfo.address.label}
              </span>
            </a>
          </div>

          </motion.div>

          {/* Column 2: Liên kết nhanh */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base font-semibold text-white mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <ChevronRight size={14} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Chính sách */}
          <motion.div variants={itemVariants}>
            <h4 className="text-base font-semibold text-white mb-4">Chính sách</h4>
            <ul className="space-y-2 text-sm">
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Mạng xã hội + Newsletter */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h4 className="text-base font-semibold text-white mb-3">Kết nối</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className={`w-9 h-9 rounded-full bg-gray-800/60 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label="Social link"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Newsletter nhỏ gọn hơn */}
            <div className="mt-6">
              <h4 className="text-base font-semibold text-white mb-2">Nhận tin khuyến mãi</h4>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Email của bạn..."
                  className="px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all text-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-8 border-t border-gray-800/50 text-center text-xs text-gray-500"
        >
          <p>© {new Date().getFullYear()} GODANANG. All rights reserved.</p>
          <p className="mt-1">
            Được cấp phép bởi Sở Du lịch TP. Đà Nẵng • Mã số thuế: 031xxxxxxx
          </p>
        </motion.div>
      </div>
    </footer>
  );
}