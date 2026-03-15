"use client";

import { ReactNode, useState, useEffect, useRef } from "react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const VILLA_DATA = {
  loaihinh:   ["Villa riêng","Villa nguyên căn","Khách sạn","Homestay","Resort","Căn hộ dịch vụ","Boutique hotel"],
  khonggian:  ["Ban công","Sân vườn","Hồ bơi riêng","Hồ bơi chung","Sân thượng","Trong nhà","Ngoài trời"],
  view:        ["View biển","View sông","View núi","View thành phố","View hoàng hôn"],
  phuhopvoi:  ["Cặp đôi","Gia đình","Nhóm bạn","Nghỉ dưỡng","Workation","Tổ chức tiệc nhỏ","Trăng mật","Check-in sống ảo","Yên tĩnh","Gần trung tâm","Gần biển"],
  gia:         ["Dưới 1.000.000đ","1 – 2 triệu/đêm","2 – 4 triệu/đêm","Trên 4.000.000đ"],
  tiennghi:   ["Máy lạnh","Wifi","Bếp riêng","Máy giặt","Bồn tắm","BBQ","Chỗ đậu xe","Thang máy","Lễ tân 24/7","Dọn phòng","Cho thú cưng","View đẹp"],
  khuvuc:     ["Hải Châu","Sơn Trà","Ngũ Hành Sơn","Liên Chiểu","Thanh Khê","Gần biển Mỹ Khê","Gần cầu Rồng","Gần trung tâm"],
};
const TOUR_DATA = {
  loaitour:   ["Tour trong ngày","Tour nửa ngày","Tour 2N1Đ","Tour local","Tour nghỉ dưỡng","Tour thiên nhiên","Tour mạo hiểm","Tour văn hoá – lịch sử","Tour ẩm thực","Tour check-in"],
  hinhthuc:   ["Tour ghép","Tour riêng","Tour gia đình","Tour nhóm bạn","Tour cặp đôi","Team building"],
  phuhopvoi:  ["Người lần đầu đến Đà Nẵng","Gia đình có trẻ em","Người lớn tuổi","Cặp đôi","Nhóm bạn","Người thích khám phá","Người thích thư giãn"],
  thoigian:   ["Sáng","Chiều","Cả ngày","Cuối tuần","Mùa đẹp","Quanh năm"],
  gia:         ["Dưới 500.000đ","500k – 1 triệu","1 – 2 triệu","Trên 2.000.000đ"],
  diadem:     ["Đà Nẵng","Hội An","Bà Nà Hills","Huế","Cù Lao Chàm","Núi Thần Tài","Làng nghề – làng cổ"],
  tienich:    ["Xe đưa đón","Hướng dẫn viên","Ăn uống","Vé tham quan","Bảo hiểm","Chụp hình","Lịch trình linh hoạt","Phù hợp trẻ em"],
};

type VillaTagKey = keyof typeof VILLA_DATA;
type TourTagKey  = keyof typeof TOUR_DATA;
type FormType    = "villa" | "tour";

// ─── SHARED PRIMITIVES ────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  padding: "11px 14px", border: "1.5px solid #E8E2D8", borderRadius: 10,
  fontFamily: "inherit", fontSize: 14, color: "#2C2825", background: "#FAF6EE",
  outline: "none", width: "100%", transition: "border-color .2s, background .2s",
};

function TagPicker({ options, selected, onChange, accent }: {
  options: string[]; selected: string[]; onChange: (v: string[]) => void; accent: string;
}) {
  const toggle = (opt: string) =>
    onChange(selected.includes(opt) ? selected.filter(x => x !== opt) : [...selected, opt]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {options.map(opt => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt} type="button" onClick={() => toggle(opt)}
            style={{
              padding: "7px 14px", borderRadius: 100,
              border: `1.5px solid ${active ? accent : "#DDD"}`,
              background: active ? accent : "#FAF6EE",
              color: active ? "#fff" : "#666",
              fontSize: 13, fontFamily: "inherit", fontWeight: 500, cursor: "pointer",
              transition: "all .2s cubic-bezier(.34,1.56,.64,1)",
              transform: active ? "scale(1.04)" : "scale(1)",
              boxShadow: active ? `0 4px 12px rgba(0,0,0,0.15)` : "none",
            }}
          >
            {active && <span style={{ marginRight: 4, fontSize: 10 }}>✓</span>}
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 600, color: "#2C2825" }}>{label}</label>
      {children}
    </div>
  );
}

