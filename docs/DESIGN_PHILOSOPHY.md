# ASK INVENTORS — Design Philosophy & Tenets

This document defines the core design philosophy, foundational tenets, and product craft standards governing all user interface and experience engineering for **ASK INVENTORS**.

---

## 1. Core Vision

**ASK INVENTORS** is the premier platform connecting visionary creators, intellectual property innovators, patents, academic mentors, and investors. Because inventors entrust us with high-value ideas and sensitive intellectual property, our user interface must exude **precision, undeniable competence, unwavering reliability, and visual elegance**.

Our design standard is that every screen, micro-interaction, and data presentation reflects the seriousness and ambition of the inventors who use it.

---

## 2. The Ten Design Tenets

```text
┌────────────────────────────────────────────────────────────────────────┐
│                      ASK INVENTORS DESIGN TENETS                       │
└────────────────────────────────────────────────────────────────────────┘
  1. Clarity          2. Hierarchy       3. Simplicity      4. Precision
  5. Consistency      6. Accessibility   7. Responsiveness  8. Meaningful Motion
                      9. Trust           10. Professionalism
```

### 1. Clarity
- **Direct & Unambiguous**: Information must be immediately legible and comprehended at a glance. Avoid vague jargon, obscured controls, or decorative elements that compete with content.
- **Wayfinding**: Every screen answers four fundamental questions instantly:
  - *Where am I?*
  - *What is the state of my project / patent / collaboration?*
  - *What action can I take next?*
  - *How do I navigate back safely?*

### 2. Hierarchy
- **Visual Weight Reflects Importance**: Use typography scale, contrast, weight, and depth to direct user attention logically.
- **Intentional Focal Points**: Primary actions (e.g., "Submit Patent Proposal", "Approve Milestone") stand out distinctively from secondary and destructive actions.

### 3. Simplicity (Not Blind Minimalism)
- **Fewer Steps, Better Context**: Simplicity means stripping friction, not hiding essential tools inside nested menus.
- **Progressive Disclosure**: Show the primary workflow clearly, placing deep technical configurations or advanced filters one intuitive layer deeper.

### 4. Precision
- **Defensible Decisions**: No margin, padding, color value, or animation timing is arbitrary. Every measurement belongs to an approved token scale.
- **Pixel Perfection**: Clean alignment, razor-sharp borders, zero layout shift, and disciplined typography tracking across all viewports.

### 5. Consistency
- **Predictable Behavior**: Elements that look identical must behave identically. If a card opens a drawer on one page, a matching card cannot navigate to an external page without explicit visual distinction.
- **Pattern Cohesion**: Universal patterns for filtering, searching, modal confirmations, and status indicators across all modules.

### 6. Accessibility
- **Inclusive by Default**: Accessibility is a fundamental engineering requirement, not an afterthought.
- **Full Compliance**: Strict adherence to WCAG 2.1 AA standards — keyboard navigable workflows, robust screen reader semantics, high-contrast text ratios, and full support for reduced-motion/reduced-transparency system preferences.

### 7. Responsiveness
- **Adaptive Layouts**: Fluid and responsive from mobile phones to multi-monitor desktop setups.
- **Platform-Conscious**: Touch targets are sized for fingers on mobile ($44 \times 44\text{px}$ minimum) and refined for high-precision cursor control on desktop.

### 8. Meaningful Motion
- **Physics with Purpose**: Motion exists to provide feedback, preserve spatial awareness, and prevent jarring transitions — never for pure decoration.
- **Sub-300ms Discipline**: UI interactions remain snappy, responsive, and interruptible. High-frequency actions (command palettes, keyboard shortcuts) are instant.

### 9. Trust & Safety
- **Clear Status & Forgiveness**: Destructive actions require clear confirmation; routine slips provide straightforward undo mechanisms.
- **Data Protection Transparency**: Explicit visual indicators when handling confidential patent data, draft IP disclosures, or private mentorship reviews.

### 10. Professionalism
- **Enterprise-Grade Craft**: A modern, sleek dark aesthetic with restrained glassmorphic depth, refined typography, and purposeful data visualizations that inspire confidence among inventors and enterprise partners alike.
