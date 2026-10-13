"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

interface FinalCTAProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

export function FinalCTA({ onOpenContact }: FinalCTAProps) {
  return (
    <section className="relative py-6 md:py-10 scroll-mt-24 overflow-hidden">
      {/* Multi-layer ambient radial backdrops */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full bg-blue-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Dominant Liquid Glass Box */}
        <div className="relative rounded-3xl border border-black/[0.08] bg-white p-8 sm:p-12 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12),0_8px_25px_-5px_rgba(0,113,227,0.08),0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-[0_28px_70px_-15px_rgba(0,0,0,0.16),0_12px_30px_-5px_rgba(0,113,227,0.12)] transition-shadow duration-300 text-center">
          {/* Top Eyebrow Tag */}
          <div className="eyebrow-badge mb-5 px-4 py-1.5 gap-2 text-xs font-semibold">
            <Sparkles className="w-4 h-4" />
            <span className="tracking-wide uppercase text-[11px] font-bold">
              Ready to Innovate
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1d1d1f] leading-[1.1] max-w-4xl mx-auto">
            <span>Have an idea?</span>
            <span className="block mt-2 text-highlight">
              Let&apos;s build what comes next.
            </span>
          </h2>

          {/* Supporting Statement */}
          <p className="mt-4 text-base sm:text-lg text-[#424245] leading-relaxed max-w-3xl mx-auto font-normal">
            Whether you&apos;re building a project, conducting research, developing a prototype, preparing for your career, or creating a venture — ASK INVENTORS can help you move forward.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenContact("student", "final-cta")}
              type="button"
              className="w-full sm:w-auto btn-primary group"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <Link
              href="#journey"
              className="w-full sm:w-auto btn-ghost"
            >
              <span>Explore ASK INVENTORS</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#6e6e73]">
              <ShieldCheck className="w-4 h-4 text-[#0071e3] shrink-0" />
              <span>Full IP & Prior Art Protection</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#6e6e73]">
              <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0" />
              <span>1-on-1 Dedicated Technical Mentors</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#6e6e73]">
              <Zap className="w-4 h-4 text-[#059669] shrink-0" />
              <span>Rapid Prototyping & Fabrication Lab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
