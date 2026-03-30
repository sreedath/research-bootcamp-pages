# Vizuara Research Bootcamp Landing Pages

## Project Overview

Monorepo containing landing pages for 8+ Vizuara AI Labs research bootcamps plus a master landing page. Each bootcamp site is an independent Next.js 16 static export deployed to its own subdomain.

## Architecture

```
packages/vizuara-ui/     Shared component library (Button, Card, SectionHeading,
                         Accordion, and 15 data-driven section components)
sites/<bootcamp>/        Individual Next.js apps, one per bootcamp
shared-assets/           Instructor photos, university logos, PaperBanana diagrams
scraped-content/         Raw JSON from scraping existing pages
scripts/                 Build and scaffold utilities
```

## Tech Stack

- Next.js 16.1.6, React 19, TypeScript, Tailwind CSS 4, Framer Motion 12
- Lucide React for icons
- Static export (`output: "export"`) for all sites
- PaperBanana for academic diagram generation (uses Gemini API from .env)

## Design System

| Element | Value |
|---------|-------|
| Primary | `#00a854` (light) / `#00d46a` (dark) |
| Secondary | `#0099b8` (light) / `#00c8e6` (dark) |
| Heading font | Instrument Serif (Google Fonts, italic) |
| Body font | Inter (Google Fonts) |
| Code font | JetBrains Mono (Google Fonts) |
| Max width | `max-w-7xl` (80rem) |
| Animations | Framer Motion `whileInView`, staggered delays |
| Effects | `.glow-green`, `.glow-cyan`, `.gradient-text`, `.grid-pattern`, `.dot-pattern` |

## Content Rules

- **No emojis** anywhere in content
- **No em dashes** -- use colons, commas, or rewrite the sentence
- Scholarly, professional tone throughout
- Mentors are always: Dr. Sreedath Panat, Dr. Raj Dandekar, Dr. Rajat Dandekar
- YouTube embeds use 16:9 aspect ratio wrapper (`paddingBottom: 56.25%`)
- All images use unoptimized Next.js Image (static export requirement)
- Do not hallucinate links -- scrape them from existing websites

## Data Structure

Each bootcamp's content lives in `sites/<bootcamp>/data/bootcamp.ts`, exporting a `BootcampConfig` object. The TypeScript interface is defined in `packages/vizuara-ui/types/bootcamp.ts`. Sections are optional: check for existence before rendering.

Shared instructor data is in `packages/vizuara-ui/data/instructors.ts`. Each bootcamp spreads the shared instructor profile and adds a `session` field.

## Shared Assets

- Instructor photos: `shared-assets/instructors/` (SreedathP.png, Raj.jpeg, Rajat.png)
- University logos: `shared-assets/logos/` (vizuara, mit, iitmadras, purdue, claude, openai, gemini)
- PaperBanana diagrams: `shared-assets/paperbanana-gen/<bootcamp>/`
- Book cover: `shared-assets/deepseek-book.jpg`

Assets are copied to each site's `public/` directory. The data files reference them via paths like `/instructors/SreedathP.png` and `/logos/mit-logo.png`.

## Build Commands

```bash
# From any site directory
npm run dev       # Local development server
npm run build     # Static export to out/

# From workspace root
npm install       # Install all workspace dependencies
```

## Creating a New Bootcamp Site

1. Copy an existing site directory as template (e.g., `sites/context-engineering/`)
2. Update `package.json` with the new name
3. Edit `data/bootcamp.ts` with the new content
4. Copy shared assets to `public/`
5. Generate PaperBanana diagrams if needed
6. Run `npm install` from workspace root
7. Build and test with `npm run build && npx serve out`

## Bootcamp Registry

| Slug | Subdomain | Status |
|------|-----------|--------|
| context-engineering | context-engineering.vizuara.ai | Gold standard |
| cv-bootcamp | cvresearchbootcamp.vizuara.ai | Pending |
| rl-bootcamp | rlresearcherbootcamp.vizuara.ai | Pending |
| genai-bootcamp | genai-bootcamp.vizuara.ai | Pending |
| sciml-bootcamp | sciml-bootcamp.vizuara.ai | Pending |
| ml-dl-bootcamp | ml-dl-bootcamp.vizuara.ai | Pending |
| vla-bootcamp | vla-bootcamp.vizuara.ai | Pending |
| inference-bootcamp | inference-bootcamp.vizuara.ai | Pending |
| master | research-bootcamps.vizuara.ai | Pending |

## Icon Resolver

Section components accept icon names as strings. The resolver at `packages/vizuara-ui/utils/icon-resolver.ts` maps them to Lucide components. To add new icons, add them to the `iconMap` in that file.

## Visualization Components

Located in `packages/vizuara-ui/components/visualizations/`. These are topic-specific (e.g., ContextOrbit for context engineering). They are passed as React nodes to section components via props (e.g., `<Hero visualization={<ContextOrbitVisualization />} />`), keeping them decoupled from the data-driven template system.
