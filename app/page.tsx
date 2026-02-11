"use client";

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

export default function Home() {
  return (
    <main
      // className="
      //   h-screen
      //   overflow-y-scroll
      //   snap-y snap-mandatory
      //   scroll-smooth
      // "
    >
      {/* HEADER FIXED */}
      <section className="snap-start  "><Header /></section>

      {/* HERO */}
      <section className="snap-start  ">
        <FeaturedTours />
      </section>

      {/* TRAVEL INTRO */}
      <section className="snap-start  ">
        <DaNangTravel />
      </section>

      {/* VILLAS */}
      <section className="snap-start  ">
        <FeaturedVillas />
      </section>

      {/* EXPERIENCES */}
      <section className="snap-start  ">
        <ExperiencesSection />
      </section>

      {/* HIGHLIGHT */}
      <section className="snap-start  ">
        <DanangHightLight />
      </section>

      {/* ABOUT DANANG */}
      <section className="snap-start  ">
        <DaNangTravelExperience />
      </section>

      {/* CONSULT */}
      <section className="snap-start  ">
        <ConsultCTA />
      </section>

      {/* TESTIMONIAL */}
      <section className="snap-start  ">
        <TestimonialSection />
      </section>

      {/* FINAL CTA */}
      <section className="snap-start  ">
        <FinalCTASection />
      </section>

      {/* FOOTER – KHÔNG SNAP */}
      <section className="snap-end ">
        <Footer />
      </section>
    </main>
  );
}
