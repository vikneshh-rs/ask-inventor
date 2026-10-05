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
      color: "text-blue-400 bg-blue-950/40 border-blue-500/30",
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
      color: "text-purple-400 bg-purple-950/40 border-purple-500/30",
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
      color: "text-cyan-400 bg-cyan-950/40 border-cyan-500/30",
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
      color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30",
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
      color: "text-amber-400 bg-amber-950/40 border-amber-500/30",
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
      color: "text-rose-400 bg-rose-950/40 border-rose-500/30",
    },
  ];

  const filtered =
    activeTab === "all"
      ? resources
      : resources.filter((item) => item.category === activeTab);

  return (
    <section id="resources" className="relative py-20 md:py-32 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div
        className="pointer-events-none absolute bottom-1/3 left-1/4 w-[600px] h-[450px] bg-purple-600/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Knowledge & Open Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            <span>Learn. Build. </span>
            <span className="bg-gradient-to-r from-indigo-300 via-indigo-100 to-cyan-300 bg-clip-text text-transparent">
              Research. Connect.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
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
                    ? "bg-indigo-600 border-indigo-400 text-white shadow-glow-indigo"
                    : "bg-slate-900/60 border-white/5 text-slate-400 hover:border-white/15 hover:text-slate-200"
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
              className="glass-panel group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 shadow-glass reflection-top"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.color}`}
                  >
                    {item.categoryLabel}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.tag}</span>
                </div>

                <button
                  onClick={() => onOpenContact("student", `resource-${item.id}`)}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                >
                  <span>Access Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Community & Workshop Participation Banner */}
        <div className="mt-14 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-indigo-950/40 via-slate-900/80 to-purple-950/40 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Want to host a hands-on workshop at your college?
            </h4>
            <p className="mt-1.5 text-sm text-slate-300">
              We conduct 2-day hands-on bootcamps in Embedded AI, IoT Prototypes, and Patent Formulation for student chapters and IEEE societies.
            </p>
          </div>
          <button
            onClick={() => onOpenContact("college", "workshop-request")}
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-glow-indigo hover:bg-indigo-500 transition-all active-press shrink-0"
          >
            <span>Request College Bootcamp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
