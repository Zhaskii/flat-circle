"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles, Mail, Phone, MapPin } from "lucide-react";

interface ContactSectionProps {
  initialService?: string;
  initialNote?: string;
}

export default function ContactSection({
  initialService,
  initialNote,
}: ContactSectionProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ["Performance Meta & Google Ads"]
  );
  const [selectedBudget, setSelectedBudget] = useState<string>("रू 1.5L – रू 3.5L / month");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: initialNote || "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableServices = [
    "Meta & Google Ads",
    "Local SEO & Maps",
    "eSewa / Khalti Funnels",
    "TikTok & Video Ads",
    "Viber & Bulk SMS",
    "Corporate Digital PR",
  ];

  const budgetOptions = [
    "रू 50k – रू 1.5L / mo",
    "रू 1.5L – रू 3.5L / mo",
    "रू 3.5L – रू 8L / mo",
    "रू 8L+ / mo (or USD $2k+)",
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Vision & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 border border-white/20 shadow-md shrink-0">
                  <Image
                    src="/assets/Flatcircle-Logo.png"
                    alt="FlatCircle Logo"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Initiate Partnership in Nepal</span>
                </div>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
                Ready To{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
                  Close The Loop
                </span>{" "}
                On Your Growth?
              </h2>

              <p className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-10">
                Tell us about your brand, current sales channels, and target revenue goals. Our growth team in Kathmandu will evaluate your digital presence and provide an actionable roadmap within 24 hours.
              </p>
            </div>

            {/* Direct Contact Badges */}
            <div className="space-y-4 pt-8 border-t border-white/10">
              <a
                href="mailto:namaste@flatcircle.com.np"
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                    Direct Inquiry • Kathmandu
                  </span>
                  <span className="text-sm font-semibold text-white">
                    namaste@flatcircle.com.np
                  </span>
                </div>
              </a>

              <a
                href="tel:+9779801422000"
                className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/10 hover:border-white/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                    Direct Line / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-white">
                    +977 980-1422000 / +977 1-5422000
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-950 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block">
                    Studio &amp; Office
                  </span>
                  <span className="text-sm font-semibold text-white">
                    Jhamsikhel Road, Ward 3, Lalitpur (Kathmandu Valley), Nepal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-white text-black mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white">
                    Dhanyabad! Brief Received
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our senior strategists in Kathmandu are reviewing your digital accounts and will contact you via email at <strong className="text-white">{formData.email}</strong> or phone within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", website: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full bg-zinc-900 border border-white/20 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Service Selection Chips */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                      1. Which growth pillars does your business need in Nepal?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border ${
                              isSelected
                                ? "bg-white text-black font-bold border-white shadow-md shadow-white/10"
                                : "bg-zinc-900/60 border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Monthly Budget Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                      2. Estimated Monthly Marketing &amp; Ad Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`p-3 rounded-xl text-[11px] font-mono text-center border transition-all duration-200 ${
                            selectedBudget === b
                              ? "bg-white text-black font-bold border-white shadow-md shadow-white/10"
                              : "bg-zinc-900/60 border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rajan Shakya"
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-white/10 focus:border-white text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajan@company.com.np"
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-white/10 focus:border-white text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                        Mobile Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977 9801234567"
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-white/10 focus:border-white text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                        Company Website / Social Page *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourbrand.com.np or FB page"
                        className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-white/10 focus:border-white text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
                      Primary Bottleneck or Growth Target in Nepal
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Scaling from रू 5L to रू 25L monthly sales. Need compliant Meta dollar ad setup, eSewa/Khalti checkout integration, and viral TikTok video ads."
                      className="w-full px-4 py-3.5 rounded-xl bg-zinc-900/80 border border-white/10 focus:border-white text-white text-sm focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-200 active:scale-98 transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-3 group"
                  >
                    <span>{loading ? "Processing Brief..." : "Submit Growth Brief & Request Audit"}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <div className="text-center text-[11px] font-mono text-zinc-500">
                    Registered in Nepal (PAN Verified) • Strict NDA Protection • Direct Partner Consultation
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
