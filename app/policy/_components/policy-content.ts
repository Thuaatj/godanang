import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CreditCard,
  FileText,
  Leaf,
  Lock,
  MessageSquareQuote,
  RefreshCcw,
  Store,
  Users,
} from "lucide-react";

export type PolicyItem = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  image: string;
  icon: LucideIcon;
  points: string[];
};

export type PolicyFormField = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  textarea?: boolean;
};

export type PolicyFormSection = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  cta: string;
  fields: PolicyFormField[];
};

export const policyItems: PolicyItem[] = [
  {
    id: "privacy",
    title: "Chính sách Quyền riêng tư",
    summary:
      "GO DA NANG cam kết bảo mật thông tin cá nhân của người dùng, chỉ thu thập và sử dụng dữ liệu nhằm nâng cao trải nghiệm, tuyệt đối không chia sẻ khi chưa có sự đồng ý.",
    detail:
      "GO DA NANG cam kết bảo mật thông tin cá nhân của người dùng, chỉ thu thập và sử dụng dữ liệu nhằm nâng cao trải nghiệm, tuyệt đối không chia sẻ khi chưa có sự đồng ý.",
    image:
      "https://images.pexels.com/photos/6930544/pexels-photo-6930544.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: Lock,
    points: [
      "Chỉ thu thập thông tin cần thiết cho tư vấn và trải nghiệm.",
      "Không chia sẻ dữ liệu cá nhân khi chưa có sự đồng ý rõ ràng.",
      "Ưu tiên tính an toàn và minh bạch trong quá trình lưu trữ thông tin.",
    ],
  },
  {
    id: "terms",
    title: "Điều khoản & Điều kiện sử dụng",
    summary:
      "Việc sử dụng website GO DA NANG đồng nghĩa với việc bạn đồng ý các điều khoản sử dụng, nhằm đảm bảo tính minh bạch, an toàn và quyền lợi cho tất cả các bên.",
    detail:
      "Việc sử dụng website GO DA NANG đồng nghĩa với việc bạn đồng ý các điều khoản sử dụng, nhằm đảm bảo tính minh bạch, an toàn và quyền lợi cho tất cả các bên.",
    image:
      "https://images.pexels.com/photos/34035463/pexels-photo-34035463.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: FileText,
    points: [
      "Nội dung website được xây dựng theo hướng rõ ràng và tôn trọng cộng đồng.",
      "Người dùng đồng ý sử dụng nền tảng theo tinh thần văn minh và minh bạch.",
      "Các quy định nhằm giữ cân bằng quyền lợi giữa du khách, đối tác và GO DA NANG.",
    ],
  },
  {
    id: "booking-payment",
    title: "Đặt dịch vụ & Thanh toán",
    summary:
      "GO DA NANG cung cấp quy trình đặt dịch vụ rõ ràng, linh hoạt về thanh toán, giúp khách hàng dễ dàng lựa chọn tour, villa và trải nghiệm phù hợp.",
    detail:
      "GO DA NANG cung cấp quy trình đặt dịch vụ rõ ràng, linh hoạt về thanh toán, giúp khách hàng dễ dàng lựa chọn tour, villa và trải nghiệm phù hợp.",
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: CreditCard,
    points: [
      "Thông tin dịch vụ được trình bày trước khi người dùng xác nhận.",
      "Phương thức thanh toán linh hoạt tùy theo từng loại tour, villa hay trải nghiệm.",
      "Mọi chi phí liên quan sẽ được thể hiện theo hướng dễ hiểu và dễ theo dõi.",
    ],
  },
  {
    id: "refund",
    title: "Hủy - Đổi - Hoàn tiền",
    summary:
      "GO DA NANG áp dụng chính sách hủy, đổi và hoàn tiền minh bạch, nhằm bảo vệ quyền lợi khách hàng trong trường hợp thay đổi kế hoạch.",
    detail:
      "GO DA NANG áp dụng chính sách hủy, đổi và hoàn tiền minh bạch, nhằm bảo vệ quyền lợi khách hàng trong trường hợp thay đổi kế hoạch.",
    image:
      "https://images.pexels.com/photos/7163682/pexels-photo-7163682.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: RefreshCcw,
    points: [
      "Điều kiện hủy, đổi và hoàn tiền sẽ gắn với từng loại dịch vụ cụ thể.",
      "Quyền lợi khách hàng được ưu tiên khi kế hoạch phát sinh thay đổi thực tế.",
      "Mọi điều khoản liên quan được thể hiện rõ ràng trước khi đặt dịch vụ.",
    ],
  },
  {
    id: "quality",
    title: "Cam kết Chất lượng dịch vụ",
    summary:
      "GO DA NANG lựa chọn dịch vụ dựa trên tiêu chí chất lượng, trải nghiệm thực tế và phản hồi khách hàng, mang đến giá trị tốt nhất cho mỗi hành trình.",
    detail:
      "GO DA NANG lựa chọn dịch vụ dựa trên tiêu chí chất lượng, trải nghiệm thực tế và phản hồi khách hàng, mang đến giá trị tốt nhất cho mỗi hành trình.",
    image:
      "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: BadgeCheck,
    points: [
      "Ưu tiên đơn vị có trải nghiệm thực tế tốt và phản hồi đáng tin cậy.",
      "Liên tục cập nhật chất lượng dựa trên đánh giá từ người dùng.",
      "Mục tiêu là giữ sự ổn định, tử tế và phù hợp cho từng hành trình.",
    ],
  },
  {
    id: "reviews",
    title: "Đánh giá & Phản hồi",
    summary:
      "GO DA NANG khuyến khích khách hàng chia sẻ đánh giá trung thực nhằm nâng cao chất lượng dịch vụ và xây dựng cộng đồng du lịch minh bạch.",
    detail:
      "GO DA NANG khuyến khích khách hàng chia sẻ đánh giá trung thực nhằm nâng cao chất lượng dịch vụ và xây dựng cộng đồng du lịch minh bạch.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: MessageSquareQuote,
    points: [
      "Khuyến khích phản hồi trung thực sau mỗi trải nghiệm.",
      "Tôn trọng góc nhìn đa chiều để nâng cao tính minh bạch.",
      "Đánh giá thật là nền tảng để cải thiện dịch vụ và cộng đồng du lịch.",
    ],
  },
  {
    id: "sustainable",
    title: "Du lịch bền vững",
    summary:
      "GO DA NANG hướng đến du lịch bền vững, tôn trọng môi trường và văn hóa địa phương, góp phần gìn giữ giá trị lâu dài cho điểm đến.",
    detail:
      "GO DA NANG hướng đến du lịch bền vững, tôn trọng môi trường và văn hóa địa phương, góp phần gìn giữ giá trị lâu dài cho điểm đến.",
    image:
      "https://images.pexels.com/photos/26761495/pexels-photo-26761495.jpeg?auto=compress&cs=tinysrgb&w=1400",
    icon: Leaf,
    points: [
      "Tôn trọng môi trường, văn hóa và nhịp sống địa phương.",
      "Ưu tiên giá trị lâu dài của điểm đến hơn lợi ích ngắn hạn.",
      "Khuyến khích trải nghiệm tử tế với cộng đồng sở tại.",
    ],
  },
];

