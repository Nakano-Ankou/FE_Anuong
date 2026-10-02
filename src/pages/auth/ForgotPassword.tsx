import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"

export function ForgotPassword() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate("/auth/reset-password")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-[24px] font-['Inter:Bold'] font-bold text-[#261b17] tracking-tight">Quên mật khẩu</h2>
        <p className="text-[#756761] mt-2 text-[14px]">Nhập email để nhận mã khôi phục</p>
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

        <button
          type="submit"
          className="w-full h-[48px] mt-6 bg-[#f05a32] hover:bg-[#c63d1c] text-white font-['Inter:Bold'] font-bold rounded-[12px] transition-colors"
        >
          Gửi mã OTP
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-[14px] text-[#756761]">
          <Link to="/auth/login" className="font-bold text-[#f05a32] hover:text-[#c63d1c]">
            Quay lại đăng nhập
          </Link>
        </p>
      </div>
    </motion.div>
  )
}
