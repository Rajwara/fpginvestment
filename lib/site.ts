export const site = {
  name: "FP Global",
  shortName: "FPG",
  tagline: "Redefining hospitality.",
  description:
    "Redefining hospitality through thoughtful development, world-class management and exceptional guest experiences.",
  url: "https://fpginvestment.vercel.app",
  founded: 2009,
  email: "info@fpginvestment.com",
  phone: "+971 55 843 7070",
  address: { line1: "DHA Phase 6", line2: "Lahore, Pakistan" },
  hours: { open: "Mon–Sat: 09:00am–07:00pm", closed: "Sunday: Closed" },
  social: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
};

/** The six service lines. Drives the mega menu, the home grid and the footer. */
export const services = [
  {
    id: "business-development",
    card: "/assets/images/home/service-business-development.webp",
    image: "/assets/images/ProfessionalGuidanceimg-1.jpg",
    name: "Business Development & Advisory",
    short: "Business Development",
    icon: "compass",
    summary:
      "Feasibility, positioning and brand selection \u2014 the work that decides whether a project is worth building before a single foundation is poured.",
    points: ["Market and feasibility studies", "Brand selection and negotiation", "Return modelling and capital planning"],
    gallery: ["/assets/images/ProfessionalGuidanceimg-02.jpg", "/assets/images/ProfessionalGuidanceimg-03.jpg"],
    wide: "/assets/images/MissionAndGoals-03.jpg",
    sections: [
      {
        title: "Where a project is actually decided",
        body: "Most of the money in a hotel is committed long before anyone breaks ground. Site, brand, key count and room mix set the ceiling on what the asset can ever earn, and each one is difficult to unwind later. We work those decisions through with an operator\u2019s eye: what the market will pay, what it costs to serve, and what is left once the brand has taken its share.",
      },
      {
        title: "What you get out of it",
        body: "A feasibility case you can put in front of a lender or a board \u2014 demand and competitor analysis, a positioning recommendation, an operating pro forma, and a view on which brand, if any, is worth its fee. Where the answer is that the project does not work in its current shape, we would rather say so early than be proved right on opening day.",
      },
    ],
    closing:
      "Engagements usually start with a short scoping study and carry on into design and pre-opening, where it helps to have the same team holding the original assumptions.",
  },
  {
    id: "design-construction",
    card: "/assets/images/home/service-design-construction.webp",
    image: "/assets/images/ProfessionalGuidanceimg-02.jpg",
    name: "Design & Construction",
    short: "Design & Construction",
    icon: "blueprint",
    summary:
      "Technical services from concept design through handover, holding the line on brand standards, programme and cost at every stage.",
    points: ["Concept and technical design review", "Contractor procurement", "Programme and cost control"],
    gallery: ["/assets/images/ProfessionalGuidanceimg-03.jpg", "/assets/images/ProfessionalGuidanceimg-04.jpg"],
    wide: "/assets/images/MissionAndGoalsimg-04.jpg",
    sections: [
      {
        title: "Design an operator can run",
        body: "Service corridors, back-of-house circulation, loading and storage decide labour cost for the life of the building \u2014 and they are the first things value-engineered out of a drawing set. We review the design as the people who will have to staff it, not only as the people who have to build it.",
      },
      {
        title: "Holding programme and cost",
        body: "We sit on the owner\u2019s side of the table through procurement and construction: reviewing tenders, tracking the programme against the opening date, and flagging the variations that quietly move both. Brand standards get checked against the drawings before they are checked on site, where fixing them costs real money.",
      },
    ],
    closing:
      "We take the technical services mandate end to end, or come in for design review alone where a consultant and contractor team is already appointed.",
  },
  {
    id: "pre-opening",
    card: "/assets/images/home/service-pre-opening.webp",
    image: "/assets/images/ProfessionalGuidanceimg-03.jpg",
    name: "Pre-Opening",
    short: "Pre-Opening",
    icon: "key",
    summary:
      "The eighteen months that determine a hotel\u2019s first year. Recruitment, systems, supply chain and the critical path to a confident opening day.",
    points: ["Critical path and budget", "Recruitment and training", "Systems, FF&E and OS&E"],
    gallery: ["/assets/images/ProfessionalGuidanceimg-04.jpg", "/assets/images/ProfessionalGuidanceimg-05.jpg"],
    wide: "/assets/images/MissionAndGoals-img2.jpg",
    sections: [
      {
        title: "The critical path runs backwards",
        body: "A confident opening day is planned back from the date, not forward from today. Recruitment, licensing, systems, supply chain and training each carry their own lead time, and the ones that get compressed are almost always the ones that surface again in the first year\u2019s guest scores.",
      },
      {
        title: "People, systems and supply",
        body: "We build the org chart and the hiring plan, run the recruitment, and train to the brand\u2019s standards. In parallel we specify and procure FF&E and OS&E, stand up PMS, POS and the back office, and contract the supply chain before the rooms are ready \u2014 so the hotel opens operating rather than rehearsing.",
      },
    ],
    closing:
      "Mandates typically begin twelve to eighteen months out from the target opening and run through to a stabilised first quarter.",
  },
  {
    id: "takeover-turnaround",
    card: "/assets/images/home/service-takeover-turnaround.webp",
    image: "/assets/images/ProfessionalGuidanceimg-04.jpg",
    name: "Takeover & Turnaround",
    short: "Takeover & Turnaround",
    icon: "refresh",
    summary:
      "Assets that underperform rarely lack potential \u2014 they lack operating discipline. We take over, stabilise and rebuild the P&L.",
    points: ["Rapid operational diagnostic", "Cost and revenue restructuring", "Repositioning and rebranding"],
    gallery: ["/assets/images/ProfessionalGuidanceimg-05.jpg", "/assets/images/ProfessionalGuidanceimg-1.jpg"],
    wide: "/assets/images/MissionAndGoals-03.jpg",
    sections: [
      {
        title: "Diagnose before you spend",
        body: "An underperforming asset rarely needs a renovation first. It needs someone to work out whether the problem is rate, mix, cost, service, or all four \u2014 and in what order. The first thing we do is read the P&L and the market against each other.",
      },
      {
        title: "Stabilise, then rebuild",
        body: "The early weeks are about stopping the leaks: payroll per occupied room, out-of-order inventory, channel cost, and the contracts nobody has renegotiated in years. Repositioning, refurbishment or a change of brand come afterwards, once the operating base is sound and there is something worth investing behind.",
      },
    ],
    closing:
      "We take over management outright, or work alongside an incumbent team through the stabilisation period.",
  },
  {
    id: "sales-marketing",
    card: "/assets/images/home/service-sales-marketing.webp",
    image: "/assets/images/ProfessionalGuidanceimg-05.jpg",
    name: "Sales & Marketing",
    short: "Sales & Marketing",
    icon: "megaphone",
    summary:
      "Commercial strategy that fills rooms at the right rate: segmentation, channel mix, revenue management and a brand people actually remember.",
    points: ["Revenue management and pricing", "Channel and distribution strategy", "Brand, digital and PR"],
    gallery: ["/assets/images/ProfessionalGuidanceimg-1.jpg", "/assets/images/ProfessionalGuidanceimg-02.jpg"],
    wide: "/assets/images/home-hayyat-regency.jpg",
    sections: [
      {
        title: "Rate is a decision, not a result",
        body: "Filling rooms is straightforward; filling them at the right rate is the job. We start with segmentation and the true cost of each channel, then set a pricing and distribution strategy the commercial team can actually run day to day rather than admire in a deck.",
      },
      {
        title: "A brand people remember",
        body: "Digital presence, content, PR and partnerships built around what the property genuinely is, rather than the category it happens to sit in. The measure we work to is repeat business and direct share, not impressions.",
      },
    ],
    closing:
      "Available as a standalone commercial mandate, or as part of a full management agreement.",
  },
  {
    id: "hotel-management",
    card: "/assets/images/home/service-hotel-management.webp",
    image: "/assets/images/ProfessionalGuidanceimg-1.jpg",
    name: "Hotel Management & Operations",
    short: "Hotel Management",
    icon: "concierge",
    summary:
      "Full operating management under international brand standards, with owner reporting that tells you what is actually happening in your asset.",
    points: ["Full operating management", "Brand standards compliance", "Transparent owner reporting"],
    gallery: ["/assets/images/ProfessionalGuidanceimg-02.jpg", "/assets/images/ProfessionalGuidanceimg-04.jpg"],
    wide: "/assets/images/fpginvestment_banner_img1.jpg",
    sections: [
      {
        title: "Operating the asset, not just staffing it",
        body: "Full management under international brand standards: the operating team, the procedures, the controls and the audits behind them. The day to day runs to a standard, and the standard is checked rather than assumed.",
      },
      {
        title: "Reporting an owner can use",
        body: "Monthly reporting that says what actually happened in your asset \u2014 flow-through, payroll per occupied room, segment performance and the variances that matter \u2014 with commentary that explains them rather than restating them.",
      },
    ],
    closing:
      "Management agreements are structured around the asset and the owner\u2019s horizon. We are equally comfortable operating under a brand or independently.",
  },
];

