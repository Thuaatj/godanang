"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, SendHorizonal, Sparkles, MapPin, Clock, Star, Bot, ArrowRight } from "lucide-react";
import { TOURS } from "@/data/tours";
import { VILLAS_DATA } from "@/data/villas";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type ConvStep = "idle" | "days" | "group" | "budget" | "interests" | "recommend";

interface UserProfile {
  rawQuery: string;
  days: number | null;
  groupType: string | null;   // 'family' | 'couple' | 'friends' | 'solo'
  budget: string | null;      // 'budget' | 'mid' | 'comfort' | 'luxury'
  interests: string[];        // 'beach' | 'culture' | 'nature' | 'luxury' | 'adventure'
}

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  quickReplies?: string[];
  showRecs?: boolean;
  /** Snapshot of user profile at recommendation time – avoids stale state */
  recProfile?: UserProfile;
}

// Data is imported from @/data/tours and @/data/villas above

// ─────────────────────────────────────────────
// NLP Extractors
// ─────────────────────────────────────────────
function extractDays(text: string): number | null {
  const m = text.match(/(\d+)\s*(?:ngày|ngay)/i);
  if (m) return parseInt(m[1]);
  if (/1\s*tuần|7\s*ngày/i.test(text)) return 7;
  if (/2[-–]\s*3\s*ngày/i.test(text)) return 3;
  if (/4[-–]\s*5\s*ngày/i.test(text)) return 5;
  return null;
}

function extractGroupType(text: string): string | null {
  const t = text.toLowerCase();
  if (/gia\s*đình|gia\s*dinh|family|trẻ\s*em|con\s*nhỏ|người\s*lớn\s*tuổi/.test(t)) return "family";
  if (/cặp\s*đôi|cap\s*doi|couple|người\s*yêu|vợ\s*chồng|vợ|chồng|bạn\s*đời/.test(t)) return "couple";
  if (/bạn\s*bè|ban\s*be|friends|nhóm\s*bạn|hội\s*bạn|nhóm/.test(t)) return "friends";
  if (/một\s*mình|solo|đi\s*riêng|cá\s*nhân/.test(t)) return "solo";
  return null;
}

function extractBudget(text: string): string | null {
  const t = text.toLowerCase();
  const m = text.match(/(\d+[.,]?\d*)\s*(?:triệu|tr\b|million)/i);
  if (m) {
    const val = parseFloat(m[1].replace(",", "."));
    if (val < 3) return "budget";
    if (val <= 5) return "mid";
    if (val <= 10) return "comfort";
    return "luxury";
  }
  if (/tiết\s*kiệm|rẻ|dưới\s*3/.test(t)) return "budget";
  if (/bình\s*thường|vừa\s*phải|3[-–]5/.test(t)) return "mid";
  if (/thoải\s*mái|ổn|5[-–]10/.test(t)) return "comfort";
  if (/cao\s*cấp|sang\s*trọng|vip|luxury|trên\s*10/.test(t)) return "luxury";
  return null;
}

function extractInterests(text: string): string[] {
  const t = text.toLowerCase();
  const tags: string[] = [];
  if (/biển|beach|bơi|lặn|snorkel|đảo/.test(t)) tags.push("beach");
  if (/ăn|ẩm\s*thực|food|quán|chill|cà\s*phê/.test(t)) tags.push("culture");
  if (/văn\s*hóa|chùa|lịch\s*sử|cổ|đền/.test(t)) tags.push("culture");
  if (/núi|thiên\s*nhiên|nature|rừng|cảnh/.test(t)) tags.push("nature");
  if (/spa|massage|nghỉ\s*dưỡng|resort|thư\s*giãn|ng[ủỉ]\s*ngơi/.test(t)) tags.push("luxury");
  if (/phiêu\s*lưu|mạo\s*hiểm|adventure|sport/.test(t)) tags.push("adventure");
  return [...new Set(tags)];
}

