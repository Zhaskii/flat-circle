"use client";

import React, { useState } from "react";
import {
  Target,
  Search,
  Layers,
  Video,
  Repeat,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

interface ServicesProps {
  onOpenContactModal?: (preselectedService?: string) => void;
}

export default function Services({ onOpenContactModal }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const categories = [
    { id: "all", label: "All Disciplines" },
    { id: "acquisition", label: "Paid Ads (Meta/Google)" },
    { id: "search-cro", label: "Local SEO & Funnels" },
    { id: "creative-retention", label: "TikTok & Viber/SMS" },
  ];

  const services = [
    {
      id: "paid-media",
      category: "acquisition",
      number: "01",
      title: "Performance Meta & Google Ads (Nepal & Diaspora)",
      subtitle: "Facebook, Instagram, Google Search & YouTube Ads",
      description:
        "We scale customer acquisition for Nepali businesses using dollar-card compliant ad infrastructure, bilingual copy (Nepali + English), and high-converting Messenger & WhatsApp click-to-chat funnels.",
      icon: Target,
      metrics: "Average 4.9x Blended ROAS",
      tags: ["Facebook & Instagram Ads", "Dollar Billing Compliance", "Diaspora Targeting"],
      deliverables: [
        "Compliant International Ad Account Setup & Dollar Spend Management",
        "Meta Dynamic Testing Sandbox for Kathmandu, Pokhara & Nationwide",
        "Diaspora Campaign Funnels (Australia, USA, UK, UAE & Japan)",
        "Google Search Ads for High-Intent Commercial Keywords",
        "Click-to-WhatsApp and Messenger Lead Automation",
      ],
    },
    {
      id: "seo-search",
      category: "search-cro",
      number: "02",
      title: "Search Engine Optimization & Google Maps (Local SEO)",
      subtitle: "Google My Business, Local 3-Pack & Organic Keyword Rankings",
      description:
        "Rank #1 on Google for high-intent searches in Nepal and international buyer queries. We optimize Google Maps profiles, build authoritative local citations, and drive organic phone calls and walk-ins.",
      icon: Search,
      metrics: "+340% YoY Local Organic Traffic",
      tags: ["Google Maps Nepal", "Local 3-Pack Dominance", "Core Web Vitals"],
      deliverables: [
        "Google My Business (GMB) Optimization for Kathmandu, Lalitpur & Major Hubs",
        "Local Nepali Directory Submissions & High-Authority Backlink Outreach",
        "Technical Core Web Vitals & Mobile Speed Optimization",
        "Ranking for High-Value Commercial Keywords in Nepal",
        "Global SEO for Tourism, Trekking & Nepali Export Brands",
      ],
    },
    {
      id: "cro-funnels",
      category: "search-cro",
      number: "03",
      title: "E-Commerce Funnels with eSewa, Khalti & COD Systems",
      subtitle: "High-Speed Landing Pages, Cash-on-Delivery Optimization",
      description:
        "E-commerce in Nepal faces high cart abandonment and COD return rates. We build lightning-fast web stores integrated with eSewa, Khalti, ConnectIPS, and Fonepay, plus automated order verification to slash RTO.",
      icon: Layers,
      metrics: "-42% COD Return-to-Origin (RTO) Rate",
      tags: ["eSewa / Khalti / Fonepay", "COD Fraud Protection", "Sub-Second Load Time"],
      deliverables: [
        "Seamless Payment Gateway Integration (eSewa, Khalti, ConnectIPS, Fonepay)",
        "Automated WhatsApp/SMS Order Confirmation to Prevent Fake COD Orders",
        "Sub-Second Mobile Load Times Designed for Nepali Telecom Networks",
        "High-Converting Landing Pages for Education Consultancies & Clinics",
        "One-Click Upsell & Bundle Offers to Increase Average Order Value",
      ],
    },
    {
      id: "creative-video",
      category: "creative-retention",
      number: "04",
      title: "TikTok & Reels Viral Marketing / Nepali Creator Seeding",
      subtitle: "Short-Form Video Production, Vernacular Hooks & Influencer Collabs",
      description:
        "Short-form video dominates social consumption in Nepal. We produce viral TikToks and Instagram Reels with authentic Nepali cultural storytelling, relatable humor, and collaborations with vetted local creators.",
      icon: Video,
      metrics: "18M+ Organic Short-Form Views Generated",
      tags: ["Viral TikTok Nepal", "Vetted Creator Network", "Bilingual Video Ads"],
      deliverables: [
        "End-to-End Scriptwriting with Relatable Nepali Cultural Hooks",
        "4K Studio Video Production & On-Location Shoots in Kathmandu",
        "Vetted Nepali Influencer Sourcing & Creator Seeding",
        "Whitelisted TikTok Spark Ads & Instagram Collaborative Posts",
        "High-Frequency Creative Testing (30+ fresh hooks monthly)",
      ],
    },
    {
      id: "retention-lifecycle",
      category: "creative-retention",
      number: "05",
      title: "Viber, SMS & WhatsApp Lifecycle Retention",
      subtitle: "Automated Messaging, Flash Sale Blasts & Customer Loyalty",
      description:
        "Nepali consumers check Viber, WhatsApp, and SMS constantly. We build automated retention engines that deliver flash sale notifications, festival greetings (Dashain, Tihar, New Year), and repeat order re-engagement.",
      icon: Repeat,
      metrics: "35%+ Revenue Driven from Repeat Buyers",
      tags: ["Viber Business API", "Bulk SMS Nepal", "WhatsApp Broadcasts"],
      deliverables: [
        "Viber Community & Business Messaging Setup",
        "High-Deliverability Promotional & Transactional Bulk SMS in Nepal",
        "Automated WhatsApp Bot for Customer Support & Instant FAQ Responding",
        "Nepali Festival Campaign Playbooks (Dashain, Tihar, Chhath, Baisakh 1)",
        "Customer Loyalty & VIP Discount Automations",
      ],
    },
    {
      id: "analytics-dashboards",
      category: "acquisition",
      number: "06",
      title: "Corporate Digital PR & Media Placement in Nepal",
      subtitle: "National News Portal Coverage, Executive Branding & Attribution",
      description:
        "Build unshakeable institutional trust. We coordinate digital press coverage on Nepal's premier portals like OnlineKhabar, Setopati, Ratopati, and Kantipur, paired with real-time ROI tracking dashboards.",
      icon: BarChart3,
      metrics: "Featured across Tier-1 Nepali Portals",
      tags: ["Digital PR Nepal", "OnlineKhabar / Setopati", "Transparent Attribution"],
      deliverables: [
        "Digital PR Placement across Top Nepali Digital Publications",
        "Executive Leadership & Founder Personal Branding on LinkedIn",
        "Real-Time Executive Performance Dashboard (Cost Per Lead, ROAS, Revenue)",
        "Server-Side Meta Conversions API (CAPI) & GA4 Tracking",
        "Weekly Executive Sprint Meetings with Dedicated Nepali Account Leads",
      ],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-28 bg-black text-white overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              <span>Full-Stack Capabilities in Nepal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-2xl leading-[1.1]">
              Engineered For{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
                Market Leadership In Nepal
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-4">
              We reject fragmented tactics. FlatCircle combines international performance standards with on-the-ground Nepali consumer psychology, local payment gateways, and viral cultural creative.
            </p>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              [ 06 Tailored Growth Pillars • Kathmandu HQ ]
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-white text-black font-bold shadow-lg shadow-white/10"
                  : "bg-zinc-950 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-white/30 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top line with service number and category icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm tracking-widest text-zinc-400">
                      {service.number} &bull; SERVICES NEPAL
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-zinc-100">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Deliverables Accordion */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white py-1 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                        {isExpanded ? "Hide Deliverables & Scope" : "View Scope of Deliverables"}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-90 text-white" : "text-zinc-500"
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <ul className="mt-4 space-y-2.5 pl-1 animate-fadeIn">
                        {service.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs text-zinc-400 flex items-start gap-2.5 font-sans"
                          >
                            <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-zinc-300">
                    <span className="text-zinc-500 block text-[10px] uppercase">Proven Benchmark</span>
                    <strong className="text-white">{service.metrics}</strong>
                  </div>

                  <button
                    onClick={() => onOpenContactModal?.(service.title)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-white/10 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 group/btn"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/15 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-2 block">
              Dedicated Growth Team • Kathmandu
            </span>
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
              Your Dedicated Digital Growth Partner in Nepal.
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              No junior interns or vanity metrics. We deploy disciplined media buying, navigate local payment systems, and craft viral cultural content that delivers bankable revenue to your business.
            </p>
          </div>

          <button
            onClick={() => onOpenContactModal?.("Full Nepali Growth Engine")}
            className="shrink-0 px-8 py-4 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/10 active:scale-95 flex items-center gap-2"
          >
            <span>Book Strategy Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
