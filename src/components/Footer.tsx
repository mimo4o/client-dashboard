"use client";

import { PROJECT } from "@/lib/project-data";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-accent" />
          <span className="text-[13px] text-text-muted">
            {PROJECT.client.name} × {PROJECT.studio.name}
          </span>
        </div>
        <div className="text-[12px] text-text-muted font-mono">
          Confidential · Prepared {new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className="text-[12px] text-text-muted">
          This proposal is valid for 30 days.
        </div>
      </div>
    </footer>
  );
}
