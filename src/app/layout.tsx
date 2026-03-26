import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "主理人宇宙 × Evo+ | 品牌視覺重塑提案",
  description: "品牌視覺重塑項目提案與入職體驗。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="noise grid-texture min-h-full flex flex-col">{children}</body>
    </html>
  );
}
