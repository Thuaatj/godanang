"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Flame,
  Heart,
  HeartPulse,
  House,
  Landmark,
  Laptop,
  Leaf,
  MapPin,
  Moon,
  Palette,
  Sparkles,
  Sunset,
  Users,
  UtensilsCrossed,
  Waves,
  type LucideIcon,
} from "lucide-react";

type RelatedPost = {
  date: string;
  excerpt: string;
  image: string;
  tag: string;
  title: string;
};

type PopularPost = {
  image: string;
  readers: string;
  summary: string;
  tag: string;
  title: string;
};

type TrendItem = {
  description: string;
  icon: LucideIcon;
  image: string;
  title: string;
};

type AttractionItem = {
  label: string;
  rank: number;
};

type AttractionGroup = {
  description: string;
  icon: LucideIcon;
  items: AttractionItem[];
  title: string;
};

type WellnessItem = {
  icon: LucideIcon;
  note: string;
  title: string;
};

const RELATED_POSTS: RelatedPost[] = [
  {
    tag: "Villa",
    title: "Top 10 villa view biển đẹp ở Đà Nẵng được săn đón nhất",
    excerpt: "Gợi ý nhanh những villa sát biển, hồ bơi riêng và phù hợp cho nhóm bạn nghỉ dưỡng.",
    date: "26/11/2025",
    image:
      "https://image.vietgoing.com/destination/large/vietgoing_uen2103258292.webp",
  },
  {
    tag: "Tour",
    title: "Tour nửa ngày tại Sơn Trà – Đồi vọng cảnh – Xích đu biển",
    excerpt: "Lịch trình gọn, dễ đi và rất hợp cho khách ở Đà Nẵng ngắn ngày nhưng vẫn muốn có trải nghiệm đẹp.",
    date: "18/11/2025",
    image:
      "https://hoangphuan.com/wp-content/uploads/2024/05/chua-linh-ung-chon-binh-yen-giua-long-da-nang-013-2.jpg",
  },
  {
    tag: "Trải nghiệm",
    title: "Sunset check-in ở Mỹ Khê: khung giờ đẹp, góc chụp đẹp và quán nên ghé",
    excerpt: "Tổng hợp những điểm ngắm hoàng hôn đáng thử nhất để lên ảnh đẹp mà vẫn dễ đi lại.",
    date: "14/11/2025",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Ẩm thực",
    title: "Ăn gì ở Đà Nẵng buổi tối? 7 địa chỉ local vừa ngon vừa dễ đi",
    excerpt: "Mì Quảng, bún chả cá, hải sản và các quán ăn đêm được dân địa phương nhắc tên nhiều nhất.",
    date: "08/11/2025",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Wellness",
    title: "5 địa điểm spa và gội đầu dưỡng sinh thư giãn sau một ngày đi biển",
    excerpt: "Lựa chọn phù hợp cho cặp đôi, nhóm bạn hoặc khách muốn phục hồi năng lượng trước hành trình tiếp theo.",
    date: "02/11/2025",
    image:
      "https://res.klook.com/images/w_1200,h_630,c_fill,q_65/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tywrxqs1mzajymbrbemm/Tr%E1%BA%A3inghi%E1%BB%87mTigonSpaMassage%E1%BB%9F%C4%90%C3%A0N%E1%BA%B5ng-KlookVi%E1%BB%87tNam.jpg",
  },
  {
    tag: "Địa phương",
    title: "Workshop làm gốm, nấu ăn và vẽ tranh đang hút khách quốc tế tại Đà Nẵng",
    excerpt: "Nếu muốn chạm vào văn hóa địa phương thay vì chỉ tham quan, đây là nhóm trải nghiệm rất đáng ưu tiên.",
    date: "28/10/2025",
    image:
      "https://furamavietnam.com/wp-content/uploads/2025/05/492196720_681567597579883_6734976306117697213_n-1024x683-2.jpg",
  },
];

