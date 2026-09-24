"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { ArrowUpRight, Menu, X, Phone, Mail, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export default function Navbar({ onOpenContactModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Engine", href: "#engine" },
    { name: "ROI Simulator", href: "#roi-calculator" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 bg-zinc-900/60 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-400 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenContactModal}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 group"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-white lg:hidden hover:bg-zinc-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden flex flex-col justify-between p-6 pt-24 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
              Menu Navigation
            </span>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Q3/Q4</span>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-zinc-200 hover:text-white flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-600">
                    0{idx + 1}
                  </span>
                  <span>{link.name}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Drawer Bottom Info */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContactModal?.();
            }}
            className="w-full py-3.5 px-6 rounded-full bg-white text-black font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-zinc-200 active:scale-98 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Start A Project</span>
          </button>

          <div className="grid grid-cols-2 gap-3 text-xs text-zinc-400 pt-2 font-mono">
            <a
              href="mailto:namaste@flatcircle.com.np"
              className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              <span className="truncate">namaste@flatcircle</span>
            </a>
            <a
              href="tel:+9779801422000"
              className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-white/5 hover:border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-zinc-500" />
              <span>+977 980-1422000</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
