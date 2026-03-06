"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================= */
/* Helper Functions */
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
/* Main Component */
/* ============================= */

export default function LuxurySearch() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const month1 = generateMonth(today.getFullYear(), today.getMonth());
  const month2 = generateMonth(
    nextMonth.getFullYear(),
    nextMonth.getMonth()
  );

  /* Click outside close */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
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

  function quickAdd(days: number) {
    const start = new Date();
    const end = new Date();
    end.setDate(start.getDate() + days);
    setStartDate(start);
    setEndDate(end);
  }

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto mt-16">

      {/* SEARCH BAR */}
      <div className="bg-white rounded-full shadow-xl flex items-center justify-between px-6 py-3 border border-gray-200">

        <div className="flex-1 px-4">
          <p className="text-xs font-semibold text-gray-700">Địa điểm</p>
          <p className="text-sm text-gray-400">Đà Nẵng</p>
        </div>

        <div className="h-10 w-px bg-gray-200" />

        <div
          onClick={() => setOpen(!open)}
          className="flex-1 px-4 cursor-pointer"
        >
          <p className="text-xs font-semibold text-gray-700">Thời gian</p>
          <p className="text-sm text-gray-400">
            {startDate
              ? `${startDate.toLocaleDateString()} ${
                  endDate ? " - " + endDate.toLocaleDateString() : ""
                }`
              : "Thêm ngày"}
          </p>
        </div>

        <div className="h-10 w-px bg-gray-200" />

        <div className="flex-1 px-4">
          <p className="text-xs font-semibold text-gray-700">Khách</p>
          <p className="text-sm text-gray-400">2 khách</p>
        </div>

        <button className="ml-4 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition">
          Tìm kiếm
        </button>
      </div>

      {/* DATE PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute mt-4 w-full bg-white rounded-3xl shadow-2xl p-8 z-50"
          >
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
                          onClick={() => handleSelect(date)}
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

            {/* Quick select */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[1, 3, 7, 14].map((d) => (
                <button
                  key={d}
                  onClick={() => quickAdd(d)}
                  className="px-5 py-2 rounded-full border border-gray-300 text-sm hover:border-black hover:text-black transition"
                >
                  + {d} ngày
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}