const POPULAR_POSTS: PopularPost[] = [
  {
    tag: "Villa",
    title: "Top 10 villa view biển đẹp ở Đà Nẵng được săn đón nhất",
    readers: "12.4K lượt đọc",
    summary: "Tổng hợp rõ phân khúc villa sát biển, hồ bơi riêng và khu vực dễ chốt lịch trình.",
    image:
      "https://image.vietgoing.com/destination/large/vietgoing_uen2103258292.webp",
  },
  {
    tag: "Tour",
    title: "Tour nửa ngày tại Sơn Trà – Đồi vọng cảnh – Xích đu biển",
    readers: "9.8K lượt đọc",
    summary: "Lịch trình ngắn cho khách thích đi gọn, săn ảnh đẹp và không muốn mất trọn một ngày.",
    image:
      "https://hoangphuan.com/wp-content/uploads/2024/05/chua-linh-ung-chon-binh-yen-giua-long-da-nang-013-2.jpg",
  },
  {
    tag: "Villa",
    title: "Ổn định nhất: Các villa có hồ bơi riêng giá tốt 2026",
    readers: "8.9K lượt đọc",
    summary: "Danh sách villa dễ chốt cho nhóm bạn, giá ổn định và phù hợp nghỉ ngắn ngày.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/b0/23/2b/caption.jpg?h=-1&s=1&w=1200",
  },
  {
    tag: "Ẩm thực",
    title: "Ăn sáng ở Đà Nẵng: 8 quán local dễ đi và được review tốt",
    readers: "7.4K lượt đọc",
    summary: "Tập trung vào món dễ ăn, gần trung tâm và hợp khách mới đến thành phố lần đầu.",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Trải nghiệm",
    title: "Sunset check-in ở biển Mỹ Khê: khung giờ đẹp và quán nên ghé",
    readers: "6.7K lượt đọc",
    summary: "Tổng hợp góc chụp, thời điểm ánh sáng và gợi ý lịch trình ngắm biển buổi chiều.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    tag: "Địa phương",
    title: "5 workshop địa phương hút khách nước ngoài nhất tại Đà Nẵng",
    readers: "5.9K lượt đọc",
    summary: "Từ làm gốm đến cooking class, đây là nhóm nội dung giữ chân cao với khách thích trải nghiệm bản địa.",
    image:
      "https://furamavietnam.com/wp-content/uploads/2025/05/492196720_681567597579883_6734976306117697213_n-1024x683-2.jpg",
  },
];

