# ASK INVENTORS — Design Skills & Reference Inventory

This document analyzes the design reference bundle discovered in `skills-main (1)/skills-main/skills` and establishes how each skill and principle is classified, adapted, or adopted for **ASK INVENTORS**.

---

## 1. Skill Inventory Summary

| Skill Name | Purpose | Relevance to ASK INVENTORS | Classification | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **apple-design** | WWDC fluid interfaces, spatial consistency, physical motion, optical typography, translucency, and the 8 design foundations | **Extremely High**: Translates physical responsiveness, depth, and spatial memory into web UX. | **Adapt** (Web translation) | Critical |
| **emil-design-eng** | Design engineering craft, unseen compounding details, micro-interactions, hardware acceleration, and Sonner principles | **Extremely High**: Directly governs frontend component polish, CSS performance, and state transitions. | **Adopt** | Critical |
| **animate** | Step-by-step construction workflow for purposeful UI motion and frequency gating | **High**: Enforces strict discipline on when to animate vs. when to keep instant. | **Adopt** | High |
| **pick-ui-library** | Opinionated, taste-driven UI library selection (Base UI, cmdk, Sonner, Motion, input-otp, Virtuoso, etc.) | **High**: Prevents reinvention of accessible primitives (dialogs, toasts, OTP inputs). | **Adopt** | High |
| **review-animations** | Non-negotiable craft bar and review checklist for UI transitions and performance | **High**: Acts as a pull-request quality gate to prevent regressions. | **Adopt** | High |
| **find-animation-opportunities**| Systematic discovery of high-impact micro-interaction moments | **Medium**: Identifies subtle cues that clarify state without cluttering workflows. | **Adapt** | Medium |
| **improve-animations** | Full codebase audit procedure for motion hygiene | **Medium**: Useful for sprint-end polish and audit cycles. | **Adopt** | Medium |
| **animation-vocabulary** | Shared terminology (damping, response, hysteresis, velocity handoff, spatial anchoring) | **High**: Creates a common vocabulary between architecture and frontend engineering. | **Adopt** | High |
| **prototype** | Interactive prototyping methodology to validate feel before finalizing code | **High**: Validates complex inventor workflows before locking them into production. | **Adopt** | High |
| **ask-sonner** | Deep-dive toast architecture, pointer capture, timer pausing, and accessibility | **High**: Informs notification architecture across ASK INVENTORS. | **Adopt** | High |
| **animate-expo** | React Native / Expo motion implementation | **Low / None**: ASK INVENTORS is a Next.js web platform. | **Do Not Use** | N/A |
| **write-swift** | Native iOS Swift code construction | **Low / None**: ASK INVENTORS is a Next.js web platform. | **Do Not Use** | N/A |

---

## 2. Detailed Skill Analysis

### 2.1. `apple-design` (Apple Fluid Interfaces & WWDC Foundations)
- **Core Concept**: Interfaces feel like a natural extension of the user when motion begins from the current on-screen presentation value, inherits pointer velocity, respects physical boundaries, and remains interruptible at any moment.
- **Classification**: **Adapt**
- **Application to ASK INVENTORS**:
  - *Response*: Instant visual feedback on `:active` / pointer-down for buttons and interactive cards.
  - *Interruptibility*: Modals, drawers, and popovers must never lock user input or snap jarringly upon interruption.
  - *Spatial Consistency*: Navigation drawers, filters, and modal sheets must enter and exit along symmetric paths and anchor to their trigger elements (`transform-origin: var(--transform-origin)`).
  - *Translucency & Depth*: Use `backdrop-filter: blur(...)` on floating navigation bars and context menus with content scrolling underneath, ensuring strict contrast compliance (`prefers-reduced-transparency`).
  - *Optical Typography*: Negative letter-spacing for large display headings (`-0.02em`), neutral tracking for body text, and relative `rem`/`em` scaling for accessibility.
- **Web Constraints**: Use Web Animations API (WAAPI), CSS transitions, and GPU-accelerated `transform`/`opacity` rather than native iOS display-link bindings.

### 2.2. `emil-design-eng` (Craft & Compounding Polish)
- **Core Concept**: Software quality is defined by invisible correctness. Unseen details compound into interfaces that feel reliable and trustworthy.
- **Classification**: **Adopt**
- **Application to ASK INVENTORS**:
  - *Responsive Press Feedback*: Subtle `transform: scale(0.97)` on interactive controls during press.
  - *Physical Realism*: Never animate from `scale(0)` — use `scale(0.95)` with `opacity: 0` for natural entry.
  - *Tooltips*: Skip delay and animation on subsequent adjacent tooltip hovers.
  - *State Masking*: Use micro-blur (`filter: blur(2px)`) during complex crossfades to bridge overlapping visual states cleanly.
  - *Modern CSS*: Leverage `@starting-style` and percentage-based transforms (`translateY(100%)`) for resilient layout-independent animations.
  - *Performance Rules*: Strictly forbid animating layout properties (`width`, `height`, `margin`, `padding`, `top`, `left`).

### 2.3. `animate` (Motion Decision Sequence)
- **Core Concept**: The primary discipline of animation engineering is knowing when **not** to animate.
- **Classification**: **Adopt**
- **Application to ASK INVENTORS**:
  - *Frequency Gating*:
    - High-frequency actions (100+ times/day, search palette toggle, keyboard shortcuts): **Zero animation** (instant state change).
    - Moderate-frequency actions (table row hover, list navigation): Near-imperceptible (100–160ms) or pure CSS.
    - Occasional actions (project creation modal, proposal drawer): Standard polish (180–250ms).
    - First-time / Milestone actions (patent submitted, collaboration approved): Delight budget (subtle celebratory cues).
  - *Easing Standard*: Forbid `ease-in` for entering UI. Use strong ease-out curves (`cubic-bezier(0.23, 1, 0.32, 1)`) for instant perceived responsiveness.

### 2.4. `pick-ui-library` (Curated Dependency Standards)
- **Core Concept**: Rely on battle-tested, unstyled, accessible primitives rather than hand-rolling custom `<div>`-based interactive widgets.
- **Classification**: **Adopt**
- **Application to ASK INVENTORS**:
  - **Primitives**: Base UI (`@base-ui-components/react`) or Radix UI for accessible dialogs, popovers, dropdowns, and selects.
  - **Command Palettes**: `cmdk` for global search and inventor shortcut navigation.
  - **Notifications**: `sonner` for stacked, accessible toasts.
  - **OTP Verification**: `input-otp` for mobile and email verification flows.
  - **Data Visualization**: `recharts` for inventor analytics and project metrics.
  - **Lists & Tables**: `virtuoso` if rendering high-volume patent or project datasets.
  - **Variant Styling**: `cva` (Class Variance Authority) combined with `clsx` and `tailwind-merge`.

### 2.5. `review-animations` (Review & Quality Gate)
- **Core Concept**: Enforces 10 non-negotiable craft standards through a rigorous review rubric.
- **Classification**: **Adopt**
- **Application to ASK INVENTORS**:
  - Integrate as a standard review checklist for all upcoming UI sprints.
  - Automatic escalation triggers: `transition: all`, `scale(0)` entrances, `ease-in` on UI, durations over 300ms, missing `@media (prefers-reduced-motion)`, and ungated `:hover` selectors.

### 2.6. `animate-expo` & `write-swift`
- **Classification**: **Do Not Use**
- **Reasoning**: ASK INVENTORS is a modern Next.js web application. iOS native and React Native codebases are out of scope.
