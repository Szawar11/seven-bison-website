# Seven Bison — DESIGN.md

> **For AI agents (Claude Code, Stitch, Lovable, v0, Cursor):** This is the entry point to the Seven Bison design system. Read this file first to understand the structure, then load the files referenced below.

---

## How to read this design system

The Seven Bison brand operates with **two controlled visual modes** sharing one set of foundations:

```
DESIGN.md            ← you are here (entry point + read order)
│
├── DESIGN.master.md ← shared foundations (logo, typography, voice, spacing, motion, components)
├── DESIGN.light.md  ← Light Corporate Mode (default — used for website chrome and body)
└── DESIGN.dark.md   ← Dark Cinematic Mode (scoped — used for reels and case study heroes only)
```

### Required read order

1. **Always start with `DESIGN.master.md`.** This file holds the shared system that does not change between modes.
2. **Then load the mode-specific file** for the surface you're working on:
   - For page chrome, body sections, sector pages, Studio Access, About, Contact → **`DESIGN.light.md`**
   - For hero reel containers, case study heroes, portfolio hero, selected work mosaic → **`DESIGN.dark.md`**
3. **When a section sits inside another mode**, the inner section adopts the inner mode and the boundary is a clean edge — never a fade or gradient.

---

## Mode selection rules

| Surface | Mode |
|---|---|
| Global header / nav | Light (except on portfolio page hero, where nav overlays dark) |
| Global footer | Light |
| Homepage hero — left column (headline + CTA) | Light |
| Homepage hero — right column (reel container) | **Dark** |
| Homepage trust strip | Light |
| Homepage end-to-end partner block | Light |
| Homepage sector cards | Light |
| Homepage selected work mosaic | **Dark** |
| Homepage how-we-work | Light |
| Homepage testimonials | Light |
| Homepage final CTA | Light |
| Sector page hero | Light (with dark reel container inside, same pattern as homepage) |
| Sector page body | Light |
| Studio Access page | Light |
| Portfolio page hero | **Dark** |
| Portfolio page body | Light |
| About page | Light |
| Contact page | Light |
| Case study page hero | **Dark** |
| Case study page body | Light |
| Case study page video embeds | **Dark** (within the embed frame) |

---

## Core rule

> **Light is the default brand system. Dark is the cinematic production layer.**

If the surface is part of how visitors *read*, *navigate*, or *act*, it is Light. If the surface is part of how visitors *experience the work* (reels, case study openings, motion-led storytelling), it is Dark.

---

## Logo source of truth

All logo applications use approved files from `D:\SB-temp\Logotypes` — mirrored in the project's `public/images/logos/` folder.

Available files:
- `seven-bison-logo-pink.png` — for Light Mode surfaces
- `seven-bison-logo-black.png` — for monochrome fallback on light surfaces
- `seven-bison-logo-white.png` — for Dark Mode surfaces

Do not redraw, trace, regenerate, or reinterpret the bison mark or wordmark. The logo is a fixed asset.

---

## Quick token reference

Detailed in master and mode files. Most-used tokens:

| Token | Light value | Dark value |
|---|---|---|
| `{surface.canvas}` | `#F7F5F2` | `#000000` |
| `{text.primary}` | `#111111` | `#FFFFFF` |
| `{color.pink}` | `#E80787` (both) | `#E80787` (both) |
| Primary type (display) | Raleway (both) | Raleway (both) |
| Secondary type (body) | Inter (both) | Inter (both) |
| Logo file | `logo-pink.png` | `logo-white.png` |

---

## Pre-flight checklist for any UI work

Before writing code:

1. ☐ I have read `DESIGN.master.md`
2. ☐ I know which mode the current surface uses (Light or Dark)
3. ☐ I have read the mode-specific file (`DESIGN.light.md` or `DESIGN.dark.md`)
4. ☐ I will reference tokens, not hardcoded values
5. ☐ I will not introduce Ailerons as a CSS font
6. ☐ I will not use Oswald, Cormorant, or any display font other than Raleway
7. ☐ I will not use gradients, glassmorphism, glow effects, or drop shadows
8. ☐ Pink will be signal, not surface
9. ☐ The logo file matches the surface mode

If any item above is unchecked, stop and re-read the relevant file before continuing.
