"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";

interface ProjectItem {
  id: string;
  type: string;
  category: "all" | "ai" | "iot" | "research" | "software" | "industry";
  name: string;
  technologies: string[];
  outcome: string;
  details: string;
  impactBadge: string;
}

interface ShowcaseProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

export function InnovationShowcase({ onOpenContact }: ShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Innovations" },
    { id: "ai", label: "AI & ML" },
    { id: "iot", label: "IoT & Embedded" },
    { id: "research", label: "Research & Patents" },
    { id: "software", label: "Software Products" },
    { id: "industry", label: "Industry Solutions" },
  ];

  const projects: ProjectItem[] = [
    {
      id: "proj-1",
      category: "ai",
      type: "AI & COMPUTER VISION",
      name: "Autonomous Biomedical Imaging Diagnostics",
      technologies: ["PyTorch", "Vision Transformers (ViT)", "CUDA", "FastAPI", "Docker"],
      outcome: "99.2% Sensitivity on edge TPU with IEEE BioCAS journal manuscript published.",
      details: "An edge-deployable deep learning framework that performs real-time classification of cellular anomalies in histopathology slide scans with low latency on low-power devices.",
      impactBadge: "IEEE Publication",
    },
    {
      id: "proj-2",
      category: "iot",
      type: "EMBEDDED SYSTEMS & IOT",
      name: "Smart Substation Grid Telemetry & Arc-Fault Detector",
      technologies: ["STM32F4", "FreeRTOS", "Modbus-TCP", "LoRaWAN", "Altium Designer"],
      outcome: "Sub-5ms arc fault detection with hardware patent filed (Indian Patent Office).",
      details: "Industrial IoT edge device utilizing high-speed analog sampling and optical arc detection to prevent electrical fires in medium-voltage distribution switchgear.",
      impactBadge: "Patent Filed",
    },
    {
      id: "proj-3",
      category: "research",
      type: "POSTGRADUATE RESEARCH",
      name: "Adaptive Neuromorphic Motor Controller for Exoskeletons",
      technologies: ["Spiking Neural Networks", "FPGA Xilinx", "Verilog", "MATLAB Simulink"],
      outcome: "Scopus Q1 Journal Accepted; 42% energy reduction over classical PID controllers.",
      details: "Hardware neuromorphic architecture that mimics human motor reflexes to drive robotic lower-limb assistive exoskeletons with ultra-low power consumption.",
      impactBadge: "Q1 Journal Accepted",
    },
    {
      id: "proj-4",
      category: "software",
      type: "SOFTWARE PRODUCT / CLOUD",
      name: "Enterprise Multi-Tenant IP & Patent Pipeline Engine",
      technologies: ["Next.js 15", "TypeScript", "Supabase SSR", "PostgreSQL RLS", "Resend"],
      outcome: "Deployed in 3 partner colleges managing 1,200+ invention disclosures securely.",
      details: "A bank-grade cryptographic platform allowing research institutions to track patent drafting, prior art search, inventor milestones, and NDA signatures.",
      impactBadge: "Live Production",
    },
    {
      id: "proj-5",
      category: "industry",
      type: "INDUSTRY R&D SOLUTION",
      name: "AI-Powered Acoustic Quality Control for Automotive Lines",
      technologies: ["TensorFlow Lite", "MEMS Microphones", "Raspberry Pi CM4", "MQTT"],
      outcome: "Adopted in Tier-1 auto manufacturing floor, preventing 98% defective gear assemblies.",
      details: "Real-time vibration and acoustic spectral analysis system installed directly on assembly lines to detect minute mechanical tolerances and anomalies before packaging.",
      impactBadge: "Industry Adopted",
    },
    {
      id: "proj-6",
      category: "iot",
      type: "STUDENT CAPSTONE PROTOTYPE",
      name: "Off-Grid Agricultural Drone with Multispectral Crop Health",
      technologies: ["ESP32-S3", "DroneCAN", "Edge Impulse", "NDVI Imaging", "React Native"],
      outcome: "Winner of National Smart India Hackathon; incubated with ₹5 Lakh grant.",
      details: "Custom fabricated quadcopter carrying dual-band multispectral sensors that maps crop nitrogen deficiency and soil hydration maps directly onto a farmer's smartphone offline.",
      impactBadge: "National Winner",
    },
  ];

  const filtered =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="showcase" className="relative py-6 md:py-10 scroll-mt-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-blue-500/5 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 eyebrow-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
            <span>Built with </span>
            <span className="text-highlight">
              ASK INVENTORS.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#424245] leading-relaxed">
            Explore verified student capstones, published research architectures, working hardware prototypes, and industry deployments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              type="button"
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border transition-all active-press ${
                selectedCategory === cat.id
                  ? "bg-[#0071e3] border-[#0071e3] text-white shadow-sm"
                  : "bg-white border-black/[0.08] text-[#424245] hover:text-[#1d1d1f] hover:bg-black/[0.02]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="glass-card group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300"
            >
              <div>
                {/* Project Header: Type & Impact Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#0071e3]">
                    {proj.type}
                  </span>
                  <span className="text-[11px] font-semibold text-[#059669] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full shrink-0">
                    {proj.impactBadge}
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="text-lg font-bold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors leading-snug">
                  {proj.name}
                </h3>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-[#f5f5f7] border border-black/[0.06] px-2 py-0.5 text-[11px] font-mono text-[#424245]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcome */}
                <div className="mt-5 rounded-2xl bg-[#f5f5f7] p-3.5 border border-black/[0.06]">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0071e3] mb-1">
                    Verified Outcome
                  </div>
                  <p className="text-xs sm:text-sm text-[#424245] leading-relaxed">
                    {proj.outcome}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(proj)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:text-[#0077ed] transition-colors active-press"
                >
                  <span>Project Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenContact("student", `showcase-${proj.id}`)}
                  type="button"
                  className="text-xs font-medium text-[#6e6e73] hover:text-[#1d1d1f]"
                >
                  Build Similar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All CTA */}
        <div className="mt-6 text-center">
          <button
            onClick={() => onOpenContact("student", "explore-all-showcase")}
            type="button"
            className="btn-primary"
          >
            <span>Explore Innovation & Submit Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <div
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div className="relative w-full max-w-lg rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-8 shadow-2xl z-10 modal-enter text-[#1d1d1f]">
              <button
                onClick={() => setActiveProject(null)}
                type="button"
                aria-label="Close dialog"
                className="absolute right-4 top-4 rounded-full p-2 text-[#86868b] hover:bg-black/[0.05] hover:text-[#1d1d1f] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#0071e3]">
                  {activeProject.type}
                </span>
                <span className="text-[#aeaeb2]">•</span>
                <span className="text-xs font-semibold text-[#059669] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  {activeProject.impactBadge}
                </span>
              </div>

              <h3 id="project-modal-title" className="text-2xl font-bold text-[#1d1d1f]">
                {activeProject.name}
              </h3>

              <p className="mt-4 text-sm text-[#424245] leading-relaxed">
                {activeProject.details}
              </p>

              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-2">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-[#f5f5f7] border border-black/[0.06] px-2.5 py-1 text-xs font-mono text-[#1d1d1f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 p-3.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">
                  Outcome & Verification
                </div>
                <div className="text-xs sm:text-sm text-[#1d1d1f]">
                  {activeProject.outcome}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="btn-ghost text-xs px-4 py-2"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const id = activeProject.id;
                    setActiveProject(null);
                    onOpenContact("student", `replicate-${id}`);
                  }}
                  className="btn-primary text-xs px-5 py-2.5"
                >
                  <span>Build With This Tech</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
