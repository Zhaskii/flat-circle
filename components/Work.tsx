"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, TrendingUp, X, Sparkles } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  filter: "paid" | "seo" | "cro" | "creative";
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  color: string;
}

export default function Work() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "himalayan-organics",
      title: "Scaling Online DTC Revenue from रू 6.5L to रू 42L/mo in 7 Months",
      client: "Himalayan Herbs & Organic",
      category: "Paid Acquisition & eSewa/Khalti Funnel",
      filter: "paid",
      metric: "+460%",
      metricLabel: "Online Revenue Scaled",
      description:
        "Restructured Meta & TikTok dynamic ad funnels, added 1-click eSewa/Khalti payment gateways, and automated WhatsApp order tracking to achieve a steady 4.9x blended ROAS.",
      tags: ["Facebook & Instagram Ads", "eSewa / Khalti", "TikTok Viral", "WhatsApp CRM"],
      challenge:
        "Himalayan Herbs was relying on manual Instagram DM orders and bank slips, suffering an 80% customer drop-off during payment and high advertising costs on poorly targeted Facebook boosts.",
      solution:
        "FlatCircle created a sub-second mobile web store integrated with direct eSewa and Khalti APIs, deployed algorithmic Meta conversion campaigns targeting urban Nepal, and produced 20+ viral recipe hooks.",
      results: [
        "Monthly online sales increased from रू 6.5 Lakhs to over रू 42 Lakhs",
        "Blended ROAS sustained at 4.9x across Kathmandu, Pokhara, and Chitwan",
        "Cart abandonment dropped by 64% with instant wallet payments",
        "Repeat order rate grew to 38% via automated Viber festival broadcasts",
      ],
      color: "from-zinc-900 via-zinc-900 to-black",
    },
    {
      id: "apex-education",
      title: "Generating 480+ Qualified Walk-In Leads Per University Intake",
      client: "Apex Global Studies Consultancy",
      category: "Google Search & Local SEO Nepal",
      filter: "seo",
      metric: "480+",
      metricLabel: "Qualified Intake Walk-Ins",
      description:
        "Dominated Google Maps rankings across Kathmandu and Pokhara for Australia & UK study queries, layered with hyper-targeted Google Search and YouTube video ads.",
      tags: ["Local SEO Nepal", "Google Maps 3-Pack", "Google Search Ads", "Abroad Studies"],
      challenge:
        "With hundreds of consultancies competing in Putalisadak and Bagbazar, generic Facebook lead forms yielded poor student quality, high no-show rates, and soaring lead acquisition costs.",
      solution:
        "We ranked Apex in the Google Maps 3-Pack for 'Best Australia consultancy in Kathmandu', launched intent-driven Google Search campaigns, and built interactive eligibility assessment quizzes.",
      results: [
        "In-office physical counseling walk-ins surged to 480+ students per intake",
        "Cost per qualified applicant dropped from रू 1,200 to रू 340",
        "Google Maps profile views increased by 310% with over 1,400 monthly call clicks",
        "Successfully opened branch admissions in Pokhara & Chitwan backed by local search",
      ],
      color: "from-zinc-900 via-zinc-900 to-black",
    },
    {
      id: "mountain-retreats",
      title: "340% Increase in Direct Foreign Tourist Bookings",
      client: "Mountain Luxe Lodges (Pokhara & Everest)",
      category: "Global SEO & International Direct Booking",
      filter: "cro",
      metric: "+340%",
      metricLabel: "Direct International Bookings",
      description:
        "Eliminated dependency on Booking.com and Agoda by ranking #1 on Google in the US, UK, and Europe for boutique Himalayan stays, coupled with friction-free direct card checkout.",
      tags: ["International SEO", "Direct Hotel Booking", "Himalayan Tourism", "Speed CRO"],
      challenge:
        "The property was giving away 18%-22% in commission fees to Online Travel Agencies (OTAs) and their legacy website failed to convert high-net-worth international trekkers.",
      solution:
        "We built an ultra-fast editorial booking site featuring high-res Himalayan visuals, direct multi-currency card processing, and comprehensive SEO targeting luxury trekking keywords in Europe & North America.",
      results: [
        "Direct bookings increased by 340%, saving over रू 35 Lakhs in annual OTA commissions",
        "Ranked #1 on Google US & UK for 'luxury boutique resort Pokhara'",
        "Average stay duration increased from 2.1 nights to 4.4 nights",
        "International organic search traffic grew to 45,000+ targeted foreign visits/quarter",
      ],
      color: "from-zinc-900 via-zinc-900 to-black",
    },
    {
      id: "urban-streetwear",
      title: "Slashing Cash-on-Delivery (COD) Returns by 48% with 18M Views",
      client: "Yatra Apparel Nepal",
      category: "Viral TikTok & COD Logistics Optimization",
      filter: "creative",
      metric: "-48%",
      metricLabel: "COD Return-to-Origin (RTO)",
      description:
        "Coordinated viral Nepali TikTok creator campaigns paired with automated WhatsApp order verification bots that cleared inventory and prevented costly delivery returns.",
      tags: ["Viral TikTok Nepal", "Creator Seeding", "COD Fraud Protection", "WhatsApp Bot"],
      challenge:
        "In Nepal, Cash-on-Delivery accounts for 75%+ of eCommerce, but unverified fake orders and customer cancellations during courier transit were eroding profit margins by 32%.",
      solution:
        "We produced short-form TikTok styling videos with Nepali creators, and implemented an automated WhatsApp confirmation workflow that validated customer delivery addresses before courier dispatch.",
      results: [
        "18.2M organic TikTok views across Nepal and youth audiences",
        "Cash-on-Delivery Return-to-Origin (RTO) rate plummeted from 34% to 14%",
        "Generated रू 1.2 Crore in gross e-commerce sales over the Dashain/Tihar season",
        "Expanded retail consignment across 12 fashion multi-brand outlets in Kathmandu",
      ],
      color: "from-zinc-900 via-zinc-900 to-black",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Nepali Case Studies" },
    { id: "paid", label: "Meta & Google Ads" },
    { id: "seo", label: "Local SEO & Maps" },
    { id: "cro", label: "eCommerce & eSewa" },
    { id: "creative", label: "Viral TikTok & PR" },
  ];

  const filteredStudies =
    selectedFilter === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.filter === selectedFilter);

  return (
    <section id="work" className="relative py-28 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              <span>Proven Case Studies Across Nepal</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-2xl leading-[1.1]">
              Work That&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
                Worked in Nepal
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              We blend relentless performance engineering with deep on-the-ground Nepali consumer insights to turn traffic into compounding bottom-line profits.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                selectedFilter === tab.id
                  ? "bg-white text-black font-bold shadow-md shadow-white/10"
                  : "bg-zinc-950 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedStudy(study)}
              className="group relative rounded-3xl bg-gradient-to-b from-zinc-950 to-black border border-white/10 hover:border-white/40 transition-all duration-500 p-8 sm:p-10 flex flex-col justify-between cursor-pointer overflow-hidden shadow-2xl"
            >
              {/* Graphic Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] rounded-full blur-3xl group-hover:bg-white/[0.08] transition-all duration-500 pointer-events-none" />

              <div>
                {/* Client badge and category */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 font-semibold">
                      {study.client}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase px-2.5 py-1 rounded bg-zinc-900 border border-white/5">
                    {study.category}
                  </span>
                </div>

                {/* Big Metric Badge */}
                <div className="mb-6">
                  <div className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-white group-hover:scale-105 transition-transform duration-300 origin-left">
                    {study.metric}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {study.metricLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-zinc-200 transition-colors leading-snug">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-900/80 border border-white/10 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                  <span>View Full Nepal Case Study</span>
                </span>
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/20 p-6 sm:p-10 shadow-2xl text-white">
            {/* Close Button */}
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
              <span>{selectedStudy.client}</span>
              <span>•</span>
              <span>{selectedStudy.category}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-6 pr-10">
              {selectedStudy.title}
            </h3>

            {/* Hero Metric */}
            <div className="p-6 rounded-2xl bg-zinc-900 border border-white/10 mb-8 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-zinc-400">Primary Impact</div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mt-1">
                  {selectedStudy.metric}
                </div>
                <div className="text-xs font-mono text-zinc-500 mt-1">
                  {selectedStudy.metricLabel}
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-zinc-400" />
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                  [ The Challenge in Nepal ]
                </h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {selectedStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                  [ The FlatCircle Execution ]
                </h4>
                <p className="text-sm text-zinc-300 font-light leading-relaxed">
                  {selectedStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  [ Verified Results & ROI ]
                </h4>
                <ul className="space-y-2.5">
                  {selectedStudy.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-zinc-500">
                Ready to scale your business in Nepal or globally?
              </span>
              <button
                onClick={() => {
                  setSelectedStudy(null);
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                Schedule Consultation in Kathmandu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
