# ASK INVENTORS — Design System Mapping & Engineering Blueprint

This document translates the Apple Design System and Design Engineering principles into concrete architectural standards, component guidelines, design tokens, and accessibility rules tailored specifically for **ASK INVENTORS**.

---

## 1. Principles Mapping: Apple & Design Engineering to ASK INVENTORS

```text
Apple / Design Engineering Principle
                ↓
    ASK INVENTORS Requirement
                ↓
       Implementation Rule
```

| Apple / Craft Principle | ASK INVENTORS Requirement | Implementation Rule |
| :--- | :--- | :--- |
| **Response: Kill Latency** | User actions across inventor dashboards, project management, and submissions must feel instantaneously acknowledged. | Provide visual feedback on `:active` / pointer-down (`scale(0.97)`). Never defer visual feedback until network completion; use optimistic UI updates where safe. |
| **Direct Manipulation & 1:1 Tracking** | Sliders, patent document viewers, project kanbans, and interactive filters must track pointer position precisely. | Use Pointer Events with `setPointerCapture`. Account for grab offset rather than jumping to element center. |
| **Interruptibility** | Complex multi-step inventor workflows, slide-out drawer panels, and dropdown menus must never lock input during transitions. | Avoid CSS `@keyframes` on dynamic or rapidly-triggered elements. Use CSS transitions or Motion springs that animate from live presentation values (`getComputedStyle` / transform matrix). |
| **Behavior Over Animation (Springs)** | Physical interactions (drawer dismiss, card flick, filter reordering) must feel natural and velocity-aware. | Use critically damped springs (`damping: 1.0`, `response: 0.3-0.4s`) for standard UI. Reserve subtle bounce (`damping: 0.8`) strictly for momentum-based gesture releases. |
| **Spatial Consistency & Anchoring** | Context menus, filters, and tooltips must emerge predictably from their origin points. | Set `transform-origin: var(--transform-origin)` matching trigger coordinates. Drawers and slide-overs must enter and exit along the exact same path (e.g., enter right $\rightarrow$ exit right). |
| **Translucent Materials & Depth** | Navigation bars and floating action headers must maintain context without obscuring underlying content. | Implement `backdrop-filter: blur(12px)` with semi-transparent tinted backgrounds (`rgba(17, 24, 39, 0.75)`). Provide fallback solid backgrounds under `@media (prefers-reduced-transparency: reduce)`. |
| **Optical Typography** | Clean, highly legible typography across high-density patent data, pitch decks, and dashboard tables. | Apply size-dependent tracking (negative tracking on display headers `tracking-tight`, neutral/positive tracking on small captions `tracking-normal`). |
| **Sub-300ms UI Duration** | Professional enterprise platform feel with zero sluggishness. | Keep all dropdowns, tooltips, and popovers between 125ms and 200ms. Modals and drawers stay between 200ms and 300ms with strong ease-out curves (`cubic-bezier(0.23, 1, 0.32, 1)`). |
| **Never `scale(0)`** | Natural element appearance matching real-world physics. | All entry transitions start from `scale(0.95)` with `opacity: 0`. |
| **Frequency Gating** | Power users and daily visitors should never feel hindered by repetitive animations. | Global search palettes (⌘K) and keyboard-initiated actions have **zero** transition time (instant render). |

---

## 2. Preserving ASK INVENTORS Brand Identity

The Apple Design System provides **craft, physics, and interaction discipline**, but does NOT dictate ASK INVENTORS branding. The following pillars remain uniquely defined by ASK INVENTORS:

```text
               ┌────────────────────────────────────────────────────────┐
               │              ASK INVENTORS BRAND IDENTITY              │
               └────────────────────────────────────────────────────────┘
                                           │
           ┌───────────────────────────────┼───────────────────────────────┐
           ▼                               ▼                               ▼
  Visual & Color Identity         Information Architecture         Product Terminology
  • Deep Navy/Slate Slate Base    • Inventor Portfolio             • "Inventors", "Mentors",
  • Indigo/Electric Violet Accent • Patent Submission Pipeline       "Innovations", "Proposals"
  • Emerald/Teal Success Accents  • Mentorship & Review Board      • "Intellectual Property (IP)"
  • Clean Dark-First Glassmorphism• Collaboration Workspaces       • "Verification Stages"
```

1. **Brand Aesthetics**: Dark-mode primary enterprise palette with deep navy canvas (`#090d16`), rich slate cards (`#111827`), refined indigo accents (`#6366f1`), and crisp white typography.
2. **Product Terminology**: Strict adherence to inventor and patent ecosystem terms (*Inventions, Patents, Prior Art, Mentors, Investors, IP Protection*).
3. **Workflow Integrity**: Layouts structured specifically for high-information-density workflows, multi-document reviews, and milestone verification pipelines.

