"use client";

import React from "react";
import { GraduationCap, FlaskConical, School, Factory, ArrowRight, Check, Sparkles } from "lucide-react";

interface AudienceProps {
  onOpenContact: (role?: string) => void;
}

export function Audience({ onOpenContact }: AudienceProps) {
  const segments = [
    {
      num: "01",
      id: "student",
      role: "Undergraduate Students",
      badge: "Projects & Skills",
      desc: "Projects, technical mentoring, practical skills, hackathon competitions, and career preparation.",
      highlights: [
        "Final year capstone & mini-project development",
        "Hardware circuit design, IoT & AI/ML integration",
        "Hackathon mentorship & competition coaching",
        "Industry-ready GitHub portfolio & interview prep",
      ],
      icon: GraduationCap,
      color: "from-blue-500/20 to-indigo-500/30 text-blue-400 border-blue-500/30",
      cta: "Explore Student Programs",
    },
    {
      num: "02",
      id: "researcher",
      role: "Postgraduate Researchers",
      badge: "Research & IP",
      desc: "Research support, experimentation, technical development, publications, and prototypes.",
      highlights: [
        "Rigorous methodology scoping & mathematical modeling",
        "Experimental bench setup & functional prototyping",
        "Scopus / IEEE paper formatting & review defense",
        "Indian & International patent prior art search & filing",
      ],
      icon: FlaskConical,
      color: "from-purple-500/20 to-indigo-500/30 text-purple-400 border-purple-500/30",
      cta: "Explore Research Support",
    },
    {
      num: "03",
      id: "college",
      role: "Colleges & Institutions",
      badge: "Campus Ecosystems",
      desc: "Innovation programs, faculty development workshops, project ecosystems, and industry engagement.",
      highlights: [
        "Turnkey campus incubation & innovation lab setup",
        "Accreditation-aligned project management framework",
        "Faculty development programs (FDP) on deep-tech",
        "Annual hackathons, project expos & demo days",
      ],
      icon: School,
      color: "from-cyan-500/20 to-teal-500/30 text-cyan-400 border-cyan-500/30",
      cta: "Partner as Institution",
    },
    {
      num: "04",
      id: "industry",
      role: "Industry Partners",
      badge: "Talent & R&D",
      desc: "Talent access, rapid prototyping, sponsored research collaboration, and innovation solutions.",
      highlights: [
        "Direct access to top 1% project-proven technical talent",
        "Contract prototyping & proof-of-concept validation",
        "Sponsored capstone tracks tailored to tech stacks",
        "Technology scouting & intellectual property licensing",
      ],
      icon: Factory,
      color: "from-amber-500/20 to-orange-500/30 text-amber-400 border-amber-500/30",
      cta: "Collaborate with ASK INVENTORS",
    },
  ];

  return (
    <section id="solutions" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background soft glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Target Audiences</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            <span>Built for people who </span>
            <span className="bg-gradient-to-r from-indigo-300 via-indigo-100 to-cyan-300 bg-clip-text text-transparent">
              build.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Tailored acceleration paths built specifically for learners, scholars, academic leaders, and industry visionaries.
          </p>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {segments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.role}
                className="glass-panel group relative flex flex-col justify-between rounded-3xl p-7 sm:p-9 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 shadow-glass reflection-top"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border bg-gradient-to-br shadow-sm transition-transform duration-200 group-hover:scale-105 ${item.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-indigo-400 tracking-wider">
                          SEGMENT {item.num}
                        </span>
                        <div className="text-xs font-medium text-slate-400">
                          {item.badge}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-white/5">
                      0{item.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-2.5 pt-6 border-t border-slate-800">
                    {item.highlights.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onOpenContact(item.id)}
                    type="button"
                    className="w-full flex items-center justify-between rounded-xl bg-slate-950/60 border border-white/10 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-200 hover:border-indigo-500/50 hover:bg-indigo-600/20 hover:text-white transition-all active-press"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 text-indigo-400 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