export const policyFormSections: PolicyFormSection[] = [
  {
    id: "partners",
    title: "Chính sách Nhà cung cấp địa phương",
    description:
      "GO DA NANG đồng hành cùng các nhà cung cấp dịch vụ địa phương nhằm kết nối du khách với những trải nghiệm bản địa chất lượng, minh bạch và bền vững tại Đà Nẵng.",
    image:
      "https://images.pexels.com/photos/26761495/pexels-photo-26761495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: Store,
    cta: "Đăng ký hợp tác",
    fields: [
      {
        label: "Tên đơn vị / cá nhân",
        name: "supplierName",
        placeholder: "Ví dụ: Homestay An Nhiên",
      },
      {
        label: "Loại hình dịch vụ",
        name: "serviceType",
        placeholder: "Tour local, villa, xe đưa đón...",
      },
      {
        label: "Khu vực hoạt động",
        name: "serviceArea",
        placeholder: "Sơn Trà, Mỹ Khê, Hội An...",
      },
      {
        label: "Số điện thoại",
        name: "phone",
        placeholder: "0xxx xxx xxx",
        type: "tel",
      },
      {
        label: "Email",
        name: "email",
        placeholder: "you@example.com",
        type: "email",
      },
      {
        label: "Mô tả ngắn dịch vụ",
        name: "serviceSummary",
        placeholder: "Giới thiệu ngắn về dịch vụ và thế mạnh của bạn",
        textarea: true,
      },
    ],
  },
  {
    id: "collaborators",
    title: "Chính sách Cộng tác viên",
    description:
      "GO DA NANG chào đón cộng tác viên yêu du lịch cùng chia sẻ trải nghiệm chân thực, lan tỏa giá trị du lịch địa phương và kết nối cộng đồng yêu Đà Nẵng.",
    image:
      "https://images.pexels.com/photos/35189043/pexels-photo-35189043.jpeg?auto=compress&cs=tinysrgb&w=1600",
    icon: Users,
    cta: "Đăng ký cộng tác",
    fields: [
      {
        label: "Họ tên / Nickname",
        name: "displayName",
        placeholder: "Tên bạn muốn GO DA NANG gọi",
      },
      {
        label: "Email",
        name: "email",
        placeholder: "you@example.com",
        type: "email",
      },
      {
        label: "Số điện thoại",
        name: "phone",
        placeholder: "0xxx xxx xxx",
        type: "tel",
      },
      {
        label: "Kênh cá nhân (nếu có)",
        name: "channel",
        placeholder: "Facebook, TikTok, Instagram, blog...",
      },
      {
        label: "Hình thức cộng tác mong muốn",
        name: "collaborationType",
        placeholder: "Review địa điểm, viết bài, quay video...",
        textarea: true,
      },
    ],
  },
];
