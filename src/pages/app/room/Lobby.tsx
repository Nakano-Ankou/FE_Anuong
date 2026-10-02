import { useNavigate, useParams } from "react-router-dom"
import { motion } from "framer-motion"

export function Lobby() {
  const navigate = useNavigate()
  const { id } = useParams()

  return (
    <div className="flex flex-col md:flex-row gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full font-sans">
      <div className="flex-1 md:max-w-sm flex flex-col gap-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[#f05a32] text-[13px] font-['Inter:Bold'] font-bold uppercase tracking-wider">Phòng riêng</p>
          <h1 className="text-[28px] md:text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] leading-tight mb-2">Hội ăn trưa thứ ba</h1>
          <p className="text-[#756761] text-[15px]">Chờ mọi người sẵn sàng rồi bắt đầu quẹt</p>
        </motion.div>

        <div className="bg-[#3a2c26] rounded-[32px] p-6 text-center text-white overflow-hidden relative">
          <p className="text-white/60 text-[12px] font-['Inter:Bold'] font-bold uppercase tracking-wider mb-2">Mã phòng</p>
          <h2 className="text-[40px] font-['Inter:Black'] font-black tracking-widest mb-1">{id || "HNAG28"}</h2>
          <p className="text-white/60 text-[13px] mb-6">Chạm để sao chép · hết hạn sau 24 phút</p>
          
          <div className="rounded-xl overflow-hidden aspect-video relative mb-6">
            <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80" className="w-full h-full object-cover" alt="" />
          </div>

          <div className="text-left mb-6">
            <p className="text-white/90 text-[14px] font-medium mb-3">Khẩu vị của phòng</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white text-[#f05a32] font-bold px-3 py-1.5 rounded-full text-[13px]">Lẩu</span>
              <span className="bg-white text-[#f05a32] font-bold px-3 py-1.5 rounded-full text-[13px]">Dưới 250K</span>
              <span className="bg-white text-[#f05a32] font-bold px-3 py-1.5 rounded-full text-[13px]">≤ 3 km</span>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-3 text-[13px] text-white/80 text-left flex items-start gap-2">
            <span className="text-xl">👑</span>
            <p>Bạn là host. Khi đủ 4 người sẵn sàng, nút bắt đầu sẽ mở.</p>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-white rounded-[32px] p-6 md:p-8 border border-[#eadfd8]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[20px] font-['Inter:Bold'] font-bold text-[#261b17]">Thành viên · 4/4</h2>
          <button className="text-[#f05a32] font-bold text-[14px]">Mời thêm</button>
        </div>

        <div className="space-y-4 mb-8">
          {[
            {name: "Linh Anh", role: "HOST", desc: "Host · thích lẩu cay", status: "Sẵn sàng", color: "bg-[#0e7845]", initial: "LA"},
            {name: "Nam Minh", role: "", desc: "Đã chọn khẩu vị", status: "Sẵn sàng", color: "bg-[#0e7845]", initial: "NM"},
            {name: "Thu Hà", role: "", desc: "Đã chọn khẩu vị", status: "Sẵn sàng", color: "bg-[#0e7845]", initial: "TH"},
            {name: "Quang Duy", role: "", desc: "Đang chỉnh tầm giá", status: "Đang chọn", color: "bg-gray-400", initial: "QD"}
          ].map(user => (
            <div key={user.name} className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                 <div className={`${user.color} size-12 rounded-full flex items-center justify-center text-white font-bold text-[14px]`}>{user.initial}</div>
                 <div>
                   <p className="font-['Inter:Bold'] font-bold text-[15px] text-[#261b17] flex items-center gap-2">
                     {user.name}
                     {user.role && <span className="text-[#f05a32] text-[10px] tracking-wider">{user.role}</span>}
                   </p>
                   <p className="text-[#756761] text-[13px]">{user.desc}</p>
                 </div>
               </div>
               <span className={`${user.status === 'Sẵn sàng' ? 'bg-[#d3ffe9] text-[#0e7845]' : 'bg-gray-100 text-gray-500'} px-3 py-1 rounded-full text-[12px] font-bold`}>
                 {user.status}
               </span>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-[14px] text-[#261b17]">3/4 đã sẵn sàng</span>
            <span className="font-bold text-[14px] text-[#0e7845]">75%</span>
          </div>
          <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#0e7845] w-3/4 rounded-full transition-all"></div>
          </div>
        </div>
        
        <div className="bg-[#fff8f1] rounded-xl p-4 flex items-start gap-3 mb-6">
           <div className="bg-gray-400 size-8 rounded-full flex items-center justify-center text-white font-bold text-[10px] shrink-0">QD</div>
           <div>
             <p className="font-bold text-[#261b17] text-[13px]">Quang Duy</p>
             <p className="text-[#756761] text-[13px]">Đợi mình 1 phút, đang check ví 😅</p>
           </div>
        </div>

        <button 
          onClick={() => navigate(`/app/room/${id}/swipe`)}
          className="w-full bg-[#f05a32] text-white py-4 rounded-xl font-bold text-[16px] hover:bg-[#c63d1c] transition-colors flex items-center justify-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
          Bắt đầu quẹt
        </button>
        <p className="text-center text-[12px] text-gray-400 mt-3">Đang chờ Quang Duy sẵn sàng</p>
      </div>
    </div>
  )
}
