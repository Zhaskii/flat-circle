"use client";

import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Pradeep Shrestha",
      role: "Managing Director",
      company: "Himalayan Herbs & Organics (Kathmandu)",
      metric: "Scaled from रू 6.5L to रू 42L/mo",
      rating: 5,
      content:
        "FlatCircle completely turned around our e-commerce business. Before them, we were wasting ad budget on generic Facebook post boosts with zero tracking. Within 90 days of deploying their Meta dynamic testing sandbox and integrating eSewa/Khalti checkout, our online sales grew nearly seven-fold with a steady 4.9x ROAS.",
    },
    {
      name: "Ananya Adhikari",
      role: "Head of Marketing & Admissions",
      company: "Apex Global Education (Putalisadak)",
      metric: "480+ Walk-In Applicants / Intake",
      rating: 5,
      content:
        "In Nepal, most agencies talk endlessly about likes and followers. FlatCircle was the first digital marketing team that tied everything to actual physical counseling walk-ins. Their Google Maps local 3-pack dominance and search ads filled our entire Australia and UK intake within weeks.",
    },
    {
      name: "Saurav Thapa",
      role: "Co-Founder",
      company: "Yatra Apparel Nepal (Lalitpur)",
      metric: "-48% COD Returns & 18M TikTok Views",
      rating: 5,
      content:
        "Our biggest operational pain in Nepal was fake Cash-on-Delivery orders and delivery return losses. FlatCircle created viral TikTok content with Nepali creators and engineered an automated WhatsApp verification system that slashed our RTO rate to 14%. Truly the sharpest agency in Kathmandu.",
    },
    {
      name: "Karma Gurung",
      role: "General Manager",
      company: "Mountain Luxe Lodges (Pokhara & Annapurna)",
      metric: "+340% Direct Foreign Bookings",
      rating: 5,
      content:
        "Giving 20% in commission fees to Booking.com was heavily draining our hotel margins. FlatCircle revamped our international SEO and direct checkout, ranking us #1 in the US and Europe for luxury boutique Himalayan stays. They saved us millions in commissions.",
    },
  ];

  return (
    <section id="reviews" className="relative py-28 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              <span>Verified Nepali Client Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-2xl leading-[1.1]">
              Reviews:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
                Proven Results
              </span>{" "}
              Across Nepal
            </h2>
          </div>

          {/* 5.0 Rating Badge */}
          <div className="p-5 rounded-2xl bg-zinc-950 border border-white/15 flex items-center gap-5 shrink-0">
            <div>
              <div className="flex items-center gap-1 text-white mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <div className="text-xs font-mono text-zinc-400">
                5.0 Average Rating across 45+ Enterprises in Nepal
              </div>
            </div>
            <div className="pl-4 border-l border-white/10 text-2xl font-black font-mono text-white">
              5.0
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-white">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                    <span>Verified Nepali Business Partner</span>
                  </div>
                </div>

                <Quote className="w-8 h-8 text-zinc-700 mb-4 group-hover:text-zinc-500 transition-colors" />

                <p className="text-base text-zinc-300 font-light leading-relaxed mb-8">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">
                    {rev.name}
                  </h4>
                  <div className="text-xs text-zinc-400">
                    {rev.role} • <span className="text-zinc-300 font-medium">{rev.company}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                    Outcome
                  </span>
                  <span className="text-xs font-mono font-bold text-white">
                    {rev.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
