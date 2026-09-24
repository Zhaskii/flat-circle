"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How do you handle international dollar ad spend for Meta and Google Ads in Nepal?",
      a: "Nepali banks limit personal dollar cards to $500/year, which cripples serious scaling. FlatCircle operates with compliant international agency ad accounts and corporate foreign exchange billing, allowing your business to scale ad spend from $500 to $20,000+ per month legally without card blocks or account bans.",
    },
    {
      q: "How do you solve Cash-on-Delivery (COD) fraud and delivery return (RTO) losses?",
      a: "In Nepal, high COD return rates (often 30%-40%) kill eCommerce profitability. We integrate instant payment gateways (eSewa, Khalti, ConnectIPS, Fonepay) with special prepaid discounts, combined with automated WhatsApp and SMS order confirmation bots that verify customer phone numbers and delivery addresses before courier dispatch.",
    },
    {
      q: "Can you target the Nepali diaspora living abroad in Australia, the US, and UK?",
      a: "Yes! A huge growth lever for Nepali brands, tourism operators, real estate, and education consultancies is reaching the high-earning Nepali diaspora. We run precision-targeted campaigns reaching Nepalis in Sydney, Melbourne, Dallas, London, Tokyo, and Dubai for remittances, homeland investments, and family gifting.",
    },
    {
      q: "Do you produce video and ad content in Nepali or English?",
      a: "Both. For local mass-market campaigns on TikTok and Instagram, we create authentic conversational Nepali content with relatable cultural hooks and humor. For corporate B2B clients, education consultancies, and export brands (pashmina, tea, tourism), we produce high-end international English creative.",
    },
    {
      q: "What is the recommended monthly budget for partnering with FlatCircle in Nepal?",
      a: "We work with businesses ready to invest between रू 40,000 and रू 15,00,000+ (15 Lakhs) per month across paid channels, as well as fast-growing seed/Series-A startups and established Nepali conglomerates. We focus strictly on measurable ROI and contribution profit.",
    },
    {
      q: "Where is FlatCircle located in Nepal, and can we meet in person?",
      a: "Our headquarters is located in Jhamsikhel, Lalitpur (Kathmandu Valley), with partner representatives in Pokhara. We welcome founders and marketing heads to our studio for espresso, detailed funnel whiteboarding, and growth strategy sessions.",
    },
  ];

  return (
    <section id="faq" className="relative py-28 bg-black text-white border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-white" />
            <span>Clarity for Nepali Enterprises</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
              Questions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Everything you need to know about partnering with FlatCircle to scale your brand in Nepal and globally.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/25 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-white transition-transform duration-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 pt-0 text-sm sm:text-base text-zinc-400 font-light leading-relaxed border-t border-white/5 mt-2">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
