"use client";

import React from "react";
import { ArrowLeft, X } from "lucide-react";

interface ProgressHeaderProps {
  currentStep: number;
  totalSteps: number;
  canGoBack: boolean;
  onBack: () => void;
  onClose: () => void;
  stepLabel?: string;
}

export function ProgressHeader({
  currentStep,
  totalSteps,
  canGoBack,
  onBack,
  onClose,
  stepLabel,
}: ProgressHeaderProps) {
  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="border-b border-black/[0.06] bg-[#f5f5f7]/60 px-5 sm:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Back Action or Brand Tag */}
        <div className="flex items-center gap-3">
          {canGoBack ? (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#6e6e73] hover:bg-black/[0.04] hover:text-[#1d1d1f] transition-colors active-press"
              aria-label="Go back to previous step"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <span className="font-mono text-xs font-bold text-[#0071e3]">
              ASK_INVENTORS // PROFILE
            </span>
          )}
        </div>

        {/* Center/Right: Step Counter & Progress Bar */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#1d1d1f]">
              0{currentStep}
            </span>
            <span className="font-mono text-xs text-[#aeaeb2]">/</span>
            <span className="font-mono text-xs text-[#86868b]">
              0{totalSteps}
            </span>
          </div>

          <div className="w-16 sm:w-24 h-1.5 rounded-full bg-black/[0.08] overflow-hidden" aria-hidden="true">
            <div
              className="h-full bg-[#0071e3] transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Close Action */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close onboarding modal"
            className="rounded-full p-1.5 text-[#86868b] hover:bg-black/[0.04] hover:text-[#1d1d1f] transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>

      {stepLabel && (
        <div className="mt-2 text-[11px] font-mono uppercase tracking-wider text-[#86868b]">
          {stepLabel}
        </div>
      )}
    </div>
  );
}
