"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { ArrowUp, Globe } from "lucide-react";

export default function Footer() {
  const [times, setTimes] = useState({
    ktm: "",
    lon: "",
    syd: "",
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        ktm: now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kathmandu",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        lon: now.toLocaleTimeString("en-US", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        syd: now.toLocaleTimeString("en-US", {
          timeZone: "Australia/Sydney",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
              FlatCircle is a Nepal-based digital marketing agency for SEO,
              campaign strategy, social content, graphic design, websites, and
              ongoing digital optimization.
            </p>
            <div className="space-y-1.5 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>Kathmandu Studio: Operating Live</span>
              </div>
              <div className="text-[11px] text-zinc-600">
                Registered in Nepal &bull; PAN: 612849201 &bull; Regd:
                289410/080/081
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
              Disciplines
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-sans">
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Digital Marketing Strategy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  SEO &amp; Search Optimization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Social Media &amp; Content
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Graphic Design &amp; Campaign Creative
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Websites &amp; Conversion Pages
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Ongoing Optimization Support
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
              Company
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-sans">
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Digital Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="hover:text-white transition-colors"
                >
                  Website &amp; Campaign Foundations
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-white transition-colors"
                >
                  SEO Performance Proof
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-white transition-colors"
                >
                  Search Visibility Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Start A Project
                </a>
              </li>
            </ul>
          </div>

          {/* Office Clocks */}
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>Studio &amp; Diaspora Times</span>
            </span>
            <div className="space-y-3 font-mono text-xs text-zinc-400">
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-between">
                <span>Kathmandu (NPT)</span>
                <span className="text-white font-bold">
                  {times.ktm || "11:30 AM"}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-between">
                <span>Sydney (AEST)</span>
                <span className="text-white font-bold">
                  {times.syd || "04:45 PM"}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-950 border border-white/5 flex items-center justify-between">
                <span>London (GMT)</span>
                <span className="text-white font-bold">
                  {times.lon || "05:45 AM"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Massive Typographic Signature Matching Logo */}
        <div className="text-[14vw] font-black lowercase tracking-tighter leading-none text-zinc-900 hover:text-zinc-800 transition-colors duration-700">
          flatcircle<span className="text-zinc-800">.</span>
        </div>
        {/* Bottom Legal & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} FlatCircle Digital Agency Pvt.
            Ltd. Kathmandu, Nepal. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#services"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#services"
              className="hover:text-zinc-300 transition-colors"
            >
              Terms of Engagement
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
