import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <Link
      href="/generate"
      className="group relative block overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-500/[0.08] via-blue-500/[0.06] to-cyan-500/[0.04] p-6 md:p-7 transition-all duration-300 hover:border-violet-500/30 hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]"
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-blue-500/8 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 p-3.5 shadow-[0_0_25px_rgba(139,92,246,0.35)]">
            <Sparkles size={22} className="text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">
              AI投稿生成が利用可能です
            </h3>
            <p className="mt-0.5 text-sm text-gray-400">
              Claudeを使って高品質なSNS投稿を自動生成しましょう
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-2.5 text-sm font-semibold text-violet-300 transition-all group-hover:bg-violet-500/20 group-hover:border-violet-500/30 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          試してみる
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
