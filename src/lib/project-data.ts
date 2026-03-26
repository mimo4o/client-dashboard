export const PROJECT = {
  // ─── Brand Color ──────────────────────────────────────────
  // Change this hex AND the matching --color-accent in globals.css
  accentColor: "#7f161f",

  client: {
    name: "Luminex Academy",
    logo: "/client-logo.png",
    contactName: "陳柏翰",
    contactRole: "創辦人",
    contactEmail: "brian@luminex.co",
    industry: "線上教練",
  },
  studio: {
    name: "EVO+",
    role: "Evolution Acquisition",
    email: "hello@evoplus.co",
  },
  project: {
    name: "內容獲客引擎建置",
    tagline: "180 天內為你的事業新增 20 位高單價客戶",
    type: "商業成長顧問",
    startDate: "第 1 週",
    endDate: "第 24 週",
    duration: "6 個月",
    status: "等待確認" as const,
  },
  overview: {
    summary:
      "透過安裝一套經過驗證的內容獲客引擎（Content Acquisition Engine），讓你的線上事業擁有可預測的收入成長系統。重點不是教你更多新工具，而是把價值加入你現有的產品，讓現金流更穩定。",
    objectives: [
      "定位重塑：精準吸引高單價客戶，告別低價競爭",
      "打造最強 Offer：成為你所在 Niche 的 #1 選擇",
      "建立名單引流系統：一週內將行事曆填滿預約",
      "提升成交率：透過高出席率預約系統與銷售腳本穩定成交",
    ],
  },
  timeline: [
    {
      phase: "基礎建設",
      week: "第 1-4 週",
      date: "第 1-4 週",
      status: "upcoming" as const,
      tasks: [
        "定位重塑與高價客戶畫像分析",
        "打造最強 Offer 與差異化策略",
        "建立品牌訊息框架與價值主張",
        "競品分析與 Niche 定位確認",
      ],
    },
    {
      phase: "名單引流",
      week: "第 5-12 週",
      date: "第 5-12 週",
      status: "upcoming" as const,
      tasks: [
        "創造高轉化免費資源（Lead Magnet）",
        "建立自動化名單收集系統",
        "加溫現有名單與內容行銷策略",
        "社群內容排程與發佈執行",
      ],
    },
    {
      phase: "預約與成交",
      week: "第 13-18 週",
      date: "第 13-18 週",
      status: "upcoming" as const,
      tasks: [
        "高出席率預約系統建置與優化",
        "高價銷售腳本撰寫與演練",
        "常見反對意見處理策略",
        "成交流程自動化與跟進系統",
      ],
    },
    {
      phase: "規模化與優化",
      week: "第 19-24 週",
      date: "第 19-24 週",
      status: "upcoming" as const,
      tasks: [
        "數據追蹤與轉化率優化",
        "廣告投放策略與素材製作",
        "系統自動化升級與團隊交接",
        "成果檢視與長期成長規劃",
      ],
    },
  ],
  deliverables: [
    {
      category: "定位與策略",
      icon: "◆",
      items: [
        { name: "品牌定位報告", quantity: "1 份", description: "完整的市場定位與競品分析文件" },
        { name: "高價 Offer 設計", quantity: "1 套", description: "差異化的產品/服務方案架構" },
        { name: "客戶畫像文件", quantity: "1 份", description: "理想高單價客戶的完整畫像" },
        { name: "價值主張框架", quantity: "1 套", description: "品牌核心訊息與溝通策略" },
      ],
    },
    {
      category: "內容與引流",
      icon: "▶",
      items: [
        { name: "免費資源設計", quantity: "1 套", description: "高轉化 Lead Magnet 完整製作" },
        { name: "內容行銷策略", quantity: "1 份", description: "30 天社群內容排程與模板" },
        { name: "自動化漏斗", quantity: "1 套", description: "從引流到預約的自動化流程" },
      ],
    },
    {
      category: "銷售系統",
      icon: "◇",
      items: [
        { name: "預約系統", quantity: "1 套", description: "高出席率的預約與提醒系統" },
        { name: "銷售腳本", quantity: "1 份", description: "針對高單價客戶的成交話術" },
        { name: "反對意見手冊", quantity: "1 份", description: "常見拒絕理由的應對策略" },
        { name: "跟進系統", quantity: "1 套", description: "自動化客戶跟進與培育流程" },
      ],
    },
    {
      category: "數據與優化",
      icon: "□",
      items: [
        { name: "數據追蹤面板", quantity: "1 套", description: "關鍵指標即時監控儀表板" },
        { name: "廣告素材包", quantity: "1 套", description: "付費廣告的圖文與影片素材" },
        { name: "系統操作手冊", quantity: "1 份", description: "完整的系統使用與維護指南" },
      ],
    },
  ],
  scope: {
    included: [
      "完整的品牌定位與 Offer 策略規劃",
      "內容獲客引擎全套系統建置",
      "高轉化免費資源（Lead Magnet）設計與製作",
      "自動化名單收集與加溫系統",
      "高出席率預約系統建置",
      "高價銷售腳本與反對意見處理",
      "6 個月一對一顧問陪跑",
      "數據追蹤與每月優化報告",
    ],
    excluded: [
      "廣告投放費用（另計）",
      "第三方軟體訂閱費用",
      "影片拍攝與後製",
      "網站開發與維護",
      "實體活動策劃",
      "客服外包服務",
    ],
  },
  quote: {
    currency: "USD",
    lineItems: [
      { name: "品牌定位與策略規劃", description: "定位重塑、Offer 設計、客戶畫像", price: 1880 },
      { name: "內容獲客系統建置", description: "Lead Magnet、內容策略、自動化漏斗", price: 1980 },
      { name: "銷售系統與成交優化", description: "預約系統、銷售腳本、跟進系統", price: 1170 },
      { name: "6 個月顧問陪跑", description: "一對一指導、數據追蹤、持續優化", price: 970 },
    ],
    subtotal: 6000,
    discount: null as { label: string; percentage: number; amount: number } | null,
    total: 6000,
    paymentSchedule: [
      { milestone: "簽約啟動", percentage: 50, amount: 3000, due: "簽約時支付" },
      { milestone: "達成目標", percentage: 50, amount: 3000, due: "達成 20 位高單價客戶時支付" },
    ],
    paymentTerms: "全額退款保證：完整執行後未達成 20 位高單價客戶目標，全額退款並支付 $1,088 美元道歉費",
    paymentLink: "#",
  },
  nextSteps: [
    { step: 1, title: "確認合作意向", description: "回覆此提案確認合作，我們將安排啟動會議" },
    { step: 2, title: "支付首期款項", description: "透過線上付款完成首期 50% 費用" },
    { step: 3, title: "啟動會議", description: "90 分鐘深度訪談，了解你的事業現況與目標" },
    { step: 4, title: "開始執行", description: "按照時間線展開基礎建設階段的工作" },
    { step: 5, title: "每週檢視", description: "每週一次進度檢視，確保方向正確並即時調整" },
  ],
  cta: {
    headline: "準備好讓變現更簡單了嗎？",
    body: "180 天內為你的線上事業新增 20 位高單價客戶，並享有全額退款保證。",
    buttonText: "立即啟動合作",
    email: "hello@evoplus.co",
  },
  images: {
    hero1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    hero2: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    product: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    editorial: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    texture: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    brutalist: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
  },
};
