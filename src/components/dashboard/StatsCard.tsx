import { LucideIcon } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  color: "violet" | "blue" | "cyan" | "emerald";
}

const colorMap = {
  violet: {
    icon: "text-violet-400",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    gradient: "from-violet-500/20 to-violet-600/10",
  },
  blue: {
    icon: "text-blue-400",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
  cyan: {
    icon: "text-cyan-400",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    gradient: "from-cyan-500/20 to-cyan-600/10",
  },
  emerald: {
    icon: "text-emerald-400",
    glow: "shadow-[0_0_20px_rgba(52,211,153,0.15)]",
    gradient: "from-emerald-500/20 to-emerald-600/10",
  },
};

export default function StatsCard({ title, value, change, icon: Icon, color }: StatsCardProps) {
  const colors = colorMap[color];

  return (
    <GlassCard className={`p-5 ${colors.glow}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white">{value}</p>
          {change && (
            <p className="mt-1 text-xs text-emerald-400">{change}</p>
          )}
        </div>
        <div className={`rounded-xl bg-gradient-to-br ${colors.gradient} p-3`}>
          <Icon size={22} className={colors.icon} />
        </div>
      </div>
    </GlassCard>
  );
}
