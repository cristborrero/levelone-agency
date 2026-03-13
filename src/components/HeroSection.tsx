"use client";

import { motion } from "framer-motion";

const LINE_ANIMATION = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-brand-black-deep pb-16 pt-20 lg:pb-24">
      {/* ─── Background Grid Lines ─── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Vertical lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.15, duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 h-full w-[1px] origin-top bg-brand-grey-900/30"
            style={{ left: `${(i + 1) * (100 / 7)}%` }}
          />
        ))}
        {/* Horizontal accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-1/2 left-0 h-[1px] w-full origin-left bg-brand-accent/10"
        />
      </div>

      {/* ─── Accent Glow Orb ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        {/* ─── Overline ─── */}
        <motion.div
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-[1px] w-12 bg-brand-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-accent">
            Digital Agency — UK
          </span>
        </motion.div>

        {/* ─── Main Headline ─── */}
        <h1 className="mb-8 max-w-5xl">
          {["ELEVATE.", "EXECUTE.", "DOMINATE."].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <motion.span
                custom={i}
                initial="hidden"
                animate="visible"
                variants={LINE_ANIMATION}
                className="block font-display text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.95] tracking-[-0.03em] text-brand-white"
              >
                {i === 2 ? (
                  <span className="text-brand-accent">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* ─── Subheadline ─── */}
        <motion.p
          custom={0.9}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="mb-12 max-w-xl font-body text-lg leading-relaxed text-brand-grey-300"
        >
          Premium websites, brands, and content for ambitious UK businesses —
          engineered to convert, built to scale.
        </motion.p>

        {/* ─── CTAs ─── */}
        <motion.div
          custom={1.1}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="flex flex-wrap items-center gap-6"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 bg-brand-accent px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-brand-black transition-all duration-300 hover:shadow-[0_0_60px_rgba(212,255,0,0.2)]"
          >
            Start a Project
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="square"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 border-b border-brand-grey-700 pb-1 font-body text-sm font-medium text-brand-grey-300 transition-all duration-300 hover:border-brand-white hover:text-brand-white"
          >
            View Our Work
          </a>
        </motion.div>

        {/* ─── Bottom Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20 flex flex-wrap items-center gap-8 border-t border-brand-grey-900/50 pt-8 lg:mt-26 lg:gap-16"
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24h", label: "Response Time" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3">
              <span className="font-display text-2xl font-bold text-brand-accent">
                {stat.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-brand-grey-500">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-500">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-brand-grey-700" />
        </motion.div>
      </motion.div>
    </section>
  );
}
