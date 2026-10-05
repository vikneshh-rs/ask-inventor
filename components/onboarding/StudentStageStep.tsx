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
        <div className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
          Student Onboarding // Step 02
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          What stage are you at?
        </h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xl">
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
              className={`group relative flex flex-col justify-between rounded-xl p-5 text-left transition-all border active-press ${
                isSelected
                  ? "bg-[#10172a] border-indigo-500 shadow-md ring-1 ring-indigo-500"
                  : "bg-[#0d1322] border-white/10 hover:border-white/20 hover:bg-[#11192e]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] font-bold text-slate-500">
                    {stage.code}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                      isSelected
                        ? "border-indigo-400 bg-indigo-950/80 text-indigo-300"
                        : "border-white/10 bg-[#080c14] text-slate-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white">{stage.title}</h3>
                <div className="mt-1 font-mono text-[11px] text-indigo-300">
                  {stage.degrees}
                </div>

                <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold">
                <span className={isSelected ? "text-indigo-300" : "text-slate-500"}>
                  {isSelected ? "Selected Stage" : "Select Stage"}
                </span>
                <ArrowRight
                  className={`w-3.5 h-3.5 ${
                    isSelected ? "text-indigo-400" : "text-slate-600"
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
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all disabled:opacity-40 disabled:pointer-events-none active-press"
        >
          <span>Continue to Academic Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
