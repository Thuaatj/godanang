'use client';

import { Variants } from "framer-motion";
import React, { useState } from 'react';
import {
  Search,
  Star,
  Clock,
  Heart,
  Waves,
  Mountain,
  Moon,
  Palette,
  Phone,
  Mail,
  ArrowRight,
  Menu,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import Footer from '@/component/Footer';
import HeaderNav from '@/component/HeaderNav';
import HeroQuoteSection from "./HeroQuoteSection";
import Blog from "./Blog";

const DaNangToursPage = () => {
  const [activeCategory, setActiveCategory] = useState('beach');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  interface Tour {
    id: number;
    name: string;
    image: string;
    duration: string;
    price: string;
    rating: number;
  }

  const featuredTours: Record<
  string,
  {
    title: string;
    items: Tour[];
  }
> = {
  paragliding: {
    title: "Tour Dù lượn Sơn Trà",
    items: [
      {
        id: 1,
        name: "Dù lượn Sơn Trà – Trải nghiệm tiêu chuẩn",
        image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/29/1198189/1.jpg",
        duration: "2–3 giờ",
        price: "1.500.000",
        rating: 4.9,
      },
      {
        id: 2,
        name: "Dù lượn Sơn Trà – Bay đôi cùng HLV",
        image: "https://bizweb.dktcdn.net/100/514/927/files/ve-du-luon-da-nang-phan-van-travel.webp?v=1735117504537",
        duration: "2 giờ",
        price: "1.700.000",
        rating: 4.9,
      },
      {
        id: 3,
        name: "Dù lượn Sơn Trà – Ngắm hoàng hôn",
        image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/29/1198189/12.jpg",
        duration: "2 giờ",
        price: "1.800.000",
        rating: 5.0,
      },
      {
        id: 4,
        name: "Dù lượn Sơn Trà – Chụp ảnh Flycam",
        image: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos724977756xl-1723513162975.jpg",
        duration: "3 giờ",
        price: "2.000.000",
        rating: 4.8,
      },
      {
        id: 5,
        name: "Dù lượn Sơn Trà – Combo nhóm",
        image: "https://media.baovanhoa.vn/zoom/1000/Uploaded/dangngocha/2024_05_27/img5863_JSFL.jpg",
        duration: "Nửa ngày",
        price: "1.350.000",
        rating: 4.7,
      },
    ],
  },

  parasailing: {
    title: "Tour Cano kéo dù (Parasailing)",
    items: [
      {
        id: 6,
        name: "Parasailing Mỹ Khê – Gói cơ bản",
        image: "https://bqn.1cdn.vn/thumbs/1200x630/2025/04/21/baodanang.vn-dataimages-202504-original-_images1773975_3_kinh_te.jpg",
        duration: "30 phút",
        price: "800.000",
        rating: 4.8,
      },
      {
        id: 7,
        name: "Parasailing Mỹ Khê – Bay đôi",
        image: "https://zapata.com.vn/wp-content/uploads/2024/11/cano-du-keo-3-1.jpg",
        duration: "30 phút",
        price: "1.200.000",
        rating: 4.9,
      },
      {
        id: 8,
        name: "Parasailing – Ngắm biển từ trên cao",
        image: "https://lethuytravel.com/uploaded/Anh-Cam-Nang/cn-dl-da-nang/trainghiemtrochoicanodubaytaidanang.jpg",
        duration: "20 phút",
        price: "750.000",
        rating: 4.7,
      },
      {
        id: 9,
        name: "Parasailing – Chụp ảnh & video",
        image: "https://zapata.com.vn/wp-content/uploads/2024/11/Choi-du-keo-cano-o-Da-Nang-3.jpg",
        duration: "30 phút",
        price: "950.000",
        rating: 4.8,
      },
      {
        id: 10,
        name: "Parasailing – Combo gia đình",
        image: "https://www.vietrekking.com/wp-content/uploads/2021/03/du-bay-2-nguoi.jpg",
        duration: "45 phút",
        price: "1.500.000",
        rating: 4.9,
      },
    ],
  },

  jetski: {
    title: "Tour Jetski – Mô tô nước",
    items: [
      {
        id: 11,
        name: "Jetski biển Non Nước – 30 phút",
        image: "https://stcd02265632633.cloud.edgevnpay.vn/website-vnpay-public/fill/2023/12/0gsz5rwmz12l1701767675042.jpg",
        duration: "30 phút",
        price: "700.000",
        rating: 4.7,
      },
      {
        id: 12,
        name: "Jetski biển Non Nước – 1 giờ",
        image: "https://cdn.justfly.vn/1000x667/media/39/2b/f3d6-5c04-400d-a694-77306c8b68b7.jpg",
        duration: "1 giờ",
        price: "1.200.000",
        rating: 4.8,
      },
      {
        id: 13,
        name: "Jetski – Đua tốc độ trên biển",
        image: "https://nanotravel.vn/wp-content/uploads/2024/04/lang-ngam-san-ho-5.jpg",
        duration: "45 phút",
        price: "1.000.000",
        rating: 4.9,
      },
      {
        id: 14,
        name: "Jetski – Trải nghiệm cho người mới",
        image: "https://stcd02265632633.cloud.edgevnpay.vn/website-vnpay-public/fill/2023/12/0pwe95kcofx1701767685796.jpg",
        duration: "30 phút",
        price: "650.000",
        rating: 4.6,
      },
      {
        id: 15,
        name: "Jetski – Combo nhóm bạn",
        image: "https://kgc.vn/wp-content/uploads/2021/04/KGC-Jetski.jpg",
        duration: "1.5 giờ",
        price: "1.800.000",
        rating: 4.8,
      },
    ],
  },

  snorkeling: {
    title: "Tour Ngắm san hô Sơn Trà",
    items: [
      {
        id: 16,
        name: "Ngắm san hô Sơn Trà – Cano",
        image: "https://ztrip.vn/uploads/images/trai-nghiem-tour-di-cano-lan-ngam-san-ho-son-tra.jpg",
        duration: "Nửa ngày",
        price: "950.000",
        rating: 4.9,
      },
      {
        id: 17,
        name: "Ngắm san hô Sơn Trà – Lặn biển",
        image: "https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1742226870.jpg&w=3840&q=75",
        duration: "3 giờ",
        price: "1.100.000",
        rating: 4.8,
      },
      {
        id: 18,
        name: "Ngắm san hô – Check-in sống ảo",
        image: "https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Falbums%2F17556%2Fefa74a77fa802f509ff72b6099ce8e99.jpg&w=1920&q=75",
        duration: "Nửa ngày",
        price: "900.000",
        rating: 4.7,
      },
      {
        id: 19,
        name: "Ngắm san hô – Combo ăn trưa",
        image: "https://truongsatour.com/uploads/images/lan-ngam-san-ho-son-tra-da-nang-gia-re-2025.jpg",
        duration: "1 ngày",
        price: "1.300.000",
        rating: 4.9,
      },
      {
        id: 20,
        name: "Ngắm san hô – Nhóm nhỏ cao cấp",
        image: "https://truongsatour.com/uploads/images/dat-ve-lan-ngam-san-ho-son-tra-da-nang.jpg",
        duration: "Nửa ngày",
        price: "1.500.000",
        rating: 5.0,
      },
    ],
  },
};


  const [activeFilter, setActiveFilter] = useState<string>("all");

  const toursToShow: Tour[] =
    activeFilter === "all"
      ? Object.values(featuredTours).flatMap((group) => group.items)
      : featuredTours[activeFilter]?.items || [];

 const categoryTours: Record<
  string,
  { name: string; price: string; duration: string; image: string }[]
> = {
  beach: [
    {
      name: "Cano kéo dù",
      price: "800.000",
      duration: "30 phút",
      image:
        "https://lethuytravel.com/uploaded/trainghiemtrochoicanodubaytaidanang3.jpg",
    },
    {
      name: "Jetski",
      price: "1.200.000",
      duration: "1 giờ",
      image:
        "https://vufo.org.vn/data/data/quynhhoa/2025/05/diff.jpg",
    },
    {
      name: "Kayak / SUP",
      price: "500.000",
      duration: "2 giờ",
      image:
        "https://vietrektravel.com/ckeditor/plugins/fileman/Uploads/cheo-sup/cheo-sup-da-nang-5.jpg",
    },
    {
      name: "Lặn san hô",
      price: "950.000",
      duration: "3 giờ",
      image:
        "https://letravel.vn/uploaded/Anh-Cam-NangDL/cn-da-nang/trainghiemlanngamsanhosontradanng3.jpg",
    },
  ],

  nature: [
    {
      name: "Dù lượn Sơn Trà",
      price: "1.500.000",
      duration: "2–3 giờ",
      image:
        "https://static.vinwonders.com/production/J8eQO6ee-nhay-du-o-da-nang-banner-1.jpg",
    },
    {
      name: "Sơn Trà – Linh Ứng",
      price: "600.000",
      duration: "4 giờ",
      image:
        "https://mia.vn/media/uploads/blog-du-lich/chua-linh-ung-tai-da-nang-4-1724577663.jpg",
    },
    {
      name: "Ngũ Hành Sơn – Non Nước",
      price: "550.000",
      duration: "3 giờ",
      image:
        "https://booking.muongthanh.com/upload_images/images/H%60/nui-ngu-hanh-son.jpg",
    },
    {
      name: "Núi Thần Tài – Khoáng nóng",
      price: "850.000",
      duration: "5 giờ",
      image:
        "https://hoangphuan.com/wp-content/uploads/2024/07/kham-pha-tour-nui-than-tai-1-ngay-hap-dan-1.jpg",
    },
  ],

  city: [
    {
      name: "City Tour Đà Nẵng",
      price: "700.000",
      duration: "4 giờ",
      image:
        "https://hoangphuan.com/wp-content/uploads/2024/07/tat-tan-tat-kinh-nghiem-du-lich-tour-da-nang-ma-ban-phai-biet.jpg",
    },
    {
      name: "Tour Đà Nẵng by Night",
      price: "650.000",
      duration: "3 giờ",
      image:
        "https://hoianprivatetaxi.com/wp-content/uploads/2023/09/da-nang-night-tour-hoi-an-private-taxi-4.jpg",
    },
    {
      name: "Du thuyền sông Hàn",
      price: "900.000",
      duration: "2 giờ",
      image:
        "https://static.vinwonders.com/2022/12/du-thuyen-tren-song-han-banner.jpg",
    },
    {
      name: "Chợ đêm Helio",
      price: "400.000",
      duration: "2 giờ",
      image:
        "https://statics.vinpearl.com/cho-dem-helio-1_1637246935.jpg",
    },
  ],

  workshop: [
    {
      name: "Workshop Nấu ăn Đà Nẵng",
      price: "800.000",
      duration: "3 giờ",
      image:
        "https://furamavietnam.com/wp-content/uploads/2025/05/492196720_681567597579883_6734976306117697213_n-1024x683-2.jpg",
    },
    {
      name: "Workshop Làm gốm",
      price: "600.000",
      duration: "2 giờ",
      image:
        "https://static.vinwonders.com/production/optimize_workshop-lam-gom-ha-noi-04.jpg",
    },
    {
      name: "Workshop Vẽ tranh",
      price: "550.000",
      duration: "2 giờ",
      image:
        "https://helio.vn/media/uploads/2023/05/29/workshop-o-da-nang-dreamy-painting.jpg",
    },
    {
      name: "Workshop Nến thơm / Handmade",
      price: "500.000",
      duration: "2 giờ",
      image:
        "https://vivuvietnam.org/wp-content/uploads/2024/10/workshop-lam-nen-thom-4-jpg.webp",
    },
  ],
};


  const services = [
    { emoji: '💆‍♀️', name: 'Massage' },
    { emoji: '✨', name: 'Facial' },
    { emoji: '🧖‍♀️', name: 'Sauna / Onsen' },
    { emoji: '💅', name: 'Nail Spa' },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]));
  };

  // Variants cho section fade-in mượt mà
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.98 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.9, 
        ease: [0.22, 1, 0.36, 1] as const, // cubic-bezier mượt, TypeScript chấp nhận
      }
    }
  };

  // Stagger cho các section xuất hiện lần lượt
  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  // Variants cho mosaic grid khi đổi filter
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.08,
      }
    },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  // Variants cho từng card mosaic
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <HeaderNav />

      {/* Hero */}
       <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.avianexperiences.com/attractions/91867153-b18f-41e9-a534-bb924e292e26)",
        }}
      />

      {/* Overlay cinematic */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80" />

      {/* Noise layer */}
      <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          {/* Text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-semibold
                tracking-tight
                leading-tight
                text-center
                text-white
              "
            >
              <span className="bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
                Khám Phá Đà Nẵng Theo Cách Của Bạn
              </span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-6 text-lg sm:text-xl md:text-2xl text-white/85 font-light"
            >
              Tour • Trải Nghiệm • Workshop • Nghỉ Dưỡng
            </motion.p>
          </motion.div>

          {/* Search box */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="mt-6 max-w-5xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="rounded-[28px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {/* Location */}
                <div>
                  <label className="block text-sm text-white/80 mb-2">
                    Địa điểm
                  </label>
                  <select className="w-full rounded-xl bg-white/90 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                    <option>Tất cả khu vực</option>
                    <option>Sơn Trà</option>
                    <option>Ngũ Hành Sơn</option>
                    <option>Hải Châu</option>
                  </select>
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm text-white/80 mb-2">
                    Loại tour
                  </label>
                  <select className="w-full rounded-xl bg-white/90 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition">
                    <option>Tất cả</option>
                    <option>Tour Biển</option>
                    <option>Trải Nghiệm</option>
                    <option>Workshop</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-sm text-white/80 mb-2">
                    Thời gian
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl bg-white/90 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  />
                </div>

                {/* Button */}
                <div className="flex items-end">
                  <button className="w-full h-[52px] rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:brightness-110 hover:scale-[1.03] active:scale-[0.97] transition-all flex items-center justify-center gap-2">
                    <Search size={20} />
                    Tìm Tour
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => {
          document.getElementById("tour")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="
          absolute bottom-10 left-1/2 -translate-x-1/2 z-20
          flex flex-col items-center gap-3
          cursor-pointer
          text-white
        "
      >
        {/* Glow mạnh hơn */}
        <div className="absolute -inset-8 rounded-full bg-white/30 blur-3xl" />

        <span
          className="
            relative
            text-[10px] sm:text-xs
            uppercase
            tracking-[0.25em] sm:tracking-[0.4em]
            font-medium sm:font-semibold
            text-white/90
            drop-shadow-[0_1px_8px_rgba(255,255,255,0.6)]
          "
        >
          Khám phá các Tour
        </span>

        <div className="w-[2px] h-16 bg-gradient-to-b from-white via-white/70 to-transparent" />

        <svg
          className="w-6 h-6 drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>


      {/* Featured Tours */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="bg-[#f5f1ea] py-10 px-5 sm:px-8"
      >
        <div id="tour" className="max-w-7xl mx-auto scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Tour Đà Nẵng
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                Chọn hành trình phù hợp với phong cách trải nghiệm của bạn
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {Object.keys(featuredTours).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${activeFilter === key ? "bg-black text-white shadow-lg" : "bg-white text-gray-700 hover:bg-black hover:text-white"}
                  `}
                >
                  {key === "all" ? "Tất cả" : featuredTours[key].title}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-4 gap-1"
            >
              {toursToShow.slice(0, 5).map((tour, index) => {
                const spanClass =
                index === 0 || index === 1
                  ? "md:col-span-2 h-[26vh] min-h-[260px] max-h-[320px]"
                  : index === 3
                  ? "md:col-span-2 h-[22vh] min-h-[220px] max-h-[260px]"
                  : "md:col-span-1 h-[22vh] min-h-[220px] max-h-[260px]";
                return (
                  <motion.div
                    key={tour.id}
                    variants={cardVariants}
                    className={`relative group overflow-hidden ${spanClass} shadow-[0_12px_40px_rgba(0,0,0,0.18)]`}

                  >
                    <img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                    <div
                      className="
                        absolute bottom-24 md:bottom-4
                        left-5 right-5 z-10 text-white
                        transition-all duration-500 ease-out
                        md:group-hover:bottom-24
                      "
                    >

                      <h3 className="text-lg font-bold leading-snug">{tour.name}</h3>
                    </div>
                    <div
                      className="
                        absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10
                        bg-gradient-to-t from-black/90 via-black/70 to-transparent
                        translate-y-0 opacity-100
                        md:translate-y-full md:opacity-0
                        transition-all duration-500 ease-out
                        md:group-hover:translate-y-0 md:group-hover:opacity-100
                      "
                    >

                      <div className="flex items-center gap-4 text-sm text-white/90 mb-3">
                        <span>⭐ {tour.rating}</span>
                        <span>⏱ {tour.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-yellow-400">Từ {tour.price}₫</span>
                        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition">
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      <HeroQuoteSection />
      {/* Category Section - Portfolio-style: Left big image + Right filters + grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-[560px]">
          {/* LEFT — BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col justify-center px-6 lg:px-12"
          >
            <p className="text-sm tracking-[0.35em] text-gray-500 mb-5 mt-10">
              CÁC LOẠI TOUR
            </p>

            <div className="relative w-full h-[360px] lg:h-[480px] overflow-hidden">
              <img
                src={
                  activeCategory === "beach"
                    ? "https://motogo.vn/wp-content/uploads/2019/11/bien-cua-dai-min.jpg"
                    : activeCategory === "nature"
                    ? "https://danangfantasticity.com/wp-content/uploads/2023/05/da-nang-trong-top-nhung-diem-den-co-phong-canh-nui-non-dep-nhat-chau-a.jpg"
                    : activeCategory === "city"
                    ? "https://hoangphuan.com/wp-content/uploads/2024/07/tour-da-nang-4-ngay-3-dem-trai-nghiem-dang-cap-gia-ca-hap-dan.png"
                    : "https://bcp.cdnchinhphu.vn/334894974524682240/2025/9/18/cdhoian5-17581621538711341831070.jpeg"
                }
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT — DARK GALLERY */}
          <div className="bg-[#f5f1ea] px-6 lg:px-8 py-10 flex flex-col justify-center">
            {/* MENU */}
            <div className="flex gap-8 text-sm uppercase tracking-widest text-gray-900 mb-8">
              {[
                { key: "beach", label: "Trải nghiệm biển" },
                { key: "nature", label: "Thiên nhiên & khám phá" },
                { key: "city", label: " City tour & về đêm" },
                { key: "workshop", label: "Workshop & trải nghiệm văn hoá" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`relative transition-all duration-300
        ${
          activeCategory === key
            ? "text-[#C9A227] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-[#C9A227]"
            : "text-black hover:text-[#C9A227]"
        }`}

                >
                  {label}
                </button>
              ))}
            </div>

            {/* GRID — 4 CARDS (SMALLER) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {categoryTours[activeCategory]?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="relative h-[230px] overflow-hidden group cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* HOVER INFO */}
                  <div className="
                    absolute inset-0
                    bg-black/45
                    opacity-100 lg:opacity-0
                    lg:group-hover:opacity-100
                    transition-opacity duration-300
                    flex items-center justify-center
                  ">
                    <div className="text-center px-3">
                      <p className="text-xs uppercase tracking-widest text-white mb-0.5">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-gray-300">
                        {item.duration}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          </div>
        </div>
      </motion.section>

      <section className="relative h-[42vh] min-h-[300px] max-h-[300px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000)",
          }}
        />

        {/* Overlay cinematic */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 h-full max-w-6xl mx-auto px-6
          flex flex-col lg:flex-row
          items-center justify-center lg:justify-between
          gap-8 lg:gap-14
          text-center lg:text-left
        ">
          {/* LEFT – Services icons */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="
                  group relative
                  w-16 h-16
                  flex items-center justify-center
                  rounded-full
                  bg-white/15 backdrop-blur-md
                  text-3xl text-white
                  ring-1 ring-white/30
                  hover:bg-white hover:text-black
                  hover:scale-110
                  transition-all duration-300
                  shadow-lg
                "
              >
                {s.emoji}

                {/* label */}
                <span
                  className="
                    absolute -bottom-7
                    text-[11px] tracking-wide
                    text-white/90
                    opacity-0 group-hover:opacity-100
                    transition
                    whitespace-nowrap
                  "
                >
                  {s.name}
                </span>
              </div>
            ))}
          </div>

          {/* RIGHT – Text */}
          <div className="max-w-md text-right">
            <h3 className="
              text-3xl md:text-4xl
              font-semibold
              leading-tight
              text-white
              drop-shadow-lg
            ">
              Trải nghiệm Đà Nẵng<br />theo cách tinh tế
            </h3>

            <p className="mt-3 text-white/80 text-sm md:text-base">
              Villa nghỉ dưỡng · Tour chọn lọc · Dịch vụ trọn gói
            </p>
          </div>

        </div>
      </section>

      <Blog />

     {/* Final CTA – refined */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="relative h-[300px] md:h-[450px] px-6 overflow-hidden flex items-center"
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url(https://vietsensetravel.com/view/at_==TYPENAME==_18fc3afdb726c85ff679be0067ee2f3c.jpeg)",
          }}
        />

        {/* Overlay depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/35" />

        {/* Luxury highlight */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full text-center text-white">
          <p className="uppercase tracking-[0.28em] text-white/70 mb-4 text-xs">
            Trải nghiệm Đà Nẵng theo cách riêng
          </p>

          <h2
            className="
              text-3xl md:text-4xl lg:text-5xl
              font-semibold
              leading-tight
              mb-6
              drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]
            "
          >
            Mỗi hành trình đều xứng đáng
            <br className="hidden sm:block" />
            <span className="text-white/90">trở thành ký ức đẹp</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="
                bg-[#f7b01a] text-black
                px-9 py-3 rounded-full
                font-semibold text-base
                hover:bg-[#ffc94a]
                transition-all duration-300
                flex items-center justify-center gap-2
                shadow-[0_10px_35px_rgba(0,0,0,0.35)]
                hover:scale-[1.04]
              "
            >
              <Phone size={18} />
              Liên hệ tư vấn
            </button>

            <button
              className="
                border border-white/70
                px-9 py-3 rounded-full
                font-semibold text-base
                backdrop-blur-md
                hover:bg-white/10
                transition-all duration-300
                flex items-center justify-center gap-2
              "
            >
              <Mail size={18} />
              Gửi yêu cầu
            </button>
          </div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default DaNangToursPage;