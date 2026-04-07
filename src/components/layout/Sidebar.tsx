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
        className="fixed top-5 left-5 z-50 rounded-2xl border border-violet-500/20 bg-[#0c0c1d]/90 p-2.5 backdrop-blur-xl md:hidden shadow-[0_0_15px_rgba(139,92,246,0.15)]"
      >
        {open ? <X size={20} className="text-violet-300" /> : <Menu size={20} className="text-violet-300" />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-40 h-full w-72
          border-r border-violet-500/15
          bg-[#06061a]/95 backdrop-blur-2xl
          shadow-[1px_0_30px_rgba(139,92,246,0.08)]
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex h-20 items-center gap-3 px-7 border-b border-white/[0.06]">
          <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-base font-black shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            G
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 blur-md opacity-40 -z-10" />
          </div>
          <div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Glulp
            </span>
            <p className="text-[10px] tracking-widest text-gray-600 uppercase">AI Post Manager</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="mt-6 px-4 space-y-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  relative flex items-center gap-3.5 rounded-2xl px-4 py-3.5 text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-violet-500/15 to-blue-500/10 text-violet-200 border border-violet-500/25 shadow-[0_0_20px_rgba(139,92,246,0.12)]"
                      : "text-gray-500 hover:bg-white/[0.03] hover:text-gray-300 border border-transparent"
                  }
                `}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 rounded-r-full bg-gradient-to-b from-violet-400 to-blue-400 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                )}
                <item.icon size={18} className={isActive ? "text-violet-400" : ""} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 px-5">
          <div className="rounded-2xl border border-violet-500/15 bg-gradient-to-br from-violet-500/[0.06] to-blue-500/[0.04] p-5">
            <p className="text-[10px] tracking-wider text-gray-600 uppercase">Powered by</p>
            <p className="mt-1 text-sm font-semibold bg-gradient-to-r from-violet-300 to-blue-300 bg-clip-text text-transparent">
              Claude AI
            </p>
            <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500/40 to-blue-500/40" />
          </div>
        </div>
      </aside>
    </>
  );
}
