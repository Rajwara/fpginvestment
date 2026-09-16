export const site = {
  name: "FPG Investment",
  shortName: "FPG",
  tagline: "Disciplined capital, compounded patiently.",
  description:
    "FPG Investment is a multi-strategy asset manager investing across public and private markets on behalf of institutions, endowments and family offices.",
  url: "https://fpginvestment.vercel.app",
  founded: 2009,
  email: "investors@fpginvestment.com",
  phone: "+1 (212) 555-0142",
  address: {
    line1: "One Bryant Park, 42nd Floor",
    line2: "New York, NY 10036",
  },
};

export const nav = [
  { label: "Strategies", href: "/strategies" },
  { label: "Approach", href: "/#approach" },
  { label: "Insights", href: "/insights" },
  { label: "Firm", href: "/firm" },
];

export const metrics = [
  { value: "$14.2B", label: "Assets under management", note: "As of 31 Dec 2025" },
  { value: "16 yrs", label: "Investing through cycles", note: "Founded 2009" },
  { value: "11.4%", label: "Net annualised return", note: "Flagship, since inception" },
  { value: "180+", label: "Institutional partners", note: "Across 14 countries" },
];

export const strategies = [
  {
    id: "public-equities",
    name: "Global Equities",
    allocation: "42%",
    horizon: "5–10 year holds",
    summary:
      "A concentrated book of 25–35 businesses with durable pricing power, bought when the market is distracted by the next two quarters.",
    points: [
      "Concentrated, low-turnover portfolio",
      "Fundamental, bottom-up underwriting",
      "Valuation discipline over narrative",
    ],
  },
  {
    id: "private-credit",
    name: "Private Credit",
    allocation: "27%",
    horizon: "3–6 year duration",
    summary:
      "Senior secured lending to profitable mid-market companies that banks have stepped away from — structured with covenants that actually bite.",
    points: [
      "First-lien, floating-rate exposure",
      "Direct origination, no syndicate risk",
      "Documented downside protection",
    ],
  },
  {
    id: "real-assets",
    name: "Real Assets",
    allocation: "19%",
    horizon: "7–15 year holds",
    summary:
      "Infrastructure and income-producing property with contracted cash flows, inflation linkage and a clear path to operational improvement.",
    points: [
      "Contracted or regulated revenue",
      "Inflation-linked escalators",
      "Operator-led value creation",
    ],
  },
  {
    id: "opportunistic",
    name: "Opportunistic",
    allocation: "12%",
    horizon: "Event-driven",
    summary:
      "Capital held deliberately in reserve, deployed into dislocations — forced sellers, complex situations and markets nobody wants to underwrite.",
    points: [
      "Dry powder by design",
      "Complexity and illiquidity premia",
      "Concentrated, high-conviction sizing",
    ],
  },
];

export const principles = [
  {
    number: "01",
    title: "Underwrite the downside first",
    body: "Every position begins with the question of what we lose if we are wrong. Return is what remains after risk has been priced honestly.",
  },
  {
    number: "02",
    title: "Concentrate where we have an edge",
    body: "We would rather own thirty businesses we understand completely than three hundred we understand partially. Diversification is not a substitute for judgement.",
  },
  {
    number: "03",
    title: "Let time do the compounding",
    body: "Our average holding period is measured in years, not quarters. Turnover is a cost; patience is the only edge that has never been arbitraged away.",
  },
  {
    number: "04",
    title: "Align every incentive",
    body: "Partners and staff are among the largest investors in our own funds. We are paid when our clients are, and not before.",
  },
];

export const performance = [
  { year: "2021", fund: 18.4, bench: 16.2 },
  { year: "2022", fund: -6.1, bench: -18.1 },
  { year: "2023", fund: 21.7, bench: 24.2 },
  { year: "2024", fund: 15.9, bench: 13.4 },
  { year: "2025", fund: 12.8, bench: 9.6 },
];

export const insights = [
  {
    slug: "the-cost-of-being-early",
    category: "Market Commentary",
    date: "2026-08-14",
    readTime: "6 min",
    title: "The cost of being early is indistinguishable from being wrong",
    excerpt:
      "Credit spreads have compressed to levels last seen in 2007. We look at what a decade of data says about where forward returns go from here — and why we are shortening duration.",
  },
  {
    slug: "private-credit-discipline",
    category: "Strategy Note",
    date: "2026-06-02",
    readTime: "9 min",
    title: "Private credit has grown up. Its underwriting has not.",
    excerpt:
      "The asset class has quadrupled in a decade. Covenant packages have thinned in lockstep. A field guide to the documentation terms that separate lending from hoping.",
  },
  {
    slug: "inflation-linked-real-assets",
    category: "Research",
    date: "2026-03-21",
    readTime: "11 min",
    title: "What actually passes inflation through",
    excerpt:
      "Not all real assets are real. We decompose fifteen years of cash flows across infrastructure, logistics and regulated utilities to find where the linkage genuinely holds.",
  },
];

export const team = [
  { name: "Eleanor Vance", role: "Managing Partner, Chief Investment Officer", prior: "Previously Wellington Management", initials: "EV" },
  { name: "Marcus Oyelaran", role: "Partner, Head of Private Credit", prior: "Previously Ares Management", initials: "MO" },
  { name: "Sofia Renard", role: "Partner, Head of Real Assets", prior: "Previously Brookfield", initials: "SR" },
  { name: "David Kimura", role: "Chief Risk Officer", prior: "Previously Federal Reserve Bank of NY", initials: "DK" },
];
