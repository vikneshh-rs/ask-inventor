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
      color: "bg-blue-50 text-[#0071e3] border-blue-200",
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
      color: "bg-purple-50 text-purple-600 border-purple-200",
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
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
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
      color: "bg-amber-50 text-amber-600 border-amber-200",
      cta: "Collaborate with ASK INVENTORS",
    },
  ];

  return (
    <section id="solutions" className="relative py-6 md:py-10 scroll-mt-24 overflow-hidden">
      {/* Background soft glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 eyebrow-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Audiences</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] leading-tight">
            <span>Built for people who </span>
            <span className="text-highlight">
              build.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#424245] leading-relaxed">
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
                className="glass-card group relative flex flex-col justify-between rounded-3xl p-7 sm:p-9 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-sm transition-transform duration-200 group-hover:scale-105 ${item.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#0071e3] tracking-wider">
                          SEGMENT {item.num}
                        </span>
                        <div className="text-xs font-medium text-[#6e6e73]">
                          {item.badge}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#aeaeb2] bg-[#f5f5f7] px-2.5 py-1 rounded-lg border border-black/[0.06]">
                      0{item.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f]">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-sm text-[#424245] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-2.5 pt-6 border-t border-black/[0.06]">
                    {item.highlights.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#424245]">
                        <Check className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
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
                    className="w-full flex items-center justify-between rounded-xl bg-[#f5f5f7] border border-black/[0.08] px-5 py-3 text-xs sm:text-sm font-semibold text-[#1d1d1f] hover:border-[#0071e3]/30 hover:bg-blue-50 transition-all active-press"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#0071e3] transition-transform duration-200 group-hover:translate-x-1" />
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
