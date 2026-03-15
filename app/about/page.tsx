"use client";

import HeaderNav from "@/component/HeaderNav";
import AboutHero from "./Abouthero";
import CommitsSection from "./Commitssection";
import PartnersSection from "./Partnerssection";
import ServicesSection from "./Servicessection";
import { ABOUT_GLOBAL_CSS } from "./Shared";
import StatsSection from "./Statssection";
import StorySection from "./Storysection";
import ValuesSection from "./Valuessection";
import VisionSection from "./Visionsection";
import Footer from "@/component/Footer";
import ContactDock from "@/component/ContactDock";
import BackToTopButton from "@/component/BackToTopButton";



export default function AboutPage() {
  return (
    <>
    <HeaderNav />
    {/* <ContactDock />  */}
    <BackToTopButton />
      <style>{ABOUT_GLOBAL_CSS}</style>

      <AboutHero />
      <StatsSection />
      <StorySection />
      <ServicesSection />
      <ValuesSection />
      <VisionSection />
      <CommitsSection />
      <PartnersSection />
      <Footer />
    </>
  );
}