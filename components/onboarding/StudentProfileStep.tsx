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
        <div className="inline-flex items-center gap-2 eyebrow-badge mb-2">
          <span>Student Onboarding // Step 03</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
          Build your student profile.
        </h2>
        <p className="mt-2 text-sm text-[#424245] leading-relaxed max-w-xl">
          Enter your academic details and areas of interest so we can map relevant mentors and technical resources.
        </p>
      </div>

      <div className="space-y-4">
        {/* Row 1: Full Name & Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="student-name" className="block text-xs font-mono text-[#424245] mb-1.5">
              Full Name *
            </label>
            <input
              id="student-name"
              type="text"
              required
              value={data.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full rounded-xl border border-black/[0.08] bg-[#f5f5f7] px-3.5 py-2.5 text-sm text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0071e3] focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="student-phone" className="block text-xs font-mono text-[#424245] mb-1.5">
              Contact Number (Optional)
            </label>
            <input
              id="student-phone"
              type="tel"
              value={data.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full rounded-xl border border-black/[0.08] bg-[#f5f5f7] px-3.5 py-2.5 text-sm text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0071e3] focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2: College / Institution & Department */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="student-inst" className="block text-xs font-mono text-[#424245] mb-1.5">
              College / University *
            </label>
            <input
              id="student-inst"
              type="text"
              required
              value={data.institution}
              onChange={(e) => onChange("institution", e.target.value)}
              placeholder="e.g. National Institute of Technology"
              className="w-full rounded-xl border border-black/[0.08] bg-[#f5f5f7] px-3.5 py-2.5 text-sm text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0071e3] focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="student-dept" className="block text-xs font-mono text-[#424245] mb-1.5">
              Department / Discipline
            </label>
            <input
              id="student-dept"
              type="text"
              value={data.department}
              onChange={(e) => onChange("department", e.target.value)}
              placeholder="e.g. Electrical & Electronics / ECE"
              className="w-full rounded-xl border border-black/[0.08] bg-[#f5f5f7] px-3.5 py-2.5 text-sm text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0071e3] focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3: Current Academic Year */}
        <div>
          <label className="block text-xs font-mono text-[#424245] mb-2">
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
                className={`rounded-xl px-3 py-2 text-xs font-medium border transition-all text-center active-press ${
                  data.currentYear === yr.id
                    ? "border-[#0071e3] bg-blue-50 text-[#0071e3] font-semibold"
                    : "border-black/[0.08] bg-[#f5f5f7] text-[#424245] hover:text-[#1d1d1f] hover:bg-black/[0.04]"
                }`}
              >
                {yr.label}
              </button>
            ))}
          </div>
        </div>

        {/* Areas of Interest Multi-select Chips */}
        <div>
          <label className="block text-xs font-mono text-[#424245] mb-2">
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
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-mono border transition-all active-press ${
                    isSelected
                      ? "border-[#0071e3] bg-blue-50 text-[#0071e3] font-semibold shadow-sm"
                      : "border-black/[0.08] bg-[#f5f5f7] text-[#424245] hover:text-[#1d1d1f] hover:border-black/[0.15]"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#0071e3]" />}
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
          className="btn-primary px-6 py-3 text-sm gap-2 disabled:opacity-40 disabled:pointer-events-none"
        >
          <span>Continue to Account Setup</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
