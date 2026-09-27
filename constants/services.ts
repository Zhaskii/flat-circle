export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "web", label: "Websites & Conversion" },
  { id: "search", label: "Search & Performance" },
  { id: "creative", label: "Creative & Social" },
] as const;

export type ServiceCategory = Exclude<(typeof serviceCategories)[number]["id"], "all">;

export interface Service {
  id: string;
  category: ServiceCategory;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  tags: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "website-development",
    category: "web",
    number: "01",
    title: "Website Design, Development & Conversion",
    subtitle: "Corporate sites, e-commerce, landing pages & digital journeys",
    description: "We plan, design, and build responsive websites that help brands explain their value clearly and give campaigns a strong conversion destination.",
    metric: "From strategy to launch",
    tags: ["Web Design", "Development", "Landing Pages", "Responsive UX"],
    deliverables: ["Website strategy and information architecture", "Custom interface design", "Responsive front-end development", "Campaign landing pages", "Launch support and iteration"],
  },
  {
    id: "seo-optimization",
    category: "search",
    number: "02",
    title: "SEO & Search Optimization",
    subtitle: "Technical SEO, content optimization & search visibility",
    description: "We improve the technical foundations, content structure, and discoverability of websites so the right audience can find them through search.",
    metric: "Built for sustainable discoverability",
    tags: ["Technical SEO", "On-page SEO", "Content Strategy", "Search Console"],
    deliverables: ["Website and technical SEO audits", "On-page metadata and content optimisation", "Site structure and internal linking improvements", "Performance and crawlability checks", "Search-focused content recommendations"],
  },
  {
    id: "graphic-design",
    category: "creative",
    number: "03",
    title: "Creative, Content & Social Media",
    subtitle: "Design, photography, video production & social content systems",
    description: "FlatCircle creates graphic design, photography, videography, and edited digital content that helps brands communicate consistently across campaigns, social channels, websites, and brand assets.",
    metric: "Design that stays on brand",
    tags: ["Graphic Design", "Photography", "Videography", "Video Editing", "Social Content"],
    deliverables: [
      "Campaign and social media creative",
      "Brand, product, and event photography",
      "Videography for campaigns and social channels",
      "Short-form video editing and motion content",
      "Website graphics and visual assets",
      "Brand-consistent templates and marketing collateral",
    ],
  },
  {
    id: "digital-marketing",
    category: "search",
    number: "04",
    title: "Digital Marketing Strategy & Campaign Support",
    subtitle: "Campaign planning, channel strategy & ongoing optimization",
    description: "We support brands with focused digital marketing work that connects their presence, content, campaign activity, and customer journey.",
    metric: "Tailored to the work you need",
    tags: ["Digital Strategy", "Campaign Planning", "Content Planning", "Optimization"],
    deliverables: ["Digital presence review", "Campaign and content planning", "Channel and audience recommendations", "Website conversion recommendations", "Ongoing creative and optimization support"],
  },
  {
    id: "influencer-marketing",
    category: "creative",
    number: "05",
    title: "Influencer Marketing & Creator Campaigns",
    subtitle: "Creator partnerships, campaign briefs & content coordination",
    description:
      "We help brands plan and coordinate creator-led campaigns that connect the right voices, content formats, and campaign goals with clear direction.",
    metric: "Structured campaigns from brief to reporting",
    tags: ["Influencer Marketing", "Creator Partnerships", "Campaign Briefs", "Social Amplification"],
    deliverables: [
      "Campaign goals and creator-fit criteria",
      "Creator research and shortlisting",
      "Briefs and content direction",
      "Deliverable and timeline coordination",
      "Post-campaign reporting and learnings",
    ],
  },
];

export const contactServices = services.map((service) => service.title);
