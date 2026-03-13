"use client";

import { motion } from "framer-motion";

interface Differentiator {
  icon: string;
  title: string;
  description: string;
}

const STATS = [
  { value: "50+", label: "Projects Shipped" },
  { value: "12", label: "Industries Served" },
  { value: "8wk", label: "Avg. Delivery Time" },
  { value: "100%", label: "UK-Based Team" },
];

const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: "⚡",
    title: "AI-Native Workflows",
    description:
      "We don't bolt AI on as an afterthought. It's woven into every phase — research, design, development, and delivery.",
  },
  {
    icon: "◼",
    title: "No Template Culture",
    description:
      "Every project starts from zero. No templates, no recycled layouts. Your brand deserves original thinking.",
  },
  {
    icon: "↗",
    title: "Ownership Mentality",
    description:
      "We treat your metrics like our own. If a launch doesn't perform, we stay until it does.",
  },
  {
    icon: "◻",
    title: "One Team, Full Stack",
    description:
      "Strategy, design, code, content, motion — all under one roof. No sub-contracting, no excuses.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-brand-black-deep py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* ─── Top: Philosophy ─── */}
        <div className="mb-20 grid grid-cols-1 gap-12 lg:mb-24 lg:grid-cols-2 lg:gap-20">
          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-brand-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-accent">
                About Levelone
              </span>
            </div>
            <h2 className="mb-8 font-display text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[1.05] tracking-[-0.03em] text-brand-white">
              WE DON&apos;T BUILD
              <br />
              WEBSITES.
              <br />
              <span className="text-brand-accent">WE BUILD EDGES.</span>
            </h2>
            <p className="max-w-lg font-body text-base leading-relaxed text-brand-grey-300">
              Levelone is a UK-based digital agency for mid-market
              businesses that have outgrown their current digital presence. We
              combine sharp design, modern engineering, and AI-powered workflows
              to deliver work that competes with — and often surpasses — what
              top-tier London agencies produce.
            </p>
          </motion.div>

          {/* Right: Values list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex flex-col justify-end"
          >
            <div className="space-y-6 border-l border-brand-grey-900/50 pl-8">
              {[
                {
                  name: "Precision",
                  desc: "Every pixel, every line of code has a purpose.",
                },
                {
                  name: "Audacity",
                  desc: "We propose what others don't dare.",
                },
                {
                  name: "Velocity",
                  desc: "Speed without sacrificing quality.",
                },
                {
                  name: "Ownership",
                  desc: "Your results are our results.",
                },
                {
                  name: "Evolution",
                  desc: "We reinvent before the market asks us to.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + index * 0.08,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="group"
                >
                  <h4 className="mb-1 font-display text-sm font-bold uppercase tracking-[0.08em] text-brand-white transition-colors duration-300 group-hover:text-brand-accent">
                    {value.name}
                  </h4>
                  <p className="font-body text-sm text-brand-grey-500">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-20 grid grid-cols-2 gap-[1px] bg-brand-grey-900/20 lg:mb-24 lg:grid-cols-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-brand-black-deep p-8 text-center lg:p-10"
            >
              <span className="mb-2 block font-display text-3xl font-black text-brand-accent lg:text-4xl">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-brand-grey-500">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Differentiators Grid ─── */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12 font-display text-xl font-bold uppercase tracking-[-0.02em] text-brand-white lg:text-2xl"
          >
            Why Levelone
          </motion.h3>

          <div className="grid grid-cols-1 gap-[1px] bg-brand-grey-900/20 md:grid-cols-2">
            {DIFFERENTIATORS.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative bg-brand-black-deep p-8 transition-colors duration-500 hover:bg-brand-black-mid lg:p-10"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100" />

                <span className="mb-4 block text-2xl">{diff.icon}</span>
                <h4 className="mb-3 font-display text-base font-bold uppercase tracking-[-0.01em] text-brand-white lg:text-lg">
                  {diff.title}
                </h4>
                <p className="font-body text-sm leading-relaxed text-brand-grey-300">
                  {diff.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
