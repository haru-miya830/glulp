import { Post, Character, ScheduledPost, Note, DashboardStats } from "@/types";

export const dashboardStats: DashboardStats = {
  totalPosts: 142,
  scheduledPosts: 8,
  totalImpressions: 52400,
  avgEngagement: 4.7,
};

export const recentPosts: Post[] = [
  {
    id: "1",
    content: "AIの未来について考えてみた。人間とAIの共創が鍵になる時代が来ている。",
    platform: "twitter",
    status: "posted",
    postedAt: "2026-04-07T10:00:00Z",
    likes: 48,
    retweets: 12,
    impressions: 1820,
  },
  {
    id: "2",
    content: "プログラミング学習のコツ：毎日15分でもコードを書く習慣をつけよう。",
    platform: "twitter",
    status: "posted",
    postedAt: "2026-04-06T18:30:00Z",
    likes: 92,
    retweets: 34,
    impressions: 3200,
  },
  {
    id: "3",
    content: "新しいプロジェクトを始めました！AIを活用したコンテンツ自動生成ツールです。",
    platform: "threads",
    status: "posted",
    postedAt: "2026-04-06T12:00:00Z",
    likes: 67,
    retweets: 8,
    impressions: 2100,
  },
  {
    id: "4",
    content: "週末はNext.jsの新機能を試してみる予定。Server Actionsが気になる。",
    platform: "twitter",
    status: "scheduled",
    scheduledAt: "2026-04-08T09:00:00Z",
  },
  {
    id: "5",
    content: "デザインシステムの重要性について。一貫したUIはユーザー体験を大きく向上させる。",
    platform: "instagram",
    status: "draft",
  },
];

export const scheduledPosts: ScheduledPost[] = [
  {
    id: "s1",
    content: "朝の生産性を上げる5つの習慣",
    platform: "twitter",
    scheduledAt: "2026-04-08T07:00:00Z",
    characterId: "c1",
    characterName: "テック先生",
  },
  {
    id: "s2",
    content: "React vs Vue、2026年の選択肢を比較",
    platform: "twitter",
    scheduledAt: "2026-04-08T12:00:00Z",
    characterId: "c2",
    characterName: "エンジニアBot",
  },
  {
    id: "s3",
    content: "リモートワークの未来について考察",
    platform: "threads",
    scheduledAt: "2026-04-09T10:00:00Z",
    characterId: "c1",
    characterName: "テック先生",
  },
];

export const characters: Character[] = [
  {
    id: "c1",
    name: "テック先生",
    tone: "フレンドリーで教育的",
    description: "技術トピックをわかりやすく解説するキャラクター",
    avatar: "👨‍🏫",
    isActive: true,
  },
  {
    id: "c2",
    name: "エンジニアBot",
    tone: "カジュアルで技術的",
    description: "最新技術トレンドを追いかけるエンジニア風キャラクター",
    avatar: "🤖",
    isActive: true,
  },
  {
    id: "c3",
    name: "ビジネスアナリスト",
    tone: "プロフェッショナルで分析的",
    description: "ビジネス視点でテクノロジーを分析するキャラクター",
    avatar: "📊",
    isActive: false,
  },
];

export const notes: Note[] = [
  {
    id: "n1",
    title: "エンゲージメント率の改善メモ",
    content: "画像付き投稿は平均2.3倍のエンゲージメントを獲得。朝7時と夜9時の投稿が最も反応が良い。",
    tags: ["分析", "エンゲージメント"],
    createdAt: "2026-04-05T14:00:00Z",
    updatedAt: "2026-04-06T10:00:00Z",
  },
  {
    id: "n2",
    title: "AIプロンプトのベストプラクティス",
    content: "具体的な指示 + トーン指定 + 文字数制限が効果的。キャラ設定を含めると一貫性が出る。",
    tags: ["AI", "プロンプト"],
    createdAt: "2026-04-04T09:00:00Z",
    updatedAt: "2026-04-04T09:00:00Z",
  },
];
