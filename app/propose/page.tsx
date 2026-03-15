"use client";

import { useState } from "react";
import HeaderNav from "@/component/HeaderNav";
import HeroSection from "./Herosection";
import ChooseSection from "./Choosesection";
import FormArea from "./Formarea";
import TrustSection from "./Trustsection";
import CtaSection from "./Ctasection";
import Toast from "./Toast";
import Footer from "@/component/Footer";
import Hero from "@/component/Header";
import HeroIntroSection from "./HeroIntroSection";
import BackToTopButton from "@/component/BackToTopButton";
import ContactDock from "@/component/ContactDock";

type FormType = "villa" | "tour" | null;

export default function GoDanangPage() {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [toast, setToast] = useState<string>("");

  const handleChoose = (type: FormType) => {
    setActiveForm((prev) => (prev === type ? null : type));
    setTimeout(() => {
      document
        .getElementById("form-area")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const showToast = (msg: string) => {
    setToast(msg);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap');
        
        body { font-family: 'Be Vietnam Pro', sans-serif; background: #FAF6EE; color: #2C2825; }
      `}</style>

      <HeaderNav />
      <ContactDock /> 
            <BackToTopButton />

      <HeroSection />
      <HeroIntroSection />

      <ChooseSection activeForm={activeForm} onChoose={handleChoose} />

      {activeForm && (
        <FormArea
          activeForm={activeForm}
          setActiveForm={(f) => setActiveForm(f as FormType)}
          onSuccess={showToast}
        />
      )}

      <TrustSection />

      <CtaSection />

      {toast && (
        <Toast message={toast} onDismiss={() => setToast("")} />
      )}

      <Footer />
    </>
  );
}