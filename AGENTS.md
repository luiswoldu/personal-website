# Project Guidelines & Agent Instructions

This document governs agent behavior across all conversations in this repository.

## 1. Strict Color Palette Restrictions

> [!IMPORTANT]
> **ONLY use the predefined color palette tokens below.**
> **NEVER create new color variables, make up new colors, or introduce arbitrary hex / rgb / hsl / opacity values.**

The design system uses a strictly controlled, intentional color palette defined in `app/globals.css`. All components, styles, and markup must exclusively reference these tokens:

| Token | CSS Variable | Hex | Tailwind Utility Class | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Page / Surface** | `--color-page`, `--color-surface` | `#ffffff` | `bg-page`, `bg-surface` | Primary canvas & card surface background |
| **Primary Ink** | `--color-ink`, `--color-primary-ink` | `#1d1d1f` | `text-ink`, `text-primary-ink`, `bg-ink` | Primary text, titles, headings, and high-emphasis elements |
| **Secondary Grey** | `--color-secondary-grey` (aliases: `--color-secondary`, `--color-muted`, `--color-faint`) | `#6e6e73` | `text-secondary-grey`, `text-secondary`, `text-muted` | Subtitles, metadata, secondary captions, subtle text |
| **Line** | `--color-line` | `#f1f1f1` | `border-line`, `bg-line`, `text-line` | Dividers, hair lines, borders, tile placeholder fills, separators |
| **Accent (Interim)** | `--color-accent` | `#6e6e73` | `text-accent`, `bg-accent` | Aliased to secondary grey until new accent is introduced |

## 2. Typography & Fonts

- The site uses **Gotham** (`--font-gotham`, aliased to `--font-sans`):
  - Gotham Book: `font-normal` (weight `400`)
  - Gotham Medium: `font-medium` (weight `500`)
  - Gotham Bold: `font-bold` (weight `700`)
- Maintain existing tracking and font hierarchies across layouts.