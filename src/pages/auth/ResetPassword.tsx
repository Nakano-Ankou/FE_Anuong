import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function ResetPassword() {
  const navigate = useNavigate()
  const [step, setStep] = useState<"otp" | "password">("otp")
  const [otp, setOtp] = useState("")

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp === "123456") {
      setStep("password")
    } else {
      alert("Mã OTP không đúng! Vui lòng nhập 123456")
    }
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Đổi mật khẩu thành công!")
    navigate("/auth/login")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-[24px] font-['Inter:Bold'] font-bold text-[#261b17] tracking-tight">
          {step === "otp" ? "Nhập mã khôi phục" : "Mật khẩu mới"}
        </h2>
        <p className="text-[#756761] mt-2 text-[14px]">
          {step === "otp" ? "Nhập mã 6 số được gửi đến email" : "Tạo mật khẩu mới cho tài khoản của bạn"}
        </p>
      </div>

      {step === "otp" ? (
        <form onSubmit={handleVerifyOtp} className="space-y-4">
          <div>
            <label className="block text-[14px] font-['Inter:Bold'] font-bold text-[#261b17] mb-1.5">Mã OTP (Nhập 123456)</label>
            <input
              type="text"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="123456"
              className="w-full h-[48px] px-4 rounded-[12px] border border-[#eadfd8] bg-[#fff8f1] focus:outline-none focus:border-[#f05a32] focus:ring-1 focus:ring-[#f05a32] transition-colors text-center text-xl tracking-[0.5em]"
              maxLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full h-[48px] mt-6 bg-[#f05a32] hover:bg-[#c63d1c] text-white font-['Inter:Bold'] font-bold rounded-[12px] transition-colors"
          >
            Tiếp tục
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label className="block text-[14px] font-['Inter:Bold'] font-bold text-[#261b17] mb-1.5">Mật khẩu mới</label>
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
            Lưu mật khẩu
          </button>
        </form>
      )}
    </motion.div>
  )
}
