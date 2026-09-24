"use client";

import React, { useState } from "react";
import { Search, PenTool, Cpu, Repeat, ShieldCheck, Zap } from "lucide-react";

export default function GrowthEngine() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: "01",
      title: "Market Forensics & Payment/Pixel Audit",
      timeline: "Days 1 – 14",
      subtitle: "Auditing your dollar-card ad spend, local search citations & funnel leaks",
      icon: Search,
      deliverables: [
        "International ad account & dollar-card compliance audit",
        "Meta Conversions API (CAPI) & GA4 server-side tracking setup",
        "Google My Business & Nepali local citation verification",
        "Competitor ad copy and creative reverse-engineering in Nepal",
      ],
      description:
        "We never deploy ad budgets blindly. In Phase 01, we fix pixel/CAPI discrepancies, audit your unit economics, evaluate local competitor campaigns in Kathmandu, and ensure your tracking infrastructure is airtight.",
    },
    {
      number: "02",
      title: "Vernacular Creative & Payment Funnels",
      timeline: "Days 15 – 25",
      subtitle: "Crafting viral Nepali TikTok hooks and sub-second eSewa/Khalti checkout flows",
      icon: PenTool,
      deliverables: [
        "Production of 20+ viral TikTok & Instagram Reels with Nepali cultural hooks",
        "Sub-second landing page builds with 1-click eSewa, Khalti & ConnectIPS buttons",
        "Automated WhatsApp confirmation workflow to prevent fake COD orders",
        "Bilingual ad copywriting (authentic conversational Nepali + clean English)",
      ],
      description:
        "Creative is the engine of conversion in Nepal. We create culturally relatable short-form video hooks paired with frictionless mobile checkouts built specifically for local payment wallets and mobile telecom speeds.",
    },
    {
      number: "03",
      title: "Algorithmic Scaling & Geo-Targeting",
      timeline: "Days 26 – 60",
      subtitle: "Scaling winner campaigns across Kathmandu, Pokhara, Terai & the Diaspora",
      icon: Cpu,
      deliverables: [
        "Meta & Google Dynamic testing sandboxes with strict cost-cap discipline",
        "Geo-segmented targeting: Kathmandu Valley, Pokhara, Chitwan, Butwal, Biratnagar",
        "Diaspora targeting funnels (Australia, UK, USA, Gulf & Japan)",
        "Local SEO acceleration to dominate Google Maps 3-Pack rankings",
      ],
      description:
        "Once winning angles emerge from our testing sandbox, we scale ad budgets into verified high-ROAS audiences across major commercial hubs in Nepal and the high-purchasing-power Nepali diaspora.",
    },
    {
      number: "04",
      title: "Compounding Retention & Viber/SMS Loops",
      timeline: "Days 60+",
      subtitle: "Maximizing repeat orders through Viber communities, SMS & festival campaigns",
      icon: Repeat,
      deliverables: [
        "High-deliverability transactional & promotional Bulk SMS in Nepal",
        "Viber Business & WhatsApp automated broadcast funnels",
        "Seasonal revenue playbooks for Dashain, Tihar, New Year & wedding seasons",
        "Customer loyalty tiers and personalized re-order prompts",
      ],
      description:
        "True enterprise sustainability in Nepal comes from repeat business. We build automated retention loops that keep your brand top-of-mind across Viber, WhatsApp, and SMS, driving 35%+ of sales from loyal customers.",
    },
  ];

  return (
    <section id="engine" className="relative py-28 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4">
            <Zap className="w-3.5 h-3.5 text-white" />
            <span>The FlatCircle Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-6">
            The Nepal Growth Engine:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
              How We Scale
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            A battle-tested 4-phase flywheel designed specifically for the Nepali market to eliminate ad waste, integrate digital wallets, and maximize compounding customer lifetime value.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "bg-zinc-900 border-white text-white shadow-xl shadow-white/5"
                    : "bg-zinc-950/60 border-white/10 text-zinc-500 hover:text-zinc-300 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-sm tracking-widest ${
                      isActive ? "text-white font-bold" : "text-zinc-600"
                    }`}
                  >
                    PHASE {step.number}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-zinc-600"
                    }`}
                  />
                </div>
                <div>
                  <div
                    className={`text-sm font-bold tracking-tight mb-1 line-clamp-1 ${
                      isActive ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-500">
                    {step.timeline}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                <span className="text-white font-bold">Phase {steps[activeStep].number}</span>
                <span>•</span>
                <span>{steps[activeStep].timeline}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Key Phase Deliverables</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-zinc-900/80 border border-white/5 text-xs text-zinc-300 font-sans flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Graphic Representation */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center p-8 rounded-2xl bg-zinc-900/60 border border-white/10 text-center">
              <div className="w-20 h-20 rounded-full bg-black border border-white/20 flex items-center justify-center mb-6 shadow-2xl">
                {React.createElement(steps[activeStep].icon, {
                  className: "w-8 h-8 text-white",
                })}
              </div>
              <div className="text-xl font-bold text-white mb-2">
                Scalable in Nepal & Overseas
              </div>
              <p className="text-xs text-zinc-400 max-w-xs font-light mb-6">
                Engineered to navigate Nepal&apos;s digital payment landscape and convert high-intent buyers reliably.
              </p>
              <div className="w-full flex items-center justify-between text-xs font-mono text-zinc-400 px-4 py-2 rounded-lg bg-black/60 border border-white/5">
                <span>Phase Progress</span>
                <span className="text-white font-bold">{(activeStep + 1) * 25}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
