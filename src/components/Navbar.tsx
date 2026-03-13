"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-brand-black/90 backdrop-blur-md border-b border-brand-grey-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            {/* ─── Logo ─── */}
            <a href="/" className="group relative flex items-center">
              <img
                src="/logo.svg"
                alt="Levelone Agency"
                className="h-4 w-auto lg:h-5"
              />
              {/* Accent underline on hover */}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-400 group-hover:w-full" />
            </a>

            {/* ─── Desktop Nav ─── */}
            <div className="hidden items-center gap-10 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative font-body text-sm font-medium uppercase tracking-[0.08em] text-brand-grey-300 transition-colors duration-300 hover:text-brand-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              {/* CTA */}
              <a
                href="#contact"
                className="border border-brand-accent bg-transparent px-6 py-2.5 font-display text-xs font-bold uppercase tracking-[0.15em] text-brand-accent transition-all duration-300 hover:bg-brand-accent hover:text-brand-black hover:shadow-[0_0_40px_rgba(212,255,0,0.15)]"
              >
                Start a Project
              </a>
            </div>

            {/* ─── Mobile Toggle ─── */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: isMobileOpen ? 45 : 0,
                  y: isMobileOpen ? 8 : 0,
                }}
                className="block h-[2px] w-6 bg-brand-white"
              />
              <motion.span
                animate={{ opacity: isMobileOpen ? 0 : 1 }}
                className="block h-[2px] w-6 bg-brand-white"
              />
              <motion.span
                animate={{
                  rotate: isMobileOpen ? -45 : 0,
                  y: isMobileOpen ? -8 : 0,
                }}
                className="block h-[2px] w-6 bg-brand-white"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ─── Mobile Menu Fullscreen ─── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center bg-brand-black-deep px-10 md:hidden"
          >
            <div className="space-y-8">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="block font-display text-5xl font-black uppercase tracking-tight text-brand-white transition-colors duration-200 hover:text-brand-accent"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-14 border border-brand-accent px-8 py-3 font-display text-sm font-bold uppercase tracking-[0.15em] text-brand-accent transition-all duration-300 hover:bg-brand-accent hover:text-brand-black"
            >
              Start a Project
            </motion.a>

            {/* Decorative accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-16 left-10 right-10 h-[1px] origin-left bg-brand-grey-700"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-10 font-mono text-xs tracking-wide text-brand-grey-500"
            >
              © 2026 Levelone Agency Ltd
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
