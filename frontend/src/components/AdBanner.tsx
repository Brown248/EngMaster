import { useEffect, useRef } from 'react';

interface AdBannerProps {
  className?: string;
  dataAdSlot?: string; // รับรหัส Slot แยกแต่ละตำแหน่ง
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
}

export default function AdBanner({
  className = "",
  dataAdSlot = "2990261154", // ⚠️ ใส่ Slot ID กลางๆ ไว้กันเหนียว หรือปล่อยว่าง
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,}:
  AdBannerProps) 
  {const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // โค้ดนี้จะสั่งให้ Google ยิงโฆษณามาใส่ใน <ins>
      if (window.adsbygoogle && adRef.current && adRef.current.innerHTML === "") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className={`text-center my-4 ${className}`} aria-hidden={true}>
      {/* ป้ายกำกับว่า "โฆษณา" ตามกฎ Google */}
      <span className="text-[10px] text-slate-300 block mb-1">Advertisement</span>
      
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6938819439632634" // ⚠️⚠️ เปลี่ยนเป็นรหัส Publisher ของคุณ (ดูใน AdSense)
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}

// เพิ่ม Type ให้ Window เพื่อไม่ให้ TypeScript ฟ้อง Error
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}