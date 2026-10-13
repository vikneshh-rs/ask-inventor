"use client";

import React, { useState, useEffect } from "react";
import {
  UserRole,
  StudentAcademicStage,
  MentorContributionType,
  StudentProfileData,
  MentorProfileData,
  OnboardingState,
} from "@/types/onboarding";
import { ProgressHeader } from "./ProgressHeader";
import { RoleSelectionStep } from "./RoleSelectionStep";
import { StudentStageStep } from "./StudentStageStep";
import { MentorContributionStep } from "./MentorContributionStep";
import { StudentProfileStep } from "./StudentProfileStep";
import { MentorProfileStep } from "./MentorProfileStep";
import { AccountCreationStep } from "./AccountCreationStep";
import { OnboardingSuccessStep } from "./OnboardingSuccessStep";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: UserRole | "student" | "mentor";
}

const INITIAL_STUDENT: StudentProfileData = {
  academicStage: "undergraduate",
  fullName: "",
  phone: "",
  institution: "",
  department: "",
  currentYear: "Final Year",
  interests: ["Artificial Intelligence", "Embedded Systems", "Hardware & PCB"],
};

const INITIAL_MENTOR: MentorProfileData = {
  contributionType: "faculty",
  customContribution: "",
  fullName: "",
  phone: "",
  designation: "",
  organization: "",
  yearsOfExperience: "4-7 yrs",
  domains: [],
  mentoringAreas: ["UG/PG Capstones", "Research & Scopus Papers"],
  linkedinUrl: "",
  availability: "1-2 hrs/week",
};

export function OnboardingModal({
  isOpen,
  onClose,
  initialRole = "student",
}: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState<OnboardingState>({
    role: (initialRole as UserRole) || "student",
    student: INITIAL_STUDENT,
    mentor: INITIAL_MENTOR,
    account: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  useEffect(() => {
    if (initialRole && (initialRole === "student" || initialRole === "mentor")) {
      setState((prev) => ({ ...prev, role: initialRole }));
    }
  }, [initialRole]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Step Handlers
  const handleSelectRole = (role: UserRole) => {
    setState((prev) => ({ ...prev, role }));
  };

  const handleSelectStudentStage = (academicStage: StudentAcademicStage) => {
    setState((prev) => ({
      ...prev,
      student: { ...prev.student, academicStage },
    }));
  };

  const handleSelectMentorContribution = (contributionType: MentorContributionType) => {
    setState((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, contributionType },
    }));
  };

  const handleChangeCustomCategory = (customContribution: string) => {
    setState((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, customContribution },
    }));
  };

  const handleStudentProfileChange = <K extends keyof StudentProfileData>(
    field: K,
    value: StudentProfileData[K]
  ) => {
    setState((prev) => ({
      ...prev,
      student: { ...prev.student, [field]: value },
    }));
  };

  const handleMentorProfileChange = <K extends keyof MentorProfileData>(
    field: K,
    value: MentorProfileData[K]
  ) => {
    setState((prev) => ({
      ...prev,
      mentor: { ...prev.mentor, [field]: value },
    }));
  };

  const handleAccountChange = (field: "email" | "password" | "confirmPassword", value: string) => {
    setState((prev) => ({
      ...prev,
      account: { ...prev.account, [field]: value },
    }));
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate fast, smooth profile creation and validation
    setTimeout(() => {
      setLoading(false);
      setStep(5); // Success step
    }, 500);
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  const totalSteps = 4;
  const isStudent = state.role === "student";

  const getStepLabel = () => {
    if (step === 1) return "Role Classification";
    if (step === 2) return isStudent ? "Academic Trajectory" : "Mentorship Capacity";
    if (step === 3) return isStudent ? "Student Profile & Interests" : "Professional Expertise";
    if (step === 4) return "Security & Account Activation";
    return "Profile Activated";
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200"
        aria-hidden="true"
      />

      {/* Modal Surface Container */}
      <div className="relative w-full max-w-2xl rounded-3xl border border-black/[0.08] bg-white shadow-2xl overflow-hidden z-10 text-[#1d1d1f] modal-enter my-auto">
        {/* Progress Header */}
        {step < 5 && (
          <ProgressHeader
            currentStep={step}
            totalSteps={totalSteps}
            canGoBack={step > 1}
            onBack={() => setStep((prev) => Math.max(1, prev - 1))}
            onClose={onClose}
            stepLabel={getStepLabel()}
          />
        )}

        {/* Dynamic Multi-Step Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {step === 1 && (
            <RoleSelectionStep
              selectedRole={state.role}
              onSelectRole={handleSelectRole}
              onContinue={() => setStep(2)}
            />
          )}

          {step === 2 && isStudent && (
            <StudentStageStep
              selectedStage={state.student.academicStage}
              onSelectStage={handleSelectStudentStage}
              onContinue={() => setStep(3)}
            />
          )}

          {step === 2 && !isStudent && (
            <MentorContributionStep
              selectedContribution={state.mentor.contributionType}
              customCategory={state.mentor.customContribution}
              onSelectContribution={handleSelectMentorContribution}
              onChangeCustomCategory={handleChangeCustomCategory}
              onContinue={() => setStep(3)}
            />
          )}

          {step === 3 && isStudent && (
            <StudentProfileStep
              data={state.student}
              onChange={handleStudentProfileChange}
              onContinue={() => setStep(4)}
            />
          )}

          {step === 3 && !isStudent && (
            <MentorProfileStep
              data={state.mentor}
              onChange={handleMentorProfileChange}
              onContinue={() => setStep(4)}
            />
          )}

          {step === 4 && (
            <AccountCreationStep
              role={state.role || "student"}
              email={state.account.email}
              password={state.account.password}
              confirmPassword={state.account.confirmPassword}
              onChangeEmail={(val) => handleAccountChange("email", val)}
              onChangePassword={(val) => handleAccountChange("password", val)}
              onChangeConfirmPassword={(val) => handleAccountChange("confirmPassword", val)}
              onSubmit={handleAccountSubmit}
              isLoading={loading}
            />
          )}

          {step === 5 && (
            <OnboardingSuccessStep
              state={state}
              onFinish={handleResetAndClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}
