"use client";

import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  onDismiss: () => void;
}

export default function Toast({ message, onDismiss }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate in
    requestAnimationFrame(() => setVisible(true));
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDismiss, 400);
    }, 3600);
    return () => clearTimeout(t);
  }, [onDismiss]);

  return (
    <div
      onClick={() => { setVisible(false); setTimeout(onDismiss, 400); }}
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 9999,
        background: "linear-gradient(135deg, #4A6741, #3a5232)",
        color: "#fff", padding: "14px 22px 14px 18px",
        borderRadius: 16, fontSize: 14, fontWeight: 600,
        boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
        display: "flex", alignItems: "center", gap: 10,
        cursor: "pointer",
        transition: "all .4s cubic-bezier(.34,1.56,.64,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
        maxWidth: 340,
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Progress bar */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, height: 3,
        background: "rgba(255,255,255,0.35)", borderRadius: "0 0 16px 16px",
        animation: visible ? "toast-bar 3.6s linear forwards" : "none",
      }}>
        <style>{`
          @keyframes toast-bar {
            from { width: 100%; }
            to   { width: 0%; }
          }
        `}</style>
      </div>

      <span style={{ fontSize: 20 }}>✅</span>
      <span>{message}</span>
      <span style={{ marginLeft: "auto", opacity: 0.6, fontSize: 12 }}>✕</span>
    </div>
  );
}