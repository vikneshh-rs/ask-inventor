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

export default function LandingPage() {
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
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 01: Minimalist Editorial Navbar */}
      <Navbar onOpenContact={handleOpenOnboarding} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative">
        {/* 02: Architectural Hero Section */}
        <Hero onOpenContact={handleOpenOnboarding} />

        {/* 03: The Core Idea */}
        <CoreIdea onOpenContact={handleOpenOnboarding} />

        {/* 04: The ASK INVENTORS Journey */}
        <Journey onOpenContact={handleOpenOnboarding} />

        {/* 05: Who We Serve */}
        <Audience onOpenContact={handleOpenOnboarding} />

        {/* 06: Our Services */}
        <Services onOpenContact={handleOpenOnboarding} />

        {/* 07: How It Works */}
        <Process onOpenContact={handleOpenOnboarding} />

        {/* 08: Innovation Showcase */}
        <InnovationShowcase onOpenContact={handleOpenOnboarding} />

        {/* 09: Knowledge + Community */}
        <Knowledge onOpenContact={handleOpenOnboarding} />

        {/* 10: Final CTA */}
        <FinalCTA onOpenContact={handleOpenOnboarding} />
      </main>

      {/* 11: Footer */}
      <Footer onOpenContact={handleOpenOnboarding} />

      {/* Role-Based Progressive Account Onboarding Experience */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={handleCloseOnboarding}
        initialRole={onboardingRole}
      />
    </div>
  );
}
