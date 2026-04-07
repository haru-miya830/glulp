import { LucideIcon } from "lucide-react";

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
    border: "border-violet-500/25",
    glow: "shadow-[0_0_25px_rgba(139,92,246,0.12)]",
    iconBg: "from-violet-500/20 to-violet-600/5",
    accent: "bg-violet-400",
  },
  blue: {
    icon: "text-blue-400",
    border: "border-blue-500/25",
    glow: "shadow-[0_0_25px_rgba(59,130,246,0.12)]",
    iconBg: "from-blue-500/20 to-blue-600/5",
    accent: "bg-blue-400",
  },
  cyan: {
    icon: "text-cyan-400",
    border: "border-cyan-500/25",
    glow: "shadow-[0_0_25px_rgba(34,211,238,0.12)]",
    iconBg: "from-cyan-500/20 to-cyan-600/5",
    accent: "bg-cyan-400",
  },
  emerald: {
    icon: "text-emerald-400",
    border: "border-emerald-500/25",
    glow: "shadow-[0_0_25px_rgba(52,211,153,0.12)]",
    iconBg: "from-emerald-500/20 to-emerald-600/5",
    accent: "bg-emerald-400",
  },
};

export default function StatsCard({ title, value, change, icon: Icon, color }: StatsCardProps) {
  const c = colorMap[color];

  return (
    <div
      className={`
        relative rounded-3xl p-6
        bg-[#0c0c1d]/80 backdrop-blur-2xl
        border ${c.border} ${c.glow}
        transition-all duration-300
        hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]
        group
      `}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-current to-transparent ${c.icon} opacity-30`} />

      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">{title}</p>
          <p className="text-3xl font-extrabold text-white tracking-tight">{value}</p>
          {change && (
            <div className="flex items-center gap-1.5 mt-1">
              <div className={`h-1.5 w-1.5 rounded-full ${c.accent}`} />
              <p className="text-xs font-medium text-emerald-400">{change}</p>
            </div>
          )}
        </div>
        <div className={`rounded-2xl bg-gradient-to-br ${c.iconBg} p-3.5 border border-white/[0.05]`}>
          <Icon size={22} className={`${c.icon} group-hover:scale-110 transition-transform duration-200`} />
        </div>
      </div>
    </div>
  );
}
