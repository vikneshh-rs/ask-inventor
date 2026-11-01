"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CoreIdea } from "@/components/landing/CoreIdea";
import { Journey } from "@/components/landing/Journey";
import { Audience } from "@/components/landing/Audience";
import { Services } from "@/components/landing/Services";
import { Process } from "@/components/landing/Process";
import { InnovationShowcase } from "@/components/landing/InnovationShowcase";
import { Knowledge } from "@/components/landing/Knowledge";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { OnboardingModal } from "@/components/onboarding/OnboardingModal";
import { UserRole } from "@/types/onboarding";

export default function OldLandingPage() {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [onboardingRole, setOnboardingRole] = useState<UserRole>("student");

  const handleOpenOnboarding = (role = "student") => {
    setOnboardingRole((role === "mentor" ? "mentor" : "student") as UserRole);
    setIsOnboardingOpen(true);
  };

  const handleCloseOnboarding = () => {
    setIsOnboardingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-grid text-[#1d1d1f] selection:bg-blue-100 selection:text-blue-800">
      <Navbar onOpenContact={handleOpenOnboarding} />
      <main id="main-content" className="relative">
        <Hero onOpenContact={handleOpenOnboarding} />
        <CoreIdea onOpenContact={handleOpenOnboarding} />
        <Journey onOpenContact={handleOpenOnboarding} />
        <Audience onOpenContact={handleOpenOnboarding} />
        <Services onOpenContact={handleOpenOnboarding} />
        <Process onOpenContact={handleOpenOnboarding} />
        <InnovationShowcase onOpenContact={handleOpenOnboarding} />
        <Knowledge onOpenContact={handleOpenOnboarding} />
        <FinalCTA onOpenContact={handleOpenOnboarding} />
      </main>
      <Footer onOpenContact={handleOpenOnboarding} />
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={handleCloseOnboarding}
        initialRole={onboardingRole}
      />
    </div>
  );
}

