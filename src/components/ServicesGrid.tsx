"use client";

import { motion } from "framer-motion";

interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "High-performance websites built on Next.js and modern frameworks. Optimised for speed, SEO, and conversion — not just looks.",
    tags: ["Next.js", "React", "Headless CMS", "E-commerce"],
  },
  {
    number: "02",
    title: "Graphic Design",
    description:
      "Strategic visual identities that give your brand an unfair advantage. Every asset is crafted with intent — we don't do decoration.",
    tags: ["Branding", "Print", "Packaging", "Guidelines"],
  },
  {
    number: "03",
    title: "Social Media",
    description:
      "Data-driven strategies that turn followers into customers. We build audiences that actually care — and buy.",
    tags: ["Strategy", "Content", "Paid Media", "Analytics"],
  },
  {
    number: "04",
    title: "Video & Audio",
    description:
      "Brand films, podcasts, and sound design that earn attention. We tell stories people choose to watch — not skip.",
    tags: ["Brand Films", "Podcasts", "Reels", "Ads"],
  },
  {
    number: "05",
    title: "Motion Graphics",
    description:
      "Animated content that stops the scroll and explains the complex. Static is dead — we make your brand move.",
    tags: ["2D/3D", "UI Animation", "Explainers", "Titles"],
  },
  {
    number: "06",
    title: "AI Services",
    description:
      "AI workflows, chatbots, and automation that actually work. Not buzzwords — real competitive edge you can measure.",
    tags: ["Chatbots", "Automation", "ML", "Data"],
  },
];

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * i,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export function ServicesGrid() {
  return (
    <section id="services" className="relative bg-brand-black py-24 lg:py-32">
      {/* ─── Section Header ─── */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
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
                What We Do
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[1] tracking-[-0.03em] text-brand-white">
              SERVICES
            </h2>
          </div>
          <p className="max-w-md font-body text-base leading-relaxed text-brand-grey-300 lg:text-right">
            Full-service digital capabilities with the depth of a specialist and
            the breadth of a studio.
          </p>
        </motion.div>

        {/* ─── Grid ─── */}
        <div className="grid grid-cols-1 gap-[1px] bg-brand-grey-900/30 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.number}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={CARD_VARIANTS}
              className="group relative flex flex-col justify-between bg-brand-black p-8 transition-colors duration-500 hover:bg-brand-black-mid lg:p-10"
            >
              {/* Top accent line on hover */}
              <div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100" />

              <div>
                {/* Number */}
                <span className="mb-6 block font-mono text-xs tracking-[0.15em] text-brand-grey-700 transition-colors duration-300 group-hover:text-brand-accent">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="mb-4 font-display text-xl font-bold uppercase tracking-[-0.02em] text-brand-white lg:text-2xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mb-8 font-body text-sm leading-relaxed text-brand-grey-300">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-brand-grey-700/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand-grey-500 transition-all duration-300 group-hover:border-brand-accent/30 group-hover:text-brand-grey-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-8 right-8 flex h-8 w-8 items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 lg:bottom-10 lg:right-10">
                <svg
                  className="h-4 w-4 text-brand-accent"
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
