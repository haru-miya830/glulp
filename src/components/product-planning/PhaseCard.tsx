"use client";

import { ChevronDown, ChevronUp, ShieldCheck } from "lucide-react";
import { useState } from "react";
import type { PlanningPhase } from "@/types";
import TaskItem from "./TaskItem";

interface PhaseCardProps {
  phase: PlanningPhase;
  completedTaskIds: string[];
  onToggleTask: (phaseId: string, taskId: string) => void;
}

const colorMap = {
  violet: {
    border: "border-violet-500/25",
    glow: "shadow-[0_0_25px_rgba(139,92,246,0.1)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(139,92,246,0.15)]",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    progressBg: "bg-violet-500/10",
    progressBar: "bg-gradient-to-r from-violet-500 to-violet-400",
    number: "text-violet-400",
    duration: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    accent: "from-violet-500/20 via-transparent to-transparent",
  },
  blue: {
    border: "border-blue-500/25",
    glow: "shadow-[0_0_25px_rgba(59,130,246,0.1)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(59,130,246,0.15)]",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/25",
    progressBg: "bg-blue-500/10",
    progressBar: "bg-gradient-to-r from-blue-500 to-blue-400",
    number: "text-blue-400",
    duration: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    accent: "from-blue-500/20 via-transparent to-transparent",
  },
  cyan: {
    border: "border-cyan-500/25",
    glow: "shadow-[0_0_25px_rgba(34,211,238,0.1)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    progressBg: "bg-cyan-500/10",
    progressBar: "bg-gradient-to-r from-cyan-500 to-cyan-400",
    number: "text-cyan-400",
    duration: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    accent: "from-cyan-500/20 via-transparent to-transparent",
  },
  emerald: {
    border: "border-emerald-500/25",
    glow: "shadow-[0_0_25px_rgba(52,211,153,0.1)]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(52,211,153,0.15)]",
    badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
    progressBg: "bg-emerald-500/10",
    progressBar: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    number: "text-emerald-400",
    duration: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    accent: "from-emerald-500/20 via-transparent to-transparent",
  },
};

export default function PhaseCard({ phase, completedTaskIds, onToggleTask }: PhaseCardProps) {
  const [expanded, setExpanded] = useState(true);
  const c = colorMap[phase.color];
  const completedCount = completedTaskIds.length;
  const totalCount = phase.tasks.length;
  const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  const isComplete = completedCount === totalCount;

  return (
    <div
      className={`
        rounded-3xl bg-[#0c0c1d]/80 backdrop-blur-2xl
        border ${c.border} ${c.glow} ${c.hoverGlow}
        transition-all duration-300
      `}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 pb-4 text-left"
      >
        {/* Top accent line */}
        <div className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r ${c.accent}`} />

        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <span className={`text-2xl font-black ${c.number}`}>
              {phase.number}
            </span>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                {phase.estimatedDuration && (
                  <span className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-[10px] font-medium ${c.duration}`}>
                    {phase.estimatedDuration}
                  </span>
                )}
                {isComplete && (
                  <span className={`inline-flex items-center rounded-lg border px-2 py-0.5 text-[10px] font-medium ${c.badge}`}>
                    完了
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-gray-500">{phase.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500">
              {completedCount}/{totalCount}
            </span>
            {expanded ? (
              <ChevronUp size={16} className="text-gray-600" />
            ) : (
              <ChevronDown size={16} className="text-gray-600" />
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className={`mt-4 h-1.5 rounded-full ${c.progressBg}`}>
          <div
            className={`h-full rounded-full ${c.progressBar} transition-all duration-500 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </button>

      {/* Tasks */}
      {expanded && (
        <div className="px-6 pb-6">
          <div className="space-y-0.5 border-t border-white/[0.04] pt-4">
            {phase.tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                isCompleted={completedTaskIds.includes(task.id)}
                onToggle={(taskId) => onToggleTask(phase.id, taskId)}
                color={phase.color}
              />
            ))}
          </div>

          {/* Approval notice */}
          {phase.approvalRequired && (
            <div className="mt-4 flex items-center gap-2.5 rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3">
              <ShieldCheck size={16} className="shrink-0 text-amber-400" />
              <span className="text-xs font-medium text-amber-300">
                {phase.approvalRequired}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
