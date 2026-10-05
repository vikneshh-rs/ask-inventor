"use client";

import React, { useState } from "react";
import {
  Layers,
  Code,
  FlaskConical,
  Cpu,
  Briefcase,
  Rocket,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface JourneyProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

export function Journey({ onOpenContact }: JourneyProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Project",
      headline: "Turn requirements into meaningful projects.",
      desc: "Transform academic syllabi or open-ended curiosities into structured engineering projects. We assist in problem scoping, architecture diagrams, component selection, and domain mapping.",
      deliverables: [
        "Requirement Engineering & Feasibility Study",
        "System Architecture & Block Diagrams",
        "Component & Hardware BOM Selection",
        "Milestone Schedule & Git Repository Setup",
      ],
      icon: Layers,
      color: "from-blue-500/20 to-indigo-500/30 text-blue-400 border-blue-500/30",
      accent: "#38bdf8",
    },
    {
      num: "02",
      title: "Skills",
      headline: "Build practical technical capabilities.",
      desc: "Move beyond passive theory into rigorous engineering mastery. Learn through production-grade tools, modern frameworks, embedded firmware, AI model fine-tuning, and robust design practices.",
      deliverables: [
        "Industry-Standard Coding & Firmware Practices",
        "PCB Design, EDA Tools & Circuit Simulation",
        "Modern Full-Stack & Cloud Deployment",
        "1-on-1 Code & Circuit Review Sessions",
      ],
      icon: Code,
      color: "from-cyan-500/20 to-blue-500/30 text-cyan-400 border-cyan-500/30",
      accent: "#06b6d4",
    },
    {
      num: "03",
      title: "Research",
      headline: "Explore, experiment and create knowledge.",
      desc: "Bridge practical engineering with scientific inquiry. Conduct rigorous literature surveys, validate novel hypotheses, publish in high-impact Scopus/IEEE conferences, and file patent disclosures.",
      deliverables: [
        "Comprehensive Literature Review & Gap Analysis",
        "Statistical Validation & Benchmarking",
        "IEEE / Scopus Paper Writing & Formatting",
        "Patent Search & Prior Art IP Documentation",
      ],
      icon: FlaskConical,
      color: "from-purple-500/20 to-indigo-500/30 text-purple-400 border-purple-500/30",
      accent: "#c084fc",
    },
    {
      num: "04",
      title: "Prototype",
      headline: "Transform concepts into working systems.",
      desc: "Take algorithms off paper and circuits off breadboards. We guide you through physical fabrication, custom enclosure design, 3D printing, firmware optimization, and robust functional testing.",
      deliverables: [
        "Custom Double-Layer PCB Fabrication & Assembly",
        "CAD Modelling & 3D Printed Enclosures",
        "Hardware-in-the-Loop (HIL) Stress Testing",
        "End-to-End Functional Demo & Video Pitch",
      ],
      icon: Cpu,
      color: "from-emerald-500/20 to-teal-500/30 text-emerald-400 border-emerald-500/30",
      accent: "#34d399",
    },
    {
      num: "05",
      title: "Career",
      headline: "Connect capability with opportunities.",
      desc: "Translate real-world projects and research credentials into Tier-1 engineering roles, postgraduate admissions abroad, and high-impact industry careers.",
      deliverables: [
        "Proof-of-Work Interactive Portfolio",
        "Technical Architecture Interview Prep",
        "Direct Referrals to Hiring Tech Partners",
        "Higher Studies & Master's Application Mentorship",
      ],
      icon: Briefcase,
      color: "from-amber-500/20 to-yellow-500/30 text-amber-400 border-amber-500/30",
      accent: "#fbbf24",
    },
    {
      num: "06",
      title: "Entrepreneurship",
      headline: "Turn ideas into products, ventures and impact.",
      desc: "For innovators ready to build scalable businesses, we provide incubation guidance, seed grant proposal writing (NIDHI, BIRAC, MSME), market validation, and investor pitch deck crafting.",
      deliverables: [
        "Business Model Canvas & Value Proposition",
        "Government Grant & Seed Funding Proposals",
        "IP Licensing & Spinout Incorporation",
        "Investor Pitch Decks & Accelerator Introductions",
      ],
      icon: Rocket,
      color: "from-rose-500/20 to-orange-500/30 text-rose-400 border-rose-500/30",
      accent: "#f43f5e",
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="journey" className="relative py-20 md:py-32 overflow-hidden bg-slate-950/40">
      {/* Dynamic Background Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Innovation Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            <span>One ecosystem.</span>
            <span className="block mt-1 bg-gradient-to-r from-indigo-300 via-indigo-100 to-cyan-300 bg-clip-text text-transparent">
              Multiple possibilities.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A seamless six-phase progression designed to guide you from your initial spark all the way to industrial and entrepreneurial success.
          </p>
        </div>

        {/* Horizontal Interactive Step Selector (Desktop / Tablet) */}
        <div className="mt-14 hidden md:block">
          <div className="relative flex items-center justify-between p-2 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-glass">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  type="button"
                  className={`relative flex-1 flex flex-col items-center py-4 px-3 rounded-xl transition-all duration-200 active-press ${
                    isSelected
                      ? "bg-slate-800 border border-indigo-500/50 shadow-glow-indigo"
                      : "hover:bg-slate-800/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-indigo-400" : "text-slate-400"
                      }`}
                    >
                      {step.num}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-indigo-300" : "text-slate-400"}`} />
                  </div>
                  <span
                    className={`text-xs font-bold tracking-wide uppercase ${
                      isSelected ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {step.title}
                  </span>
                  {isSelected && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-indigo-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Step Selector Pills */}
        <div className="mt-8 flex md:hidden overflow-x-auto pb-2 gap-2 scrollbar-none">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                type="button"
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  isSelected
                    ? "bg-indigo-600 text-white border-indigo-400 shadow-glow-indigo"
                    : "bg-slate-900/80 text-slate-300 border-white/10"
                }`}
              >
                <span className="font-mono">{step.num}</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Comprehensive Showcase Card */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/70 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl reflection-top">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Context & Overview */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-glow-indigo ${current.color}`}
                >
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-indigo-400 tracking-wider">
                    PHASE {current.num} OF 06
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-indigo-200 mt-2">
                {current.headline}
              </h4>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3">
                {current.desc}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenContact("student", `journey-${current.title.toLowerCase()}`)}
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-glow-indigo hover:bg-indigo-500 transition-all active-press"
                >
                  <span>Start Phase {current.num} Mentorship</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Available for individual & team enrollments</span>
                </div>
              </div>
            </div>

            {/* Right Column: Key Deliverables Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 sm:p-6 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Phase Deliverables & Milestones
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    Stage Verified
                  </span>
                </div>

                <div className="space-y-3">
                  {current.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-slate-900/40 p-3 border border-white/5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
