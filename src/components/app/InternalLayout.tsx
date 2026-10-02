import { Link, useLocation, useNavigate } from "react-router-dom"
import { Settings } from "lucide-react"

const navItems = [
  { name: "Trang chủ", path: "/app", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: "Khám phá", path: "/app/explore", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg> },
  { name: "Hội ăn", path: "/app/friends", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { name: "Tài chính", path: "/app/billing", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
]

export function InternalLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) =>
    path === "/app" ? location.pathname === "/app" : location.pathname.startsWith(path)

  return (
    <div className="flex h-screen bg-[#fff8f1] overflow-hidden flex-col md:flex-row font-sans">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-[220px] bg-white border-r border-[#eadfd8] flex-col h-full shrink-0 py-7 px-5">
        <Link to="/app" className="flex items-center gap-2 mb-8">
          <div className="bg-[#f05a32] flex items-center justify-center rounded-[12px] size-[38px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
          </div>
          <span className="font-['Inter:Extra_Bold'] font-extrabold text-[18px] text-[#261b17] tracking-tight">Hôm nay ăn gì</span>
        </Link>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-[16px] transition-colors font-bold text-[14px] ${
                  active
                    ? "bg-[#ffe0d3] text-[#c63d1c]"
                    : "bg-white text-[#756761] hover:bg-gray-50"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            )
          })}
        </nav>
        
        {/* Keep the Kéo hội đi ăn section */}
        <div className="bg-[#3a2c26] text-white rounded-2xl p-4 mb-4">
           <h3 className="font-bold text-[14px] mb-1">Kéo hội đi ăn 🍜</h3>
           <p className="text-[12px] text-white/70">Mời bạn bè online và chốt quán trong vài phút.</p>
        </div>

        {/* User Info / Profile / Settings (kept logout concept) */}
        <div className="pt-4 border-t border-[#eadfd8] mt-auto">
          <div className="flex flex-col gap-4">
            <Link to="/app/profile" className="flex items-center gap-3 w-full p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="bg-[#a855f7] size-8 rounded-full flex items-center justify-center text-white font-bold text-[12px] shrink-0">LA</div>
              <div className="flex-1 text-left min-w-0">
                <p className="font-bold text-[13px] text-[#261b17] truncate">Linh Anh</p>
                <p className="text-[#756761] text-[11px] truncate">Tín đồ ăn ngon</p>
              </div>
              <Settings className="w-4 h-4 text-gray-400" />
            </Link>
            
            {/* Added back explicit logout button keeping requirement in mind */}
            <button onClick={() => navigate('/login')} className="flex items-center gap-3 text-red-500 font-bold text-[14px] p-2 hover:bg-red-50 rounded-xl transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Đăng xuất
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-full relative">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden border-t border-[#eadfd8] bg-white pb-safe pt-2 px-6 flex justify-between items-center shrink-0 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {navItems.map((item) => {
          const active = isActive(item.path)
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 p-2 ${
                active ? "text-[#f05a32]" : "text-[#756761]"
              }`}
            >
              <div className={active ? "bg-[#ffe0d3] p-1.5 rounded-xl" : "p-1.5"}>
                {item.icon}
              </div>
              <span className="text-[10px] font-bold">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
