"use client";

import React from "react";
import { portfolioProjects } from "@/constants/portfolio";

export default function Marquee() {
  return (
    <section className="relative py-12 bg-black border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-zinc-400">
            Selected work for brands and businesses in Nepal
          </span>
        </div>
        <p className="text-xs font-mono text-zinc-500">
          SEO, creative, websites, and campaign support for Nepali brands
        </p>
      </div>

      {/* Ticker Container with infinite animation */}
      <div className="flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div
          className="flex shrink-0 items-center gap-8 animate-marquee"
          style={{ animationDuration: "45s" }}
        >
          {[...portfolioProjects, ...portfolioProjects].map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex items-center gap-4 px-6 py-3.5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-white/30 transition-all cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <span className="font-mono font-extrabold text-xs">
                  {brand.client.substring(0, 2)}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm tracking-wider text-white group-hover:text-zinc-200 transition-colors">
                    {brand.client}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-900 border border-white/5">
                    Website Project
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
