"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  color: string;
  span: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Meridian Finance",
    category: "Web Design & Development",
    year: "2026",
    description:
      "Full digital transformation for a London-based fintech — headless CMS, real-time dashboards, and a brand identity that commands trust.",
    tags: ["Next.js", "Supabase", "Branding"],
    color: "#D4FF00",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "02",
    title: "Volta Energy",
    category: "Branding & Motion",
    year: "2025",
    description:
      "Complete visual overhaul for sustainable energy startup. Logo system, motion toolkit, and launch campaign.",
    tags: ["Identity", "Motion Graphics", "Social"],
    color: "#3B82F6",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "03",
    title: "Archway Studios",
    category: "Social Media",
    year: "2025",
    description:
      "Content strategy and production pipeline for a creative co-working space across 4 platforms.",
    tags: ["Strategy", "Content", "Paid Ads"],
    color: "#00D47E",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "04",
    title: "NovaTech AI",
    category: "Web App & AI",
    year: "2026",
    description:
      "AI-powered customer support platform with real-time analytics — from prototype to production in 8 weeks.",
    tags: ["React", "AI/ML", "Dashboard"],
    color: "#FFB800",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: "05",
    title: "Borough Market Films",
    category: "Video Production",
    year: "2025",
    description:
      "Documentary-style brand film series for London's most iconic food market. 2.4M organic views across campaigns.",
    tags: ["Brand Film", "Editing", "Distribution"],
    color: "#FF3B3B",
    span: "md:col-span-2 md:row-span-1",
  },
];

export function WorkSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="work" className="relative bg-brand-black-deep py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 flex flex-col gap-4 lg:mb-20 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-brand-accent" />
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-accent">
                Selected Work
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[1] tracking-[-0.03em] text-brand-white">
              CASE STUDIES
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 font-body text-sm font-medium text-brand-grey-300 transition-colors duration-300 hover:text-brand-white"
          >
            View all projects
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="square" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* ─── Asymmetric Grid ─── */}
        <div className="grid auto-rows-[240px] grid-cols-1 gap-[1px] bg-brand-grey-900/20 md:grid-cols-3 md:auto-rows-[200px]">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative cursor-pointer overflow-hidden bg-brand-black p-8 transition-all duration-500 lg:p-10 ${project.span}`}
            >
              {/* Colored top line */}
              <div
                className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{ backgroundColor: project.color }}
              />

              {/* Background glow on hover */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at 80% 80%, ${project.color}08 0%, transparent 60%)`,
                    }}
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  {/* Meta row */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.15em] text-brand-grey-700 transition-colors duration-300 group-hover:text-brand-grey-300">
                      {project.id}
                    </span>
                    <span className="font-mono text-xs tracking-[0.08em] text-brand-grey-700">
                      {project.year}
                    </span>
                  </div>

                  {/* Category */}
                  <span
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.15em] transition-colors duration-300"
                    style={{
                      color:
                        hoveredId === project.id
                          ? project.color
                          : "var(--color-brand-grey-500)",
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-[-0.02em] text-brand-white transition-colors duration-300 lg:text-2xl">
                    {project.title}
                  </h3>

                  {/* Description — shown inline on large cards */}
                  <p className="font-body text-sm leading-relaxed text-brand-grey-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>

                {/* Bottom: Tags + Arrow */}
                <div className="flex items-end justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-brand-grey-700/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-brand-grey-500 transition-all duration-300 group-hover:border-brand-grey-700 group-hover:text-brand-grey-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <svg
                      className="h-4 w-4"
                      style={{ color: project.color }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="square"
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
