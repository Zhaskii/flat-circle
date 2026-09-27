"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Layers3,
  Sparkles,
  X,
} from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { portfolioProjects, type PortfolioProject } from "@/constants/portfolio";

export default function Work() {
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  return (
    <section id="work" className="relative py-28 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="absolute top-24 right-[-12rem] w-[34rem] h-[34rem] rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-14 pb-8 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
              <span>Selected Digital Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight max-w-3xl leading-[1.1]">
              Websites Built{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
                With Purpose
              </span>
            </h2>
          </div>

          <div className="xl:max-w-sm">
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              A portfolio of digital experiences made for corporate groups, retailers, food brands, wellness services, hospitality, and e-commerce.
            </p>
            <div className="flex items-center gap-2 mt-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
              <Layers3 className="w-3.5 h-3.5 text-zinc-300" />
              <span>Strategy • Design • Development</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {portfolioProjects.map((project, index) => (
            <button
              type="button"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative min-h-[25rem] text-left rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 p-7 sm:p-9 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -right-20 -bottom-24 w-72 h-72 rounded-full border border-white/[0.04] group-hover:scale-110 transition-transform duration-700" />
              <span className="absolute top-7 right-8 text-5xl font-black font-mono tracking-tighter text-zinc-900 group-hover:text-zinc-700 transition-colors">
                0{index + 1}
              </span>

              <div className="relative h-full flex flex-col">
                <div className="flex items-start gap-4 pr-14">
                  <BrandMark project={project} />
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500 mb-1">
                      {project.industry}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Website delivered
                    </span>
                  </div>
                </div>

                <div className="mt-12">
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-zinc-100">
                    {project.client}
                  </h3>
                  <p className="text-sm font-medium text-zinc-300 mb-3">{project.title}</p>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-black border border-white/10 text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                    <span className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5" />Explore project</span>
                    <span className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="work-project-title"
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_32%)] pointer-events-none" />
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute z-10 top-5 right-5 p-2.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative p-7 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 pr-12">
                <BrandMark project={selectedProject} size="lg" />
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 mb-3">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    {selectedProject.industry}
                  </div>
                  <h3 id="work-project-title" className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2">
                    {selectedProject.client}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
                    {selectedProject.title}
                  </p>
                </div>
              </div>

              <p className="mt-7 text-base text-zinc-300 font-light leading-relaxed max-w-3xl">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-9">
                <div className="rounded-2xl bg-zinc-900/70 border border-white/10 p-5">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Industry</span>
                  <strong className="text-sm text-white">{selectedProject.industry}</strong>
                </div>
                <div className="rounded-2xl bg-zinc-900/70 border border-white/10 p-5">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Project type</span>
                  <strong className="text-sm text-white">{selectedProject.metric}</strong>
                </div>
                <div className="rounded-2xl bg-zinc-900/70 border border-white/10 p-5">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">FlatCircle role</span>
                  <strong className="text-sm text-white">{selectedProject.metricLabel}</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-9">
                <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">Project focus</h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">Our execution</h4>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="mt-9 pt-7 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">Capabilities used</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-zinc-400">{tag}</span>
                  ))}
                </div>

                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">What we delivered</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                  {selectedProject.results.map((result) => (
                    <li key={result} className="rounded-xl bg-zinc-900/70 border border-white/5 p-4 flex items-start gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                {selectedProject.websiteUrl && (
                  <a
                    href={selectedProject.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-all active:scale-95"
                  >
                    <Globe2 className="w-4 h-4" />
                    Visit live website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
