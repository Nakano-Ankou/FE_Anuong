import { motion } from "framer-motion"

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fff8f1] flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white border border-[#eadfd8] rounded-[24px] p-8 shadow-sm">
        <div className="flex justify-center mb-8">
          <div className="bg-[#f05a32] flex items-center justify-center rounded-[16px] size-[48px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
