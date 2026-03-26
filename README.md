# 客戶啟動儀表板

高端互動式客戶項目提案儀表板，可以直接在銷售通話中做為 Pitch 視覺輔助。

基於 Next.js、Tailwind CSS v4、Framer Motion 構建。

暗色沉浸式設計，內建網格紋理、轉角邊框、3D 傾斜卡片、視差圖片、動態計數器、滾動觸發動畫。

## 快速開始

### 1. 打開 Claude Code，貼上這段 prompt：

```
clone this 客戶啟動儀表板模板，並為我的事業進行客製化。

git clone https://github.com/mimo4o/client-dashboard.git my-client-dashboard

現在引導我完成設置。一次問我一個部分：
1. 我的工作室/品牌（名稱、頭銜、郵箱、品牌色、Logo）
2. 我的客戶（名稱、聯絡人、行業）
3. 項目資訊（名稱、類型、標語、摘要、目標、時長）
4. 時間線階段（階段名稱、日期、任務）
5. 交付物（類別與項目數量）
6. 服務範圍（包含與不包含的項目）
7. 定價（明細、折扣、付款方式、付款鏈接）
8. 圖片（根據客戶行業建議 Unsplash 圖片）
9. 下一步與 CTA

全部回答完後，生成客製化的 src/lib/project-data.ts 文件，並更新 src/app/globals.css 的品牌色。然後告訴我怎麼啟動。
```

剩下的 Claude 會自動引導你完成 9 個步驟的問答，生成你的專屬儀表板。
