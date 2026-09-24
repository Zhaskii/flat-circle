"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  inverted?: boolean;
}

export default function Logo({
  className = "",
  iconOnly = false,
  size = "md",
  inverted = false,
}: LogoProps) {
  const sizeMap = {
    sm: { icon: 34, text: "text-base tracking-[0.18em]" },
    md: { icon: 44, text: "text-lg tracking-[0.2em]" },
    lg: { icon: 58, text: "text-2xl tracking-[0.25em]" },
    xl: { icon: 76, text: "text-3xl tracking-[0.3em]" },
  };

  const currentSize = sizeMap[size];

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3.5 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="FlatCircle Agency Nepal"
    >
      {/* Official FlatCircle Logo from Assets */}
      <div className="relative flex items-center justify-center shrink-0 rounded-full overflow-hidden shadow-lg shadow-white/10 border border-white/20 group-hover:border-white/50 transition-all duration-300 bg-white">
        <Image
          src="/assets/Flatcircle-Logo.png"
          alt="FlatCircle Official Logo"
          width={currentSize.icon}
          height={currentSize.icon}
          className={`object-contain transition-transform duration-500 group-hover:scale-105 ${
            inverted ? "invert" : ""
          }`}
          priority
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-2">
            <span
              className={`font-black tracking-tight text-white lowercase ${currentSize.text}`}
            >
              flatcircle<span className="text-white">.</span>
            </span>
            <span className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-white/20 text-white/80 tracking-widest leading-none font-medium">
              NEPAL
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mt-1 font-medium">
            Kathmandu Digital Marketing
          </span>
        </div>
      )}
    </Link>
  );
}
