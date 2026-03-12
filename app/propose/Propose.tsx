"use client";

import HeaderNav from "@/component/HeaderNav";
import { ReactNode, useState } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const VILLA_DATA = {
  loaihinh: ["Villa riêng", "Villa nguyên căn", "Khách sạn", "Homestay", "Resort", "Căn hộ dịch vụ", "Boutique hotel"],
  khonggian: ["Ban công", "Sân vườn", "Hồ bơi riêng", "Hồ bơi chung", "Sân thượng", "Trong nhà", "Ngoài trời"],
  view: ["View biển", "View sông", "View núi", "View thành phố", "View hoàng hôn"],
  phuhopvoi: ["Cặp đôi", "Gia đình", "Nhóm bạn", "Nghỉ dưỡng", "Workation", "Tổ chức tiệc nhỏ", "Trăng mật", "Check-in sống ảo", "Yên tĩnh", "Gần trung tâm", "Gần biển"],
  gia: ["Dưới 1.000.000đ", "1 – 2 triệu/đêm", "2 – 4 triệu/đêm", "Trên 4.000.000đ"],
  tiennghi: ["Máy lạnh", "Wifi", "Bếp riêng", "Máy giặt", "Bồn tắm", "BBQ", "Chỗ đậu xe", "Thang máy", "Lễ tân 24/7", "Dọn phòng", "Cho thú cưng", "View đẹp"],
  khuvuc: ["Hải Châu", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu", "Thanh Khê", "Gần biển Mỹ Khê", "Gần cầu Rồng", "Gần trung tâm"],
};
type VillaTagKey = keyof typeof VILLA_DATA;

const TOUR_DATA = {
  loaitour: ["Tour trong ngày", "Tour nửa ngày", "Tour 2N1Đ", "Tour local", "Tour nghỉ dưỡng", "Tour thiên nhiên", "Tour mạo hiểm", "Tour văn hoá – lịch sử", "Tour ẩm thực", "Tour check-in"],
  hinhthuc: ["Tour ghép", "Tour riêng", "Tour gia đình", "Tour nhóm bạn", "Tour cặp đôi", "Team building"],
  phuhopvoi: ["Người lần đầu đến Đà Nẵng", "Gia đình có trẻ em", "Người lớn tuổi", "Cặp đôi", "Nhóm bạn", "Người thích khám phá", "Người thích thư giãn"],
  thoigian: ["Sáng", "Chiều", "Cả ngày", "Cuối tuần", "Mùa đẹp", "Quanh năm"],
  gia: ["Dưới 500.000đ", "500k – 1 triệu", "1 – 2 triệu", "Trên 2.000.000đ"],
  diadem: ["Đà Nẵng", "Hội An", "Bà Nà Hills", "Huế", "Cù Lao Chàm", "Núi Thần Tài", "Làng nghề – làng cổ"],
  tienich: ["Xe đưa đón", "Hướng dẫn viên", "Ăn uống", "Vé tham quan", "Bảo hiểm", "Chụp hình", "Lịch trình linh hoạt", "Phù hợp trẻ em"],
};
type TourTagKey = keyof typeof TOUR_DATA;

// ─── HELPERS ──────────────────────────────────────────────────────────────────
interface TagPickerProps {
  options: string[];
  selected: string[];
  onChange: (value: string[]) => void;
  accent: string;
}

function TagPicker({
  options,
  selected,
  onChange,
  accent,
}: TagPickerProps) {
  const toggle = (opt: string) =>
    onChange(
      selected.includes(opt)
        ? selected.filter((x) => x !== opt)
        : [...selected, opt]
    );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {options.map((opt: string) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            style={{
              padding: "7px 14px",
              borderRadius: 100,
              border: `1.5px solid ${active ? accent : "#DDD"}`,
              background: active ? accent : "#FAF6EE",
              color: active ? "#fff" : "#666",
              fontSize: 13,
              fontFamily: "inherit",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all .2s",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

interface FieldProps {
  label: string;
  children: ReactNode;
}
function Field({ label, children }: FieldProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "#2C2825",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle = {
  padding: "11px 14px",
  border: "1.5px solid #DDD",
  borderRadius: 10,
  fontFamily: "inherit",
  fontSize: 14,
  color: "#2C2825",
  background: "#FAF6EE",
  outline: "none",
  width: "100%",
};

interface SectionLabelProps {
  children: ReactNode;
}

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 3,
        textTransform: "uppercase",
        color: "#C8A84B",
        marginBottom: 8,
      }}
    >
      ✦ {children}
    </div>
  );
}

interface BlockHeaderProps {
  label: string;
}
function BlockHeader({ label }: BlockHeaderProps) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 2,
        textTransform: "uppercase",
        color: "#C8A84B",
        marginBottom: 16,
        paddingBottom: 10,
        borderBottom: "1px solid #EEE8E0",
      }}
    >
      {label}
    </div>
  );
}

