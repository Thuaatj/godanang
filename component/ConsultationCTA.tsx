"use client";

import { motion } from "framer-motion";
import { Send, ShieldCheck, Clock, PhoneCall } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const fields = [
  { id: "name", label: "Họ và tên", type: "text", placeholder: "Nguyễn Văn A" },
  { id: "phone", label: "Số điện thoại", type: "tel", placeholder: "090xxxxxxx" },
  { id: "email", label: "Email", type: "email", placeholder: "example@gmail.com" },
];

export default function ConsultationCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Cảm ơn bạn! Đội ngũ PYS Travel sẽ liên hệ trong vòng 15-60 phút.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 opacity-80" />
        
        {/* Overlay scenic images - low opacity for depth */}
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Tropical beach sunset"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=80"
            alt="Vietnam villa resort"
            fill
            className="object-cover scale-110"
          />
        </div>
      </div>

      <div className="relative container mx-auto px-5 sm:px-6 lg:px-8 z-10 max-w-4xl">
        {/* Heading + sub */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
            Tư vấn miễn phí – Hành trình mơ ước bắt đầu từ đây
          </h2>
          <p className="mt-5 text-xl sm:text-2xl text-cyan-100/90 max-w-3xl mx-auto font-light">
            Chỉ cần để lại thông tin, chuyên viên PYS Travel sẽ thiết kế tour/villa/combo **hoàn hảo** theo đúng nhu cầu & ngân sách của bạn.
          </p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10 text-cyan-200/90 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-cyan-400" /> Bảo mật 100%
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-cyan-400" /> Phản hồi trong 60 phút
          </div>
          <div className="flex items-center gap-2">
            <PhoneCall size={20} className="text-cyan-400" /> Tư vấn 24/7
          </div>
        </motion.div>

        {/* Premium glass form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/8 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 lg:p-12 
                     border border-white/15 shadow-2xl shadow-cyan-500/10 
                     max-w-3xl mx-auto relative overflow-hidden"
        >
          {/* Subtle animated gradient border */}
          <div className="absolute inset-0 pointer-events-none border-2 border-transparent rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 animate-gradient-x" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative z-10">
            {fields.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.12 }}
              >
                <label htmlFor={f.id} className="block text-white/90 font-medium mb-2.5 text-base">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  value={formData[f.id as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 
                             text-white placeholder:text-white/40 focus:outline-none 
                             focus:border-cyan-400 focus:bg-white/15 focus:shadow-lg focus:shadow-cyan-500/20 
                             transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10 relative z-10"
          >
            <label htmlFor="message" className="block text-white/90 font-medium mb-2.5 text-base">
              Bạn đang mơ về chuyến đi nào?
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ví dụ: Tour Đà Lạt 3N3Đ ngắm hoa mai anh đào, villa Phú Quốc view biển, combo gia đình 4 người..."
              rows={4}
              className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 
                         text-white placeholder:text-white/40 focus:outline-none 
                         focus:border-cyan-400 focus:bg-white/15 focus:shadow-lg focus:shadow-cyan-500/20 
                         transition-all duration-300 resize-none"
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34,211,238,0.5)" }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full flex items-center justify-center gap-3 
                       bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 
                       hover:from-cyan-400 hover:via-blue-500 hover:to-blue-700 
                       text-white font-bold text-lg py-5 px-12 rounded-full 
                       shadow-2xl shadow-cyan-600/40 transition-all duration-400 relative overflow-hidden group"
          >
            <Send size={20} className="group-hover:rotate-12 transition-transform" />
            Gửi ngay để nhận tư vấn VIP
          </motion.button>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-cyan-200/80 text-base mt-10 font-light"
        >
          Hàng ngàn khách hàng đã tin tưởng PYS Travel • Thông tin của bạn được bảo mật tuyệt đối
        </motion.p>
      </div>
    </section>
  );
}