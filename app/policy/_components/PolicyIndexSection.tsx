"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { policyItems } from "./policy-content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  }),
};

export default function PolicyIndexSection() {
  return (
    <section
      id="policy-overview"
      className="bg-[linear-gradient(180deg,#f5f1ea_0%,#fffaf1_100%)] px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#c89a45]">
            Danh sách chính sách
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Minh bạch để xây dựng niềm tin dài lâu
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            Mỗi chính sách được trình bày rõ ràng để du khách, đối tác và cộng đồng
            theo dõi cam kết của GO DA NANG một cách trực tiếp, dễ hiểu và dễ kiểm
            tra hơn.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {policyItems.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <motion.a
                key={policy.id}
                href={`#${policy.id}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.08 + index * 0.05}
                className="group overflow-hidden rounded-[30px] border border-white/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.1)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={policy.image}
                    alt={policy.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/15 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/16 text-white backdrop-blur-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold leading-snug text-slate-900">
                    {policy.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {policy.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f766e]">
                    Xem chi tiết
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
