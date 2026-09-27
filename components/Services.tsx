"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  PenTool,
  Search,
  Sparkles,
} from "lucide-react";
import { serviceCategories, services } from "@/constants/services";

interface ServicesProps {
  onOpenContactModal?: (preselectedService?: string) => void;
}

const serviceIcons = {
  web: Layers,
  search: Search,
  creative: PenTool,
};

export default function Services({ onOpenContactModal }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(services[0].id);
  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section id="services" className="relative py-28 bg-black text-white overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              <span>Full-Service Digital Marketing</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-2xl leading-[1.1]">
              Digital Marketing That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
                Moves Brands Forward
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light mb-4">
              FlatCircle brings together search, creative, campaign planning, websites, and optimization so Nepali brands can show up with more clarity and consistency online.
            </p>
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              [ SEO • Campaigns • Creator Marketing • Creative • Websites ]
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={
                "px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 " +
                (activeCategory === category.id
                  ? "bg-white text-black font-bold shadow-lg shadow-white/10"
                  : "bg-zinc-950 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30")
              }
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const Icon = serviceIcons[service.category];
            const isExpanded = expandedId === service.id;

            return (
              <div key={service.id} className="group relative rounded-3xl bg-zinc-950/70 border border-white/10 hover:border-white/30 transition-all duration-500 p-6 sm:p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm tracking-widest text-zinc-400">{service.number} • FLATCIRCLE</span>
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">{service.title}</h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">{service.subtitle}</p>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-zinc-400">{tag}</span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <button onClick={() => setExpandedId(isExpanded ? null : service.id)} className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white py-1 transition-colors">
                      <span className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" />{isExpanded ? "Hide Scope" : "View Scope"}</span>
                      <ChevronRight className={"w-4 h-4 transition-transform " + (isExpanded ? "rotate-90 text-white" : "text-zinc-500")} />
                    </button>
                    {isExpanded && (
                      <ul className="mt-4 space-y-2.5 pl-1">
                        {service.deliverables.map((item) => (
                          <li key={item} className="text-xs text-zinc-400 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" /><span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-zinc-300"><span className="text-zinc-500 block text-[10px] uppercase">Approach</span><strong className="text-white">{service.metric}</strong></div>
                  <button onClick={() => onOpenContactModal?.(service.title)} className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-white hover:text-black border border-white/10 text-xs font-bold uppercase tracking-wider transition-all">
                    <span>Start a Project</span><ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
