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
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Precision Blueprint Coordinate Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 bg-blueprint-grid opacity-30"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Asymmetric Architectural Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Authoritative Editorial Proposition */}
          <div className="lg:col-span-6 space-y-6">
            {/* 01 — EYEBROW */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-indigo-400">
                [ 01 // ECOSYSTEM ]
              </span>
              <div className="h-[1px] w-6 bg-white/20" />
              <span className="font-mono text-xs font-semibold tracking-widest text-slate-300 uppercase">
                INNOVATION • RESEARCH • TECHNOLOGY
              </span>
            </div>

            {/* 02 — PRIMARY HEADLINE */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              <span className="block text-slate-100">From Project to Career.</span>
              <span className="block mt-1 text-slate-400">
                From Idea to Innovation.
              </span>
            </h1>

            {/* 03 — SUPPORTING DESCRIPTION */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              ASK INVENTORS helps students, researchers, institutions, and innovators turn ideas into meaningful projects, practical skills, research, prototypes, and real-world opportunities.
            </p>

            {/* 04 — JOURNEY STATEMENT */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#0d1322] px-3.5 py-2 font-mono text-xs text-slate-300">
                <span className="text-indigo-400 font-bold">FLOW //</span>
                <span className="text-slate-200">Explore.</span>
                <span className="text-slate-500">→</span>
                <span className="text-slate-200">Build.</span>
                <span className="text-slate-500">→</span>
                <span className="text-slate-200">Research.</span>
                <span className="text-slate-500">→</span>
                <span className="text-slate-200">Prototype.</span>
                <span className="text-slate-500">→</span>
                <span className="text-cyan-300 font-bold">Grow.</span>
              </div>
            </div>

            {/* 05 & 06 — CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA */}
              <button
                onClick={() => onOpenContact("student", "hero-primary")}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors active-press shadow-lg shadow-indigo-950/50"
              >
                <Sparkles className="w-4 h-4 text-indigo-200" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-slate-900/60 px-5 py-3.5 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-colors active-press"
              >
                <span>Explore What We Do</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Architectural Metadata Rail */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>AUDIENCE: UG • PG • PhD • Institutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>DISCIPLINES: Hardware • AI • Patents</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Transformation Matrix */}
          <div className="lg:col-span-6">
            <HeroJourney onOpenContact={onOpenContact} />
          </div>
        </div>
      </div>
    </section>
  );
}
