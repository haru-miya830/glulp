import type { Metadata } from "next";
import Sidebar from "@/components/layout/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glulp - AI投稿ダッシュボード",
  description: "AIを活用したSNS投稿管理ダッシュボード",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className="h-full antialiased dark"
    >
      <body className="min-h-full">
        <Sidebar />
        <main className="md:ml-64 min-h-screen p-6 pt-20 md:pt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
