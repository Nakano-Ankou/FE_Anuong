import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Verify() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (otp === "123456") {
      navigate("/app")
    } else {
      alert("Mã OTP không đúng! Vui lòng nhập 123456")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center mb-8">
        <h2 className="text-[24px] font-['Inter:Bold'] font-bold text-[#261b17] tracking-tight">Xác thực Email</h2>
        <p className="text-[#756761] mt-2 text-[14px]">Nhập mã 6 số được gửi đến email của bạn</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          Xác thực
        </button>
      </form>
    </motion.div>
  )
}
