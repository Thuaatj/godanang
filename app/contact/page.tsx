import { Mail, MessageCircle, Phone } from "lucide-react";
import HeaderNav from "@/component/HeaderNav";
import Footer from "@/component/Footer";
import BackToTopButton from "@/component/BackToTopButton";
import ImmersivePageHero from "@/component/ImmersivePageHero";
import ContactIntroSection from "./_components/ContactIntroSection";
import ContactChannelsSection from "./_components/ContactChannelsSection";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#f7f3eb] text-slate-900">
      <HeaderNav />
      <ImmersivePageHero
        backgroundImage="https://images.pexels.com/photos/34035463/pexels-photo-34035463.jpeg?auto=compress&cs=tinysrgb&w=1800"
        backgroundAlt="Toàn cảnh Đà Nẵng nhìn từ trên cao với biển và thành phố"
        eyebrow="GO ĐÀ NẴNG · Kết nối cộng đồng"
        title={
          <>
            Liên hệ với <span className="text-[#ffe0a6]">GO ĐÀ NẴNG</span>
          </>
        }
        description="Kết nối, chia sẻ và cùng lan tỏa những giá trị du lịch địa phương theo cách gần gũi, chân thật và cởi mở hơn."
        scrollLabel="Khám phá kênh liên hệ"
        scrollTargetId="contact-intro"
        actions={[
          {
            href: "https://www.facebook.com/profile.php?id=61587024129118",
            label: "Nhắn tin ngay",
            icon: <MessageCircle className="h-4 w-4" />,
            variant: "primary",
          },
          {
            href: "tel:0776711777",
            label: "Gọi hotline",
            icon: <Phone className="h-4 w-4" />,
            variant: "secondary",
          },
          {
            href: "mailto:godanang6868@gmail.com",
            label: "Liên hệ email",
            icon: <Mail className="h-4 w-4" />,
            variant: "secondary",
          },
        ]}
        overlayClassName="bg-gradient-to-br from-black/72 via-black/42 to-slate-950/78"
      />
      <ContactIntroSection />
      <ContactChannelsSection />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
