"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { HeroJourney } from "./HeroJourney";

interface HeroProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-32 pb-6 md:pt-36 md:pb-8 lg:pt-40 overflow-hidden">
      {/* Visible grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Asymmetric Architectural Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Authoritative Editorial Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* 01 — EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="eyebrow-badge">
                Ecosystem
              </span>
              <span className="font-mono text-xs font-medium tracking-widest text-[#6e6e73] uppercase">
                Innovation · Research · Technology
              </span>
            </div>

            {/* 02 — PRIMARY HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-[#1d1d1f] leading-[1.06]">
              <span className="block">From Project to <span className="text-highlight">Career</span>.</span>
              <span className="block mt-1 text-[#424245]">
                From Idea to Innovation.
              </span>
            </h1>

            {/* 03 — SUPPORTING DESCRIPTION */}
            <p className="text-base sm:text-lg text-[#424245] leading-relaxed max-w-xl font-normal">
              ASK INVENTORS helps students, researchers, institutions, and innovators turn ideas into meaningful projects, practical skills, research, prototypes, and real-world opportunities.
            </p>

            {/* 04 — JOURNEY STATEMENT */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white px-3.5 py-2 font-mono text-xs text-[#424245] shadow-sm">
                <span className="text-[#0071e3] font-bold">FLOW //</span>
                <span className="text-[#1d1d1f]">Explore.</span>
                <span className="text-[#aeaeb2]">→</span>
                <span className="text-[#1d1d1f]">Build.</span>
                <span className="text-[#aeaeb2]">→</span>
                <span className="text-[#1d1d1f]">Research.</span>
                <span className="text-[#aeaeb2]">→</span>
                <span className="text-[#1d1d1f]">Prototype.</span>
                <span className="text-[#aeaeb2]">→</span>
                <span className="text-[#0071e3] font-bold">Grow.</span>
              </div>
            </div>

            {/* 05 & 06 — CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenContact("student", "hero-primary")}
                type="button"
                className="btn-primary"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="#services"
                className="btn-ghost"
              >
                <span>Explore What We Do</span>
                <ArrowUpRight className="w-4 h-4 text-[#6e6e73]" />
              </Link>
            </div>

            {/* Architectural Metadata Rail */}
            <div className="pt-6 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-mono text-[#6e6e73]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>AUDIENCE: UG · PG · PhD · Institutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>DISCIPLINES: Hardware · AI · Patents</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Transformation Matrix */}
          <div className="lg:col-span-6">
            <HeroJourney onOpenContact={onOpenContact} />
          </div>
        </div>

        {/* Ecosystem Standards & Toolchain Trust Strip */}
        <div className="mt-10 pt-6 border-t border-black/[0.06]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b] shrink-0">
              Supported Toolchains & Formats
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {["IEEE Xplore", "Scopus Indexing", "MATLAB", "Altium Designer", "PyTorch", "STM32 ARM", "KiCad", "ROS 2", "ANSYS", "FreeRTOS"].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-lg border border-black/[0.08] bg-white px-3 py-1 text-xs font-mono font-medium text-[#424245] shadow-sm hover:border-[#0071e3]/30 hover:text-[#0071e3] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
