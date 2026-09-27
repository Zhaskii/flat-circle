import type { StaticImageData } from "next/image";
import balticWatches from "@/app/assets/SEO/1.jpeg";
import gymInjuries from "@/app/assets/SEO/2.jpeg";
import physiotherapist from "@/app/assets/SEO/3.jpeg";
import kodoBiscuits from "@/app/assets/SEO/5.jpeg";
import suluxPerformance from "@/app/assets/SEO/6.jpeg";
import radoCollection from "@/app/assets/SEO/7.jpeg";
import radoRetailer from "@/app/assets/SEO/8.jpeg";
import nirvanaPerformance from "@/app/assets/SEO/9.jpeg";
import arkshFoodPerformance from "@/app/assets/SEO/10.jpeg";

export interface SeoProof {
  id: string;
  image: StaticImageData;
  alt: string;
  client: string;
  type: "performance" | "visibility";
  searchQuery: string;
  title: string;
  description: string;
}

export const seoProofs: SeoProof[] = [
  {
    id: "sulux-baltic",
    image: balticWatches,
    alt: "Google result for authentic Baltic watches Nepal featuring Sulux Centre",
    client: "Sulux Centre",
    type: "visibility",
    searchQuery: "authentic baltic watches nepal",
    title: "Luxury watch search visibility",
    description:
      "Search-result snapshot showing Sulux Centre for a high-intent Baltic watches query in Nepal.",
  },
  {
    id: "nirvana-gym-injuries",
    image: gymInjuries,
    alt: "Google result for gym injuries Nepal featuring Nirvana Physiotherapy and Wellness Center",
    client: "Nirvana Physiotherapy & Wellness Center",
    type: "visibility",
    searchQuery: "gym injuries nepal",
    title: "Health content visibility",
    description:
      "Search-result snapshot showing Nirvana's injury-prevention content for a relevant physiotherapy query.",
  },
  {
    id: "nirvana-physiotherapist",
    image: physiotherapist,
    alt: "Google result for best physiotherapist in Kathmandu featuring Nirvana Physiotherapy and Wellness Center",
    client: "Nirvana Physiotherapy & Wellness Center",
    type: "visibility",
    searchQuery: "best physiotherapist in kathmandu",
    title: "Local physiotherapy discovery",
    description:
      "Search-result snapshot showing Nirvana for a high-intent local physiotherapy search.",
  },

  {
    id: "arksh-food-kodo",
    image: kodoBiscuits,
    alt: "Google result for kodo biscuit Nepal featuring Arksh Food",
    client: "Arksh Food",
    type: "visibility",
    searchQuery: "kodo biscuit nepal",
    title: "Product search visibility",
    description:
      "Search-result snapshot showing Arksh Food's product page for a Kodo biscuit query.",
  },
  {
    id: "sulux-performance",
    image: suluxPerformance,
    alt: "Google Search Console performance comparison for Sulux Centre",
    client: "Sulux Centre",
    type: "performance",
    searchQuery: "Google Search Console • 3-month comparison",
    title: "Organic performance overview",
    description:
      "Google Search Console snapshot for Sulux Centre comparing recent and previous three-month search performance.",
  },
  {
    id: "sulux-rado-collection",
    image: radoCollection,
    alt: "Google result for Rado watches in Nepal featuring Sulux Centre",
    client: "Sulux Centre",
    type: "visibility",
    searchQuery: "rado watches in nepal",
    title: "Rado collection visibility",
    description:
      "Search-result snapshot showing Sulux Centre's Rado collection page for a high-intent product search.",
  },
  {
    id: "sulux-rado-retailer",
    image: radoRetailer,
    alt: "Google result for Rado watches in Nepal featuring Sulux Centre",
    client: "Sulux Centre",
    type: "visibility",
    searchQuery: "rado watches in nepal",
    title: "Authorized retailer visibility",
    description:
      "Search-result snapshot showing Sulux Centre alongside an official Rado result for a relevant Nepal search.",
  },
  {
    id: "nirvana-performance",
    image: nirvanaPerformance,
    alt: "Google Search Console performance comparison for Nirvana Physiotherapy and Wellness Center",
    client: "Nirvana Physiotherapy & Wellness Center",
    type: "performance",
    searchQuery: "Google Search Console • 3-month comparison",
    title: "Physiotherapy search performance",
    description:
      "Google Search Console snapshot for Nirvana Physiotherapy & Wellness Center comparing recent and previous three-month search performance.",
  },
  {
    id: "arksh-food-performance",
    image: arkshFoodPerformance,
    alt: "Google Search Console performance comparison for Arksh Food",
    client: "Arksh Food",
    type: "performance",
    searchQuery: "Google Search Console • 3-month comparison",
    title: "Food brand search performance",
    description:
      "Google Search Console snapshot for Arksh Food comparing recent and previous three-month search performance.",
  },
];
