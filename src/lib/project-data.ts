export const PROJECT = {
  // ─── Brand Color ──────────────────────────────────────────
  // Change this hex AND the matching --color-accent in globals.css
  accentColor: "#E11D2B",

  client: {
    name: "Nike",
    logo: "/nike-logo.svg",
    contactName: "Sarah Mitchell",
    contactRole: "Brand Marketing Lead",
    contactEmail: "sarah.mitchell@nike.com",
    industry: "Sportswear / Footwear / Performance Fashion",
  },
  studio: {
    name: "Waviboy",
    role: "Creative Direction / AI Visual Studio",
    email: "hello@waviboy.com",
  },
  project: {
    name: "Nike Air Motion Campaign",
    tagline: "Movement, built for the future.",
    type: "Creative Direction + AI Visual Production",
    startDate: "Week 1",
    endDate: "Week 4",
    duration: "4 Weeks",
    status: "Awaiting Approval" as const,
  },
  overview: {
    summary:
      "A premium visual world for the Air Motion campaign. High-impact launch assets for social and paid media, positioning the product in an editorial, culture-led way. Fast-turnaround campaign visuals without traditional production overhead.",
    objectives: [
      "Build a premium visual world for the campaign",
      "Create high-impact launch assets for social and paid media",
      "Position the product in a more editorial, culture-led way",
      "Deliver fast-turnaround campaign visuals without traditional production overhead",
    ],
  },
  timeline: [
    {
      phase: "Discovery / Direction",
      week: "Week 1",
      date: "Week 1",
      status: "upcoming" as const,
      tasks: [
        "Brand alignment call",
        "Moodboard and visual territory exploration",
        "Creative references and campaign angle selection",
        "Initial concept routes",
      ],
    },
    {
      phase: "Worldbuilding / Concept Development",
      week: "Week 1 to 2",
      date: "Week 1 to 2",
      status: "upcoming" as const,
      tasks: [
        "Develop hero visual direction",
        "Build campaign language, styling logic, lighting references",
        "Define color palette, environments, energy, motion feel",
      ],
    },
    {
      phase: "Asset Production",
      week: "Week 2 to 3",
      date: "Week 2 to 3",
      status: "upcoming" as const,
      tasks: [
        "Generate hero campaign visuals",
        "Develop supporting stills and social assets",
        "Internal refinement and edit rounds",
      ],
    },
    {
      phase: "Final Delivery",
      week: "Week 4",
      date: "Week 4",
      status: "upcoming" as const,
      tasks: [
        "Final selects delivered",
        "Export assets in required ratios and formats",
        "Optional rollout guidance for launch",
      ],
    },
  ],
  deliverables: [
    {
      category: "Creative Direction",
      icon: "◆",
      items: [
        { name: "Campaign Concept Deck", quantity: "1 deck", description: "Full creative concept and campaign direction presentation" },
        { name: "Visual World / Moodboard System", quantity: "1 system", description: "Complete visual world with moodboard references and styling logic" },
        { name: "Product Positioning Direction", quantity: "1 document", description: "How the product sits within the campaign narrative" },
        { name: "Styling & Composition Framework", quantity: "1 framework", description: "Rules for styling, lighting, and composition across all assets" },
      ],
    },
    {
      category: "Hero Visual Assets",
      icon: "▶",
      items: [
        { name: "Hero Campaign Images", quantity: "5 pieces", description: "Primary campaign visuals for hero placements" },
        { name: "Secondary Campaign Visuals", quantity: "10 pieces", description: "Supporting imagery across campaign touchpoints" },
        { name: "Alternate Visual Routes", quantity: "3 routes", description: "Alternative creative directions for A/B testing" },
      ],
    },
    {
      category: "Social Content Assets",
      icon: "◇",
      items: [
        { name: "Instagram Feed Assets", quantity: "6 pieces", description: "Square and portrait format feed posts" },
        { name: "Story Assets", quantity: "4 pieces", description: "Full-screen vertical story content" },
        { name: "Paid Ad Variations", quantity: "3 pieces", description: "Performance-optimised ad creatives" },
        { name: "Launch Announcement Graphics", quantity: "2 pieces", description: "High-impact graphics for campaign launch moment" },
      ],
    },
    {
      category: "Presentation / Internal Use",
      icon: "□",
      items: [
        { name: "Polished PDF Presentation Deck", quantity: "1 deck", description: "Stakeholder-ready campaign presentation" },
        { name: "Mockups for Review", quantity: "1 set", description: "Product and campaign mockups for internal alignment" },
        { name: "Visual Rationale Slides", quantity: "1 set", description: "Creative reasoning and direction documentation" },
      ],
    },
  ],
  scope: {
    included: [
      "Creative strategy and direction",
      "Concept development",
      "AI-assisted premium visual production",
      "Two rounds of revisions",
      "Final exports for social and presentation use",
      "Delivery in standard formats",
    ],
    excluded: [
      "Physical shoot production",
      "Video editing / full motion deliverables",
      "Talent casting",
      "Copywriting beyond short campaign lines",
      "Media buying / ad placement",
      "Website build or landing page implementation",
    ],
  },
  quote: {
    currency: "GBP",
    lineItems: [
      { name: "Creative Direction & Concept Development", description: "Strategy, moodboarding, campaign angle, concept routes", price: 3000 },
      { name: "Visual World Development", description: "Colour palette, environments, styling logic, lighting references", price: 2000 },
      { name: "Hero Asset Production", description: "5 hero images, 10 secondary visuals, 3 alternate routes", price: 4500 },
      { name: "Social / Paid Asset Adaptations", description: "6 feed, 4 story, 3 ads, 2 launch graphics", price: 2000 },
      { name: "Presentation / Delivery Pack", description: "PDF deck, mockups, visual rationale slides", price: 1000 },
    ],
    subtotal: 12500,
    discount: { label: "Nike Partner / Campaign Bundle Discount", percentage: 12, amount: 1500 },
    total: 11000,
    paymentSchedule: [
      { milestone: "Upfront to Begin", percentage: 50, amount: 5500, due: "Upon approval" },
      { milestone: "Final Delivery", percentage: 50, amount: 5500, due: "Week 4" },
    ],
    paymentTerms: "7 days from invoice date",
    paymentLink: "#",
  },
  nextSteps: [
    { step: 1, title: "Approve Scope & Pricing", description: "Review the deliverables, timeline, and investment above." },
    { step: 2, title: "Confirm Timeline", description: "Lock in start date and key milestones." },
    { step: 3, title: "Pay Initial Invoice", description: "50% upfront payment to kick off the project." },
    { step: 4, title: "Share References", description: "Send product references, campaign references, and brand assets." },
    { step: 5, title: "Kickoff Call", description: "Scheduled within 3 working days of payment." },
  ],
  cta: {
    headline: "Ready to move?",
    body: "Reply with approval and we'll issue invoice and lock project dates.",
    email: "hello@waviboy.com",
  },
  images: {
    hero1: "/nike-editorial.png",
    hero2: "/nike-hero2.png",
    product: "/nike-product.png",
    editorial: "/nike-hero.png",
    texture: "/nike-texture.png",
    brutalist: "/nike-brutalist.png",
  },
};
