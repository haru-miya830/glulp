import { StickyNote } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/ui/GlassCard";
import EmptyState from "@/components/ui/EmptyState";

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        icon={StickyNote}
        title="学習メモ"
        description="AI学習のためのメモ管理"
      />
      <GlassCard>
        <EmptyState
          icon={StickyNote}
          title="準備中"
          description="学習メモ機能は次のフェーズで実装されます"
        />
      </GlassCard>
    </div>
  );
}
