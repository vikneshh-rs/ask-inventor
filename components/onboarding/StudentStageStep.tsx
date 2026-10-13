"use client";

import React from "react";
import { StudentAcademicStage } from "@/types/onboarding";
import { BookOpen, Award, FlaskConical, ArrowRight } from "lucide-react";

interface StudentStageStepProps {
  selectedStage: StudentAcademicStage;
  onSelectStage: (stage: StudentAcademicStage) => void;
  onContinue: () => void;
}

export function StudentStageStep({
  selectedStage,
  onSelectStage,
  onContinue,
}: StudentStageStepProps) {
  const stages = [
    {
      id: "undergraduate" as const,
      code: "STAGE // 01",
      title: "Undergraduate",
      degrees: "B.Tech / B.E. / B.Sc. / BCA / Other",
      description:
        "Building academic capstones, hands-on hardware/software skills, and preparing for core engineering careers.",
      icon: BookOpen,
      color: "text-blue-400 border-blue-500/30",
    },
    {
      id: "postgraduate" as const,
      code: "STAGE // 02",
      title: "Postgraduate",
      degrees: "M.Tech / M.E. / M.Sc. / MCA / MBA / Other",
      description:
        "Advanced domain engineering, simulation models, thesis projects, and applied industrial research.",
      icon: Award,
      color: "text-indigo-400 border-indigo-500/30",
    },
    {
      id: "phd" as const,
      code: "STAGE // 03",
      title: "PhD / Research Scholar",
      degrees: "Doctoral & Advanced Fellowships",
      description:
        "Novel experimental research, Scopus / IEEE paper publication, patent disclosures, and doctoral theses.",
      icon: FlaskConical,
      color: "text-purple-400 border-purple-500/30",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 eyebrow-badge mb-2">
          <span>Student Onboarding // Step 02</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
          What stage are you at?
        </h2>
        <p className="mt-2 text-sm text-[#424245] leading-relaxed max-w-xl">
          Select your current academic program to calibrate your project, mentorship, and career roadmap.
        </p>
      </div>

      {/* 3 Academic Options */}
      <div className="grid gap-3.5 sm:grid-cols-3">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isSelected = selectedStage === stage.id;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => onSelectStage(stage.id)}
              className={`group relative flex flex-col justify-between rounded-2xl p-5 text-left transition-all border active-press ${
                isSelected
                  ? "bg-blue-50/70 border-[#0071e3] shadow-sm ring-1 ring-[#0071e3]"
                  : "bg-[#f5f5f7]/60 border-black/[0.08] hover:border-black/[0.15] hover:bg-[#f5f5f7]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold text-[#86868b]">
                    {stage.code}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-xl border ${
                      isSelected
                        ? "border-blue-200 bg-white text-[#0071e3] shadow-sm"
                        : "border-black/[0.08] bg-white text-[#6e6e73]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#1d1d1f]">{stage.title}</h3>
                <div className="mt-1 font-mono text-[11px] text-[#0071e3] font-medium">
                  {stage.degrees}
                </div>

                <p className="mt-2.5 text-xs text-[#424245] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-semibold">
                <span className={isSelected ? "text-[#0071e3]" : "text-[#86868b]"}>
                  {isSelected ? "Selected Stage" : "Select Stage"}
                </span>
                <ArrowRight
                  className={`w-3.5 h-3.5 ${
                    isSelected ? "text-[#0071e3]" : "text-[#aeaeb2] group-hover:text-[#6e6e73]"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="pt-3 flex justify-end">
        <button
          type="button"
          disabled={!selectedStage}
          onClick={onContinue}
          className="btn-primary px-6 py-3 text-sm gap-2 disabled:opacity-40 disabled:pointer-events-none"
        >
          <span>Continue to Academic Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
