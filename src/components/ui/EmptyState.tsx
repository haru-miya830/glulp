import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="rounded-3xl bg-gradient-to-br from-violet-500/10 to-blue-500/5 border border-violet-500/15 p-5 mb-5">
        <Icon size={32} className="text-violet-400/60" />
      </div>
      <h3 className="text-base font-semibold text-gray-300">{title}</h3>
      <p className="mt-1.5 max-w-xs text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-violet-500/25 bg-violet-500/10 px-6 py-2.5 text-sm font-semibold text-violet-300 transition-all hover:bg-violet-500/20 hover:border-violet-500/35 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
