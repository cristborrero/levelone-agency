"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
  duration: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "We learn your business, goals, and audience — then ask the hard questions.",
    duration: "Week 1",
  },
  {
    number: "02",
    title: "STRATEGY",
    description:
      "Scope, architecture, tech stack, and KPIs — locked before a single pixel moves.",
    duration: "Week 2",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "High-fidelity concepts you approve before we write a line of code.",
    duration: "Weeks 3–4",
  },
  {
    number: "04",
    title: "BUILD",
    description:
      "Clean code, modern frameworks, performance-first — fast without shortcuts.",
    duration: "Weeks 4–7",
  },
  {
    number: "05",
    title: "LAUNCH & GROW",
    description:
      "Deployment, QA, analytics, and handover — then ongoing support to keep momentum.",
    duration: "Week 8+",
  },
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-brand-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 lg:mb-20"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-brand-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-accent">
              How We Work
            </span>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[1] tracking-[-0.03em] text-brand-white">
              OUR PROCESS
            </h2>
            <p className="max-w-md font-body text-base leading-relaxed text-brand-grey-300 lg:text-right">
              Five phases. Zero ambiguity. From first call to live launch in as
              little as 8 weeks.
            </p>
          </div>
        </motion.div>

        {/* ─── Desktop Horizontal Timeline ─── */}
        <div ref={containerRef} className="hidden lg:block">
          {/* Progress line */}
          <div className="relative mb-12 h-[2px] w-full bg-brand-grey-900/40">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              }}
              className="absolute inset-y-0 left-0 origin-left bg-brand-accent"
              style={{ width: "100%" }}
            />

            {/* Step dots */}
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{
                  delay: 0.5 + index * 0.2,
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute top-1/2 -translate-y-1/2"
                style={{ left: `${index * 25}%` }}
              >
                <div className="flex h-4 w-4 items-center justify-center bg-brand-accent">
                  <div className="h-1.5 w-1.5 bg-brand-black" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-5 gap-[1px]">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  delay: 0.6 + index * 0.15,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group border-l border-brand-grey-900/40 py-2 pl-6 pr-4 first:border-l-0 first:pl-0"
              >
                <span className="mb-3 block font-mono text-xs tracking-[0.15em] text-brand-accent">
                  {step.number}
                </span>
                <h3 className="mb-3 font-display text-lg font-bold uppercase tracking-[-0.02em] text-brand-white">
                  {step.title}
                </h3>
                <p className="mb-4 font-body text-sm leading-relaxed text-brand-grey-300">
                  {step.description}
                </p>
                <span className="inline-block border border-brand-grey-700/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand-grey-500">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── Mobile Vertical Timeline ─── */}
        <div className="lg:hidden">
          <div className="relative border-l-[2px] border-brand-grey-900/40 pl-8">
            {/* Animated vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute bottom-0 left-[-1px] top-0 w-[2px] origin-top bg-brand-accent"
            />

            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative mb-12 last:mb-0"
              >
                {/* Dot */}
                <div className="absolute -left-[calc(2rem+5px)] top-0 flex h-4 w-4 items-center justify-center bg-brand-accent">
                  <div className="h-1.5 w-1.5 bg-brand-black" />
                </div>

                <span className="mb-2 block font-mono text-xs tracking-[0.15em] text-brand-accent">
                  {step.number}
                </span>
                <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-[-0.02em] text-brand-white">
                  {step.title}
                </h3>
                <p className="mb-3 font-body text-sm leading-relaxed text-brand-grey-300">
                  {step.description}
                </p>
                <span className="inline-block border border-brand-grey-700/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand-grey-500">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