function FormBlock({ title, children, delay = 0 }: { title: string; children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        marginBottom: 36,
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateY(20px)",
        transition: `opacity .55s ease ${delay}s, transform .55s ease ${delay}s`,
      }}
    >
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
        color: "#C8A84B", marginBottom: 16, paddingBottom: 10,
        borderBottom: "1px solid #EEE8E0",
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ display: "inline-block", width: 12, height: 2, background: "#C8A84B", borderRadius: 2 }} />
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>{children}</div>
    </div>
  );
}

// ─── FORM VILLA ───────────────────────────────────────────────────────────────
function FormVilla({ onSuccess }: { onSuccess: () => void }) {
  const [tags, setTags] = useState<Record<VillaTagKey, string[]>>({
    loaihinh: [], khonggian: [], view: [], phuhopvoi: [], gia: [], tiennghi: [], khuvuc: [],
  });
  const setTag = (k: VillaTagKey) => (v: string[]) => setTags(t => ({ ...t, [k]: v }));
  const accent = "#1A6B8A";

  const fields: [string, VillaTagKey][] = [
    ["Loại hình","loaihinh"], ["Không gian","khonggian"], ["View","view"],
    ["Phù hợp với","phuhopvoi"], ["Khoảng giá / đêm","gia"], ["Tiện nghi","tiennghi"], ["Khu vực","khuvuc"],
  ];

  return (
    <div>
      <FormBlock title="A — Thông tin cơ bản" delay={0}>
        <Field label="Tên Villa / Khách sạn / Homestay *">
          <input
            style={inputStyle} placeholder="VD: The Blanc Da Nang..."
            onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
            onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
          />
        </Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          <Field label="Địa chỉ / Khu vực">
            <input
              style={inputStyle} placeholder="Địa chỉ chi tiết..."
              onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
              onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
            />
          </Field>
          <Field label="Quận">
            <input
              style={inputStyle} placeholder="Hải Châu, Sơn Trà..."
              onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
              onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
            />
          </Field>
        </div>
      </FormBlock>

      <FormBlock title="B — Thông tin liên hệ (nếu có)" delay={0.05}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[["Fanpage","Link Facebook..."],["Website","https://..."],["Google Maps","maps.google.com/..."],["Hotline","0xxx xxx xxx"]].map(([label, ph]) => (
            <Field key={label} label={label}>
              <input
                style={inputStyle} placeholder={ph}
                onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
              />
            </Field>
          ))}
        </div>
      </FormBlock>

      <FormBlock title="C — Phân loại" delay={0.1}>
        {fields.map(([label, key]) => (
          <Field key={key} label={label}>
            <TagPicker options={VILLA_DATA[key]} selected={tags[key]} onChange={setTag(key)} accent={accent} />
          </Field>
        ))}
      </FormBlock>

      <FormBlock title="E — Mô tả chi tiết" delay={0.15}>
        <textarea
          style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
          placeholder="Kể về villa / chỗ ở – không gian, điểm đặc biệt, lý do bạn thích..."
          onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
          onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
        />
      </FormBlock>

      <FormBlock title="F — Thông tin người gửi" delay={0.2}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[["Tên hoặc nickname","Tên bạn...",undefined],["Email","email@example.com","email"]].map(([label, ph, type]) => (
            <Field key={label as string} label={label as string}>
              <input
                style={inputStyle} placeholder={ph as string} type={type as string | undefined}
                onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
              />
            </Field>
          ))}
        </div>
      </FormBlock>

      <SubmitButton label="🏡 Gửi đề xuất chỗ ở" accent={accent} onClick={onSuccess} />
    </div>
  );
}

