"use client";

import React, { useState, useEffect } from "react";
import { X, Send, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
  initialTopic?: string;
}

export function ContactModal({
  isOpen,
  onClose,
  initialRole = "student",
  initialTopic = "",
}: ContactModalProps) {
  const [role, setRole] = useState(initialRole);
  const [topic, setTopic] = useState(initialTopic);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialRole) setRole(initialRole);
    if (initialTopic) setTopic(initialTopic);
  }, [initialRole, initialTopic]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate instant smooth acknowledgment
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-200"
        aria-hidden="true"
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-slate-900/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl z-10 animate-fade-in text-slate-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shadow-glow-emerald">
              <CheckCircle2 className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="mt-6 text-2xl font-bold text-slate-100">
              Your Journey Has Started!
            </h3>
            <p className="mt-3 text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out, <span className="text-slate-200 font-semibold">{name || "Innovator"}</span>. An ASK INVENTORS technical mentor will connect with you within 24 hours to review your roadmap.
            </p>
            <div className="mt-8">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-glow-indigo hover:bg-indigo-500 transition-all active-press"
              >
                Back to ASK INVENTORS <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Connect with ASK INVENTORS</span>
            </div>
            <h2 id="modal-title" className="text-2xl font-bold text-slate-100">
              Start Your Innovation Journey
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Tell us about your project, research goal, or institutional partnership.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Persona Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  I am a:
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    { id: "student", label: "Student" },
                    { id: "researcher", label: "Researcher" },
                    { id: "college", label: "Institution" },
                    { id: "industry", label: "Industry" },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setRole(item.id)}
                      className={`rounded-xl px-3 py-2 text-xs font-medium border transition-all text-center ${
                        role === item.id
                          ? "border-indigo-500 bg-indigo-600/20 text-indigo-300 shadow-glow-indigo"
                          : "border-slate-800 bg-slate-800/40 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Area */}
              <div>
                <label htmlFor="topic-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Primary Focus / Goal
                </label>
                <select
                  id="topic-input"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="">Select an area of interest</option>
                  <option value="project-mentoring">Academic Project Mentoring & Guidance</option>
                  <option value="skills">Practical Skills & Technical Training</option>
                  <option value="research">Research Methodology & Publications</option>
                  <option value="prototyping">Hardware/Software Prototyping</option>
                  <option value="career">Career Mentoring & Opportunities</option>
                  <option value="entrepreneurship">Venture & Startup Incubation</option>
                  <option value="institutional-partnership">Institutional / College Ecosystem</option>
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. / Prof. / Jane Doe"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@college.edu or email@domain.com"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message-input" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Brief Project / Idea Overview (Optional)
                </label>
                <textarea
                  id="message-input"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview of what you want to build or achieve..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                />
              </div>

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-glow-indigo hover:from-indigo-500 hover:to-indigo-400 transition-all disabled:opacity-50 active-press"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit & Request Mentorship Session</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                🔒 Your ideas and submissions are protected under strict confidentiality and IP privacy standards.
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
