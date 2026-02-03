"use client";

import { motion } from "framer-motion";
import { User, Phone, Compass, Send } from "lucide-react";
import { useState } from "react";

export default function ConsultCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    need: ""
  });

  const [focusedField, setFocusedField] = useState<'name' | 'phone' | 'need' | null>(null);
//   const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Xử lý submit form ở đây
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative min-h-[780px] py-16 md:py-20 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://www.arttravel.com.vn/upload/sanpham/da-nang-12-3745.jpeg"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 min-h-[520px] lg:min-h-[580px] items-center">

          {/* DIAGONAL DIVIDER - Chỉ hiển thị trên desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-24 -translate-x-1/2 z-30 pointer-events-none">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              {/* Đường gạch chéo chính */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-100"
                style={{
                  clipPath: "polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)",
                  transform: "skewY(-3deg)",
                  boxShadow: "0 0 40px rgba(255,255,255,0.3), inset 0 0 20px rgba(247,176,26,0.1)"
                }}
              />
              
              {/* Viền vàng */}
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(38% 0%, 40% 0%, 40% 100%, 38% 100%)",
                  transform: "skewY(-3deg)",
                  background: "linear-gradient(180deg, #f7b01a 0%, #ffd700 50%, #f7b01a 100%)"
                }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(60% 0%, 62% 0%, 62% 100%, 60% 100%)",
                  transform: "skewY(-3deg)",
                  background: "linear-gradient(180deg, #f7b01a 0%, #ffd700 50%, #f7b01a 100%)"
                }}
              />

              {/* Hiệu ứng ánh sáng chạy */}
              <motion.div
                animate={{
                  y: ["-100%", "200%"],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-200/40 to-transparent"
                style={{
                  clipPath: "polygon(40% 0%, 60% 0%, 60% 100%, 40% 100%)",
                  transform: "skewY(-3deg)"
                }}
              />
            </motion.div>
          </div>

          {/* TITLE BLOCK - BÊN TRÁI */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              relative z-20
              md:pr-16 lg:pr-20
              flex flex-col justify-center
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="
                inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-[#f7b01a]/20 backdrop-blur-sm
                border border-[#f7b01a]/30
                text-[#f7b01a] font-medium text-sm
                uppercase tracking-wider
              ">
                <Compass className="w-4 h-4" />
                Travel Consultant
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="
                mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-bold leading-[1.1] text-white
              "
            >
              💬 Chưa biết<br />
              chọn gì?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-[#f7b01a]">
                Để chúng tôi tư vấn cho bạn
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed max-w-xl"
            >
              Chúng tôi giúp bạn lựa chọn tour, villa hoặc combo phù hợp nhất 
              với ngân sách và nhu cầu cá nhân. Tư vấn miễn phí 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-4 text-sm text-gray-300"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#f7b01a]" />
                <span>Tư vấn miễn phí</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#f7b01a]" />
                <span>Phản hồi nhanh chóng</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#f7b01a]" />
                <span>Ưu đãi độc quyền</span>
              </div>
            </motion.div>
          </motion.div>

          {/* FORM BLOCK - BÊN PHẢI */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="
              relative z-20
              md:pl-16 lg:pl-20
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                bg-white rounded-3xl
                p-8 md:p-10 lg:p-12
                shadow-[0_30px_90px_rgba(0,0,0,0.5)]
                backdrop-blur-sm
              "
            >
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Đăng ký tư vấn
                </h3>
                <p className="mt-2 text-gray-600">
                  Điền thông tin để nhận tư vấn miễn phí
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên
                  </label>
                  <div className="relative">
                    <User className={`
                      absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-all duration-300
                      ${focusedField === 'name' ? 'text-[#f7b01a] scale-110' : 'text-gray-400'}
                    `} />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Nhập họ và tên của bạn"
                      className="
                        w-full pl-12 pr-5 py-4 rounded-xl
                        border-2 border-gray-200 
                        focus:border-[#f7b01a] focus:ring-4 focus:ring-[#f7b01a]/20
                        outline-none transition-all duration-300
                        text-gray-900 placeholder:text-gray-400
                      "
                    />
                    {formData.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <div className="relative">
                    <Phone className={`
                      absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-all duration-300
                      ${focusedField === 'phone' ? 'text-[#f7b01a] scale-110' : 'text-gray-400'}
                    `} />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Nhập số điện thoại"
                      className="
                        w-full pl-12 pr-5 py-4 rounded-xl
                        border-2 border-gray-200
                        focus:border-[#f7b01a] focus:ring-4 focus:ring-[#f7b01a]/20
                        outline-none transition-all duration-300
                        text-gray-900 placeholder:text-gray-400
                      "
                    />
                    {formData.phone && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                      >
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Need Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nhu cầu của bạn
                  </label>
                  <div className="relative">
                    <Compass className={`
                      absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-all duration-300 z-10
                      ${focusedField === 'need' ? 'text-[#f7b01a] scale-110' : 'text-gray-400'}
                    `} />
                    <motion.select
                      whileFocus={{ scale: 1.01 }}
                      value={formData.need}
                      onChange={(e) => handleChange('need', e.target.value)}
                      onFocus={() => setFocusedField('need')}
                      onBlur={() => setFocusedField(null)}
                      className="
                        w-full pl-12 pr-10 py-4 rounded-xl appearance-none
                        border-2 border-gray-200
                        focus:border-[#f7b01a] focus:ring-4 focus:ring-[#f7b01a]/20
                        outline-none transition-all duration-300
                        text-gray-900
                        bg-white cursor-pointer
                      "
                    >
                      <option value="">Chọn nhu cầu của bạn</option>
                      <option value="tour">🏝️ Tour du lịch</option>
                      <option value="villa">🏡 Villa nghỉ dưỡng</option>
                      <option value="combo">🎁 Combo du lịch</option>
                      <option value="service">⭐ Tiện ích & dịch vụ</option>
                    </motion.select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="
                      w-full py-4 rounded-xl
                      text-white font-semibold text-lg
                      bg-gradient-to-r from-[#f7b01a] to-[#ffd700]
                      hover:from-[#e5a316] hover:to-[#f7b01a]
                      shadow-[0_12px_40px_rgba(247,176,26,0.4)]
                      hover:shadow-[0_16px_50px_rgba(247,176,26,0.6)]
                      transition-all duration-300
                      flex items-center justify-center gap-2
                      group
                    "
                  >
                    <span>Nhận tư vấn ngay</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>

                {/* Privacy Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-xs text-gray-500 text-center"
                >
                  🔒 Thông tin của bạn được bảo mật tuyệt đối
                </motion.p>
              </form>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}