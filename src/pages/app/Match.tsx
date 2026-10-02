import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Shuffle, Users2, MapPin, Loader2, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const MOODS = [
  { id: "hotpot", label: "🍲 Lẩu nướng" },
  { id: "rice", label: "🍚 Cơm bình dân" },
  { id: "noodle", label: "🍜 Phở / Bún" },
  { id: "sushi", label: "🍣 Đồ Nhật" },
  { id: "bbq", label: "🔥 BBQ Hàn Quốc" },
  { id: "healthy", label: "🥗 Healthy" },
  { id: "western", label: "🌮 Đồ Tây" },
  { id: "surprise", label: "🎲 Bất ngờ!" },
]

const MATCHED_RESULTS = [
  {
    id: 1,
    name: "Sushi Hokkaido Sachi",
    emoji: "🍣",
    members: 4,
    distance: "3.5 km",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=200&fit=crop",
    votes: ["😄", "🍜", "🌸", "😎"],
  },
]

type Stage = "mood" | "matching" | "result"

export function Match() {
  const [stage, setStage] = useState<Stage>("mood")
  const [selectedMoods, setSelectedMoods] = useState<string[]>([])

  const toggleMood = (id: string) => {
    setSelectedMoods((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    )
  }

  const handleMatch = () => {
    if (selectedMoods.length === 0) return
    setStage("matching")
    setTimeout(() => setStage("result"), 3000)
  }

  return (
    <div className="max-w-lg mx-auto space-y-6 pb-10">
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">Ghép hội ngẫu nhiên</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Chọn tâm trạng, hệ thống sẽ ghép bạn với nhóm người lạ có cùng gu.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {stage === "mood" && (
          <motion.div
            key="mood"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold">Hôm nay bạn thèm gì?</p>
              <div className="grid grid-cols-2 gap-2">
                {MOODS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => toggleMood(m.id)}
                    className={`p-4 rounded-xl border text-left text-sm font-semibold transition-all ${
                      selectedMoods.includes(m.id)
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Vị trí của bạn</p>
                <p className="text-xs text-muted-foreground">Quận 1, TP. Hồ Chí Minh</p>
              </div>
              <button className="text-xs text-primary font-semibold hover:underline">Đổi</button>
            </div>

            {/* Max distance */}
            <div className="space-y-2">
              <p className="text-sm font-semibold">Khoảng cách tối đa: <span className="text-primary">5 km</span></p>
              <input type="range" min={1} max={20} defaultValue={5} className="w-full accent-orange-500" />
            </div>

            <button
              onClick={handleMatch}
              disabled={selectedMoods.length === 0}
              className="w-full h-12 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shadow-xl shadow-primary/30 text-base"
            >
              <Shuffle className="h-5 w-5" />
              Ghép hội ngay!
            </button>
          </motion.div>
        )}

        {stage === "matching" && (
          <motion.div
            key="matching"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20 space-y-6 text-center"
          >
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
                <Loader2 className="h-10 w-10 text-primary animate-spin" />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Đang tìm hội...</h3>
              <p className="text-muted-foreground text-sm">
                Hệ thống đang ghép bạn với những người có cùng tâm trạng
              </p>
            </div>
            <div className="flex gap-2">
              {selectedMoods.map((id) => (
                <span key={id} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {MOODS.find((m) => m.id === id)?.label.split(" ")[0]}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {stage === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
          >
            <div className="text-center space-y-2">
              <div className="text-4xl">🎉</div>
              <h3 className="text-xl font-bold">Ghép thành công!</h3>
              <p className="text-muted-foreground text-sm">Đã tìm được nhóm phù hợp với bạn</p>
            </div>

            {MATCHED_RESULTS.map((r) => (
              <div key={r.id} className="rounded-2xl border border-primary/20 bg-card overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-40 object-cover" />
                <div className="p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-lg">{r.name}</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3.5 w-3.5" />
                        Cách bạn {r.distance}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-sm font-bold shrink-0">
                      <Users2 className="h-4 w-4" />
                      {r.members} người
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-semibold">Thành viên trong nhóm</p>
                    <div className="flex items-center gap-2">
                      {r.votes.map((v, i) => (
                        <div key={i} className="h-10 w-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-lg">
                          {v}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/app/explore"
                    className="flex items-center justify-center gap-2 w-full h-11 rounded-xl bg-primary text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
                  >
                    Vào phòng & Quẹt thẻ
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}

            <button
              onClick={() => { setStage("mood"); setSelectedMoods([]) }}
              className="w-full h-10 rounded-xl border border-border bg-card text-sm font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <Shuffle className="h-4 w-4" />
              Tìm nhóm khác
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
