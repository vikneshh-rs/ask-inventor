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
        <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
          Mentor Onboarding // Step 02
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          How would you like to contribute?
        </h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xl">
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
              className={`group relative flex items-start gap-3.5 rounded-xl p-4 text-left transition-all border active-press ${
                isSelected
                  ? "bg-[#10172a] border-cyan-500 shadow-md ring-1 ring-cyan-500"
                  : "bg-[#0d1322] border-white/10 hover:border-white/20 hover:bg-[#11192e]"
              }`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-950/80 text-cyan-300"
                    : "border-white/10 bg-[#080c14] text-slate-400"
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">{opt.title}</h3>
                <p className="mt-1 text-xs text-slate-400 leading-snug">
                  {opt.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Custom Category Input if 'other' is selected */}
      {selectedContribution === "other" && (
        <div className="rounded-xl border border-white/10 bg-[#080c14] p-4">
          <label htmlFor="custom-category" className="block text-xs font-mono text-slate-300 mb-1.5">
            Specify Your Mentorship / Advisory Capacity:
          </label>
          <input
            id="custom-category"
            type="text"
            value={customCategory}
            onChange={(e) => onChangeCustomCategory(e.target.value)}
            placeholder="e.g. Patent Attorney / Intellectual Property Consultant"
            className="w-full rounded-lg border border-white/10 bg-[#0d1322] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
          />
        </div>
      )}

      {/* Action Footer */}
      <div className="pt-3 flex justify-end">
        <button
          type="button"
          disabled={!selectedContribution}
          onClick={onContinue}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all disabled:opacity-40 disabled:pointer-events-none active-press"
        >
          <span>Continue to Mentor Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
