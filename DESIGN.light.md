# Seven Bison — DESIGN.light.md

> **Light Corporate Mode** — primary brand mode. Default for website chrome, body sections, sector pages, Studio Access, About, Contact, brandbook, pitch decks, proposals, and any client-facing surface.
>
> **Inherits from `DESIGN.master.md`.** This file overrides only surface tokens, color roles, image treatment, and component variants specific to light. Everything else (logo, typography, voice, sectors, spacing, grid, motion, voice, do/don't) comes from the master.

---

## 1. Mode philosophy

Light is the default Seven Bison brand expression. It should feel:

- **Clear** — content is the focus, surface gets out of the way.
- **Premium** — generous space, refined type, controlled accent.
- **Corporate-ready** — passes review at Tech, Heavy Industry, Healthcare & Pharma buyers.
- **Sector-specific** — depth signaled by content, not chrome.
- **Calm** — never loud, never trendy.
- **Precise** — every element earns its place.
- **Trustworthy** — built for serious B2B.

Light backgrounds, strong ink typography, generous spacing, thin divider lines, and Seven Bison Pink as a precise accent.

---

## 2. Surface tokens (light)

| Role | Token | Hex | Use |
|---|---|---|---|
| Canvas (default) | `{surface.canvas}` | `#F7F5F2` | Default page background. Warm off-white, not pure white. |
| Canvas (pure) | `{surface.canvas-pure}` | `#FFFFFF` | Use sparingly — for image-backed cards or callouts that need pop. |
| Soft surface | `{surface.soft}` | `#F2F0ED` | Subtle section break. One step warmer than canvas. |
| Muted surface | `{surface.muted}` | `#E8E8E8` | Disabled states, subtle dividers. |
| Hairline | `{surface.hairline}` | `#E8E8E8` | 1px borders on cards, inputs, section dividers. |
| Hairline-accent | `{surface.hairline-accent}` | `#E80787` | 1px pink hairline for section-break moments (used sparingly). |

### 2.1 Surface usage rule

The page background is `{surface.canvas}` (`#F7F5F2`) by default. Sections rarely change surface — when they do, the change is one step (canvas → soft, or soft → canvas), never a leap (canvas → pure white).

---

## 3. Text colors (light)

| Role | Token | Hex | Use |
|---|---|---|---|
| Primary text | `{text.primary}` | `#111111` | Default body and display text. |
| Secondary text | `{text.secondary}` | `#2A2A2A` | Supporting body, less emphasized. |
| Muted text | `{text.muted}` | `#6F6F6F` | Captions, helper text, metadata. |
| Disabled text | `{text.disabled}` | `#8A8A8A` | Disabled labels. |
| Inverse text | `{text.inverse}` | `#F7F5F2` | Text on filled-pink CTAs and dark-cinematic blocks. |
| Accent text | `{text.accent}` | `#E80787` | Inline links, single accent words, key data highlights. |

---

## 4. Color ratio (light, corrected)

| Coverage | Color | Role |
|---|---|---|
| ~80% | `{surface.canvas}` `#F7F5F2` | Dominant — page surface |
| ~12% | `{text.primary}` `#111111` | Text, primary hierarchy |
| ~5% | `{color.gray-mid}` / `{color.gray-soft}` | Secondary text, dividers, supporting structure |
| ~3% | `{color.pink}` `#E80787` | Accent — CTAs, key highlights, single hairlines |

> **Note:** Light brandbook page 4 cites `60% Pink / 20% Black / 10% Graphite / 5% Medium Gray / 3% Soft Gray / 2% Off-White`. Visual evidence across all brandbook pages shows pink as accent, not dominant. Treating brandbook ratio as a probable error in the source document; ratio above reflects the actual visual hierarchy of the brand. Pending designer validation.

---

## 5. Component variants (light)

### 5.1 Buttons

**`{btn.primary}` — Primary CTA**
- Background: `{color.pink}` (`#E80787`)
- Text: `{text.inverse}` (`#F7F5F2`)
- Border: none
- Padding: 12px vertical, 24px horizontal
- Hover: background darkens to `#D00679` (10% darker)
- Active: 1px translateY
- Type: `{type.cta}` (Inter SemiBold 14px, 0.02em tracking)

**`{btn.secondary}` — Secondary CTA**
- Background: transparent
- Text: `{color.pink}`
- Border: 1px solid `{color.pink}`
- Hover: background fills with `{color.pink}` at 8% opacity
- Padding: 12px vertical, 24px horizontal

**`{btn.tertiary}` — Tertiary / utility**
- Background: transparent
- Text: `{text.primary}` (`#111111`)
- Border: 1px solid `{color.gray-soft}`
- Hover: border darkens to `{color.gray-mid}`
- Padding: 12px vertical, 24px horizontal

**`{btn.ghost}` — Lightweight**
- Background: transparent
- Text: `{color.pink}`
- Border: 1px dashed `{color.pink}`
- Hover: border becomes solid
- Padding: 12px vertical, 24px horizontal

**`{btn.text}` — Inline action**
- Text: `{color.pink}` + arrow `→`
- No background, no border
- Hover: gap between text and arrow widens 2–4px

### 5.2 Cards

- Background: `{surface.canvas}` or `{surface.soft}` for differentiation
- Border: 1px solid `{surface.hairline}` (`#E8E8E8`)
- Padding: 24–40px
- Border-radius: 0 or 2px
- No drop shadow. No backdrop blur.
- Hover (when interactive): border shifts to `{color.pink}`, optional 1px translateY

### 5.3 Inputs

- Background: `{surface.canvas-pure}` (`#FFFFFF`) — only place pure white appears in light mode
- Text: `{text.primary}`
- Border: 1px solid `{surface.hairline}`
- Focus: 2px solid `{color.pink}`, no glow
- Padding: 12px vertical, 16px horizontal
- Height: 48px (touch target)

### 5.4 Navigation

- Background: `{surface.canvas}` with 90% opacity + 1px backdrop blur (only for sticky nav, the one allowed exception to "no blur")
- Text: `{text.primary}`
- Active state: `{color.pink}`
- Hover: text shifts from `{text.primary}` to `{color.pink}`
- Border-bottom: 1px solid `{surface.hairline}`

### 5.5 Footer

- Background: `{surface.canvas}` (same as page) or `{surface.soft}` for subtle differentiation
- Text: `{text.muted}`
- Links: `{text.primary}`, hover to `{color.pink}`
- Border-top: 1px solid `{surface.hairline}`

### 5.6 Tags / badges

- **Filled:** `{color.pink}` background, `{text.inverse}` text, UPPERCASE 12px Inter Medium, 0.08em tracking
- **Outlined:** 1px solid `{color.gray-soft}`, `{text.primary}` text, UPPERCASE 12px Inter Medium

### 5.7 Dividers

- Hairline: 1px solid `{surface.hairline}` (subtle separation)
- Accent: 1px solid `{color.pink}` (section break — used sparingly, once or twice per page max)

---

## 6. Imagery (light)

### 6.1 Treatment

- **Real photography** is the default.
- **True-to-life color grading** — natural, neutral, controlled contrast.
- **Soft natural lighting** — no harsh contrast, no dramatic shadows.
- **Subjects:** industrial environments with people, labs, control rooms, products, polished workplace shots.
- **Color palette of imagery:** cool neutrals, soft blues, warm grays, controlled highlights.

### 6.2 Where pink appears in imagery

- Pink only enters imagery as overlay accents — a thin pink line in a UI dashboard frame, a pink accent on a product detail.
- Never tint photography pink.
- Never use magenta gels or color grading.

### 6.3 Image-backed sections

- Image-backed sections may use a slightly darker variant of the canvas (`{surface.soft}`) underneath, never the inverse mode.
- Image overlays use `rgba(17, 17, 17, 0.0)` to `rgba(17, 17, 17, 0.4)` max — never pure black overlay on light surface.

---

## 7. Hero treatment (light)

The website hero in Light Corporate Mode is **split-frame**, not full-bleed:

- **Left column (5–7 of 12):** H1 headline in Raleway Bold 72–80px, Title Case, supported by lead paragraph in Inter 18–20px and primary CTA.
- **Right column (5–7 of 12):** Image container — this is the **one zone where Dark Cinematic Mode appears**. The container holds the autoplay reel with dark cinematic color grading. Background of the container is `{color.black}` or `{color.ink}`.

This split honors the "Light is default, Dark is cinematic layer" rule: the page chrome stays light, the reel container stays dark, the boundary is clean.

**Alternative hero (sector pages):** full-bleed image of a polished industry environment with H1 overlaid in `{text.primary}`. Use only when the image has enough light area (sky, wall, floor) to host the type without an overlay.

---

## 8. Sector card treatment (light)

On the homepage sector block:

- Card background: `{surface.canvas}` with 1px solid `{surface.hairline}`
- Image area (4:3 aspect): Real photography, light corporate treatment.
- Sector title: H2 Raleway SemiBold 36–44px, `{text.primary}`
- Sub-sector chips: outlined tags
- Anchor brands: caption Inter 14px, `{text.muted}`
- CTA: `{btn.text}` "See our [sector] work →"
- Hover: card border shifts to `{color.pink}`, image scales 1.02

---

## 9. Light mode do / don't

### Do
- ✅ Default to `{surface.canvas}` (`#F7F5F2`) — never pure white as page background.
- ✅ Use ink black (`#111111`) for body text, not pure black.
- ✅ Use pink for CTAs and inline-link accents only.
- ✅ Use real photography with true-to-life color grading.
- ✅ Use 80px outer margins on desktop for generous editorial pacing.
- ✅ Place dark cinematic blocks (reels, case study heroes) inside contained zones — keep page chrome light.

### Don't
- ❌ Don't use pure white as the page canvas — it reads cold and "SaaS-y". Stick to off-white.
- ❌ Don't darken full sections to mimic dark mode. Dark mode is for reel containers and case study heroes only.
- ❌ Don't use pink for surface fills (backgrounds, large blocks). Pink is signal.
- ❌ Don't use drop shadows on cards. Earn elevation from border + contrast.
- ❌ Don't use light gray text on light surface. Maintain WCAG AA contrast.
- ❌ Don't grade photography toward magenta or pink. True-to-life only.
