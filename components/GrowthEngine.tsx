"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Compass,
  PenTool,
  Zap,
} from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Understand",
    label: "Discovery & direction",
    description:
      "We start by understanding your business, audience, current digital presence, and the opportunity that deserves attention first.",
    deliverables: [
      "Digital presence review",
      "Audience and competitor context",
      "Clear priorities for the first phase of work",
    ],
    outcome: "A shared view of what matters, what can wait, and where the work should begin.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Build",
    label: "Foundation & creative",
    description:
      "We make the core pieces work together—from your web experience and search foundations to the content and creative that carry your message.",
    deliverables: [
      "Website and landing-page improvements",
      "Search-ready content structure",
      "Campaign creative and content systems",
    ],
    outcome: "A clearer digital foundation with a consistent, useful customer experience.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Activate",
    label: "Launch & learning",
    description:
      "We take focused work to market, watch how people respond, and use early signals to make the next decision more informed.",
    deliverables: [
      "Search and campaign launches",
      "Audience and message testing",
      "A practical reporting rhythm",
    ],
    outcome: "Live activity with a clear way to understand what is working and why.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Improve",
    label: "Ongoing optimisation",
    description:
      "We turn data, customer behaviour, and team feedback into refinements that improve visibility, journeys, and efficiency over time.",
    deliverables: [
      "Search visibility refinement",
      "Conversion recommendations",
      "Monthly priorities and learnings",
    ],
    outcome: "Steadier progress through continuous, evidence-led improvement.",
    icon: BarChart3,
  },
] as const;

export default function GrowthEngine() {
  const [activePhase, setActivePhase] = useState(0);
  const current = phases[activePhase];
  const Icon = current.icon;

  return (
    <section
      id="approach"
      className="relative overflow-hidden border-t border-white/10 bg-black py-24 text-white sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-white" />
              The FlatCircle approach
            </div>
            <h2 className="max-w-4xl text-4xl font-black tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              The right work, in the right order.
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              We combine clear thinking, purposeful design, and ongoing learning to help Nepal-based brands make meaningful progress online.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
              <span>Understand</span>
              <ArrowRight className="h-3.5 w-3.5" />
              <span>Build</span>
              <ArrowRight className="h-3.5 w-3.5" />
              <span>Improve</span>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {phases.map((phase, index) => {
            const PhaseIcon = phase.icon;
            const isActive = activePhase === index;
            return (
              <button
                type="button"
                key={phase.number}
                onClick={() => setActivePhase(index)}
                className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                  isActive
                    ? "border-white bg-white text-black shadow-[0_18px_40px_rgba(255,255,255,0.1)]"
                    : "border-white/10 bg-zinc-950/80 text-zinc-400 hover:border-white/35 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className={`font-mono text-[11px] tracking-[0.15em] ${isActive ? "text-black/45" : "text-zinc-600"}`}>
                    PHASE {phase.number}
                  </span>
                  <PhaseIcon className="h-4 w-4" />
                </div>
                <p className="mt-9 text-lg font-black tracking-[-0.03em] sm:text-xl">{phase.title}</p>
                <p className={`mt-1 text-[11px] leading-snug ${isActive ? "text-black/55" : "text-zinc-500"}`}>{phase.label}</p>
                <span className={`absolute inset-x-5 bottom-0 h-0.5 origin-left transition-transform duration-300 ${isActive ? "scale-x-100 bg-black" : "scale-x-0 bg-white group-hover:scale-x-100"}`} />
              </button>
            );
          })}
        </div>

        <div className="mt-5 overflow-hidden rounded-[2rem] border border-white/15 bg-zinc-950">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
            <div className="relative border-b border-white/10 bg-white p-7 text-black sm:p-10 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute -bottom-20 -left-12 text-[13rem] font-black leading-none tracking-[-0.12em] text-black/[0.04]">
                {current.number}
              </div>
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/45">
                  {current.label}
                </p>
                <h3 className="mt-3 text-4xl font-black tracking-[-0.055em] sm:text-5xl">{current.title}</h3>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-black/65">{current.outcome}</p>
                <div className="mt-10 border-t border-black/10 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45">
                  Phase {current.number} of 04
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-10">
              <p className="max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-2xl sm:leading-relaxed">
                {current.description}
              </p>
              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">What this phase can include</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {current.deliverables.map((item) => (
                    <div key={item} className="flex min-h-28 flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <Check className="h-4 w-4 text-white" />
                      <p className="mt-6 text-sm leading-snug text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-zinc-500">
                Every engagement is scoped around your current needs. The process gives the work structure while leaving room for the realities of your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
