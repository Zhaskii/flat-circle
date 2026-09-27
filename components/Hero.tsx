"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { agencyPositioning, heroProofPoints } from "@/constants/agency";

interface HeroProps {
  onOpenContactModal?: () => void;
}

export default function Hero({ onOpenContactModal }: HeroProps) {
  const proofIcons = [TrendingUp, Zap, Sparkles, ShieldCheck];
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client
    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, delay: 0.2 },
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
          "-=0.4",
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          metricsRef.current?.children || [],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
          "-=0.4",
        );

      // Continuous subtle ambient float for background flat circle geometry
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-black text-white"
    >
      {/* Background Ambient Radial Glow & Geometric Flat Circle Accents */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Subtle radial center highlight */}
        <div className="w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-radial from-white/[0.07] via-zinc-900/10 to-transparent blur-3xl opacity-70" />

        {/* Animated Rotating Official FlatCircle Logo in Ambient Background */}
        <div
          ref={orbRef}
          className="absolute w-[400px] h-[400px] sm:w-[620px] sm:h-[620px] opacity-[0.09] pointer-events-none flex items-center justify-center"
        >
          <Image
            src="/assets/Flatcircle-Logo.png"
            alt="FlatCircle Brand Mark"
            width={620}
            height={620}
            className="w-full h-full object-contain invert select-none pointer-events-none"
            priority
          />
        </div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Top Tag & Availability Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-[11px] font-mono tracking-[0.2em] text-zinc-300 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff] animate-pulse" />
            <span>DIGITAL MARKETING AGENCY • NEPAL</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-ping" />
            <span>KATHMANDU, NEPAL • SEO / CREATIVE / DIGITAL</span>
          </div>
        </div>

        {/* Editorial Giant Headline */}
        <div className="max-w-5xl">
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-tight leading-[1.05] uppercase mb-8"
          >
            Digital Marketing{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              Built for
            </span>{" "}
            <span className="inline-flex items-center">
              Meaningful Growth
              <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white ml-2 sm:ml-4 animate-pulse shadow-[0_0_15px_#ffffff]" />
            </span>
          </h1>

          {/* Subtitle & Core Thesis */}
          <p
            ref={descRef}
            className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-10 tracking-wide"
          >
            {agencyPositioning.description}
          </p>

          {/* Interactive CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-16"
          >
            <button
              onClick={onOpenContactModal}
              className="relative group px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95 flex items-center justify-center gap-3"
            >
              <span>Plan Your Digital Strategy</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <a
              href="#work"
              className="px-8 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/15 text-white font-semibold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 hover:border-white/40 active:scale-95 group"
            >
              <span>View Selected Work</span>
              <ChevronDown className="w-4 h-4 text-zinc-400 transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </div>
        </div>

        {/* Live Metrics Proof Ticker (Bottom Hero Strip) */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10"
        >
          {heroProofPoints.map((point, index) => {
            const Icon = proofIcons[index];
            return (
              <div key={point.label} className="p-4 sm:p-6 rounded-2xl bg-zinc-950/60 border border-white/5 backdrop-blur-sm group hover:border-white/20 transition-colors">
                <div className="flex items-center justify-between text-zinc-500 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider">{point.label}</span>
                  <Icon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white">{point.value}</div>
                <p className="text-xs text-zinc-500 mt-1 font-sans">{point.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
