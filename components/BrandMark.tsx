"use client";

/* eslint-disable @next/next/no-img-element -- external client brand marks use graceful fallbacks */

import React, { useState } from "react";
import type { PortfolioProject } from "@/constants/portfolio";

interface BrandMarkProps {
  project: PortfolioProject;
  size?: "sm" | "md" | "lg";
}

export default function BrandMark({ project, size = "md" }: BrandMarkProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const sizeClass = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-base",
    lg: "w-[4.5rem] h-[4.5rem] text-xl",
  }[size];

  return (
    <div
      className={
        sizeClass +
        " shrink-0 rounded-full overflow-hidden border border-white/15 bg-zinc-900/60 flex items-center justify-center p-1 shadow-lg shadow-black/30"
      }
    >
      {project.logoUrl && !imageFailed ? (
        <img
          src={project.logoUrl}
          alt={project.client + " logo"}
          className="w-full h-full rounded-full object-contain"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="font-mono font-black text-white">
          {project.client.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  );
}
