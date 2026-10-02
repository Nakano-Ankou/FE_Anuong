import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Match() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<number[]>([])

  const toggle = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id))
    } else if (selected.length < 2) {
      setSelected([...selected, id])
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full font-sans">
      <div className="flex-1">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[#f05a32] text-[13px] font-['Inter:Bold'] font-bold uppercase tracking-wider">Gặp hội mới</p>
          <h1 className="text-[28px] md:text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] leading-tight">Cùng gu là ghép</h1>
          <p className="text-[#756761] text-[15px]">Chọn tối đa 2 mood, tụi mình sẽ tìm hội 2-4 người gần bạn</p>
        </motion.div>

        <div className="mt-8 flex justify-between items-center mb-4">
          <h2 className="text-[18px] font-['Inter:Bold'] font-bold text-[#261b17]">Hôm nay bạn muốn gì?</h2>
          <span className="text-[#f05a32] text-[13px] font-bold">Đã chọn {selected.length}/2</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {id: 1, title: "Lẩu sinh viên", desc: "No căng, giá mềm", icon: "🍲"},
            {id: 2, title: "Thèm nhậu", desc: "Dô một ly cho vui", icon: "🍺"},
            {id: 3, title: "Ăn healthy", desc: "Nhẹ bụng, nhiều rau", icon: "🥗"},
            {id: 4, title: "Đang buồn", desc: "Cần món ngon chữa lành", icon: "🌧️"}
          ].map(item => (
            <button 
              key={item.id} 
              onClick={() => toggle(item.id)}
              className={`text-left p-4 rounded-2xl border ${selected.includes(item.id) ? 'border-[#f05a32] bg-[#ffe0d3]' : 'border-[#eadfd8] bg-white'} transition-colors`}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="font-['Inter:Bold'] font-bold text-[#261b17]">{item.title}</p>
              <p className="text-[12px] text-[#756761] mt-1">{item.desc}</p>
            </button>
          ))}
        </div>

        <div className="mt-6 bg-white p-4 rounded-2xl border border-[#eadfd8] flex justify-between items-center">
           <div>
             <p className="font-['Inter:Bold'] font-bold text-[#261b17] text-[14px]">Bán kính ghép hội</p>
             <p className="text-[12px] text-[#756761]">3 km quanh Hai Bà Trưng</p>
           </div>
           <div className="bg-[#ffe0d3] text-[#f05a32] px-3 py-1 rounded-full text-[13px] font-bold flex items-center gap-1">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
             3 km
           </div>
        </div>
      </div>

      <div className="flex-1 bg-[#3a2c26] rounded-[32px] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden h-[500px] md:h-auto">
        <p className="text-[#f05a32] text-[12px] font-['Inter:Bold'] font-bold uppercase tracking-wider mb-8 z-10">Radar đang hoạt động</p>
        
        {/* Radar Animation */}
        <div className="relative w-64 h-64 mb-8">
          <div className="absolute inset-0 rounded-full border border-white/10 animate-ping"></div>
          <div className="absolute inset-4 rounded-full border border-white/20 animate-pulse"></div>
          <div className="absolute inset-12 rounded-full border border-white/30"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f05a32] text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-[18px] z-10 shadow-[0_0_20px_rgba(240,90,50,0.5)]">
            LA
          </div>
          <div className="absolute top-1/3 left-2/3 bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-[12px] backdrop-blur-sm">?</div>
          <div className="absolute bottom-1/4 right-1/4 bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] backdrop-blur-sm">?</div>
        </div>

        <div className="z-10">
          <h2 className="text-white text-[20px] font-['Inter:Bold'] font-bold mb-2">Đang tìm 2-4 người hợp gu...</h2>
          <p className="text-white/60 text-[13px] mb-6">Đã quét 18 bạn gần đây · thường mất dưới 1 phút</p>
          <button 
            onClick={() => navigate("/app/room/123/lobby")}
            className="bg-white text-[#261b17] px-6 py-3 rounded-full font-bold text-[15px] hover:bg-gray-100 transition-colors"
          >
            ✕ Dừng tìm
          </button>
        </div>
      </div>
    </div>
  )
}
