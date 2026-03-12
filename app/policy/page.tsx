import { Handshake, Mail } from "lucide-react";
import HeaderNav from "@/component/HeaderNav";
import Footer from "@/component/Footer";
import BackToTopButton from "@/component/BackToTopButton";
import ContactDock from "@/component/ContactDock";
import ImmersivePageHero from "@/component/ImmersivePageHero";
import PolicyIndexSection from "./_components/PolicyIndexSection";
import PolicyDetailsSection from "./_components/PolicyDetailsSection";
import PolicyFormsSection from "./_components/PolicyFormsSection";

export default function PolicyPage() {
  return (
    <main className="overflow-hidden bg-[#f7f3eb] text-slate-900">
      <HeaderNav />
      <ImmersivePageHero
        backgroundImage="https://images.pexels.com/photos/34250771/pexels-photo-34250771.jpeg?auto=compress&cs=tinysrgb&w=1800"
        backgroundAlt="Đà Nẵng với biển, thành phố và nhịp sống địa phương"
        eyebrow="GO DA NANG · Minh bạch và đồng hành"
        title={
          <>
            Chính sách & Cam kết của{" "}
            <span className="text-[#ffe0a6]">GO DA NANG</span>
          </>
        }
        description="Minh bạch trong hoạt động, rõ ràng trong cam kết và đồng hành lâu dài cùng du khách, đối tác và cộng đồng địa phương."
        scrollLabel="Khám phá chính sách"
        scrollTargetId="policy-overview"
        actions={[
          {
            href: "/contact",
            label: "Liên hệ hỗ trợ",
            icon: <Mail className="h-4 w-4" />,
            variant: "primary",
          },
          {
            href: "#partners",
            label: "Trở thành đối tác",
            icon: <Handshake className="h-4 w-4" />,
            variant: "secondary",
          },
        ]}
        overlayClassName="bg-gradient-to-br from-black/78 via-black/48 to-slate-950/84"
      />
      <PolicyIndexSection />
      <PolicyDetailsSection />
      <PolicyFormsSection />
      <Footer />
      <BackToTopButton />
      <ContactDock />
    </main>
  );
}
