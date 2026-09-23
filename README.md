# EZVOCA – Free AI-Powered Language Learning Platform

Website chính thức cho EZVOCA – Nền tảng học từ vựng và đọc hiểu tiếng Anh miễn phí 100% bằng AI.

---

## 🚀 Hướng Dẫn Đăng Web Lên Vercel (2 Cách Nhanh Nhất)

### Cách 1: Đăng qua GitHub (Khuyên dùng, tự động cập nhật mỗi khi commit)

1. **Khởi tạo và đẩy code lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Deploy EZVOCA website"
   git branch -M main
   git remote add origin https://github.com/<tên-username-của-bạn>/<tên-repo>.git
   git push -u origin main
   ```

2. **Kết nối với Vercel:**
   - Truy cập vào: [https://vercel.com](https://vercel.com) và đăng nhập (bằng tài khoản GitHub).
   - Nhấn **"Add New..."** -> Chọn **"Project"**.
   - Chọn kho lưu trữ (repository) GitHub bạn vừa tải lên và nhấn **"Import"**.

3. **Cấu hình cài đặt trên Vercel (Hệ thống đã tự nhận diện chuẩn):**
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (để mặc định)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - Nhấn nút **"Deploy"**.

4. 🎉 Chỉ sau **30-45 giây**, Vercel sẽ cấp cho bạn một tên miền miễn phí dạng:  
   `https://ezvoca-web.vercel.app` (hoặc bạn có thể gắn tên miền riêng miễn phí như `.com`, `.vn`, `.app` trong tab *Settings -> Domains*).

---

### Cách 2: Đăng trực tiếp bằng dòng lệnh (Vercel CLI)

Nếu không muốn dùng GitHub, bạn có thể triển khai trực tiếp từ máy tính:

1. **Cài đặt Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Chạy lệnh đăng trang:**
   ```bash
   vercel
   ```
   - Trả lời các câu hỏi:
     - `Set up and deploy?` -> gõ `y`
     - `Which scope?` -> chọn tài khoản của bạn
     - `Link to existing project?` -> gõ `n`
     - `Project name?` -> gõ `ezvoca` (hoặc Enter)
     - `In which directory is your code located?` -> Enter
     - `Want to modify these settings?` -> gõ `n`

3. **Triển khai lên môi trường Production:**
   ```bash
   vercel --prod
   ```
   Trang web của bạn sẽ hoạt động ngay lập tức!

---

## 🛠 Lệnh Phát Triển Cục Bộ (Local Development)

- Cài đặt thư viện: `npm install`
- Chạy môi trường dev: `npm run dev`
- Kiểm tra bản build: `npm run build`
- Chạy bản xem trước: `npm run preview`
