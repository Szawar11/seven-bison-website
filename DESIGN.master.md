# Seven Bison — DESIGN.master.md

> **Read order for AI agents:** Always read this file first, then load the mode-specific file (`DESIGN.light.md` or `DESIGN.dark.md`) for surface-level overrides. Mode files inherit everything from this master and override only what's listed.
>
> **What this file is:** the single source of truth for everything that does *not* change between Light Corporate Mode and Dark Cinematic Mode — logo, typography, voice, sectors, spacing, grid, motion, components, do/don't.
>
> **What this file is NOT:** a brandbook for humans. Read `D:\SB-temp\Brandbook light\` and `D:\SB-temp\Brandbook dark\` for the human-facing brand guidelines.

---

## 1. Overview

Seven Bison is a premium B2B video, motion design and animation studio for brands in complex, regulated, and visually-challenged industries — Tech, Heavy Industry, Healthcare & Pharma. The brand turns complexity into clarity through industry-specific craft, delivered at scale.

The visual system operates with **two controlled visual modes** that share a single set of foundations:

1. **Light Corporate Mode** — primary brand mode. Used for the website surface, brandbook, pitch decks, proposals, sector pages, client-facing documents, enterprise communications.
2. **Dark Cinematic Mode** — secondary expressive mode. Used for showreels, portfolio hero moments, motion graphics, cinematic video frames, social teasers, case study hero sections, and any high-impact visual application where content benefits from cinematic contrast.

The two modes share the same logo system, typography (Raleway + Inter + Ailerons-as-logo-reference), color tokens, spacing rules, component logic, and brand voice. They differ only in surface hierarchy, image treatment, contrast, and mood.

> **Default rule:** When in doubt, use Light Corporate Mode. Dark Cinematic Mode is reserved for video containers, hero reels, and case study hero sections — not for chrome (nav, footer, body sections).

---

## 2. Theme Architecture

```
SEVEN BISON DESIGN SYSTEM
│
├── MASTER (this file) — shared foundations
│   • Logo system
│   • Typography (Raleway + Inter + Ailerons-as-reference)
│   • Voice & messaging
│   • Sector architecture
│   • Spacing, grid, layout
│   • Motion principles
│   • Component logic
│   • Imagery direction
│   • Do / Don't
│
├── LIGHT CORPORATE MODE — primary, default
│   • Surface tokens (light)
│   • Color ratios (light)
│   • Text colors (ink on light)
│   • Image treatment (real photography, neutral grading)
│   • Component variants for light surfaces
│
└── DARK CINEMATIC MODE — expressive, scoped
    • Surface tokens (dark)
    • Color ratios (dark)
    • Text colors (white on dark)
    • Image treatment (cinematic, deep blacks, magenta accent)
    • Component variants for dark surfaces
```

---

## 3. Logo — Source of Truth

All logo applications must use approved logo files from `D:\SB-temp\Logotypes` (or the project's `public/images/logos/` folder which mirrors that directory).

**Available files (PNG, pending SVG release):**
- `seven-bison-logo-pink.png` — full color (pink mark + pink "SEVENBISON" wordmark) on cream background. **Use on Light Corporate Mode surfaces.**
- `seven-bison-logo-black.png` — monochrome dark (black mark + black wordmark) on cream background. **Use for monochrome print, fax, embossing, or any light surface where pink is unavailable.**
- `seven-bison-logo-white.png` — reverse (white mark + white wordmark) on pure black background. **Use on Dark Cinematic Mode surfaces.**

### Rules

- **Do not redraw, trace, regenerate, or reinterpret the bison mark.** It is a fixed asset.
- **Do not replace the wordmark with editable text.** The "SEVENBISON" wordmark is based on Ailerons but should be treated as a fixed logo asset, not live text.
- **Do not use Ailerons as a CSS font-family anywhere on the site.** Ailerons exists only as a typographic reference under the logo. The logo is a graphic, not a typed string.
- **Do not stretch, recolor, rotate, add glow/shadow, or place on busy low-contrast backgrounds.**
- **Pink color values on logo files are pending alignment with the official web spec (`#E80787`).** Current PNGs may use brandbook-era values (`#C01677` or `#E01677`). Request updated logo exports from the designer when convenient. Mark with TODO until resolved.
- **Logo files are PNG, pending SVG release.** Request SVG exports from the designer. Until then, accept slight quality loss on retina displays and aliasing on small sizes.

