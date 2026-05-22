# Thanakorn Portfolio (React)

พอร์ตโฟลิโอเวอร์ชัน React — แปลงจาก HTML เป็น Single Page Application ด้วย Vite + React + React Router + Tailwind CSS v4

## สิ่งที่ใช้

- **Vite** – build tool
- **React 19** – UI
- **React Router DOM** – routing (/, /project/:id)
- **Tailwind CSS v4** – styling (โหมด dark ใช้ class)
- **Context** – เก็บ state ธีม (dark/light) และภาษา (TH/EN) ใน `AppContext`

## โครงสร้างหลัก

- `src/data/projects.js` – ข้อมูลโปรเจกต์ (boxify, payment, rider)
- `src/data/translations.js` – ข้อความ EN/TH
- `src/context/AppContext.jsx` – Theme + Language
- `src/components/Layout.jsx` – Header, Nav, Footer, Mobile drawer
- `src/pages/HomePage.jsx` – หน้าแรก (Hero, Projects, Skills, Contact)
- `src/pages/ProjectDetailPage.jsx` – หน้ารายละเอียดโปรเจกต์

## คำสั่ง

```bash
npm install
npm run dev    # development (http://localhost:5173)
npm run build  # build สำหรับ production
npm run preview # ดูผล build
```

## Routing

- `/` – หน้าแรก
- `/project/boxify` – โปรเจกต์ BoxiFY E-Commerce
- `/project/payment` – โปรเจกต์ Zero-Fee Payment Gateway
- `/project/rider` – โปรเจกต์ BoxiFY Rider App

ID อื่นนอกจากนี้จะถูก redirect กลับไปที่ `/`
