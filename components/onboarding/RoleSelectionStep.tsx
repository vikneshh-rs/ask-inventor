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
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Step 01 // Identification</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Build your journey with ASK INVENTORS.
        </h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xl">
          Tell us who you are so we can create the right experience for you.
        </p>
      </div>

      {/* Two Primary Role Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* STUDENT CARD */}
        <button
          type="button"
          onClick={() => onSelectRole("student")}
          className={`group relative flex flex-col justify-between rounded-xl p-5 sm:p-6 text-left transition-all border active-press ${
            selectedRole === "student"
              ? "bg-[#10172a] border-indigo-500 shadow-lg shadow-indigo-950/60 ring-1 ring-indigo-500"
              : "bg-[#0d1322] border-white/10 hover:border-white/20 hover:bg-[#11192e]"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] font-bold text-slate-500 group-hover:text-indigo-400 transition-colors">
                ROLE // 01
              </span>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                  selectedRole === "student"
                    ? "border-indigo-400 bg-indigo-950 text-indigo-300"
                    : "border-white/10 bg-[#080c14] text-slate-400"
                }`}
              >
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-white">STUDENT</h3>
            <div className="mt-1 text-xs font-bold text-indigo-300">
              Learn. Build. Research. Grow.
            </div>

            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              For students working on projects, developing skills, pursuing research, building prototypes, or preparing for their careers.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
            <span
              className={
                selectedRole === "student" ? "text-indigo-300" : "text-slate-500"
              }
            >
              {selectedRole === "student" ? "Selected Role" : "Select Student"}
            </span>
            <ArrowRight
              className={`w-4 h-4 transition-transform ${
                selectedRole === "student"
                  ? "text-indigo-400 translate-x-1"
                  : "text-slate-600 group-hover:text-slate-400"
              }`}
            />
          </div>
        </button>

        {/* MENTOR CARD */}
        <button
          type="button"
          onClick={() => onSelectRole("mentor")}
          className={`group relative flex flex-col justify-between rounded-xl p-5 sm:p-6 text-left transition-all border active-press ${
            selectedRole === "mentor"
              ? "bg-[#10172a] border-cyan-500 shadow-lg shadow-cyan-950/60 ring-1 ring-cyan-500"
              : "bg-[#0d1322] border-white/10 hover:border-white/20 hover:bg-[#11192e]"
          }`}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] font-bold text-slate-500 group-hover:text-cyan-400 transition-colors">
                ROLE // 02
              </span>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg border ${
                  selectedRole === "mentor"
                    ? "border-cyan-400 bg-cyan-950 text-cyan-300"
                    : "border-white/10 bg-[#080c14] text-slate-400"
                }`}
              >
                <Users className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-white">MENTOR</h3>
            <div className="mt-1 text-xs font-bold text-cyan-300">
              Guide. Share. Build impact.
            </div>

            <p className="mt-3 text-xs text-slate-400 leading-relaxed">
              For faculty, researchers, industry professionals, technical experts, designers, and experienced professionals who want to mentor students.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
            <span
              className={
                selectedRole === "mentor" ? "text-cyan-300" : "text-slate-500"
              }
            >
              {selectedRole === "mentor" ? "Selected Role" : "Select Mentor"}
            </span>
            <ArrowRight
              className={`w-4 h-4 transition-transform ${
                selectedRole === "mentor"
                  ? "text-cyan-400 translate-x-1"
                  : "text-slate-600 group-hover:text-slate-400"
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
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all disabled:opacity-40 disabled:pointer-events-none active-press"
        >
          <span>Continue to Stage Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
