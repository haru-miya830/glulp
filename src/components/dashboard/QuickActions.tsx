import Link from "next/link";
import { Sparkles, CalendarClock, UserCog } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const actions = [
  {
    href: "/generate",
    label: "AI投稿を生成",
    description: "AIでSNS投稿を自動生成",
    icon: Sparkles,
    gradient: "from-violet-500 to-blue-500",
  },
  {
    href: "/schedule",
    label: "投稿を予約",
    description: "日時を指定して予約投稿",
    icon: CalendarClock,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    href: "/character",
    label: "キャラ設定",
    description: "投稿キャラクターを管理",
    icon: UserCog,
    gradient: "from-cyan-500 to-emerald-500",
  },
];

export default function QuickActions() {
  return (
    <GlassCard className="p-6">
      <h2 className="text-lg font-semibold text-white mb-4">クイックアクション</h2>
      <div className="space-y-3">
        {actions.map((action) => (
          <Link
            key={action.href}
            href={action.href}
            className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] hover:border-white/10"
          >
            <div
              className={`rounded-xl bg-gradient-to-br ${action.gradient} p-3 opacity-80 group-hover:opacity-100 transition-opacity`}
            >
              <action.icon size={20} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{action.label}</p>
              <p className="text-xs text-gray-500">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </GlassCard>
  );
}
