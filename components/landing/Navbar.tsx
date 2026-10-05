"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

interface NavbarProps {
  onOpenContact: (role?: string, topic?: string) => void;
}

const NAV_LINKS = [
  { label: "Explore", href: "#services", code: "01" },
  { label: "What We Do", href: "#journey", code: "02" },
  { label: "For You", href: "#audience", code: "03" },
  { label: "About", href: "#about", code: "04" },
];

export function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 lg:px-10 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Main Navigation"
          className={`flex items-center justify-between rounded-xl px-4 sm:px-6 py-2.5 transition-all duration-300 ${
            scrolled
              ? "glass-navbar bg-[#080c14]/90 border border-white/10 shadow-2xl backdrop-blur-2xl"
              : "border border-white/5 bg-[#080c14]/40 backdrop-blur-md"
          }`}
        >
          {/* Brand Identity */}
          <Link
            href="#"
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg focus-visible:outline-none"
            aria-label="ASK INVENTORS Homepage"
          >
            <Logo size="sm" showTagline={false} />
          </Link>

          {/* Editorial / Technical Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-lg ${
                    isActive
                      ? "text-white bg-white/5 border border-white/10"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="font-mono text-[10px] text-slate-400 group-hover:text-indigo-400 transition-colors">
                    {link.code}
                  </span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action: Editorial / Conversation Trigger */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContact("student", "navbar-conversation")}
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 border border-indigo-500/40 hover:border-indigo-400 hover:bg-indigo-950/40 transition-all active-press"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenContact("student", "mobile-nav")}
              className="rounded-lg bg-indigo-600/90 px-3 py-1.5 text-xs font-semibold text-white active-press"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[72px] z-50 bg-[#080c14]/90 backdrop-blur-md sm:hidden p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="rounded-xl border border-white/10 bg-[#0d1322] p-5 shadow-2xl text-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-1.5">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-colors min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-indigo-400">{link.code}</span>
                      <span>{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
                <div className="pt-3 border-t border-white/10 mt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenContact("student", "mobile-drawer-cta");
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white active-press min-h-[44px]"
                  >
                    <span>Start a Conversation</span>
                    <ArrowUpRight className="w-4 h-4" />
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
