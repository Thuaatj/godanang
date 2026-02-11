/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

/* =======================
   DATA FILTER
======================= */
export const QUICK_FILTERS = [
  { key: "nearBeach", label: "🌊 Gần biển" },
  { key: "privatePool", label: "🏊 Hồ bơi riêng" },
  { key: "seaView", label: "🌅 View đẹp" },
  { key: "wifi", label: "📶 WiFi miễn phí" },
  { key: "parking", label: "🅿️ Chỗ đậu xe" },
  { key: "airConditioner", label: "❄️ Điều hòa" },
];

export const TYPES = ["villa", "resort", "apartment", "homestay"];

export const AMENITIES = [
  "kitchen",
  "bbq",
  "balcony",
  "bathtub",
  "jacuzzi",
  "garden",
  "tv",
  "washingMachine",
];

export const AMENITY_LABELS: Record<string, string> = {
  kitchen: "🍳 Bếp riêng",
  bbq: "🍖 BBQ",
  balcony: "🌅 Ban công",
  bathtub: "🛁 Bồn tắm",
  jacuzzi: "🌀 Jacuzzi",
  garden: "🌴 Sân vườn",
  tv: "📺 TV",
  washingMachine: "🧺 Máy giặt",
};

/* =======================
   HELPERS
======================= */
function toggleFilter(
  current: string[],
  value: string,
  cb: (v: string[]) => void
) {
  cb(
    current.includes(value)
      ? current.filter((i) => i !== value)
      : [...current, value]
  );
}

/* =======================
   FILTER GROUP
======================= */
function FilterGroup({
  title,
  items = [],
  selected,
  onChange,
  renderLabel,
}: {
  title: string;
  items: any[];
  selected: string[];
  onChange: (v: string) => void;
  renderLabel?: (v: any) => React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b pb-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-lg font-medium mb-4 hover:text-[#f7b01a] transition-colors"
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="space-y-3">
          {items.map((item: any) => {
            const value = typeof item === "string" ? item : item.key;

            return (
              <label
                key={value}
                className="flex items-center gap-3 cursor-pointer hover:text-[#f7b01a] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(value)}
                  onChange={() => onChange(value)}
                  className="accent-[#f7b01a]"
                />
                <span>
                  {renderLabel
                    ? renderLabel(item)
                    : typeof item === "string"
                    ? item
                    : item.label}
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* =======================
   MAIN FILTERS
======================= */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Filters({ filters, setFilters }: any) {
  return (
    <aside className="w-full lg:w-[360px] space-y-8 lg:sticky lg:top-24 h-fit">
      <h2 className="text-2xl font-semibold">Bộ lọc villa</h2>

      {/* KHU VỰC */}
      <FilterGroup
        title="Khu vực"
        items={["Mỹ Khê", "Sơn Trà", "Ngũ Hành Sơn", "Sông Hàn"]}
        selected={filters.areas}
        onChange={(v) =>
          toggleFilter(filters.areas, v, (arr) =>
            setFilters({ ...filters, areas: arr })
          )
        }
      />

      {/* LOẠI CHỖ NGHỈ */}
      <FilterGroup
        title="Loại chỗ nghỉ"
        items={TYPES}
        selected={filters.types}
        onChange={(v) =>
          toggleFilter(filters.types, v, (arr) =>
            setFilters({ ...filters, types: arr })
          )
        }
      />

      {/* TIỆN NGHI */}
      <FilterGroup
        title="Tiện nghi"
        items={AMENITIES}
        selected={filters.amenities}
        renderLabel={(v) => AMENITY_LABELS[v]}
        onChange={(v) =>
          toggleFilter(filters.amenities, v, (arr) =>
            setFilters({ ...filters, amenities: arr })
          )
        }
      />

      {/* TIỆN ÍCH NỔI BẬT (GIỐNG 100%) */}
      <FilterGroup
        title="Tiện ích nổi bật"
        items={QUICK_FILTERS}
        selected={filters.quick}
        renderLabel={(item) => item.label}
        onChange={(v) =>
          toggleFilter(filters.quick, v, (arr) =>
            setFilters({ ...filters, quick: arr })
          )
        }
      />
    </aside>
  );
}
