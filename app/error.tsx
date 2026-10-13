"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors
    console.error("[Application Error]", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-[#fbfbfd]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-600 shadow-sm">
        <AlertTriangle className="h-7 w-7" />
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#1d1d1f]">Something went wrong</h1>
      <p className="mt-2 max-w-md text-sm text-[#424245]">
        {error.message || "An unexpected error occurred while processing your request."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 btn-primary"
      >
        <RefreshCw className="h-4 w-4" /> Try Again
      </button>
    </div>
  );
}
