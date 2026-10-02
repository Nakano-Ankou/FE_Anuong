import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function Dashboard() {
  return (
    <div className="flex flex-col gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-1">
        <p className="text-[#f05a32] text-[13px] font-['Inter:Bold'] font-bold uppercase tracking-wider">Thứ ba, 29 tháng 9</p>
        <h1 className="text-[28px] md:text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] leading-tight">Chào Linh Anh, trưa nay ăn gì?</h1>
        <p className="text-[#756761] text-[15px]">Trời đẹp 28°C · 18 quán ngon trong bán kính 2 km</p>
      </motion.div>

      {/* Còn nợ cần thanh toán - Giữ nguyên theo yêu cầu */}
      <div className="bg-[#ffe0d3] rounded-2xl p-4 flex items-center justify-between border border-[#eadfd8]">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full size-10 flex items-center justify-center text-red-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <p className="font-['Inter:Bold'] font-bold text-[#261b17] text-[15px]">Bạn còn 2 khoản cần thanh toán</p>
            <p className="text-[#756761] text-[13px]">Tổng 185.000đ · gần nhất từ bữa Lẩu Phan hôm qua</p>
          </div>
        </div>
        <Link to="/app/billing" className="bg-white text-[#261b17] px-4 py-2 rounded-xl text-[13px] font-bold border border-[#eadfd8] hover:bg-gray-50 transition-colors hidden md:block">
          Xem khoản nợ
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link to="/app/explore" className="bg-[#f05a32] p-5 rounded-[24px] flex flex-col justify-between aspect-[4/3] md:aspect-auto md:h-36 group">
          <div className="bg-white/20 size-10 rounded-full flex items-center justify-center text-white mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
          </div>
          <div>
            <p className="text-white font-['Inter:Bold'] font-bold text-[16px] group-hover:scale-105 transition-transform origin-left">Ăn một mình</p>
            <p className="text-white/80 text-[13px]">Tìm quán hợp gu ngay</p>
          </div>
        </Link>
        <Link to="/app/room/join" className="bg-[#ffeed3] p-5 rounded-[24px] flex flex-col justify-between aspect-[4/3] md:aspect-auto md:h-36 group">
          <div className="bg-white size-10 rounded-full flex items-center justify-center text-[#261b17] mb-2 shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
            <p className="text-[#261b17] font-['Inter:Bold'] font-bold text-[16px] group-hover:scale-105 transition-transform origin-left">Tạo phòng</p>
            <p className="text-[#756761] text-[13px]">Rủ hội bạn cùng quẹt</p>
          </div>
        </Link>
        <Link to="/app/room/join" className="bg-[#d3ffe9] p-5 rounded-[24px] flex flex-col justify-between aspect-[4/3] md:aspect-auto md:h-36 group">
          <div className="bg-white size-10 rounded-full flex items-center justify-center text-[#261b17] mb-2 shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          </div>
          <div>
            <p className="text-[#0e7845] font-['Inter:Bold'] font-bold text-[16px] group-hover:scale-105 transition-transform origin-left">Tham gia phòng</p>
            <p className="text-[#0e7845]/70 text-[13px]">Nhập mã 6 ký tự</p>
          </div>
        </Link>
        <Link to="/app/room/match" className="bg-[#3a2c26] p-5 rounded-[24px] flex flex-col justify-between aspect-[4/3] md:aspect-auto md:h-36 group">
          <div className="bg-white/10 size-10 rounded-full flex items-center justify-center text-white mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
          </div>
          <div>
            <p className="text-white font-['Inter:Bold'] font-bold text-[16px] group-hover:scale-105 transition-transform origin-left">Ghép hội</p>
            <p className="text-white/70 text-[13px]">Gặp người cùng khẩu vị</p>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-5 border border-[#eadfd8] md:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[18px] font-['Inter:Bold'] font-bold text-[#261b17]">Bạn bè đang online</h2>
            <Link to="/app/friends" className="text-[#f05a32] text-[13px] font-bold">Xem tất cả</Link>
          </div>
          <div className="space-y-4">
            {[{name: "Nam Minh", status: "Đang thèm đồ nướng", color: "bg-blue-500", initials: "NM"}, {name: "Thu Hà", status: "Rảnh trong 45 phút", color: "bg-pink-500", initials: "TH"}, {name: "Quang Duy", status: "Muốn ăn món cay", color: "bg-green-500", initials: "QD"}].map(friend => (
              <div key={friend.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`${friend.color} size-10 rounded-full flex items-center justify-center text-white font-bold text-[13px]`}>{friend.initials}</div>
                  <div>
                    <p className="font-['Inter:Bold'] font-bold text-[15px] text-[#261b17]">{friend.name}</p>
                    <p className="text-[#756761] text-[13px]">{friend.status}</p>
                  </div>
                </div>
                <button className="bg-[#fff8f1] text-[#f05a32] size-8 rounded-full flex items-center justify-center hover:bg-[#ffe0d3] transition-colors"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg></button>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] font-['Inter:Bold'] font-bold text-[#261b17]">Phòng gần đây</h2>
            <Link to="/app/explore" className="text-[#f05a32] text-[13px] font-bold hidden md:block">Mở bản đồ</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#eadfd8] group cursor-pointer hover:shadow-md transition-shadow">
               <div className="h-32 bg-gray-200 relative">
                 <img src="https://images.unsplash.com/photo-1582295528072-4d1d916cc691?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="" />
               </div>
               <div className="p-4">
                 <div className="flex justify-between items-start mb-1">
                   <h3 className="font-['Inter:Bold'] font-bold text-[16px] text-[#261b17]">Lẩu Phan</h3>
                   <span className="bg-[#fff8f1] text-[#f05a32] text-[12px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>4.7</span>
                 </div>
                 <p className="text-[#756761] text-[13px]">Thái Hà · 1,6 km · 199K/người</p>
               </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-[#eadfd8] group cursor-pointer hover:shadow-md transition-shadow">
               <div className="h-32 bg-gray-200 relative">
                 <img src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="" />
               </div>
               <div className="p-4">
                 <div className="flex justify-between items-start mb-1">
                   <h3 className="font-['Inter:Bold'] font-bold text-[16px] text-[#261b17]">Bún Chả Hương Liên</h3>
                   <span className="bg-[#fff8f1] text-[#f05a32] text-[12px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>4.7</span>
                 </div>
                 <p className="text-[#756761] text-[13px]">Lê Văn Hưu · 0,8 km · 45-80K</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
