import {
  LayoutDashboard,
  FileText,
  CalendarClock,
  Eye,
  TrendingUp,
} from "lucide-react";
import { dashboardStats, recentPosts } from "@/lib/dummy-data";
import PageHeader from "@/components/layout/PageHeader";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentPosts from "@/components/dashboard/RecentPosts";
import QuickActions from "@/components/dashboard/QuickActions";
import Banner from "@/components/dashboard/Banner";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <PageHeader
        icon={LayoutDashboard}
        title="ダッシュボード"
        description="投稿パフォーマンスの概要"
      />

      <Banner />

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <RecentPosts posts={recentPosts} />
        </div>
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
