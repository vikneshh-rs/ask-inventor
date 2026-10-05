"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

interface FinalCTAProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

export function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Multi-layer ambient radial backdrops */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-600/15 to-cyan-500/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Dominant Liquid Glass Box */}
        <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/90 via-slate-900/75 to-slate-950/90 p-8 sm:p-14 lg:p-16 backdrop-blur-2xl shadow-2xl reflection-top text-center">
          {/* Top Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-950/60 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md shadow-glass mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="tracking-wide uppercase text-[11px] font-bold">
              Ready to Innovate
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
            <span>Have an idea?</span>
            <span className="block mt-2 bg-gradient-to-r from-indigo-200 via-indigo-100 to-cyan-300 bg-clip-text text-transparent">
              Let&apos;s build what comes next.
            </span>
          </h2>

          {/* Supporting Statement */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Whether you&apos;re building a project, conducting research, developing a prototype, preparing for your career, or creating a venture — ASK INVENTORS can help you move forward.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact("student", "final-cta")}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-indigo-600 px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-glow-indigo transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/50 active-press border border-indigo-400/40 group"
            >
              <Sparkles className="w-4 h-4 text-indigo-200" />
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <Link
              href="#journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm sm:text-base font-medium text-slate-200 backdrop-blur-md transition-all duration-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white active-press"
            >
              <span>Explore ASK INVENTORS</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Full IP & Prior Art Protection</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>1-on-1 Dedicated Technical Mentors</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Rapid Prototyping & Fabrication Lab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
