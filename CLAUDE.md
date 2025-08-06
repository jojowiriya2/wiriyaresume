# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 resume website project built with:
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist and Geist Mono from Google Fonts

## Development Commands

```bash
# Start development server (auto-reloads on changes)
npm run dev

# Build production version
npm run build

# Start production server (requires build first)
npm start

# Run ESLint for code quality checks
npm run lint
```

The development server runs on http://localhost:3000.

## Architecture

- **App Router Structure**: Uses Next.js 13+ app directory structure in `src/app/`
- **Main Layout**: `src/app/layout.tsx` defines the root HTML structure with font loading
- **Home Page**: `src/app/page.tsx` contains the main resume content
- **Global Styles**: `src/app/globals.css` contains Tailwind CSS imports and custom styles
- **Static Assets**: SVG icons and images stored in `public/` directory

## Key Configuration Files

- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript configuration with strict settings
- `eslint.config.mjs`: ESLint configuration using Next.js recommended rules
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS processing

## Development Notes

- The project uses strict TypeScript configuration
- ESLint is configured with Next.js recommended rules
- Dark mode styling is implemented using Tailwind's `dark:` prefix
- Font optimization is handled automatically by Next.js font loading
- All page content is currently in the main `page.tsx` - this is likely where resume content will be customized