"use client";

import React from "react";

export default function Marquee() {
  const brands = [
    { name: "HIMALAYAN HERBS", category: "DTC Wellness", desc: "रू 85L/mo Scaled" },
    { name: "APEX ABROAD", category: "Education Consultancy", desc: "450+ Intakes" },
    { name: "POKHARA RETREAT", category: "Himalayan Hospitality", desc: "+340% Direct Bookings" },
    { name: "NAMASTE PAY", category: "Fintech & Wallets", desc: "180k App Installs" },
    { name: "PATAN ARTISANS", category: "Pashmina & Craft Export", desc: "US & EU Sales" },
    { name: "KATHMANDU ROAST", category: "Specialty F&B", desc: "4 Outlets Sold Out" },
    { name: "EVEREST EXPEDITIONS", category: "Adventure Tourism", desc: "Rank #1 Google Global" },
    { name: "NEPAL CLOUD TECH", category: "Enterprise IT", desc: "B2B Lead Pipeline" },
  ];

  return (
    <section className="relative py-12 bg-black border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-zinc-400">
            Trusted by Ambitious Nepali Brands &amp; Global Enterprises
          </span>
        </div>
        <p className="text-xs font-mono text-zinc-500">
          Scaling businesses across Kathmandu, Pokhara, Chitwan, and the Nepali diaspora
        </p>
      </div>

      {/* Ticker Container with infinite animation */}
      <div className="flex select-none overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 items-center gap-8 animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center gap-4 px-6 py-3.5 rounded-xl bg-zinc-950/80 border border-white/10 hover:border-white/30 transition-all cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-white/10 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all">
                <span className="font-mono font-extrabold text-xs">
                  {brand.name.substring(0, 2)}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm tracking-wider text-white group-hover:text-zinc-200 transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-900 border border-white/5">
                    {brand.desc}
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
