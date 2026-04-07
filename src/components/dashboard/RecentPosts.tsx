import { Flame, Heart, Eye, Repeat2, FileText } from "lucide-react";
import { Post } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import EmptyState from "@/components/ui/EmptyState";

const statusBadge: Record<Post["status"], string> = {
  posted: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
  scheduled: "bg-blue-500/15 text-blue-400 border border-blue-500/20",
  draft: "bg-gray-500/15 text-gray-400 border border-gray-500/20",
  failed: "bg-red-500/15 text-red-400 border border-red-500/20",
};

const statusLabel: Record<Post["status"], string> = {
  posted: "投稿済",
  scheduled: "予約中",
  draft: "下書き",
  failed: "失敗",
};

const platformStyles: Record<Post["platform"], { label: string; color: string }> = {
  twitter: { label: "X (Twitter)", color: "text-blue-400" },
  instagram: { label: "Instagram", color: "text-pink-400" },
  threads: { label: "Threads", color: "text-gray-300" },
};

interface RecentPostsProps {
  posts: Post[];
}

export default function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <GlassCard className="p-7">
      <div className="flex items-center gap-2.5 mb-6">
        <Flame size={20} className="text-orange-400" />
        <h2 className="text-lg font-bold text-white">最近のバズ投稿</h2>
        <span className="ml-auto text-xs text-gray-600 font-medium">直近 7 日間</span>
      </div>

      {posts.length === 0 ? (
        <EmptyState
          icon={FileText}
          title="まだ投稿がありません"
          description="AI投稿生成からはじめての投稿を作成してみましょう"
          actionLabel="投稿を作成する"
          actionHref="/generate"
        />
      ) : (
        <div className="space-y-3">
          {posts.map((post) => {
            const platform = platformStyles[post.platform];
            return (
              <div
                key={post.id}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-200 hover:bg-violet-500/[0.03] hover:border-violet-500/15 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-2 flex-1">
                    {post.content}
                  </p>
                  <span
                    className={`shrink-0 rounded-xl px-3 py-1 text-[11px] font-semibold ${statusBadge[post.status]}`}
                  >
                    {statusLabel[post.status]}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs">
                  <span className={`font-medium ${platform.color}`}>
                    {platform.label}
                  </span>
                  {post.likes !== undefined && (
                    <span className="flex items-center gap-1 text-gray-500">
                      <Heart size={12} className="text-pink-400/60" />
                      {post.likes}
                    </span>
                  )}
                  {post.retweets !== undefined && (
                    <span className="flex items-center gap-1 text-gray-500">
                      <Repeat2 size={12} className="text-blue-400/60" />
                      {post.retweets}
                    </span>
                  )}
                  {post.impressions !== undefined && (
                    <span className="flex items-center gap-1 text-gray-500">
                      <Eye size={12} className="text-cyan-400/60" />
                      {post.impressions.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </GlassCard>
  );
}
