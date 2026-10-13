import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-[#fbfbfd]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-200 bg-rose-50 text-rose-600 shadow-sm">
        <AlertCircle className="h-7 w-7" />
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#1d1d1f]">404 — Page Not Found</h1>
      <p className="mt-2 text-sm text-[#424245]">
        The requested resource could not be located on ASK INVENTORS.
      </p>
      <Link
        href="/"
        className="mt-6 btn-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Return Home
      </Link>
    </div>
  );
}
