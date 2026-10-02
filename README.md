## 1 Tổng quan dự án, mục đích:
  * bài toán đặt ra: Nhóm bạn thường mất nhiều thời gian tranh cãi, phân vân không biết ăn gì, ở đâu, đồng thời gặp khó khăn trong việc tính toán và chia tiền sòng phẳng sau bữa ăn.
  * giải pháp: ứng dụng/trang web 'Hôm nay ăn gì' sử dụng cơ chế quẹt thẻ kiểu Tinder(Swiping) đồng bộ thời gian thực (Realtime WebSockets), thuật toán chốt đơn (Matching),có tính năng ghép phòng ngẫu nhiên theo tâm trạng và công cụ chia tiền minh bạch (Bill Splitting với mã QR động)
## 2 Các luồng hoạt động:
  * 1) Định danh & Xã hội:** Đăng nhập nhanh qua Guest Mode; cấp quyền GPS; tìm kiếm và kết bạn, theo dõi trạng thái Online/Offline qua WebSockets.
    2) Khám phá địa điểm:Xem danh sách quán ăn, lọc theo tọa độ GPS ("Gần tôi nhất"), phân khúc giá (`price_range`), hoặc đi ăn một mình .
    3) Phòng chờ hội nhóm:
     **Phòng riêng tư (Private Room): Host tạo phòng nhận `room_code`, mời bạn bè 1-click, mọi người bấm `is_ready` để Host bắt đầu.
     **Ghép phòng ngẫu nhiên: Chọn Tag tâm trạng (ví dụ: "Lẩu sinh viên", "Thèm bia"), đẩy vào hàng đợi  Queue, Background Worker tự động chốt nhóm 2–4 người trùng Tag và tạo phòng tự động.
    4) Quẹt thẻ & Chốt đơn Realtime:
   ** Quẹt thẻ (Thích/Bỏ qua) có Debounce ~300ms chống spam.
   ** Đồng bộ hiệu ứng thả tim thời gian thực qua kênh WebSocket `/topic/room/{room_code}`.
     *Thuật toán chốt đơn: Quán đầu tiên đạt 100% Like sẽ nổ pháo hoa chốt đơn. Nếu hết thẻ mà không đồng thuận (Deadlock), hệ thống fallback chọn quán có nhiều Like nhất.
    5) Tài chính & Chia tiền (Bill Splitting):
    **Cơ chế 1 (Order chi tiết): Nhập menu, mỗi người tự tick món mình ăn, món ăn chung (nồi Lẩu) tự động chia đều cho những người cùng tick.
    **Cơ chế 2 (Nhập tay siêu tốc): Nhập tổng hóa đơn và gõ số tiền từng người; có chặn bấm tiếp tục nếu tổng tiền cá nhân \\(\neq\\) tổng hóa đơn.
    **Thanh toán: Tự động sinh mã VietQR động chứa số tài khoản chủ nợ và số tiền chính xác (`amount_owed`). Cảnh báo nợ đỏ hiển thị ngay màn hình trang chủ nếu `is_paid = false`.

