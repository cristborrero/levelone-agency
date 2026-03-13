# Levelone Agency — UI Components Reference

> **UI Designer** · Created: 10 March 2026
> **Stack**: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion
> **Visual Direction**: Dark Editorial Brutalist

---

## Table of Contents

1. [Design System Foundation](#1-design-system-foundation)
2. [Navbar](#2-navbar)
3. [Hero Section](#3-hero-section)
4. [Services Grid](#4-services-grid)
5. [Work / Portfolio](#5-work--portfolio)
6. [Process / Timeline](#6-process--timeline)
7. [About Section](#7-about-section)
8. [Contact Section](#8-contact-section)
9. [Footer](#9-footer)
10. [Shared Patterns](#10-shared-patterns)

---

## 1. Design System Foundation

### File: `src/app/globals.css`

All design tokens live in `globals.css` using Tailwind v4's `@theme inline` directive. No `tailwind.config.ts` file — everything is CSS-native.

### Color Tokens

| Token                        | Hex       | Tailwind Class                          | Usage                           |
| ---------------------------- | --------- | --------------------------------------- | ------------------------------- |
| `--color-brand-black`        | `#0A0A0A` | `bg-brand-black`                        | Primary background              |
| `--color-brand-black-deep`   | `#050505` | `bg-brand-black-deep`                   | Hero, about, footer backgrounds |
| `--color-brand-black-mid`    | `#141414` | `bg-brand-black-mid`                    | Hover states, elevated surfaces |
| `--color-brand-black-soft`   | `#1E1E1E` | `bg-brand-black-soft`                   | Subtle borders                  |
| `--color-brand-white`        | `#F5F0EB` | `text-brand-white`                      | Primary text on dark            |
| `--color-brand-accent`       | `#D4FF00` | `text-brand-accent` / `bg-brand-accent` | CTAs, highlights, numbers       |
| `--color-brand-accent-muted` | `#B8D94D` | `text-brand-accent-muted`               | Hover accent variant            |
| `--color-brand-grey-900`     | `#2A2A2A` | `text-brand-grey-900`                   | Secondary text on dark          |
| `--color-brand-grey-700`     | `#4A4A4A` | `border-brand-grey-700`                 | Borders, dividers               |
| `--color-brand-grey-500`     | `#6B6B6B` | `text-brand-grey-500`                   | Metadata, labels                |
| `--color-brand-grey-300`     | `#9A9A9A` | `text-brand-grey-300`                   | Body text, descriptions         |

### Typography

| Role                 | Font           | Tailwind Class | Weight                       | Tracking                                   |
| -------------------- | -------------- | -------------- | ---------------------------- | ------------------------------------------ |
| Display / Headlines  | Space Grotesk  | `font-display` | Black (900) / Bold (700)     | `tracking-[-0.03em]`                       |
| Body text            | Inter          | `font-body`    | Regular (400) / Medium (500) | `tracking-normal`                          |
| Labels / Tags / Code | JetBrains Mono | `font-mono`    | Regular (400)                | `tracking-[0.08em]` to `tracking-[0.15em]` |

### Font Loading

Fonts are loaded via `next/font/google` in `src/app/layout.tsx`:

```tsx
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ variable: "--font-display", ... });
const inter = Inter({ variable: "--font-body", ... });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", ... });
```

### Brutalist Rules (Global)

| Rule             | Implementation                                |
| ---------------- | --------------------------------------------- |
| No border-radius | `border-radius: 0` on all primary components  |
| Noise overlay    | `body::before` with SVG noise at 3.5% opacity |
| Custom scrollbar | 6px width, accent on hover                    |
| Selection color  | Accent bg + black text                        |
| Colour scheme    | Always dark — no media query toggle           |

---

## 2. Navbar

### File: `src/components/Navbar.tsx`

| Property         | Value                             |
| ---------------- | --------------------------------- |
| **Type**         | Client component (`"use client"`) |
| **Position**     | `fixed top-0` · `z-50`            |
| **Height**       | `h-20` (80px)                     |
| **Max width**    | `1400px` centered                 |
| **Dependencies** | `framer-motion`                   |

### Behaviour

| State                        | Visual                                                   |
| ---------------------------- | -------------------------------------------------------- |
| **Default** (scroll Y ≤ 20)  | Transparent background                                   |
| **Scrolled** (scroll Y > 20) | `bg-brand-black/90` + `backdrop-blur-md` + bottom border |
| **Mobile open**              | Fullscreen overlay `bg-brand-black-deep`                 |

### Sub-elements

| Element              | Class / Style                                               | Notes                                                      |
| -------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- |
| **Logo**             | `font-display text-xl font-black uppercase`                 | "LEVEL" white, "ONE" accent · underline animation on hover |
| **Nav links**        | `font-body text-sm font-medium uppercase tracking-[0.08em]` | Grey-300 → white on hover · accent underline               |
| **CTA button**       | `border border-brand-accent`                                | Outlined → filled on hover + glow shadow                   |
| **Mobile hamburger** | 3 `span` bars animated via Framer Motion                    | Transforms into X on open                                  |
| **Mobile menu**      | Fullscreen links at `text-5xl font-black`                   | Staggered entry (80ms delay per item)                      |

### Animation Config

```tsx
// Entry animation
initial={{ y: -100 }}
animate={{ y: 0 }}
transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}

// Mobile links stagger
transition={{ delay: index * 0.08, duration: 0.4 }}
```

---

## 3. Hero Section

### File: `src/components/HeroSection.tsx`

| Property       | Value                       |
| -------------- | --------------------------- |
| **Type**       | Client component            |
| **Height**     | `min-h-screen`              |
| **Layout**     | `flex flex-col justify-end` |
| **Background** | `bg-brand-black-deep`       |

### Sub-elements

| Element              | Details                                                                        |
| -------------------- | ------------------------------------------------------------------------------ |
| **Background grid**  | 6 vertical lines (`w-[1px]`) animated `scaleY: 0→1` + 1 horizontal accent line |
| **Glow orb**         | `500×500px` blurred accent circle at top-right                                 |
| **Overline**         | Accent line + "DIGITAL AGENCY — UK" in `font-mono text-xs`                     |
| **Headline**         | 3 lines: "ELEVATE.", "EXECUTE.", "DOMINATE." — line-by-line mask reveal        |
| **Subheadline**      | `font-body text-lg text-brand-grey-300`                                        |
| **Primary CTA**      | `bg-brand-accent` solid button with arrow icon + glow on hover                 |
| **Secondary CTA**    | Text link with bottom border                                                   |
| **Stats bar**        | 3 stats: `50+`, `98%`, `24h` with border-top separator                         |
| **Scroll indicator** | Infinite `y: [0, 8, 0]` animation + "Scroll" text                              |

### Headline Animation

```tsx
// Line-by-line reveal (mask overflow)
const LINE_ANIMATION = {
  hidden: { y: "100%" },
  visible: (i) => ({
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};
```

### Typography Scale (Hero)

```
Headline:  clamp(3.5rem, 8vw, 7rem)  ← 56px → 112px
           font-black, uppercase, leading-[0.95], tracking-[-0.03em]
```

---

## 4. Services Grid

### File: `src/components/ServicesGrid.tsx`

| Property | Value                                                                            |
| -------- | -------------------------------------------------------------------------------- |
| **Type** | Client component                                                                 |
| **Grid** | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`                                      |
| **Gap**  | `gap-[1px]` with `bg-brand-grey-900/30` as grid background (creates 1px borders) |

### Data Structure

```tsx
interface Service {
  number: string; // "01" – "06"
  title: string;
  description: string;
  tags: string[];
}
```

### 6 Services

| #   | Title                    | Tags                                     |
| --- | ------------------------ | ---------------------------------------- |
| 01  | Web Design & Development | Next.js, React, Headless CMS, E-commerce |
| 02  | Graphic Design           | Branding, Print, Packaging, Guidelines   |
| 03  | Social Media             | Strategy, Content, Paid Media, Analytics |
| 04  | Video & Audio            | Brand Films, Podcasts, Reels, Ads        |
| 05  | Motion Graphics          | 2D/3D, UI Animation, Explainers, Titles  |
| 06  | AI Services              | Chatbots, Automation, ML, Data           |

### Card Anatomy

```
┌─────────────────────────────────┐
│ [accent line on hover — 2px]    │
│                                 │
│  01  ← mono, grey-700→accent   │
│                                 │
│  WEB DESIGN &                   │
│  DEVELOPMENT  ← display, bold  │
│                                 │
│  Description text...            │
│  ← body, sm, grey-300          │
│                                 │
│  ┌──────┐ ┌──────┐ ┌──────┐   │
│  │NEXT.JS│ │REACT │ │ CMS  │  ↗│
│  └──────┘ └──────┘ └──────┘   │
└─────────────────────────────────┘
  Tags: mono, 10px, uppercase
  Arrow: opacity 0→1 on hover
```

### Animation

```tsx
// Staggered scroll-triggered reveal
variants={{
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.15 * i, duration: 0.6 },
  }),
}}
viewport={{ once: true, margin: "-50px" }}
```

---

## 5. Work / Portfolio

### File: `src/components/WorkSection.tsx`

| Property       | Value                                                 |
| -------------- | ----------------------------------------------------- |
| **Type**       | Client component                                      |
| **Grid**       | `grid-cols-1 md:grid-cols-3` with `auto-rows-[200px]` |
| **Layout**     | Asymmetric — cards use `col-span` and `row-span`      |
| **Background** | `bg-brand-black-deep`                                 |

### Project Data

| #   | Title                | Category          | Accent Color | Span                    |
| --- | -------------------- | ----------------- | ------------ | ----------------------- |
| 01  | Meridian Finance     | Web Design & Dev  | `#D4FF00`    | `col-span-2 row-span-2` |
| 02  | Volta Energy         | Branding & Motion | `#3B82F6`    | `col-span-1 row-span-1` |
| 03  | Archway Studios      | Social Media      | `#00D47E`    | `col-span-1 row-span-1` |
| 04  | NovaTech AI          | Web App & AI      | `#FFB800`    | `col-span-1 row-span-2` |
| 05  | Borough Market Films | Video Production  | `#FF3B3B`    | `col-span-2 row-span-1` |

### Hover Interactions

| Interaction       | Implementation                                        |
| ----------------- | ----------------------------------------------------- |
| Top coloured line | `scale-x-0 → scale-x-100` with project-specific color |
| Background glow   | `radial-gradient` with `AnimatePresence`              |
| Category label    | Changes to project color                              |
| Description       | `opacity-0 → opacity-100`                             |
| Number            | `grey-700 → grey-300`                                 |
| Arrow icon        | `opacity-0 → opacity-100` in project color            |

---

## 6. Process / Timeline

### File: `src/components/ProcessSection.tsx`

| Property    | Value                                   |
| ----------- | --------------------------------------- |
| **Type**    | Client component                        |
| **Desktop** | Horizontal timeline (hidden below `lg`) |
| **Mobile**  | Vertical timeline with left border      |

### 5 Steps

| #   | Title         | Duration  |
| --- | ------------- | --------- |
| 01  | DISCOVER      | Week 1    |
| 02  | STRATEGY      | Week 2    |
| 03  | DESIGN        | Weeks 3–4 |
| 04  | BUILD         | Weeks 4–7 |
| 05  | LAUNCH & GROW | Week 8+   |

### Desktop Timeline Anatomy

```
  ■─────────■─────────■─────────■─────────■    ← accent line + square dots
  │         │         │         │         │
  01        02        03        04        05
  DISCOVER  STRATEGY  DESIGN    BUILD     LAUNCH
  [desc]    [desc]    [desc]    [desc]    [desc]
  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
  │WEEK 1│  │WEEK 2│  │WK 3-4│  │WK 4-7│  │WK 8+ │
  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘
```

### Animations

| Element              | Animation                               |
| -------------------- | --------------------------------------- |
| Progress line        | `scaleX: 0→1` over 1.5s with delay 0.3s |
| Square dots          | `scale: 0→1` staggered (0.2s per dot)   |
| Step cards           | `opacity/y` staggered (0.15s per card)  |
| Mobile vertical line | `scaleY: 0→1` over 1.5s                 |

---

## 7. About Section

### File: `src/components/AboutSection.tsx`

| Property       | Value                                                                  |
| -------------- | ---------------------------------------------------------------------- |
| **Type**       | Client component                                                       |
| **Background** | `bg-brand-black-deep`                                                  |
| **Layout**     | 3 blocks: Philosophy (2-col) → Stats (4-col) → Differentiators (2-col) |

### Philosophy Block

| Side      | Content                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| **Left**  | Headline: "WE DON'T BUILD WEBSITES. WE BUILD EDGES." + body paragraph               |
| **Right** | 5 values list with left border: Precision, Audacity, Velocity, Ownership, Evolution |

### Stats Bar

| Stat     | Label              |
| -------- | ------------------ |
| **50+**  | Projects Shipped   |
| **12**   | Industries Served  |
| **8wk**  | Avg. Delivery Time |
| **100%** | UK-Based Team      |

Layout: `grid-cols-2 lg:grid-cols-4` with 1px gap borders. Numbers in `font-display text-3xl font-black text-brand-accent`.

### Differentiators (2×2 Grid)

| #   | Title                | Icon |
| --- | -------------------- | ---- |
| 1   | AI-Native Workflows  | ⚡   |
| 2   | No Template Culture  | ◼    |
| 3   | Ownership Mentality  | ↗    |
| 4   | One Team, Full Stack | ◻    |

Cards have top accent line hover animation (same pattern as Services Grid).

---

## 8. Contact Section

### File: `src/components/ContactSection.tsx`

| Property       | Value                                                   |
| -------------- | ------------------------------------------------------- |
| **Type**       | Client component                                        |
| **Layout**     | `grid-cols-1 lg:grid-cols-2`                            |
| **Form state** | `idle` → `submitting` → `success` (with `error` option) |

### Form Fields

| Field   | Type       | Input Style                           |
| ------- | ---------- | ------------------------------------- |
| Name    | `text`     | Bottom border only (`border-b`)       |
| Email   | `email`    | Bottom border only                    |
| Service | `select`   | Bottom border only, custom appearance |
| Message | `textarea` | Bottom border only, 4 rows            |

### Input Styling Pattern

```tsx
className="w-full border-b-[1px] border-brand-grey-700 bg-transparent px-0 py-3
  font-body text-base text-brand-white placeholder:text-brand-grey-700
  transition-colors duration-300 outline-none focus:border-brand-accent"
```

> **Key**: No background, no side borders, no border-radius — pure brutalist line inputs.

### Service Options

`Web Design & Development` · `Graphic Design & Branding` · `Social Media` · `Video & Audio` · `Motion Graphics` · `AI Services` · `Full Digital Package`

### Right Column

| Element          | Details                                             |
| ---------------- | --------------------------------------------------- |
| **WhatsApp CTA** | Green icon, bordered card, hover accent border + bg |
| **Email CTA**    | `hello@levelone.agency`, bordered card              |
| **Location**     | "Surrey, United Kingdom" with international note    |

### Submit States

| State        | Visual                                             |
| ------------ | -------------------------------------------------- |
| `idle`       | "SEND MESSAGE →" accent button                     |
| `submitting` | Spinning border + "Sending..."                     |
| `success`    | Checkmark + "Message Sent" + "Send Another" button |

### WhatsApp Config

```tsx
const WHATSAPP_NUMBER = "447000000000"; // ← Replace with real number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Levelone! I'm interested in working together. Let's talk.",
);
// Link: https://wa.me/{number}?text={message}
```

---

## 9. Footer

### File: `src/components/Footer.tsx`

| Property       | Value                                 |
| -------------- | ------------------------------------- |
| **Type**       | Client component                      |
| **Background** | `bg-brand-black-deep`                 |
| **Layout**     | `lg:grid-cols-12` (4 + 2 + 2 + 2 + 2) |

### Columns

| Column         | Span         | Content                                   |
| -------------- | ------------ | ----------------------------------------- |
| **Brand**      | `col-span-4` | Logo + description + social icons         |
| **Services**   | `col-span-2` | 6 service links                           |
| **Company**    | `col-span-2` | About, Work, Process, Contact             |
| **Legal**      | `col-span-2` | Privacy, Terms, Cookies                   |
| **Newsletter** | `col-span-2` | "Stay Sharp" + email input + arrow button |

### Social Icons

| Platform    | Style                      |
| ----------- | -------------------------- |
| LinkedIn    | Square border, `h-10 w-10` |
| Instagram   | Same                       |
| X / Twitter | Same                       |
| Dribbble    | Same                       |

All: `border-brand-grey-700/40 → border-brand-accent` on hover. Square (no border-radius).

### Bottom Bar

```
© 2026 Levelone Agency Ltd  │  Company No. 00000000
                                          Built with precision. Powered by ambition.
```

---

## 10. Shared Patterns

### Section Header Pattern

Every section uses a consistent header structure:

```tsx
<div className="mb-4 flex items-center gap-4">
  <span className="h-[1px] w-12 bg-brand-accent" />
  <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-accent">
    {overline}
  </span>
</div>
<h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[1] tracking-[-0.03em] text-brand-white">
  {title}
</h2>
```

### Accent Line Hover Pattern

Used on: Services Grid, Work cards, Differentiators.

```tsx
<div className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100" />
```

### Card Grid Pattern (1px Borders)

```tsx
<div className="grid grid-cols-1 gap-[1px] bg-brand-grey-900/30 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <div className="bg-brand-black p-8 lg:p-10">...</div>
  ))}
</div>
```

The `gap-[1px]` on a slightly lighter background creates the illusion of 1px borders between cards.

### Scroll-Triggered Animation Pattern

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{
    delay: index * 0.1,
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  }}
>
```

### Tag / Chip Pattern

```tsx
<span className="border border-brand-grey-700/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand-grey-500">
  {tag}
</span>
```

### CTA Button Variants

| Variant                 | Classes                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Primary (solid)**     | `bg-brand-accent text-brand-black font-display text-sm font-bold uppercase tracking-[0.15em]` + glow hover |
| **Secondary (outline)** | `border border-brand-accent text-brand-accent` → filled on hover                                           |
| **Tertiary (text)**     | `border-b border-brand-grey-700 text-brand-grey-300` → `border-white text-white` on hover                  |

### Motion Easing

All animations use the same cubic-bezier:

```
ease: [0.25, 0.1, 0.25, 1]
```

This is equivalent to `cubic-bezier(0.25, 0.1, 0.25, 1)` — a smooth ease-out with slight overshoot for organic feel.

---

## File Structure

```
src/
├── app/
│   ├── globals.css              ← Design tokens + base styles
│   ├── layout.tsx               ← Font loading + SEO metadata
│   └── page.tsx                 ← Page composition (all 8 sections)
└── components/
    ├── Navbar.tsx                ← Fixed nav + mobile overlay
    ├── HeroSection.tsx           ← Full-viewport hero with animations
    ├── ServicesGrid.tsx          ← 6-service grid (3×2)
    ├── WorkSection.tsx          ← Asymmetric portfolio grid
    ├── ProcessSection.tsx       ← Horizontal timeline (5 steps)
    ├── AboutSection.tsx         ← Philosophy + stats + differentiators
    ├── ContactSection.tsx       ← Form + WhatsApp CTA
    └── Footer.tsx               ← Links + socials + newsletter
```

---

**UI Designer:** Cristian Ted Borrero
**Created:** 10 March 2026
**Status:** ✅ All 8 components implemented and verified
**Server:** `http://localhost:3000`
