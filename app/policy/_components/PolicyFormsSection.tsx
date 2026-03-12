"use client";

import type { FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import type { PolicyFormSection as PolicyFormSectionData } from "./policy-content";
import { policyFormSections } from "./policy-content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  }),
};

function preventSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

function PolicyFormSection({
  section,
  reverse,
}: {
  section: PolicyFormSectionData;
  reverse?: boolean;
}) {
  const Icon = section.icon;

  return (
    <motion.article
      id={section.id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={0.04}
      className="scroll-mt-28 overflow-hidden rounded-[32px] border border-white/10 bg-white/6 shadow-[0_18px_55px_rgba(2,8,23,0.2)] backdrop-blur-sm"
    >
      <div className="grid lg:grid-cols-[0.96fr_1.04fr]">
        <div className={`relative min-h-[340px] ${reverse ? "lg:order-2" : ""}`}>
          <Image src={section.image} alt={section.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/20 to-transparent" />

          <div className="relative flex h-full flex-col justify-end p-8 text-white md:p-10">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/14 backdrop-blur-sm">
              <Icon className="h-6 w-6" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffe0a6]">
              Chính sách mở rộng
            </p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
              {section.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/78 md:text-base">
              {section.description}
            </p>
          </div>
        </div>

        <div
          className={`bg-[linear-gradient(180deg,rgba(255,250,241,0.98)_0%,rgba(239,248,249,0.98)_100%)] p-6 md:p-8 lg:p-10 ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <form onSubmit={preventSubmit} className="space-y-5">
            {section.fields.map((field) => (
              <label key={field.name} className="block">
                <span className="mb-2 block text-sm font-medium text-slate-700">
                  {field.label}
                </span>
                {field.textarea ? (
                  <textarea
                    name={field.name}
                    rows={4}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#99f6e4]/35"
                  />
                ) : (
                  <input
                    type={field.type ?? "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#0f766e] focus:ring-4 focus:ring-[#99f6e4]/35"
                  />
                )}
              </label>
            ))}

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#115e59]"
            >
              {section.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </motion.article>
  );
}

export default function PolicyFormsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#08131d_0%,#091b2a_44%,#061019_100%)] px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffd89a]">
            Đồng hành cùng cộng đồng
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Mở rộng hợp tác theo cách rõ ràng và bền vững
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/72 md:text-base">
            Nếu bạn là nhà cung cấp địa phương hoặc cộng tác viên yêu Đà Nẵng, GO DA
            NANG luôn sẵn sàng kết nối bằng một quy trình minh bạch và dễ bắt đầu.
          </p>
        </motion.div>

        {policyFormSections.map((section, index) => (
          <PolicyFormSection
            key={section.id}
            section={section}
            reverse={index % 2 === 1}
          />
        ))}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.08}
          className="flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/6 px-8 py-10 backdrop-blur-sm md:flex-row md:items-center md:justify-between"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffd89a]">
              Cần hỗ trợ thêm?
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">
              Liên hệ với GO DA NANG để được giải đáp trực tiếp
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/72 md:text-base">
              Nếu bạn cần làm rõ thêm bất kỳ chính sách nào, hãy kết nối với chúng tôi
              qua email hoặc trang liên hệ để được hỗ trợ nhanh hơn.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm font-semibold sm:flex-row">
            <a
              href="mailto:godanang6868@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 transition hover:bg-[#f5f1ea]"
            >
              <Mail className="h-4 w-4" />
              Liên hệ hỗ trợ
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white transition hover:bg-white/16"
            >
              <Phone className="h-4 w-4" />
              Gửi lời nhắn
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
