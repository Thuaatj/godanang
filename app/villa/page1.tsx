"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";


 const QUICK_FILTERS = [
  { key: "nearBeach", label: "🌊 Gần biển" },
  { key: "privatePool", label: "🏊 Hồ bơi riêng" },
  { key: "seaView", label: "🌅 View đẹp" },
  { key: "wifi", label: "📶 WiFi miễn phí" },
  { key: "parking", label: "🅿️ Chỗ đậu xe" },
  { key: "airConditioner", label: "❄️ Điều hòa" },
]
/* =======================
   DATA
======================= */
export const VILLAS_DATA = [
  {
    id: 1,
    name: "Sunset Beachfront Villa",
    type: "villa",
    area: "Mỹ Khê",
    capacity: 8,
    price: 7200000,
    rating: 9.2,
    stars: 5,
    distanceToCenter: 2,
    quickFilters: ["nearBeach", "privatePool", "seaView", "wifi", "parking", "airConditioner"],
    amenities: ["kitchen", "bbq", "balcony", "bathtub", "garden"],
    tag: "Best view",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
    ],
  },
  {
    id: 2,
    name: "Ocean Pearl Villa",
    type: "villa",
    area: "Sơn Trà",
    capacity: 10,
    price: 8500000,
    rating: 8.8,
    stars: 4,
    distanceToCenter: 4,
    quickFilters: ["nearBeach", "privatePool", "wifi", "airConditioner"],
    amenities: ["kitchen", "balcony", "tv", "washingMachine"],
    tag: "Được yêu thích",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    ],
  },
  {
    id: 3,
    name: "Riverfront Luxury Villa",
    type: "villa",
    area: "Sông Hàn",
    capacity: 12,
    price: 9800000,
    rating: 9.0,
    stars: 5,
    distanceToCenter: 1.5,
    quickFilters: ["privatePool", "seaView", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "bathtub", "balcony"],
    tag: "Best view",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
      "https://images.unsplash.com/photo-1600573472591-ee6981cf5c26?w=1600",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600",
    ],
  },
  {
    id: 4,
    name: "White Sand Villa",
    type: "villa",
    area: "Ngũ Hành Sơn",
    capacity: 6,
    price: 5600000,
    rating: 8.2,
    stars: 4,
    distanceToCenter: 5,
    quickFilters: ["nearBeach", "wifi", "airConditioner"],
    amenities: ["kitchen", "balcony"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498c?w=1600",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?w=1600",
    ],
  },
  {
    id: 5,
    name: "Palm Garden Villa",
    type: "villa",
    area: "Sơn Trà",
    capacity: 14,
    price: 11500000,
    rating: 9.1,
    stars: 5,
    distanceToCenter: 6,
    quickFilters: ["privatePool", "garden", "wifi", "parking", "airConditioner"],
    amenities: ["kitchen", "bbq", "garden", "washingMachine"],
    tag: "Được yêu thích",
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600",
      "https://images.unsplash.com/photo-1600573472631-8a48f86d9c47?w=1600",
      "https://images.unsplash.com/photo-1600607688040-0b8a21d71f2d?w=1600",
    ],
  },
  {
    id: 6,
    name: "Blue Horizon Villa",
    type: "villa",
    area: "Mỹ Khê",
    capacity: 8,
    price: 6900000,
    rating: 8.5,
    stars: 4,
    distanceToCenter: 2.5,
    quickFilters: ["nearBeach", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "balcony"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1600",
      "https://images.unsplash.com/photo-1600585152911-46e3b9d8b5f6?w=1600",
      "https://images.unsplash.com/photo-1599423300746-b62533397364?w=1600",
    ],
  },
  {
    id: 7,
    name: "Hilltop Panorama Villa",
    type: "resort",
    area: "Sơn Trà",
    capacity: 16,
    price: 13500000,
    rating: 9.4,
    stars: 5,
    distanceToCenter: 7,
    quickFilters: ["privatePool", "seaView", "wifi", "parking", "airConditioner"],
    amenities: ["kitchen", "bbq", "jacuzzi", "balcony", "garden"],
    tag: "Best view",
    images: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
    ],
  },
  {
    id: 8,
    name: "Golden Bay Villa",
    type: "villa",
    area: "Ngũ Hành Sơn",
    capacity: 10,
    price: 8200000,
    rating: 8.7,
    stars: 4,
    distanceToCenter: 4.5,
    quickFilters: ["nearBeach", "privatePool", "wifi", "airConditioner"],
    amenities: ["kitchen", "balcony", "tv"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600",
    ],
  },
  {
    id: 9,
    name: "Riverside Modern Villa",
    type: "apartment",
    area: "Sông Hàn",
    capacity: 6,
    price: 5900000,
    rating: 8.0,
    stars: 4,
    distanceToCenter: 1,
    quickFilters: ["wifi", "airConditioner"],
    amenities: ["kitchen", "washingMachine", "tv"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498c?w=1600",
      "https://images.unsplash.com/photo-1600573472631-8a48f86d9c47?w=1600",
    ],
  },
  {
    id: 10,
    name: "Azure Coast Villa",
    type: "villa",
    area: "Mỹ Khê",
    capacity: 12,
    price: 10200000,
    rating: 9.0,
    stars: 5,
    distanceToCenter: 2,
    quickFilters: ["nearBeach", "privatePool", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "balcony", "bathtub"],
    tag: "Được yêu thích",
    images: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600",
      "https://images.unsplash.com/photo-1600573472591-ee6981cf5c26?w=1600",
      "https://images.unsplash.com/photo-1600607688040-0b8a21d71f2d?w=1600",
    ],
  },
  {
    id: 11,
    name: "Lagoon Private Villa",
    type: "villa",
    area: "Sơn Trà",
    capacity: 8,
    price: 7400000,
    rating: 8.6,
    stars: 4,
    distanceToCenter: 5,
    quickFilters: ["privatePool", "wifi", "airConditioner"],
    amenities: ["kitchen", "garden"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1600",
    ],
  },
  {
    id: 12,
    name: "Emerald Mountain Villa",
    type: "resort",
    area: "Sơn Trà",
    capacity: 18,
    price: 15800000,
    rating: 9.5,
    stars: 5,
    distanceToCenter: 8,
    quickFilters: ["privatePool", "seaView", "wifi", "parking", "airConditioner"],
    amenities: ["kitchen", "bbq", "jacuzzi", "garden"],
    tag: "Best view",
    images: [
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1600",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498c?w=1600",
    ],
  },
  {
    id: 13,
    name: "Seaside Minimal Villa",
    type: "homestay",
    area: "Ngũ Hành Sơn",
    capacity: 6,
    price: 5200000,
    rating: 7.8,
    stars: 4,
    distanceToCenter: 5.5,
    quickFilters: ["nearBeach", "wifi", "airConditioner"],
    amenities: ["kitchen", "balcony"],
    tag: "",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600",
    ],
  },
  {
    id: 14,
    name: "Infinity Pool Villa",
    type: "villa",
    area: "Mỹ Khê",
    capacity: 14,
    price: 12500000,
    rating: 9.3,
    stars: 5,
    distanceToCenter: 2,
    quickFilters: ["nearBeach", "privatePool", "seaView", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "bathtub", "balcony"],
    tag: "Được yêu thích",
    images: [
      "https://images.unsplash.com/photo-1600607688040-0b8a21d71f2d?w=1600",
      "https://images.unsplash.com/photo-1600573472631-8a48f86d9c47?w=1600",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600",
    ],
  },
  {
    id: 15,
    name: "Golden River Villa",
    type: "villa",
    area: "Sông Hàn",
    capacity: 10,
    price: 8700000,
    rating: 8.9,
    stars: 4,
    distanceToCenter: 1.2,
    quickFilters: ["seaView", "wifi", "airConditioner"],
    amenities: ["kitchen", "bbq", "balcony"],
    tag: "Best view",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6981cf5c26?w=1600",
      "https://images.unsplash.com/photo-1600585152911-46e3b9d8b5f6?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    ],
  },
]



