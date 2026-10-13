"use client";

import React from "react";
import { UserRole } from "@/types/onboarding";
import { GraduationCap, Users, ArrowRight, Sparkles } from "lucide-react";

interface RoleSelectionStepProps {
  selectedRole: UserRole | null;
  onSelectRole: (role: UserRole) => void;
  onContinue: () => void;
}

export function RoleSelectionStep({
  selectedRole,
  onSelectRole,
  onContinue,
}: RoleSelectionStepProps) {
  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div>
        <div className="inline-flex items-center gap-2 eyebrow-badge mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Step 01 // Identification</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
          Build your journey with ASK INVENTORS.
        </h2>
        <p className="mt-2 text-sm text-[#424245] leading-relaxed max-w-xl">
          Tell us who you are so we can create the right experience for you.
        </p>
      </div>

      {/* Two Primary Role Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* STUDENT CARD */}
        <button
          type="button"
          onClick={() => onSelectRole("student")}
          className={`group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 text-left transition-all border active-press ${
            selectedRole === "student"
              ? "bg-blue-50/70 border-[#0071e3] shadow-md ring-1 ring-[#0071e3]"
              : "bg-[#f5f5f7]/60 border-black/[0.08] hover:border-black/[0.15] hover:bg-[#f5f5f7]"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] font-bold text-[#86868b] group-hover:text-[#0071e3] transition-colors">
                ROLE // 01
              </span>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                  selectedRole === "student"
                    ? "border-blue-200 bg-white text-[#0071e3] shadow-sm"
                    : "border-black/[0.08] bg-white text-[#6e6e73]"
                }`}
              >
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-[#1d1d1f]">STUDENT</h3>
            <div className="mt-1 text-xs font-bold text-[#0071e3]">
              Learn. Build. Research. Grow.
            </div>

            <p className="mt-3 text-xs text-[#424245] leading-relaxed">
              For students working on projects, developing skills, pursuing research, building prototypes, or preparing for their careers.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold">
            <span
              className={
                selectedRole === "student" ? "text-[#0071e3]" : "text-[#86868b]"
              }
            >
              {selectedRole === "student" ? "Selected Role" : "Select Student"}
            </span>
            <ArrowRight
              className={`w-4 h-4 transition-transform ${
                selectedRole === "student"
                  ? "text-[#0071e3] translate-x-1"
                  : "text-[#aeaeb2] group-hover:text-[#6e6e73]"
              }`}
            />
          </div>
        </button>

        {/* MENTOR CARD */}
        <button
          type="button"
          onClick={() => onSelectRole("mentor")}
          className={`group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 text-left transition-all border active-press ${
            selectedRole === "mentor"
              ? "bg-cyan-50/70 border-[#0284c7] shadow-md ring-1 ring-[#0284c7]"
              : "bg-[#f5f5f7]/60 border-black/[0.08] hover:border-black/[0.15] hover:bg-[#f5f5f7]"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] font-bold text-[#86868b] group-hover:text-[#0284c7] transition-colors">
                ROLE // 02
              </span>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                  selectedRole === "mentor"
                    ? "border-cyan-200 bg-white text-[#0284c7] shadow-sm"
                    : "border-black/[0.08] bg-white text-[#6e6e73]"
                }`}
              >
                <Users className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-[#1d1d1f]">MENTOR</h3>
            <div className="mt-1 text-xs font-bold text-[#0284c7]">
              Guide. Share. Build impact.
            </div>

            <p className="mt-3 text-xs text-[#424245] leading-relaxed">
              For faculty, researchers, industry professionals, technical experts, designers, and experienced professionals who want to mentor students.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold">
            <span
              className={
                selectedRole === "mentor" ? "text-[#0284c7]" : "text-[#86868b]"
              }
            >
              {selectedRole === "mentor" ? "Selected Role" : "Select Mentor"}
            </span>
            <ArrowRight
              className={`w-4 h-4 transition-transform ${
                selectedRole === "mentor"
                  ? "text-[#0284c7] translate-x-1"
                  : "text-[#aeaeb2] group-hover:text-[#6e6e73]"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Action Footer */}
      <div className="pt-3 flex justify-end">
        <button
          type="button"
          disabled={!selectedRole}
          onClick={onContinue}
          className="btn-primary px-6 py-3 text-sm gap-2 disabled:opacity-40 disabled:pointer-events-none"
        >
          <span>Continue to Stage Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
