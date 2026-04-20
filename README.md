# Vizuara Research Bootcamp Landing Pages

Monorepo of landing pages for Vizuara AI Labs research bootcamps. Each bootcamp is an independent Next.js 16 static-export site deployed to its own subdomain, sharing a common component library and design system.

## Table of Contents

1. [Overview](#overview)
2. [Repository Structure](#repository-structure)
3. [Tech Stack](#tech-stack)
4. [Design System](#design-system)
5. [Bootcamp Sites](#bootcamp-sites)
6. [Shared Package: `@vizuara/ui`](#shared-package-vizuaraui)
7. [Local Development](#local-development)
8. [Building for Production](#building-for-production)
9. [Adding a New Bootcamp Site](#adding-a-new-bootcamp-site)
10. [Content Rules](#content-rules)
11. [Deployment](#deployment)

## Overview

This repo powers the public landing pages for Vizuara's Research Bootcamp program. It is a TypeScript monorepo using npm workspaces. Every bootcamp site pulls its layout from a shared component library (`packages/vizuara-ui`) and drives content from a single typed `BootcampConfig` object per site.

## Repository Structure

```
research-bootcamp-landing-pages/
├── packages/
│   └── vizuara-ui/              Shared React component library (sections, UI, viz)
├── sites/
│   ├── sciml-bootcamp/          Scientific Machine Learning bootcamp
│   ├── genai-bootcamp/          Generative AI / LLM bootcamp
│   ├── ml-dl-bootcamp/          ML and Deep Learning bootcamp
│   └── courses/                 Legacy courses page
├── shared-assets/               Instructor photos, university logos, diagrams
├── scripts/                     Build and scaffolding utilities
├── CLAUDE.md                    Project conventions for AI assistants
├── package.json                 Workspace root
└── vercel.json                  Deployment config
```

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16.1.6 (App Router, static export) |
| UI | React 19, TypeScript 5.7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Fonts | Instrument Serif, Inter, JetBrains Mono (Google Fonts) |

All sites use `output: "export"` for static deployment.

## Design System

| Element | Value |
|---------|-------|
| Primary | `#00a854` light / `#00d46a` dark |
| Secondary | `#0099b8` light / `#00c8e6` dark |
| Heading font | Instrument Serif (italic) |
| Body font | Inter |
| Code font | JetBrains Mono |
| Max width | `max-w-7xl` (80rem) |
| Effects | `.glow-green`, `.glow-cyan`, `.gradient-text`, `.grid-pattern`, `.dot-pattern` |

## Bootcamp Sites

| Slug | Subdomain | Port (local) | Focus |
|------|-----------|--------------|-------|
| `sciml-bootcamp` | sciml-bootcamp.vizuara.ai | 3006 | Physics-Informed NNs, Neural ODEs, UDEs |
| `genai-bootcamp` | genai-bootcamp.vizuara.ai | 3001 | LLMs, Transformers, Generative Models |
| `ml-dl-bootcamp` | ml-dl-bootcamp.vizuara.ai | 3005 | Classical ML, Deep Learning foundations |

Each site has the same internal layout:

```
sites/<slug>/
├── app/                 Next.js App Router pages and layout
├── data/bootcamp.ts     Typed BootcampConfig (all site content)
├── public/              Static assets (papers, diagrams, logos, team photos)
├── next.config.ts       Static-export config
├── package.json
└── tsconfig.json
```

## Shared Package: `@vizuara/ui`

`packages/vizuara-ui/` exports every section component used across bootcamp sites. Sections are data-driven and accept a typed config from the consuming site.

**Section components** (`components/sections/`):

- `Navbar`, `Hero`, `AudienceSection`, `WhySection`
- `CurriculumSection`, `DiagramsSection`, `ShowcaseSection`
- `ResearchPapersSection`, `InstructorSection`, `MarketStatsSection`
- `VideoSection`, `PastWorkshopsSection`, `VenuesMarquee`
- `TestimonialsSection`, `DeliverablesSection`, `CertificateSection`
- `PricingSection`, `FAQSection`, `ContactSection`, `CTABanner`
- `NextCohortPopup`, `Footer`

**Type definitions** live in `packages/vizuara-ui/types/bootcamp.ts`. Each section has an optional slot on `BootcampConfig`: if a site omits a section's config, it simply doesn't render.

**Icon resolver** at `packages/vizuara-ui/utils/icon-resolver.ts` maps string names to Lucide components so data files can stay as plain JSON-like objects.

## Local Development

From the workspace root:

```bash
npm install                      # Install all workspace dependencies
```

Then from any site directory:

```bash
cd sites/sciml-bootcamp
npm run dev                      # Defaults to port 3000
npm run dev -- -p 3006           # Pick an explicit port
```

**Run all three sites in parallel** (useful for cross-site QA):

```bash
cd sites/genai-bootcamp && npm run dev -- -p 3001 &
cd sites/ml-dl-bootcamp && npm run dev -- -p 3005 &
cd sites/sciml-bootcamp && npm run dev -- -p 3006 &
```

Open:
- http://localhost:3001 — GenAI
- http://localhost:3005 — ML / DL
- http://localhost:3006 — SciML

## Building for Production

```bash
cd sites/<slug>
npm run build                    # Produces out/ directory
npx serve out                    # Preview the static build locally
```

## Adding a New Bootcamp Site

1. Copy an existing site directory as a template (e.g., `cp -r sites/sciml-bootcamp sites/<new-slug>`)
2. Update `name` in the new site's `package.json`
3. Edit `data/bootcamp.ts` with your content
4. Copy relevant shared assets into `public/`
5. Run `npm install` from workspace root
6. Build and preview: `npm run build && npx serve out`

## Content Rules

- No emojis in any public content
- No em dashes; use colons, commas, or rewrite
- Mentors are always: Dr. Sreedath Panat, Dr. Raj Dandekar, Dr. Rajat Dandekar
- YouTube embeds use 16:9 aspect wrappers (`paddingBottom: 56.25%`)
- All `<Image>` uses `unoptimized` (required for static export)
- Do not hallucinate external links; scrape from existing Vizuara pages

## Deployment

Each site deploys independently to Vercel with its own project and domain. Root `vercel.json` plus per-site `vercel.json` (where present) handle workspace-aware builds. Pushes to `main` trigger deploys for sites whose files changed.
