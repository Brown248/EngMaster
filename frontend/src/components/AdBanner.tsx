import React from 'react';

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = "" }: AdBannerProps) {
  return (
    <div className={`w-full max-w-[728px] mx-auto my-8 ${className}`}>
      <div className="bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 h-[90px] flex flex-col items-center justify-center text-slate-400 select-none">
        <span className="font-bold text-sm uppercase tracking-widest">Advertisement</span>
        <span className="text-xs mt-1">พื้นที่โฆษณา (728x90)</span>
      </div>
      {/* ใส่ Code AdSense ตรงนี้ภายหลัง */}
    </div>
  );
}