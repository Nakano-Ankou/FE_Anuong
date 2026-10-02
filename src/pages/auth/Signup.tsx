import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

export function Signup() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/auth/verify")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-[24px] font-['Inter:Bold'] font-bold text-[#261b17] tracking-tight">Tạo tài khoản mới</h2>
        <p className="text-[#756761] mt-2 text-[14px]">Tham gia hội sành ăn ngay hôm nay</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[14px] font-['Inter:Bold'] font-bold text-[#261b17] mb-1.5">Tên hiển thị</label>
          <input
            type="text"
            required
            placeholder="VD: Linh Anh"
            className="w-full h-[48px] px-4 rounded-[12px] border border-[#eadfd8] bg-[#fff8f1] focus:outline-none focus:border-[#f05a32] focus:ring-1 focus:ring-[#f05a32] transition-colors"
          />
        </div>
        
        <div>
          <label className="block text-[14px] font-['Inter:Bold'] font-bold text-[#261b17] mb-1.5">Email</label>
          <input
            type="email"
            required
            placeholder="nhapemail@example.com"
            className="w-full h-[48px] px-4 rounded-[12px] border border-[#eadfd8] bg-[#fff8f1] focus:outline-none focus:border-[#f05a32] focus:ring-1 focus:ring-[#f05a32] transition-colors"
          />
        </div>

        <div>
          <label className="block text-[14px] font-['Inter:Bold'] font-bold text-[#261b17] mb-1.5">Mật khẩu</label>
          <input
            type="password"
            required
            placeholder="••••••••"
            className="w-full h-[48px] px-4 rounded-[12px] border border-[#eadfd8] bg-[#fff8f1] focus:outline-none focus:border-[#f05a32] focus:ring-1 focus:ring-[#f05a32] transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full h-[48px] mt-6 bg-[#f05a32] hover:bg-[#c63d1c] text-white font-['Inter:Bold'] font-bold rounded-[12px] transition-colors"
        >
          Đăng ký
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-[14px] text-[#756761]">
          Đã có tài khoản?{" "}
          <Link to="/auth/login" className="font-bold text-[#f05a32] hover:text-[#c63d1c]">
            Đăng nhập
          </Link>
        </p>
      </div>
    </motion.div>
  )
}
