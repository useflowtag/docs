# Flowtag Docs

Documentation site for Flowtag, built with Next.js and Fumadocs.

[![Netlify Status](https://api.netlify.com/api/v1/badges/498f54c4-fae5-4814-a023-f0dc77208f5e/deploy-status)](https://app.netlify.com/projects/flowtagdocs/deploys)

## What’s Included

This repository contains the public docs experience for Flowtag, including:

- A docs layout powered by Fumadocs UI.
- MDX-based documentation content under `content/`.
- Search, LLM, and Open Graph routes for the docs site.
- Shared layout and content loading helpers in `lib/`.

## Requirements

- Node.js 20 or newer
- pnpm 9 or newer

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Common Scripts

```bash
pnpm dev         # Start the local development server
pnpm build       # Build the production app
pnpm start       # Start the production server
pnpm types:check # Generate MDX types and run TypeScript checks
pnpm lint        # Check and fix code with Biome
pnpm format      # Format the repository with Biome
```

## Project Structure

- `app/` - Next.js app routes, layouts, and special endpoints.
- `content/` - Docs content written in MDX and organized by section.
- `components/` - Shared UI and MDX component mappings.
- `lib/` - Source loading, shared layout config, and utility helpers.
- `source.config.ts` - Fumadocs MDX configuration.

## Documentation Sections

The docs navigation is organized into four top-level sections:

- `Core` - fundamentals and setup, including quickstart and API keys.
- `Analytics` - Flowtag Analytics documentation.
- `Variables` - Flowtag Variables documentation.
- `SDKs` - integration guides for the Flowtag SDKs.

## Important Routes

- `/` and `/docs` redirect to the core docs section.
- `/api/search` provides docs search.
- `/llms.txt` and `/llms-full.txt` expose LLM-friendly documentation indexes.
- `/llms.mdx/docs/...` serves per-page markdown content for docs pages.
- `/og/docs/...` generates documentation Open Graph images.

## Content Workflow

Docs pages live in `content/**/**/*.mdx`, with section metadata in each folder’s `meta.json` file.

If you add or rename pages, run:

```bash
pnpm types:check
```

This refreshes the generated MDX types and verifies the project compiles cleanly.

## Useful References

- [Next.js Documentation](https://nextjs.org/docs)
- [Fumadocs Documentation](https://fumadocs.dev)
