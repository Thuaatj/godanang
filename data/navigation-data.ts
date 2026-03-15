export type NavSubItem = {
  title: string;
  image: string;
  href?: string;
};

export type NavItem = {
  label: string;
  href: string;
  subItems?: NavSubItem[];
};

export const navItems: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Tour",
    href: "/tour",
    subItems: [
      {
        title: "Tour Đà Nẵng",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Tour Hội An",
        image:
          "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Tour Huế",
        image:
          "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Tour Bà Nà Hills",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    label: "Villa",
    href: "/villa",
    subItems: [
      {
        title: "Villa Biển",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Villa Núi",
        image:
          "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Villa Hồ Bơi",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Villa Nghỉ Dưỡng",
        image:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    label: "Combo & tư vấn",
    href: "/propose",
    subItems: [
      {
        title: "Tư vấn Villa",
        image:
          "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Combo du lịch",
        image:
          "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Tư vấn riêng",
        image:
          "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Đặt nhanh",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  // { label: "Tiện ích", href: "#amenities" },
  {
    label: "Blog",
    href: "/blog",
    subItems: [
      {
        title: "Bài viết mới nhất",
        href: "/blog#blog",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Phổ biến nhất",
        href: "/blog#blog-popular",
        image:
          "https://image.vietgoing.com/destination/large/vietgoing_uen2103258292.webp",
      },
      {
        title: "Xu hướng 2026",
        href: "/blog#blog-trends",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      },
      {
        title: "Điểm nổi bật",
        href: "/blog#blog-attractions",
        image:
          "https://hoangphuan.com/wp-content/uploads/2024/05/chua-linh-ung-chon-binh-yen-giua-long-da-nang-013-2.jpg",
      },
    ],
  },
  
];
