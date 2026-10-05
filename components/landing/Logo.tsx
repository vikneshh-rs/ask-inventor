"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function Logo({
  className = "",
  size = "md",
  showTagline = true,
}: LogoProps) {
  const iconDimensions = {
    sm: { width: 34, height: 34, wrapper: "w-8.5 h-8.5" },
    md: { width: 42, height: 42, wrapper: "w-10 h-10" },
    lg: { width: 54, height: 54, wrapper: "w-13 h-13" },
  };

  const textSizes = {
    sm: "text-base tracking-tight",
    md: "text-lg tracking-tight",
    lg: "text-2xl tracking-tight",
  };

  const currentDim = iconDimensions[size];

  return (
    <div
      className={`inline-flex items-center gap-3 font-bold select-none group ${className}`}
    >
      {/* Official Brand Emblem with Liquid Glass Container */}
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 p-1 border border-indigo-500/30 shadow-glow-indigo overflow-hidden transition-transform duration-200 group-hover:scale-105 ${currentDim.wrapper}`}
      >
        {/* Ambient subtle backglow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-indigo-600/20 via-cyan-500/10 to-amber-500/10 blur-sm pointer-events-none" />

        {/* Crisp Brand Mark Image */}
        <Image
          src="/logo.png"
          alt="ASK INVENTORS Logo"
          width={currentDim.width}
          height={currentDim.height}
          className="relative z-10 object-contain w-full h-full drop-shadow-md"
          priority
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div
          className={`font-extrabold text-slate-100 flex items-center gap-1.5 leading-none ${textSizes[size]}`}
        >
          <span className="tracking-tight text-white">ASK</span>
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
            INVENTORS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block shadow-[0_0_8px_#38bdf8] animate-pulse" />
        </div>

        {showTagline && size !== "sm" && (
          <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mt-1 flex items-center gap-1.5">
            <span className="text-amber-400/90 font-mono">✦</span>
            <span>Innovation Ecosystem</span>
          </span>
        )}
      </div>
    </div>
  );
}