interface FormBlockProps {
  title: string;
  children: ReactNode;
}
function FormBlock({ title, children }: FormBlockProps) {
  return (
    <div style={{ marginBottom: 36 }}>
      <BlockHeader label={title} />
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {children}
      </div>
    </div>
  );
}

// ─── FORM VILLA ───────────────────────────────────────────────────────────────
interface FormVilla {
  onSuccess: () => void;
}
function FormVilla({ onSuccess }: FormVilla) {
  const [tags, setTags] = useState<Record<VillaTagKey, string[]>>({
  loaihinh: [],
  khonggian: [],
  view: [],
  phuhopvoi: [],
  gia: [],
  tiennghi: [],
  khuvuc: [],
});
  const setTag = (k: string) => (v: unknown) => setTags((t) => ({ ...t, [k]: v }));
  const accent = "#1A6B8A";

  return (
    <div>
      <FormBlock title="A — Thông tin cơ bản">
        <Field label="Tên Villa / Khách sạn / Homestay *">
          <input style={inputStyle} placeholder="VD: The Blanc Da Nang..." />
        </Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Địa chỉ / Khu vực">
            <input style={inputStyle} placeholder="Địa chỉ chi tiết..." />
          </Field>
          <Field label="Quận">
            <input style={inputStyle} placeholder="Hải Châu, Sơn Trà..." />
          </Field>
        </div>
      </FormBlock>

      <FormBlock title="B — Thông tin liên hệ (nếu có)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Fanpage"><input style={inputStyle} placeholder="Link Facebook..." /></Field>
          <Field label="Website"><input style={inputStyle} placeholder="https://..." /></Field>
          <Field label="Google Maps"><input style={inputStyle} placeholder="maps.google.com/..." /></Field>
          <Field label="Hotline"><input style={inputStyle} placeholder="0xxx xxx xxx" /></Field>
        </div>
      </FormBlock>

      <FormBlock title="C — Phân loại">
        {(
          [
            ["Loại hình", "loaihinh"],
            ["Không gian", "khonggian"],
            ["View", "view"],
            ["Phù hợp với", "phuhopvoi"],
            ["Khoảng giá / đêm", "gia"],
            ["Tiện nghi", "tiennghi"],
            ["Khu vực", "khuvuc"],
          ] as const
        ).map(([label, key]) => (
          <Field key={key} label={label}>
            <TagPicker
              options={VILLA_DATA[key]}
              selected={tags[key]}
              onChange={setTag(key)}
              accent={accent}
            />
          </Field>
        ))}
      </FormBlock>

      <FormBlock title="E — Mô tả chi tiết">
        <textarea
          style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
          placeholder="Kể về villa / chỗ ở – không gian, điểm đặc biệt, lý do bạn thích..."
        />
      </FormBlock>

      <FormBlock title="F — Thông tin người gửi">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Tên hoặc nickname"><input style={inputStyle} placeholder="Tên bạn..." /></Field>
          <Field label="Email"><input style={inputStyle} type="email" placeholder="email@example.com" /></Field>
        </div>
      </FormBlock>

      <button
        type="button"
        onClick={onSuccess}
        style={{
          width: "100%", padding: "16px 24px", borderRadius: 14, border: "none",
          background: accent, color: "#fff", fontSize: 16, fontWeight: 700,
          fontFamily: "inherit", cursor: "pointer",
        }}
      >
        🏡 Gửi đề xuất chỗ ở
      </button>
    </div>
  );
}

