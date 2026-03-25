"use client";

import { ScrollReveal } from "./ScrollReveal";

export function ImageBreak({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <ScrollReveal variant="scaleIn" className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-bg/20" />
          {caption && (
            <div className="absolute bottom-5 right-5">
              <span className="text-[10px] font-mono tracking-[0.15em] text-white/60 uppercase">
                {caption}
              </span>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