### Clear space

Maintain clear space around the logo equal to the height of the "S" in the wordmark (light brandbook spec) or the height of the "X" unit (dark brandbook spec — equivalent). No text, graphics, or other elements should intrude this area.

### Minimum size

- **Digital:** 120px width for primary lockup, 64px for symbol-only.
- **Print:** 25mm width for primary lockup, 16mm for symbol-only.

---

## 4. Typography

The Seven Bison type system uses three families. Two are functional (Raleway, Inter). One is fixed (Ailerons — logo only).

### 4.1 Primary typeface — Raleway

**Used for:**
- All display tier (H1, H2, H3, H4)
- Page titles, section openers, brandbook headings
- Website hero copy
- High-level navigation labels
- Statement copy

**Weights used:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

**Style:** Title Case for display tier. Sentence case for sub-headings. **Never ALL CAPS for display headlines** — Raleway loses its geometric warmth in all-caps. Use uppercase only for micro labels (eyebrows, tags, badges).

### 4.2 Secondary typeface — Inter

**Used for:**
- Body copy (paragraphs)
- UI labels, captions, forms, tables
- Buttons (label text)
- Case study metadata
- Technical descriptions
- Footer text

**Weights used:** 400 (Regular), 500 (Medium), 600 (SemiBold)

### 4.3 Logo wordmark reference — Ailerons

**Used only as the typographic reference under the fixed Seven Bison logo wordmark.**

- Do not load Ailerons as a CSS font-family.
- Do not use Ailerons for general headings, body copy, UI, or buttons.
- The logo is a fixed PNG/SVG asset. The wordmark "SEVENBISON" inside the logo is not editable text.

### 4.4 Type scale

| Token | Style | Font | Weight | Size (desktop) | Line height | Letter spacing | Case |
|---|---|---|---|---|---|---|---|
| `{type.h1}` | Display / hero | Raleway | 700 | 72–80px | 1.05 | -0.01em | Title Case |
| `{type.h2}` | Section opener | Raleway | 600 | 36–44px | 1.15 | -0.005em | Title Case |
| `{type.h3}` | Subsection | Raleway | 500 | 24–32px | 1.25 | 0 | Title Case |
| `{type.h4}` | Label heading | Raleway | 500 | 16–18px | 1.4 | 0 | Title Case |
| `{type.lead}` | Marketing lead body | Inter | 400 | 18–20px | 1.5 | 0 | Sentence |
| `{type.body-lg}` | Body large | Inter | 400 | 16px | 1.6 | 0 | Sentence |
| `{type.body}` | Body default | Inter | 400 | 14–16px | 1.5 | 0 | Sentence |
| `{type.body-sm}` | Body small | Inter | 400 | 12–14px | 1.5 | 0 | Sentence |
| `{type.cta}` | Button label | Inter | 600 | 14px | 1 | 0.02em | Sentence |
| `{type.eyebrow}` | Eyebrow / tag / micro | Inter | 500 | 12px | 1.2 | 0.08em | UPPERCASE |
| `{type.caption}` | Caption | Inter | 400 | 12px | 1.4 | 0 | Sentence |

### 4.5 Type rules

1. Display tier (H1, H2, H3, H4) is always Raleway, always Title Case (or sentence case for sub-tier).
2. Body tier is always Inter, always sentence case.
3. Micro tier (eyebrow, tags, badges) is always Inter Medium, always UPPERCASE, always with 0.08em positive tracking.
4. Maintain high contrast (WCAG AA minimum on body, AAA preferred for body where possible).
5. Generous line spacing for body (1.5–1.6 leading). Tighter for display (1.05–1.25).
6. **Never** mix uppercase display with title-case display in the same view — pick one register per page.

### 4.6 Mobile scale

Display sizes step down on mobile: H1 from 80 → 48–56px, H2 from 44 → 28–32px, H3 from 32 → 22–24px. Body stays at 14–16px.