// ─── FORM TOUR ────────────────────────────────────────────────────────────────
function FormTour({ onSuccess }: { onSuccess: () => void }) {
    const [tags, setTags] = useState<Record<TourTagKey, string[]>>({
    loaitour: [],
    hinhthuc: [],
    phuhopvoi: [],
    thoigian: [],
    gia: [],
    diadem: [],
    tienich: [],
  });

  const setTag =
    (key: TourTagKey) =>
    (value: string[]) =>
      setTags((prev) => ({ ...prev, [key]: value }));
  const accent = "#E05A3A";

  return (
    <div>
      <FormBlock title="A — Thông tin cơ bản">
        <Field label="Tên Tour *">
          <input style={inputStyle} placeholder="VD: Tour hoàng hôn Cù Lao Chàm..." />
        </Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Điểm xuất phát"><input style={inputStyle} placeholder="Địa điểm tập trung..." /></Field>
          <Field label="Quận / Khu vực"><input style={inputStyle} placeholder="Hải Châu, Sơn Trà..." /></Field>
        </div>
      </FormBlock>

      <FormBlock title="B — Thông tin liên hệ (nếu có)">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Fanpage"><input style={inputStyle} placeholder="Link Facebook..." /></Field>
          <Field label="Website"><input style={inputStyle} placeholder="https://..." /></Field>
          <Field label="Google Maps"><input style={inputStyle} placeholder="maps.google.com/..." /></Field>
          <Field label="Hotline"><input style={inputStyle} placeholder="0xxx xxx xxx" /></Field>
        </div>
      </FormBlock>

     <FormBlock title="C — Phân loại tour">
        {(
          [
            ["Loại tour", "loaitour"],
            ["Hình thức", "hinhthuc"],
            ["Phù hợp với", "phuhopvoi"],
            ["Thời gian", "thoigian"],
            ["Khoảng giá", "gia"],
            ["Điểm đến", "diadem"],
            ["Tiện ích tour", "tienich"],
          ] as const
        ).map(([label, key]) => (
          <Field key={key} label={label}>
            <TagPicker
              options={TOUR_DATA[key]}
              selected={tags[key]}
              onChange={setTag(key)}
              accent={accent}
            />
          </Field>
        ))}
      </FormBlock>

      <FormBlock title="E — Mô tả chi tiết">
        <textarea
          style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
          placeholder="Kể về lịch trình, điểm nổi bật, trải nghiệm của bạn..."
        />
      </FormBlock>

      <FormBlock title="F — Thông tin người gửi">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Tên hoặc nickname"><input style={inputStyle} placeholder="Tên bạn..." /></Field>
          <Field label="Email"><input style={inputStyle} type="email" placeholder="email@example.com" /></Field>
        </div>
      </FormBlock>

      <button
        type="button"
        onClick={onSuccess}
        style={{
          width: "100%", padding: "16px 24px", borderRadius: 14, border: "none",
          background: accent, color: "#fff", fontSize: 16, fontWeight: 700,
          fontFamily: "inherit", cursor: "pointer",
        }}
      >
        🧭 Gửi đề xuất tour
      </button>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
type FormType = "villa" | "tour" | null;

export default function GoDanangPage() {
  const [activeForm, setActiveForm] = useState<FormType>(null);
  const [toast, setToast] = useState<string>("");

  const showToast = (msg: string): void => {
    setToast(msg);
    setTimeout(() => setToast(""), 4000);
  };

  const handleChoose = (type: FormType) => {
  setActiveForm((prev) => (prev === type ? null : type));

  setTimeout(() => {
    document
      .getElementById("form-area")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);
};

  return (
    <>
    <HeaderNav />
      {/* ── Google Font ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Be Vietnam Pro', sans-serif; background: #FAF6EE; color: #2C2825; }
        input:focus, textarea:focus { border-color: #1A6B8A !important; background: #fff !important; outline: none; }
        @media (max-width: 640px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left { clip-path: none !important; min-height: auto !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
          .hero-h1 { font-size: 36px !important; }
          .hero-h2 { font-size: 26px !important; }
          .section-h2 { font-size: 28px !important; }
          .cta-h2 { font-size: 32px !important; }
          .pad-section { padding: 60px 20px !important; }
          .pad-form { padding: 60px 20px !important; }
          .form-inner { padding: 28px 20px !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════ */}
      <section
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
          fontFamily: "'Be Vietnam Pro', sans-serif",
        }}
      >
        {/* Left */}
        <div
          className="hero-left"
          style={{
            background: "#1A6B8A",
            clipPath: "polygon(0 0,100% 0,88% 100%,0 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 72px 80px 60px",
            position: "relative",
            minHeight: "100vh",
          }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            color: "#DFC070", fontSize: 11, fontWeight: 700, letterSpacing: 2,
            textTransform: "uppercase", padding: "7px 16px", borderRadius: 100,
            marginBottom: 32, width: "fit-content",
          }}>
            ✦ GO DANANG Community
          </div>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "'Playfair Display', serif", fontSize: 52, fontWeight: 900,
              color: "#fff", lineHeight: 1.1, marginBottom: 24,
            }}
          >
            Cùng GO DANANG<br />vẽ nên những<br /><em style={{ color: "#DFC070" }}>hành trình</em><br />hay ho hơn
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.72)", fontWeight: 300, maxWidth: 360 }}>
            Mỗi chuyến đi Đà Nẵng đều có những góc rất riêng. Nếu bạn biết một nơi đáng đi, một trải nghiệm đáng thử – hãy kể cho GO DANANG nghe.
          </p>
          <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, letterSpacing: 1 }}>Đà Nẵng · Hội An · Bà Nà</span>
          </div>
        </div>

        {/* Right */}
        <div style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "80px 60px 80px 80px", background: "#FAF6EE",
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: "#E05A3A", marginBottom: 14, textTransform: "uppercase" }}>
            ✦ Cùng xây cộng đồng
          </div>
          <h2
            className="hero-h2"
            style={{
              fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 700,
              color: "#2C2825", lineHeight: 1.2, marginBottom: 18,
            }}
          >
            Trải nghiệm của bạn có thể thay đổi chuyến đi của ai đó
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#7A6E65", maxWidth: 420 }}>
            Những villa đẹp, tour hay, điểm ăn uống chất lượng – tất cả bắt đầu từ một gợi ý thật từ người đã trải qua. Chia sẻ ngay để GO DANANG lan toả những điều đó.
          </p>
          <button
            type="button"
            onClick={() => document.getElementById("choose-section")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              marginTop: 36, display: "inline-flex", alignItems: "center", gap: 10,
              background: "none", border: "none", cursor: "pointer",
              color: "#1A6B8A", fontWeight: 700, fontSize: 15, fontFamily: "inherit", padding: 0,
            }}
          >
            Bắt đầu chia sẻ
            <span style={{
              width: 40, height: 40, borderRadius: "50%", border: "2px solid #1A6B8A",
              display: "grid", placeItems: "center", fontSize: 16,
            }}>↓</span>
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. CHOOSE SECTION
      ══════════════════════════════════════════ */}
     <section
        id="choose-section"
        className="pad-section"
        style={{ padding: "96px 60px", background: "#F5EFE0", position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg,#E05A3A,#C8A84B,#1A6B8A)",
          }}
        />

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionLabel>Bạn muốn chia sẻ điều gì?</SectionLabel>

          <h2
            className="section-h2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 46,
              fontWeight: 900,
              color: "#2C2825",
              lineHeight: 1.15,
              marginBottom: 52,
            }}
          >
            Chọn nội dung{" "}
            <em style={{ color: "#E05A3A", fontStyle: "italic" }}>
              bạn muốn đóng góp
            </em>
          </h2>

          <div
            className="cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
            }}
          >
            {(
              [
                {
                  type: "villa",
                  icon: "🏡",
                  title: "Một nơi lưu trú đáng trải nghiệm",
                  desc:
                    "Bạn vừa ở một villa xinh, khách sạn đẹp hay homestay dễ thương tại Đà Nẵng? Chia sẻ để GO DANANG giới thiệu những chỗ ở đáng tin cậy đến nhiều người hơn.",
                  btnLabel: "Chia sẻ Villa / Chỗ ở →",
                  accent: "#1A6B8A",
                },
                {
                  type: "tour",
                  icon: "🧭",
                  title: "Một tour đáng đi",
                  desc:
                    "Bạn vừa tham gia một tour thú vị, tour local hay hành trình khám phá Đà Nẵng? Hãy chia sẻ để GO DANANG giúp nhiều người tìm được tour phù hợp và đáng tiền.",
                  btnLabel: "Chia sẻ Tour →",
                  accent: "#E05A3A",
                },
              ] as const
            ).map(({ type, icon, title, desc, btnLabel, accent }) => {
              const isActive = activeForm === type;

              return (
                <div
                  key={type}
                  onClick={() => handleChoose(type)}
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: 44,
                    border: `2px solid ${
                      isActive ? accent : "transparent"
                    }`,
                    cursor: "pointer",
                    boxShadow: isActive
                      ? `0 20px 50px rgba(0,0,0,0.1)`
                      : "0 2px 20px rgba(0,0,0,0.05)",
                    transform: isActive ? "translateY(-4px)" : "none",
                    transition: "all .3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: accent,
                      }}
                    />
                  )}

                  <div style={{ fontSize: 44, marginBottom: 16 }}>
                    {icon}
                  </div>

                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#2C2825",
                      marginBottom: 12,
                    }}
                  >
                    {title}
                  </div>

                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#7A6E65",
                      marginBottom: 24,
                    }}
                  >
                    {desc}
                  </p>

                  <span
                    style={{
                      display: "inline-block",
                      padding: "11px 22px",
                      borderRadius: 100,
                      background: accent,
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {isActive ? "✓ Đang điền form" : btnLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FORM AREA
      ══════════════════════════════════════════ */}
      {activeForm && (
        <section id="form-area" className="pad-form" style={{ padding: "80px 60px", background: "#FAF6EE" }}>
          {/* Tabs */}
          <div
            className="two-col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              maxWidth: 860,
              margin: "0 auto 36px",
            }}
          >
            {(
              [
                { type: "villa", label: "🏡 Chỗ ở", accent: "#1A6B8A" },
                { type: "tour", label: "🧭 Tour du lịch", accent: "#E05A3A" },
              ] as const
            ).map(({ type, label, accent }) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveForm(type)}
                style={{
                  padding: 16,
                  borderRadius: 14,
                  border: `2px solid ${activeForm === type ? accent : "#DDD"}`,
                  background:
                    activeForm === type
                      ? `rgba(${type === "villa" ? "26,107,138" : "224,90,58"},0.07)`
                      : "#F5EFE0",
                  color: activeForm === type ? accent : "#888",
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Form box */}
          <div
            className="form-inner"
            style={{
              maxWidth: 860, margin: "0 auto", background: "#fff", borderRadius: 28,
              padding: "52px 52px", boxShadow: "0 4px 40px rgba(0,0,0,0.07)",
              position: "relative", overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 5,
              background: activeForm === "villa" ? "#1A6B8A" : "#E05A3A",
            }} />

            {/* Header */}
            <div style={{ marginBottom: 40, paddingBottom: 28, borderBottom: "1px solid #EEE8E0" }}>
              <div style={{
                display: "inline-block", padding: "5px 14px", borderRadius: 100, marginBottom: 12,
                background: activeForm === "villa" ? "rgba(26,107,138,0.1)" : "rgba(224,90,58,0.1)",
                color: activeForm === "villa" ? "#1A6B8A" : "#E05A3A",
                fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
              }}>
                {activeForm === "villa" ? "🏡 Form đề xuất chỗ ở" : "🧭 Form đề xuất tour"}
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, color: "#2C2825" }}>
                {activeForm === "villa" ? "Villa / Khách sạn / Homestay" : "Tour du lịch Đà Nẵng"}
              </div>
              <div style={{ fontSize: 14, color: "#8A7E74", marginTop: 6 }}>
                {activeForm === "villa"
                  ? "Chia sẻ một nơi lưu trú bạn đã trải nghiệm và thấy đáng giới thiệu"
                  : "Chia sẻ một tour thú vị bạn đã tham gia và muốn giới thiệu đến cộng đồng"}
              </div>
            </div>

            {activeForm === "villa"
              ? <FormVilla onSuccess={() => showToast("🏡 Đề xuất chỗ ở đã được gửi! Cảm ơn bạn.")} />
              : <FormTour onSuccess={() => showToast("🧭 Đề xuất tour đã được gửi! Cảm ơn bạn.")} />
            }
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════
          3. TRUST SECTION
      ══════════════════════════════════════════ */}
      <section
        className="pad-section"
        style={{ padding: "96px 60px", background: "#2C2825", position: "relative", overflow: "hidden" }}
      >
        <div style={{
          position: "absolute", right: -40, top: "50%", transform: "translateY(-50%)",
          fontFamily: "'Playfair Display', serif", fontSize: 160, fontWeight: 900,
          color: "rgba(255,255,255,0.02)", whiteSpace: "nowrap", pointerEvents: "none",
        }}>
          GO DANANG
        </div>

        <div
          className="trust-grid"
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}
        >
          <div>
            <SectionLabel>Vì sao chúng tôi lắng nghe</SectionLabel>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 900,
              color: "#fff", lineHeight: 1.2,
            }}>
              Vì mỗi hành trình đều bắt đầu từ{" "}
              <em style={{ color: "#DFC070", fontStyle: "italic" }}>trải nghiệm thật</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              ["01", "GO DANANG được xây dựng từ góc nhìn của người đi du lịch", "không phải chỉ người bán dịch vụ. Chúng tôi hiểu bạn tìm kiếm gì."],
              ["02", "Mỗi đề xuất đều được đội ngũ chọn lọc, kiểm tra và trải nghiệm lại", "trước khi đưa lên nền tảng. Không có nội dung quảng cáo."],
              ["03", "Những gợi ý hay sẽ giúp cộng đồng có nhiều lựa chọn chất lượng", "và đúng \"gu local\" hơn. Mỗi chia sẻ tạo nên giá trị thật."],
            ].map(([num, bold, rest]) => (
              <div key={num} style={{
                display: "flex", gap: 20, padding: 28, borderRadius: 20,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 900, color: "rgba(200,168,75,0.3)", lineHeight: 1, flexShrink: 0, width: 52 }}>
                  {num}
                </div>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>
                  <strong style={{ color: "#fff" }}>{bold}</strong> — {rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. FINAL CTA
      ══════════════════════════════════════════ */}
      <section
        className="pad-section"
        style={{ padding: "120px 60px", background: "#F5EFE0", textAlign: "center", position: "relative", overflow: "hidden" }}
      >
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(224,90,58,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 680, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#E05A3A", marginBottom: 18 }}>
            ✦ Cùng nhau tạo nên điều đặc biệt
          </div>
          <h2
            className="cta-h2"
            style={{
              fontFamily: "'Playfair Display', serif", fontSize: 58, fontWeight: 900,
              color: "#2C2825", lineHeight: 1.1, marginBottom: 20,
            }}
          >
            Đà Nẵng sẽ{" "}
            <em style={{ color: "#1A6B8A", fontStyle: "italic" }}>hay hơn</em>{" "}
            khi bạn cùng góp mặt
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#7A6E65", marginBottom: 48 }}>
            GO DANANG không chỉ là nền tảng đặt dịch vụ, mà là nơi cộng đồng cùng nhau tạo nên những chuyến đi đáng nhớ.
          </p>
          <button
            type="button"
            onClick={() => document.getElementById("choose-section")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "20px 48px", background: "#E05A3A", color: "#fff",
              border: "none", borderRadius: 100, fontFamily: "inherit",
              fontWeight: 700, fontSize: 17, cursor: "pointer",
              boxShadow: "0 4px 20px rgba(224,90,58,0.35)",
              transition: "all .3s ease",
            }}
          >
            👉 Bắt đầu chia sẻ cùng GO DANANG
          </button>
        </div>
      </section>

      {/* ── Toast ── */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 9999,
          background: "#4A6741", color: "#fff", padding: "14px 22px",
          borderRadius: 14, fontSize: 14, fontWeight: 600,
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          animation: "none",
        }}>
          ✅ {toast}
        </div>
      )}
    </>
  );
}