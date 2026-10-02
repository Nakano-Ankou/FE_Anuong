import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { MapPin, Star, Heart, X, Search, SlidersHorizontal } from "lucide-react"

const PLACES = [
  { id: 1, name: "Bún Chả Hương Liên", address: "24 Lê Văn Hưu", distance: "0,8 km", price: "45-80K/người", rating: 4.7, img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=600&h=400&fit=crop" },
  { id: 2, name: "Lẩu Phan Thái Hà", address: "16 Thái Hà", distance: "1,6 km", price: "Buffet 199K/người", rating: 4.7, img: "https://images.unsplash.com/photo-1582295528072-4d1d916cc691?w=600&h=400&fit=crop" },
  { id: 3, name: "Pizza 4P's Tràng Tiền", address: "43 Tràng Tiền", distance: "1,9 km", price: "150-300K/người", rating: 4.7, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop" },
  { id: 4, name: "Bếp Nhà Xứ Quảng", address: "36 Triệu Việt Vương", distance: "1,2 km", price: "60-120K/người", rating: 4.7, img: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=600&h=400&fit=crop" },
  { id: 5, name: "Chay Vị Lai", address: "67 Lý Thường Kiệt", distance: "2,1 km", price: "120-250K/người", rating: 4.7, img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=400&fit=crop" },
]

export function Explore() {
  const [viewMode, setViewMode] = useState<"list" | "swipe">("list")
  const [swipeIndex, setSwipeIndex] = useState(0)

  return (
    <div className="flex flex-col gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full font-sans">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-[#f05a32] text-[13px] font-['Inter:Bold'] font-bold uppercase tracking-wider">Quanh bạn</p>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[28px] md:text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] leading-tight">Khám phá quán ngon</h1>
            <p className="text-[#756761] text-[15px]">Từ món quen đến trải nghiệm mới ở Hà Nội</p>
          </div>
          <div className="flex bg-[#ffe0d3] rounded-xl p-1">
            <button 
              className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-colors ${viewMode === 'list' ? 'bg-white text-[#f05a32] shadow-sm' : 'text-[#756761]'}`}
              onClick={() => setViewMode('list')}
            >Danh sách</button>
            <button 
              className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-colors ${viewMode === 'swipe' ? 'bg-white text-[#f05a32] shadow-sm' : 'text-[#756761]'}`}
              onClick={() => setViewMode('swipe')}
            >Quẹt thẻ</button>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-white border border-[#eadfd8] rounded-xl h-12 flex items-center px-4">
          <Search className="w-5 h-5 text-gray-400" />
          <input type="text" placeholder="Tìm quán, món ăn..." className="w-full bg-transparent border-none outline-none ml-2 text-[15px]" />
          <SlidersHorizontal className="w-5 h-5 text-[#f05a32]" />
        </div>
        <button className="bg-[#ffe0d3] text-[#f05a32] h-12 px-4 rounded-xl font-bold text-[14px] flex items-center gap-2 border border-[#f05a32]/20"><MapPin className="w-4 h-4"/> Gần nhất</button>
      </div>

      {viewMode === "list" ? (
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-1 space-y-4">
            <h2 className="font-['Inter:Bold'] font-bold text-[15px] text-[#261b17]">18 quán phù hợp</h2>
            {PLACES.map(place => (
              <div key={place.id} className="bg-white rounded-2xl p-4 border border-[#eadfd8] flex gap-4 hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <img src={place.img} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['Inter:Bold'] font-bold text-[16px] text-[#261b17]">{place.name}</h3>
                  <p className="text-[#756761] text-[13px] mt-1">{place.address} · {place.distance} · {place.price}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-4 h-4 text-[#f05a32] fill-[#f05a32]" />
                    <span className="font-bold text-[13px]">{place.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:block w-1/2 h-[600px] bg-gray-200 rounded-3xl sticky top-24 overflow-hidden border border-[#eadfd8] relative">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" className="w-full h-full object-cover opacity-70" alt="Map" />
            <div className="absolute top-1/2 left-1/4 bg-[#f05a32] text-white p-2 rounded-full shadow-lg"><MapPin className="w-5 h-5"/></div>
            <div className="absolute top-1/3 right-1/3 bg-white text-[#f05a32] p-2 rounded-full shadow-lg"><MapPin className="w-5 h-5"/></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4">
              <div className="bg-[#f05a32] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px]">BC</div>
              <div>
                <p className="font-bold text-[15px]">Bún Chả Hương Liên</p>
                <p className="text-[13px] text-gray-500">0,8 km · 6 phút đi xe</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full mt-4 h-[500px] relative">
           <AnimatePresence>
            {swipeIndex < PLACES.length ? (
              <motion.div
                key={swipeIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-[#eadfd8] flex flex-col"
              >
                <div className="h-2/3 relative">
                  <img src={PLACES[swipeIndex].img} className="w-full h-full object-cover" alt="" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#f05a32] fill-[#f05a32]" />
                    <span className="font-bold text-xs">{PLACES[swipeIndex].rating}</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-['Inter:Bold'] font-bold text-[22px] text-[#261b17]">{PLACES[swipeIndex].name}</h3>
                    <p className="text-[#756761] text-[14px] mt-1">{PLACES[swipeIndex].address}</p>
                    <p className="text-[#f05a32] font-bold text-[14px] mt-1">{PLACES[swipeIndex].price}</p>
                  </div>
                  <div className="flex justify-center gap-6 mt-4">
                    <button onClick={() => setSwipeIndex(i => i + 1)} className="w-14 h-14 bg-white border border-[#eadfd8] text-gray-400 rounded-full flex items-center justify-center hover:bg-gray-50 hover:text-red-500 transition-colors shadow-sm">
                      <X className="w-6 h-6" />
                    </button>
                    <button onClick={() => setSwipeIndex(i => i + 1)} className="w-14 h-14 bg-[#f05a32] text-white rounded-full flex items-center justify-center hover:bg-[#c63d1c] transition-colors shadow-md">
                      <Heart className="w-6 h-6 fill-current" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="text-center">
                <p className="text-gray-500 font-medium">Đã hết quán gợi ý</p>
                <button onClick={() => setSwipeIndex(0)} className="mt-4 text-[#f05a32] font-bold underline">Quẹt lại</button>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
