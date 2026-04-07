import { recentPosts } from "@/lib/dummy-data";
import GlassCard from "@/components/ui/GlassCard";

const statusBadge = {
  posted: "bg-emerald-500/20 text-emerald-400",
  scheduled: "bg-blue-500/20 text-blue-400",
  draft: "bg-gray-500/20 text-gray-400",
  failed: "bg-red-500/20 text-red-400",
};

const statusLabel = {
  posted: "投稿済",
  scheduled: "予約中",
  draft: "下書き",
  failed: "失敗",
};

const platformBadge = {
  twitter: "text-blue-400",
  instagram: "text-pink-400",
  threads: "text-gray-300",
};

export default function RecentPosts() {
  return (
    <GlassCard className="p-6">
      <h2 className="text-lg font-semibold text-white mb-4">最近の投稿</h2>
      <div className="space-y-3">
        {recentPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:bg-white/[0.05]"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm text-gray-300 line-clamp-2 flex-1">
                {post.content}
              </p>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadge[post.status]}`}
              >
                {statusLabel[post.status]}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
              <span className={platformBadge[post.platform]}>
                {post.platform}
              </span>
              {post.likes !== undefined && <span>{post.likes} likes</span>}
              {post.impressions !== undefined && (
                <span>{post.impressions.toLocaleString()} imp</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
