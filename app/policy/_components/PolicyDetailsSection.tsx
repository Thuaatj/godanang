"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { policyItems } from "./policy-content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  }),
};

export default function PolicyDetailsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f4faf9_100%)] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        {policyItems.map((policy, index) => {
          const Icon = policy.icon;
          const reverse = index % 2 === 1;

          return (
            <motion.article
              key={policy.id}
              id={policy.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={0.04}
              className="scroll-mt-28 overflow-hidden rounded-[32px] border border-[#dbe5e7] bg-white shadow-[0_18px_58px_rgba(15,23,42,0.06)]"
            >
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                <div className={`relative min-h-[320px] ${reverse ? "lg:order-2" : ""}`}>
                  <Image
                    src={policy.image}
                    alt={policy.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 via-slate-950/18 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-8 text-white md:p-10">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/14 backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffe0a6]">
                      Chi tiết chính sách
                    </p>
                    <h3 className="mt-4 max-w-md text-3xl font-semibold leading-tight md:text-4xl">
                      {policy.title}
                    </h3>
                  </div>
                </div>

                <div className={`p-8 md:p-10 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="text-lg leading-8 text-slate-700">{policy.detail}</p>

                  <div className="mt-8 grid gap-3">
                    {policy.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfb_100%)] px-4 py-4 text-sm leading-7 text-slate-600"
                      >
                        {point}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#policy-overview"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#115e59]"
                    >
                      Quay lại danh sách
                    </a>
                    <a
                      href="#partners"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      Trở thành đối tác
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