const TREND_ITEMS: TrendItem[] = [
  {
    icon: Laptop,
    title: "Work & Wander",
    description: "Làm việc từ xa kết hợp nghỉ dưỡng gần biển đang tăng mạnh.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: HeartPulse,
    title: "Wellness stay",
    description: "Spa, detox và ngủ khỏe trở thành lý do chính để chọn kỳ nghỉ.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Clock3,
    title: "Tour ngắn nửa ngày",
    description: "Lịch trình linh hoạt thay cho các tour dài và dày đặc điểm dừng.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Sunset,
    title: "Sunset check-in",
    description: "Biển, rooftop và bờ sông tiếp tục là trải nghiệm dễ lan truyền.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: House,
    title: "Quiet stay sát biển",
    description: "Villa riêng tư, yên tĩnh được ưu tiên hơn điểm nghỉ quá đông người.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: UtensilsCrossed,
    title: "Ẩm thực đường phố an toàn",
    description: "Khách ưu tiên quán local sạch sẽ, dễ tiếp cận và chất lượng ổn định.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Users,
    title: "Tour do local dẫn dắt",
    description: "Trải nghiệm có người bản xứ đồng hành tạo cảm giác chân thực hơn.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Leaf,
    title: "Green travel",
    description: "Dịch vụ thân thiện môi trường và trải nghiệm gắn với thiên nhiên đang tăng mạnh.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  },
];

const ATTRACTION_GROUPS: AttractionGroup[] = [
  {
    title: "Top Must-See",
    description: "Gần như ai đến Đà Nẵng cũng ưu tiên nhóm này trước vì vừa biểu tượng vừa dễ lên lịch trình.",
    icon: Landmark,
    items: [
      { rank: 1, label: "Sun World Bà Nà Hills – Cầu Vàng" },
      { rank: 2, label: "Ngũ Hành Sơn" },
      { rank: 3, label: "Bán đảo Sơn Trà – Chùa Linh Ứng" },
      { rank: 4, label: "Cầu Rồng" },
      { rank: 5, label: "Bãi biển Mỹ Khê" },
    ],
  },
  {
    title: "Trải nghiệm biển & thiên nhiên",
    description: "Phù hợp khách nghỉ dưỡng, thích hoạt động ngoài trời và muốn cảm nhận Đà Nẵng gần thiên nhiên hơn.",
    icon: Waves,
    items: [
      { rank: 6, label: "Lặn ngắm san hô Sơn Trà / Bãi Nam – Bãi Rạng" },
      { rank: 7, label: "Cano – Jetski – Parasailing" },
      { rank: 8, label: "Kayak / SUP Sơn Trà" },
      { rank: 9, label: "Tour câu cá – câu mực đêm" },
      { rank: 10, label: "Picnic biển / ngắm bình minh – hoàng hôn" },
    ],
  },
  {
    title: "City Tour & về đêm",
    description: "Dành cho khách đi ngắn ngày, thích nhẹ nhàng, check-in đẹp và vẫn có cảm giác khám phá thành phố.",
    icon: Moon,
    items: [
      { rank: 11, label: "City Tour Đà Nẵng (Cầu Rồng – Sông Hàn – Ngũ Hành Sơn)" },
      { rank: 12, label: "Du thuyền sông Hàn về đêm" },
      { rank: 13, label: "Chợ đêm Helio" },
      { rank: 14, label: "Chợ Hàn" },
      { rank: 15, label: "Asia Park – Sun Wheel" },
    ],
  },
  {
    title: "Văn hóa – workshop – trải nghiệm địa phương",
    description: "Rất hút khách nước ngoài và khách thích chạm sâu vào nhịp sống địa phương thay vì chỉ check-in.",
    icon: Palette,
    items: [
      { rank: 16, label: "Workshop làm gốm Đà Nẵng" },
      { rank: 17, label: "Workshop nấu ăn Việt – Cooking Class" },
      { rank: 18, label: "Workshop vẽ tranh (Acrylic / Watercolor)" },
      { rank: 19, label: "Workshop làm nến thơm / Soap handmade" },
      { rank: 20, label: "Workshop tre – mây – đan lát" },
    ],
  },
];

const WELLNESS_ITEMS: WellnessItem[] = [
  {
    icon: HeartPulse,
    title: "Massage Body / Foot / Hot Stone",
    note: "Thư giãn sâu sau ngày dài",
  },
  {
    icon: Sparkles,
    title: "Facial – chăm sóc da",
    note: "Nhẹ nhàng, dễ chốt nhanh",
  },
  {
    icon: Moon,
    title: "Xông hơi – Sauna – Onsen",
    note: "Phục hồi năng lượng",
  },
  {
    icon: Heart,
    title: "Gội đầu dưỡng sinh",
    note: "Phù hợp nhiều nhóm khách",
  },
  {
    icon: Waves,
    title: "Núi Thần Tài – khoáng nóng",
    note: "Có thể mở như tab phụ",
  },
];

function getRankClasses(rank: number) {
  if (rank <= 5) {
    return {
      badge: "bg-[#d9802e] text-white",
      chip: "border-[#d7a249] bg-[#fff4d8] text-[#7a4b18] shadow-[0_10px_30px_rgba(215,162,73,0.2)]",
    };
  }

  if (rank <= 15) {
    return {
      badge: "bg-[#f7eadc] text-[#b86a26]",
      chip: "border-[#efc8a4] bg-white text-[#8e5c2f] hover:border-[#d69a58] hover:bg-[#fff7ef]",
    };
  }

  return {
    badge: "bg-white text-[#7f7467]",
    chip: "border-[#d9d2c9] bg-transparent text-[#62584d] hover:border-[#b9aea2]",
  };
}

export default function Blog() {
  const [featuredPopular, ...otherPopularPosts] = POPULAR_POSTS;

  return (
    <section id="blog" className="scroll-mt-24 bg-[#f7f3eb] py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-20 px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#b9702f]">
                Gợi ý từ GO DANANG
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1f1d1a] sm:text-4xl">
                Bài viết liên quan
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6d675e] sm:text-base">
                Grid bài viết được giữ đúng logic của task: thumbnail rõ, tag nhỏ, ngày đăng,
                mô tả ngắn và CTA đọc tiếp để người xem quét nội dung nhanh trên cả desktop lẫn mobile.
              </p>
            </div>
            <div className="hidden h-px flex-1 bg-[#27231f] md:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {RELATED_POSTS.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8d632e]">
                    {post.tag}
                  </div>
                </div>

                <div className="space-y-4 p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[#7d756d]">
                    <CalendarDays className="h-4 w-4" />
                    {post.date}
                  </div>

                  <div className="space-y-3">
                    <h3 className="min-h-[56px] text-xl font-semibold leading-snug text-[#1f1d1a] transition-colors duration-300 group-hover:text-[#ba6a27]">
                      {post.title}
                    </h3>
                    <p className="truncate text-sm text-[#6d675e]">{post.excerpt}</p>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#b9702f]"
                  >
                    Xem bài
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="blog-popular"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] border border-[#ead8c2] bg-[linear-gradient(180deg,#fff9f3_0%,#f7efe4_100%)] p-6 shadow-[0_30px_80px_rgba(109,80,40,0.08)] sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#a86422] shadow-sm">
                <Flame className="h-4 w-4" />
                Phổ biến nhất
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1f1d1a] sm:text-4xl">
                ⭐ Phổ biến nhất
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6d675e] sm:text-base">
                Từ section này trở xuống, bố cục được nén lại để đọc nhanh hơn: có ảnh, có thứ bậc rõ và không còn các card chữ quá cao.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-start">
            <motion.article
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="self-start overflow-hidden rounded-[30px] border border-[#e9dac9] bg-white shadow-[0_18px_40px_rgba(87,64,36,0.1)] xl:max-w-[620px]"
            >
              <div className="grid md:grid-cols-[0.82fr_1.18fr]">
                <div className="relative min-h-[220px] overflow-hidden sm:min-h-[240px]">
                  <Image
                    src={featuredPopular.image}
                    alt={featuredPopular.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between bg-[#201b18] p-5 text-white sm:p-6 lg:p-7">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd89a] backdrop-blur">
                      {featuredPopular.tag}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-[2rem]">
                      {featuredPopular.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/78 sm:text-base sm:leading-7">
                      {featuredPopular.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/72">
                    <div className="inline-flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {featuredPopular.readers}
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/16"
                    >
                      Xem bài
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              {otherPopularPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="grid overflow-hidden rounded-[24px] border border-[#efdfcf] bg-white shadow-[0_14px_30px_rgba(87,64,36,0.06)] sm:grid-cols-[112px_1fr]"
                >
                  <div className="relative min-h-[120px] overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d632e]">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0de] text-sm font-semibold text-[#b9702f]">
                        {index + 2}
                      </span>
                      <span>{post.tag}</span>
                      <span className="inline-flex items-center gap-1 text-[#7c746a] normal-case tracking-normal">
                        <Users className="h-3.5 w-3.5" />
                        {post.readers}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-[#1f1d1a]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#6d675e]">{post.summary}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="blog-trends"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="rounded-[36px] border border-[#eadccd] bg-white p-6 shadow-[0_24px_60px_rgba(92,68,40,0.06)] sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#fff1de] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#a86422]">
                <Sparkles className="h-4 w-4" />
                Xu hướng mới nhất 2026
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-[#1f1d1a] sm:text-4xl">
                🔥 Xu hướng du lịch mới nhất 2026
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6d675e] sm:text-base">
                Bố cục được chuyển sang card ngang 2 cột để tránh xuống hàng vụn, đồng thời thêm ảnh đại diện cho từng xu hướng để section này bớt khô và dễ nhìn hơn.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {TREND_ITEMS.map((trend, index) => {
              const Icon = trend.icon;

              return (
                <motion.article
                  key={trend.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="grid overflow-hidden rounded-[24px] border border-[#eadccd] bg-[#fffaf4] shadow-[0_12px_30px_rgba(92,68,40,0.05)] sm:grid-cols-[156px_1fr]"
                >
                  <div className="relative min-h-[150px] overflow-hidden">
                    <Image src={trend.image} alt={trend.title} fill className="object-cover" />
                    <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/88 text-[#b9702f] backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-5 sm:p-6">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a86422]">
                      Trend {index + 1}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-[#1f1d1a]">
                      {trend.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6d675e]">{trend.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="blog-attractions"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="rounded-[36px] border border-[#ead8c2] bg-[linear-gradient(180deg,#fff9f3_0%,#f8f0e6_100%)] p-6 shadow-[0_30px_80px_rgba(109,80,40,0.08)] sm:p-8 lg:p-10"
        >
          <div className="max-w-3xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#a86422] shadow-sm">
              <MapPin className="h-4 w-4" />
              Các điểm tham quan hàng đầu Đà Nẵng
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1f1d1a] sm:text-4xl">
              Điểm tham quan nổi bật tại Đà Nẵng
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6d675e] sm:text-base">
              Phần này được đổi sang bố cục full-width để chip có không gian thở tốt hơn. Mỗi nhóm vẫn là một hàng riêng, đúng tinh thần task, nhưng không còn bị bó vào một cột hẹp như trước.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-[#ecd6b0] bg-[#fff2d5] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a05f1f]">
                1 - 5
              </p>
              <p className="mt-2 text-sm leading-6 text-[#7a4b18]">
                Top must-see dùng gold và cam đậm để tạo điểm nhấn rõ nhất.
              </p>
            </div>

            <div className="rounded-2xl border border-[#efd5bc] bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a05f1f]">
                6 - 15
              </p>
              <p className="mt-2 text-sm leading-6 text-[#7b6c5b]">
                Nhóm phổ biến giữ sắc cam tiêu chuẩn để đọc nhanh theo hành vi du lịch.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ded4c9] bg-transparent p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6f665d]">
                16 - 20
              </p>
              <p className="mt-2 text-sm leading-6 text-[#7b6c5b]">
                Nhóm trải nghiệm địa phương dùng viền mảnh để tách cấp độ ưu tiên.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {ATTRACTION_GROUPS.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-[28px] border border-[#efe2d1] bg-white/88 p-5 backdrop-blur sm:p-6"
                >
                  <div className="flex flex-col gap-5 xl:grid xl:grid-cols-[260px_1fr] xl:items-start">
                    <div>
                      <div className="inline-flex items-center gap-3 rounded-full bg-[#fff6ec] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a86422]">
                        <Icon className="h-4 w-4" />
                        {group.title}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[#6d675e]">{group.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => {
                        const styles = getRankClasses(item.rank);

                        return (
                          <div
                            key={`${group.title}-${item.rank}`}
                            className={`inline-flex items-center gap-3 rounded-full border px-3 py-2.5 text-sm font-medium leading-tight transition-all duration-300 hover:-translate-y-0.5 ${styles.chip}`}
                          >
                            <span
                              className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${styles.badge}`}
                            >
                              {item.rank}
                            </span>
                            <span>{item.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 rounded-[28px] border border-[#efe2d1] bg-[linear-gradient(180deg,#fff7ef_0%,#fffdf9_100%)] p-5 sm:p-6"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#a86422] shadow-sm">
                  <Heart className="h-4 w-4" />
                  Relax & Wellness
                </div>
                <p className="mt-3 text-sm leading-7 text-[#6d675e]">
                  Nhóm này giữ vai trò tab phụ hoặc block mở rộng. Mình rút về card ngắn gọn để nhìn thoáng hơn nhưng vẫn đúng yêu cầu task.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
              {WELLNESS_ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[#eadccd] bg-white p-4 shadow-[0_10px_24px_rgba(98,72,39,0.05)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#fff2df] text-[#b9702f]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold leading-6 text-[#1f1d1a]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#6d675e]">{item.note}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
}


