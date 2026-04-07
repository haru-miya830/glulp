import { Sparkles } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/ui/GlassCard";
import EmptyState from "@/components/ui/EmptyState";

export default function GeneratePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        icon={Sparkles}
        title="AI投稿生成"
        description="AIを使ってSNS投稿を自動生成"
      />
      <GlassCard>
        <EmptyState
          icon={Sparkles}
          title="準備中"
          description="AI投稿生成機能は次のフェーズで実装されます"
        />
      </GlassCard>
    </div>
  );
}
