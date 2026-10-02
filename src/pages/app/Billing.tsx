import { motion } from "framer-motion"

export function Billing() {
  return (
    <div className="flex flex-col gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full font-sans">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-start flex-col md:flex-row gap-4">
        <div>
          <p className="text-[#f05a32] text-[13px] font-['Inter:Bold'] font-bold uppercase tracking-wider">Ví nhóm</p>
          <h1 className="text-[28px] md:text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] leading-tight">Tiền nong rõ ràng, tình bạn lâu dài</h1>
          <p className="text-[#756761] text-[15px]">Theo dõi mọi khoản Minh nợ ai / Ai nợ mình trong một chỗ</p>
        </div>
        <button className="bg-[#f05a32] text-white px-6 py-3 rounded-xl font-bold text-[15px] flex items-center gap-2 hover:bg-[#c63d1c] transition-colors shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Tạo khoản chia
        </button>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white rounded-[24px] p-6 border border-[#eadfd8] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-['Inter:Bold'] font-bold text-[14px] text-[#261b17]">Mình nợ</h3>
            <div className="text-[#f05a32]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></div>
          </div>
          <p className="text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] mb-1">185.000đ</p>
          <p className="text-[#756761] text-[13px]">2 khoản đang chờ chuyển</p>
        </div>
        <div className="flex-1 bg-white rounded-[24px] p-6 border border-[#eadfd8] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-['Inter:Bold'] font-bold text-[14px] text-[#261b17]">Được nhận</h3>
            <div className="text-[#0e7845]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 17H7V7"/><path d="M17 7 7 17"/></svg></div>
          </div>
          <p className="text-[32px] font-['Inter:Bold'] font-bold text-[#261b17] mb-1">342.000đ</p>
          <p className="text-[#756761] text-[13px]">3 người chưa hoàn tất</p>
        </div>
        <div className="flex-1 bg-[#3a2c26] text-white rounded-[24px] p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-['Inter:Bold'] font-bold text-[14px] text-white/80">Chi ăn uống tháng 9</h3>
            <div className="text-yellow-500"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg></div>
          </div>
          <p className="text-[32px] font-['Inter:Bold'] font-bold mb-1">2.480.000đ</p>
          <p className="text-white/60 text-[13px]">↓ 8% so với tháng trước</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white rounded-[32px] p-6 border border-[#eadfd8]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] font-['Inter:Bold'] font-bold text-[#261b17]">Giao dịch gần đây</h2>
            <div className="flex border border-[#eadfd8] rounded-full p-1 bg-[#fff8f1]">
              <button className="px-4 py-1.5 rounded-full text-[13px] font-bold bg-[#ffe0d3] text-[#f05a32]">Tất cả</button>
              <button className="px-4 py-1.5 rounded-full text-[13px] text-[#756761] font-medium">Mình nợ</button>
              <button className="px-4 py-1.5 rounded-full text-[13px] text-[#756761] font-medium">Được nhận</button>
            </div>
          </div>

          <div className="space-y-0">
            {[
              {title: "Lẩu Phan - Hội ăn trưa", desc: "Nợ Nam Minh", amount: "-125.000đ", status: "Chờ chuyển", color: "text-[#f05a32]", statusColor: "text-[#f05a32]"},
              {title: "Bún chả cuối tuần", desc: "Thu Hà nợ bạn", amount: "+82.000đ", status: "Đã chuyển", color: "text-[#261b17]", statusColor: "text-blue-500"},
              {title: "Pizza 4P's - Sinh nhật My", desc: "Quang Duy nợ bạn", amount: "+160.000đ", status: "Đã nhận", color: "text-[#261b17]", statusColor: "text-[#0e7845]"},
              {title: "Cà phê Giảng", desc: "Nợ Mai Ý", amount: "-60.000đ", status: "Đã nhận", color: "text-[#261b17]", statusColor: "text-[#0e7845]"},
              {title: "Bếp Nhà Xứ Quảng", desc: "Nam Minh nợ bạn", amount: "+100.000đ", status: "Chờ chuyển", color: "text-[#261b17]", statusColor: "text-[#f05a32]"}
            ].map((tx, idx) => (
              <div key={idx} className="flex items-center justify-between py-4 border-b border-[#eadfd8] last:border-0">
                <div className="flex items-center gap-4">
                  <div className={`size-12 rounded-[14px] flex items-center justify-center ${tx.amount.startsWith('-') ? 'bg-[#ffe0d3] text-[#f05a32]' : 'bg-[#d3ffe9] text-[#0e7845]'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <div>
                    <p className="font-['Inter:Bold'] font-bold text-[15px] text-[#261b17]">{tx.title}</p>
                    <p className="text-[#756761] text-[13px] mt-0.5">{tx.desc}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-['Inter:Bold'] font-bold text-[15px] ${tx.color}`}>{tx.amount}</p>
                  <p className={`text-[12px] font-bold mt-0.5 ${tx.statusColor}`}>{tx.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 md:max-w-[340px] bg-white rounded-[32px] p-6 border border-[#eadfd8]">
          <h2 className="text-[20px] font-['Inter:Bold'] font-bold text-[#261b17] mb-6">Thanh toán nhanh</h2>
          <div className="bg-[#fff8f1] rounded-[24px] p-4 border border-[#f05a32]/20 mb-6">
             <div className="flex justify-between items-start mb-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-[13px]">NM</div>
                 <div>
                   <p className="text-[12px] text-[#756761]">Chuyển cho</p>
                   <p className="font-['Inter:Bold'] font-bold text-[14px] text-[#261b17]">Nam Minh</p>
                 </div>
               </div>
               <span className="text-[#f05a32] font-bold text-[15px]">125.000đ</span>
             </div>
             
             <div className="bg-white rounded-xl aspect-square flex items-center justify-center border border-[#eadfd8] mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" className="w-2/3 h-2/3" alt="QR" />
             </div>
             
             <div className="flex items-center justify-center gap-2 text-[13px] font-bold text-[#261b17]">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
               MB Bank · •••• 2808
             </div>
          </div>
          
          <button className="w-full bg-[#f05a32] text-white py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#c63d1c] transition-colors flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
            Thanh toán 125.000đ
          </button>
        </div>
      </div>
    </div>
  )
}
