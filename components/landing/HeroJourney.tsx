"use client";

import React, { useState } from "react";
import {
  Layers,
  Cpu,
  BookOpen,
  Briefcase,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Terminal,
  Activity,
  Compass,
} from "lucide-react";

interface HeroJourneyProps {
  onOpenContact: (role?: string, topic?: string) => void;
  className?: string;
}

export const ARCHITECTURAL_STAGES = [
  {
    id: "project",
    num: "01",
    shortName: "Project",
    phaseTag: "STAGE 01 // ARCHITECTURE & SCOPING",
    title: "Project Mentoring & Feasibility",
    icon: Layers,
    inputState: "Raw Academic Syllabus, Open Problem, or Novel Concept",
    toolchain: ["System Architecture", "Feasibility Study", "BOM Selection", "Git Workflow"],
    description:
      "Transforming abstract problem statements into industry-grade engineering architectures with defined milestones, hardware BOMs, and testing protocols.",
    deliverables: [
      "Requirement engineering & problem formulation",
      "System block diagrams & interconnect schemas",
      "Component, sensor & microcontroller BOM selection",
      "Milestone breakdown & review preparation",
    ],
    outcomeTransformation: "Concept → Structured Technical Blueprint",
    colorAccent: "text-blue-400 border-blue-500/40 bg-blue-950/20",
    dotColor: "bg-blue-400",
  },
  {
    id: "skills",
    num: "02",
    shortName: "Skills",
    phaseTag: "STAGE 02 // SIMULATION & MODELING",
    title: "Applied Engineering & Simulation",
    icon: Sliders,
    inputState: "Mathematical Formulations & Circuit Designs",
    toolchain: ["MATLAB / Simulink", "PSCAD", "ETAP", "ANSYS", "Control Systems"],
    description:
      "Validating complex engineering models before hardware fabrication. Designing mathematical algorithms, microgrid models, and motor drive controllers.",
    deliverables: [
      "MATLAB & Simulink algorithmic validation",
      "Power electronics & electrical drives simulation",
      "Control-system loop tuning & stability analysis",
      "Renewable energy & microgrid load profiling",
    ],
    outcomeTransformation: "Theory → Verified Digital Simulation",
    colorAccent: "text-cyan-400 border-cyan-500/40 bg-cyan-950/20",
    dotColor: "bg-cyan-400",
  },
  {
    id: "research",
    num: "03",
    shortName: "Research",
    phaseTag: "STAGE 03 // RESEARCH & INTELLECTUAL PROPERTY",
    title: "Research, Papers & Patent Support",
    icon: BookOpen,
    inputState: "Simulation Results & Experimental Benchmarks",
    toolchain: ["Literature Survey", "IEEE Formatting", "Scopus Indexing", "Patent Prior Art"],
    description:
      "Synthesizing novel experimental results into peer-reviewed manuscripts for high-impact journals and filing prior art patent disclosures.",
    deliverables: [
      "Exhaustive literature survey & gap analysis",
      "Statistical benchmarking & error analysis",
      "Scopus & IEEE conference paper drafting",
      "Patent search, claims drafting & IP filing",
    ],
    outcomeTransformation: "Data → Peer-Reviewed IP Asset",
    colorAccent: "text-purple-400 border-purple-500/40 bg-purple-950/20",
    dotColor: "bg-purple-400",
  },
  {
    id: "prototype",
    num: "04",
    shortName: "Prototype",
    phaseTag: "STAGE 04 // HARDWARE FABRICATION",
    title: "Hardware & Prototype Development",
    icon: Cpu,
    inputState: "Schematic Netlists & Validated Codebases",
    toolchain: ["Altium / KiCad", "Double-Layer PCB", "FreeRTOS / C++", "Embedded IoT"],
    description:
      "Translating digital circuits onto physical silicon and copper. Custom PCB fabrication, sensor integration, enclosure design, and hardware-in-the-loop stress testing.",
    deliverables: [
      "Custom double-layer PCB layout & routing",
      "Microcontroller firmware (STM32, ESP32, FPGA)",
      "Sensor calibration & signal conditioning",
      "Full hardware integration & live demonstration",
    ],
    outcomeTransformation: "Schematic → Working Physical Hardware",
    colorAccent: "text-emerald-400 border-emerald-500/40 bg-emerald-950/20",
    dotColor: "bg-emerald-400",
  },
  {
    id: "career",
    num: "05",
    shortName: "Career",
    phaseTag: "STAGE 05 // CAREER TRANSLATION",
    title: "Project-to-Career Preparation",
    icon: Briefcase,
    inputState: "Completed Project Artifacts & Technical Codebases",
    toolchain: ["Role Mapping", "Technical Viva Prep", "GitHub Portfolio", "Core Interviews"],
    description:
      "Converting project depth into high-leverage career assets. Mapping technical competencies directly to core engineering roles and technical interviews.",
    deliverables: [
      "Project-based core skill & domain mapping",
      "Technical viva & architecture interview prep",
      "Proof-of-work project portfolio development",
      "Core engineering resume & GitHub showcase",
    ],
    outcomeTransformation: "Project Artifacts → Core Industry Career",
    colorAccent: "text-amber-400 border-amber-500/40 bg-amber-950/20",
    dotColor: "bg-amber-400",
  },
  {
    id: "venture",
    num: "06",
    shortName: "Venture",
    phaseTag: "STAGE 06 // PRODUCTIZATION & STARTUP",
    title: "Project-to-Startup Mentoring",
    icon: Rocket,
    inputState: "Validated Working Prototype with Market Potential",
    toolchain: ["MVP Roadmapping", "Business Model Canvas", "Grant Proposals", "Pitch Deck"],
    description:
      "Mentoring engineering teams with commercial viability to transform working prototypes into viable startups, seed-grant recipients, and products.",
    deliverables: [
      "Productization & MVP customer validation",
      "Government seed grant proposals (NIDHI, BIRAC, MSME)",
      "Business model & revenue architecture",
      "Technical pitch deck & prototype demo",
    ],
    outcomeTransformation: "Working Prototype → Scalable Venture",
    colorAccent: "text-rose-400 border-rose-500/40 bg-rose-950/20",
    dotColor: "bg-rose-400",
  },
];