// ─── FORM TOUR ────────────────────────────────────────────────────────────────
function FormTour({ onSuccess }: { onSuccess: () => void }) {
  const [tags, setTags] = useState<Record<TourTagKey, string[]>>({
    loaitour: [], hinhthuc: [], phuhopvoi: [], thoigian: [], gia: [], diadem: [], tienich: [],
  });
  const setTag = (key: TourTagKey) => (value: string[]) => setTags(prev => ({ ...prev, [key]: value }));
  const accent = "#E05A3A";

  const fields: [string, TourTagKey][] = [
    ["Loại tour","loaitour"], ["Hình thức","hinhthuc"], ["Phù hợp với","phuhopvoi"],
    ["Thời gian","thoigian"], ["Khoảng giá","gia"], ["Điểm đến","diadem"], ["Tiện ích tour","tienich"],
  ];

  return (
    <div>
      <FormBlock title="A — Thông tin cơ bản" delay={0}>
        <Field label="Tên Tour *">
          <input
            style={inputStyle} placeholder="VD: Tour hoàng hôn Cù Lao Chàm..."
            onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
            onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
          />
        </Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[["Điểm xuất phát","Địa điểm tập trung..."],["Quận / Khu vực","Hải Châu, Sơn Trà..."]].map(([label, ph]) => (
            <Field key={label} label={label}>
              <input
                style={inputStyle} placeholder={ph}
                onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
              />
            </Field>
          ))}
        </div>
      </FormBlock>

      <FormBlock title="B — Thông tin liên hệ (nếu có)" delay={0.05}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[["Fanpage","Link Facebook..."],["Website","https://..."],["Google Maps","maps.google.com/..."],["Hotline","0xxx xxx xxx"]].map(([label, ph]) => (
            <Field key={label} label={label}>
              <input
                style={inputStyle} placeholder={ph}
                onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
              />
            </Field>
          ))}
        </div>
      </FormBlock>

      <FormBlock title="C — Phân loại tour" delay={0.1}>
        {fields.map(([label, key]) => (
          <Field key={key} label={label}>
            <TagPicker options={TOUR_DATA[key]} selected={tags[key]} onChange={setTag(key)} accent={accent} />
          </Field>
        ))}
      </FormBlock>

      <FormBlock title="E — Mô tả chi tiết" delay={0.15}>
        <textarea
          style={{ ...inputStyle, minHeight: 140, resize: "vertical" }}
          placeholder="Kể về lịch trình, điểm nổi bật, trải nghiệm của bạn..."
          onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
          onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
        />
      </FormBlock>

      <FormBlock title="F — Thông tin người gửi" delay={0.2}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[["Tên hoặc nickname","Tên bạn...",undefined],["Email","email@example.com","email"]].map(([label, ph, type]) => (
            <Field key={label as string} label={label as string}>
              <input
                style={inputStyle} placeholder={ph as string} type={type as string | undefined}
                onFocus={e => { e.target.style.borderColor = accent; e.target.style.background = "#fff"; }}
                onBlur={e => { e.target.style.borderColor = "#E8E2D8"; e.target.style.background = "#FAF6EE"; }}
              />
            </Field>
          ))}
        </div>
      </FormBlock>

      <SubmitButton label="🧭 Gửi đề xuất tour" accent={accent} onClick={onSuccess} />
    </div>
  );
}

