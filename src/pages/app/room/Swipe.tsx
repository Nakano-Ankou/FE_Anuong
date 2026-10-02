import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, Heart, Star } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

const PLACES = [
  { id: 1, name: "Lẩu Phan", desc: "Buffet lẩu · Bò Mỹ · Hải sản", address: "16 Thái Hà, Đống Đa, Hà Nội", distance: "1,6 km", price: "199K/người", rating: 4.7, img: "https://images.unsplash.com/photo-1582295528072-4d1d916cc691?w=800&fit=crop" },
  { id: 2, name: "Pizza 4P's", desc: "Pizza Ý kiểu Nhật", address: "43 Tràng Tiền", distance: "1,9 km", price: "300K/người", rating: 4.8, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&fit=crop" },
]

export function Swipe() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [swipeIndex, setSwipeIndex] = useState(0)

  const handleAction = () => {
    if (swipeIndex === PLACES.length - 1) {
      navigate(`/app/room/${id}/summary`)
    } else {
      setSwipeIndex(i => i + 1)
    }
  }

  return (
    <div className="flex flex-col gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full font-sans">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-[28px] md:text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] leading-tight">Quẹt theo trực giác</h1>
          <p className="text-[#756761] text-[15px]">Hội ăn trưa thứ ba · 4 người đang chọn</p>
        </div>
        <div className="flex -space-x-3">
          <div className="w-10 h-10 rounded-full border-2 border-[#fff8f1] bg-[#f05a32] text-white flex items-center justify-center font-bold text-xs">LA</div>
          <div className="w-10 h-10 rounded-full border-2 border-[#fff8f1] bg-blue-500 text-white flex items-center justify-center font-bold text-xs">NM</div>
          <div className="w-10 h-10 rounded-full border-2 border-[#fff8f1] bg-pink-500 text-white flex items-center justify-center font-bold text-xs">TH</div>
          <div className="w-10 h-10 rounded-full border-2 border-[#fff8f1] bg-[#0e7845] text-white flex items-center justify-center font-bold text-xs">QD</div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center max-w-lg mx-auto w-full relative">
         <div className="absolute left-0 -translate-x-full pr-12 hidden md:flex flex-col items-center gap-2">
           <button onClick={handleAction} className="w-20 h-20 bg-white border border-[#eadfd8] rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-gray-50 transition-colors shadow-sm">
             <X className="w-8 h-8" />
           </button>
           <span className="font-bold text-[#261b17] text-[14px]">Bỏ qua</span>
         </div>
         <div className="absolute right-0 translate-x-full pl-12 hidden md:flex flex-col items-center gap-2">
           <button onClick={handleAction} className="w-20 h-20 bg-[#f05a32] text-white rounded-full flex items-center justify-center hover:bg-[#c63d1c] transition-colors shadow-md">
             <Heart className="w-8 h-8 fill-current" />
           </button>
           <span className="font-bold text-[#f05a32] text-[14px]">Thích</span>
         </div>

         <div className="w-full h-[600px] relative">
           <AnimatePresence>
            {swipeIndex < PLACES.length ? (
              <motion.div
                key={swipeIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                className="absolute inset-0 bg-white rounded-[32px] shadow-xl overflow-hidden flex flex-col"
              >
                <div className="h-2/3 relative">
                  <img src={PLACES[swipeIndex].img} className="w-full h-full object-cover" alt="" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 font-bold text-[13px] text-[#f05a32]">
                    ✨ Hợp gu 92%
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-['Inter:Bold'] font-bold text-[28px] text-[#261b17]">{PLACES[swipeIndex].name}</h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#f05a32] fill-[#f05a32]" />
                        <span className="font-bold text-[15px]">{PLACES[swipeIndex].rating}</span>
                      </div>
                    </div>
                    <p className="text-[#756761] text-[15px] mt-1">{PLACES[swipeIndex].desc}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="border border-[#eadfd8] px-3 py-1.5 rounded-full text-[13px] text-[#261b17] flex items-center gap-1"><span className="text-gray-400">📍</span> {PLACES[swipeIndex].distance}</span>
                      <span className="border border-[#eadfd8] px-3 py-1.5 rounded-full text-[13px] text-[#261b17] flex items-center gap-1"><span className="text-gray-400">💵</span> {PLACES[swipeIndex].price}</span>
                      <span className="border border-[#eadfd8] px-3 py-1.5 rounded-full text-[13px] text-[#261b17] flex items-center gap-1"><span className="text-gray-400">⏱</span> 30-45 phút</span>
                    </div>
                    <p className="text-[#756761] text-[14px] mt-4">{PLACES[swipeIndex].address}</p>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
         </div>
      </div>
      
      <div className="flex justify-between items-center max-w-lg mx-auto w-full px-4 md:hidden">
        <button onClick={handleAction} className="w-16 h-16 bg-white border border-[#eadfd8] rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 shadow-sm"><X className="w-8 h-8" /></button>
        <button onClick={handleAction} className="w-16 h-16 bg-[#f05a32] text-white rounded-full flex items-center justify-center shadow-md"><Heart className="w-8 h-8 fill-current" /></button>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="font-bold text-[#756761] text-[14px]">Thẻ {swipeIndex + 1} / 12</span>
        <div className="bg-[#d3ffe9] text-[#0e7845] px-3 py-1.5 rounded-full text-[13px] font-bold flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center text-[8px]">TH</div>
          Thu Hà vừa thích quán này
        </div>
      </div>
    </div>
  )
}
