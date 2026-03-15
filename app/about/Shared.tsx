"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

/* ─── useReveal hook ─── */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setV(true); o.disconnect(); }
      },
      { threshold }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [threshold]);
  return [ref, v] as const;
}

/* ─── Reveal wrapper component ─── */
type RevealDir = "up" | "left" | "right" | "scale";
interface RevealProps {
  children: ReactNode;
  delay?: number;
  dir?: RevealDir;
  style?: CSSProperties;
}
export function Reveal({ children, delay = 0, dir = "up", style = {} }: RevealProps) {
  const [ref, v] = useReveal();
  const transforms: Record<RevealDir, string> = {
    up:    "translateY(55px)",
    left:  "translateX(-55px)",
    right: "translateX(55px)",
    scale: "scale(0.9)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : transforms[dir],
        transition: `opacity 0.85s ease ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── useParallax hook ─── */
export function useParallax(speed = 0.22) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = () => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      ref.current.style.transform = `translateY(${(window.innerHeight / 2 - top - height / 2) * speed}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [speed]);
  return ref;
}

/* ─── Counter component ─── */
interface CounterProps { end: number; suffix: string; label: string; }
export function Counter({ end, suffix, label }: CounterProps) {
  const [n, setN] = useState(0);
  const [ref, v] = useReveal(0.5);
  useEffect(() => {
    if (!v) return;
    let s = 0;
    const step = end / 55;
    const t = setInterval(() => {
      s += step;
      if (s >= end) { setN(end); clearInterval(t); }
      else setN(Math.floor(s));
    }, 18);
    return () => clearInterval(t);
  }, [v, end]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Lora',serif", fontSize: "clamp(1.5rem,2.5vw,4rem)",
        fontWeight: 700, color: "var(--amber)", lineHeight: 1,
      }}>
        {n}{suffix}
      </div>
      <div style={{
        fontSize: "0.72rem", color: "var(--taupe)", marginTop: "0.5rem",
        letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500,
      }}>
        {label}
      </div>
    </div>
  );
}

/* ─── WaveDivider ─── */
interface WaveProps {
  fill: string;
  position?: "top" | "bottom";
  variant?: "gentle" | "sharp";
  flip?: boolean;
}
export function WaveDivider({ fill, position = "bottom", variant = "gentle", flip = false }: WaveProps) {
  const paths: Record<string, string> = {
    gentle: "M0,70 C200,110 400,30 720,70 C1040,110 1240,30 1440,70 L1440,110 L0,110 Z",
    sharp:  "M0,40 C360,100 1080,0 1440,50 L1440,110 L0,110 Z",
  };
  return (
    <div style={{
      position: "absolute",
      [position === "top" ? "top" : "bottom"]: -1,
      left: 0, right: 0, zIndex: 5,
      overflow: "hidden", lineHeight: 0,
      transform: flip ? "rotate(180deg)" : undefined,
    }}>
      <svg
  className="wave-svg"
  viewBox="0 0 1440 110"
  preserveAspectRatio="none"
  style={{
    height: "110px",
    width: "100%",
    display: "block"
  }}
>
  <path d={paths[variant]} fill={fill} />
</svg>
    </div>
  );
}

/* ─── Global CSS (injected once) ─── */
export const ABOUT_GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');
  :root {
    --amber:#c49848; --amber-light:#e8c87a; --amber-pale:#f5e4b0;
    --taupe:#8a7a65; --brown:#3d2e1a;
    --cream:#ffffff;
--cream2:#ffffff;
--cream3:#ffffff;
    --white:#ffffff; --offwhite:#fefcf8;
    --sage:#7a9e6e; --terracotta:#c4845a;
  }
  
  html { scroll-behavior: smooth; }
  body {  background: var(--cream); color: var(--brown); overflow-x: hidden; }
  button { font-family: inherit; }

  /* Typography helpers */
  .s-label { font-size:0.68rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--amber); font-weight:600; }
  .s-title  {  font-size:clamp(2rem,4vw,3rem); font-weight:700; line-height:1.2; color:var(--brown); }
  .s-title.on-dark { color:var(--cream); }
  .gold-line { width:44px; height:2px; background:linear-gradient(90deg,var(--amber),var(--amber-light)); border-radius:2px; margin:0.9rem 0 2.2rem; }

  /* CTA buttons */
  .cta-btn { display:inline-flex; align-items:center; gap:0.5rem; padding:0.85rem 2rem; border-radius:50px; font-weight:600; text-decoration:none; font-size:0.92rem; transition:transform 0.3s,box-shadow 0.3s; }
  .cta-gold { background:linear-gradient(135deg,var(--amber) 0%,var(--amber-light) 50%,var(--amber) 100%); background-size:200% 100%; color:#2a1a04; box-shadow:0 6px 24px rgba(196,152,72,0.35); animation:gradShift 3s ease infinite; }
  .cta-gold:hover { transform:translateY(-3px) scale(1.04); box-shadow:0 14px 36px rgba(196,152,72,0.5); }
  .cta-outline { background:transparent; border:1.5px solid rgba(196,152,72,0.6); color:var(--amber); }
  .cta-outline:hover { background:rgba(196,152,72,0.08); transform:translateY(-2px); }

  /* Keyframes */
  @keyframes floatY       { 0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)} }
  @keyframes floatRotate  { 0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(6deg)} }
  @keyframes scrollDrop   { 0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(50px)} }
  @keyframes ping         { 0%{transform:scale(1);opacity:0.6}100%{transform:scale(2.2);opacity:0} }
  @keyframes gradShift    { 0%,100%{background-position:0% 50%}50%{background-position:100% 50%} }

  /* Responsive */
  @media(max-width:1024px){.svc-grid{grid-template-columns:repeat(2,1fr)!important}.val-main-grid{grid-template-columns:repeat(2,1fr)!important}}
  @media(max-width:768px){
    .story-grid,.vision-grid{grid-template-columns:1fr!important}
    .svc-grid{grid-template-columns:1fr!important}
    .val-main-grid{grid-template-columns:1fr!important}
    .val-panorama,.val-banner{grid-column:1!important}
    .stats-grid{grid-template-columns:repeat(2,1fr)!important}
    .commit-grid{grid-template-columns:1fr!important}
    .svc-card{height:300px}
    .svc-desc{color:rgba(255,255,255,0.78)!important;max-height:80px!important}
    .svc-more{color:rgba(255,255,255,0.85)!important;transform:translateX(0)!important}
  }
  @media(max-width:480px){.stats-grid{grid-template-columns:1fr 1fr!important}}
  @media(max-width:768px){
  .wave-svg{
    display:none !important;
  }
}
`;