// ─── SUBMIT BUTTON ────────────────────────────────────────────────────────────
function SubmitButton({ label, accent, onClick }: { label: string; accent: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); onClick(); }, 1200);
  };

  return (
    <button
      type="button" onClick={handleClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: "100%", padding: "16px 24px", borderRadius: 14, border: "none",
        background: hov ? `linear-gradient(135deg, ${accent}, rgba(0,0,0,0.1) 200%)` : accent,
        color: "#fff", fontSize: 16, fontWeight: 700, fontFamily: "inherit", cursor: "pointer",
        transition: "all .3s ease",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? `0 8px 24px rgba(0,0,0,0.2)` : `0 4px 12px rgba(0,0,0,0.12)`,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
      }}
    >
      {loading ? (
        <>
          <span style={{
            width: 18, height: 18, border: "2.5px solid rgba(255,255,255,0.4)",
            borderTopColor: "#fff", borderRadius: "50%",
            display: "inline-block",
            animation: "spin .7s linear infinite",
          }} />
          Đang gửi...
        </>
      ) : label}
    </button>
  );
}

// ─── MAIN FORM AREA ───────────────────────────────────────────────────────────
interface FormAreaProps {
  activeForm: FormType;
  setActiveForm: (f: FormType) => void;
  onSuccess: (msg: string) => void;
}

