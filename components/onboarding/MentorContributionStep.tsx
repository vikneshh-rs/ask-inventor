"use client";

import React from "react";
import { MentorContributionType } from "@/types/onboarding";
import {
  GraduationCap,
  Briefcase,
  FlaskConical,
  Cpu,
  Rocket,
  Palette,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface MentorContributionStepProps {
  selectedContribution: MentorContributionType;
  customCategory?: string;
  onSelectContribution: (type: MentorContributionType) => void;
  onChangeCustomCategory: (val: string) => void;
  onContinue: () => void;
}

export function MentorContributionStep({
  selectedContribution,
  customCategory = "",
  onSelectContribution,
  onChangeCustomCategory,
  onContinue,
}: MentorContributionStepProps) {
  const options = [
    {
      id: "faculty" as const,
      title: "Faculty / Academic Mentor",
      description: "Guide students through academic projects, syllabi standards, and technical learning.",
      icon: GraduationCap,
    },
    {
      id: "industry" as const,
      title: "Industry Professional",
      description: "Bring industry knowledge, production standards, and real-world engineering perspective.",
      icon: Briefcase,
    },
    {
      id: "researcher" as const,
      title: "Researcher",
      description: "Support research methodology, statistical experimentation, and Scopus/IEEE publications.",
      icon: FlaskConical,
    },
    {
      id: "technical_expert" as const,
      title: "Technical Expert",
      description: "Provide deep domain-specific guidance across Embedded, AI/ML, Simulation, and Hardware.",
      icon: Cpu,
    },
    {
      id: "startup" as const,
      title: "Product / Startup Mentor",
      description: "Help student teams transform working prototypes into viable products and seed-grant ventures.",
      icon: Rocket,
    },
    {
      id: "design" as const,
      title: "Design Mentor",
      description: "Support CAD modeling, industrial casing, ergonomics, UI/UX, and product aesthetics.",
      icon: Palette,
    },
    {
      id: "other" as const,
      title: "Other / Custom Track",
      description: "Contribute through a specialized institutional, advisory, or community capacity.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 eyebrow-badge mb-2">
          <span>Mentor Onboarding // Step 02</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
          How would you like to contribute?
        </h2>
        <p className="mt-2 text-sm text-[#424245] leading-relaxed max-w-xl">
          Choose your primary mentorship role to help us connect you with relevant student projects and research teams.
        </p>
      </div>

      {/* Grid of contribution types */}
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          const Icon = opt.icon;
          const isSelected = selectedContribution === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelectContribution(opt.id)}
              className={`group relative flex items-start gap-3.5 rounded-2xl p-4 text-left transition-all border active-press ${
                isSelected
                  ? "bg-cyan-50/70 border-[#0284c7] shadow-sm ring-1 ring-[#0284c7]"
                  : "bg-[#f5f5f7]/60 border-black/[0.08] hover:border-black/[0.15] hover:bg-[#f5f5f7]"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                  isSelected
                    ? "border-cyan-200 bg-white text-[#0284c7] shadow-sm"
                    : "border-black/[0.08] bg-white text-[#6e6e73]"
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#1d1d1f]">{opt.title}</h3>
                <p className="mt-1 text-xs text-[#424245] leading-snug">
                  {opt.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Custom Category Input if 'other' is selected */}
      {selectedContribution === "other" && (
        <div className="rounded-2xl border border-black/[0.08] bg-[#f5f5f7] p-4">
          <label htmlFor="custom-category" className="block text-xs font-mono text-[#424245] mb-1.5">
            Specify Your Mentorship / Advisory Capacity:
          </label>
          <input
            id="custom-category"
            type="text"
            value={customCategory}
            onChange={(e) => onChangeCustomCategory(e.target.value)}
            placeholder="e.g. Patent Attorney / Intellectual Property Consultant"
            className="w-full rounded-xl border border-black/[0.08] bg-white px-3.5 py-2.5 text-sm text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0284c7] focus:outline-none"
          />
        </div>
      )}

      {/* Action Footer */}
      <div className="pt-3 flex justify-end">
        <button
          type="button"
          disabled={!selectedContribution}
          onClick={onContinue}
          className="btn-primary px-6 py-3 text-sm gap-2 disabled:opacity-40 disabled:pointer-events-none"
        >
          <span>Continue to Mentor Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
