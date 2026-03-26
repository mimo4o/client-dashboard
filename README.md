# Evo+ 客戶入職儀表板

高端互動式客戶項目提案儀表板。基於 Next.js、Tailwind CSS v4、Framer Motion 構建。

暗色沉浸式設計，內建網格紋理、轉角邊框、3D 傾斜卡片、視差圖片、動態計數器、滾動觸發動畫。

## 快速開始

### AI 自動設置（推薦）

用 Claude Code 打開這個項目，Claude 會自動讀取 `PROMPT.md` 並引導你完成設置：

```bash
git clone https://github.com/YOUR_USERNAME/evo-client-dashboard.git
cd evo-client-dashboard
```

然後在 Claude Code 中打開項目，按照問答流程回答 8 個部分的問題即可。

### 手動設置

```bash
git clone https://github.com/YOUR_USERNAME/evo-client-dashboard.git
cd evo-client-dashboard
npm install
npm run dev
```

打開 http://localhost:3000

編輯 `src/lib/project-data.ts` 填入你的內容，更新 `src/app/globals.css` 的品牌色。

## 自定義

所有內容集中在 **兩個文件**：

| 文件 | 修改內容 |
|------|---------|
| `src/lib/project-data.ts` | 所有文字、定價、時間線、交付物、圖片 |
| `src/app/globals.css` | 品牌色（第 8-9 行：`--color-accent`） |

不要修改組件文件，除非你想改變設計本身。

## 部署

推送到 GitHub 並連接 Vercel，或：

```bash
npx vercel
```

在 Vercel 設置中添加自定義域名，例如 `proposal.yourstudio.com`。

## 技術棧

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion
- TypeScript

## Credit

Original template by [@bywaviboy](https://instagram.com/bywaviboy), customized by Evo+.
