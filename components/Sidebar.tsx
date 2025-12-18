"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Book, Clock, Target, ChevronRight, ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import menuData from "@/data/menu.json";

// Map String icon name to Lucide component
const Icons: any = { Home, Book, Clock, Target, Menu };

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  items?: MenuItem[];
}

const SidebarItem = ({ item, level = 0 }: { item: MenuItem; level?: number }) => {
  const [isOpen, setIsOpen] = useState(level === 0); // Default open top level
  const pathname = usePathname();
  const hasChildren = item.items && item.items.length > 0;
  const isActive = item.href === pathname;
  const IconComponent = item.icon ? Icons[item.icon] : null;

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="mb-1">
      <Link
        href={item.href || "#"}
        onClick={handleClick}
        className={cn(
          "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200",
          isActive 
            ? "bg-blue-50 text-blue-700 font-semibold" 
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
          level > 0 && "ml-4 border-l border-slate-200 pl-4 rounded-none" // Indent styling
        )}
      >
        <div className="flex items-center gap-3">
          {IconComponent && <IconComponent size={18} className={isActive ? "text-blue-600" : "text-slate-400"} />}
          <span>{item.label}</span>
        </div>
        {hasChildren && (
          <span className="text-slate-400">
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
      </Link>

      {hasChildren && isOpen && (
        <div className="mt-1">
          {item.items!.map((child) => (
            <SidebarItem key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Sidebar({ className }: { className?: string }) {
  return (
    <aside className={cn("w-64 bg-white border-r border-slate-200 h-screen flex flex-col sticky top-0", className)}>
      <div className="p-6 border-b border-slate-100 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
        <span className="font-bold text-slate-800 text-lg">EngMaster</span>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {menuData.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </div>

      <div className="p-4 border-t border-slate-100 bg-slate-50">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
          <p className="text-xs font-bold opacity-80 mb-1">PRO VERSION</p>
          <p className="text-xs mb-3">เข้าถึงข้อสอบกว่า 1,000 ข้อ</p>
          <button className="w-full bg-white text-blue-600 text-xs font-bold py-2 rounded-lg hover:bg-blue-50 transition">
            อัพเกรด
          </button>
        </div>
      </div>
    </aside>
  );
}