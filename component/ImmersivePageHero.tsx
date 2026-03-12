"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
};

type ImmersivePageHeroProps = {
  backgroundImage: string;
  backgroundAlt: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  actions?: HeroAction[];
  scrollLabel: string;
  scrollTargetId: string;
  overlayClassName?: string;
};

function isInternalHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

export default function ImmersivePageHero({
  backgroundImage,
  backgroundAlt,
  eyebrow,
  title,
  description,
  actions = [],
  scrollLabel,
  scrollTargetId,
  overlayClassName = "bg-gradient-to-br from-black/75 via-black/45 to-black/80",
}: ImmersivePageHeroProps) {
  return (
    <section className="relative flex min-h-[100vh] items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,208,122,0.2),transparent_28%)]" />
      <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-4xl text-center text-white">
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ffd89a]"
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-base font-light leading-relaxed text-white/84 md:text-xl"
            >
              {description}
            </motion.p>

            {actions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-3"
              >
                {actions.map((action) => {
                  const actionClassName =
                    action.variant === "primary"
                      ? "bg-white text-slate-900 hover:bg-[#f5f1ea]"
                      : "border border-white/20 bg-white/10 text-white hover:bg-white/16";

                  if (isInternalHref(action.href)) {
                    return (
                      <Link
                        key={action.href + action.label}
                        href={action.href}
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold backdrop-blur-sm transition ${actionClassName}`}
                      >
                        {action.icon}
                        {action.label}
                      </Link>
                    );
                  }

                  const isHttpLink = action.href.startsWith("http");

                  return (
                    <a
                      key={action.href + action.label}
                      href={action.href}
                      target={isHttpLink ? "_blank" : undefined}
                      rel={isHttpLink ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold backdrop-blur-sm transition ${actionClassName}`}
                    >
                      {action.icon}
                      {action.label}
                    </a>
                  );
                })}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0.65, 1, 0.65],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        onClick={() => {
          document.getElementById(scrollTargetId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
        className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-white"
      >
        <div className="absolute -inset-8 rounded-full bg-white/25 blur-3xl" />
        <span className="relative text-[10px] font-semibold uppercase tracking-[0.35em] text-white/92 sm:text-xs">
          {scrollLabel}
        </span>
        <div className="h-16 w-[2px] bg-gradient-to-b from-white via-white/70 to-transparent" />
        <svg
          className="h-6 w-6 drop-shadow-[0_4px_12px_rgba(255,255,255,0.9)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
    </section>
  );
}
