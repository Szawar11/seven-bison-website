# CLAUDE.md — Operating Instructions for Claude Code

You are working on the Seven Bison studio website rebuild. Read this file at the start of every session.

---

## Mandatory reading order

Before any UI work, read these files in order:

1. **`DESIGN.md`** — entry point. Tells you the system structure and mode selection rules.
2. **`DESIGN.master.md`** — shared foundations (logo, typography, voice, sectors, spacing, motion, components).
3. **The mode-specific file** for the surface you're touching:
   - `DESIGN.light.md` if working on page chrome, body sections, sector pages, Studio Access, About, Contact.
   - `DESIGN.dark.md` if working on hero reel containers, case study heroes, portfolio hero, or selected work mosaic.
4. **`BRAND.md`** — extended brand context not covered in DESIGN.md (sector pain points, founder story, business rules, anti-patterns).
5. **`outline.md`** — strategic brief from Szymon (site map, section-by-section copy direction, audience paths, build order).

If a request conflicts with `DESIGN.master.md` or the mode files, flag it and ask. Don't quietly override brand rules.

---

## What this project is

A production website for Seven Bison — a premium B2B video and motion design studio. The site has to communicate:

1. **Industry-specific craft** (Tech, Heavy Industry, Healthcare & Pharma)
2. **Operational scale** (Studio Access, ongoing partnerships)
3. **Premium finish** (Light Corporate Mode for chrome, Dark Cinematic Mode for reels — never "AI startup")

The work sells the work. The site is a frame for the reels and case studies.

---

## Stack

- **Astro 4+** — static-first, minimal JS, perfect for content-heavy + video-heavy sites where LCP matters.
- **Tailwind CSS** — with custom config that mirrors design tokens. Never use arbitrary values (`text-[#e80787]`) — always use named tokens (`text-accent`).
- **TypeScript** strict mode.
- **MDX** for case studies and sector pages (long-form editorial content).
- **Vimeo / Mux** for video embeds. Do **not** self-host reels.
- **Calendly** embed for booking CTAs.

---

## Build order

1. Sector subpage template (Tech first — sales outreach depends on this).
2. Homepage.
3. Studio Access page.
4. Portfolio page.
5. About / Contact.
6. Case study template.

Build the Tech sector page end-to-end before touching the homepage. The sector template is the most-used pattern on the site.

---

## Aesthetic non-negotiables (the rules that get broken by reflex)

These come from `DESIGN.master.md` but bear repeating because AI agents violate them by default:

### Typography
- **Display: Raleway only.** No Oswald, no Cormorant, no any other display font.
- **Body: Inter only.**
- **Ailerons is NEVER loaded as a CSS font-family.** It is the typographic reference under the logo, which is a fixed PNG/SVG asset.
- **Title Case for display headlines.** Never ALL CAPS for H1/H2/H3.
- **UPPERCASE only for micro labels** (eyebrows, tags, badges) with 0.08em tracking.

### Color
- **No gradients.** Not background gradients, not text gradients, not button gradients. Solid colors only.
- **No purple.** The brand is pink `#E80787` — never drift toward violet, magenta-purple, or pink-purple gradients.
- **Pink is signal, not surface.** Pink fills less than 10% of any viewport. Used for: primary CTAs, single accent lines, one icon stroke, key data highlights.
- **Light canvas is `#F7F5F2` (warm off-white), not `#FFFFFF` (pure white).** Pure white reads cold and "SaaS-y".
- **Dark canvas is `#000000` (pure black), not a near-black.** Pure black reads cinematic.

### Effects
- **No glassmorphism.** No `backdrop-filter: blur` (except sticky nav — single allowed exception).
- **No glow.** No `box-shadow` with pink color. No `text-shadow`. No neon.
- **No drop shadows on cards or buttons.** Cards earn elevation from contrast and border.
- **No particle backgrounds.** No animated mesh. No floating orbs. No AI-startup tropes.

### Mode boundaries
- **Light Corporate Mode by default.** All chrome, body sections, sector pages, Studio Access, About, Contact.
- **Dark Cinematic Mode is scoped.** Only inside: hero reel container (right column of homepage hero), case study hero, portfolio hero, selected work mosaic.
- **Mode boundary is a clean edge.** No fades. No gradients. No transitional shading.

### Logo
- **Never generate the bison mark in inline SVG paths.** Use only the PNG files from `public/images/logos/`.
- **Use the right file for the mode:**
  - Light Mode → `logo-pink.png`
  - Dark Mode → `logo-white.png`
  - Monochrome fallback on light → `logo-black.png`
- **Never apply CSS effects** (filter, transform: rotate/scale beyond 1:1, drop-shadow) to logo files.

---

## When generating components

1. Open `DESIGN.master.md` and confirm the relevant section (colors, type, spacing, motion).
2. Open the mode file (`DESIGN.light.md` or `DESIGN.dark.md`) for surface-level tokens.
3. Use Tailwind tokens from `tailwind.config.mjs` — not arbitrary values.
4. Match the spacing system (4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128).
5. Match the 12-column grid for layout.
6. Use the right logo file for the surface mode.
7. Run through the pre-flight checklist in `DESIGN.md` mentally before declaring done.

---

## Voice rules for copy

From `DESIGN.master.md` section 5:

- **Confident.** Lead with expertise. No "we're excited to" or "we'd love to".
- **Sober.** No exclamation marks. No "amazing", "incredible", "game-changing".
- **Specific.** Name the sector, name the brand, name the deliverable. No vague claims.
- **Helpful.** Tell the visitor what to do next. One clear next step per section.
- **Enterprise-Ready.** Professional at every touchpoint.

When writing placeholder copy, use the approved brand phrases from `DESIGN.master.md` section 5.2.

---

## Things you should ask before doing

- Adding a new dependency.
- Changing the color palette or type stack.
- Adding any animation beyond the motion principles in `DESIGN.master.md` section 10.
- Switching a Light Mode section to Dark, or vice versa.
- Adding any "AI"-themed visual treatment.
- Modifying or replacing logo files.
- Adding a runtime light/dark toggle for the user — this is **not** part of the system. Modes are surface-scoped, not user-toggleable.

---

## What "done" looks like for a component

- Visually matches `DESIGN.master.md` + the relevant mode file without exception.
- Uses semantic HTML and proper heading order.
- Passes accessibility audit (contrast, focus states, keyboard nav, alt text).
- Is responsive — desktop, tablet, mobile breakpoints.
- Uses motion sparingly and purposefully (see motion principles in master).
- Has no console warnings or errors.
- Loads fast (no JS for static content, video lazy-loaded, fonts with `display: swap`).
- Pre-flight checklist in `DESIGN.md` is satisfied.

---

## Refactor note (from previous starter)

The previous version of this project used a single `BRAND.md` and a dark-only token stack (Oswald + `#E01677` + black canvas). The system has since evolved to:

- **Two-mode system** (Light Corporate + Dark Cinematic) with shared foundations.
- **Raleway** as the unified display font.
- **`#E80787`** as the unified pink.
- **`#F7F5F2`** as the light canvas.

If you encounter old code referencing Oswald, `#E01677`, `#000000` as default canvas, or `bg-black` / `text-offwhite` hardcoded as defaults — this is **stale** and needs refactoring to the current system. Refactor opportunistically as you touch each file.

The current `tailwind.config.mjs` and `src/styles/global.css` may still reflect the old system. If so, regenerate them based on the tokens in `DESIGN.master.md`, `DESIGN.light.md`, and `DESIGN.dark.md` as a first task when you begin work.
