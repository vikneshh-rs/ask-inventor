# ASK INVENTORS — Architecture & Specification Issues Log

## Initial Repository Audit (Phase 0)

| Timestamp | Item | Severity | Resolution / Note |
| :--- | :--- | :--- | :--- |
| 2026-09-24 | Initial Workspace State | Info | The workspace was initialized from a clean directory (`/ask`). No legacy conflicting documentation files (`PRODUCT_PRD.md`, `TECHNICAL_PRD.md`, etc.) existed. Base specifications from the Master Initialization Brief serve as the definitive source of truth. |
| 2026-09-24 | Email Domain Specification | Info | Domain specified as `askinventors.in`. Standard default sender is set to `noreply@askinventors.in` via `RESEND_FROM_EMAIL` environment variable. |
| 2026-09-24 | Authentication Credential Model | Info | Confirmed architecture: Mobile number is the primary login identifier; Email is used for communication/OTP delivery; Password is the authentication credential. Implementation deferred to Sprint 1. |
| 2026-09-24 | Design Skills Integration | Info | Apple Design System and Emil Kowalski Design Engineering skills audited and mapped for web. Native-only patterns (Swift/Expo) rejected; web-compatible interaction, typography, and motion discipline adopted without overriding product identity. |

## Open Conflicts

No architectural conflicts currently detected.
