"use client";

import { useRef } from "react";
import AirplaneController from "@/component/AirplaneController";
import Header from "@/component/Header";
import FeaturedTours from "@/component/FeaturedTours";
import FeaturedVillas from "@/component/FeaturedVillas";
import AmenitiesSection from "@/component/Amenitiessection";
import DanangHightLight from "@/component/DanangHightLight";
import ConsultCTA from "@/component/ConsultCTA";
import TestimonialSection from "@/component/TestimonialSection";
import Footer from "@/component/Footer";
import FinalCTASection from "@/component/Finalctasection";
import DaNangTravel from "@/component/DaNangTravel";
import DaNangTravelExperience from "@/component/DaNangAbout";


export default function Home() {
  const s1 = useRef<HTMLElement>(null);
  const s2 = useRef<HTMLElement>(null);
  const s3 = useRef<HTMLElement>(null);
  const s4 = useRef<HTMLElement>(null);
  const s5 = useRef<HTMLElement>(null);
  const s6 = useRef<HTMLElement>(null);
  const s7 = useRef<HTMLElement>(null);
  const s8 = useRef<HTMLElement>(null);
  const s9 = useRef<HTMLElement>(null);

  const sectionRefs = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />

      <section ref={s1}><FeaturedTours /></section>
      <DaNangTravel />
      <section ref={s3}><FeaturedVillas /></section>
      <section ref={s4}><AmenitiesSection /></section>
      <section ref={s5}><DanangHightLight /></section>
      <DaNangTravelExperience />
      <section ref={s6}><ConsultCTA /></section>
      <section ref={s7}><TestimonialSection /></section>
      <section ref={s8}><FinalCTASection /></section>
      <section ref={s9}><Footer /></section>

      {/* <AirplaneController sectionRefs={sectionRefs} /> */}
    </main>
  );
}
