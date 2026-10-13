"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FooterProps {
  onOpenContact: (role?: string) => void;
}

export function Footer({ onOpenContact }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#solutions" },
    { label: "Innovation", href: "#journey" },
    { label: "Showcase", href: "#showcase" },
    { label: "Resources", href: "#resources" },
    { label: "About", href: "#about" },
  ];

  return (
    <footer className="relative border-t border-black/[0.06] bg-[#f5f5f7] pt-12 pb-10 overflow-hidden text-[#6e6e73]">
      {/* Subtle top reflection line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#0071e3]/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 pb-12 border-b border-black/[0.06]">
          {/* Brand Info (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" />
            <div className="space-y-1 text-sm font-medium text-[#424245]">
              <p className="text-[#1d1d1f] font-semibold">From Project to Career.</p>
              <p className="text-[#424245]">From Idea to Innovation.</p>
            </div>
            <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed max-w-sm">
              Connecting students, researchers, academic institutions, and industry to transform ideas into published research, working prototypes, high-growth careers, and viable startups.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`mailto:${siteConfig.email.fromDefault}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0071e3] hover:text-[#0077ed] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.email.fromDefault}</span>
              </a>
              <span className="text-[#424245]">•</span>
              <span className="inline-flex items-center gap-1 text-xs text-[#6e6e73]">
                <Globe className="w-3.5 h-3.5 text-[#0284c7]" />
                <span>{siteConfig.domain}</span>
              </span>
            </div>
          </div>

          {/* Navigation Links (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#1d1d1f] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs & Engagement (Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] mb-4">
              Ecosystem Engagement
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact("student")}
                  className="text-left hover:text-[#1d1d1f] transition-colors inline-flex items-center justify-between w-full group"
                >
                  <span>Student Capstone & Project Intake</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0071e3] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact("researcher")}
                  className="text-left hover:text-[#1d1d1f] transition-colors inline-flex items-center justify-between w-full group"
                >
                  <span>Postgraduate Research & Paper Review</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0071e3] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact("college")}
                  className="text-left hover:text-[#1d1d1f] transition-colors inline-flex items-center justify-between w-full group"
                >
                  <span>Institutional Innovation Lab Setup</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0071e3] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenContact("industry")}
                  className="text-left hover:text-[#1d1d1f] transition-colors inline-flex items-center justify-between w-full group"
                >
                  <span>Industry Collaboration & Prototyping</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0071e3] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Domains */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e6e73]">
          <div>
            &copy; {currentYear} ASK INVENTORS. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#6e6e73]">
              Architecture Domain: <span className="text-[#424245] font-mono">{siteConfig.domain}</span>
            </span>
            <span className="text-[#424245]">•</span>
            <span className="text-[#6e6e73]">Production Platform v1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
