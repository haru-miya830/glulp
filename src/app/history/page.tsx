import GlassCard from "@/components/ui/GlassCard";

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">投稿履歴</h1>
        <p className="mt-1 text-sm text-gray-500">過去の投稿を確認</p>
      </div>
      <GlassCard className="p-8 text-center text-gray-500">
        Phase 3 で実装予定
      </GlassCard>
    </div>
  );
}
