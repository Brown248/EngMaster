import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// กำหนดชื่อ Title ให้สัมพันธ์กับ Path
const titles: Record<string, string> = {
  '/': 'Home',
  '/vocabulary': 'Vocabulary Bank',
  '/grammar': 'Grammar Challenge',
};

export default function usePageTitle(baseTitle: string = 'EngMaster') {
  const location = useLocation();

  useEffect(() => {
    // หาชื่อหน้าจาก path ปัจจุบัน
    const pageTitle = titles[location.pathname] || '';
    
    // ตั้งชื่อ document title (เช่น "EngMaster - Grammar Challenge")
    // ถ้าไม่มีในรายการ จะใช้ชื่อ baseTitle อย่างเดียว
    document.title = pageTitle ? `${baseTitle} - ${pageTitle}` : baseTitle;
  }, [location, baseTitle]);
}