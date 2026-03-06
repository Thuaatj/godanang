"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================= */
/* Helper */
/* ============================= */

function generateMonth(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  return a.toDateString() === b.toDateString();
}

function isBetween(date: Date, start: Date | null, end: Date | null) {
  if (!start || !end) return false;
  return date > start && date < end;
}

/* ============================= */
/* Component */
/* ============================= */

export default function LuxurySearch() {
  const [active, setActive] = useState<
    "location" | "date" | "guest" | null
  >(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [guest, setGuest] = useState(2);
  const [location, setLocation] = useState("Đà Nẵng");

  const month1 = generateMonth(today.getFullYear(), today.getMonth());
  const month2 = generateMonth(
    nextMonth.getFullYear(),
    nextMonth.getMonth()
  );

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActive(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSelect(date: Date) {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date > startDate) {
      setEndDate(date);
    } else {
      setStartDate(date);
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative max-w-5xl mx-auto mt-20 z-50"
    >
      {/* SEARCH BAR */}
      <div className="bg-white rounded-full shadow-xl flex items-center justify-between px-6 py-3 border border-gray-200">

        {/* LOCATION */}
        <div
          onClick={() => setActive("location")}
          className={`flex-1 px-4 py-2 rounded-full cursor-pointer transition ${
            active === "location" ? "bg-gray-100" : ""
          }`}
        >
          <p className="text-xs font-semibold text-gray-700">
            Địa điểm
          </p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>

        <div className="h-10 w-px bg-gray-200" />

        {/* DATE */}
        <div
          onClick={() => setActive("date")}
          className={`flex-1 px-4 py-2 rounded-full cursor-pointer transition ${
            active === "date" ? "bg-gray-100" : ""
          }`}
        >
          <p className="text-xs font-semibold text-gray-700">
            Thời gian
          </p>
          <p className="text-sm text-gray-500">
            {startDate
              ? `${startDate.toLocaleDateString()} ${
                  endDate
                    ? "- " + endDate.toLocaleDateString()
                    : ""
                }`
              : "Thêm ngày"}
          </p>
        </div>

        <div className="h-10 w-px bg-gray-200" />

        {/* GUEST */}
        <div
          onClick={() => setActive("guest")}
          className={`flex-1 px-4 py-2 rounded-full cursor-pointer transition ${
            active === "guest" ? "bg-gray-100" : ""
          }`}
        >
          <p className="text-xs font-semibold text-gray-700">
            Khách
          </p>
          <p className="text-sm text-gray-500">
            {guest} khách
          </p>
        </div>

        <button className="ml-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition">
          Tìm kiếm
        </button>
      </div>

      {/* DROPDOWN PANEL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="absolute left-1/2 -translate-x-1/2 mt-6 w-[900px] max-w-[95vw] bg-white rounded-3xl shadow-2xl p-8 z-[9999]"
          >
            {/* LOCATION PANEL */}
            {active === "location" && (
              <div className="grid grid-cols-3 gap-4">
                {["Đà Nẵng", "Hội An", "Huế"].map((city) => (
                  <div
                    key={city}
                    onClick={() => {
                      setLocation(city);
                      setActive(null);
                    }}
                    className="p-4 border rounded-xl cursor-pointer hover:border-black transition"
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}

            {/* GUEST PANEL */}
            {active === "guest" && (
              <div className="flex items-center justify-between max-w-sm">
                <p className="font-medium">Số lượng khách</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      setGuest((g) => (g > 1 ? g - 1 : 1))
                    }
                    className="w-8 h-8 border rounded-full"
                  >
                    -
                  </button>
                  <span>{guest}</span>
                  <button
                    onClick={() => setGuest((g) => g + 1)}
                    className="w-8 h-8 border rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* DATE PANEL */}
            {active === "date" && (
              <div className="grid grid-cols-2 gap-12 text-center">
                {[month1, month2].map((month, idx) => (
                  <div key={idx}>
                    <h3 className="font-semibold mb-4">
                      {month[0].toLocaleString("vi-VN", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>

                    <div className="grid grid-cols-7 gap-2 text-sm">
                      {month.map((date, i) => {
                        const selected =
                          isSameDay(date, startDate) ||
                          isSameDay(date, endDate);

                        const between = isBetween(
                          date,
                          startDate,
                          endDate
                        );

                        return (
                          <div
                            key={i}
                            onClick={() =>
                              handleSelect(date)
                            }
                            className={`h-10 flex items-center justify-center rounded-full cursor-pointer transition
                              ${
                                selected
                                  ? "bg-black text-white"
                                  : between
                                  ? "bg-gray-200"
                                  : "hover:bg-gray-100"
                              }`}
                          >
                            {date.getDate()}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}