export default function FormArea({ activeForm, setActiveForm, onSuccess }: FormAreaProps) {
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEntering(true);
    const t = setTimeout(() => setEntering(false), 600);
    return () => clearTimeout(t);
  }, [activeForm]);

  const accent = activeForm === "villa" ? "#1A6B8A" : "#E05A3A";

  return (
    <section
  id="form-area"
  style={{
    padding: "90px 60px",
    background: `
      linear-gradient(180deg,#FFFDF8 0%,#F5EFE6 100%)
    `,
    position: "relative",
    overflow: "hidden"
  }}
>
  {/* Background image change by tab */}
<div
  style={{
    position: "absolute",
    inset: 0,
    backgroundImage:
      activeForm === "villa"
        ? "url('https://altarasuites.com/wp-content/uploads/2024/01/OK-1-1.jpg')"
        : "url('https://images2.thanhnien.vn/528068263637045248/2024/3/27/ban-sao-cua-sun-world-ba-na-hills-4-17115055398311570071595.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 0.7s ease, transform 0.7s ease",
    opacity: 1.75,                 // tăng độ hiện của ảnh
    transform: "scale(1.05)",
    filter: "blur(3px) brightness(1.45) contrast(105%) saturate(120%)",
    zIndex: 0
  }}
/>

{/* <div
  style={{
    position: "absolute",
    inset: 0,
    background:
      activeForm === "villa"
        ? "linear-gradient(180deg,#FFFDF888,#F5EFE688)"
        : "linear-gradient(180deg,#FFF8F388,#F4EDE888)",
    zIndex: 1,
    transition: "all .6s ease"
  }}
/> */}
    {/* Background travel shapes */}
<div style={{
  position:"absolute",
  top:-120,
  left:-120,
  width:340,
  height:340,
  borderRadius:"50%",
  background:"radial-gradient(circle,#1A6B8A22 0%, transparent 70%)",
  pointerEvents:"none"
}}/>

<div style={{
  position:"absolute",
  bottom:-120,
  right:-120,
  width:320,
  height:320,
  borderRadius:"50%",
  background:"radial-gradient(circle,#E05A3A22 0%, transparent 70%)",
  pointerEvents:"none"
}}/>  <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes slide-in {
          from { opacity:0; transform: translateX(20px); }
          to   { opacity:1; transform: translateX(0); }
        }
        @media(max-width:640px){
          .form-tabs { grid-template-columns:1fr!important; }
          .form-inner-pad { padding:28px 20px!important; }
          .form-section-pad { padding:60px 20px!important; }
        }
      `}</style>

      {/* Tab switcher */}
      <div
        className="form-tabs"
        style={{
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 14,
  maxWidth: 880,
  margin: "0 auto 40px",
  backdropFilter: "blur(6px)"
}}
      >
        {([
          { type: "villa" as const, label: "🏡 Chỗ ở",       accent: "#1A6B8A", rgb: "26,107,138" },
          { type: "tour"  as const, label: "🧭 Tour du lịch", accent: "#E05A3A", rgb: "224,90,58" },
        ]).map(({ type, label, accent: a, rgb }) => (
          <button
            key={type} type="button" onClick={() => setActiveForm(type)}
            style={{
  padding: 18,
  borderRadius: 18,
  border: `2px solid ${activeForm === type ? a : "#DDD"}`,
  background: activeForm === type
    ? `linear-gradient(135deg, rgba(${rgb},0.12), rgba(${rgb},0.04))`
    : "#F7F2E8",
  color: activeForm === type ? a : "#777",
  fontSize: 15,
  fontWeight: 700,
  fontFamily: "inherit",
  cursor: "pointer",
  transition: "all .28s cubic-bezier(.34,1.56,.64,1)",
  transform: activeForm === type ? "translateY(-3px)" : "none",
  boxShadow: activeForm === type
    ? `0 10px 28px rgba(${rgb},0.18)`
    : "0 2px 8px rgba(0,0,0,0.05)"
}}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Form box */}
      <div
        className="form-inner-pad"
        style={{
  maxWidth: 880,
  margin: "0 auto",
  background: "linear-gradient(180deg,#FFFFFF 0%,#FFFDF9 100%)",
  borderRadius: 30,
  padding: "56px 54px",
  boxShadow: `
    0 30px 80px rgba(0,0,0,0.08),
    0 8px 24px rgba(0,0,0,0.06)
  `,
  border:"1px solid #F0E9DE",
  position: "relative",
  overflow: "hidden",
  animation: entering ? "slide-in .5s ease" : "none",
}}
      >
        <div style={{
  position:"absolute",
  top:0,
  left:0,
  right:0,
  height:160,
  background:"linear-gradient(180deg,rgba(255,255,255,0.9),transparent)",
  pointerEvents:"none"
}}/>
        {/* Top accent bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 5,
          background: `linear-gradient(90deg, ${accent}, rgba(0,0,0,0))`,
          transition: "background .4s ease",
        }} />

        {/* Decorative bg shape */}
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 250, height: 250, borderRadius: "50%", pointerEvents: "none",
          background: `radial-gradient(circle, rgba(${activeForm === "villa" ? "26,107,138" : "224,90,58"},0.05) 0%, transparent 70%)`,
          transition: "background .4s ease",
        }} />

        {/* Header */}
        <div style={{ marginBottom: 40, paddingBottom: 28, borderBottom: "1px solid #EEE8E0" }}>
          <div style={{
            display: "inline-block", padding: "5px 14px", borderRadius: 100, marginBottom: 12,
            background: activeForm === "villa" ? "rgba(26,107,138,0.1)" : "rgba(224,90,58,0.1)",
            color: accent, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
          }}>
            {activeForm === "villa" ? "🏡 Form đề xuất chỗ ở" : "🧭 Form đề xuất tour"}
          </div>
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: 36,
letterSpacing: ".3px", fontWeight: 900, color: "#2C2825",
          }}>
            {activeForm === "villa" ? "Villa / Khách sạn / Homestay" : "Tour du lịch Đà Nẵng"}
          </div>
          <div style={{ fontSize: 14, color: "#8A7E74", marginTop: 6 }}>
            {activeForm === "villa"
              ? "Chia sẻ một nơi lưu trú bạn đã trải nghiệm và thấy đáng giới thiệu"
              : "Chia sẻ một tour thú vị bạn đã tham gia và muốn giới thiệu đến cộng đồng"}
          </div>
        </div>

        {activeForm === "villa"
          ? <FormVilla onSuccess={() => onSuccess("🏡 Đề xuất chỗ ở đã được gửi! Cảm ơn bạn.")} />
          : <FormTour  onSuccess={() => onSuccess("🧭 Đề xuất tour đã được gửi! Cảm ơn bạn.")} />
        }
      </div>
    </section>
  );
}