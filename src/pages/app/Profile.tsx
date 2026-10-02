import { InternalLayout } from "../../components/app/InternalLayout"

export function Profile() {
  return (
    <div className="flex flex-col gap-6 md:p-8 p-4 bg-[#fff8f1] min-h-full">
      <div className="flex items-center gap-4">
        <div className="bg-[#a855f7] flex items-center justify-center rounded-full size-20 text-white font-['Inter:Bold'] font-bold text-2xl">
          LA
        </div>
        <div>
          <h1 className="text-2xl font-['Inter:Bold'] font-bold text-[#261b17]">Linh Anh</h1>
          <p className="text-[#756761] text-[15px]">Tín đồ ăn ngon</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#eadfd8] mt-4">
        <h2 className="text-[18px] font-['Inter:Bold'] font-bold text-[#261b17] mb-4">Thông tin cá nhân</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-[13px] font-['Inter:Bold'] font-bold text-[#756761] mb-1">Email</label>
            <p className="text-[15px] text-[#261b17] font-medium">linhanh@example.com</p>
          </div>
          <div>
            <label className="block text-[13px] font-['Inter:Bold'] font-bold text-[#756761] mb-1">Số điện thoại</label>
            <p className="text-[15px] text-[#261b17] font-medium">+84 123 456 789</p>
          </div>
          <div>
            <label className="block text-[13px] font-['Inter:Bold'] font-bold text-[#756761] mb-1">Ngày tham gia</label>
            <p className="text-[15px] text-[#261b17] font-medium">29 Tháng 9, 2026</p>
          </div>
        </div>

        <button className="mt-8 bg-[#fff8f1] text-[#f05a32] border border-[#f05a32] font-bold py-2.5 px-4 rounded-xl text-[14px] hover:bg-[#ffe0d3] transition-colors">
          Chỉnh sửa hồ sơ
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-[#eadfd8]">
        <h2 className="text-[18px] font-['Inter:Bold'] font-bold text-[#261b17] mb-4">Bảo mật</h2>
        <button className="text-[#261b17] font-medium py-2.5 rounded-xl text-[15px] flex items-center justify-between w-full hover:bg-gray-50 px-3 -mx-3 transition-colors">
          Đổi mật khẩu
          <span className="text-gray-400">→</span>
        </button>
        <div className="h-[1px] bg-[#eadfd8] my-2"></div>
        <button className="text-red-500 font-medium py-2.5 rounded-xl text-[15px] flex items-center justify-between w-full hover:bg-red-50 px-3 -mx-3 transition-colors">
          Đăng xuất
          <span className="text-gray-400">→</span>
        </button>
      </div>
    </div>
  )
}
