export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fbfbfd]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#0071e3] border-t-transparent" />
        <span className="text-xs font-medium text-[#6e6e73]">Loading ASK INVENTORS...</span>
      </div>
    </div>
  );
}
