import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ฟังก์ชันช่วยรวม Class Tailwind ให้ไม่ตีกัน (มาตรฐาน Next.js)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}