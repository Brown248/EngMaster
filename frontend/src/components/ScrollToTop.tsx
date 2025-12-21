import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // เมื่อ pathname เปลี่ยน (เปลี่ยนหน้า) ให้เลื่อน Scroll ไปที่ (0, 0) ทันที
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Component นี้ไม่ต้อง render UI อะไรออกมา
}