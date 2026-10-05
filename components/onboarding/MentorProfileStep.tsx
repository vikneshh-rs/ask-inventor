"use client";

import React from "react";
import { MentorProfileData } from "@/types/onboarding";
import { ArrowRight, Check } from "lucide-react";

interface MentorProfileStepProps {
  data: MentorProfileData;
  onChange: <K extends keyof MentorProfileData>(field: K, value: MentorProfileData[K]) => void;
  onContinue: () => void;
}

const MENTOR_AREAS = [
  "UG/PG Capstones",
  "Simulation & Modeling (MATLAB / PSCAD)",
  "Research & Scopus Papers",
  "Patent Prior Art & IP Filings",
  "Hardware & PCB Prototyping",
  "Embedded Firmware & IoT",
  "Core Career & Interview Prep",
  "Startup & MVP Incubation",
];

export function MentorProfileStep({
  data,
  onChange,
  onContinue,
}: MentorProfileStepProps) {
  const toggleArea = (area: string) => {
    const current = data.mentoringAreas || [];
    if (current.includes(area)) {
      onChange(
        "mentoringAreas",
        current.filter((item) => item !== area)
      );
    } else {
      onChange("mentoringAreas", [...current, area]);
    }
  };

  const isComplete =
    data.fullName.trim().length > 1 &&
    data.designation.trim().length > 1 &&
    data.organization.trim().length > 1;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
          Mentor Onboarding // Step 03
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Build your mentor profile.
        </h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xl">
          Share your professional background and mentoring preferences to establish your presence in the ecosystem.
        </p>
      </div>

      <div className="space-y-4">
        {/* Row 1: Full Name & Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="mentor-name" className="block text-xs font-mono text-slate-300 mb-1.5">
              Full Name *
            </label>
            <input
              id="mentor-name"
              type="text"
              required
              value={data.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder="Dr. / Prof. / Jane Doe"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="mentor-phone" className="block text-xs font-mono text-slate-300 mb-1.5">
              Contact Number (Optional)
            </label>
            <input
              id="mentor-phone"
              type="tel"
              value={data.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2: Designation & Organization */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="mentor-desig" className="block text-xs font-mono text-slate-300 mb-1.5">
              Current Designation / Role *
            </label>
            <input
              id="mentor-desig"
              type="text"
              required
              value={data.designation}
              onChange={(e) => onChange("designation", e.target.value)}
              placeholder="e.g. Associate Professor / Lead Hardware Architect"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="mentor-org" className="block text-xs font-mono text-slate-300 mb-1.5">
              Organization / Institution *
            </label>
            <input
              id="mentor-org"
              type="text"
              required
              value={data.organization}
              onChange={(e) => onChange("organization", e.target.value)}
              placeholder="e.g. IIT Madras / Texas Instruments"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3: Years of Experience & Availability */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-2">
              Years of Experience
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["1-3 yrs", "4-7 yrs", "8-12 yrs", "13+ yrs"].map((exp) => (
                <button
                  key={exp}
                  type="button"
                  onClick={() => onChange("yearsOfExperience", exp)}
                  className={`rounded-lg px-2.5 py-2 text-xs font-medium border transition-all text-center ${
                    data.yearsOfExperience === exp
                      ? "border-cyan-500 bg-cyan-950/80 text-cyan-300"
                      : "border-white/10 bg-[#080c14] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {exp}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="mentor-linkedin" className="block text-xs font-mono text-slate-300 mb-1.5">
              LinkedIn / Scholar / Portfolio URL
            </label>
            <input
              id="mentor-linkedin"
              type="url"
              value={data.linkedinUrl || ""}
              onChange={(e) => onChange("linkedinUrl", e.target.value)}
              placeholder="https://linkedin.com/in/username"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Mentoring Focus Areas Multi-select Chips */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-2">
            Primary Mentoring Areas (Select all that apply)
          </label>
          <div className="flex flex-wrap gap-2">
            {MENTOR_AREAS.map((area) => {
              const isSelected = (data.mentoringAreas || []).includes(area);
              return (
                <button
                  key={area}
                  type="button"
                  onClick={() => toggleArea(area)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono border transition-all active-press ${
                    isSelected
                      ? "border-cyan-400 bg-cyan-950 text-cyan-200 font-semibold"
                      : "border-white/10 bg-[#080c14] text-slate-400 hover:text-slate-200 hover:border-white/20"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{area}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 flex justify-end">
        <button
          type="button"
          disabled={!isComplete}
          onClick={onContinue}
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all disabled:opacity-40 disabled:pointer-events-none active-press"
        >
          <span>Continue to Account Setup</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
