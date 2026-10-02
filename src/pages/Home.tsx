import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Users, Shuffle, CreditCard, ChevronRight } from "lucide-react"

const FEATURES = [
  {
    icon: "🃏",
    title: "Quẹt thẻ chọn quán",
    desc: "Thích hay không thích — chỉ cần vuốt. Cả nhóm cùng chọn, hệ thống tự ghép kết quả.",
  },
  {
    icon: "🎲",
    title: "Ghép nhóm ngẫu nhiên",
    desc: "Chọn tâm trạng, ghép phòng tự động với người lạ có cùng gu ăn uống.",
  },
  {
    icon: "💸",
    title: "Chia tiền cực nhanh",
    desc: "Thanh toán nhóm, xuất QR VietQR, nhắc nhở nợ nần — tất cả trong một app.",
  },
]

const MOODS = ["🍺 Thèm bia", "🍲 Ăn lẩu", "🍣 Đi sushi", "🥗 Ăn healthy", "🌮 Đồ Tây", "🍜 Phở bún"]

export function Home() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.2),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            12 nhóm đang chọn quán ngay lúc này
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
            Hôm nay
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-orange-300">
              ăn gì? 🍜
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Ứng dụng quẹt thẻ chọn quán ăn theo nhóm — nhanh, vui, không cãi nhau.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              to="/signup"
              className="h-12 px-8 flex items-center gap-2 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-opacity text-base shadow-lg shadow-primary/30"
            >
              Bắt đầu miễn phí
              <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/login"
              className="h-12 px-8 flex items-center gap-2 rounded-full bg-muted text-foreground font-semibold hover:bg-muted/80 transition-colors text-base"
            >
              Đăng nhập
            </Link>
          </div>
        </motion.div>

        {/* Mood pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative z-10 flex flex-wrap justify-center gap-2 mt-12 max-w-lg"
        >
          {MOODS.map((mood) => (
            <span
              key={mood}
              className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground"
            >
              {mood}
            </span>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tại sao chọn chúng tôi?</h2>
            <p className="text-muted-foreground mt-3 text-lg">Mọi thứ bạn cần để quyết định bữa ăn cùng nhóm</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card space-y-4 hover:border-primary/40 transition-colors"
              >
                <div className="text-4xl">{f.icon}</div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6 p-10 rounded-3xl border border-primary/20 bg-primary/5">
          <h2 className="text-3xl font-bold tracking-tight">Sẵn sàng ăn ngon?</h2>
          <p className="text-muted-foreground">Tạo phòng, mời bạn bè và để app quyết định giúp bạn.</p>
          <Link
            to="/signup"
            className="inline-flex h-12 px-8 items-center gap-2 rounded-full bg-primary text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
          >
            Tạo tài khoản ngay
          </Link>
        </div>
      </section>
    </div>
  )
}
