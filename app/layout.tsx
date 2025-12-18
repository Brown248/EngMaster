import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sarabun = Sarabun({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["thai"], 
  variable: "--font-sarabun" 
});

export const metadata: Metadata = {
  title: "EngMaster - เรียนภาษาอังกฤษฟรี",
  description: "คลังความรู้ภาษาอังกฤษสำหรับคนไทย",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={`${inter.variable} ${sarabun.variable} font-thai flex bg-slate-50`}>
        {/* Sidebar (Desktop) */}
        <div className="hidden md:block">
          <Sidebar />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 p-4 md:p-8 overflow-y-auto">
            <div className="max-w-5xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}