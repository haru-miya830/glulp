import Link from "next/link";
import { Sparkles, CalendarClock, UserCog, History } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const actions = [
  {
    href: "/generate",
    label: "AI投稿を生成",
    description: "AIでSNS投稿を自動生成",
    icon: Sparkles,
    gradient: "from-violet-500 to-blue-500",
    glowColor: "rgba(139,92,246,0.25)",
  },
  {
    href: "/schedule",
    label: "投稿を予約",
    description: "日時を指定して予約投稿",
    icon: CalendarClock,
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59,130,246,0.25)",
  },
  {
    href: "/character",
    label: "キャラ設定",
    description: "投稿キャラクターを管理",
    icon: UserCog,
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(34,211,238,0.25)",
  },
  {
    href: "/history",
    label: "投稿履歴を確認",
    description: "過去の投稿データを分析",
    icon: History,
    gradient: "from-indigo-500 to-violet-500",
    glowColor: "rgba(99,102,241,0.25)",
  },
];

export default function QuickActions() {
  return (
    <GlassCard className="p-7">
      <h2 className="text-lg font-bold text-white mb-6">クイックアクション</h2>
      <div className="space-y-3.5">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4.5 transition-all duration-200 hover:bg-violet-500/[0.04] hover:border-violet-500/20"
            style={{
              // hover glow via CSS variable
            }}
          >
            <div
              className={`relative rounded-2xl bg-gradient-to-br ${action.gradient} p-3.5 transition-all duration-300 group-hover:shadow-[0_0_20px_var(--glow)]`}
              style={{ "--glow": action.glowColor } as React.CSSProperties}
            >
              <action.icon size={20} className="text-white" />
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${action.gradient} blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10`} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors">{action.label}</p>
              <p className="text-xs text-gray-600 mt-0.5">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </GlassCard>
  );
}
