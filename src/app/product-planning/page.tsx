"use client";

import { useState, useCallback } from "react";
import { ClipboardList, RotateCcw } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import PhaseCard from "@/components/product-planning/PhaseCard";
import ProgressOverview from "@/components/product-planning/ProgressOverview";
import { planningPhases } from "@/lib/product-planning-data";

const STORAGE_KEY = "glulp-product-planning";

function loadState(): Record<string, string[]> {
  if (typeof window === "undefined") return {};
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveState(state: Record<string, string[]>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export default function ProductPlanningPage() {
  const [completedTasks, setCompletedTasks] = useState<Record<string, string[]>>(loadState);

  const handleToggleTask = useCallback((phaseId: string, taskId: string) => {
    setCompletedTasks((prev) => {
      const phaseTasks = prev[phaseId] || [];
      const next = phaseTasks.includes(taskId)
        ? { ...prev, [phaseId]: phaseTasks.filter((id) => id !== taskId) }
        : { ...prev, [phaseId]: [...phaseTasks, taskId] };
      saveState(next);
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setCompletedTasks({});
    saveState({});
  }, []);

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="flex items-start justify-between">
        <PageHeader
          icon={ClipboardList}
          title="商品企画フレームワーク"
          description="商品企画マーケティングの進行管理ツール"
        />
        <button
          onClick={handleReset}
          className="mt-1 flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-xs font-medium text-gray-500 transition-all hover:bg-red-500/[0.06] hover:border-red-500/20 hover:text-red-400"
        >
          <RotateCcw size={14} />
          リセット
        </button>
      </div>

      {/* Flow description */}
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
        <p className="text-xs leading-relaxed text-gray-400">
          <span className="font-semibold text-gray-300">進め方：</span>
          ①競合分析と②自社分析を完了後、宮下の承認が取れたら③販売準備→④販売開始運用に移行します。
        </p>
      </div>

      {/* Progress Overview */}
      <ProgressOverview phases={planningPhases} completedTasks={completedTasks} />

      {/* Phase Cards */}
      <div className="space-y-6">
        {planningPhases.map((phase) => (
          <PhaseCard
            key={phase.id}
            phase={phase}
            completedTaskIds={completedTasks[phase.id] || []}
            onToggleTask={handleToggleTask}
          />
        ))}
      </div>
    </div>
  );
}
