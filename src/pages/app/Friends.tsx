import { motion } from "framer-motion"
import { Search, UserPlus } from "lucide-react"

export function Friends() {
  return (
    <div className="flex flex-col gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full font-sans">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-start flex-col md:flex-row gap-4">
        <div>
          <p className="text-[#f05a32] text-[13px] font-['Inter:Bold'] font-bold uppercase tracking-wider">Hội bạn</p>
          <h1 className="text-[28px] md:text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] leading-tight">Quản lý bạn bè</h1>
          <p className="text-[#756761] text-[15px]">Kết nối với bạn bè để dễ dàng tạo nhóm ăn uống</p>
        </div>
        <button className="bg-[#f05a32] text-white px-6 py-3 rounded-xl font-bold text-[15px] flex items-center gap-2 hover:bg-[#c63d1c] transition-colors shrink-0">
          <UserPlus className="w-5 h-5" />
          Thêm bạn
        </button>
      </motion.div>

      <div className="bg-white border border-[#eadfd8] rounded-xl h-12 flex items-center px-4 max-w-md">
        <Search className="w-5 h-5 text-gray-400" />
        <input type="text" placeholder="Tìm kiếm bạn bè..." className="w-full bg-transparent border-none outline-none ml-2 text-[15px]" />
      </div>

      <div className="bg-white rounded-[32px] p-6 border border-[#eadfd8]">
        <h2 className="text-[20px] font-['Inter:Bold'] font-bold text-[#261b17] mb-6">Bạn bè đang online</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {name: "Nam Minh", status: "Đang thèm đồ nướng", color: "bg-blue-500", initials: "NM"}, 
            {name: "Thu Hà", status: "Rảnh trong 45 phút", color: "bg-pink-500", initials: "TH"}, 
            {name: "Quang Duy", status: "Muốn ăn món cay", color: "bg-green-500", initials: "QD"},
            {name: "Mai Ý", status: "Vừa online", color: "bg-purple-500", initials: "MY"}
          ].map(friend => (
            <div key={friend.name} className="flex items-center justify-between p-4 border border-[#eadfd8] rounded-2xl hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3">
                <div className={`${friend.color} size-12 rounded-full flex items-center justify-center text-white font-bold text-[14px]`}>{friend.initials}</div>
                <div>
                  <p className="font-['Inter:Bold'] font-bold text-[15px] text-[#261b17]">{friend.name}</p>
                  <p className="text-[#756761] text-[13px]">{friend.status}</p>
                </div>
              </div>
              <button className="bg-[#fff8f1] text-[#f05a32] size-10 rounded-full flex items-center justify-center hover:bg-[#ffe0d3] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-[32px] p-6 border border-[#eadfd8] mt-2">
        <h2 className="text-[20px] font-['Inter:Bold'] font-bold text-[#261b17] mb-6">Tất cả bạn bè</h2>
        <div className="text-center text-[#756761] py-8">
          Tính năng đang được phát triển...
        </div>
      </div>
    </div>
  )
}
