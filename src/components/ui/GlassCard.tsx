interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  neon?: boolean;
}

export default function GlassCard({ children, className = "", neon = true }: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        bg-[#0c0c1d]/80 backdrop-blur-2xl
        ${neon
          ? "border border-violet-500/20 shadow-[0_0_20px_rgba(139,92,246,0.1),inset_0_1px_0_rgba(255,255,255,0.05)]"
          : "border border-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
        }
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
