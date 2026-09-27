"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Maximize2,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { seoProofs, type SeoProof } from "@/constants/seo";

type ProofFilter = "all" | SeoProof["type"];

const filters: { id: ProofFilter; label: string }[] = [
  { id: "all", label: "All proof" },
  { id: "performance", label: "Performance reports" },
  { id: "visibility", label: "Search visibility" },
];

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<ProofFilter>("all");
  const [selectedProof, setSelectedProof] = useState<SeoProof | null>(null);

  const proofs = useMemo(
    () =>
      activeFilter === "all"
        ? seoProofs
        : seoProofs.filter((proof) => proof.type === activeFilter),
    [activeFilter],
  );

  const performanceCount = seoProofs.filter(
    (proof) => proof.type === "performance",
  ).length;
  const visibilityCount = seoProofs.filter(
    (proof) => proof.type === "visibility",
  ).length;
  const industryCount = new Set(
    seoProofs.map((proof) =>
      proof.client.includes("Nirvana")
        ? "Health & wellness"
        : proof.client.includes("Arksh")
          ? "Food & FMCG"
          : "Luxury retail",
    ),
  ).size;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProof(null);
    };

    if (selectedProof) window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProof]);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-20 text-black sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/10" />
      <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full border border-black/15" />
      <div className="pointer-events-none absolute -right-10 top-28 h-52 w-52 rounded-full bg-black/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-[linear-gradient(90deg,transparent_0,rgba(23,23,23,0.045)_1px,transparent_1px),linear-gradient(0deg,transparent_0,rgba(23,23,23,0.045)_1px,transparent_1px)] bg-[size:2.75rem_2.75rem] [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b border-black/10 pb-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/55">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
                <Search className="h-3.5 w-3.5" />
              </span>
              SEO case studies
            </div>
            <h2 className="max-w-4xl text-4xl font-black tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl">
              Search results with a trail of evidence.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-black/60 sm:text-lg">
              We make search work visible: reporting snapshots for organic
              performance, plus live-search examples of the high-intent pages
              we helped brands earn visibility for.
            </p>
          </div>

          <aside className="rounded-[1.75rem] bg-black p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-7">
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Evidence standard
                </p>
                <p className="mt-1 text-lg font-bold tracking-tight">
                  Grounded, not guessed.
                </p>
              </div>
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                "Search Console comparison snapshots",
                "Real Google search-result captures",
                "Client, query, and proof type clearly labelled",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-snug">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="grid border-b border-black/10 sm:grid-cols-3">
          {[
            { value: performanceCount, label: "Performance reports", detail: "Three-month comparisons" },
            { value: visibilityCount, label: "Search-result captures", detail: "High-intent discovery queries" },
            { value: industryCount, label: "Industry contexts", detail: "Retail, wellness, and FMCG" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`py-7 sm:px-7 ${index > 0 ? "sm:border-l sm:border-black/10" : ""}`}
            >
              <span className="text-4xl font-black tracking-[-0.06em] sm:text-5xl">
                {String(stat.value).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-bold">{stat.label}</p>
              <p className="mt-1 text-xs text-black/50">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between gap-5 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
              Result library
            </p>
            <p className="mt-1 text-xl font-bold tracking-tight">Explore the supporting proof</p>
          </div>
          <div className="flex w-full gap-2 overflow-x-auto pb-1 sm:w-auto sm:overflow-visible sm:pb-0">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition-colors ${
                  activeFilter === filter.id
                    ? "bg-black text-white"
                    : "border border-black/15 bg-white/50 text-black/60 hover:border-black/40 hover:text-black"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {proofs.map((proof, index) => {
            const isPerformance = proof.type === "performance";
            return (
              <button
                type="button"
                key={proof.id}
                onClick={() => setSelectedProof(proof)}
                className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-[0_20px_44px_rgba(0,0,0,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4"
              >
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-3">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-black/55">
                    {isPerformance ? <BarChart3 className="h-3.5 w-3.5" /> : <Search className="h-3.5 w-3.5" />}
                    {isPerformance ? "Performance report" : "Search visibility"}
                  </span>
                  <span className="font-mono text-[10px] text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={`relative overflow-hidden ${isPerformance ? "aspect-video bg-zinc-50" : "aspect-[16/10] bg-zinc-950"}`}>
                  <Image
                    src={proof.image}
                    alt={proof.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white opacity-0 shadow-lg transition-all group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/45">
                    {proof.client}
                  </p>
                  <h3 className="mt-2 text-lg font-bold tracking-tight text-black">
                    {proof.title}
                  </h3>
                  <p className="mt-2 min-h-10 text-sm leading-relaxed text-black/60">
                    {proof.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4">
                    <span className="max-w-[78%] truncate text-xs text-black/50">
                      {proof.searchQuery}
                    </span>
                    <ChevronRight className="h-4 w-4 text-black/45 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-[1.75rem] border border-black/10 bg-white/55 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-bold tracking-tight">Want this level of clarity for your search presence?</p>
            <p className="mt-1 text-sm text-black/55">We can start with the technical and content opportunities already on your site.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-zinc-800"
          >
            Discuss your SEO
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {selectedProof && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="seo-proof-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProof(null);
          }}
        >
          <div className="relative w-full max-w-6xl rounded-[1.75rem] bg-white text-black shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProof(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-zinc-800 sm:right-6 sm:top-6"
              aria-label="Close SEO proof"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-5 sm:p-8">
              <div className="mb-5 pr-12 sm:mb-6">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/50">
                  {selectedProof.type === "performance" ? <BarChart3 className="h-3.5 w-3.5" /> : <Search className="h-3.5 w-3.5" />}
                  {selectedProof.type === "performance" ? "Performance report" : "Search visibility"} · {selectedProof.client}
                </div>
                <h3 id="seo-proof-title" className="mt-2 text-2xl font-black tracking-[-0.045em] sm:mt-3 sm:text-4xl">
                  {selectedProof.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
                  {selectedProof.description}
                </p>
              </div>
              <div className="relative flex h-[52svh] min-h-72 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-2 sm:h-[min(62svh,42rem)] sm:p-3">
                <Image
                  src={selectedProof.image}
                  alt={selectedProof.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="object-contain"
                />
              </div>
              <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-xs text-black/65">
                <Search className="h-3.5 w-3.5 shrink-0" />
                <span className="truncate">{selectedProof.searchQuery}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
