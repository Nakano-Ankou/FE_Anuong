import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "./components/Layout"
import { AuthLayout } from "./pages/auth/Layout"
import { InternalLayout } from "./components/app/InternalLayout"
import { Home } from "./pages/Home"
import { Login } from "./pages/auth/Login"
import { Signup } from "./pages/auth/Signup"
import { Verify } from "./pages/auth/Verify"
import { ForgotPassword } from "./pages/auth/ForgotPassword"
import { ResetPassword } from "./pages/auth/ResetPassword"

import { Dashboard } from "./pages/app/Dashboard"
import { Explore } from "./pages/app/Explore"
import { Friends } from "./pages/app/Friends"
import { Billing } from "./pages/app/Billing"
import { Profile } from "./pages/app/Profile"

import { RoomHome } from "./pages/app/room/RoomHome"
import { Join } from "./pages/app/room/Join"
import { Match } from "./pages/app/room/Match"
import { Lobby } from "./pages/app/room/Lobby"
import { Swipe } from "./pages/app/room/Swipe"
import { Summary } from "./pages/app/room/Summary"

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/signup" element={<AuthLayout><Signup /></AuthLayout>} />
        <Route path="/verify" element={<AuthLayout><Verify /></AuthLayout>} />
        <Route path="/forgot-password" element={<AuthLayout><ForgotPassword /></AuthLayout>} />
        <Route path="/reset-password" element={<AuthLayout><ResetPassword /></AuthLayout>} />

        {/* Internal App Routes */}
        <Route path="/app" element={<InternalLayout><Dashboard /></InternalLayout>} />
        <Route path="/app/explore" element={<InternalLayout><Explore /></InternalLayout>} />
        <Route path="/app/friends" element={<InternalLayout><Friends /></InternalLayout>} />
        <Route path="/app/billing" element={<InternalLayout><Billing /></InternalLayout>} />
        <Route path="/app/profile" element={<InternalLayout><Profile /></InternalLayout>} />
        
        {/* Room Routes */}
        <Route path="/app/room" element={<InternalLayout><RoomHome /></InternalLayout>} />
        <Route path="/app/room/join" element={<InternalLayout><Join /></InternalLayout>} />
        <Route path="/app/room/match" element={<InternalLayout><Match /></InternalLayout>} />
        <Route path="/app/room/:id/lobby" element={<InternalLayout><Lobby /></InternalLayout>} />
        <Route path="/app/room/:id/swipe" element={<InternalLayout><Swipe /></InternalLayout>} />
        <Route path="/app/room/:id/summary" element={<InternalLayout><Summary /></InternalLayout>} />
      </Routes>
    </Router>
  )
}

export default App
