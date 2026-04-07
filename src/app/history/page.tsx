import { History } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/ui/GlassCard";
import EmptyState from "@/components/ui/EmptyState";

export default function HistoryPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        icon={History}
        title="投稿履歴"
        description="過去の投稿を確認"
      />
      <GlassCard>
        <EmptyState
          icon={History}
          title="準備中"
          description="投稿履歴機能は次のフェーズで実装されます"
        />
      </GlassCard>
    </div>
  );
}
