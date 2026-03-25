"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT } from "@/lib/project-data";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Timeline", href: "#timeline" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Scope", href: "#scope" },
  { label: "Investment", href: "#investment" },
];

export function Navigation() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = NAV_ITEMS.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { id: item.href, top: 0 };
        return { id: item.href, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce((closest, section) => {
        if (section.top <= 200 && section.top > closest.top) return section;
        return closest;
      }, { id: "", top: -Infinity });

      setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-border"
        >
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <span className="text-[12px] font-mono tracking-[0.15em] text-text-muted uppercase">
              {PROJECT.client.name} <span className="text-text-muted/30">×</span> {PROJECT.studio.name}
            </span>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-[11px] font-mono tracking-[0.05em] uppercase transition-all duration-300 ${
                    active === item.href
                      ? "text-accent"
                      : "text-text-muted hover:text-text-secondary"
                  }`}
                  onClick={() => setActive(item.href)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#investment"
              className="hidden md:block text-[11px] font-mono tracking-[0.1em] uppercase text-bg bg-accent px-5 py-2 hover:bg-accent/90 transition-colors"
            >
              Approve
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="space-y-1.5">
                <div className={`w-5 h-px bg-text-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                <div className={`w-5 h-px bg-text-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <div className={`w-5 h-px bg-text-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
              </div>
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-border overflow-hidden"
              >
                <div className="p-4 space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-[12px] font-mono text-text-secondary hover:text-text-primary uppercase tracking-[0.1em]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
