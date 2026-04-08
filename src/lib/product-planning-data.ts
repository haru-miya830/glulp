import { PlanningPhase } from "@/types";

export const planningPhases: PlanningPhase[] = [
  {
    id: "competitor-analysis",
    number: "①",
    title: "競合分析",
    description: "市場と競合の徹底調査",
    color: "violet",
    tasks: [
      {
        id: "ca-1",
        title: "アマゾンとSNSアフィの競合調査",
        details: [
          "販売数",
          "価格",
          "クチコミ",
          "訴求",
          "強み",
          "内容量",
          "競合量",
        ],
      },
      {
        id: "ca-2",
        title: "SNS投稿状況の調査",
        details: [
          "競合の投稿状況と訴求内容をIG、TT、X、YTで調査",
        ],
      },
      {
        id: "ca-3",
        title: "Webメディア・比較記事分析",
        details: [
          "「カテゴリ名+おすすめ」等で検索し、比較記事を分析",
          "モール以外の競合の洗い出し",
        ],
      },
    ],
  },
  {
    id: "self-analysis",
    number: "②",
    title: "自社分析",
    description: "商品設計とマーケ戦略の立案",
    estimatedDuration: "3~7営業日",
    color: "blue",
    tasks: [
      {
        id: "sa-1",
        title: "商品設計",
        details: [
          "Who / What / How",
          "コンセプト",
          "勝ち筋",
          "訴求したい強み3つ",
          "価格等の設計",
          "ベネフィット分析",
          "模倣品防止施策",
        ],
      },
      {
        id: "sa-2",
        title: "マーケ戦略・戦術・チャネル立案",
        details: [
          "獲得チャネルの軸と獲得チャネルの精査",
          "コスト算出",
          "継続impを出せるかの検証",
        ],
      },
      {
        id: "sa-3",
        title: "SNS投稿者リストアップ",
        details: [
          "IG、TT、X、YTで10~20名ほどリストアップ",
        ],
      },
      {
        id: "sa-4",
        title: "利益試算表・事業計画制作",
        details: [
          "アマゾンで最低500万円の売上目標",
        ],
      },
      {
        id: "sa-5",
        title: "LP ワイヤーフレーム制作",
        details: [
          "LPを作る場合は40~80h",
          "モールのみの場合は不要",
        ],
        estimatedHours: "40~80h",
      },
      {
        id: "sa-6",
        title: "OEMに問い合わせ",
      },
    ],
    approvalRequired: "宮下と塚本へのFT・プレゼン&承認",
  },
  {
    id: "sales-preparation",
    number: "③",
    title: "販売準備",
    description: "モール出店・LP制作・メディア立ち上げ",
    color: "cyan",
    tasks: [
      {
        id: "sp-1",
        title: "モール出店",
        details: [
          "アマゾン、楽天、ヤフー、Q10",
          "登録（1ヶ月）とカタログ設計（1~2ヶ月）",
          "外注の場合：登録5h、カタログディレクション5h",
        ],
        estimatedHours: "1~2ヶ月",
      },
      {
        id: "sp-2",
        title: "LP制作",
        details: [
          "宮下と塚本の承認が必要",
        ],
        estimatedHours: "2~3ヶ月",
      },
      {
        id: "sp-3",
        title: "IG・TikTokメディア立ち上げ",
      },
      {
        id: "sp-4",
        title: "IFリストアップ",
      },
      {
        id: "sp-5",
        title: "同梱物制作",
        details: [
          "クチコミをよくするため",
        ],
      },
      {
        id: "sp-6",
        title: "仕入れと物流",
        details: [
          "通常：2~6ヶ月",
          "オリジナルの場合：5~12ヶ月",
        ],
        estimatedHours: "2~6ヶ月",
      },
    ],
  },
  {
    id: "sales-operations",
    number: "④",
    title: "販売開始運用",
    description: "広告運用・メディア運用・IF投稿促進",
    color: "emerald",
    tasks: [
      {
        id: "so-1",
        title: "モール広告運用",
        details: [
          "外注の場合：月3~5h",
          "内製の場合：月20h",
        ],
      },
      {
        id: "so-2",
        title: "メディア運用",
      },
      {
        id: "so-3",
        title: "IFの投稿促進",
        estimatedHours: "月60~80h",
      },
    ],
  },
];
