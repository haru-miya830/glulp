import GlassCard from "@/components/ui/GlassCard";

export default function GeneratePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">AI投稿生成</h1>
        <p className="mt-1 text-sm text-gray-500">AIを使ってSNS投稿を自動生成</p>
      </div>
      <GlassCard className="p-8 text-center text-gray-500">
        Phase 2 で実装予定
      </GlassCard>
    </div>
  );
}