---

## 5. Voice & messaging

### 5.1 Voice principles

| Pillar | Meaning |
|---|---|
| **Confident** | We speak with authority earned through experience. |
| **Sober** | We are real, grounded, and free of exaggeration. |
| **Specific** | We prefer clarity over clever and facts over filler. |
| **Helpful** | We solve problems and make decisions easier. |
| **Enterprise-Ready** | We understand enterprise needs and communicate with professionalism at every touchpoint. |

### 5.2 Approved brand phrases

Use these verbatim wherever they fit naturally:

- "Launch-ready video in 48 hours"
- "AI-native production, human craft"
- "Remote production"
- "Brand-safe"
- "Enterprise-ready"
- "End-to-end creative partner"

### 5.3 Messaging formula

```
AUDIENCE + INSIGHT + SOLUTION + IMPACT
(who we're + what we   + what we   + why it
 speaking to) understand)  deliver)   matters)
```

**Example:** *"For marketing leaders who need speed without compromise [audience], we understand the pressure to launch on time with brand-safe content [insight]. Seven Bison delivers enterprise-ready video, end-to-end [solution], so teams move faster and stay ahead [impact]."*

### 5.4 CTA language

Approved CTA verbs:
- "Talk to our team"
- "Request a custom quote"
- "See our process"
- "Book a discovery call"
- "Start your project"
- "See our [sector] work"

### 5.5 Avoid

- Hype, superlatives, exaggerated claims
- Buzzword overload, vague statements
- Sci-fi or futuristic language ("revolutionary AI", "next-gen")
- Casual slang, internet shorthand
- Cheapness or price-first framing
- Jargon without explanation
- Exclamation marks
- "We're excited to…", "We'd love to…", "Amazing", "Incredible", "Game-changing"

### 5.6 AI disclosure

- AI is named clearly where relevant, never as the hero.
- "AI powers. People perfect." — approved framing.
- AI is the production engine. Strategy, judgment, taste, storytelling stay human.
- No "AI" badges, no "AI-generated" labels, no separate AI category on the marketing site.
- Detailed AI disclosure lives in client contracts, not on the marketing site.

---

## 6. Sector architecture

Three core sectors. These are the spine of the site and the engine of direct outreach.

| Sector | Sub-categories | Anchor brands |
|---|---|---|
| **Tech** | Cybersecurity, Fintech, Software, SaaS | Outpost24, Alacriti, AWS, R3 |
| **Heavy Industry** | Manufacturing, Energy, Infrastructure, Logistics | Aramco, Hilti, Sherwin Williams, Daikin, TF Kable |
| **Healthcare & Pharma** | Medtech, Biotech, Pharma, Health Systems | Roche, Bayer, Santen, Harris Health, Pfizer |

Each sector gets a dedicated subpage. Tech has sub-sector anchors (`#cybersecurity`, `#fintech`, `#software-saas`) for deep-linking from outreach.

---

## 7. Color system — shared tokens

These tokens are referenced by both modes. Each mode assigns them to surface/text/accent roles differently.

| Token | Hex | RGB | Pantone (closest) | Notes |
|---|---|---|---|---|
| `{color.pink}` | `#E80787` | 232 / 7 / 135 | — | Primary brand pink. Web-spec. Logo files use brandbook-era `#C01677` or `#E01677` — request updated exports. |
| `{color.ink}` | `#111111` | 17 / 17 / 17 | Pantone Black 6 C | Default ink for text and dominant surface in dark mode. |
| `{color.graphite}` | `#2A2A2A` | 42 / 42 / 42 | Pantone 432 C | Secondary surface / secondary text. |
| `{color.gray-mid}` | `#8A8A8A` | 138 / 138 / 138 | Pantone 423 C | Mid gray for borders, dividers, captions. |
| `{color.gray-soft}` | `#E8E8E8` | 232 / 232 / 232 | Pantone Cool Gray 1 C | Soft gray for subtle surfaces and dividers on light. |
| `{color.off-white}` | `#F7F5F2` | 247 / 245 / 242 | Pantone 663 C | Off-white canvas for light mode. Warm, not pure white. |
| `{color.white}` | `#FFFFFF` | 255 / 255 / 255 | — | Pure white. Use sparingly — `{color.off-white}` is the default light canvas. |
| `{color.black}` | `#000000` | 0 / 0 / 0 | — | Pure black. Used for dark mode canvas and pure-monochrome moments. |

