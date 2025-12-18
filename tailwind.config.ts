import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ลบ backgroundImage ตรงนี้ออกให้หมด
      // สามารถเพิ่มสีธีมของ EngMaster ตรงนี้ได้ในอนาคต เช่น
      colors: {
        primary: "#3B82F6", // สีฟ้า EngMaster
        secondary: "#F3F4F6", // สีพื้นหลังเทาอ่อน
      }
    },
  },
  plugins: [],
};
export default config;