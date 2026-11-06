# Muhammad Hamiz — Full-Stack & AI Engineer Portfolio

A personal developer portfolio built with Next.js (App Router, Turbopack) and TypeScript, designed around a warm editorial ("paper and ink") aesthetic.

## Aesthetic & Design System

- **Palette**:
  - Background: Warm off-white (`#F6F3EC`) with a subtle CSS-only dot grid under 4% opacity.
  - Text: Ink black (`#1A1A17`) with secondary muted text (`#5C5A52`).
  - Borders: Crisp 1px solid (`#D9D4C7`).
  - Accent: Burnt orange (`#D9480F`) applied sparingly for links, active markers, and focus states.
- **Typography**:
  - Headings: `Instrument Serif`
  - Body: `Source Sans 3` (comfortable `1.6` line-height, constrained reading widths)
  - Labels & Dates: `JetBrains Mono`
- **Layout**: Single-column editorial layout (max-width `960px`) with generous whitespace and 2-column experience timeline.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + custom inline SVG icons
- **Fonts**: `next/font/google` (zero external CDN links)

## Project Structure

```text
app/
  about/page.tsx          # Background, biography, technical capabilities
  contact/page.tsx        # Direct contact points and email link
  experience/page.tsx     # 2-column work experience & education timeline
  projects/page.tsx       # Filterable catalogue of 20 engineering projects
  skills/page.tsx         # Categorized capabilities without fake metrics
  layout.tsx              # Root layout, fonts, and SEO metadata
  not-found.tsx           # Editorial 404 page
  opengraph-image.tsx     # Dynamic edge OpenGraph social card
components/
  layout/                 # Container, Navbar, Footer
  sections/               # Hero, ProjectCard, ProjectsGrid, SkillCard, TimelineItem, ContactSection
  ui/                     # SectionHeading, SocialIcons, Button, Badge, Card
data/
  site.ts                 # Single source of truth for site content & projects
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
