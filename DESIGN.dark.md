# Seven Bison — DESIGN.dark.md

> **Dark Cinematic Mode** — secondary expressive mode. Used inside scoped zones: hero reel containers, case study hero sections, portfolio page hero, selected work mosaic thumbnails, motion graphics frames, social teasers.
>
> **Not used for:** page chrome (nav, footer), body sections, sector page bodies, Studio Access page, About, Contact. These remain in Light Corporate Mode.
>
> **Inherits from `DESIGN.master.md`.** This file overrides only surface tokens, color roles, image treatment, and component variants specific to dark.

---

## 1. Mode philosophy

Dark Cinematic Mode is the expressive production layer of the Seven Bison system. It should feel:

- **Cinematic** — film-grade, controlled, considered.
- **Premium** — deep blacks, refined contrast, no cheap effects.
- **Focused** — attention drawn to motion or hero subject.
- **High-contrast** — type and accent land cleanly without gradients or scrims.
- **Refined** — controlled magenta accent, never neon.
- **Motion-first** — designed to host video, not static chrome.

Dark backgrounds, off-white typography, sparse pink accents, abstract or graded imagery.

---

## 2. Surface tokens (dark)

| Role | Token | Hex | Use |
|---|---|---|---|
| Canvas (default) | `{surface.canvas}` | `#000000` | Pure black. Default dark cinematic canvas. |
| Canvas (soft) | `{surface.soft}` | `#111111` | Barely-lifted near-black for subtle separation. |
| Surface lifted | `{surface.lifted}` | `#1A1A1A` | Cards or panels that need to lift off canvas. |
| Charcoal | `{surface.charcoal}` | `#2A2A2A` | Tertiary surface for nested elements. |
| Hairline | `{surface.hairline}` | `rgba(255, 255, 255, 0.10)` | 1px borders on cards and dividers. |
| Hairline-accent | `{surface.hairline-accent}` | `#E80787` | 1px pink hairline for section-break moments (used sparingly). |

### 2.1 Surface usage rule

Dark cinematic blocks default to pure `{surface.canvas}` (`#000000`). Use `{surface.soft}` only when an element needs to separate from the canvas without breaking the cinematic feel. Avoid layering more than two surface levels in one block.

---

## 3. Text colors (dark)

| Role | Token | Hex | Use |
|---|---|---|---|
| Primary text | `{text.primary}` | `#FFFFFF` | Default text on dark canvas. |
| Secondary text | `{text.secondary}` | `rgba(255, 255, 255, 0.85)` | Supporting body. |
| Muted text | `{text.muted}` | `#B8B8B8` | Captions, metadata. |
| Disabled text | `{text.disabled}` | `#6F6F6F` | Disabled labels. |
| Inverse text | `{text.inverse}` | `#111111` | Text on filled-pink CTAs. |
| Accent text | `{text.accent}` | `#E80787` | Inline links, key data highlights. |

---

## 4. Color ratio (dark)

| Coverage | Color | Role |
|---|---|---|
| ~70% | `{surface.canvas}` `#000000` | Dominant — cinematic canvas |
| ~20% | `{text.primary}` `#FFFFFF` | Text, primary hierarchy |
| ~7% | `{color.gray-mid}` / `{surface.soft}` | Secondary text, subtle structure |
| ~3% | `{color.pink}` `#E80787` | Accent — CTAs, key highlights, single hairlines |

---

## 5. Component variants (dark)

### 5.1 Buttons

**`{btn.primary}` — Primary CTA**
- Background: `{color.pink}` (`#E80787`)
- Text: `{text.inverse}` (`#111111`)
- Border: none
- Hover: background brightens to `#FF1A99` (slightly lighter)
- Padding: 12px vertical, 24px horizontal

**`{btn.secondary}` — Secondary CTA**
- Background: transparent
- Text: `{color.pink}`
- Border: 1px solid `{color.pink}`
- Hover: background fills with `{color.pink}` at 12% opacity

**`{btn.tertiary}` — Tertiary / utility**
- Background: transparent
- Text: `{text.primary}` (`#FFFFFF`)
- Border: 1px solid `rgba(255, 255, 255, 0.30)`
- Hover: border lightens to `rgba(255, 255, 255, 0.60)`

**`{btn.ghost}` — Lightweight**
- Background: transparent
- Text: `{color.pink}`
- Border: 1px dashed `{color.pink}`

**`{btn.text}` — Inline action**
- Text: `{color.pink}` + arrow `→`
- No background, no border
- Hover: gap between text and arrow widens 2–4px

### 5.2 Cards

- Background: `{surface.soft}` (`#111111`) or `{surface.lifted}` (`#1A1A1A`)
- Border: 1px solid `{surface.hairline}` (`rgba(255,255,255,0.10)`)
- Padding: 24–40px
- Border-radius: 0 or 2px
- No drop shadow. No backdrop blur.
- Hover (when interactive): border shifts to `{color.pink}`

### 5.3 Inputs (rarely used in dark mode — most forms live in Light)

- Background: `{surface.soft}` (`#111111`)
- Text: `{text.primary}`
- Border: 1px solid `rgba(255, 255, 255, 0.15)`
- Focus: 2px solid `{color.pink}`

### 5.4 Navigation overlay (only when nav sits on top of a dark hero)

When the nav is rendered on top of a dark cinematic hero (e.g., portfolio page top):

- Background: transparent
- Text: `{text.primary}` (`#FFFFFF`)
- Active state: `{color.pink}`
- Border-bottom: none

