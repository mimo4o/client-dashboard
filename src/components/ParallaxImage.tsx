"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ParallaxImage({
  src,
  alt,
  caption,
  className = "",
  speed = 0.15,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/20 pointer-events-none" />
      {caption && (
        <div className="absolute bottom-4 left-4">
          <span className="text-[10px] font-mono tracking-[0.15em] text-white/50 uppercase bg-bg/40 backdrop-blur-sm px-3 py-1 rounded-full">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}
