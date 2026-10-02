import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

export function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/app")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-[24px] font-['Inter:Bold'] font-bold text-[#261b17] tracking-tight">Chào mừng trở lại</h2>
        <p className="text-[#756761] mt-2 text-[14px]">Đăng nhập để cùng nhóm chọn quán ăn</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-[14px] font-['Inter:Bold'] font-bold text-[#261b17]">Mật khẩu</label>
            <Link to="/auth/forgot-password" className="text-[14px] font-medium text-[#f05a32] hover:text-[#c63d1c]">Quên mật khẩu?</Link>
          </div>
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
          Đăng nhập
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-[14px] text-[#756761]">
          Chưa có tài khoản?{" "}
          <Link to="/auth/signup" className="font-bold text-[#f05a32] hover:text-[#c63d1c]">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </motion.div>
  )
}
