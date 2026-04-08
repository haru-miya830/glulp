"use client";

import { Check, Clock, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { PlanningTask } from "@/types";

interface TaskItemProps {
  task: PlanningTask;
  isCompleted: boolean;
  onToggle: (taskId: string) => void;
  color: "violet" | "blue" | "cyan" | "emerald";
}

const checkColorMap = {
  violet: "border-violet-500/40 bg-violet-500/20 text-violet-300",
  blue: "border-blue-500/40 bg-blue-500/20 text-blue-300",
  cyan: "border-cyan-500/40 bg-cyan-500/20 text-cyan-300",
  emerald: "border-emerald-500/40 bg-emerald-500/20 text-emerald-300",
};

const uncheckedColorMap = {
  violet: "border-violet-500/20 hover:border-violet-500/40",
  blue: "border-blue-500/20 hover:border-blue-500/40",
  cyan: "border-cyan-500/20 hover:border-cyan-500/40",
  emerald: "border-emerald-500/20 hover:border-emerald-500/40",
};

export default function TaskItem({ task, isCompleted, onToggle, color }: TaskItemProps) {
  const [expanded, setExpanded] = useState(false);
  const hasDetails = task.details && task.details.length > 0;

  return (
    <div className="group">
      <div className="flex items-start gap-3 py-2.5">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(task.id)}
          className={`
            mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all duration-200
            ${isCompleted ? checkColorMap[color] : uncheckedColorMap[color]}
          `}
        >
          {isCompleted && <Check size={12} strokeWidth={3} />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => hasDetails && setExpanded(!expanded)}
              className={`
                text-sm font-medium text-left transition-colors duration-200
                ${isCompleted ? "text-gray-600 line-through" : "text-gray-200"}
                ${hasDetails ? "cursor-pointer hover:text-white" : "cursor-default"}
              `}
            >
              {task.title}
            </button>

            {task.estimatedHours && (
              <span className="inline-flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 text-[10px] text-gray-500">
                <Clock size={10} />
                {task.estimatedHours}
              </span>
            )}

            {hasDetails && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-gray-600 hover:text-gray-400 transition-colors"
              >
                {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
            )}
          </div>

          {/* Details */}
          {expanded && hasDetails && (
            <ul className="mt-2 ml-1 space-y-1.5">
              {task.details!.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs text-gray-500"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-700" />
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
