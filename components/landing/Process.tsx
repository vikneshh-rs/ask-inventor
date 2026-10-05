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
      color: "from-blue-500/20 to-indigo-500/30 text-blue-400 border-blue-500/30",
      accent: "border-blue-500/40",
    },
    {
      num: "02",
      name: "Build",
      tagline: "Develop the required skills and technical foundation.",
      desc: "Hands-on guided labs and code scaffolding. Master the specific tech stacks, firmware libraries, cloud infrastructure, or ML pipelines required for your implementation.",
      icon: Wrench,
      milestone: "Technical Foundation & Tooling Ready",
      color: "from-cyan-500/20 to-blue-500/30 text-cyan-400 border-cyan-500/30",
      accent: "border-cyan-500/40",
    },
    {
      num: "03",
      name: "Create",
      tagline: "Research, prototype, validate and refine.",
      desc: "Iterative hardware assembly, software development, data collection, and bug elimination. Benchmarked testing ensures the system works reliably in real-world conditions.",
      icon: Sparkles,
      milestone: "Functional Prototype & Test Verification",
      color: "from-purple-500/20 to-indigo-500/30 text-purple-400 border-purple-500/30",
      accent: "border-purple-500/40",
    },
    {
      num: "04",
      name: "Launch",
      tagline: "Move towards publication, career, product or entrepreneurship.",
      desc: "Take your project to the world. Present at top conferences, file patent applications, ace placement interviews with proof-of-work, or incorporate your venture.",
      icon: Send,
      milestone: "Final Delivery, Paper/Patent & Career Launch",
      color: "from-emerald-500/20 to-teal-500/30 text-emerald-400 border-emerald-500/30",
      accent: "border-emerald-500/40",
    },
  ];


  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background radial lighting */}
      <div
        className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            <span>From idea to </span>
            <span className="bg-gradient-to-r from-indigo-300 via-indigo-100 to-cyan-300 bg-clip-text text-transparent">
              outcome.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A clear four-stage framework turning open problems into tangible proof-of-work and verified credentials.
          </p>
        </div>

        {/* Visual Progression Timeline */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-panel group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 shadow-glass reflection-top"
              >
                <div>
                  {/* Step Sequence Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-950/60 border border-indigo-500/30 px-3 py-1 rounded-full">
                      STEP {step.num}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-sm transition-transform duration-200 group-hover:scale-105 ${step.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {step.name}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-cyan-400">
                    {step.tagline}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Milestone Badge */}
                <div className="mt-6 pt-5 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-slate-300 bg-slate-950/60 p-2.5 rounded-xl border border-white/5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="line-clamp-1">{step.milestone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Launch Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenContact("student")}
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900/80 border border-indigo-500/30 px-6 py-3 text-xs sm:text-sm font-semibold text-indigo-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-400 transition-all active-press shadow-glow-indigo"
          >
            <span>Begin Step 01 Discovery Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