type NavItem = {
  label: string;
  href: string;
  /** Opens the full About Us mega panel. */
  mega?: boolean;
  /** Opens a small dropdown of sub-pages. */
  dropdown?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", mega: true },
  { label: "Our Team", href: "/team" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  {
    label: "Hyatt Lahore",
    href: "/hyatt-lahore",
    dropdown: [
      { label: "Hyatt Regency Lahore", href: "/hyatt-lahore" },
      { label: "Premium & Luxury", href: "/premium-luxury" },
    ],
  },
];

/** The Premium & Luxury division's six qualities, in page order. */
export const luxuryPillars = [
  {
    id: "exclusive",
    title: "Exclusive",
    body: "Captures the feeling of privileged access — where guests enjoy personalised service, private spaces, and a sense of belonging to an elite experience not available to everyone.",
    image: "/assets/images/premium-luxury/exclusive-web.webp",
  },
  {
    id: "world-class",
    title: "World-Class",
    body: "Positions the brand on a global stage, offering exceptional standards, internationally recognised hospitality, and memorable experiences that rival the best in the world.",
    image: "/assets/images/premium-luxury/world-class-web.webp",
  },
  {
    id: "opulent",
    title: "Opulent",
    body: "Reflects lavish interiors, rich textures, and extravagant surroundings that offer guests a sense of indulgence and splendour the moment they arrive.",
    image: "/assets/images/premium-luxury/opulent-web.webp",
  },
  {
    id: "refined",
    title: "Refined",
    body: "Speaks to the elegance in every detail — from the curated decor to the service style — showcasing taste, sophistication and timeless quality throughout the guest journey.",
    image: "/assets/images/premium-luxury/refined-web.webp",
  },
  {
    id: "scenic",
    title: "Scenic",
    body: "Step into a home surrounded by lush green lawns that enhance both beauty and serenity.",
    image: "/assets/images/premium-luxury/scenic-web.webp",
  },
  {
    id: "intricate-artistry",
    title: "Intricate artistry",
    body: "Every corner of our space is a testament to intricate artistry, where timeless design meets masterful craftsmanship.",
    image: "/assets/images/premium-luxury/intricate-artistry-web.webp",
  },
];

/** Left panel of the About Us mega menu. */
export const megaFeature = {
  eyebrow: "Who We Are",
  image: "/assets/images/ProfessionalGuidanceimg-03.jpg",
  title: "A hospitality company built by operators.",
  body: "Two decades of developing, opening and running hotels across Pakistan and the region.",
  href: "/about",
  cta: "About FP Global",
};

export const partners = [
  { name: "AGT Middle East", logo: "/assets/images/brands/AGT.webp" },
  { name: "DHA Lahore", logo: "/assets/images/brands/DHA%20LAGORE.webp" },
  { name: "Hyatt Regency", logo: "/assets/images/brands/HAYAT%20REGENCY.webp" },
  { name: "Meerab Properties", logo: "/assets/images/brands/MEERAB.webp" },
  { name: "MGroup", logo: "/assets/images/brands/MGROUP.webp" },
  {
    name: "Valor Hospitality Partners",
    logo: "/assets/images/brands/VALOR.webp",
  },
];

export const metrics = [
  { value: "20 yrs", label: "In hospitality", note: "Founded 2009" },
  { value: "1,400+", label: "Keys developed", note: "Across the region" },
  { value: "6", label: "Service lines", note: "Concept to operations" },
  { value: "94%", label: "Guest satisfaction", note: "Portfolio average" },
];

/** Tabs in the "Mission and goals" section under the homepage banner. */
export const missionTabs = [
  {
    id: "who-we-are",
    label: "Who we are",
    body: "FP Global is a hotel and hospitality management company, working across development, opening and operation since 2009. We are operators first — the people who advise on a project are the people who end up running it.",
    points: [
      "Founded in 2009",
      "Development, opening and operation",
      "Six service lines, one team",
      "Based in Lahore, Pakistan",
      "Developer and operator, not adviser",
      "Accountable after handover",
    ],
  },
  {
    id: "vision",
    label: "Vision",
    body: "To be the partner owners turn to when a hotel has to be built properly and run properly — and, in doing it often enough, to raise what a guest in this region takes for granted.",
    points: [
      "A regional benchmark for service",
      "Hotels that hold their value",
      "Deeper Pakistani hospitality talent",
      "Long-view owners and brands",
      "Standards that travel between properties",
      "Assets still competitive in twenty years",
    ],
  },
  {
    id: "mission",
    label: "Mission",
    body: "To develop, open and operate hotels that perform for owners and are remembered by guests — keeping one accountable team across every stage, so nothing of value is lost in a handover.",
    points: [
      "Decide the hard things early",
      "One team across every stage",
      "Design an operator can run",
      "Measured against the original case",
      "Transparent monthly owner reporting",
      "Service worth remembering",
    ],
  },
];

/**
 * Collage beside the mission tabs. An entry without `src` renders as a
 * placeholder tile — drop a photograph into public/assets/images/ and add its
 * path here to fill it.
 */
export const missionCollage = [
  {
    id: "c1",
    src: "/assets/images/home/who-we-are-1.webp",
    alt: "A member of the FP Global team",
  },
  {
    id: "c2",
    src: "/assets/images/home/who-we-are-2.webp",
    alt: "Reviewing plans and performance figures",
  },
  {
    id: "c3",
    src: "/assets/images/home/who-we-are-3.webp",
    alt: "Working on an owner report",
  },
  {
    id: "c4",
    src: "/assets/images/home/who-we-are-4.webp",
    alt: "Closing a partnership agreement",
  },
];

/** Counters in the "Our Mission" band. */
export const missionStats = [
  { to: 20, suffix: "+", label: "Years in hospitality" },
  { to: 1400, suffix: "+", label: "Keys developed" },
  { to: 6, suffix: "", label: "Service lines" },
  { to: 94, suffix: "%", label: "Guest satisfaction" },
];

/**
 * Inline images set into the mission statement. Small circular crops, so any
 * photograph with a clear subject works.
 */
export const missionInline = [
  "/assets/images/ProfessionalGuidanceimg-03.jpg",
  "/assets/images/MissionAndGoalsimg-04.jpg",
  "/assets/images/ProfessionalGuidanceimg-05.jpg",
];

export const principles = [
  {
    number: "01",
    title: "Own the outcome, not the scope",
    body: "We are judged on how the asset performs after opening, not on whether a deliverable was filed on time. That standard shapes every decision before it.",
  },
  {
    number: "02",
    title: "Design for the operator",
    body: "Beautiful hotels that cost a fortune to run are a failure of design, not of management. We bring operations into the room while the drawings are still changeable.",
  },
  {
    number: "03",
    title: "Protect the guest experience",
    body: "Every cost decision is tested against what the guest will feel. The savings that show up in a review are not savings.",
  },
  {
    number: "04",
    title: "Report honestly to owners",
    body: "Owners get the same numbers we use ourselves, on the same day, including the ones we would rather explain in person.",
  },
];

export const insights = [
  {
    slug: "pre-opening-critical-path",
    category: "Operations",
    date: "2026-08-14",
    readTime: "6 min",
    image: "/assets/images/ProfessionalGuidanceimg-02.jpg",
    title: "The pre-opening decisions that quietly cost you year one",
    excerpt:
      "Most opening-year underperformance is set in motion eighteen months earlier. A look at the five critical-path items owners consistently compress — and what each one costs later.",
  },
  {
    slug: "designing-for-operators",
    category: "Development",
    date: "2026-06-02",
    readTime: "9 min",
    image: "/assets/images/MissionAndGoals-03.jpg",
    title: "Why back-of-house should be designed first",
    excerpt:
      "Service corridors, loading and staff flow shape labour cost for the life of the building. They are also the first things value-engineered out of a drawing set.",
  },
  {
    slug: "turnaround-first-90-days",
    category: "Turnaround",
    date: "2026-03-21",
    readTime: "11 min",
    image: "/assets/images/ProfessionalGuidanceimg-04.jpg",
    title: "The first ninety days of a hotel turnaround",
    excerpt:
      "What we look at, in what order, when taking over an underperforming asset — and why revenue management usually comes before any renovation conversation.",
  },
  {
    slug: "brand-or-independent",
    category: "Development",
    date: "2025-11-06",
    readTime: "8 min",
    image: "/assets/images/ProfessionalGuidanceimg-02.jpg",
    title: "When a brand is worth its fee, and when it is not",
    excerpt:
      "A flag brings distribution, standards and a lender's confidence. It also takes a share of the top line for the life of the agreement. The arithmetic is not the same in every market.",
  },
  {
    slug: "reading-a-hotel-pl",
    category: "Asset Management",
    date: "2026-01-28",
    readTime: "7 min",
    image: "/assets/images/MissionAndGoalsimg-04.jpg",
    title: "Reading a hotel P&L the way an operator reads it",
    excerpt:
      "GOP tells you what happened. Flow-through, payroll per occupied room and out-of-order nights tell you why — and which of them you can still change this quarter.",
  },
];

export const milestones = [
  {
    year: "2009",
    label: "Founded",
    event: "Founded in Lahore as a hospitality development advisory.",
  },
  {
    year: "2013",
    label: "First Pre-Opening",
    event: "First full pre-opening mandate delivered on programme.",
  },
  {
    year: "2017",
    label: "Technical Services",
    event: "Technical services and construction management brought in-house.",
  },
  {
    year: "2021",
    label: "Hotel Management",
    event: "Hotel management division launched under international brand standards.",
  },
  {
    year: "2024",
    label: "Hyatt Regency Lahore",
    event: "Hyatt Regency Lahore opens — developed and operated by FP Global.",
  },
  {
    year: "2026",
    label: "Six Service Lines",
    event: "Six service lines covering concept through daily operations.",
  },
];

export const team = [
  {
    name: "Pervez Iqbal Shahid",
    role: "Chairman",
    initials: "PS",
    tagline: "Entrepreneurial vision. Lasting presence.",
    photo: "/assets/images/our-team/pervez-iqbal-web.webp",
    linkedin: "",
    bio: [
      "Pervaiz Iqbal Shahid journey to become the Chairman initiated in November 2013, having entrepreneurship skills and utmost dedication, it was a challenging task to take the first step and mold the company into a functional organization. He always carried a vision to shine in Dubai\u2019s vibrant real estate sector, worked tirelessly and consistently over the years to grow, strengthen and make his company\u2019s presence noticeable in Dubai\u2019s flamboyant real estate market.",
      "Mr. Pervaiz always accept marginal risk factors offering opportunities to hold significant share between the competitors that helped expand company\u2019s operations and presence in the market. His work algorithm, commitment and installed competent team assured Meerab Properties to expand and stand tall as a known brokerage and investment entity in residential, commercial, off-plan properties and in multiple ventures adding value to company\u2019s growth.",
      "His strong belief is to always approach to challenging tasks and find measures out of the box to distinguish his enterprise from competitors. His qualification as Graduate in Business Administration & Commerce and holding DREI Certification extends him a strong base to continue this journey with much larger opportunities on hand that shall ensure his visionary foot prints to expand further locally and globally.",
    ],
    highlights: [] as string[],
  },
  {
    name: "Abid Yousaf",
    role: "Managing Partner",
    initials: "AY",
    tagline: "Three decades of management. Global alliances.",
    photo: "/assets/images/our-team/abid-yousaf-web.webp",
    linkedin: "",
    bio: [
      "Abid Yousaf carries over three decades of experience in Management covering areas of corporate strategy formulation, financial management, projects feasibility study, budgeting and business development, as well as product design, distribution, public relations, and human resources. Throughout his career, he developed businesses, grown market share, and improved operations. His key accomplishments include:",
      "As a Senior Expert on various dimensions of Financial Management, he has been responsible for providing visionary leadership to numerous high-budget projects with International Organizations. Over the past years, his hands-on ability to work with government and the private sector resulted in numerous successful partnerships and in expanding top investment groups globally.",
      "Being qualified as an ACA, FLMI, ACS, DBA and being a U.A.E. resident for more than two decades having worked for almost all parts of MENA and Pakistan, he is aware of the cultural intricacies and sensitivities and ready to take up a challenging role to establish innovative ideas to accomplish the raison d\u2019\u00EAtre new intervention areas for future focus of businesses in UAE particularly M GROUP.",
    ],
    /** Rendered after the first paragraph, which introduces them. */
    highlights: [
      "Developing long-term business partnerships and forging strategic global alliances.",
      "Brand ambassador, public advocate, and expert franchise contract negotiator.",
      "Leadership in financial management, accounting controls, reporting and budgeting.",
      "In-depth knowledge of current market trends, regulations and cultural aspects of served regions.",
      "Building and retaining large numbers of high-performing staff and fostering positive work environment.",
    ],
  },
  {
    name: "Saeed Ahmed",
    role: "Managing Director",
    initials: "SA",
    tagline: "Four decades of command. Delivery at scale.",
    photo: "/assets/images/our-team/saeed-ahmed-web.webp",
    linkedin: "",
    bio: [
      "Brigadier Saeed Ahmed (Retd), SI (M) brings over four decades of distinguished service with a military background, specializing in project management, supply chain operations, and logistics management. During his service, he held directorial roles at critical military and government institutions, overseeing the execution and operations of key strategic infrastructures projects and supply networks at national scale.",
      "His international assignments portfolio includes a significant tenure in global operational role at United Nations. He also worked with the German Defence Forces in a multinational setup during his tenure as Brigadier. These assignments allowed him to work seamlessly across diverse international teams, gaining valuable exposure to global best practices and cross-cultural operational frameworks.",
      "In the corporate sector, Brigadier Saeed served as Director at the Defence Housing Authority (DHA), Pakistan\u2019s largest and most prestigious urban development organization, where he led a portfolio of hospitality ventures and high-end amenity projects over multiple years. Presently he is Managing Director at FP Global (Pvt) Ltd.",
    ],
    highlights: [] as string[],
  },
];

export const faqs = [
  {
    q: "Does FP Global invest its own capital in projects?",
    a: "We take selective equity positions alongside owners where the project fits our operating thesis. Most engagements, however, are advisory or management mandates.",
  },
  {
    q: "At what stage should we bring you in?",
    a: "As early as land acquisition. The decisions with the largest effect on returns — positioning, brand and building efficiency — are made long before construction starts.",
  },
  {
    q: "Do you only work with international brands?",
    a: "No. We operate under international brand agreements and also run independent and white-label properties where that produces a better return.",
  },
  {
    q: "What size of asset do you take on?",
    a: "Typically 80 keys and above, though we have taken on smaller boutique and serviced-apartment projects where the positioning is right.",
  },
  {
    q: "Do you take over hotels that are already operating?",
    a: "Yes — takeover and turnaround is one of our six service lines. We can assume management of an operating asset with a structured transition plan.",
  },
  {
    q: "Can you take one stage rather than the whole project?",
    a: "Yes. The six service lines are engaged together or one at a time. Plenty of owners bring us in for pre-opening alone, or for a commercial mandate on an asset that is already trading.",
  },
  {
    q: "How are your fees structured?",
    a: "Advisory work is scoped and priced per stage. Management agreements are a base fee on revenue plus an incentive fee tied to profit, so what we earn moves with what the asset earns.",
  },
  {
    q: "Which markets do you work in?",
    a: "Lahore and Pakistan are our base, and the team\u2019s experience runs across the MENA region. We look at projects elsewhere where the brief fits what we actually do.",
  },
];

export const jobs = [
  {
    slug: "financial-accountant",
    title: "Financial Accountant",
    location: "Lahore, Pakistan",
    type: "Full time",
    team: "Finance",
    intro:
      "You will manage the daily financial transactions, keep the records accurate, and produce the monthly and annual statements the business is run on \u2014 in full compliance with FBR regulations and local tax law.",
    responsibilities: [
      "Financial records: manage day-to-day accounting operations, general ledger maintenance, and accounts payable and receivable",
      "Financial reporting: prepare accurate monthly, quarterly and annual financial statements, including balance sheets and profit-and-loss statements",
      "Tax compliance: ensure full compliance with FBR tax regulations, sales tax, income tax filings, and withholding tax obligations",
      "Reconciliation: conduct regular bank and vendor reconciliations to identify and resolve discrepancies",
      "Budgeting and forecasting: assist management in preparing annual budgets, monitoring departmental costs, and forecasting revenues",
      "Audit support: coordinate with internal and external auditors during annual financial audits",
    ],
    requirements: [
      "Education: bachelor\u2019s degree in accounting or finance, with ACCA or CA articles completed or intermediate qualified",
      "Experience: two to five years of proven corporate accounting experience",
      "Technical skills: advanced proficiency in Microsoft Excel (pivot tables and database structuring) and local accounting software such as QuickBooks, Peachtree or Oracle",
      "Knowledge: strong grasp of International Financial Reporting Standards (IFRS) and local Pakistani tax laws",
      "Soft skills: strong analytical thinking, high integrity, a positive attitude and effective communication",
    ],
    offer:
      "A finance seat close to the decisions, working directly with the managing director on the numbers behind every project, in a company small enough that your reporting is read rather than filed.",
  },
  {
    slug: "acquisition-advisor",
    title: "Acquisition Advisor",
    location: "Lahore, Pakistan",
    type: "Full time",
    team: "Development",
    intro:
      "You will look at sites and opportunities before anyone commits capital to them, and say honestly which ones are worth pursuing.",
    responsibilities: [
      "Source and screen sites and acquisition opportunities across Pakistan",
      "Build the first-pass feasibility: demand, competitor set and outline pro forma",
      "Prepare investment papers and present recommendations to the board",
      "Run due diligence alongside legal, technical and commercial advisers",
      "Keep relationships warm with landowners, brokers and brand development teams",
    ],
    requirements: [
      "Five or more years in hotel development, real estate investment or transaction advisory",
      "Comfortable building and defending an operating pro forma",
      "Familiar with the Pakistan market and its regulatory environment",
      "Willing to travel for site visits at short notice",
    ],
    offer:
      "A seat in the room where projects are decided, direct access to the chairman and managing director, and the chance to follow an asset you sourced all the way through to opening.",
  },
  {
    slug: "pre-opening-manager",
    title: "Pre-Opening Manager",
    location: "Lahore, Pakistan",
    type: "Full time",
    team: "Operations",
    intro:
      "You will run the critical path for a hotel opening, from the org chart to the first guest through the door.",
    responsibilities: [
      "Own the pre-opening critical path and budget against the target opening date",
      "Build the org chart and run recruitment with the department heads",
      "Coordinate FF&E and OS&E specification, procurement and delivery",
      "Stand up PMS, POS and back-office systems, and train the team on them",
      "Run the countdown: mock services, snagging and handover from construction",
    ],
    requirements: [
      "Pre-opening experience on at least one branded hotel",
      "A firm grip on budgets, procurement and critical-path planning",
      "Able to hold contractors, consultants and suppliers to a date",
      "Rooms or F&B operations background",
    ],
    offer:
      "A full opening to run rather than a slice of one, with the team and the authority to run it.",
  },
  {
    slug: "revenue-analyst",
    title: "Revenue Analyst",
    location: "Lahore, Pakistan",
    type: "Full time",
    team: "Commercial",
    intro:
      "You will own the numbers behind pricing and distribution, and turn them into decisions the commercial team can act on this week.",
    responsibilities: [
      "Build and maintain the forecast, budget and pace reporting",
      "Analyse segmentation, channel cost and rate performance against the comp set",
      "Recommend pricing and inventory actions, then measure what they did",
      "Keep the channel manager, PMS and rate parity clean across every channel",
      "Prepare the commercial pack for owner and management reporting",
    ],
    requirements: [
      "Two or more years in revenue management or commercial analysis in hotels",
      "Fluent in Excel and comfortable with PMS and channel manager data",
      "Able to put a recommendation on one slide for a non-analyst",
      "A revenue management certification is welcome, not required",
    ],
    offer:
      "Ownership of a real P&L line from your first month, and a direct line to the people who act on your recommendations.",
  },
  {
    slug: "project-architect",
    title: "Project Architect",
    location: "Karachi, Pakistan",
    type: "Contract",
    team: "Design & Construction",
    intro:
      "You will review and develop hotel design so that what gets built can actually be operated.",
    responsibilities: [
      "Review concept and technical design against brand standards and operating needs",
      "Coordinate consultants across architecture, MEP, interiors and kitchen design",
      "Track the drawing register and close out RFIs against the construction programme",
      "Attend site to verify that what is built matches what was approved",
      "Flag the value-engineering proposals that cost more to operate than they save",
    ],
    requirements: [
      "Registered architect with hotel or hospitality project experience",
      "Comfortable reading MEP and kitchen drawings alongside architectural sets",
      "Experience coordinating a multi-discipline consultant team",
      "Based in, or able to work from, Karachi for the project duration",
    ],
    offer:
      "A contract tied to a live project with a defined scope and end date, on a team that treats operability as a design requirement rather than an afterthought.",
  },
];

/** Shown on every role page \u2014 the process is the same whichever one you apply for. */
export const hiringFaqs = [
  {
    q: "How long does the process take?",
    a: "Usually two to three weeks. A first conversation, a task or case relevant to the role, then a meeting with the people you would actually work with.",
  },
  {
    q: "Do you consider candidates outside Pakistan?",
    a: "Yes, where the role allows it and you are able to relocate. Most of our positions are based on the ground with the asset.",
  },
  {
    q: "Would I work on one property or several?",
    a: "Development and commercial roles work across the portfolio. Pre-opening and operations roles are attached to a property for the length of the mandate.",
  },
  {
    q: "What happens after a project opens?",
    a: "Pre-opening roles usually move into the operating team or on to the next opening. We would rather keep people than rehire.",
  },
  {
    q: "Can I apply if none of these roles fit?",
    a: "Yes. Send your CV with a note about what you do. We keep it on file and come back when something matches.",
  },
];

export type Office = {
  id: string;
  /** "open" renders a full card; "planned" renders an empty slot. */
  status: "open" | "planned";
  tag: string;
  city: string;
  lines: string[];
  phone?: string;
  email?: string;
  mapUrl?: string;
};

/**
 * Office locations shown on /contact.
 *
 * To open a new location: set `status` to "open", fill in `city`, `lines`,
 * `phone` and `mapUrl`, and give it a real `tag`. To remove a slot entirely,
 * delete the entry — the grid reflows on its own.
 *
 * Planned entries deliberately carry no city or address. They read as empty
 * slots rather than announcing offices that do not exist yet.
 */
export const offices: Office[] = [
  {
    id: "lahore",
    status: "open",
    tag: "Headquarters",
    city: "Lahore",
    lines: [site.address.line1, "Lahore, Pakistan"],
    phone: site.phone,
    email: site.email,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=DHA+Phase+6+Lahore+Pakistan",
  },
  { id: "slot-2", status: "planned", tag: "Coming Soon", city: "", lines: [] },
  { id: "slot-3", status: "planned", tag: "Coming Soon", city: "", lines: [] },
  { id: "slot-4", status: "planned", tag: "Coming Soon", city: "", lines: [] },
];

export const footerColumns = [
  {
    heading: "What We Do",
    links: services.map((s) => ({ label: s.name, href: `/services/${s.id}` })),
  },
  {
    heading: "Company",
    links: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "News & Insights", href: "/blogs" },
      { label: "FAQs", href: "/faq" },
      { label: "Hyatt Lahore", href: "/hyatt-lahore" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];
