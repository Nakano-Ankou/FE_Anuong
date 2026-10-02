import { Link } from "react-router-dom"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="text-2xl">🍜</span>
            <span className="text-lg">Hôm nay ăn gì</span>
          </Link>
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link
              to="/login"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Đăng nhập
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity text-sm font-semibold"
            >
              Đăng ký
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Hôm nay ăn gì. Made with 🧡 tại Việt Nam.</p>
      </footer>
    </div>
  )
}
