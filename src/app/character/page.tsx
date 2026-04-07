import GlassCard from "@/components/ui/GlassCard";

export default function CharacterPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">キャラ設定</h1>
        <p className="mt-1 text-sm text-gray-500">投稿キャラクターの管理</p>
      </div>
      <GlassCard className="p-8 text-center text-gray-500">
        Phase 2 で実装予定
      </GlassCard>
    </div>
  );
}
