import { FileText, CalendarClock, Eye, TrendingUp } from "lucide-react";
import { dashboardStats } from "@/lib/dummy-data";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentPosts from "@/components/dashboard/RecentPosts";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">ダッシュボード</h1>
        <p className="mt-1 text-sm text-gray-500">投稿パフォーマンスの概要</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="総投稿数"
          value={dashboardStats.totalPosts}
          change="+12 今週"
          icon={FileText}
          color="violet"
        />
        <StatsCard
          title="予約中"
          value={dashboardStats.scheduledPosts}
          change="3件 今日"
          icon={CalendarClock}
          color="blue"
        />
        <StatsCard
          title="総インプレッション"
          value={dashboardStats.totalImpressions.toLocaleString()}
          change="+18% 先週比"
          icon={Eye}
          color="cyan"
        />
        <StatsCard
          title="平均エンゲージメント"
          value={`${dashboardStats.avgEngagement}%`}
          change="+0.3% 先週比"
          icon={TrendingUp}
          color="emerald"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentPosts />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
