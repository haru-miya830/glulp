import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export default function PageHeader({ title, description, icon: Icon }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      {Icon && (
        <div className="rounded-2xl bg-gradient-to-br from-violet-500/15 to-blue-500/10 border border-violet-500/20 p-3">
          <Icon size={24} className="text-violet-400" />
        </div>
      )}
      <div>
        <h1 className="text-2xl font-extrabold text-white tracking-tight md:text-3xl">
          {title}
        </h1>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
