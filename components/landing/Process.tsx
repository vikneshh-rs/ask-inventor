"use client";

import React from "react";
import { Search, Wrench, Sparkles, Send, ArrowRight, Check, type LucideIcon } from "lucide-react";

interface ProcessProps {
  onOpenContact: (role?: string) => void;
}

interface StepItem {
  num: string;
  name: string;
  tagline: string;
  desc: string;
  icon: LucideIcon;
  milestone: string;
  color: string;
  accent: string;
}

export function Process({ onOpenContact }: ProcessProps) {
  const steps: StepItem[] = [
    {
      num: "01",
      name: "Discover",
      tagline: "Understand your idea, requirement or goal.",
      desc: "Initial scoping session with experienced domain mentors. We dissect syllabus guidelines, patent opportunities, feasibility constraints, and define the project blueprint.",
      icon: Search,
      milestone: "Architecture & Scope Finalized",
      color: "bg-blue-50 text-[#0071e3] border-blue-200",
      accent: "border-blue-200",
    },
    {
      num: "02",
      name: "Build",
      tagline: "Develop the required skills and technical foundation.",
      desc: "Hands-on guided labs and code scaffolding. Master the specific tech stacks, firmware libraries, cloud infrastructure, or ML pipelines required for your implementation.",
      icon: Wrench,
      milestone: "Technical Foundation & Tooling Ready",
      color: "bg-cyan-50 text-[#0284c7] border-cyan-200",
      accent: "border-cyan-200",
    },
    {
      num: "03",
      name: "Create",
      tagline: "Research, prototype, validate and refine.",
      desc: "Iterative hardware assembly, software development, data collection, and bug elimination. Benchmarked testing ensures the system works reliably in real-world conditions.",
      icon: Sparkles,
      milestone: "Functional Prototype & Test Verification",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      accent: "border-purple-200",
    },
    {
      num: "04",
      name: "Launch",
      tagline: "Move towards publication, career, product or entrepreneurship.",
      desc: "Take your project to the world. Present at top conferences, file patent applications, ace placement interviews with proof-of-work, or incorporate your venture.",
      icon: Send,
      milestone: "Final Delivery, Paper/Patent & Career Launch",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "border-emerald-200",
    },
  ];


  return (
    <section className="relative py-6 md:py-10 scroll-mt-24 overflow-hidden">
      {/* Background radial lighting */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 eyebrow-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
            <span>From idea to </span>
            <span className="text-highlight">
              outcome.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#424245] leading-relaxed">
            A clear four-stage framework turning open problems into tangible proof-of-work and verified credentials.
          </p>
        </div>

        {/* Visual Progression Timeline */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 stagger-item"
              >
                <div>
                  {/* Step Sequence Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#0071e3] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                      STEP {step.num}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border shadow-sm transition-transform duration-200 group-hover:scale-105 ${step.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#1d1d1f]">
                    {step.name}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-[#0071e3]">
                    {step.tagline}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#424245] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Milestone Badge */}
                <div className="mt-6 pt-5 border-t border-black/[0.06]">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-[#424245] bg-[#f5f5f7] p-2.5 rounded-xl border border-black/[0.06]">
                    <Check className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    <span className="line-clamp-1">{step.milestone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Launch Banner */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onOpenContact("student")}
            type="button"
            className="btn-primary px-6 py-3 text-xs sm:text-sm"
          >
            <span>Begin Step 01 Discovery Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
