import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-950/40 text-rose-400">
        <AlertCircle className="h-7 w-7" />
      </div>
      <h1 className="mt-6 text-3xl font-bold text-slate-100">404 — Page Not Found</h1>
      <p className="mt-2 text-sm text-slate-400">
        The requested resource could not be located on ASK INVENTORS.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-700"
      >
        <ArrowLeft className="h-4 w-4" /> Return Home
      </Link>
    </div>
  );
}
