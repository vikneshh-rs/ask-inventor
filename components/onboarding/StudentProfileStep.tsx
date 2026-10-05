"use client";

import React from "react";
import { StudentProfileData } from "@/types/onboarding";
import { ArrowRight, Check } from "lucide-react";

interface StudentProfileStepProps {
  data: StudentProfileData;
  onChange: <K extends keyof StudentProfileData>(field: K, value: StudentProfileData[K]) => void;
  onContinue: () => void;
}

const INTEREST_OPTIONS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Embedded Systems",
  "IoT & Automation",
  "Robotics & Control",
  "Power Electronics",
  "Simulation (MATLAB / PSCAD)",
  "PCB Design & Hardware",
  "Academic Research & Patents",
  "Core Career Prep",
  "Startup & Productization",
];

export function StudentProfileStep({
  data,
  onChange,
  onContinue,
}: StudentProfileStepProps) {
  const toggleInterest = (interest: string) => {
    const current = data.interests || [];
    if (current.includes(interest)) {
      onChange(
        "interests",
        current.filter((item) => item !== interest)
      );
    } else {
      onChange("interests", [...current, interest]);
    }
  };

  const isComplete =
    data.fullName.trim().length > 1 && data.institution.trim().length > 1;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
          Student Onboarding // Step 03
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Build your student profile.
        </h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xl">
          Enter your academic details and areas of interest so we can map relevant mentors and technical resources.
        </p>
      </div>

      <div className="space-y-4">
        {/* Row 1: Full Name & Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="student-name" className="block text-xs font-mono text-slate-300 mb-1.5">
              Full Name *
            </label>
            <input
              id="student-name"
              type="text"
              required
              value={data.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="student-phone" className="block text-xs font-mono text-slate-300 mb-1.5">
              Contact Number (Optional)
            </label>
            <input
              id="student-phone"
              type="tel"
              value={data.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2: College / Institution & Department */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="student-inst" className="block text-xs font-mono text-slate-300 mb-1.5">
              College / University *
            </label>
            <input
              id="student-inst"
              type="text"
              required
              value={data.institution}
              onChange={(e) => onChange("institution", e.target.value)}
              placeholder="e.g. National Institute of Technology"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="student-dept" className="block text-xs font-mono text-slate-300 mb-1.5">
              Department / Discipline
            </label>
            <input
              id="student-dept"
              type="text"
              value={data.department}
              onChange={(e) => onChange("department", e.target.value)}
              placeholder="e.g. Electrical & Electronics / ECE"
              className="w-full rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3: Current Academic Year */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-2">
            Current Academic Year
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[
              { id: "1st Year", label: "1st Year" },
              { id: "2nd Year", label: "2nd Year" },
              { id: "3rd Year", label: "3rd Year" },
              { id: "Final Year", label: "Final Year" },
              { id: "Graduated", label: "Graduated / Other" },
            ].map((yr) => (
              <button
                key={yr.id}
                type="button"
                onClick={() => onChange("currentYear", yr.id)}
                className={`rounded-lg px-3 py-2 text-xs font-medium border transition-all text-center ${
                  data.currentYear === yr.id
                    ? "border-indigo-500 bg-indigo-950/80 text-indigo-300"
                    : "border-white/10 bg-[#080c14] text-slate-400 hover:text-slate-200"
                }`}
              >
                {yr.label}
              </button>
            ))}
          </div>
        </div>

        {/* Areas of Interest Multi-select Chips */}
        <div>
          <label className="block text-xs font-mono text-slate-300 mb-2">
            Areas of Technical Interest (Select all that apply)
          </label>
          <div className="flex flex-wrap gap-2">
            {INTEREST_OPTIONS.map((interest) => {
              const isSelected = (data.interests || []).includes(interest);
              return (
                <button
                  key={interest}
                  type="button"
                  onClick={() => toggleInterest(interest)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono border transition-all active-press ${
                    isSelected
                      ? "border-indigo-400 bg-indigo-950 text-indigo-200 font-semibold"
                      : "border-white/10 bg-[#080c14] text-slate-400 hover:text-slate-200 hover:border-white/20"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                  <span>{interest}</span>
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