---

## 3. Design Token Architecture

The token system is structured in Tailwind CSS using CSS custom properties:

### 3.1. Color Tokens
```css
:root {
  /* Canvas & Backgrounds */
  --bg-canvas: #090d16;
  --bg-surface-primary: #111827;
  --bg-surface-secondary: #1e293b;
  --bg-surface-elevated: #334155;
  --bg-glass: rgba(17, 24, 39, 0.75);

  /* Borders & Dividers */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-muted: rgba(255, 255, 255, 0.15);
  --border-strong: rgba(255, 255, 255, 0.25);
  --border-focus: #6366f1;

  /* Typography Colors */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-inverse: #090d16;

  /* Brand Accents */
  --brand-primary: #6366f1;
  --brand-primary-hover: #4f46e5;
  --brand-glow: rgba(99, 102, 241, 0.25);

  /* Status Colors */
  --status-success: #10b981;
  --status-warning: #f59e0b;
  --status-error: #ef4444;
  --status-info: #3b82f6;
}
```

### 3.2. Typography Scale
- **Display (Hero / H1)**: `clamp(2rem, 4vw, 3.5rem)`, line-height `1.1`, letter-spacing `-0.025em`, font-weight `700`
- **H2 (Section Header)**: `1.75rem` (28px), line-height `1.2`, letter-spacing `-0.02em`, font-weight `600`
- **H3 (Card Header)**: `1.25rem` (20px), line-height `1.3`, letter-spacing `-0.015em`, font-weight `600`
- **Body Large**: `1.125rem` (18px), line-height `1.5`, letter-spacing `-0.01em`, font-weight `400`
- **Body Standard**: `1.0rem` (16px), line-height `1.5`, letter-spacing `0`, font-weight `400`
- **Body Small / Captions**: `0.875rem` (14px), line-height `1.4`, letter-spacing `0.01em`, font-weight `400 / 500`
- **Micro / Badge**: `0.75rem` (12px), line-height `1.3`, letter-spacing `0.02em`, font-weight `600`

### 3.3. Spacing & Radius Tokens
- **Spacing scale**: Standard 4px base (`4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px`).
- **Radius scale**:
  - `radius-sm`: `6px` (badges, micro tags)
  - `radius-md`: `10px` (inputs, buttons, dropdown items)
  - `radius-lg`: `16px` (cards, modal panels, dialogs)
  - `radius-xl`: `24px` (large containers, floating command panels)
  - `radius-full`: `9999px` (pills, avatars)

### 3.4. Easing & Timing Tokens
```css
:root {
  --ease-out-snappy: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out-smooth: cubic-bezier(0.77, 0, 0.175, 1);
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);

  --duration-instant: 100ms;
  --duration-fast: 160ms;
  --duration-normal: 220ms;
  --duration-slow: 300ms;
}
```

---

## 4. Reusable Component Strategy

| Component | Purpose | Variants | Interaction States | Accessibility Requirements | Responsive Behavior |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Button** | Primary action trigger across inventor actions | Primary (Indigo), Secondary (Slate Outline), Ghost, Destructive | Default, Hover (`brightness-110`), Active (`scale(0.97)`), Focus-Visible, Disabled, Loading (Spinner + aria-busy) | Full keyboard navigation (`Enter`/`Space`), explicit `aria-label` for icon buttons, minimum $44 \times 44\text{px}$ touch target on mobile | Full width on mobile stacked forms, auto width on tablet/desktop |
| **Input & Form** | Data collection (Patent details, OTP, Bio) | Text, Number, Textarea, OTP Pin, Search, Select | Default, Hover, Focus (`ring-2 ring-indigo-500`), Error (Red border + inline message), Disabled | Explicit `<label>` mapping with `htmlFor`, `aria-invalid`, `aria-describedby` for error messages | 16px minimum font size on iOS to prevent browser zoom |
| **Card** | Content container (Project cards, Inventor profile summary) | Elevated, Bordered, Interactive (Clickable) | Default, Hover (`border-slate-700 bg-slate-900/80 -translate-y-0.5`), Active | Semantic `<article>` or `<li>`, keyboard accessible if interactive | Grid column reflow: 1 col (mobile) $\rightarrow$ 2 col (tablet) $\rightarrow$ 3/4 col (desktop) |
| **Modal / Dialog** | High-focus task completion (Confirmations, IP disclosures) | Standard Modal, Fullscreen Takeover, Destructive Alert | Enter (`opacity: 0, scale(0.95)` $\rightarrow$ `opacity: 1, scale(1)` over 200ms `ease-out`), Exit | Focus trap (`focus-trap-react` / Base UI), `aria-modal="true"`, `role="dialog"`, `Escape` key dismissal | Centered floating modal on desktop; bottom sheet on mobile devices |
| **Sheet / Drawer** | Auxiliary workflows (Filters, Project history, Comments) | Right Slide-Over, Bottom Sheet | Enter (`translateX/Y(100%)` $\rightarrow$ `0`), Exit along same path | Focus management, outside click backdrop dismissal, swipe-to-dismiss gesture | Bottom sheet on mobile; right-anchored side drawer on desktop |
| **Toast / Alert** | Non-blocking transactional notifications | Success, Error, Warning, Info | Enter (`translateY(-100%)` / `@starting-style`), Stack hover expand, Exit | `role="status"`, `aria-live="polite"`, dismissible via button or swipe | Top-right on desktop; top-center or bottom-center on mobile |
| **Table** | Data-dense views (Patent listings, Mentorship requests) | Standard, Compact, Striped | Row hover (`bg-slate-800/40`), Sort indicator toggle | Semantic `<table>`, `<th>` with `aria-sort`, scrollable container with keyboard focus | Horizontal scroll container on mobile with sticky first column |
| **Tabs** | View switching (e.g. Overview, Documents, Milestones) | Underline, Pill Segmented | Active state with layout transition or clipped overlay | `role="tablist"`, `role="tab"`, `role="tabpanel"`, arrow key navigation | Scrollable horizontal tab bar on mobile without wrapping |

