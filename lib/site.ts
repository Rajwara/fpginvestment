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
    name: "Business Development & Advisory",
    short: "Business Development",
    icon: "compass",
    summary:
      "Feasibility, positioning and brand selection — the work that decides whether a project is worth building before a single foundation is poured.",
    points: ["Market and feasibility studies", "Brand selection and negotiation", "Return modelling and capital planning"],
  },
  {
    id: "design-construction",
    name: "Design & Construction",
    short: "Design & Construction",
    icon: "blueprint",
    summary:
      "Technical services from concept design through handover, holding the line on brand standards, programme and cost at every stage.",
    points: ["Concept and technical design review", "Contractor procurement", "Programme and cost control"],
  },
  {
    id: "pre-opening",
    name: "Pre-Opening",
    short: "Pre-Opening",
    icon: "key",
    summary:
      "The eighteen months that determine a hotel's first year. Recruitment, systems, supply chain and the critical path to a confident opening day.",
    points: ["Critical path and budget", "Recruitment and training", "Systems, FF&E and OS&E"],
  },
  {
    id: "takeover-turnaround",
    name: "Takeover & Turnaround",
    short: "Takeover & Turnaround",
    icon: "refresh",
    summary:
      "Assets that underperform rarely lack potential — they lack operating discipline. We take over, stabilise and rebuild the P&L.",
    points: ["Rapid operational diagnostic", "Cost and revenue restructuring", "Repositioning and rebranding"],
  },
  {
    id: "sales-marketing",
    name: "Sales & Marketing",
    short: "Sales & Marketing",
    icon: "megaphone",
    summary:
      "Commercial strategy that fills rooms at the right rate: segmentation, channel mix, revenue management and a brand people actually remember.",
    points: ["Revenue management and pricing", "Channel and distribution strategy", "Brand, digital and PR"],
  },
  {
    id: "hotel-management",
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
  title: "A hospitality company built by operators.",
  body: "Two decades of developing, opening and running hotels across Pakistan and the region.",
  href: "/about",
  cta: "About FP Global",
};

export const partners = [
  "Hyatt",
  "Regency",
  "Marriott",
  "Accor",
  "IHG",
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
  { id: "c1", src: "/assets/images/fpginvestment_banner_img1.jpg", alt: "Hotel lobby", stat: "", statLabel: "" },
  { id: "c2", src: "/assets/images/fpginvestment_banner_img2.jpg", alt: "Pool and spa", stat: "", statLabel: "" },
  { id: "c3", src: null, alt: "", stat: "20 yrs", statLabel: "In hospitality" },
  { id: "c4", src: null, alt: "", stat: "1,400+", statLabel: "Keys developed" },
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
    title: "The pre-opening decisions that quietly cost you year one",
    excerpt:
      "Most opening-year underperformance is set in motion eighteen months earlier. A look at the five critical-path items owners consistently compress — and what each one costs later.",
  },
  {
    slug: "designing-for-operators",
    category: "Development",
    date: "2026-06-02",
    readTime: "9 min",
    title: "Why back-of-house should be designed first",
    excerpt:
      "Service corridors, loading and staff flow shape labour cost for the life of the building. They are also the first things value-engineered out of a drawing set.",
  },
  {
    slug: "turnaround-first-90-days",
    category: "Turnaround",
    date: "2026-03-21",
    readTime: "11 min",
    title: "The first ninety days of a hotel turnaround",
    excerpt:
      "What we look at, in what order, when taking over an underperforming asset — and why revenue management usually comes before any renovation conversation.",
  },
];

export const team = [
  { name: "Faisal Pervaiz", role: "Chairman", prior: "Two decades in hospitality development", initials: "FP" },
  { name: "Ayesha Rahman", role: "Chief Operating Officer", prior: "Previously Hyatt International", initials: "AR" },
  { name: "Omar Siddiqui", role: "Director, Development", prior: "Previously Accor South Asia", initials: "OS" },
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
    links: services.map((s) => ({ label: s.short, href: `/services/${s.id}` })),
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
