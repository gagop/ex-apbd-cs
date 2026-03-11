# C# Evolution Explorer

An interactive, bilingual (EN/PL) educational website documenting the evolution of the C# programming language from version 1.0 (2002) through version 13 (2024). Built as part of the **APBD** (Aplikacje Baz Danych / Database Application) course at [PJATK](https://www.pja.edu.pl/) (Polish-Japanese Academy of Information Technology).

## Features

- **Complete C# version history** — Every major C# release (1.0 through 13) with detailed feature descriptions, rationale, and code examples
- **Java comparison** — Side-by-side C# and Java code snippets with tips for developers transitioning from Java
- **Bilingual UI** — Full English and Polish localization with browser language auto-detection
- **Dark mode** — Light/dark theme toggle with system preference support, persisted in localStorage
- **Global search** — Real-time search across all versions and features with direct navigation
- **Interactive timeline** — Visual version timeline on the home page with feature previews
- **Syntax highlighting** — Powered by [Shiki](https://shiki.matsu.io/) with dual-theme support (GitHub Light / GitHub Dark)
- **Fully static** — Pre-rendered at build time for fast loading and easy deployment
- **Accessible** — Skip-to-content link, ARIA attributes, keyboard navigation, semantic HTML, `prefers-reduced-motion` support

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [SvelteKit](https://svelte.dev/) 2 with [Svelte 5](https://svelte.dev/docs/svelte/overview) (runes) |
| Language | [TypeScript](https://www.typescriptlang.org/) 5 (strict mode) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 with OKLCH color palette |
| Code highlighting | [Shiki](https://shiki.matsu.io/) 4 |
| Build tool | [Vite](https://vite.dev/) 7 |
| Deployment | Static adapter (`@sveltejs/adapter-static`) |

## Project Structure

```
src/
├── app.css                          # Tailwind config & custom theme (OKLCH palette, dark mode)
├── app.html                         # HTML shell
├── lib/
│   ├── assets/
│   │   └── favicon.svg
│   ├── components/
│   │   ├── CodeBlock.svelte         # Syntax-highlighted code blocks (Shiki)
│   │   ├── FeatureCard.svelte       # Feature display with code examples & Java comparison
│   │   ├── LanguageSwitcher.svelte  # EN/PL toggle button
│   │   ├── SearchBar.svelte         # Global search with live results dropdown
│   │   ├── SkipLink.svelte          # Accessibility skip-to-content link
│   │   ├── ThemeToggle.svelte       # Dark/light mode toggle
│   │   └── VersionTimeline.svelte   # Interactive vertical timeline
│   ├── data/
│   │   └── versions.ts             # All C# version data (versions, features, code examples)
│   ├── i18n/
│   │   ├── index.svelte.ts          # Locale state management (Svelte 5 runes)
│   │   └── translations.ts          # UI translation strings (EN/PL)
│   ├── types/
│   │   └── index.ts                 # TypeScript interfaces (CSharpVersion, Feature, Localized)
│   └── index.ts                     # Public library exports
├── routes/
│   ├── +layout.svelte               # Global layout (header, footer, navigation)
│   ├── +layout.ts                   # Enables static prerendering
│   ├── +page.svelte                 # Home page (hero section, stats, timeline)
│   └── version/[id]/
│       ├── +page.svelte             # Version detail page (feature cards, nav)
│       └── +page.ts                 # Data loader & prerender entries
```

## Components

| Component | Description |
|---|---|
| `CodeBlock` | Renders syntax-highlighted code using Shiki with dual themes (light/dark). Falls back to plain `<pre>` during loading. |
| `FeatureCard` | Displays a C# feature with category badge, summary, rationale, code example, and an optional collapsible Java equivalent with tips. |
| `VersionTimeline` | Vertical interactive timeline showing all C# versions as clickable cards with year, .NET version, and feature previews. |
| `SearchBar` | Combobox-style search input with live filtering across feature names, slugs, and summaries. Results link directly to specific features. |
| `ThemeToggle` | Toggles `dark` class on `<html>` and persists preference to localStorage. Displays sun/moon icon. |
| `LanguageSwitcher` | Switches between English and Polish. Persists choice and updates `lang` attribute on `<html>`. |
| `SkipLink` | Hidden link that becomes visible on keyboard focus, allowing users to skip to main content. |

## Pages

### Home (`/`)

- Hero section with project title, subtitle, and statistics (number of versions, features, years covered)
- Call-to-action button linking to the first version
- Full interactive timeline of all C# versions

### Version Detail (`/version/[id]`)

- Version header with C# version number, release year, and .NET version badge
- Localized tagline describing the release
- Grid of feature cards with syntax-highlighted code examples
- Previous/Next navigation between versions

## Data Model

```typescript
interface CSharpVersion {
  id: string             // URL-friendly identifier
  version: string        // e.g. "1.0", "13"
  dotnetVersion: string  // e.g. ".NET 1.0", ".NET 8"
  year: number           // Release year
  tagline: Localized     // Short description (EN/PL)
  features: Feature[]    // List of language features
}

interface Feature {
  name: string              // Feature name
  slug: string              // URL-friendly name
  category: FeatureCategory // 'syntax' | 'types' | 'async' | 'linq' | ...
  summary: Localized        // Brief description (EN/PL)
  rationale: Localized      // Why it was added (EN/PL)
  csharpCode: string        // C# code example
  javaEquivalent?: string   // Optional Java code example
  tip?: Localized           // Optional tip for Java developers (EN/PL)
}
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm (included with Node.js)

### Installation

```bash
git clone https://github.com/<your-username>/ex-apbd-cs.git
cd ex-apbd-cs
npm install
```

### Development

```bash
npm run dev
```

Opens the dev server at `http://localhost:5173`.

### Build

```bash
npm run build
```

Generates a fully static site in the `build/` directory.

### Preview

```bash
npm run preview
```

Serves the production build locally.

### Type Checking

```bash
npm run check
```

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
