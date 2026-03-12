// ─────────────────────────────────────────────
// Shared tour data – single source of truth
// Used by: FeaturedTours.tsx, AIChatSearch.tsx, app/tour/page.tsx
// ─────────────────────────────────────────────

export interface Tour {
  id: string;
  title: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
  reviews: number;
  location: string;
  highlights: string[];
  /** Chatbot recommendation tags: groupType + interest keywords */
  tags: string[];
}

export const TOURS: Tour[] = [
  {
    id: "01",
    title: "Tour Đà Nẵng – Bà Nà Hills",
    image: "https://atravel.vn/storage/upload/ctv/b%C3%A0%20n%C3%A0%20hills/ba-na-hills-1.jpg",
    duration: "1 ngày",
    price: "1.290.000đ",
    rating: 4.8,
    reviews: 256,
    location: "Bà Nà Hills",
    highlights: ["Cầu Vàng", "Cáp treo", "Fantasy Park"],
    tags: ["nature", "family", "friends"],
  },
  {
    id: "02",
    title: "Tour Đà Nẵng – Hội An",
    image: "https://product.hstatic.net/200000539057/product/anh_man_hinh_2025-04-24_luc_15.14.36_0486ff3d79e84acf804faed936bc55c1_master.png",
    duration: "1 ngày",
    price: "950.000đ",
    rating: 4.9,
    reviews: 342,
    location: "Phố cổ Hội An",
    highlights: ["Phố cổ", "Đèn lồng", "Ẩm thực"],
    tags: ["culture", "couple", "family"],
  },
  {
    id: "03",
    title: "Tour Đà Nẵng – Ngũ Hành Sơn",
    image: "https://cungdulich.vn/wp-content/uploads/ngu-hanh-son.jpg",
    duration: "Nửa ngày",
    price: "650.000đ",
    rating: 4.7,
    reviews: 189,
    location: "Ngũ Hành Sơn",
    highlights: ["Động Huyền Không", "Chùa Linh Ứng"],
    tags: ["culture", "nature", "family"],
  },
  {
    id: "04",
    title: "Tour Đà Nẵng – Sơn Trà",
    image: "https://hoangphuan.com/wp-content/uploads/2024/05/chua-linh-ung-chon-binh-yen-giua-long-da-nang-013-2.jpg",
    duration: "Nửa ngày",
    price: "580.000đ",
    rating: 4.6,
    reviews: 145,
    location: "Bán đảo Sơn Trà",
    highlights: ["Chùa Linh Ứng", "Bãi Bụt", "Khỉ rừng"],
    tags: ["nature", "culture", "solo"],
  },
  {
    id: "05",
    title: "Tour Đà Nẵng – Cù Lao Chàm",
    image: "https://vcdn1-dulich.vnecdn.net/2024/06/01/CLC1-jpeg-7292-1717256606.jpg",
    duration: "1 ngày",
    price: "1.450.000đ",
    rating: 4.9,
    reviews: 298,
    location: "Đảo Cù Lao Chàm",
    highlights: ["Lặn biển", "Bãi Chồng", "Hải sản tươi"],
    tags: ["beach", "adventure", "friends"],
  },
  {
    id: "06",
    title: "Tour Đà Nẵng – Huế",
    image: "https://lienbangtravel.com/files/product/du-lich-da-nang-hue-hoi-an-quang-binh-tron-goi-5-ngay-23ijtxmi.jpg",
    duration: "1 ngày",
    price: "1.190.000đ",
    rating: 4.8,
    reviews: 267,
    location: "Cố đô Huế",
    highlights: ["Đại Nội", "Chùa Thiên Mụ", "Ẩm thực Huế"],
    tags: ["culture", "family", "couple"],
  },
];

// ── Activity / package tours (app/tour/page.tsx featured grid) ──────
export interface ActivityTour {
  id: number;
  name: string;
  image: string;
  duration: string;
  price: string;
  rating: number;
}

export interface ActivityTourGroup {
  title: string;
  items: ActivityTour[];
}

