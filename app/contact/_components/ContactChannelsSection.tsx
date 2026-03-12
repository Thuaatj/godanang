"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock3, MessageCircle } from "lucide-react";
import { contactChannels, contactDirectItems } from "./contact-content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  }),
};

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.14 8.14 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    </svg>
  );
}

export default function ContactChannelsSection() {
  return (
    <section
      id="contact-channels"
      className="bg-[linear-gradient(180deg,#08131d_0%,#091b2a_48%,#061019_100%)] px-6 py-16 text-white md:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          className="lg:sticky lg:top-28"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffd89a]">
            Kênh chính thức
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Kết nối với GO ĐÀ NẴNG
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 md:text-base">
            Kết nối nhanh với GO ĐÀ NẴNG qua các kênh chính thức để được tư vấn,
            hỗ trợ và đồng hành nhanh nhất trong mọi câu chuyện về Đà Nẵng.
          </p>

          <div className="mt-8 space-y-4 rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
              Liên hệ trực tiếp
            </p>
            {contactDirectItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="flex items-start gap-3">
                  <Icon className={`mt-1 h-5 w-5 ${item.accentClassName}`} />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/72 transition hover:text-white"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-white/72">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=61587024129118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-[#f5f1ea]"
            >
              <MessageCircle className="h-4 w-4" />
              Liên hệ GO ĐÀ NẴNG
            </a>
          </div>
        </motion.div>

        <div>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/42">
                Mạng xã hội
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Các kênh cộng đồng của GO ĐÀ NẴNG
              </h3>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-white/52 md:block">
              Social là nơi cập nhật nội dung, hình ảnh và trò chuyện cùng cộng đồng.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;

            const cardInner = (
              <>
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${channel.gradientClassName} text-slate-950 shadow-[0_12px_35px_rgba(15,23,42,0.18)]`}
                >
                  {channel.isTikTok ? (
                    <TikTokIcon className="h-5 w-5 text-slate-950" />
                  ) : (
                    Icon && <Icon className="h-5 w-5" />
                  )}
                </div>

                <div className="mt-5">
                  <p className="text-lg font-semibold text-white">{channel.label}</p>
                  <p className={`mt-1 text-sm font-medium ${channel.badgeClassName}`}>
                    {channel.handle}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-7 text-white/68">
                  {channel.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {channel.cta}
                  {channel.href ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <Clock3 className="h-4 w-4" />
                  )}
                </span>
              </>
            );

            return (
              <motion.div
                key={channel.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={0.08 + index * 0.05}
              >
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(2,8,23,0.35)]"
                  >
                    {cardInner}
                  </a>
                ) : (
                  <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 opacity-90 backdrop-blur-sm">
                    {cardInner}
                  </div>
                )}
              </motion.div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
