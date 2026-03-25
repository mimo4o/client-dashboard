"use client";

export function SectionLabel({ label, number }: { label: string; number: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[10px] font-mono tracking-[0.3em] text-accent/60 uppercase">
        {number}
      </span>
      <div className="w-6 h-px bg-text-muted/30" />
      <span className="text-[10px] font-mono tracking-[0.3em] text-text-muted uppercase">
        {label}
      </span>
    </div>
  );
}