export function HeroJourney({
  onOpenContact,
  className = "",
}: HeroJourneyProps) {
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const current = ARCHITECTURAL_STAGES[activeStageIndex];
  const StageIcon = current.icon;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Blueprint Container */}
      <div className="rounded-xl border border-white/10 bg-[#0d1322] shadow-2xl overflow-hidden">
        {/* Top Control Bar with System Telemetry */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-[#080c14] px-4 py-2.5 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-400">ASK_SYSTEM //</span>
            <span className="text-slate-200 font-semibold">TRANSFORMATION_BLUEPRINT</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${current.dotColor} animate-pulse`} />
              <span className="text-slate-300 font-medium">{current.phaseTag}</span>
            </div>
          </div>
        </div>

        {/* 6-Stage Progression Index Selector */}
        <div
          role="tablist"
          aria-label="Transformation Stages"
          className="grid grid-cols-3 sm:grid-cols-6 border-b border-white/10 bg-[#0a0f1d]"
        >
          {ARCHITECTURAL_STAGES.map((stage, idx) => {
            const isSelected = activeStageIndex === idx;
            return (
              <button
                key={stage.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveStageIndex(idx)}
                type="button"
                className={`group relative flex flex-col items-start px-3.5 py-3 text-left transition-all border-r border-white/5 last:border-r-0 active-press ${
                  isSelected
                    ? "bg-[#0d1322] text-white"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`font-mono text-[10px] font-bold ${
                      isSelected ? "text-indigo-400" : "text-slate-400"
                    }`}
                  >
                    {stage.num}
                  </span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isSelected ? stage.dotColor : "bg-transparent"
                    }`}
                  />
                </div>
                <span className="text-xs font-bold tracking-tight uppercase line-clamp-1">
                  {stage.shortName}
                </span>

                {/* Active Indicator Top Line */}
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-indigo-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Blueprint Viewport */}
        <div className="p-5 sm:p-7 bg-[#0d1322] bg-blueprint-grid">
          {/* Header Row: Stage Name + Transformation Vector */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div className="flex items-start gap-3.5">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border ${current.colorAccent}`}
              >
                <StageIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold text-slate-400">
                    STAGE {current.num}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="font-mono text-[11px] text-indigo-300">
                    {current.phaseTag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Transformation Vector Tag */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2 text-xs font-mono text-slate-300">
              <Activity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{current.outcomeTransformation}</span>
            </div>
          </div>

          {/* Core Technical Specifications Grid */}
          <div className="mt-5 grid lg:grid-cols-12 gap-6">
            {/* Left Context: Description & Toolchains */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Engineering Scope</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {current.description}
                </p>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-2">
                  Input State
                </div>
                <div className="rounded-lg border border-white/5 bg-[#080c14]/80 px-3 py-2 font-mono text-xs text-slate-300">
                  {current.inputState}
                </div>
              </div>

              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-2">
                  Applied Toolchains & Methods
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {current.toolchain.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-white/10 bg-[#080c14] px-2.5 py-1 font-mono text-[11px] text-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Context: Deliverables & Action */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-lg border border-white/10 bg-[#080c14]/60 p-4 sm:p-5">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                    Engineered Deliverables
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400">
                    Verified Outputs
                  </span>
                </div>

                <div className="space-y-2">
                  {current.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenContact("student", `blueprint-stage-${current.id}`)}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors active-press"
                >
                  <span>Consult Mentors on Phase {current.num}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <span className="font-mono text-[10px] text-slate-400 hidden sm:inline-block">
                  PHASE // 0{activeStageIndex + 1} OF 06
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
