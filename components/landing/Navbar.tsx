"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

const NAV_LINKS = [
  { label: "Services",   href: "#services",  code: "01" },
  { label: "Journey",    href: "#journey",   code: "02" },
  { label: "Who We Serve", href: "#solutions", code: "03" },
  { label: "About",      href: "#about",     code: "04" },
];

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]  = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      const current  = sections.find((s) => {
        const el = document.getElementById(s);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Floating pill navbar */}
        <nav
          aria-label="Main Navigation"
          className="navbar-pill flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-200"
        >
          {/* Logo */}
          <Link
            href="#"
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg focus-visible:outline-none"
            aria-label="ASK INVENTORS Homepage"
          >
            <Logo size="sm" showTagline={false} />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-colors active-press ${
                    isActive
                      ? "text-[#0071e3] font-semibold"
                      : "text-[#424245] hover:text-[#1d1d1f] hover:bg-black/[0.04]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => onOpenContact("student", "navbar")}
              type="button"
              className="btn-primary h-9 px-4 text-xs gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start a Conversation</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenContact("student", "mobile-nav")}
              className="btn-primary h-8 px-3 text-xs"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="rounded-xl p-2 text-[#424245] hover:bg-black/[0.05] hover:text-[#1d1d1f] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[70px] z-50 bg-black/20 backdrop-blur-sm sm:hidden p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="rounded-2xl border border-black/[0.08] bg-white p-4 shadow-xl text-[#1d1d1f]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-medium text-[#1d1d1f] hover:bg-black/[0.04] transition-colors min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-[#aeaeb2]">{link.code}</span>
                      <span>{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#aeaeb2]" />
                  </Link>
                ))}
                <div className="pt-3 border-t border-black/[0.06] mt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContact("student", "mobile-drawer");
                    }}
                    className="w-full btn-primary py-3 text-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Start a Conversation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
