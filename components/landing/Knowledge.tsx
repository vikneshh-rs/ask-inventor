"use client";

import React, { useState } from "react";
import { BookOpen, FileText, Video, Calendar, Trophy, ArrowRight, Sparkles, Tag } from "lucide-react";

interface KnowledgeProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

export function Knowledge({ onOpenContact }: KnowledgeProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Insights", icon: Sparkles },
    { id: "articles", label: "Articles & Guides", icon: FileText },
    { id: "research", label: "Research & Patents", icon: BookOpen },
    { id: "tutorials", label: "Technical Tutorials", icon: Video },
    { id: "workshops", label: "Workshops & Bootcamps", icon: Calendar },
    { id: "opportunities", label: "Fellowships & Grants", icon: Trophy },
  ];

  const resources = [
    {
      id: "res-1",
      category: "articles",
      categoryLabel: "Editorial Article",
      title: "From Breadboard to Patent: The Complete Guide to Protecting Student Innovations in India",
      desc: "An in-depth breakdown of provisional patent filing, prior art searching on InPASS, and how to avoid public disclosure before legal submission.",
      readTime: "7 min read",
      date: "Spring 2026",
      tag: "Intellectual Property",
      color: "text-[#0071e3] bg-blue-50 border-blue-200",
    },
    {
      id: "res-2",
      category: "research",
      categoryLabel: "Research Methodology",
      title: "Designing Reproducible Hardware-in-the-Loop Testbenches for IEEE Scopus Publications",
      desc: "Standardizing statistical metrics, jitter measurements, and sensor calibration curves to satisfy rigorous peer-review standards in Scopus Q1 journals.",
      readTime: "12 min read",
      date: "Spring 2026",
      tag: "Academic Research",
      color: "text-[#7c3aed] bg-purple-50 border-purple-200",
    },
    {
      id: "res-3",
      category: "tutorials",
      categoryLabel: "Deep-Tech Tutorial",
      title: "Production Edge AI: Quantizing Vision Models for ESP32-S3 and STM32 Microcontrollers",
      desc: "Step-by-step pipeline for 8-bit INT8 quantization using TensorFlow Lite for Microcontrollers with DMA memory optimization.",
      readTime: "15 min read",
      date: "Updated Weekly",
      tag: "Embedded AI",
      color: "text-[#0284c7] bg-cyan-50 border-cyan-200",
    },
    {
      id: "res-4",
      category: "workshops",
      categoryLabel: "Interactive Bootcamp",
      title: "Full-Stack Hardware: High-Speed 4-Layer PCB Design in KiCad 8.0 & Altium",
      desc: "Live masterclass on differential pair routing, impedance matching, ground planes, and preparing Gerber files for automated PCB assembly.",
      readTime: "Live Workshop",
      date: "Next Cohort: Oct 2026",
      tag: "Hardware Engineering",
      color: "text-[#059669] bg-emerald-50 border-emerald-200",
    },
    {
      id: "res-5",
      category: "opportunities",
      categoryLabel: "Grant Opportunity",
      title: "NIDHI-EIR & BIRAC BIG Grant Proposal Playbook for Deep-Tech Student Founders",
      desc: "How to craft compelling technical milestones, commercialization projections, and defense pitches for ₹5L to ₹50L non-dilutive government seed grants.",
      readTime: "Grant Roadmap",
      date: "Open Applications",
      tag: "Seed Funding",
      color: "text-[#d97706] bg-amber-50 border-amber-200",
    },
    {
      id: "res-6",
      category: "articles",
      categoryLabel: "Career Blueprint",
      title: "Why Tier-1 Tech Firms Prioritize Proof-of-Work Over Generic Resumes in 2026",
      desc: "Analyzing recruitment patterns: How live GitHub repositories, working hardware demos, and published preprints bypass standard HR filters.",
      readTime: "6 min read",
      date: "Spring 2026",
      tag: "Career Acceleration",
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    },
  ];

  const filtered =
    activeTab === "all"
      ? resources
      : resources.filter((item) => item.category === activeTab);

  return (
    <section id="resources" className="relative py-6 md:py-10 scroll-mt-24 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div
        className="pointer-events-none absolute bottom-1/3 left-1/4 w-[600px] h-[450px] bg-blue-500/5 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 eyebrow-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Knowledge & Open Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
            <span>Learn. Build. </span>
            <span className="text-highlight">
              Research. Connect.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#424245] leading-relaxed">
            ASK INVENTORS is more than a service — it is an open innovation hub providing open research playbooks, hands-on engineering tutorials, and fellowship opportunities.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                type="button"
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold border transition-all active-press ${
                  isSelected
                    ? "bg-[#0071e3] border-[#0071e3] text-white shadow-sm"
                    : "bg-[#f5f5f7] border-black/[0.08] text-[#424245] hover:border-black/[0.15] hover:text-[#1d1d1f]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Resources Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="glass-card group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 stagger-item"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.color}`}
                  >
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] font-medium text-[#86868b]">
                    {item.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1d1d1f] leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#424245] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#86868b]">
                  <Tag className="w-3.5 h-3.5 text-[#86868b]" />
                  <span>{item.tag}</span>
                </div>

                <button
                  onClick={() => onOpenContact("student", `resource-${item.id}`)}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] hover:text-[#0077ed] transition-colors"
                >
                  <span>Access Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Community & Workshop Participation Banner */}
        <div className="mt-8 rounded-3xl border border-black/[0.08] bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
              Want to host a hands-on workshop at your college?
            </h4>
            <p className="mt-1.5 text-sm text-[#424245]">
              We conduct 2-day hands-on bootcamps in Embedded AI, IoT Prototypes, and Patent Formulation for student chapters and IEEE societies.
            </p>
          </div>
          <button
            onClick={() => onOpenContact("college", "workshop-request")}
            type="button"
            className="btn-primary px-6 py-3 text-xs sm:text-sm shrink-0"
          >
            <span>Request College Bootcamp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