### Pink usage rule (mode-agnostic)

Pink is **signal, never surface.** It marks:
- Primary CTAs
- Single accent lines (1px hairlines marking section breaks)
- Single icon strokes
- Key data highlights (one number, one metric)
- Active states
- Sector iconography accents

Pink **never** fills large areas. No pink backgrounds, no pink gradients, no pink glow, no pink decorative shapes.

---

## 8. Spacing system

**Base unit:** 4px. Most components round to 8px multiples.

| Token | Value | Use |
|---|---|---|
| `{space.0}` | 0 | — |
| `{space.1}` | 4px | Hairline gaps, icon padding |
| `{space.2}` | 8px | Tight inline spacing |
| `{space.3}` | 12px | Form padding |
| `{space.4}` | 16px | Default content gap |
| `{space.6}` | 24px | Content block gap |
| `{space.8}` | 32px | Section internal padding |
| `{space.10}` | 40px | Card padding |
| `{space.12}` | 48px | Section spacing (tight) |
| `{space.16}` | 64px | Section spacing (default) |
| `{space.20}` | 80px | Section spacing (loose) |
| `{space.24}` | 96px | Hero spacing |
| `{space.32}` | 128px | Major separation |

---

## 9. Layout & grid

### 9.1 Grid

- **12-column grid**
- **Max content width:** 1440px (light) / 1440px (dark, but reels can break to full-bleed)
- **Outer margins:** 80px desktop / 32px tablet / 24px mobile
- **Gutter:** 24px desktop / 16px tablet / 12px mobile
- **Inner reading column:** max 720px for body text (readability ceiling)

### 9.2 Breakpoints

| Name | Width |
|---|---|
| Mobile | < 768px |
| Tablet | 768 – 1023px |
| Laptop | 1024 – 1439px |
| Desktop | ≥ 1440px |

### 9.3 Negative space

Generous. Editorial pacing. Density is the enemy of premium. Major section spacing defaults to `{space.16}` (64px) or `{space.20}` (80px); hero areas use `{space.24}` (96px) or more.

---

## 10. Motion principles

Motion should support understanding and elevate the story. Every movement serves a reason.

### 10.1 Principles

- **Purpose-led movement** — every motion has intent and supports the story.
- **Smooth & controlled** — eased motion with natural acceleration.
- **Build with hierarchy** — guide attention with timing, scale, and space.
- **Subtle & refined** — restraint comes through.
- **Seamless transitions** — transitions feel natural and unobtrusive.

### 10.2 Defaults

- Page transitions: 400–600ms
- Hover micro-interactions: 150–250ms
- Scroll reveals: 600–800ms with stagger (60–80ms between elements)
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for entrances, `ease-out` for exits
- Reduced-motion media query is **always respected** — disable non-essential motion when `prefers-reduced-motion: reduce`

### 10.3 Avoid

- Bouncy spring animations
- Long, theatrical reveals (>1.2s)
- Constant ambient motion that distracts from content
- Hover effects that aren't functional
- Parallax that disrupts reading flow

---

## 11. Component logic (shared)

Mode files define visual styling. This section defines **structural behavior** common to both modes.

### 11.1 Buttons

Five button styles exist across the system. Each mode defines its own colors; structure is shared.

| Token | Use | Shape |
|---|---|---|
| `{btn.primary}` | Primary action — the main CTA on a section | Filled pink, label text |
| `{btn.secondary}` | Alternative action | Outlined pink, label text |
| `{btn.tertiary}` | Tertiary action — admin / utility | Outlined gray, label text |
| `{btn.ghost}` | Lightweight action — often inside cards | Dashed pink outline |
| `{btn.text}` | Inline action | Pink text + arrow `→`, no border |

