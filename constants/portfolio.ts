export type ProjectFilter = "website" | "seo" | "design";

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  filter: ProjectFilter;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  color: string;
  websiteUrl?: string;
  logoUrl?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "sulux-hour",
    title: "A premium digital home for luxury timepieces",
    client: "Sulux Hour",
    category: "Website Design & Development",
    industry: "Luxury Retail",
    filter: "website",
    metric: "Website",
    metricLabel: "Digital Experience Delivered",
    description:
      "A refined website created to present Sulux Hour's luxury watch offering with a polished, product-first experience.",
    tags: ["Web Design", "Development", "Luxury Retail"],
    challenge:
      "Create an online presence that reflects the precision and premium character of a luxury watch destination.",
    solution:
      "FlatCircle designed and developed a focused digital experience with clear product presentation and an elevated visual system.",
    results: [
      "Website designed and developed by FlatCircle",
      "Premium retail experience translated to the web",
      "Built for clear product discovery",
    ],
    color: "from-zinc-900 via-zinc-900 to-black",
    websiteUrl: "https://suluxhour.com/",
    logoUrl: "https://suluxhour.com/favicon.ico",
  },
  {
    id: "sulux-centre",
    title: "A modern retail website for Sulux Centre",
    client: "Sulux Centre",
    category: "Website Design & Development",
    industry: "Luxury Retail",
    filter: "website",
    metric: "Website",
    metricLabel: "Digital Experience Delivered",
    description:
      "A responsive website created for Sulux Centre's luxury retail presence.",
    tags: ["Web Design", "Development", "SEO Optimization", "Retail"],
    challenge:
      "Build a clear, premium online destination for a well-established luxury retailer.",
    solution:
      "FlatCircle delivered the website experience, combining thoughtful design, structure, and a responsive build.",
    results: [
      "Website designed and developed by FlatCircle",
      "Responsive layout for every screen",
      "Premium brand presentation",
    ],
    color: "from-zinc-900 via-zinc-900 to-black",
    websiteUrl: "https://www.suluxcentre.com/",
    logoUrl: "https://www.suluxcentre.com/favicon.ico",
  },
  {
    id: "arksh-group",
    title: "A unified corporate website for a diverse business group",
    client: "Arksh Group",
    category: "Corporate Website",
    industry: "Diversified Business",
    filter: "website",
    metric: "Website",
    metricLabel: "Corporate Platform Delivered",
    description:
      "A corporate website that brings Arksh Group's companies, brands, and business verticals into one cohesive digital home.",
    tags: ["Corporate Website", "Information Architecture", "Web Development"],
    challenge:
      "Make a broad multi-industry portfolio easy to understand and explore online.",
    solution:
      "FlatCircle designed and developed a structured website that gives each business area room while keeping the group identity clear.",
    results: [
      "Website designed and developed by FlatCircle",
      "Companies and brands organised in one platform",
      "Clear corporate storytelling",
    ],
    color: "from-zinc-900 via-zinc-900 to-black",
    websiteUrl: "https://arkshgroup.com/",
    logoUrl: "https://arkshgroup.com/favicon.ico",
  },
  {
    id: "arksh-agro",
    title: "A digital platform for Arksh Agro",
    client: "Arksh Agro",
    category: "Website Design & Development",
    industry: "Agriculture",
    filter: "website",
    metric: "Website",
    metricLabel: "Digital Presence Delivered",
    description:
      "A website created for Arksh Agro to communicate its agricultural business and offerings online.",
    tags: ["Web Design", "Development", "Agriculture"],
    challenge:
      "Create a clear, approachable online presence for an agriculture-focused business.",
    solution:
      "FlatCircle planned, designed, and developed a website tailored to Arksh Agro's brand and audience.",
    results: [
      "Website designed and developed by FlatCircle",
      "Brand-led digital presence",
      "Responsive user experience",
    ],
    color: "from-zinc-900 via-zinc-900 to-black",
    websiteUrl: "https://agro.arkshgroup.com/",
    logoUrl: "https://agro.arkshgroup.com/favicon.ico",
  },
  // {
  //   id: "urban-earth",
  //   title: "A distinct website for Urban Earth",
  //   client: "Urban Earth",
  //   category: "Website Design & Development",
  //   industry: "Lifestyle",
  //   filter: "website",
  //   metric: "Website",
  //   metricLabel: "Digital Presence Delivered",
  //   description: "A website designed and built to give Urban Earth a considered, modern digital presence.",
  //   tags: ["Web Design", "Development", "Brand Experience"],
  //   challenge: "Translate Urban Earth's identity into an engaging online experience.",
  //   solution: "FlatCircle created a custom website experience with an emphasis on brand clarity and usability.",
  //   results: ["Website designed and developed by FlatCircle", "Custom brand presentation", "Built for responsive browsing"],
  //   color: "from-zinc-900 via-zinc-900 to-black",
  // },
  {
    id: "arksh-food",
    title: "A product-led website for Arksh Food",
    client: "Arksh Food",
    category: "Website Design & Development",
    industry: "Food & FMCG",
    filter: "website",
    metric: "Website",
    metricLabel: "Food Brand Platform Delivered",
    description:
      "A website created to showcase Arksh Food's product portfolio and make its brands easier to discover online.",
    tags: ["Web Design", "Development", "SEO Optimization", "FMCG"],
    challenge:
      "Present a varied food portfolio in a way that feels simple, inviting, and easy to navigate.",
    solution:
      "FlatCircle designed and developed a product-led website that puts food brands and collections at the centre.",
    results: [
      "Website designed and developed by FlatCircle",
      "Product portfolio brought online",
      "Clear brand and collection discovery",
    ],
    color: "from-zinc-900 via-zinc-900 to-black",
    websiteUrl: "https://www.arkshfood.com/",
    logoUrl: "https://www.arkshfood.com/favicon.ico",
  },
  {
    id: "arksh-store",
    title: "An online storefront for Arksh Store",
    client: "Arksh Store",
    category: "E-commerce Website",
    industry: "E-commerce",
    filter: "website",
    metric: "Storefront",
    metricLabel: "E-commerce Experience Delivered",
    description:
      "A website experience developed for Arksh Store to support its online retail presence.",
    tags: ["E-commerce", "Web Design", "Development"],
    challenge:
      "Create a dependable digital storefront that makes browsing products straightforward.",
    solution:
      "FlatCircle designed and developed the online experience around accessible product discovery and a clean retail interface.",
    results: [
      "Website designed and developed by FlatCircle",
      "Digital storefront for online retail",
      "Responsive shopping experience",
    ],
    color: "from-zinc-900 via-zinc-900 to-black",
    websiteUrl: "https://www.arkshstore.com/",
    logoUrl: "https://www.arkshstore.com/favicon.ico",
  },
  {
    id: "nirvana-physiotherapy",
    title: "A wellness website for Nirvana Physiotherapy & Wellness Center",
    client: "Nirvana Physiotherapy & Wellness Center",
    category: "Website Design & Development",
    industry: "Health & Wellness",
    filter: "website",
    metric: "Website",
    metricLabel: "Wellness Platform Delivered",
    description:
      "A clear, welcoming website created for Nirvana Physiotherapy & Wellness Center.",
    tags: ["Web Design", "Development", "SEO Optimization", "Wellness"],
    challenge:
      "Make a healthcare and wellness service easier for people to understand online.",
    solution:
      "FlatCircle designed and developed an approachable digital presence centred on clarity and trust.",
    results: [
      "Website designed and developed by FlatCircle",
      "Service information made easy to explore",
      "Responsive experience for patients and visitors",
    ],
    color: "from-zinc-900 via-zinc-900 to-black",
    websiteUrl: "https://www.npwc.com.np/",
    logoUrl: "https://www.npwc.com.np/favicon.ico",
  },
  {
    id: "hotel-peaceland",
    title: "A hospitality website for Hotel Peaceland",
    client: "Hotel Peaceland",
    category: "Hotel Website",
    industry: "Hospitality",
    filter: "website",
    metric: "Website",
    metricLabel: "Hospitality Platform Delivered",
    description:
      "A website designed and built for Hotel Peaceland's hospitality presence.",
    tags: ["Web Design", "Development", "Hospitality"],
    challenge: "Create a welcoming digital first impression for hotel guests.",
    solution:
      "FlatCircle delivered a hospitality-focused website with a clear structure and a responsive design.",
    results: [
      "Website designed and developed by FlatCircle",
      "Hospitality experience brought online",
      "Built for desktop and mobile visitors",
    ],
    color: "from-zinc-900 via-zinc-900 to-black",
    websiteUrl: "https://hotelpeaceland.com/",
    logoUrl: "https://hotelpeaceland.com/favicon.ico",
  },
];

export const websiteHighlights = portfolioProjects.slice(0, 4);
