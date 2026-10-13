"use client";

import React, { useState } from "react";
import { UserRole } from "@/types/onboarding";
import { Lock, Mail, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

interface AccountCreationStepProps {
  role: UserRole;
  email: string;
  password: string;
  confirmPassword: string;
  onChangeEmail: (val: string) => void;
  onChangePassword: (val: string) => void;
  onChangeConfirmPassword: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function AccountCreationStep({
  role,
  email,
  password,
  confirmPassword,
  onChangeEmail,
  onChangePassword,
  onChangeConfirmPassword,
  onSubmit,
  isLoading,
}: AccountCreationStepProps) {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError(null);
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 eyebrow-badge mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Final Step // Account Credentials</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1d1d1f] tracking-tight">
          Create your ASK INVENTORS account.
        </h2>
        <p className="mt-2 text-sm text-[#424245] leading-relaxed max-w-xl">
          Initialize your secure {role === "student" ? "student innovator" : "mentor advisor"} profile and access your personalized ecosystem dashboard.
        </p>
      </div>

      {error && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-700 font-medium">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {/* Email Field */}
        <div>
          <label htmlFor="account-email" className="block text-xs font-mono text-[#424245] mb-1.5">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="account-email"
              type="email"
              required
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
              placeholder="innovator@institution.edu or name@domain.com"
              className="w-full rounded-xl border border-black/[0.08] bg-[#f5f5f7] pl-10 pr-3.5 py-2.5 text-sm text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0071e3] focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="account-pass" className="block text-xs font-mono text-[#424245] mb-1.5">
              Password *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="account-pass"
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => onChangePassword(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full rounded-xl border border-black/[0.08] bg-[#f5f5f7] pl-10 pr-3.5 py-2.5 text-sm text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0071e3] focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="account-confirm" className="block text-xs font-mono text-[#424245] mb-1.5">
              Confirm Password *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="account-confirm"
                type="password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(e) => onChangeConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                className="w-full rounded-xl border border-black/[0.08] bg-[#f5f5f7] pl-10 pr-3.5 py-2.5 text-sm text-[#1d1d1f] placeholder-[#86868b] focus:border-[#0071e3] focus:bg-white focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security & Confidentiality Tag */}
      <div className="rounded-2xl border border-black/[0.06] bg-[#f5f5f7] p-3.5 flex items-center gap-3 text-xs text-[#424245]">
        <ShieldCheck className="w-5 h-5 text-[#059669] shrink-0" />
        <span>
          Your profile, project proposals, and intellectual property remain protected under ASK INVENTORS institutional security standards.
        </span>
      </div>

      {/* Submit Action */}
      <div className="pt-2 flex justify-end">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary px-7 py-3.5 text-sm gap-2 disabled:opacity-50"
        >
          {isLoading ? (
            <span>Initializing Profile...</span>
          ) : (
            <>
              <span>Complete Profile & Enter Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