**Shape rules:**
- Sharp corners (0 or 2px max border-radius). Never pill-shaped.
- Padding: 12px vertical, 24px horizontal (default). 16/32 for hero CTAs.
- Hover: subtle (1–2px translateY shift, 10% bg opacity change, or arrow shift). **No glow.**
- Active: 1px translateY for tactile feedback.
- Focus: 2px pink outline, 4px offset.

### 11.2 Cards

- Padding: 24–40px depending on density.
- Border-radius: 0 or 2px.
- Border: 1px solid `{color.gray-soft}` (light mode) or 1px solid `rgba(255,255,255,0.1)` (dark mode).
- Edge-aligned, high-contrast, generous padding.
- Image-first where relevant.
- **No drop shadow.** Cards earn elevation from contrast and border, not blur.

### 11.3 Dividers

- 1px solid pink for primary section breaks (used sparingly — once or twice per page max).
- 1px solid `{color.gray-soft}` (light) or `rgba(255,255,255,0.15)` (dark) for subtle separation.

### 11.4 Tags / badges

- Filled: pink background, ink text, UPPERCASE 12px Inter Medium, 0.08em tracking, 4–8px horizontal padding.
- Outlined: 1px solid `{color.gray-soft}` or `rgba(255,255,255,0.3)`, label text.

### 11.5 Callout boxes

- 1px solid pink border (or pink left border 4px + transparent background).
- Pink icon left, body text right.
- Used for "high performance / zero compromise" style statements only. **One per page max.**

### 11.6 Forms

- Input: 48px height (touch target), 12px vertical / 16px horizontal padding.
- Border: 1px solid `{color.gray-soft}` (light) or 1px solid `rgba(255,255,255,0.15)` (dark).
- Focus: 2px pink border, no glow.
- Label: above input, `{type.eyebrow}` style.
- Helper text: below input, `{type.caption}` style.

### 11.7 Navigation

- Sticky top nav.
- Logo left, primary links center or right, single CTA far right.
- Height: 72px desktop, 56px mobile.
- Mobile: hamburger trigger, full-height drawer.
- **Always-visible CTA** in nav.

---

## 12. Imagery direction

### 12.1 Preferred imagery

- **Polished industry environments** — clean, modern factory floors, control rooms, labs, real-world context.
- **Elegant product visuals** — purposeful details, materials, form.
- **Abstract tech textures** — patterns, data, digital landscapes.
- **Restrained motion graphics** — clean shapes, lines, subtle motion.
- **Premium UI / dashboard framing** — interfaces that feel clear and premium.

### 12.2 Mode-specific direction

**Light Corporate Mode imagery:**
- Real photography, true-to-life color grading.
- Neutral tones, soft contrast, natural lighting.
- Industrial / scientific / corporate environments with people.
- Color palette: cool neutrals with controlled highlights.

**Dark Cinematic Mode imagery:**
- Cinematic, deep blacks, controlled magenta accents.
- Abstract textures, light traces, motion blur.
- High-contrast, controlled directional lighting.
- Magenta (`#E80787`) reserved for accent and emphasis only.

### 12.3 Avoid

- Chaotic collage
- Oversaturated imagery
- Flashy VFX
- Stock photo clichés (forced smiles, generic handshakes, "diverse team in glass conference room")
- Heavy lens flares
- Overcrowded graphics
- Meme energy

---

## 13. Do / Don't (master)

### Do
- ✅ Use the master typography stack: Raleway display + Inter body + Ailerons logo-only.
- ✅ Pink as signal (CTAs, accents, key data highlights only).
- ✅ Generous negative space — editorial pacing.
- ✅ Sharp corners on all UI (0 or 2px radius max).
- ✅ Real photography (light mode) or cinematic abstraction (dark mode).
- ✅ Title Case for display headlines.
- ✅ UPPERCASE for micro labels (eyebrows, tags) only.
- ✅ Light Corporate Mode by default. Dark Cinematic Mode only inside reels and case study heroes.

