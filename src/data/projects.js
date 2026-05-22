export const projectsData = {
  boxify: {
    id: 'boxify',
    category: 'Full-stack Web Application',
    title: 'BoxiFY',
    liveDemoUrl: 'https://project-ecom-web-ten.vercel.app/',
    codeUrl: 'https://github.com/rbac6353/Project_ecom_web',
    img: 'https://i.ibb.co/MxMdW3W1/Screenshot-2026-05-22-233040.png',
    desc: 'ระบบ E-commerce ครบวงจร (เว็บหลัก + Zero-Fee Payment Gateway + BoxiFY Rider App) รองรับ 4 บทบาท: ลูกค้า/ร้าน/ไรเดอร์/แอดมิน — สั่งซื้อ, ชำระเงิน QR PromptPay/สลิป/SMS Webhook, Logistics ไรเดอร์ (เว็บ + แอป React Native), คืนสินค้าและ Dispute, แดชบอร์ดแอดมิน, Wallet, คูปอง, รีวิว ใช้ Socket.IO Realtime และ JWT',
    tags: ['React 18', 'Express 5', 'Prisma 6', 'MySQL', 'Socket.IO', 'Webhooks', 'ngrok', 'React Native', 'Expo', 'JWT', 'Passport', 'Cloudinary', 'PromptPay QR', 'Tailwind CSS'],
    features: [
      '4 บทบาท (User/Seller/Courier/Admin): ลูกค้า—สั่งซื้อ/ตะกร้า/ชำระเงิน/ติดตามออเดอร์/ขอคืนสินค้า/Wallet; ร้าน—จัดการร้าน/สินค้า/ออเดอร์/กระเป๋าร้าน/คำขอคืนและ Dispute; ไรเดอร์—รับงานจัดส่งและรับของคืน; แอดมิน—อนุมัติร้าน, จัดการผู้ใช้/สินค้า/หมวดหมู่/แบนเนอร์/ออเดอร์/ข้อพิพาท/Analytics',
      'Zero-Fee Payment Gateway (รวมในระบบ): SMS Webhook (POST /api/payments/webhook/sms) ดักจับ SMS แจ้งเงินเข้า → จับคู่ออเดอร์ → อัปเดตสถานะ + ส่ง Socket.IO; Dynamic Decimal QR (เศษสตางค์เป็น Unique ID); COD, บัตร (mock), QR PromptPay, อัปโหลดสลิป; ใช้ ngrok สำหรับ Webhook จากภายนอก',
      'การชำระเงิน & Logistics: OrderStatus (PENDING→…→COMPLETED), Shipment 1:1 กับ Order; ไรเดอร์ available-jobs → assign → pickup → out-for-delivery → complete (proofImage), ลูกค้า confirm-received; ReturnPickup สำหรับการรับของคืน',
      'BoxiFY Rider App (แอป React Native/Expo): งานเด้ง Real-time, รับงานจัดส่งและรับของคืน (Reverse Logistics), Step-by-step wizard, อัปโหลดรูป Proof of Delivery, จัดการ State/Cache ให้ลื่นแม้เน็ตไม่เสถียร',
      'การคืนสินค้า/คืนเงิน: เงื่อนไข DELIVERED/COMPLETED ภายใน 7 วัน, refundStatus flow, ร้าน return-call-rider/return-approve/return-dispute, แอดมิน Dispute Management, คืนเงินเข้า Wallet และคืนสต็อกอัตโนมัติ',
      'Frontend: React 18 (เว็บ), React Native + Expo (Rider); React Router 6, Axios, Tailwind, Socket.IO Client, React Toastify, Motion, Chart.js, qrcode.react, JWT Decode, Passport Google/Facebook; Backend: Express 5, Prisma 6, MySQL, Multer, Cloudinary, @google/generative-ai (AI ถามคำถามสินค้า)',
    ],
    challenge:
      'ความท้าทายคือการออกแบบ E-commerce ครบวงจรที่รองรับหลายบทบาทและ flow ที่ซับซ้อน (Order → Payment → Shipment → Return/Dispute) ใน stack เดียว (React SPA + Express REST + Socket.IO) ผมใช้ Prisma Schema ออกแบบ Enums (OrderStatus, ShipmentStatus, refundStatus) และความสัมพันธ์ระหว่าง Order, Shipment, Payment, OrderReturn, ReturnPickup ให้ชัดเจน ใช้ Prisma Transaction ในจุดที่ต้องคงความสอดคล้องของข้อมูล (เช่น สร้างออเดอร์+หักสต็อก, อนุมัติคืนเงิน+คืนสต็อก) และใช้ Socket.IO ส่ง event order_status_updated / payment ให้ลูกค้าเห็นสถานะแบบ Real-time โดยไม่ต้อง Refresh',
  },
  gtxshop: {
    id: 'gtxshop',
    category: 'Full-Stack E-Commerce',
    title: 'Ecom App',
    liveDemoUrl: 'https://project-ecom-app.vercel.app',
    codeUrl: 'https://github.com/rbac6353/Project_ecom_App',
    img: 'https://i.ibb.co/dJPhr8LM/Screenshot-2026-05-22-235811.png',
    desc: 'แอป E-Commerce Full-Stack: Backend NestJS 11 + TypeScript + MySQL (TypeORM), Frontend React Native (Expo ~54) + React 19 + React Navigation v7, AI Service Python FastAPI (Visual Search ด้วย MobileNetV3). สถานะ: Core พร้อมใช้งาน — Cart, Order, Payment (โอน+สลิป+PromptPay), Tracking, Refund/Return (Auto Restock), Flash Sale, Wallet/Withdrawal, Seller Center, Admin Dashboard/Stats, Courier (Scan QR, Proof of Delivery), AI Visual Search, Search Autocomplete, Auto-Cancellation (Cron), i18n (TH/EN), ธีม.',
    tags: ['NestJS 11', 'TypeScript', 'React Native', 'Expo 54', 'MySQL', 'TypeORM', 'FastAPI', 'MobileNetV3', 'JWT'],
    features: [
      'Backend: 20+ Modules, 40+ Endpoints, 28+ Entities (Auth, Products, Categories, Cart, Orders, Reviews, Wishlist, Coupons, Stores, Chat, Flash Sale, Wallet, Store Wallet, Admin Stats ฯลฯ); JWT (Passport), ValidationPipe, Multer; Order Status Flow เต็ม (PENDING→VERIFYING→…→COMPLETED), RefundStatus (NONE/PENDING/REQUESTED/APPROVED/REJECTED)',
      'Frontend: 40+ Screens, 40+ Components, 6 Context (Auth, Cart, Address, Wishlist, Camera, Theme), 6 Services, 3 Navigators (Bottom Tab, Stack, Material Top Tab); Axios + Interceptor (JWT), AsyncStorage; Search Autocomplete (GET /products/suggestions, Debounced 300ms), Search History, Visual Search (Camera/Gallery → AI)',
      'AI Visual Search: FastAPI พอร์ต 8000, MobileNetV3 (Feature Extraction), Cosine Similarity (threshold 0.3), MySQL ecom1; Backend POST /products/visual-search รับรูปจากแอป → ส่งต่อ AI → ดึงสินค้าจาก DB ส่งกลับ',
      'Order & Payment: สร้างออเดอร์, อัปโหลดสลิป, Admin ยืนยันโอน (confirm-payment), PromptPay QR, Tracking (trackingNumber, logisticsProvider), ยืนยันรับสินค้า (complete → แต้ม), Payment Timer + Auto-cancel หมดอายุ; Refund Request/Approve/Reject + คืนสต็อกอัตโนมัติ; Auto-Cancellation: Cron ทุก 1 นาที, confirmationDeadline (24 ชม. หลัง PENDING_CONFIRMATION), คืนสต็อกด้วย Transaction + Pessimistic Locking',
      'Flash Sale: ตาราง flash_sale, flash_sale_item (discountPrice, limitStock, sold, maxPerUser); Public GET /flash-sales/current; Admin CRUD แคมเปญและรายการ; OrdersService reserveFlashSaleStock แบบ atomic',
      'Wallet & Store Wallet: WalletModule, StoreWalletModule; Withdrawal Request; Admin อนุมัติ/ปฏิเสธ (AdminWithdrawalListScreen, AdminWithdrawalDetailScreen); Transaction Log ผ่าน DB Transaction',
      'Admin: Dashboard, Stats (AdminStatsModule, ช่วงเวลาวันนี้/7 วัน/30 วัน/เดือนนี้), User/Store/Category/Review Reports/Activity Log/Chat, Withdrawal, Flash Sale List/Create; Seller Center, Add Product, Admin Order List (Status, Tracking Modal)',
      'Courier: Dashboard (งานที่รับ+งานใหม่), สแกน QR/กรอก Order ID, Pickup/Deliver, Delivery Proof (ถ่ายรูป); Account Security: Verify Email, Forgot/Reset Password',
    ],
    challenge:
      'ความท้าทายคือการรวม 3 สแต็ก (NestJS, React Native, Python FastAPI) ให้ทำงานร่วมกันโดย Backend เป็นตัวกลาง: แอปส่งรูปมาที่ POST /products/visual-search Backend รับ multipart ส่งต่อ AI Service ที่พอร์ต 8000 ได้ Product IDs ที่คล้าย แล้ว Backend query MySQL (ecom1 เดียวกับ AI) ส่งข้อมูลสินค้ากลับแอป นอกจากนี้ต้องจัดการความสอดคล้องของข้อมูลใน flow ที่ซับซ้อน เช่น Flash Sale (reserve stock แบบ atomic), Refund (อนุมัติแล้วคืนสต็อกและ variant อัตโนมัติ), Auto-Cancellation (Cron + confirmationDeadline, คืนสต็อกด้วย TypeORM Transaction และ Pessimistic Locking) และ Frontend ต้อง sync state หลาย Context (Cart, Address, Wishlist) กับ API พร้อม UX เช่น Countdown Timer ใน OrderCard, Auto-refresh เมื่อออเดอร์ถูกยกเลิก, Search Autocomplete แบบ Debounce และ Overlay conditional',
  },
}
