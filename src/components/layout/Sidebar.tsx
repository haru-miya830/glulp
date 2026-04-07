"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Sparkles,
  CalendarClock,
  History,
  UserCog,
  StickyNote,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "ダッシュボード", icon: LayoutDashboard },
  { href: "/generate", label: "AI投稿生成", icon: Sparkles },
  { href: "/schedule", label: "予約投稿", icon: CalendarClock },
  { href: "/history", label: "投稿履歴", icon: History },
  { href: "/character", label: "キャラ設定", icon: UserCog },
  { href: "/notes", label: "学習メモ", icon: StickyNote },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-white/10 p-2 backdrop-blur-md md:hidden"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-40 h-full w-64
          border-r border-white/10 bg-[#0a0a1a]/90 backdrop-blur-xl
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 px-6">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-sm font-bold">
            G
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Glulp
          </span>
        </div>

        {/* Nav */}
        <nav className="mt-4 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-violet-500/20 to-blue-500/20 text-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.15)]"
                      : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
                  }
                `}
              >
                <item.icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-0 right-0 px-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs text-gray-500">Powered by</p>
            <p className="text-sm font-medium bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Claude AI
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