### Don't
- ❌ Don't use Ailerons as a CSS font-family. It is logo-only.
- ❌ Don't use Oswald or any other display font. Raleway is the single display family.
- ❌ Don't use Cormorant Garamond or any editorial serif. Removed from the unified system.
- ❌ Don't use ALL CAPS for display headlines (H1, H2, H3). Title Case only.
- ❌ Don't use gradients (color, text, button, background). Solid colors only.
- ❌ Don't use glassmorphism, backdrop blur, frosted panels.
- ❌ Don't use glow effects, neon haze, drop shadows on logos or buttons.
- ❌ Don't fill large surfaces with pink. Pink is signal.
- ❌ Don't use generic sci-fi AI visuals (particle backgrounds, swirling meshes).
- ❌ Don't use purple. Pink is `#E80787` — never drift toward violet.
- ❌ Don't stretch, recolor, rotate, or regenerate the logo.
- ❌ Don't mix modes in the same chrome (nav, footer). One mode per surface.
- ❌ Don't use pill-shaped buttons. Sharp corners.
- ❌ Don't use exclamation marks in copy.
- ❌ Don't show pricing on the public site.

---

## 14. Website-level rules

- **Default mode:** Light Corporate Mode for all chrome (nav, footer), body sections, sector pages, Studio Access page, About, Contact.
- **Dark Cinematic Mode is used inside:**
  - Hero reel container (full-bleed video on homepage and sector pages)
  - Case study hero sections (top of each case study page)
  - Selected work mosaic on homepage (thumbnails are dark)
  - Portfolio page hero
- **Transition between modes** is handled at the section boundary — no global toggle. The dark cinematic block is a visual "moment", not a setting.
- **No pricing visible anywhere.**
- **All CTAs route to Calendly** for direct intro calls with the founder.
- **Video assets** live on Vimeo or Mux. Never self-host marketing reels.

---

## 15. Iteration guide for AI agents

1. **Always read this master file first**, then load the mode-specific file (`DESIGN.light.md` or `DESIGN.dark.md`) for the surface you're working on.
2. **Reference tokens directly** (`{color.pink}`, `{type.h1}`, `{space.16}`, `{btn.primary}`) — never hardcode hex values, font names, or pixel values.
3. **Mode selection:** if the component is part of the page chrome or body, use Light Corporate Mode. If the component is part of a reel container, hero video frame, or case study hero, use Dark Cinematic Mode.
4. **When the brand rule and the user request conflict, ask before overriding.** Brand rules protect the premium positioning and are the highest-priority constraint.
5. **Pre-publish checklist before any PR:**
   1. ☐ Correct logo file used (`logo-pink.png` for light, `logo-white.png` for dark, `logo-black.png` for monochrome fallback).
   2. ☐ Only approved colors used (pink `#E80787`, ink, graphite, gray-mid, gray-soft, off-white, white, black).
   3. ☐ Typography on-brand: Raleway display, Inter body. **No Ailerons in CSS. No Oswald. No Cormorant.**
   4. ☐ Strong contrast (WCAG AA on body, AAA preferred).
   5. ☐ Messaging aligned with voice principles (Confident, Sober, Specific, Helpful, Enterprise-Ready).
   6. ☐ No cheap effects (no gradients, no glassmorphism, no glow, no AI clichés).
   7. ☐ Pink used only as signal, not as surface.
   8. ☐ Negative space generous; layout not crowded.
   9. ☐ Mode used correctly (Light for chrome, Dark scoped to reels/hero).
   10. ☐ No pricing visible.

---

## 16. Known TODOs / pending validations

These are items where the brand spec needs designer follow-up:

1. **Logo files are PNG, pending SVG release.** SVG enables proper retina rendering, CSS coloring, and motion. Request SVG exports.
2. **Logo pink color may use brandbook-era `#C01677` or `#E01677`.** Web spec is `#E80787`. Request updated logo exports in the web-spec hex.
3. **Light brandbook color ratio (60/20/10/5/3/2)** appears to overstate pink as dominant. Visual evidence across light brandbook pages shows pink as accent (~5–10% surface coverage). Treating as accent until designer confirms.
4. **Cream tone on PNG logo backgrounds** may not exactly match `{color.off-white}` (`#F7F5F2`). Confirm by overlaying logo on site canvas during QA pass.

---

**Every asset should feel coherent, deliberate, and unmistakably Seven Bison.**
