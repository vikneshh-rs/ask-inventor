# ASK INVENTORS

Production-grade platform designed for inventors, innovators, patents, mentorship, and project development.

---

## 1. Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI & Logic**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database & Storage**: [Supabase PostgreSQL](https://supabase.com/) with Row Level Security (RLS) & Supabase Storage
- **Transactional Email**: [Resend](https://resend.com/) (Domain: `askinventors.in`)
- **Icons**: Lucide React
- **Validation**: Zod

---

## 2. Project Architecture & Directory Structure

```text
ask-inventors/
├── app/                  # Next.js App Router (pages, layouts, error boundaries)
│   ├── globals.css       # Tailwind CSS & design tokens
│   ├── layout.tsx        # Root HTML layout with Inter font & metadata
│   ├── page.tsx          # Foundation status dashboard
│   ├── not-found.tsx     # 404 handler
│   ├── error.tsx         # Client error boundary
│   └── loading.tsx       # Loading state
├── components/           # Reusable UI & domain components
│   └── ui/               # Base primitives
├── lib/                  # Core libraries & integrations
│   ├── supabase/         # Isolated Supabase client layers
│   │   ├── client.ts     # Browser client (Anon key)
│   │   ├── server.ts     # Server client (SSR / Cookies)
│   │   ├── admin.ts      # Privileged Admin client (Service Role - Server Only)
│   │   └── types.ts      # Database typings
│   ├── email/            # Centralized Email Service abstraction
│   │   ├── client.ts     # Resend client factory
│   │   ├── service.ts    # Centralized EmailService wrapper
│   │   └── types.ts      # Email payload typings
│   ├── errors/           # Standardized error hierarchy
│   ├── logger/           # Structured application logger
│   └── utils/            # General utilities
├── services/             # Business service layers (to be added per sprint)
├── types/                # Shared TypeScript definitions
├── hooks/                # Custom React hooks
├── config/               # Global site & environment configurations
├── supabase/             # Database versioning
│   ├── config.toml       # Supabase CLI configuration
│   ├── migrations/       # Versioned SQL migration files
│   └── seed.sql          # Development seed data
├── docs/                 # Architectural documentation & issues log
│   └── ARCHITECTURE_ISSUES.md
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore configuration
└── package.json          # Dependency manifest
```

---

## 3. Environment Variables

Create a `.env.local` file in the project root by copying `.env.example`:

```bash
cp .env.example .env.local
```

### Required Variables:

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Supabase (Public / Client-accessible)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key

# Supabase (Server-only Privileged Access - NEVER expose to browser)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Resend (Server-only)
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=noreply@askinventors.in
```

> [!WARNING]
> Never commit `.env` or `.env.local` files containing production secrets to version control.

---

## 4. Local Development Setup

### Prerequisites
- **Node.js**: v18+ (v20+ or v24+ recommended)
- **npm** or **pnpm** / **yarn**

### Installation

```bash
# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Retrieve your **Project URL**, **Anon Key**, and **Service Role Key** from `Project Settings > API`.
3. Add the keys to `.env.local`.
4. Apply migrations:
   ```bash
   # Using Supabase CLI
   npx supabase db push
   ```

---

## 6. Resend Email Setup

1. Create a Resend account at [resend.com](https://resend.com).
2. Verify the `askinventors.in` domain in the Resend dashboard.
3. Generate an API key and assign it to `RESEND_API_KEY` in `.env.local`.
4. All email dispatching must be routed through `EmailService.send(...)` in `lib/email/service.ts`.

---

## 7. Development Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` |
| `npm run build` | Builds the optimized production application |
| `npm run start` | Starts the production server after build |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |
| `npm run typecheck` | Validates all TypeScript types with `tsc --noEmit` |

---

## 8. Security Principles

1. **Client/Server Isolation**: `SUPABASE_SERVICE_ROLE_KEY` and `RESEND_API_KEY` are strictly guarded against client-side execution.
2. **Row Level Security (RLS)**: All database access will strictly enforce PostgreSQL RLS policies.
3. **Decoupled Architecture**: Domain features interact through dedicated service abstractions rather than directly coupling to external third-party SDKs.
