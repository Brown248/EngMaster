// frontend/src/components/AdBanner.tsx
import { useEffect } from 'react';

interface AdBannerProps {
  className?: string;
  dataAdSlot?: string;
  dataAdFormat?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical'; 
}

export default function AdBanner({ 
  className = "", 
  dataAdSlot = "2990261154", 
  dataAdFormat = "auto"
}: AdBannerProps) {

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`text-center my-4 ${className}`}>
        <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-6938819439632634"
            data-ad-slot={dataAdSlot}
            data-ad-format={dataAdFormat}
            data-full-width-responsive="true"></ins>
        <span className="text-[10px] text-slate-300 uppercase tracking-widest">Advertisement</span>
    </div>
  );
}