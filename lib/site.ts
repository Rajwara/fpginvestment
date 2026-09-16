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
    image: "/assets/images/ProfessionalGuidanceimg-1.jpg",
    name: "Business Development & Advisory",
    short: "Business Development",
    icon: "compass",
    summary:
      "Feasibility, positioning and brand selection — the work that decides whether a project is worth building before a single foundation is poured.",
    points: ["Market and feasibility studies", "Brand selection and negotiation", "Return modelling and capital planning"],
  },
  {
    id: "design-construction",
    image: "/assets/images/ProfessionalGuidanceimg-02.jpg",
    name: "Design & Construction",
    short: "Design & Construction",
    icon: "blueprint",
    summary:
      "Technical services from concept design through handover, holding the line on brand standards, programme and cost at every stage.",
    points: ["Concept and technical design review", "Contractor procurement", "Programme and cost control"],
  },
  {
    id: "pre-opening",
    image: "/assets/images/ProfessionalGuidanceimg-03.jpg",
    name: "Pre-Opening",
    short: "Pre-Opening",
    icon: "key",
    summary:
      "The eighteen months that determine a hotel's first year. Recruitment, systems, supply chain and the critical path to a confident opening day.",
    points: ["Critical path and budget", "Recruitment and training", "Systems, FF&E and OS&E"],
  },
  {
    id: "takeover-turnaround",
    image: "/assets/images/ProfessionalGuidanceimg-04.jpg",
    name: "Takeover & Turnaround",
    short: "Takeover & Turnaround",
    icon: "refresh",
    summary:
      "Assets that underperform rarely lack potential — they lack operating discipline. We take over, stabilise and rebuild the P&L.",
    points: ["Rapid operational diagnostic", "Cost and revenue restructuring", "Repositioning and rebranding"],
  },
  {
    id: "sales-marketing",
    image: "/assets/images/ProfessionalGuidanceimg-05.jpg",
    name: "Sales & Marketing",
    short: "Sales & Marketing",
    icon: "megaphone",
    summary:
      "Commercial strategy that fills rooms at the right rate: segmentation, channel mix, revenue management and a brand people actually remember.",
    points: ["Revenue management and pricing", "Channel and distribution strategy", "Brand, digital and PR"],
  },
  {
    id: "hotel-management",
    image: "/assets/images/ProfessionalGuidanceimg-1.jpg",
    name: "Hotel Management & Operations",
    short: "Hotel Management",
    icon: "concierge",
    summary:
      "Full operating management under international brand standards, with owner reporting that tells you what is actually happening in your asset.",
    points: ["Full operating management", "Brand standards compliance", "Transparent owner reporting"],
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", mega: true },
  { label: "Our Team", href: "/team" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Hyatt Lahore", href: "/hyatt-lahore" },
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
  { name: "FP Global", logo: "/assets/images/OurMission-logo1-trimmed.png" },
  { name: "Hyatt Regency", logo: "/assets/images/OurMission-logo2-trimmed.png" },
  { name: "DHA Lahore", logo: "/assets/images/OurMission-logo3-trimmed.png" },
  {
    name: "Valor Hospitality Partners",
    logo: "/assets/images/OurMission-logo4-trimmed.png",
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
    id: "inspection",
    label: "Inspection",
    body: "Before we commit to anything we walk the asset, read the numbers and talk to the people running it. What comes back is an honest picture of where a property stands — not the one the last report promised.",
    points: [
      "Full operational diagnostic",
      "Brand standards audit",
      "P&L and cost-base review",
      "Guest experience walkthrough",
      "Capex and condition survey",
      "Market and competitor position",
    ],
  },
  {
    id: "approach",
    label: "Approach",
    body: "We work as operators, not advisers at a distance. That means our teams sit inside the project, own the critical path and stay accountable for what happens after handover.",
    points: [
      "Operators inside the project",
      "One accountable team",
      "Design reviewed for operations",
      "Transparent owner reporting",
      "Programme and cost control",
      "Decisions made on site",
    ],
  },
  {
    id: "performance",
    label: "Performance",
    body: "A hotel is judged every night. We manage to the numbers that move — rate, occupancy, cost per occupied room and the guest scores that drive all three over time.",
    points: [
      "Revenue and rate strategy",
      "Cost per occupied room",
      "Guest satisfaction tracking",
      "Channel and distribution mix",
      "Labour productivity",
      "Month-end owner reporting",
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
    src: "/assets/images/MissionAndGoals-img1.jpg",
    alt: "Reviewing performance figures",
  },
  {
    id: "c2",
    src: "/assets/images/MissionAndGoals-img2.jpg",
    alt: "A member of the FP Global team",
  },
  {
    id: "c3",
    src: "/assets/images/MissionAndGoals-03.jpg",
    alt: "Working on an owner report",
  },
  {
    id: "c4",
    src: "/assets/images/MissionAndGoalsimg-04.jpg",
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
    /** Portraits and personal profile links to follow. */
    photo: "",
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
    photo: "",
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
    photo: "",
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
];

export const jobs = [
  { slug: "acquisition-advisor", title: "Acquisition Advisor", location: "Lahore, Pakistan", type: "Full time", team: "Development" },
  { slug: "pre-opening-manager", title: "Pre-Opening Manager", location: "Lahore, Pakistan", type: "Full time", team: "Operations" },
  { slug: "revenue-analyst", title: "Revenue Analyst", location: "Lahore, Pakistan", type: "Full time", team: "Commercial" },
  { slug: "project-architect", title: "Project Architect", location: "Karachi, Pakistan", type: "Contract", team: "Design & Construction" },
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
      { label: "Hyatt Lahore", href: "/hyatt-lahore" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];
