import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export function Join() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 bg-[#fff8f1] min-h-full font-sans">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-md w-full">
        <h1 className="text-[28px] md:text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] leading-tight mb-2">Phòng nhóm</h1>
        <p className="text-[#756761] text-[15px] mb-8">Tạo phòng mới hoặc tham gia bằng mã 6 ký tự</p>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl border border-[#eadfd8] shadow-sm flex flex-col gap-4 text-left">
            <h2 className="font-['Inter:Bold'] font-bold text-[18px] text-[#261b17]">Tham gia phòng</h2>
            <div>
              <label className="block text-[13px] font-bold text-[#756761] mb-2">Mã phòng</label>
              <input type="text" placeholder="Nhập 6 ký tự..." className="w-full bg-[#fff8f1] border border-[#eadfd8] rounded-xl h-12 px-4 focus:outline-none focus:border-[#f05a32] text-center font-bold tracking-widest uppercase" maxLength={6} />
            </div>
            <button onClick={() => navigate("/app/room/HNAG28/lobby")} className="w-full bg-[#f05a32] text-white py-3 rounded-xl font-bold hover:bg-[#c63d1c] transition-colors">Tham gia ngay</button>
          </div>

          <div className="relative">
             <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#eadfd8]"></div></div>
             <div className="relative flex justify-center"><span className="bg-[#fff8f1] px-4 text-[#756761] text-[13px] font-bold">hoặc</span></div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#eadfd8] shadow-sm flex flex-col gap-4 text-left">
            <h2 className="font-['Inter:Bold'] font-bold text-[18px] text-[#261b17]">Tạo phòng mới</h2>
            <p className="text-[#756761] text-[13px]">Mời bạn bè cùng tham gia quẹt thẻ chọn quán</p>
            <button onClick={() => navigate("/app/room/NEW123/lobby")} className="w-full bg-[#ffe0d3] text-[#f05a32] py-3 rounded-xl font-bold hover:bg-[#ffeed3] transition-colors border border-[#f05a32]/20">Tạo phòng</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
