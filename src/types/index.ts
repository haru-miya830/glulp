export interface Post {
  id: string;
  content: string;
  platform: "twitter" | "instagram" | "threads";
  status: "draft" | "scheduled" | "posted" | "failed";
  scheduledAt?: string;
  postedAt?: string;
  likes?: number;
  retweets?: number;
  impressions?: number;
  characterId?: string;
}

export interface Character {
  id: string;
  name: string;
  tone: string;
  description: string;
  avatar: string;
  isActive: boolean;
}

export interface ScheduledPost {
  id: string;
  content: string;
  platform: "twitter" | "instagram" | "threads";
  scheduledAt: string;
  characterId: string;
  characterName: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalPosts: number;
  scheduledPosts: number;
  totalImpressions: number;
  avgEngagement: number;
}

// 商品企画マーケティングフレームワーク
export interface PlanningTask {
  id: string;
  title: string;
  details?: string[];
  estimatedHours?: string;
  note?: string;
}

export interface PlanningPhase {
  id: string;
  number: string;
  title: string;
  description: string;
  estimatedDuration?: string;
  color: "violet" | "blue" | "cyan" | "emerald";
  tasks: PlanningTask[];
  approvalRequired?: string;
}

export interface ProductPlanningProject {
  id: string;
  name: string;
  createdAt: string;
  phases: {
    phaseId: string;
    completedTaskIds: string[];
  }[];
}
