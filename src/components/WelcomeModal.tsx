"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only show once — never again after dismissed
    if (localStorage.getItem("waviboy-welcome-seen")) return;
    const timer = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem("waviboy-welcome-seen", "1");
    setOpen(false);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          onClick={dismiss}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl overflow-hidden">
              {/* Logo area */}
              <div className="flex items-center justify-center py-12 border-b border-[#111]">
                <img
                  src="/waviboy-logo.png"
                  alt="Waviboy"
                  className="h-24 w-auto drop-shadow-[0_0_24px_rgba(255,255,255,0.15)]"
                />
              </div>

              {/* Content */}
              <div className="px-8 pt-8 pb-6">
                <p className="text-[10px] font-mono tracking-[0.3em] text-[#555] uppercase mb-4">
                  Built with Waviboy
                </p>

                <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#e8e8e8] leading-[1.3] mb-4">
                  This dashboard was generated with AI.
                </h2>

                <p className="text-[14px] text-[#888] leading-[1.7] mb-3">
                  Want to build tools like this, create premium AI visuals, and charge high-end rates?
                </p>

                <p className="text-[14px] text-[#666] leading-[1.7] mb-8">
                  The Waviboy Academy teaches taste, tools, and business. Not slop. Not templates. The real system behind creating work that looks like it cost 10x what it did.
                </p>

                {/* What you learn */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { label: "Taste", desc: "Visual mastery" },
                    { label: "Tools", desc: "AI production" },
                    { label: "Business", desc: "Premium rates" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="text-center py-4 px-2 border border-[#1a1a1a] rounded-lg"
                    >
                      <div className="text-[13px] font-semibold text-[#e8e8e8] mb-1">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-[#555] font-mono tracking-[0.05em]">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://learn.waviboy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3.5 bg-[#e8e8e8] text-[#0a0a0a] text-[12px] font-semibold tracking-[0.1em] uppercase rounded-lg hover:bg-white transition-colors duration-300"
                >
                  Learn More
                </a>

                <button
                  onClick={dismiss}
                  className="block w-full text-center py-3 mt-3 text-[12px] text-[#444] hover:text-[#888] font-mono tracking-[0.05em] transition-colors duration-300"
                >
                  Skip
                </button>
              </div>

              {/* Bottom bar */}
              <div className="px-8 py-4 border-t border-[#111] flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#333] uppercase">
                  @bywaviboy
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
