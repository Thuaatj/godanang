"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import IntroLoader from "@/component/IntroLoader";

import Header from "@/component/Header";
import FeaturedTours from "@/component/FeaturedTours";
import FeaturedVillas from "@/component/FeaturedVillas";
import ExperiencesSection from "@/component/Experiences-section";
import DanangHightLight from "@/component/DanangHightLight";
import DaNangTravel from "@/component/DaNangTravel";
import DaNangTravelExperience from "@/component/DaNangAbout";
import ConsultCTA from "@/component/ConsultCTA";
import TestimonialSection from "@/component/TestimonialSection";
import FinalCTASection from "@/component/Finalctasection";
import Footer from "@/component/Footer";
import ContactDock from "@/component/ContactDock";
import BackToTopButton from "@/component/BackToTopButton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // thời gian intro đẹp hơn

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* INTRO OVERLAY */}
      <IntroLoader isLoading={isLoading} />

      {/* WEBSITE */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: isLoading ? 0 : 0.3 }}
      >
        <Header />
        <ContactDock />
        <BackToTopButton />

        <FeaturedTours />
        <DaNangTravel />
        <FeaturedVillas />
        <ExperiencesSection />
        <DanangHightLight />
        <DaNangTravelExperience />
        <ConsultCTA />
        <TestimonialSection />
        <FinalCTASection />
        <Footer />
      </motion.main>
    </>
  );
}