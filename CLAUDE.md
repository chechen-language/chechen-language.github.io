# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for the Chechen Language organization, built with Eleventy (11ty). The site showcases various Chechen language tools and projects, including keyboard layouts for different platforms and a Chechen transliterator tool.

## Build and Development Commands

- `npm run build` - Build the static site (output to `_site/`)
- `npm run serve` - Start development server with live reload
- `npm run prettier` - Format all files with Prettier

## Architecture

### Static Site Generation (Eleventy)

The site uses Eleventy with the following structure:
- Input directory: `src/`
- Output directory: `_site/`
- Templates: `src/_includes/` (Nunjucks templates)

### Configuration (.eleventy.js)

- Base layout template: `src/_includes/layout.njk`
- Static assets are copied from `src/assets/` to output
- The `@ce/transliteration` package is copied from node_modules to `_site/assets/repositories/chechen-transliterator/translit.js`

### Content Organization

- `src/index.md` - Home page
- `src/repositories/` - Individual project pages (markdown files)
  - `chechen-transliterator/` - Interactive transliterator tool
  - `chechen-latin-keyboard-{platform}/` - Platform-specific keyboard documentation
    - Includes privacy policy pages for Android app

### Layout System

- Single base template: `src/_includes/layout.njk`
- Uses Bootstrap 4.5.2 for styling
- Responsive navigation with dropdown menu for projects
- Sticky footer layout

### Interactive Features

The transliterator page (`src/repositories/chechen-transliterator/index.md`) has special functionality:
- Uses `@ce/transliteration` package (JSR package: `@jsr/ce__transliteration`)
- Client-side JavaScript: `src/assets/repositories/chechen-transliterator/main.js`
- Handles URL query parameters to pre-fill and transliterate text
- Syncs input text to URL query string for sharing/bookmarking

### Special Handling

- The transliteration logic handles the letter 'н' at word endings with blacklist and unsure list checking
- Unsure words get flagged with 'ŋ[REPLACE]' for manual review

## Dependencies

- Core: `@11ty/eleventy` (static site generator)
- Formatting: `prettier` with `lint-staged` and `husky` for pre-commit hooks
- Runtime: `@ce/transliteration` (Chechen transliteration logic)

## Deployment

This is a GitHub Pages site (indicated by `.nojekyll` file). The built site from `_site/` is deployed to GitHub Pages.
