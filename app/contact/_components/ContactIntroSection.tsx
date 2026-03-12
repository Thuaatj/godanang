"use client";

import { motion } from "framer-motion";
import { contactHighlights, contactIntroParagraphs } from "./contact-content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  }),
};

export default function ContactIntroSection() {
  return (
    <section
      id="contact-intro"
      className="bg-[linear-gradient(180deg,#f5f1ea_0%,#fffaf1_100%)] px-6 py-16 md:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c89a45]">
            Về phần liên hệ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Một không gian mở để kết nối với GO ĐÀ NẴNG
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-8 text-slate-600 md:text-base">
            {contactIntroParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-lg text-[#c89a45]">✦</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-500">
            Văn phong cộng đồng · không thương mại
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactHighlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.article
                key={highlight.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.1 + index * 0.08}
                className={`rounded-[28px] border border-white/80 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.06)] ${
                  index === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f172a] text-[#ffd89a]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {highlight.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
