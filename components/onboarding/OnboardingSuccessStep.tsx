"use client";

import React from "react";
import { OnboardingState } from "@/types/onboarding";
import { CheckCircle2, ArrowRight, Sparkles, User, Building, BookOpen } from "lucide-react";

interface OnboardingSuccessStepProps {
  state: OnboardingState;
  onFinish: () => void;
}

export function OnboardingSuccessStep({
  state,
  onFinish,
}: OnboardingSuccessStepProps) {
  const isStudent = state.role === "student";
  const profileName = isStudent ? state.student.fullName : state.mentor.fullName;
  const organization = isStudent ? state.student.institution : state.mentor.organization;
  const stageOrTitle = isStudent ? state.student.academicStage.toUpperCase() : state.mentor.designation;
  const tags = isStudent ? state.student.interests : state.mentor.mentoringAreas;

  return (
    <div className="py-4 space-y-6 text-center">
      {/* Success Badge */}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-lg shadow-emerald-950/50">
        <CheckCircle2 className="w-8 h-8 animate-pulse" />
      </div>

      <div>
        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-indigo-400 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Profile Initialized // 2026</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Welcome to ASK INVENTORS, {profileName || "Innovator"}!
        </h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
          {isStudent
            ? "Your Student Innovator profile is active. You can now access guided project blueprints, hardware fabrication tracks, and 1-on-1 technical mentors."
            : "Your Mentor & Advisor profile is active. You are now connected to student project teams, research publications, and prototype initiatives."}
        </p>
      </div>

      {/* Structured Profile Summary Card */}
      <div className="rounded-xl border border-white/10 bg-[#080c14] p-5 text-left max-w-lg mx-auto space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/5">
          <span className="text-slate-500 uppercase">Ecosystem Role</span>
          <span className="font-bold text-indigo-300">
            {isStudent ? "STUDENT INNOVATOR" : "MENTOR & ADVISOR"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <span>Name</span>
          </span>
          <span className="text-slate-200">{profileName || "N/A"}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-slate-400" />
            <span>{isStudent ? "Institution" : "Organization"}</span>
          </span>
          <span className="text-slate-200 line-clamp-1">{organization || "N/A"}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>{isStudent ? "Academic Stage" : "Designation"}</span>
          </span>
          <span className="text-slate-200">{stageOrTitle || "N/A"}</span>
        </div>

        {tags && tags.length > 0 && (
          <div className="pt-2 border-t border-white/5">
            <div className="text-[10px] text-slate-500 uppercase mb-1.5">
              Configured Focus Tracks
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 bg-[#0d1322] px-2 py-0.5 text-[10px] text-slate-300"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 4 && (
                <span className="text-[10px] text-slate-500 self-center">
                  +{tags.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onFinish}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-7 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors active-press shadow-lg shadow-indigo-950/50"
        >
          <span>Explore ASK INVENTORS Platform</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
