# 🤖 SYSTEM PROMPT & PROJECT CONTEXT: FE PROJECT "HÔM NAY ĂN GÌ?"

**Mục tiêu của AI:** Bạn là một Senior Frontend Engineer (React/TypeScript). Nhiệm vụ của bạn là dựa vào tài liệu này để xây dựng toàn bộ ứng dụng Frontend cho dự án "Hôm Nay Ăn Gì?" (What To Eat Today) - một ứng dụng mạng xã hội ẩm thực realtime (Tinder-like). 

Tài liệu này chứa toàn bộ cơ chế, luồng hoạt động, cấu trúc dữ liệu (từ DB truyền xuống FE) và kiến trúc thư mục. **Hãy đọc kỹ trước khi viết bất kỳ dòng code nào.**

---

## 🛠️ 1. TECH STACK BẮT BUỘC (FRONTEND)
*   **Core:** React 18, TypeScript, Vite.
*   **Styling:** Tailwind CSS.
*   **Animation:** `framer-motion` (Bắt buộc dùng cho UI quẹt thẻ, tim bay, pháo hoa chốt đơn).
*   **Realtime:** `@stomp/stompjs` và `sockjs-client` (Giao tiếp với Spring Boot WebSockets).
*   **State Management:** `Zustand` (Ưu tiên) hoặc Redux Toolkit.
*   **API Client:** `axios`.
*   **Routing:** `react-router-dom` v6.

---

## ⚙️ 2. CÁC CƠ CHẾ & LUỒNG HOẠT ĐỘNG CỐT LÕI (WORKFLOWS)

Ứng dụng chia làm 6 luồng FE cần xử lý:

1.  **Account & Social Flow:** 
    *   FE xử lý Đăng nhập (Guest/Google). Lưu JWT Token.
    *   Bật Pop-up xin quyền GPS của trình duyệt/thiết bị ngay sau khi login.
    *   Gửi STOMP message báo trạng thái Online. Hiển thị danh sách bạn bè (Chấm xanh = Online).
2.  **Personal Flow (Khám phá):** 
    *   Fetch API list `places` kèm tọa độ GPS để hiển thị quán gần nhất.
    *   Kiểm tra trạng thái nợ (API check `expense_splits` có `is_paid=false`), nếu có nợ, nháy đỏ Widget nhắc nợ ở màn hình Home.
3.  **Room & Matchmaking Flow (Ghép phòng):**
    *   **Chủ động:** FE gọi API tạo phòng -> Lấy `room_code` -> Chuyển sang `/room/:room_code`. Từ Lobby, gọi WebSocket bắn thông báo mời bạn bè đang Online.
    *   **Ngẫu nhiên (Radar):** User chọn Tag (Lẩu, Nướng) -> FE gọi API đưa vào Redis Queue -> Hiển thị Radar (Lottie Animation) -> Lắng nghe STOMP, khi BE báo Match -> Tự động redirect sang màn hình phòng.
4.  **Core Swiping Flow (Quẹt thẻ Realtime - CỰC KỲ QUAN TRỌNG):**
    *   Dùng `framer-motion` bọc component thẻ quán ăn.
    *   Vuốt phải (Like) / Vuốt trái (Pass). FE phải có **Debounce (~300ms)** trước khi gửi STOMP message chống spam.
    *   Bắt sự kiện STOMP trả về: Nếu ai đó vuốt phải -> Render animation thả tim bay lên.
    *   Bắt sự kiện MATCH: BE trả về tín hiệu đủ 100% Like -> Unmount Swiping Deck -> Render hiệu ứng pháo hoa + Hiển thị chốt quán.
5.  **Billing Flow (Chia tiền):**
    *   **Cơ chế 1 (Chi tiết):** FE render form nhập món. Member click checkbox nhận món. Món chung FE tự lấy giá chia cho số lượng người check.
    *   **Cơ chế 2 (Nhập tay siêu tốc):** FE render list input cho từng member. Phải có **Smart Validation**: `Sum(amount_owed) === total_amount_bill`. Không bằng thì disable nút Submit.
    *   **Thanh toán:** Gọi API gen VietQR -> Hiển thị Modal quét mã.

---

## 📡 3. CƠ CHẾ WEBSOCKETS (STOMP) CẦN NẮM RÕ

Tất cả thao tác trong phòng đều dùng WebSockets. Dưới đây là quy ước Data từ BE trả về:

*   **Kết nối:** `ws://[BACKEND_URL]/ws`
*   **Subscribe Channel (Lắng nghe):** `/topic/room/{room_code}`
*   **Send Message (Gửi đi):** `/app/room/{room_code}/swipe`

**Payload Frontend gửi lên khi vuốt thẻ:**
```json
{ "user_id": "uuid", "place_id": "uuid", "is_like": true }
```

**Payload Frontend nhận được từ Channel (Ví dụ):**
```json
// Sự kiện có người vừa Like
{ "type": "SWIPE_ACTION", "user_id": "uuid", "is_like": true }

// Sự kiện Chốt đơn thành công
{ "type": "MATCH_FOUND", "matched_place_id": "uuid" }
```

---

## 🗄️ 4. DATA MODELS (TYPESCRIPT INTERFACES) MAPPED TỪ DATABASE

Để FE dễ dàng xử lý, dưới đây là các TypeScript Interfaces tương ứng với dữ liệu JSON mà API Backend (PostgreSQL) sẽ trả về.

