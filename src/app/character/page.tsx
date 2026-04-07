import { UserCog } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/ui/GlassCard";
import EmptyState from "@/components/ui/EmptyState";

export default function CharacterPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        icon={UserCog}
        title="キャラ設定"
        description="投稿キャラクターの管理"
      />
      <GlassCard>
        <EmptyState
          icon={UserCog}
          title="準備中"
          description="キャラ設定機能は次のフェーズで実装されます"
        />
      </GlassCard>
    </div>
  );
}
