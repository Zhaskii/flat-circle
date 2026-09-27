"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqs } from "@/constants/faqs";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Everything you need to know about partnering with FlatCircle for professional digital marketing in Nepal.
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
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-white transition-transform duration-300">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 pt-0 text-sm sm:text-base text-zinc-400 font-light leading-relaxed border-t border-white/5 mt-2">
                    <p className="pt-4">{faq.answer}</p>
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
