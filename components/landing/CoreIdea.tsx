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
      color: "bg-blue-50/80 text-[#0071e3] border-blue-200/80",
      problem: "Have academic requirements and project ideas, but often lack industry-grade technical direction and mentorship.",
      solution: "Hands-on guided architecture, modern tech stacks, and career-aligned project deliverables.",
    },
    {
      role: "Researchers",
      icon: Microscope,
      color: "bg-purple-50/80 text-purple-600 border-purple-200/80",
      problem: "Possess pioneering domain theories and research questions, but need engineering muscle for hardware/software prototypes.",
      solution: "Experimental validation pipelines, custom PCB/code prototyping, and publication assistance.",
    },
    {
      role: "Colleges & Institutions",
      icon: Building2,
      color: "bg-emerald-50/80 text-emerald-600 border-emerald-200/80",
      problem: "Aim to build thriving campus incubation centers and labs, but struggle with industry-standard project ecosystems.",
      solution: "Turnkey innovation centers, faculty development programs, hackathons, and accredited lab frameworks.",
    },
    {
      role: "Industry Partners",
      icon: BriefcaseBusiness,
      color: "bg-amber-50/80 text-amber-600 border-amber-200/80",
      problem: "Need fast-tracked applied R&D and direct access to proven, high-capability technical problem solvers.",
      solution: "Vetted talent pipelines, pre-validated prototypes, and sponsored research collaboration tracks.",
    },
  ];

  return (
    <section id="about" className="relative py-6 md:py-10 scroll-mt-24 overflow-hidden">
      {/* Background radial accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 eyebrow-badge mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>The Innovation Divide</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
            <span>Ideas are everywhere.</span>
            <span className="block mt-1 text-[#424245]">
              The right ecosystem isn&apos;t.
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#424245] leading-relaxed">
            Every year, thousands of breakthrough ideas stagnate due to fragmented tools, disconnected mentorship, and missing prototyping infrastructure.
          </p>
        </div>

        {/* 4 Quadrant Disconnect vs Unified Synergy Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {challenges.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.role}
                className="glass-card group relative rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm ${item.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1d1d1f]">{item.role}</h3>
                    <span className="text-xs text-[#6e6e73] font-medium">Ecosystem Stakeholder</span>
                  </div>
                </div>

                {/* Problem */}
                <div className="rounded-xl bg-slate-50/90 p-3.5 border border-slate-200/90 mb-3.5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    The Friction
                  </div>
                  <p className="text-sm text-[#424245] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="rounded-xl bg-blue-50/70 p-3.5 border border-blue-100">
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#0071e3]" />
                    ASK INVENTORS Catalyst
                  </div>
                  <p className="text-sm text-[#424245] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unified Synthesis Card */}
        <div className="mt-8 rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/70 via-white to-blue-50/70 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0071e3] mb-2">
                <span>The Unified Bridge</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                ASK INVENTORS brings these pieces together.
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#424245] leading-relaxed">
                By bridging students with research labs, colleges with industry sponsors, and raw ideas with working prototypes, we turn fragmented efforts into cohesive, high-impact outcomes.
              </p>
            </div>
            <button
              onClick={() => onOpenContact("student")}
              type="button"
              className="btn-primary shrink-0"
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
