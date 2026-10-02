import { motion } from "framer-motion"
import { useState } from "react"
import { Copy, Check, Users2, ArrowRight, Shuffle } from "lucide-react"
import { Link } from "react-router-dom"

const MOODS = [
  { id: "hotpot", label: "🍲 Lẩu nướng", desc: "Ăn lẩu hoặc nướng BBQ" },
  { id: "rice", label: "🍚 Cơm bình dân", desc: "Nhanh, gọn, rẻ" },
  { id: "noodle", label: "🍜 Phở / Bún", desc: "Món nước truyền thống" },
  { id: "sushi", label: "🍣 Đồ Nhật", desc: "Sushi, ramen, izakaya" },
  { id: "bbq", label: "🔥 BBQ Hàn Quốc", desc: "Thịt nướng, soju" },
  { id: "healthy", label: "🥗 Healthy", desc: "Salad, smoothie, ăn chay" },
  { id: "western", label: "🌮 Đồ Tây", desc: "Burger, pizza, pasta" },
  { id: "surprise", label: "🎲 Bất ngờ!", desc: "Để app tự chọn cho bạn" },
]

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase()
}

export function RoomNew() {
  const [step, setStep] = useState<"setup" | "invite">("setup")
  const [roomName, setRoomName] = useState("")
  const [maxMembers, setMaxMembers] = useState(4)
  const [selectedMoods, setSelectedMoods] = useState<string[]>([])
  const [roomCode] = useState(generateCode)
  const [copied, setCopied] = useState(false)

  const toggleMood = (id: string) => {
    setSelectedMoods((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(roomCode).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const canCreate = roomName.trim() && selectedMoods.length > 0

  return (
    <div className="max-w-lg mx-auto space-y-6 pb-10">
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">Tạo phòng nhóm</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Tạo phòng, mời bạn bè và cùng quẹt thẻ chọn quán.
        </p>
      </div>

      {step === "setup" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Room name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold">Tên phòng</label>
            <input
              className="w-full h-11 px-4 rounded-xl border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="vd: Nhóm văn phòng A4, Team dev..."
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>

          {/* Max members */}
          <div className="space-y-3">
            <label className="text-sm font-semibold flex items-center gap-2">
              <Users2 className="h-4 w-4" />
              Số thành viên tối đa: <span className="text-primary">{maxMembers}</span>
            </label>
            <input
              type="range"
              min={2}
              max={20}
              value={maxMembers}
              onChange={(e) => setMaxMembers(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>2 người</span>
              <span>20 người</span>
            </div>
          </div>

          {/* Mood selection */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">Tâm trạng muốn ăn gì?</label>
            <p className="text-xs text-muted-foreground">Chọn ít nhất 1 loại</p>
            <div className="grid grid-cols-2 gap-2">
              {MOODS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => toggleMood(m.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedMoods.includes(m.id)
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <div className="font-semibold text-sm">{m.label}</div>
                  <div className="text-xs mt-0.5 opacity-70">{m.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep("invite")}
            disabled={!canCreate}
            className="w-full h-11 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
          >
            Tạo phòng
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      )}

      {step === "invite" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Success */}
          <div className="text-center space-y-2 py-4">
            <div className="text-5xl">🎉</div>
            <h2 className="text-xl font-bold">Phòng đã tạo!</h2>
            <p className="text-muted-foreground text-sm">Chia sẻ mã phòng với bạn bè</p>
          </div>

          {/* Room code */}
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center space-y-3">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Mã phòng</p>
            <div className="text-5xl font-extrabold tracking-widest text-primary font-mono">
              {roomCode}
            </div>
            <button
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                copied
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-card text-foreground border border-border hover:border-primary/40"
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Đã sao chép!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Sao chép mã
                </>
              )}
            </button>
          </div>

          {/* Room info */}
          <div className="p-4 rounded-xl border border-border bg-card space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tên phòng</span>
              <span className="font-semibold">{roomName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tối đa</span>
              <span className="font-semibold">{maxMembers} người</span>
            </div>
            <div className="flex justify-between items-start">
              <span className="text-muted-foreground">Tâm trạng</span>
              <div className="flex flex-wrap gap-1 justify-end max-w-[60%]">
                {selectedMoods.map((id) => (
                  <span key={id} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {MOODS.find((m) => m.id === id)?.label.split(" ")[0]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/app/explore"
              className="h-11 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm shadow-lg shadow-primary/25"
            >
              Bắt đầu quẹt thẻ
            </Link>
            <button
              onClick={() => setStep("setup")}
              className="h-11 rounded-xl border border-border bg-card text-sm font-semibold flex items-center justify-center gap-2 hover:bg-muted transition-colors"
            >
              <Shuffle className="h-4 w-4" />
              Tạo phòng khác
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
