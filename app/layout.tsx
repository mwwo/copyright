import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Inter } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "知产猫 RuanZhuInk - AI 软著材料生成平台",
  description:
    "一句话生成软著申请材料草稿。从创建、编辑到导出，知产猫帮你把复杂流程变成简单操作。面向个人开发者和小团队的软著材料生成平台。",
  keywords: [
    "软著",
    "软件著作权",
    "申请材料",
    "AI生成",
    "知产猫",
    "RuanZhuInk",
  ],
  openGraph: {
    title: "知产猫 RuanZhuInk - AI 软著材料生成平台",
    description:
      "写一句项目描述，就能生成软著申请材料草稿。安全、高效、专业。",
    url: "https://www.ruanzhu.ink",
    siteName: "知产猫",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
