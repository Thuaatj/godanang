"use client";

import React, { useEffect } from "react";
import {
  Leaf,
  Flame,
  Utensils,
  Sailboat,
  Waves,
  Plane,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const whyChooseItems: ExperienceItem[] = [
  {
    icon: Leaf,
    title: "Spa & Massage",
    description: "Thư giãn toàn diện với liệu trình chăm sóc cao cấp.",
  },
  {
    icon: Flame,
    title: "Xông hơi – Onsen",
    description: "Không gian onsen riêng tư, tái tạo năng lượng.",
  },
  {
    icon: Utensils,
    title: "Workshop Trải Nghiệm",
    description: "Nấu ăn, làm gốm, khám phá văn hóa bản địa.",
  },
  {
    icon: Sailboat,
    title: "Du thuyền biển",
    description: "Trải nghiệm Đà Nẵng từ góc nhìn sang trọng trên biển.",
  },
  {
    icon: Waves,
    title: "Jetski – Cano",
    description: "Hoạt động thể thao biển sôi động & an toàn.",
  },
  {
    icon: Plane,
    title: "Đưa đón sân bay",
    description: "Dịch vụ đưa đón riêng, đúng giờ & tiện lợi.",
  },
];

const ExperienceCard: React.FC<ExperienceItem & { index: number }> = ({
  icon: Icon,
  title,
  description,
  index,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay: index * 0.5,           // ← ĐÂY: mỗi card cách nhau 1 giây
      },
    },
  };

  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col items-center text-center cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ICON */}
      <div className="mb-5 transition-transform duration-400 group-hover:scale-110">
        <div
          className={`
            w-14 h-14 md:w-16 md:h-16 flex items-center justify-center
            rounded-full bg-yellow-50 border border-yellow-200
            shadow-sm group-hover:shadow-md group-hover:bg-yellow-100
            transition-all duration-400
          `}
        >
          <Icon
            className={`
              w-10 h-10 text-yellow-700
              transition-colors duration-400
              group-hover:text-yellow-800
            `}
            strokeWidth={1.6}
          />
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-gray-900 text-lg font-medium mb-1 tracking-wide transition-colors group-hover:text-yellow-700">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <div className="min-h-[22px] flex items-center justify-center">
        <p
          className={`
            text-gray-600 text-sm leading-relaxed px-4
            transition-all duration-500 ease-out
            opacity-100 translate-y-0 lg:${hovered ? "" : ""}
          `}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ExperiencesSection = () => {
  return (
    <section className="relative w-full bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-wider mb-4">
            TRẢI NGHIỆM & TIỆN ÍCH
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {whyChooseItems.map((item, index) => (
            <ExperienceCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;