export const PROJECT = {
  // ─── Brand Color ──────────────────────────────────────────
  // Change this hex AND the matching --color-accent in globals.css
  accentColor: "#333333",

  client: {
    name: "客戶名稱",
    logo: "/client-logo.png",
    contactName: "聯絡人姓名",
    contactRole: "職稱",
    contactEmail: "client@example.com",
    industry: "行業",
  },
  studio: {
    name: "你的品牌",
    role: "你的公司名稱",
    email: "hello@example.com",
  },
  project: {
    name: "項目名稱",
    tagline: "一句話描述項目的核心價值",
    type: "項目類型",
    startDate: "第 1 週",
    endDate: "第 12 週",
    duration: "3 個月",
    status: "等待確認" as const,
  },
  overview: {
    summary:
      "在這裡描述你將為客戶做什麼。用 2-3 句話概括項目的願景和價值主張。",
    objectives: [
      "核心目標一：描述你要達成的第一個目標",
      "核心目標二：描述你要達成的第二個目標",
      "核心目標三：描述你要達成的第三個目標",
      "核心目標四：描述你要達成的第四個目標",
    ],
  },
  timeline: [
    {
      phase: "階段一",
      week: "第 1-4 週",
      date: "第 1-4 週",
      status: "upcoming" as const,
      tasks: [
        "任務一",
        "任務二",
        "任務三",
        "任務四",
      ],
    },
    {
      phase: "階段二",
      week: "第 5-8 週",
      date: "第 5-8 週",
      status: "upcoming" as const,
      tasks: [
        "任務一",
        "任務二",
        "任務三",
        "任務四",
      ],
    },
    {
      phase: "階段三",
      week: "第 9-12 週",
      date: "第 9-12 週",
      status: "upcoming" as const,
      tasks: [
        "任務一",
        "任務二",
        "任務三",
        "任務四",
      ],
    },
    {
      phase: "階段四",
      week: "第 13-16 週",
      date: "第 13-16 週",
      status: "upcoming" as const,
      tasks: [
        "任務一",
        "任務二",
        "任務三",
        "任務四",
      ],
    },
  ],
  deliverables: [
    {
      category: "類別一",
      icon: "◆",
      items: [
        { name: "交付項目", quantity: "1 份", description: "項目描述" },
        { name: "交付項目", quantity: "1 套", description: "項目描述" },
        { name: "交付項目", quantity: "1 份", description: "項目描述" },
      ],
    },
    {
      category: "類別二",
      icon: "▶",
      items: [
        { name: "交付項目", quantity: "1 份", description: "項目描述" },
        { name: "交付項目", quantity: "1 套", description: "項目描述" },
        { name: "交付項目", quantity: "1 份", description: "項目描述" },
      ],
    },
    {
      category: "類別三",
      icon: "◇",
      items: [
        { name: "交付項目", quantity: "1 份", description: "項目描述" },
        { name: "交付項目", quantity: "1 套", description: "項目描述" },
        { name: "交付項目", quantity: "1 份", description: "項目描述" },
      ],
    },
    {
      category: "類別四",
      icon: "□",
      items: [
        { name: "交付項目", quantity: "1 份", description: "項目描述" },
        { name: "交付項目", quantity: "1 套", description: "項目描述" },
        { name: "交付項目", quantity: "1 份", description: "項目描述" },
      ],
    },
  ],
  scope: {
    included: [
      "包含服務項目一",
      "包含服務項目二",
      "包含服務項目三",
      "包含服務項目四",
      "包含服務項目五",
      "包含服務項目六",
    ],
    excluded: [
      "不包含項目一",
      "不包含項目二",
      "不包含項目三",
      "不包含項目四",
      "不包含項目五",
    ],
  },
  quote: {
    currency: "TWD",
    lineItems: [
      { name: "服務項目一", description: "服務描述", price: 10000 },
      { name: "服務項目二", description: "服務描述", price: 10000 },
      { name: "服務項目三", description: "服務描述", price: 10000 },
    ],
    subtotal: 30000,
    discount: null as { label: string; percentage: number; amount: number } | null,
    total: 30000,
    paymentSchedule: [
      { milestone: "簽約付款", percentage: 50, amount: 15000, due: "簽約時支付" },
      { milestone: "項目完成", percentage: 50, amount: 15000, due: "項目完成時支付" },
    ],
    paymentTerms: "付款條款描述",
    paymentLink: "#",
  },
  nextSteps: [
    { step: 1, title: "步驟一", description: "步驟描述" },
    { step: 2, title: "步驟二", description: "步驟描述" },
    { step: 3, title: "步驟三", description: "步驟描述" },
    { step: 4, title: "步驟四", description: "步驟描述" },
    { step: 5, title: "步驟五", description: "步驟描述" },
  ],
  cta: {
    headline: "準備好開始了嗎？",
    body: "一句話行動號召，激勵客戶立即行動。",
    buttonText: "立即開始",
    email: "hello@example.com",
  },
  images: {
    hero1: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    hero2: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    product: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    editorial: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=80",
    texture: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
    brutalist: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
  },
};
