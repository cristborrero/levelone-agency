# Levelone Agency — Digital Platform

<div align="center">
  <img src="./public/logo.svg" alt="Levelone Agency Logo" width="300px" height="auto" />
  <p><em>Elevate. Execute. Dominate.</em></p>
</div>

---

## ⚡ Overview

Levelone is a UK-based digital agency building premium websites, brands, and content for ambitious mid-market businesses. This repository contains the source code for the agency's primary digital platform and portfolio.

The architecture is built for performance, utilizing a modern headless stack that scales effortlessly while delivering top-tier technical SEO and lightning-fast load times. The UI adheres strictly to a **Dark Editorial Brutalist** design system, combining rigid typography with subtle micro-interactions to create a premium, authoritative experience.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Fonts:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Display), [Inter](https://fonts.google.com/specimen/Inter) (Body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Terminal/Stats)

## 📁 Repository Structure

```text
/levelone-agency
├── brand/                   # Brand Identity System, UI documentation & Website Copy
│   ├── assets/              # Raw brand assets (HD logos, icons)
│   ├── 02-UI-Components.md  # Detailed documentation of all UI sections
│   ├── 03-Web-Copy.md       # Approved final content in British English
│   └── brand-identity.md    # Source-of-truth for Levelone brand guidelines
├── public/                  # Static assets (images, SVGs, Next.js optimization)
└── src/
    ├── app/                 # Next.js App Router (pages, layout, global CSS)
    └── components/          # Reusable UI components (Hero, Navbar, Grid, Process)
```

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js 18.18.0 or newer installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/[your-org]/levelone-agency.git
   cd levelone-agency
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server (with Turbopack):
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System: Dark Editorial Brutalist

The UI is intentionally dark and minimal, designed to reflect the agency's uncompromised quality and technical edge. 

- **Colors:** Deep Black (`#050505`) backdrop, Warm White (`#F5F0EB`) typography, and Electric Lime (`#D4FF00`) as the primary interactive accent.
- **Interactions:** "Ease instead of bounce." We use deliberate `cubic-bezier(0.25, 0.1, 0.25, 1)` easing across all framer-motion components to project weight and authority.
- **Grids:** Asymmetrical and hard-edged. We purposely break standard 12-column rigidness inside the portfolio section to reflect a "brutalist" approach but refine it with generous negative space. 

---

<div align="center">
  <p><strong>Built with precision. Powered by ambition.</strong></p>
  <p>© 2026 Levelone Agency Ltd. All rights reserved.</p>
</div>
