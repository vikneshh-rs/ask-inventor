"use client";

import React from "react";
import { GraduationCap, Microscope, Building2, BriefcaseBusiness, Check, ArrowRight, Zap } from "lucide-react";

interface CoreIdeaProps {
  onOpenContact: (role?: string) => void;
}

export function CoreIdea({ onOpenContact }: CoreIdeaProps) {
  const challenges = [
    {
      role: "Students",
      icon: GraduationCap,
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30",
      problem: "Have academic requirements and project ideas, but often lack industry-grade technical direction and mentorship.",
      solution: "Hands-on guided architecture, modern tech stacks, and career-aligned project deliverables.",
    },
    {
      role: "Researchers",
      icon: Microscope,
      color: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30",
      problem: "Possess pioneering domain theories and research questions, but need engineering muscle for hardware/software prototypes.",
      solution: "Experimental validation pipelines, custom PCB/code prototyping, and publication assistance.",
    },
    {
      role: "Colleges & Institutions",
      icon: Building2,
      color: "from-cyan-500/20 to-teal-500/20 text-cyan-400 border-cyan-500/30",
      problem: "Aim to build thriving campus incubation centers and labs, but struggle with industry-standard project ecosystems.",
      solution: "Turnkey innovation centers, faculty development programs, hackathons, and accredited lab frameworks.",
    },
    {
      role: "Industry Partners",
      icon: BriefcaseBusiness,
      color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
      problem: "Need fast-tracked applied R&D and direct access to proven, high-capability technical problem solvers.",
      solution: "Vetted talent pipelines, pre-validated prototypes, and sponsored research collaboration tracks.",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Innovation Divide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            <span>Ideas are everywhere.</span>
            <span className="block mt-1 text-slate-400">
              The right ecosystem isn&apos;t.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every year, thousands of breakthrough ideas stagnate due to fragmented tools, disconnected mentorship, and missing prototyping infrastructure.
          </p>
        </div>

        {/* 4 Quadrant Disconnect vs Unified Synergy Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.role}
                className="glass-panel group relative rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 reflection-top"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border bg-gradient-to-br shadow-sm ${item.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.role}</h3>
                    <span className="text-xs text-slate-400 font-medium">Ecosystem Stakeholder</span>
                  </div>
                </div>

                {/* Problem */}
                <div className="rounded-xl bg-slate-950/50 p-3.5 border border-white/5 mb-3.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    The Friction
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="rounded-xl bg-indigo-950/30 p-3.5 border border-indigo-500/20">
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    ASK INVENTORS Catalyst
                  </div>
                  <p className="text-sm text-indigo-200/90 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Synthesis Card */}
        <div className="mt-10 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/50 via-slate-900/90 to-purple-950/50 p-6 sm:p-8 backdrop-blur-xl shadow-glass">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <span>The Unified Bridge</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                ASK INVENTORS brings these pieces together.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                By bridging students with research labs, colleges with industry sponsors, and raw ideas with working prototypes, we turn fragmented efforts into cohesive, high-impact outcomes.
              </p>
            </div>
            <button
              onClick={() => onOpenContact("student")}
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-glow-indigo hover:bg-indigo-500 transition-all active-press shrink-0"
            >
              <span>Join the Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
