"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { contactServices } from "@/constants/services";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  initialNote?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  preselectedService,
  initialNote,
}: ContactModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fadeIn">
      <ContactModalContent
        key={`${preselectedService || "default"}-${initialNote || "none"}`}
        onClose={onClose}
        preselectedService={preselectedService}
        initialNote={initialNote}
      />
    </div>
  );
}

function ContactModalContent({
  onClose,
  preselectedService,
  initialNote,
}: {
  onClose: () => void;
  preselectedService?: string;
  initialNote?: string;
}) {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    preselectedService || "Digital Marketing Strategy & Campaign Support",
  ]);
  const [budget, setBudget] = useState<string>("रू 1.5L – रू 3.5L / mo");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState(initialNote || "");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const servicesList = contactServices;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/20 p-6 sm:p-10 shadow-2xl text-white">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        aria-label="Close project modal"
      >
        <X className="w-5 h-5" />
      </button>

      {submitted ? (
        <div className="py-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-white text-black mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Dhanyabad! Brief Received
          </h3>
          <p className="text-sm text-zinc-400 max-w-md mx-auto font-light leading-relaxed">
            Our team is reviewing your brief and will follow up at <strong className="text-white">{email}</strong> with the right next steps for your digital marketing needs.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-0.5 border border-white/20 shadow-md shrink-0">
                <Image
                  src="/assets/Flatcircle-Logo.png"
                  alt="FlatCircle Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                <Sparkles className="w-3 h-3 text-white" />
                <span>Digital Marketing Support in Nepal</span>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Partner With FlatCircle
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1">
              Tell us about your brand, campaign goals, and the digital support you need.
            </p>
          </div>

          {/* Services */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              Services Needed
            </label>
            <div className="flex flex-wrap gap-2">
              {servicesList.map((s) => {
                const active = selectedServices.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => {
                      if (active) {
                        if (selectedServices.length > 1) {
                          setSelectedServices(selectedServices.filter((x) => x !== s));
                        }
                      } else {
                        setSelectedServices([...selectedServices, s]);
                      }
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                      active
                        ? "bg-white text-black font-bold"
                        : "bg-zinc-900 border border-white/10 text-zinc-400 hover:border-white/30"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-2">
              Monthly Marketing Budget in Nepal
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                "रू 50k–1.5L/mo",
                "रू 1.5L–3.5L/mo",
                "रू 3.5L–8L/mo",
                "रू 8L+/mo",
              ].map((b) => (
                <button
                  type="button"
                  key={b}
                  onClick={() => setBudget(b)}
                  className={`py-2 px-2 text-[11px] font-mono rounded-lg border text-center transition-all ${
                    budget === b
                      ? "bg-white text-black font-bold border-white"
                      : "bg-zinc-900 border-white/10 text-zinc-400 hover:border-white/30"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rajan Shakya"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-white text-white text-xs focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rajan@company.com.np"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-white text-white text-xs focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+977 9801234567"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-white text-white text-xs focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
                Website / Page URL *
              </label>
              <input
                type="text"
                required
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://brand.com.np"
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-white text-white text-xs focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase text-zinc-400 mb-1">
              Growth Objective / Target in Nepal
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Target sales, current CAC, timeline, or challenges..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 focus:border-white text-white text-xs focus:outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
          >
            <span>{loading ? "Sending..." : "Submit Project Inquiry"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
