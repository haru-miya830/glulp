import { Target, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import type { PlanningPhase } from "@/types";

interface ProgressOverviewProps {
  phases: PlanningPhase[];
  completedTasks: Record<string, string[]>;
}

export default function ProgressOverview({ phases, completedTasks }: ProgressOverviewProps) {
  const totalTasks = phases.reduce((sum, p) => sum + p.tasks.length, 0);
  const totalCompleted = phases.reduce(
    (sum, p) => sum + (completedTasks[p.id]?.length || 0),
    0
  );
  const overallProgress = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;

  // Find current phase (first incomplete phase)
  const currentPhase = phases.find(
    (p) => (completedTasks[p.id]?.length || 0) < p.tasks.length
  );

  // Phases with approval needed
  const pendingApproval = phases.filter(
    (p) =>
      p.approvalRequired &&
      (completedTasks[p.id]?.length || 0) === p.tasks.length
  );

  const stats = [
    {
      label: "全体進捗",
      value: `${overallProgress}%`,
      icon: Target,
      color: "violet" as const,
    },
    {
      label: "完了タスク",
      value: `${totalCompleted}/${totalTasks}`,
      icon: CheckCircle,
      color: "emerald" as const,
    },
    {
      label: "現在のフェーズ",
      value: currentPhase ? `${currentPhase.number} ${currentPhase.title}` : "全完了",
      icon: Clock,
      color: "blue" as const,
    },
    {
      label: "承認待ち",
      value: pendingApproval.length > 0 ? `${pendingApproval.length}件` : "なし",
      icon: AlertTriangle,
      color: "cyan" as const,
    },
  ];

  const statColorMap = {
    violet: "border-violet-500/25 shadow-[0_0_20px_rgba(139,92,246,0.1)]",
    emerald: "border-emerald-500/25 shadow-[0_0_20px_rgba(52,211,153,0.1)]",
    blue: "border-blue-500/25 shadow-[0_0_20px_rgba(59,130,246,0.1)]",
    cyan: "border-cyan-500/25 shadow-[0_0_20px_rgba(34,211,238,0.1)]",
  };

  const iconColorMap = {
    violet: "text-violet-400 from-violet-500/20 to-violet-600/5",
    emerald: "text-emerald-400 from-emerald-500/20 to-emerald-600/5",
    blue: "text-blue-400 from-blue-500/20 to-blue-600/5",
    cyan: "text-cyan-400 from-cyan-500/20 to-cyan-600/5",
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`
            rounded-3xl bg-[#0c0c1d]/80 backdrop-blur-2xl border p-5
            ${statColorMap[stat.color]}
            transition-all duration-300
          `}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-medium tracking-wider text-gray-500 uppercase">
                {stat.label}
              </p>
              <p className="mt-1.5 text-xl font-extrabold text-white tracking-tight">
                {stat.value}
              </p>
            </div>
            <div className={`rounded-2xl bg-gradient-to-br ${iconColorMap[stat.color]} p-3 border border-white/[0.05]`}>
              <stat.icon size={18} className={iconColorMap[stat.color].split(" ")[0]} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