```typescript
// --- IDENTITY & SOCIAL ---
export interface User {
  id: string; // UUID
  username: string;
  email?: string;
  avatar_url?: string;
  status: 'ACTIVE' | 'BANNED' | 'SUSPENDED';
}

// --- PLACES ---
export interface Place {
  id: string; // UUID
  name: string;
  category: string;
  price_range: 1 | 2 | 3;
  image_url: string;
  address: string;
  latitude: number;
  longitude: number;
}

// --- ROOM & SWIPING ---
export interface Room {
  id: string; // UUID
  room_code: string;
  host_id: string;
  status: 'OPEN' | 'SWIPING' | 'CLOSED';
  matched_place_id?: string;
}

export interface RoomMember {
  room_id: string;
  user_id: string;
  is_ready: boolean;
  user_info?: User; // BE thường join bảng trả về
}

// --- BILLING (CHIA TIỀN) ---
export interface ExpenseSplit {
  expense_id: string;
  user_id: string;
  amount_owed: number;
  is_paid: boolean;
  user_info?: User;
}
```

---

## 📂 5. KIẾN TRÚC FRONTEND & TRÁCH NHIỆM COMPONENTS (FEATURE-BASED)

FE áp dụng kiến trúc Feature-based chia nhỏ logic. Khi yêu cầu code, hãy bám sát cấu trúc thư mục sau:

### `src/features/` (Smart Components)
Khu vực này chứa logic nghiệp vụ cốt lõi, gọi hooks và store.

1.  **`auth/` (Xác thực & Vị trí)**
    *   `LoginForm.tsx`: Xử lý form, gọi API login, lưu JWT.
    *   `LocationPrompt.tsx`: Modal pop-up yêu cầu quyền GPS (`navigator.geolocation.getCurrentPosition`).
2.  **`social/` (Xã hội)**
    *   `FriendList.tsx`: Hiển thị bạn bè, parse trạng thái Online từ WebSockets để hiện chấm xanh.
    *   `InvitePopup.tsx`: Portal modal hiện lên khi nhận được bản tin STOMP mời vào phòng.
3.  **`matchmaking/` (Ghép phòng ngẫu nhiên)**
    *   `TagSelector.tsx`: Component chọn các Chip tags (Lẩu, Nướng...).
    *   `RadarQueue.tsx`: Hiển thị animation Radar đang dò tìm. Lắng nghe socket chờ tín hiệu "MATCHED" để auto-redirect.
4.  **`room/` (Quản lý phòng chờ)**
    *   `RoomLobby.tsx`: View chính chứa danh sách thành viên, nút "Mời bạn bè".
    *   `MemberGrid.tsx`: Hiển thị Avatar member. Nếu `is_ready === true` thì viền xanh lá, chưa thì viền xám.
5.  **`swipe/` (Quẹt thẻ - Trái tim của App)**
    *   `SwipeDeck.tsx`: Container kiểm soát mảng dữ liệu `Place[]` còn lại chưa quẹt. Lắng nghe socket.
    *   `FramerCard.tsx`: Dùng `framer-motion` `useAnimation`, `PanInfo`. Kéo X > 100px trigger Vuốt phải, kéo X < -100px trigger Vuốt trái. Áp dụng hook `useDebounce`.
    *   `MatchResult.tsx`: Màn hình pháo hoa chúc mừng khi chốt quán thành công.
6.  **`billing/` (Chia tiền)**
    *   `ItemizedOrder.tsx`: Form cho Cơ chế 1. Checkbox liên kết với mảng món ăn chung. Tính toán chia đều động.
    *   `ManualSplit.tsx`: Form cho Cơ chế 2. Có hàm validate `sum(inputs) === totalBill`.
    *   `DebtWidget.tsx`: Widget nổi ngoài HomePage, fetch `is_paid = false` để cảnh báo số nợ phải trả.

### `src/hooks/` (Logic trừu tượng hóa)
*   `useSocket.ts`: Init kết nối STOMP. Export các hàm `sendMessage`, `subscribeToRoom`, và event listeners.
*   `useGeolocation.ts`: Xin quyền và track vĩ độ, kinh độ người dùng.
*   `useDebounce.ts`: `setTimeout` chống spam vuốt thẻ.

### `src/pages/` (Trang chính lắp ghép Features)
*   `HomePage.tsx`: Chứa Banner, `DebtWidget`, `FriendList`, Nút "Tạo phòng", Nút "Ăn 1 mình".
*   `ExplorePage.tsx`: Chứa list thẻ quán ăn, có thanh filter GPS.
*   `RoomProcessPage.tsx`: Master page của phòng. Nhận URL Params `/:roomCode`. Chứa logic switch màn hình: `Lobby` -> `SwipeDeck` -> `MatchResult`.
*   `BillingPage.tsx`: Màn hình chốt hóa đơn.

### `src/store/` (State Management - Zustand)
*   `userStore.ts`: Lưu thông tin cá nhân `User`, trạng thái đăng nhập, tọa độ GPS hiện tại.
*   `roomStore.ts`: Lưu `room_code`, danh sách `members` hiện tại trong phòng, cờ `hasMatched`.

---
**⚠️️ Lời nhắn cho AI:** Khi tôi yêu cầu "Hãy code tính năng X", hãy dựa vào cấu trúc và dữ liệu trong file này để đưa ra các đoạn code React + TypeScript + Tailwind chính xác nhất. Không tự bịa ra cấu trúc thư mục khác.