---

## 5. Responsive Engineering Guidelines

```text
Mobile (< 640px)
• Single column layouts
• Bottom sheets for modals and filters
• 44px minimum touch targets
• Sticky bottom action bars

Tablet (640px - 1023px)
• 2-column dashboard grids
• Slide-out navigation drawers
• Adaptive split-views

Desktop & Large (1024px+)
• Multi-column dashboards (Sidebar + Content + Context Panel)
• Hover tooltips and rich popovers
• High information density with refined micro-spacing
```

- **Touch vs Pointer Gating**:
  All hover effects and transforms must be gated behind:
  ```css
  @media (hover: hover) and (pointer: fine) {
    .interactive-card:hover {
      transform: translateY(-2px);
    }
  }
  ```
- **Viewport Fluidity**: Spacing and display headings utilize CSS `clamp()` to scale seamlessly across 320px mobile screens to 4K ultra-wide monitors.

---

## 6. Accessibility & Motion Requirements

### 6.1. Mandatory Accessibility Engineering Rules
1. **Semantic Hierarchy**: Exactly one `<h1>` per page, strictly ordered headings (`<h2>` $\rightarrow$ `<h3>`).
2. **Focus Management**: Clear, high-contrast focus rings (`focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none`). Focus must be trapped inside active modals and restored to the trigger element upon dismissal.
3. **Touch Targets**: Minimum touch target size of $44 \times 44\text{px}$ on touchscreen devices.
4. **Color Contrast**: Text and interactive elements must maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (WCAG 2.1 AA standard).
5. **Form Error Accessibility**: Inline validation messages linked via `aria-describedby` with `aria-invalid="true"`.

### 6.2. Motion & Accessibility Safeguards
```css
/* Prefers Reduced Motion: Convert spatial motion to subtle cross-fades */
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .animate-motion-safe {
    transition: opacity 150ms ease !important;
    transform: none !important;
  }
}

/* Prefers Reduced Transparency: Solidify glass surfaces */
@media (prefers-reduced-transparency: reduce) {
  .glass-panel, .glass-panel-subtle {
    background: #111827 !important;
    backdrop-filter: none !important;
  }
}
```

---

## 7. Motion & Interaction Matrix

| Interaction | Purpose | Recommended Tool | Curve / Spring | Duration | Frequency Tier |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Button Press** | Immediate feedback | CSS Transition | `ease-out` | 120ms | High / Moderate |
| **Command Palette (⌘K)** | Quick navigation | Instant (No motion) | N/A | 0ms | High (100+/day) |
| **Dropdown / Popover** | Reveal contextual options | CSS Transition / WAAPI | `cubic-bezier(0.23, 1, 0.32, 1)` | 160ms | Moderate |
| **Modal Dialog** | Focus on critical task | Motion / CSS | `cubic-bezier(0.23, 1, 0.32, 1)` | 220ms | Occasional |
| **Slide-over Sheet** | Auxiliary workflow | Motion (Spring) / CSS | `damping: 1.0, response: 0.3s` | ~250ms | Occasional |
| **Toast Notification** | Transaction feedback | Sonner / CSS | `ease-out` | 240ms | Occasional |
| **Milestone Success** | Milestone celebration | Motion Spring | `damping: 0.8, bounce: 0.2` | 400ms | Rare (Delight Budget) |
