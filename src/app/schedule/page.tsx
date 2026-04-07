import { CalendarClock } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import GlassCard from "@/components/ui/GlassCard";
import EmptyState from "@/components/ui/EmptyState";

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        icon={CalendarClock}
        title="予約投稿"
        description="投稿の予約管理"
      />
      <GlassCard>
        <EmptyState
          icon={CalendarClock}
          title="準備中"
          description="予約投稿機能は次のフェーズで実装されます"
        />
      </GlassCard>
    </div>
  );
}