This is the only case where the global navigation adopts dark mode — the rest of the time the page chrome stays in Light Corporate Mode.

### 5.5 Tags / badges

- **Filled:** `{color.pink}` background, `{text.inverse}` text
- **Outlined:** 1px solid `rgba(255, 255, 255, 0.30)`, `{text.primary}` text

---

## 6. Imagery (dark)

### 6.1 Treatment

- **Cinematic abstraction** is the default — light traces, motion blur, controlled magenta accents on near-black.
- **Real photography** is acceptable when graded for cinematic dark: deep blacks, controlled highlights, neutral-to-cool base, magenta reserved for accent and emphasis only.
- **Controlled directional lighting** — single light source, deep shadow.
- **Color grading:** neutral-to-cool base with deep blacks. Magenta (`#E80787`) reserved for accent and emphasis only. Controlled highlights preserve detail and mood.

### 6.2 Image-backed sections

- Type sits directly on graded photography or motion footage — no scrim, no gradient overlay.
- Grade the source (darken the image) rather than overlay a scrim.
- If contrast is insufficient, use a **flat `rgba(0,0,0,0.4)` darkening layer**, not a gradient.

### 6.3 Where pink appears in dark imagery

- Pink as a thin light trace, single rim light, or accent on a UI element.
- Pink **never** as background tint, gradient, or color grade for the whole frame.
- Pink as 1px hairline marking a hero CTA or section break.

---

## 7. Hero treatment (dark)

### 7.1 Hero reel container (inside the homepage Light hero)

- Container: `{surface.canvas}` (`#000000`)
- Aspect: 16:9 or 4:3
- Holds: autoplay Vimeo / Mux reel (muted, looping, no controls)
- Border: optional 1px hairline if the container needs visual definition against the light canvas
- The reel itself carries the dark cinematic treatment; the container exists to host it cleanly.

### 7.2 Case study hero (full-bleed)

- Full-bleed dark cinematic block at the top of each case study page
- Hero video or hero still occupies the full viewport
- H1 in Raleway Bold 72–80px overlaid on the imagery, `{text.primary}` (white)
- Single `{btn.primary}` CTA below the headline
- Below the hero, the page transitions back to Light Corporate Mode for the editorial case study content

### 7.3 Portfolio page hero

- Full-bleed dark hero with autoplay portfolio reel
- Single H1 + supporting line + primary CTA
- Below the hero: light mode portfolio grid (filterable)

### 7.4 Selected work mosaic (homepage)

- The mosaic of thumbnails on the homepage is dark — each thumbnail is a dark cinematic still or reel poster
- The mosaic block sits inside the Light Corporate page; its background is `{surface.canvas}` from this dark mode file
- Surrounding chrome (heading, CTA below) returns to Light Corporate Mode

---

## 8. Logo in dark mode

- Use `logo-white.png` (white bison + white wordmark on transparent).
- Clear space rules per master file apply.
- Never use the pink-on-black variant of the logo — pink mark on pure black creates visual buzz that fights the cinematic register. Reserve pink for accent within imagery, not for the lockup itself.

---

## 9. Dark mode do / don't

### Do
- ✅ Use pure `#000000` for the canvas — it reads cinematic, not "designed".
- ✅ Use white (`#FFFFFF`) for primary text — pure white lands cleanly on pure black.
- ✅ Use the white logo variant on dark canvas.
- ✅ Use motion footage or graded stills as the dominant element of dark blocks.
- ✅ Scope dark mode to specific zones (reel container, case study hero, portfolio hero, mosaic) — never to the global page chrome.

### Don't
- ❌ Don't use dark mode for body sections, sector page bodies, Studio Access, About, Contact. These are Light Corporate.
- ❌ Don't use gradient scrims to darken imagery. Grade the source.
- ❌ Don't use the pink logo on black canvas. Use white-on-black.
- ❌ Don't apply magenta color grading across the full frame. Magenta is accent only.
- ❌ Don't darken full sections of the website to "match the reel". The reel is contained; the page is light.
- ❌ Don't add neon, glow, or bloom effects to type or UI on dark surfaces.
- ❌ Don't use pure-pink (`#E80787`) as a large surface fill, even on dark. Pink stays signal.

---

## 10. Mode boundary handling

When a dark cinematic block sits inside a light corporate page:

- The boundary between modes is a **clean edge**, not a fade or gradient.
- The dark block can have a 1px hairline accent (`{color.pink}`) at its top or bottom edge to mark the transition — used sparingly.
- The block above and below in light mode has full `{surface.canvas}` (`#F7F5F2`) — no transitional shading.
- Section spacing around dark blocks: `{space.16}` (64px) or more, so the block reads as a deliberate "moment".

**Example sequence on homepage:**

```
[ Light hero with split frame ]   ← Light Corporate Mode
[ Dark reel container on right ]  ← Dark Cinematic Mode (inside the hero)
[ Light trust strip ]              ← Light Corporate Mode
[ Light end-to-end partner block ] ← Light Corporate Mode
[ Light sector cards ]             ← Light Corporate Mode
[ Dark mosaic block ]              ← Dark Cinematic Mode (selected work)
[ Light how-we-work ]              ← Light Corporate Mode
[ Light testimonials ]             ← Light Corporate Mode
[ Light final CTA ]                ← Light Corporate Mode
[ Light footer ]                   ← Light Corporate Mode
```
