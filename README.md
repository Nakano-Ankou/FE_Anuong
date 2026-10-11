# REAME_11/10
Xây dựng trang Web với sự hỗ trợ của AI Agent
## 1. Công nghệ sử dụng-Tech Stack

- 🌐 **Frontend**: Sử dụng React kết hợp TypeScript và Vite[cite: 1].
- 🎨 **UI/UX**: Dùng Tailwind CSS để chia layout và framer-motion cho hiệu ứng quẹt thẻ[cite: 1].
- ⚙️ **Backend**: Viết bằng Java Spring Boot theo kiến trúc phân lớp (Controller - Service - Repository)[cite: 1].
- 🗄️ **Database**: Dùng PostgreSQL kết hợp Spring Data JPA (Hibernate)[cite: 1].
- ⚡ **Realtime**: Dùng Spring WebSocket và STOMP để đồng bộ phòng và lượt quẹt thẻ[cite: 1].

## 2. Các Module cốt lõi

- 👤 **Module 1**: Quản lý người dùng, hỗ trợ Guest Mode để lưu local/session[cite: 1].
- 🏠 **Module 2**: Quản lý phòng, đồng bộ trạng thái vào/ra và ready theo thời gian thực[cite: 1].
- 🃏 **Module 3**: Danh sách địa điểm và cơ chế quẹt thẻ giới hạn tần suất (Debounce)[cite: 1].
- 💰 **Module 4**: Quản lý hóa đơn và tự động chia đều tiền hoặc chỉnh tay[cite: 1].

## 3.Các tính năng bổ sung

Sau khi hoàn thiện 4 module cốt lõi, tiếp tục giao cho AI Agent thực thi các tính năng nâng cao sau để hoàn thiện hệ sinh thái:

- 🔗 **Tích hợp Thanh toán QR**: Yêu cầu AI gọi API của các dịch vụ (như VietQR) dựa trên bảng `expense_splits` và `total_amount` để tạo mã QR động, giúp người dùng quét và chuyển khoản chính xác số tiền nợ (amount_owed)[cite: 3].
- 🎛️ **Bộ lọc Phòng (Advanced Room Filters)**: Bảo AI thêm bảng `room_settings` để host cài đặt rule (ví dụ: chỉ hiện quán chay, giá dưới 50k). Logic này sẽ can thiệp vào truy vấn tìm quán ăn ở Backend trước khi đẩy danh sách thẻ cho người dùng quẹt[cite: 3].
- 🧠 **Hệ thống AI Đề xuất (Recommendation Engine)**: Yêu cầu AI sử dụng thuật toán Lọc cộng tác (Collaborative Filtering) để phân tích dữ liệu từ bảng `swipes`, qua đó xếp các thẻ món ăn hợp "gu" lên đầu thay vì hiển thị ngẫu nhiên[cite: 3].
- 🏆 **Đánh giá & Xếp hạng**: Thêm bảng `reviews` liên kết với `places`. Người dùng có thể đánh giá quán sau khi ăn xong, giúp bộ lọc danh sách địa điểm có thêm tiêu chí sắp xếp theo Rating[cite: 3].
- 🤝 **Hệ thống Kết bạn & Trạng thái**: Tận dụng luồng WebSockets hiện có, yêu cầu AI viết tính năng theo dõi trạng thái Online/Offline (chấm xanh) và bắn Pop-up mời bạn bè vào phòng (One-click Invite)[cite: 3].
- 🎲 **Ghép phòng ngẫu nhiên (Tag-based Matchmaking)**: Yêu cầu AI cấu hình Redis trên Spring Boot để lưu hàng đợi (Queue) người dùng đang chọn Tag tâm trạng (ví dụ: "Thèm bia")[cite: 3]. Phải dặn rõ AI: _"Tuyệt đối không dùng PostgreSQL để lưu Queue tránh sập server. Hãy viết một Background Worker quét Redis liên tục để ghép 2-4 người rảnh rỗi vào chung một phòng"_[cite: 3].

## 4. Prompt cho AI theo luồng hoạt động

- **Luồng WebSockets (Core Swiping):** Đưa cho AI cấu trúc 4 bước:
  1. Frontend dùng hook `useSocket.ts` bắn STOMP Message (chuỗi JSON chứa user_id, place_id, is_like)[cite: 3].
  2. Backend dùng `@MessageMapping` bắt bản tin và lưu vào bảng `swipes`[cite: 3].
  3. Backend đếm số lượt Like; nếu đủ 100%, phát sóng (broadcast) bản tin chốt đơn[cite: 3].
  4. Frontend nhận bản tin và kích hoạt hiệu ứng (như tim bay hoặc pháo hoa rơi xuống ở component `MatchResult.tsx`)[cite: 3].
- **Chống Spam API:** Nhấn mạnh với AI: _"Hãy bọc hàm xử lý sự kiện vuốt thẻ bằng custom hook `useDebounce` để trì hoãn ~300ms, tránh người dùng quẹt quá nhanh làm sập Backend"_[cite: 3].
- **Luồng Tài chính (Billing Flow):** Yêu cầu AI code 2 cơ chế: "Order chi tiết theo món" (tự động chia tiền món chung) và "Nhập tay siêu tốc"[cite: 3]. Bắt buộc AI áp dụng **Smart Validation**: Nút "Tiếp tục" chỉ sáng lên khi tổng tiền các cá nhân nhập vào khớp chính xác với tổng hóa đơn quán để chống thất thoát quỹ[cite: 3].

## 5. Kiểm thử  & Xử lý lỗi 

- **Xử lý Race Condition:** Trong trường hợp nhiều user quẹt Like cùng lúc trong một phần nghìn giây, đếm Like bị sai lệch. Hãy copy log đưa cho AI và yêu cầu: _"Hãy sử dụng cơ chế Khóa (Pessimistic Locking trong Spring Data JPA) hoặc Redis Distributed Lock cho hàm kiểm tra Match để hệ thống chạy ổn định"_[cite: 3].
- **Debug tự động:** Khi gặp lỗi biên dịch ở Java hoặc màn hình đỏ ở React, hãy copy Error Stack Trace dán vào khung chat của Cursor hoặc Copilot kèm lệnh: _"Phân tích lỗi này và sửa giúp tôi ở các file liên quan"_.
- **Unit Test:** Ra lệnh cho AI viết test case cho `BillSplitService.java` để chắc chắn thuật toán chia tiền luôn hoạt động đúng trong mọi tình huống lẻ tiền.

## 6. Triển khai 

- **Đóng gói mã nguồn:** Dùng Claude Code hoặc Cursor yêu cầu: _"Hãy viết Dockerfile để đóng gói dự án Java Spring Boot này, và cấu hình file vercel.json để chuẩn bị deploy dự án Vite React"_.
- **Cấu hình môi trường:** Yêu cầu AI liệt kê danh sách các biến môi trường cần thiết (VD: chuỗi kết nối PostgreSQL, JWT Secret, cấu hình Redis).
- **Go Live:** Đẩy code lên GitHub và kết nối Frontend với Vercel, Backend với Render/Railway. Nếu có lỗi lúc deploy, đưa log từ server cho AI để fix cấu hình tự động.
