import type { LucideIcon } from "lucide-react";
import {
  AtSign,
  Compass,
  Facebook,
  Handshake,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

export type ContactHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ContactChannel = {
  id: string;
  label: string;
  handle: string;
  description: string;
  href?: string;
  cta: string;
  icon?: LucideIcon;
  gradientClassName: string;
  badgeClassName: string;
  isTikTok?: boolean;
};

export type ContactDirectItem = {
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
  accentClassName: string;
};

export const contactIntroParagraphs = [
  "GO ĐÀ NẴNG là nền tảng chia sẻ thông tin, trải nghiệm và câu chuyện du lịch tại Đà Nẵng dưới góc nhìn địa phương.",
  "Chúng tôi luôn sẵn sàng lắng nghe những góp ý, đề xuất địa điểm, trải nghiệm mới hoặc cơ hội hợp tác từ bạn.",
  "Nếu bạn yêu Đà Nẵng và muốn cùng lan tỏa những điều hay ho về thành phố này, hãy để lại lời nhắn cho chúng tôi.",
];

export const contactHighlights: ContactHighlight[] = [
  {
    title: "Lắng nghe góp ý",
    description:
      "Mọi phản hồi đều là chất liệu để GO ĐÀ NẴNG làm nội dung rõ ràng, thực tế và gần với trải nghiệm của người địa phương hơn.",
    icon: MessageCircle,
  },
  {
    title: "Kết nối hợp tác",
    description:
      "Chúng tôi chào đón đối tác, nhà cung cấp dịch vụ và người yêu du lịch cùng xây dựng một mạng lưới địa phương tử tế và minh bạch.",
    icon: Handshake,
  },
  {
    title: "Lan tỏa điểm đến",
    description:
      "Từ biển Mỹ Khê, Sơn Trà đến những câu chuyện rất đời thường, mọi kết nối đều hướng về một Đà Nẵng sống động và đáng nhớ hơn.",
    icon: Compass,
  },
];

export const contactDirectItems: ContactDirectItem[] = [
  {
    label: "Hotline",
    value: "0776711777",
    href: "tel:0776711777",
    icon: Phone,
    accentClassName: "text-[#7dd3fc]",
  },
  {
    label: "Email",
    value: "godanang6868@gmail.com",
    href: "mailto:godanang6868@gmail.com",
    icon: Mail,
    accentClassName: "text-[#fbbf24]",
  },
  {
    label: "Địa chỉ",
    value: "Đà Nẵng, Việt Nam",
    href: "https://www.google.com/maps/search/%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam",
    icon: MapPin,
    accentClassName: "text-[#86efac]",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    id: "facebook",
    label: "Facebook",
    handle: "GO ĐÀ NẴNG",
    description:
      "Theo dõi trang Facebook để cập nhật tin tức, bài viết mới và nhắn tin trực tiếp với GO ĐÀ NẴNG.",
    href: "https://www.facebook.com/profile.php?id=61587024129118",
    cta: "Nhắn tin ngay",
    icon: Facebook,
    gradientClassName: "from-blue-500 to-sky-500",
    badgeClassName: "text-blue-200",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@godanang6868",
    description:
      "Khám phá hình ảnh, reels và những khoảnh khắc đẹp của Đà Nẵng qua góc nhìn gần gũi hơn mỗi ngày.",
    href: "https://www.instagram.com/godanang6868/",
    cta: "Xem profile",
    icon: Instagram,
    gradientClassName: "from-pink-500 via-fuchsia-500 to-orange-500",
    badgeClassName: "text-pink-200",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "Đang cập nhật",
    description:
      "Kênh TikTok đang được hoàn thiện để chia sẻ video ngắn về những trải nghiệm thú vị tại Đà Nẵng.",
    cta: "Sắp cập nhật",
    gradientClassName: "from-slate-300 to-slate-100",
    badgeClassName: "text-slate-200",
    isTikTok: true,
  },
  {
    id: "threads",
    label: "Threads",
    handle: "@godanang6868",
    description:
      "Kết nối với cộng đồng và cùng chia sẻ những câu chuyện du lịch chân thật, ngắn gọn và nhiều cảm hứng.",
    href: "https://www.threads.com/@godanang6868?hl=vi",
    cta: "Theo dõi",
    icon: AtSign,
    gradientClassName: "from-slate-200 to-slate-50",
    badgeClassName: "text-slate-200",
  },
];
