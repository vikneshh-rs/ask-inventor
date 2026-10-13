"use client";

import React, { useState } from "react";
import {
  Compass,
  Code2,
  BookMarked,
  Hammer,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
} from "lucide-react";

interface ServicesProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

export function Services({ onOpenContact }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      num: "01",
      id: "project-mentoring",
      title: "Project Mentoring & Guidance",
      shortDesc: "Turn academic requirements into meaningful projects.",
      fullDesc:
        "Comprehensive 1-on-1 and team project supervision. We guide engineering and computer science students through problem framing, domain selection, architectural design, component sourcing, code reviews, and viva defense.",
      icon: Compass,
      tags: ["System Architecture", "BOM Selection", "Code Review", "Viva Prep"],
      color: "bg-blue-50 text-[#0071e3] border-blue-200",
    },
    {
      num: "02",
      id: "skills-development",
      title: "Skills Development",
      shortDesc: "Build practical, industry-relevant capabilities.",
      fullDesc:
        "Rigorous technical tracks in embedded systems (ESP32, STM32, ARM), ROS & Robotics, AI/ML model deployment, full-stack Next.js/Supabase architectures, and industrial IoT protocols (MQTT, Modbus).",
      icon: Code2,
      tags: ["Embedded & IoT", "Applied AI/ML", "Full-Stack Web", "Robotics/ROS"],
      color: "bg-cyan-50 text-[#0284c7] border-cyan-200",
    },
    {
      num: "03",
      id: "research-support",
      title: "Research Support",
      shortDesc: "Move from idea to methodology, experimentation and research output.",
      fullDesc:
        "Assisting postgraduate scholars and faculty through structured literature reviews, rigorous experimental benchmarks, mathematical formulation, IEEE/Scopus manuscript drafting, and patent prior art searches.",
      icon: BookMarked,
      tags: ["Scopus / IEEE", "Patent Disclosures", "Data Analysis", "Prior Art Search"],
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
    {
      num: "04",
      id: "prototype-development",
      title: "Prototype & Product Development",
      shortDesc: "Turn concepts into functional systems and products.",
      fullDesc:
        "From breadboard circuit to custom PCB fabrication, 3D CAD modeling, CNC/laser prototyping, firmware flashing, cloud IoT telemetry, and field testing for reliable demonstration.",
      icon: Hammer,
      tags: ["Custom PCB Design", "3D CAD Enclosures", "Sensor Fusion", "Hardware-in-Loop"],
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
    {
      num: "05",
      id: "career-guidance",
      title: "Career Guidance & Opportunities",
      shortDesc: "Connect skills with real-world opportunities.",
      fullDesc:
        "Bridge the gap between academic qualifications and top-tier engineering roles. We build proof-of-work project portfolios, conduct deep-dive technical mock interviews, and connect you directly with hiring partner networks.",
      icon: TrendingUp,
      tags: ["Proof-of-Work Portfolio", "System Design Prep", "Referral Network", "Global Admissions"],
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      num: "06",
      id: "entrepreneurship-innovation",
      title: "Entrepreneurship & Innovation",
      shortDesc: "Transform ideas into solutions, products and ventures.",
      fullDesc:
        "Assisting visionary founders with seed grant applications (NIDHI-EIR, BIRAC, MSME Champions), business model validation, intellectual property commercialization, MVP testing, and investor pitch readiness.",
      icon: Lightbulb,
      tags: ["Govt Seed Grants", "Business Canvas", "IP Licensing", "Investor Pitching"],
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
  ];

  return (
    <section id="services" className="relative py-6 md:py-10 scroll-mt-24 overflow-hidden bg-transparent">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-blue-500/5 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 eyebrow-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
            <span>Everything you need to </span>
            <span className="text-highlight">
              move forward.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#424245] leading-relaxed">
            Engineered to support you at every milestone — whether you need mentorship on a semester project, custom hardware fabrication, or venture incubation.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="glass-card group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 stagger-item"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-transform duration-200 group-hover:scale-105 shadow-sm ${service.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-bold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#424245] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Feature Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-chip"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Explore Button */}
                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(index)}
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:text-[#0077ed] transition-colors active-press"
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenContact("student", service.id)}
                    type="button"
                    className="text-[11px] font-medium text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Modal / Drawer */}
        {selectedService !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <div
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div className="relative w-full max-w-lg rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-8 shadow-2xl z-10 modal-enter text-[#1d1d1f]">
              <button
                onClick={() => setSelectedService(null)}
                type="button"
                aria-label="Close dialog"
                className="absolute right-4 top-4 rounded-full p-2 text-[#86868b] hover:bg-black/[0.05] hover:text-[#1d1d1f] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br ${services[selectedService].color}`}
                >
                  {React.createElement(services[selectedService].icon, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0071e3]">
                    SERVICE {services[selectedService].num}
                  </span>
                  <h3 id="service-modal-title" className="text-xl font-bold text-[#1d1d1f]">
                    {services[selectedService].title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#424245] leading-relaxed mt-4">
                {services[selectedService].fullDesc}
              </p>

              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
                  Key Deliverables
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {services[selectedService].tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 rounded-xl bg-[#f5f5f7] p-2.5 border border-black/[0.06] text-xs text-[#1d1d1f]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0071e3] shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="btn-ghost px-4 py-2 text-xs"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const id = services[selectedService].id;
                    setSelectedService(null);
                    onOpenContact("student", id);
                  }}
                  className="btn-primary px-5 py-2.5 text-xs"
                >
                  <span>Request This Service</span>
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
