import { ArrowRight, Flame, MapPin } from "lucide-react";
import BlogContent from "@/app/tour/Blog";
import BackToTopButton from "@/component/BackToTopButton";
import ContactDock from "@/component/ContactDock";
import Footer from "@/component/Footer";
import HeaderNav from "@/component/HeaderNav";
import ImmersivePageHero from "@/component/ImmersivePageHero";

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-[#f7f3eb] text-slate-900">
      <HeaderNav />

      <ImmersivePageHero
        backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
        backgroundAlt="Khung cảnh lifestyle du lịch Đà Nẵng bên bờ biển"
        eyebrow="GO DANANG · Travel Journal"
        title={
          <>
            Blog Du Lịch <span className="text-[#ffe0a6]">GO DANANG</span>
          </>
        }
        description="Khám phá cảm hứng – trải nghiệm thực tế – địa điểm và kinh nghiệm du lịch Đà Nẵng."
        scrollLabel="Xem bài viết mới nhất"
        scrollTargetId="blog"
        actions={[
          {
            href: "#blog",
            label: "Xem bài viết mới nhất",
            icon: <MapPin className="h-4 w-4" />,
            variant: "primary",
          },
          {
            href: "#blog-popular",
            label: "Phổ biến nhất",
            icon: <Flame className="h-4 w-4" />,
            variant: "secondary",
          },
          {
            href: "#blog-trends",
            label: "Xu hướng 2026",
            icon: <ArrowRight className="h-4 w-4" />,
            variant: "secondary",
          },
        ]}
        overlayClassName="bg-gradient-to-br from-black/76 via-black/46 to-slate-950/82"
      />

      <BlogContent />
      <Footer />
      <BackToTopButton />
      <ContactDock />
    </main>
  );
}
