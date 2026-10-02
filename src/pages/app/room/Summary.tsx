import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Check, ChevronRight } from "lucide-react"

export function Summary() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full font-sans">
      <div className="bg-[#3a2c26] rounded-[32px] overflow-hidden flex flex-col md:flex-row relative">
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img src="https://images.unsplash.com/photo-1582295528072-4d1d916cc691?w=800&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center text-white">
          <div className="bg-[#f05a32] text-white self-start px-3 py-1 rounded-full text-[12px] font-bold mb-4 flex items-center gap-1">
            🎉 MATCH 100% · CẢ HỘI CÙNG THÍCH
          </div>
          <h1 className="text-[32px] md:text-[40px] font-['Inter:Black'] font-black mb-2 leading-tight">Chốt kèo Lẩu Phan!</h1>
          <p className="text-white/80 text-[15px] mb-8">16 Thái Hà, Đống Đa · 1,6 km · 199K/người</p>
          <div className="flex gap-4">
            <button className="bg-white text-[#261b17] px-6 py-3 rounded-xl font-bold text-[15px] flex items-center gap-2 hover:bg-gray-100 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              Chỉ đường
            </button>
            <button className="bg-[#f05a32] text-white px-6 py-3 rounded-xl font-bold text-[15px] flex items-center gap-2 hover:bg-[#c63d1c] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
              Tạo hóa đơn
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white rounded-[32px] p-6 md:p-8 border border-[#eadfd8]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-['Inter:Bold'] font-bold text-[#261b17]">Chia tiền thế nào?</h2>
            <button className="text-[#f05a32] font-bold text-[14px]">Đổi quán</button>
          </div>
          
          <div className="space-y-4">
            <button className="w-full bg-[#ffe0d3] border-2 border-[#f05a32] p-5 rounded-[20px] flex items-center justify-between group">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-[#f05a32] text-white size-12 rounded-full flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
                </div>
                <div>
                  <h3 className="font-['Inter:Bold'] font-bold text-[16px] text-[#261b17]">Chia theo món</h3>
                  <p className="text-[#756761] text-[13px] mt-1">Ai ăn món nào, trả đúng món đó</p>
                </div>
              </div>
              <div className="size-6 rounded-full bg-[#f05a32] text-white flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
            </button>
            <button className="w-full bg-white border border-[#eadfd8] hover:border-[#f05a32]/50 p-5 rounded-[20px] flex items-center justify-between group transition-colors">
              <div className="flex items-center gap-4 text-left">
                <div className="bg-[#fff8f1] text-[#f05a32] size-12 rounded-full flex items-center justify-center">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </div>
                <div>
                  <h3 className="font-['Inter:Bold'] font-bold text-[16px] text-[#261b17]">Nhập tay siêu tốc</h3>
                  <p className="text-[#756761] text-[13px] mt-1">Nhập tổng tiền và chia đều trong 10 giây</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#f05a32]" />
            </button>
          </div>

          <button onClick={() => navigate("/app/billing")} className="w-full mt-6 bg-[#f05a32] text-white py-4 rounded-xl font-bold text-[16px] hover:bg-[#c63d1c] transition-colors flex items-center justify-center gap-2">
            Tiếp tục tạo hóa đơn
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>

        <div className="flex-1 md:max-w-md bg-white rounded-[32px] p-6 md:p-8 border border-[#eadfd8]">
          <h2 className="text-[20px] font-['Inter:Bold'] font-bold text-[#261b17] mb-6">4 thành viên</h2>
          <div className="space-y-6">
            {[
              {name: "Linh Anh", desc: "Bạn · người tạo hóa đơn", initial: "LA", color: "bg-[#0e7845]"},
              {name: "Nam Minh", desc: "Đã vào hóa đơn", initial: "NM", color: "bg-[#0e7845]"},
              {name: "Thu Hà", desc: "Đã vào hóa đơn", initial: "TH", color: "bg-[#0e7845]"},
              {name: "Quang Duy", desc: "Đã vào hóa đơn", initial: "QD", color: "bg-[#0e7845]"}
            ].map(user => (
              <div key={user.name} className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className={`${user.color} size-12 rounded-full flex items-center justify-center text-white font-bold text-[14px]`}>{user.initial}</div>
                   <div>
                     <p className="font-['Inter:Bold'] font-bold text-[15px] text-[#261b17]">{user.name}</p>
                     <p className="text-[#756761] text-[13px] mt-0.5">{user.desc}</p>
                   </div>
                 </div>
                 <span className={`bg-[#d3ffe9] text-[#0e7845] px-3 py-1 rounded-full text-[12px] font-bold`}>
                   Sẵn sàng
                 </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