// ─────────────────────────────────────────────
// Recommendation engine
// ─────────────────────────────────────────────
function getRecommendations(profile: UserProfile) {
  const { groupType, budget, interests, days } = profile;

  // Score tours: group match +3, each interest match +2, duration fit +1
  const withScores = TOURS.map((t) => {
    let score = 0;
    if (groupType && t.tags.includes(groupType)) score += 3;
    interests.forEach((i) => { if (t.tags.includes(i)) score += 2; });
    if (days) {
      const short = t.duration === "1 ngày" || t.duration === "Nửa ngày";
      if (days <= 1 && short) score += 1;
      if (days >= 3 && t.duration === "1 ngày") score += 0.5;
    }
    return { ...t, score };
  });

  // Only show tours matching at least one condition; fallback to top-rated
  const relevant = withScores.filter((t) => t.score > 0).sort((a, b) => b.score - a.score);
  const tours = relevant.length > 0
    ? relevant.slice(0, 3)
    : [...TOURS].sort((a, b) => b.rating - a.rating).slice(0, 2);

  // Filter villas by budget range first, then score
  const budgetMatch = (price: number) => {
    if (!budget) return true;
    if (budget === "budget") return price < 2_500_000;
    if (budget === "mid") return price >= 1_500_000 && price <= 5_000_000;
    if (budget === "comfort") return price >= 3_000_000 && price <= 12_000_000;
    if (budget === "luxury") return price >= 6_000_000;
    return true;
  };

  const scoredVillas = VILLAS_DATA
    .filter((v) => budgetMatch(v.price))
    .map((v) => {
      let score = 0;
      if (groupType && v.tags.includes(groupType)) score += 3;
      if (budget === "luxury" && v.stars === 5) score += 4;
      if (budget === "comfort" && v.stars >= 4) score += 2;
      interests.forEach((i) => { if (v.tags.includes(i)) score += 1; });
      return { ...v, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 1);

  return { tours, villas: scoredVillas };
}

// ─────────────────────────────────────────────
// BoldText helper
// ─────────────────────────────────────────────
function BoldText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-yellow-300">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// ─────────────────────────────────────────────
// RecommendationCards
// ─────────────────────────────────────────────
function RecommendationCards({ profile }: { profile: UserProfile }) {
  const { tours, villas } = getRecommendations(profile);
  return (
    <div className="mt-3 space-y-2">
      <p className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest">
        🗺️ Tours gợi ý cho bạn
      </p>
      {tours.map((tour, idx) => (
        <motion.a
          href="/tour"
          key={tour.title}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white/5 border border-white/10 rounded-xl flex gap-3 p-2.5 hover:bg-white/10 hover:border-yellow-400/40 transition cursor-pointer group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tour.image}
            alt={tour.title}
            className="w-[60px] h-[52px] object-cover rounded-lg shrink-0 group-hover:scale-105 transition"
          />
          <div className="flex-1 min-w-0">
            <p className="text-white text-[11px] font-medium leading-tight truncate">{tour.title}</p>
            <p className="text-yellow-400 text-[11px] font-semibold mt-0.5">{tour.price}</p>
            <div className="flex items-center gap-2.5 mt-1">
              <span className="flex items-center gap-0.5 text-gray-400 text-[9px]">
                <MapPin size={8} /> {tour.location}
              </span>
              <span className="flex items-center gap-0.5 text-gray-400 text-[9px]">
                <Clock size={8} /> {tour.duration}
              </span>
              <span className="flex items-center gap-0.5 text-gray-300 text-[9px]">
                <Star size={8} className="text-yellow-400 fill-yellow-400" /> {tour.rating}
              </span>
            </div>
          </div>
          <ArrowRight size={12} className="text-gray-500 group-hover:text-yellow-400 transition self-center shrink-0" />
        </motion.a>
      ))}

      {villas.length > 0 && (
        <>
          <p className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest mt-4">
            🏡 Villa gợi ý
          </p>
          {villas.map((villa, idx) => (
            <motion.div
              key={villa.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl flex gap-3 p-2.5 hover:bg-white/10 transition cursor-pointer group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={villa.images[0]}
                alt={villa.name}
                className="w-[60px] h-[52px] object-cover rounded-lg shrink-0 group-hover:scale-105 transition"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white text-[11px] font-medium leading-tight truncate">{villa.name}</p>
                <p className="text-yellow-400 text-[11px] font-semibold mt-0.5">{villa.priceLabel}</p>
                <span className="flex items-center gap-0.5 text-gray-400 text-[9px] mt-1">
                  <MapPin size={8} /> {villa.area}, Đà Nẵng
                </span>
              </div>
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main AIChatSearch component
// ─────────────────────────────────────────────
export default function AIChatSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<ConvStep>("idle");
  const [profile, setProfile] = useState<UserProfile>({
    rawQuery: "",
    days: null,
    groupType: null,
    budget: null,
    interests: [],
  });
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const stepRef = useRef<ConvStep>("idle");
  const profileRef = useRef<UserProfile>(profile);

  // Keep refs in sync
  useEffect(() => { stepRef.current = step; }, [step]);
  useEffect(() => { profileRef.current = profile; }, [profile]);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const genId = () => `${Date.now()}-${Math.random()}`;

  const pushMsg = useCallback((msg: Omit<Message, "id">) => {
    setMessages((prev) => [...prev, { ...msg, id: genId() }]);
  }, []);

  const after = useCallback(
    (fn: () => void, delay = 750) => {
      setIsTyping(true);
      const t = setTimeout(() => {
        setIsTyping(false);
        fn();
      }, delay);
      return () => clearTimeout(t);
    },
    []
  );

  // Determine which question comes next and push it
  const askNext = useCallback(
    (current: ConvStep, p: UserProfile) => {
      if (current === "days" || current === "idle") {
        if (!p.groupType) {
          after(() => {
            pushMsg({
              role: "bot",
              text: "👥 Tuyệt lắm! Bạn sẽ đi với **ai** trong chuyến này?",
              quickReplies: ["👨‍👩‍👧‍👦 Gia đình", "💑 Cặp đôi", "🎉 Bạn bè", "🧘 Một mình"],
            });
            setStep("group");
          });
          return;
        }
      }
      if (current === "group" || (current === "days" && p.groupType)) {
        if (!p.budget) {
          after(() => {
            pushMsg({
              role: "bot",
              text: "💰 **Ngân sách** cho chuyến đi của bạn khoảng bao nhiêu?",
              quickReplies: ["Dưới 3 triệu", "3 – 5 triệu 💛", "5 – 10 triệu ⭐", "Trên 10 triệu 👑"],
            });
            setStep("budget");
          });
          return;
        }
      }
      if (current === "budget" || (current !== "interests" && p.budget)) {
        after(() => {
          pushMsg({
            role: "bot",
            text: "🎯 Cuối cùng – bạn **thích** kiểu trải nghiệm nào nhất?",
            quickReplies: ["🏖️ Biển & Thiên nhiên", "🍜 Văn hóa & Ẩm thực", "💆 Spa & Nghỉ dưỡng", "🤿 Phiêu lưu mạo hiểm"],
          });
          setStep("interests");
        });
        return;
      }
      if (current === "interests") {
        const groupLabel =
          p.groupType === "family" ? "gia đình" :
          p.groupType === "couple" ? "cặp đôi" :
          p.groupType === "friends" ? "nhóm bạn bè" : "bạn";
        after(() => {
          pushMsg({
            role: "bot",
            text: `🌟 **Hoàn hảo!** Dựa trên thông tin bạn chia sẻ, đây là hành trình mình gợi ý riêng cho ${groupLabel} nhé:`,
            showRecs: true,
            recProfile: p,
          });
          setStep("recommend");
        }, 900);
      }
    },
    [after, pushMsg]
  );

  // Start a new conversation from the search bar
  const startConversation = useCallback(
    (initialQuery: string) => {
      if (!initialQuery.trim()) return;

      const extracted: UserProfile = {
        rawQuery: initialQuery,
        days: extractDays(initialQuery),
        groupType: extractGroupType(initialQuery),
        budget: extractBudget(initialQuery),
        interests: extractInterests(initialQuery),
      };

      setProfile(extracted);
      profileRef.current = extracted;
      setStep("idle");
      stepRef.current = "idle";
      setMessages([{ id: genId(), role: "user", text: initialQuery }]);
      setIsOpen(true);

      // Greeting message
      after(() => {
        pushMsg({
          role: "bot",
          text: `Xin chào! Mình là **Go Concierge** – trợ lý du lịch cá nhân của GoDaNang ✨\n\nĐể lên kế hoạch chuẩn nhất cho bạn, cho mình hỏi thêm vài câu nha!`,
        });

        // Directly ask first missing field
        if (!extracted.days) {
          after(() => {
            pushMsg({
              role: "bot",
              text: "⏱️ Bạn dự định đi **bao nhiêu ngày**?",
              quickReplies: ["1 ngày", "2 – 3 ngày", "4 – 5 ngày", "1 tuần trở lên"],
            });
            setStep("days");
          }, 600);
        } else {
          askNext("days", extracted);
        }
      });
    },
    [after, pushMsg, askNext]
  );

  // Handle user sending a message (free text or quick reply)
  const handleSend = useCallback(
    (text?: string) => {
      const msg = (text || inputValue).trim();
      if (!msg) return;

      setInputValue("");
      pushMsg({ role: "user", text: msg });

      const currentStep = stepRef.current;
      const currentProfile = { ...profileRef.current };

      if (currentStep === "days") {
        if (msg.includes("1 ngày")) currentProfile.days = 1;
        else if (/2\s*[–-]\s*3/.test(msg)) currentProfile.days = 3;
        else if (/4\s*[–-]\s*5/.test(msg)) currentProfile.days = 5;
        else if (/tuần/.test(msg)) currentProfile.days = 7;
        else currentProfile.days = extractDays(msg) ?? 3;
        setProfile(currentProfile);
        askNext("days", currentProfile);

      } else if (currentStep === "group") {
        if (/gia\s*đình/i.test(msg)) currentProfile.groupType = "family";
        else if (/cặp\s*đôi/i.test(msg)) currentProfile.groupType = "couple";
        else if (/bạn\s*bè/i.test(msg)) currentProfile.groupType = "friends";
        else if (/một\s*mình/i.test(msg)) currentProfile.groupType = "solo";
        else currentProfile.groupType = extractGroupType(msg) ?? "friends";
        setProfile(currentProfile);
        askNext("group", currentProfile);

      } else if (currentStep === "budget") {
        if (/dưới\s*3|under/i.test(msg)) currentProfile.budget = "budget";
        else if (/3\s*[–-]\s*5|5\s*triệu/i.test(msg)) currentProfile.budget = "mid";
        else if (/5\s*[–-]\s*10|10\s*triệu/i.test(msg)) currentProfile.budget = "comfort";
        else if (/trên\s*10|vip|👑/i.test(msg)) currentProfile.budget = "luxury";
        else currentProfile.budget = extractBudget(msg) ?? "mid";
        setProfile(currentProfile);
        askNext("budget", currentProfile);

      } else if (currentStep === "interests") {
        const tags = extractInterests(msg);
        if (/biển|thiên\s*nhiên|🏖/i.test(msg)) tags.push("beach", "nature");
        if (/văn\s*hóa|ẩm\s*thực|🍜/i.test(msg)) tags.push("culture");
        if (/spa|nghỉ\s*dưỡng|💆/i.test(msg)) tags.push("luxury");
        if (/phiêu\s*lưu|mạo\s*hiểm|🤿/i.test(msg)) tags.push("adventure");
        currentProfile.interests = [...new Set(tags)];
        setProfile(currentProfile);
        askNext("interests", currentProfile);
      }
    },
    [inputValue, pushMsg, askNext]
  );

  const handleClose = () => {
    setIsOpen(false);
    setStep("idle");
    setMessages([]);
    setProfile({ rawQuery: "", days: null, groupType: null, budget: null, interests: [] });
  };

  // Determine if quick replies should still be visible for a given message index
  const isLastBotWithReplies = (idx: number) => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "bot" && messages[i].quickReplies) {
        return i === idx;
      }
    }
    return false;
  };

  return (
    <>
      {/* ── Search bar (in-place) ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="
          bg-white/70 backdrop-blur-sm
          border border-white/70
          shadow-[0_6px_20px_rgba(0,0,0,0.18)]
          rounded-full px-4 py-3
          flex items-center gap-3
          text-black w-full max-w-[520px]
          shadow-xl
        "
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && query.trim()) {
              startConversation(query);
            }
          }}
          placeholder="Bạn muốn đi đâu? Kể tôi nghe..."
          className="flex-1 outline-none text-sm bg-transparent px-2 placeholder-gray-500"
        />
        <button
          onClick={() => query.trim() && startConversation(query)}
          className="bg-yellow-400 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition shrink-0 shadow-md"
          aria-label="Tìm kiếm"
        >
          <Search size={18} className="text-black" />
        </button>
      </motion.div>

      {/* ── AI Chat Panel (fixed, floats above everything) ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1900]"
              onClick={handleClose}
            />

            {/* Chat Panel */}
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2000] w-[94vw] max-w-[480px] max-h-[560px] h-[calc(100vh-140px)]"
            >
              <div
                className="
                  bg-black/88 backdrop-blur-2xl
                  border border-white/12
                  rounded-3xl overflow-hidden
                  shadow-[0_24px_64px_rgba(0,0,0,0.7)]
                  flex flex-col
                  h-full
                "
              >
                {/* ── Header ── */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-400/30">
                        <Bot size={18} className="text-black" />
                      </div>
                      <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-black" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-none tracking-tight">Go Concierge</p>
                      <p className="text-gray-400 text-[10px] mt-0.5 flex items-center gap-1">
                        <Sparkles size={9} className="text-yellow-400" />
                        Trợ lý du lịch AI · Đà Nẵng
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-gray-400 hover:text-white transition p-1.5 rounded-full hover:bg-white/10"
                    aria-label="Đóng"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* ── Messages ── */}
                <div
                  className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-3"
                  style={{ scrollbarWidth: "none" }}
                >
                  {messages.map((msg, idx) => (
                    <div
                      key={msg.id}
                      className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {/* Bot avatar */}
                      {msg.role === "bot" && (
                        <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shrink-0 mb-1 shadow shadow-yellow-400/20">
                          <Bot size={13} className="text-black" />
                        </div>
                      )}

                      <div className="max-w-[82%] flex flex-col gap-2">
                        {/* Bubble */}
                        <div
                          className={`
                            px-4 py-2.5 text-[13px] leading-relaxed whitespace-pre-line
                            ${msg.role === "user"
                              ? "bg-yellow-400 text-black rounded-2xl rounded-br-sm font-medium"
                              : "bg-white/10 text-white rounded-2xl rounded-bl-sm"
                            }
                          `}
                        >
                          <BoldText text={msg.text} />
                        </div>

                        {/* Quick replies – only on last bot message with replies */}
                        {msg.role === "bot" && msg.quickReplies && isLastBotWithReplies(idx) && step !== "recommend" && (
                          <div className="flex flex-wrap gap-2 mt-1.5">
                            {msg.quickReplies.map((reply) => (
                              <button
                                key={reply}
                                onClick={() => handleSend(reply)}
                                className="
                                  px-3.5 py-2 text-[12px] rounded-full
                                  bg-white/8 text-white/85
                                  border border-white/15
                                  hover:bg-yellow-400 hover:text-black hover:border-yellow-400
                                  active:scale-95
                                  transition-all duration-150 font-medium
                                "
                              >
                                {reply}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Recommendations – use snapshot profile so data always matches */}
                        {msg.showRecs && msg.recProfile && (
                          <RecommendationCards profile={msg.recProfile} />
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex items-end gap-2 justify-start">
                      <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shrink-0 mb-1">
                        <Bot size={13} className="text-black" />
                      </div>
                      <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                        <div className="flex gap-1 items-center">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.15 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* ── Input / CTA ── */}
                {step !== "recommend" ? (
                  <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2 shrink-0">
                    <input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Hoặc gõ câu trả lời của bạn..."
                      className="
                        flex-1 bg-white/8 text-white placeholder-gray-500
                        text-[13px] px-4 py-2.5 rounded-full outline-none
                        border border-white/12
                        focus:border-yellow-400/60 transition
                      "
                    />
                    <button
                      onClick={() => handleSend()}
                      className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 hover:bg-yellow-300 transition shrink-0"
                      aria-label="Gửi"
                    >
                      <SendHorizonal size={14} className="text-black" />
                    </button>
                  </div>
                ) : (
                  <div className="px-4 py-3 border-t border-white/10 flex flex-col gap-2 shrink-0">
                    <div className="flex gap-2">
                      <a
                        href="/tour"
                        className="flex-1 py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-full transition text-center border border-white/15 hover:border-white/30"
                      >
                        Xem toàn bộ tour →
                      </a>
                      <a
                        href="/propose"
                        className="flex-1 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold rounded-full transition text-center"
                      >
                        Liên hệ tư vấn ✨
                      </a>
                    </div>
                    <button
                      className="w-full py-1.5 text-gray-500 hover:text-gray-300 text-[11px] transition"
                      onClick={() => {
                        setMessages([]);
                        setStep("idle");
                        setProfile({ rawQuery: "", days: null, groupType: null, budget: null, interests: [] });
                        setQuery("");
                      }}
                    >
                      ↺ Bắt đầu lại
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
