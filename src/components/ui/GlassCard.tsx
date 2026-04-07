interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-xl
        shadow-[0_0_15px_rgba(139,92,246,0.08)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