export const FEATURED_ACTIVITY_TOUR_GROUPS: Record<string, ActivityTourGroup> = {
  paragliding: {
    title: "Tour Dù lượn Sơn Trà",
    items: [
      { id: 1, name: "Dù lượn Sơn Trà – Trải nghiệm tiêu chuẩn", image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/29/1198189/1.jpg", duration: "2–3 giờ", price: "1.500.000", rating: 4.9 },
      { id: 2, name: "Dù lượn Sơn Trà – Bay đôi cùng HLV", image: "https://bizweb.dktcdn.net/100/514/927/files/ve-du-luon-da-nang-phan-van-travel.webp?v=1735117504537", duration: "2 giờ", price: "1.700.000", rating: 4.9 },
      { id: 3, name: "Dù lượn Sơn Trà – Ngắm hoàng hôn", image: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2023/5/29/1198189/12.jpg", duration: "2 giờ", price: "1.800.000", rating: 5.0 },
      { id: 4, name: "Dù lượn Sơn Trà – Chụp ảnh Flycam", image: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos724977756xl-1723513162975.jpg", duration: "3 giờ", price: "2.000.000", rating: 4.8 },
      { id: 5, name: "Dù lượn Sơn Trà – Combo nhóm", image: "https://media.baovanhoa.vn/zoom/1000/Uploaded/dangngocha/2024_05_27/img5863_JSFL.jpg", duration: "Nửa ngày", price: "1.350.000", rating: 4.7 },
    ],
  },
  parasailing: {
    title: "Tour Cano kéo dù (Parasailing)",
    items: [
      { id: 6, name: "Parasailing Mỹ Khê – Gói cơ bản", image: "https://bqn.1cdn.vn/thumbs/1200x630/2025/04/21/baodanang.vn-dataimages-202504-original-_images1773975_3_kinh_te.jpg", duration: "30 phút", price: "800.000", rating: 4.8 },
      { id: 7, name: "Parasailing Mỹ Khê – Bay đôi", image: "https://zapata.com.vn/wp-content/uploads/2024/11/cano-du-keo-3-1.jpg", duration: "30 phút", price: "1.200.000", rating: 4.9 },
      { id: 8, name: "Parasailing – Ngắm biển từ trên cao", image: "https://lethuytravel.com/uploaded/Anh-Cam-Nang/cn-dl-da-nang/trainghiemtrochoicanodubaytaidanang.jpg", duration: "20 phút", price: "750.000", rating: 4.7 },
      { id: 9, name: "Parasailing – Chụp ảnh & video", image: "https://zapata.com.vn/wp-content/uploads/2024/11/Choi-du-keo-cano-o-Da-Nang-3.jpg", duration: "30 phút", price: "950.000", rating: 4.8 },
      { id: 10, name: "Parasailing – Combo gia đình", image: "https://www.vietrekking.com/wp-content/uploads/2021/03/du-bay-2-nguoi.jpg", duration: "45 phút", price: "1.500.000", rating: 4.9 },
    ],
  },
  jetski: {
    title: "Tour Jetski – Mô tô nước",
    items: [
      { id: 11, name: "Jetski biển Non Nước – 30 phút", image: "https://stcd02265632633.cloud.edgevnpay.vn/website-vnpay-public/fill/2023/12/0gsz5rwmz12l1701767675042.jpg", duration: "30 phút", price: "700.000", rating: 4.7 },
      { id: 12, name: "Jetski biển Non Nước – 1 giờ", image: "https://cdn.justfly.vn/1000x667/media/39/2b/f3d6-5c04-400d-a694-77306c8b68b7.jpg", duration: "1 giờ", price: "1.200.000", rating: 4.8 },
      { id: 13, name: "Jetski – Đua tốc độ trên biển", image: "https://nanotravel.vn/wp-content/uploads/2024/04/lang-ngam-san-ho-5.jpg", duration: "45 phút", price: "1.000.000", rating: 4.9 },
      { id: 14, name: "Jetski – Trải nghiệm cho người mới", image: "https://stcd02265632633.cloud.edgevnpay.vn/website-vnpay-public/fill/2023/12/0pwe95kcofx1701767685796.jpg", duration: "30 phút", price: "650.000", rating: 4.6 },
      { id: 15, name: "Jetski – Combo nhóm bạn", image: "https://kgc.vn/wp-content/uploads/2021/04/KGC-Jetski.jpg", duration: "1.5 giờ", price: "1.800.000", rating: 4.8 },
    ],
  },
  snorkeling: {
    title: "Tour Ngắm san hô Sơn Trà",
    items: [
      { id: 16, name: "Ngắm san hô Sơn Trà – Cano", image: "https://ztrip.vn/uploads/images/trai-nghiem-tour-di-cano-lan-ngam-san-ho-son-tra.jpg", duration: "Nửa ngày", price: "950.000", rating: 4.9 },
      { id: 17, name: "Ngắm san hô Sơn Trà – Lặn biển", image: "https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Favatar%2F1742226870.jpg&w=3840&q=75", duration: "3 giờ", price: "1.100.000", rating: 4.8 },
      { id: 18, name: "Ngắm san hô – Check-in sống ảo", image: "https://pystravel.vn/_next/image?url=https%3A%2F%2Fbooking.pystravel.vn%2Fuploads%2Fposts%2Falbums%2F17556%2Fefa74a77fa802f509ff72b6099ce8e99.jpg&w=1920&q=75", duration: "Nửa ngày", price: "900.000", rating: 4.7 },
      { id: 19, name: "Ngắm san hô – Combo ăn trưa", image: "https://truongsatour.com/uploads/images/lan-ngam-san-ho-son-tra-da-nang-gia-re-2025.jpg", duration: "1 ngày", price: "1.300.000", rating: 4.9 },
      { id: 20, name: "Ngắm san hô – Nhóm nhỏ cao cấp", image: "https://truongsatour.com/uploads/images/dat-ve-lan-ngam-san-ho-son-tra-da-nang.jpg", duration: "Nửa ngày", price: "1.500.000", rating: 5.0 },
    ],
  },
};

// ── Category activity items (app/tour/page.tsx category grid) ──────
export interface CategoryTourItem {
  name: string;
  price: string;
  duration: string;
  image: string;
}

export const CATEGORY_TOURS: Record<string, CategoryTourItem[]> = {
  beach: [
    { name: "Cano kéo dù", price: "800.000", duration: "30 phút", image: "https://lethuytravel.com/uploaded/trainghiemtrochoicanodubaytaidanang3.jpg" },
    { name: "Jetski", price: "1.200.000", duration: "1 giờ", image: "https://vufo.org.vn/data/data/quynhhoa/2025/05/diff.jpg" },
    { name: "Kayak / SUP", price: "500.000", duration: "2 giờ", image: "https://vietrektravel.com/ckeditor/plugins/fileman/Uploads/cheo-sup/cheo-sup-da-nang-5.jpg" },
    { name: "Lặn san hô", price: "950.000", duration: "3 giờ", image: "https://letravel.vn/uploaded/Anh-Cam-NangDL/cn-da-nang/trainghiemlanngamsanhosontradanng3.jpg" },
  ],
  nature: [
    { name: "Dù lượn Sơn Trà", price: "1.500.000", duration: "2–3 giờ", image: "https://static.vinwonders.com/production/J8eQO6ee-nhay-du-o-da-nang-banner-1.jpg" },
    { name: "Sơn Trà – Linh Ứng", price: "600.000", duration: "4 giờ", image: "https://mia.vn/media/uploads/blog-du-lich/chua-linh-ung-tai-da-nang-4-1724577663.jpg" },
    { name: "Ngũ Hành Sơn – Non Nước", price: "550.000", duration: "3 giờ", image: "https://booking.muongthanh.com/upload_images/images/H%60/nui-ngu-hanh-son.jpg" },
    { name: "Núi Thần Tài – Khoáng nóng", price: "850.000", duration: "5 giờ", image: "https://hoangphuan.com/wp-content/uploads/2024/07/kham-pha-tour-nui-than-tai-1-ngay-hap-dan-1.jpg" },
  ],
  city: [
    { name: "City Tour Đà Nẵng", price: "700.000", duration: "4 giờ", image: "https://hoangphuan.com/wp-content/uploads/2024/07/tat-tan-tat-kinh-nghiem-du-lich-tour-da-nang-ma-ban-phai-biet.jpg" },
    { name: "Tour Đà Nẵng by Night", price: "650.000", duration: "3 giờ", image: "https://hoianprivatetaxi.com/wp-content/uploads/2023/09/da-nang-night-tour-hoi-an-private-taxi-4.jpg" },
    { name: "Du thuyền sông Hàn", price: "900.000", duration: "2 giờ", image: "https://static.vinwonders.com/2022/12/du-thuyen-tren-song-han-banner.jpg" },
    { name: "Chợ đêm Helio", price: "400.000", duration: "2 giờ", image: "https://statics.vinpearl.com/cho-dem-helio-1_1637246935.jpg" },
  ],
  workshop: [
    { name: "Workshop Nấu ăn Đà Nẵng", price: "800.000", duration: "3 giờ", image: "https://furamavietnam.com/wp-content/uploads/2025/05/492196720_681567597579883_6734976306117697213_n-1024x683-2.jpg" },
    { name: "Workshop Làm gốm", price: "600.000", duration: "2 giờ", image: "https://static.vinwonders.com/production/optimize_workshop-lam-gom-ha-noi-04.jpg" },
    { name: "Workshop Vẽ tranh", price: "550.000", duration: "2 giờ", image: "https://helio.vn/media/uploads/2023/05/29/workshop-o-da-nang-dreamy-painting.jpg" },
    { name: "Workshop Nến thơm / Handmade", price: "500.000", duration: "2 giờ", image: "https://vivuvietnam.org/wp-content/uploads/2024/10/workshop-lam-nen-thom-4-jpg.webp" },
  ],
};