const PAGE_SIZE = 9;

/* =======================
   PAGE
======================= */
export default function VillasPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
  areas: [] as string[],
  types: [] as string[],
  quick: [] as string[],
  amenities: [] as string[],
  minRating: null as number | null,
  maxDistance: null as number | null,
});


  /* ===== FILTER LOGIC ===== */
  const filteredVillas = useMemo(() => {
  return VILLAS_DATA.filter(villa => {

    if (filters.areas.length && !filters.areas.includes(villa.area)) {
      return false
    }

    if (filters.types.length && !filters.types.includes(villa.type)) {
      return false
    }

    if (
      filters.quick.length &&
      !filters.quick.every(q => villa.quickFilters?.includes(q))
    ) {
      return false
    }

    if (
      filters.amenities.length &&
      !filters.amenities.every(a => villa.amenities?.includes(a))
    ) {
      return false
    }

    if (filters.minRating && villa.rating < filters.minRating) {
      return false
    }

    if (filters.maxDistance && villa.distanceToCenter > filters.maxDistance) {
      return false
    }

    return true
  })
}, [filters])


  const totalPages = Math.ceil(filteredVillas.length / PAGE_SIZE);
  const villas = filteredVillas.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

 

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] min-h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1800)",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1600px] mx-auto px-8">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-white text-5xl md:text-6xl font-bold"
            >
              Villas tại Đà Nẵng
            </motion.h1>
            <p className="mt-4 text-white/80 max-w-2xl">
              Tuyển chọn villa nghỉ dưỡng cao cấp – vị trí đẹp – không gian riêng tư
            </p>
          </div>
        </div>
      </section>

      {/* ================= BODY ================= */}
      <section className="max-w-[1600px] mx-auto px-8 py-20 flex flex-col lg:flex-row gap-16">
        <Filters filters={filters} setFilters={setFilters} />

        {/* ================= GRID ================= */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            <AnimatePresence>
              {villas.map((villa, index) => (
                <VillaCard key={villa.id} villa={villa} index={index} />
              ))}
            </AnimatePresence>
          </div>

          {/* ================= PAGINATION ================= */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-16">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-4 py-2 border transition ${
                    page === i + 1
                      ? "bg-black text-white"
                      : "hover:border-[#f7b01a]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}


/* =======================
   FILTERS (WORKING)
======================= */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Filters({ filters, setFilters }: any) {
  return (
    <aside className="w-full lg:w-[360px] space-y-8 lg:sticky lg:top-24 h-fit">
  <h2 className="text-2xl font-semibold">Bộ lọc villa</h2>

  {/* ===== KHU VỰC ===== */}
  <FilterGroup
    title="Khu vực"
    items={["Mỹ Khê", "Sơn Trà", "Ngũ Hành Sơn", "Sông Hàn"]}
    selected={filters.areas}
    onChange={(value: string) =>
      toggleFilter(filters.areas, value, (v) =>
        setFilters({ ...filters, areas: v })
      )
    }
  />

  {/* ===== LỌC NHANH ===== */}
  <div className="border-b pb-6">
    <h3 className="text-lg font-medium mb-4">Lọc nhanh</h3>

    <div className="space-y-3">
      {QUICK_FILTERS.map(item => (
        <label key={item.key} className="flex gap-3 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.quick.includes(item.key)}
            onChange={() =>
              toggleFilter(filters.quick, item.key, v =>
                setFilters({ ...filters, quick: v })
              )
            }
          />
          {item.label}
        </label>
      ))}
    </div>
  </div>
</aside>

  );
}

function FilterGroup({
  title,
  items,
  selected,
  onChange,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b pb-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-lg font-medium mb-4"
      >
        {title}
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="space-y-3 text-base">
          {items.map((item: string) => (
            <label
              key={item}
              className="flex gap-3 cursor-pointer items-center"
            >
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => onChange(item)}
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

/* =======================
   CARD
======================= */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function VillaCard({ villa, index }: any) {
  const offset =
    index % 3 === 1 ? "mt-16" : index % 3 === 2 ? "mt-8" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative group ${offset}`}
    >
      {/* IMAGE */}
      <div className="relative h-[390px] overflow-hidden">
        <img
          src={villa.images[0]}
          className="
            absolute inset-0 w-full h-full object-cover
            transition-transform duration-[900ms] ease-out
            group-hover:scale-110
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/80 via-black/40 to-transparent
            opacity-60 group-hover:opacity-90
            transition-opacity duration-500
          "
        />

        {/* FEATURES */}
        <div
          className="
            absolute bottom-6 left-6 right-6
            flex flex-wrap gap-3
            text-white text-sm
            opacity-0 translate-y-4
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-500
          "
        >
          {villa.quickFilters.includes("privatePool") && (
            <span className="flex items-center gap-2 bg-black/40 px-3 py-1">
                🏊 Hồ bơi riêng
            </span>
            )}

            {villa.quickFilters.includes("nearBeach") && (
            <span className="flex items-center gap-2 bg-black/40 px-3 py-1">
                🌊 Gần biển
            </span>
            )}

            {villa.amenities.includes("bbq") && (
            <span className="flex items-center gap-2 bg-black/40 px-3 py-1">
                🍖 BBQ
            </span>
            )}

        </div>

        {/* TAG */}
        {villa.tag && (
          <div className="absolute top-4 left-4 bg-[#f7b01a] text-black text-xs px-3 py-1">
            {villa.tag}
          </div>
        )}
      </div>

      {/* INFO BOX */}
      <div
        className="
          relative -mt-24 bg-white p-6 w-[92%]
          shadow-lg
          transition-transform duration-500
          group-hover:-translate-y-2
        "
      >
        <div className="text-xs uppercase text-gray-500">
          {villa.area}
        </div>

        <h3 className="text-lg font-semibold mt-1">
          {villa.name}
        </h3>

        <div className="flex justify-between items-center mt-4 text-sm">
          <span>👤 {villa.capacity} người</span>
          <span className="font-semibold text-[#f7b01a]">
            {villa.price.toLocaleString()}đ / đêm
          </span>
        </div>

        <div className="mt-4 flex gap-3">
          <button className="border px-4 py-2 hover:border-[#f7b01a]">
            Chi tiết
          </button>
          <button className="bg-black text-white px-4 py-2 hover:bg-[#f7b01a] hover:text-black transition">
            Tư vấn
          </button>
        </div>
      </div>
    </motion.div>
  );
}


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
