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
      color: "bg-blue-50 text-[#0071e3] border-blue-200",
      accent: "#0071e3",
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
      color: "bg-cyan-50 text-[#0284c7] border-cyan-200",
      accent: "#0284c7",
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
      color: "bg-purple-50 text-purple-600 border-purple-200",
      accent: "#7c3aed",
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
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
      accent: "#059669",
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
      color: "bg-amber-50 text-amber-600 border-amber-200",
      accent: "#d97706",
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
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
      accent: "#4f46e5",
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section id="journey" className="relative py-6 md:py-10 scroll-mt-24 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 eyebrow-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Innovation Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
            <span>One ecosystem.</span>
            <span className="block mt-1 text-highlight">
              Multiple possibilities.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#424245] leading-relaxed">
            A seamless six-phase progression designed to guide you from your initial spark all the way to industrial and entrepreneurial success.
          </p>
        </div>

        {/* Horizontal Interactive Step Selector (Desktop / Tablet) */}
        <div className="mt-14 hidden md:block">
          <div className="relative flex items-center justify-between p-2 rounded-2xl border border-black/[0.08] bg-[#f5f5f7] shadow-sm">
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
                      ? "bg-white border border-black/[0.08] shadow-sm"
                      : "hover:bg-white/60 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-[#0071e3]" : "text-[#aeaeb2]"
                      }`}
                    >
                      {step.num}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-[#0071e3]" : "text-[#aeaeb2]"}`} />
                  </div>
                  <span
                    className={`text-xs font-bold tracking-wide uppercase ${
                      isSelected ? "text-[#1d1d1f]" : "text-[#6e6e73]"
                    }`}
                  >
                    {step.title}
                  </span>
                  {isSelected && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#0071e3] rounded-full" />
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
                    ? "bg-[#0071e3] text-white border-[#0071e3] shadow-sm"
                    : "bg-[#f5f5f7] text-[#424245] border-black/[0.08] hover:border-black/[0.15]"
                }`}
              >
                <span className="font-mono">{step.num}</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Comprehensive Showcase Card */}
        <div className="mt-8 rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-10 shadow-card">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Context & Overview */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-sm ${current.color}`}
                >
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#0071e3] tracking-wider">
                    PHASE {current.num} OF 06
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1d1d1f]">
                    {current.title}
                  </h3>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-[#0071e3] mt-2">
                {current.headline}
              </h4>
              <p className="text-sm sm:text-base text-[#424245] leading-relaxed mt-3">
                {current.desc}
              </p>

              <div className="mt-6 pt-6 border-t border-black/[0.06] flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenContact("student", `journey-${current.title.toLowerCase()}`)}
                  type="button"
                  className="btn-primary"
                >
                  <span>Start Phase {current.num} Mentorship</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs text-[#6e6e73]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Available for individual & team enrollments</span>
                </div>
              </div>
            </div>

            {/* Right Column: Key Deliverables Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-black/[0.06] bg-[#f5f5f7] p-5 sm:p-6">
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#86868b]">
                    Phase Deliverables & Milestones
                  </span>
                  <span className="text-xs font-mono text-[#0071e3] font-semibold">
                    Stage Verified
                  </span>
                </div>

                <div className="space-y-3">
                  {current.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-white p-3 border border-black/[0.06] shadow-xs"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-[#1d1d1f] leading-snug">
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
