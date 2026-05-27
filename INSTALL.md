# Seven Bison — Complete Patch

Everything you need in one zip. Apply once.

## What's inside

```
sb-patch/
├── INSTALL.md                     ← you are here
├── BRAND.md                       ← strategic context (overwrites old)
├── CLAUDE.md                      ← Claude Code instructions (overwrites old)
├── DESIGN.md                      ← design system entry point (new)
├── DESIGN.master.md               ← shared foundations (new)
├── DESIGN.light.md                ← Light Corporate Mode (new)
├── DESIGN.dark.md                 ← Dark Cinematic Mode (new)
└── public/
    └── images/
        └── logos/                 ← 6 logo files (3× SVG + 3× PNG)
            ├── seven-bison-logo-pink.svg / .png
            ├── seven-bison-logo-black.svg / .png
            └── seven-bison-logo-white.svg / .png
```

## How to apply (5 minutes)

### 1. Backup what you have

In `D:\SB_website\`, create a folder `_backup-pre-design-md-patch\` and move into it:
- old `BRAND.md`
- old `CLAUDE.md`

(You can delete this backup later once everything works.)

### 2. Drop files into project root

Copy these six files into `D:\SB_website\` (overwriting old `BRAND.md` and `CLAUDE.md`):

- `BRAND.md`
- `CLAUDE.md`
- `DESIGN.md`
- `DESIGN.master.md`
- `DESIGN.light.md`
- `DESIGN.dark.md`

### 3. Drop logos into public folder

Copy the entire `public/images/logos/` folder from this patch into `D:\SB_website\public\images\`.

If the folder `D:\SB_website\public\images\` doesn't exist yet, create it first. If `logos/` doesn't exist inside `images/`, that's fine — the copy will create it.

### 4. Final structure check

`D:\SB_website\` should now contain:

```
D:\SB_website\
├── _backup-pre-design-md-patch\        ← old files
├── .astro\
├── .vscode\
├── node_modules\
├── public\
│   └── images\
│       └── logos\                       ← NEW: 6 logo files
├── src\
├── .gitignore
├── .prettierrc
├── astro.config.mjs
├── BRAND.md                             ← UPDATED
├── CLAUDE.md                            ← UPDATED
├── DESIGN.md                            ← NEW
├── DESIGN.master.md                     ← NEW
├── DESIGN.light.md                      ← NEW
├── DESIGN.dark.md                       ← NEW
├── outline.md
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json
```

## Next steps

### A. For Claude Design (the in-browser visual tool)

Go back to the Claude Design onboarding form and fill in:

**Company name and blurb:**
> Seven Bison — premium B2B video, motion design and animation studio for brands in complex, regulated, and visually-challenged industries: Tech (cybersecurity, fintech, software, SaaS), Heavy Industry (manufacturing, energy, infrastructure, logistics), and Healthcare & Pharma (medtech, biotech, pharma, health systems). AI-native production, human craft. The brand operates with two controlled visual modes: Light Corporate Mode (default — for website, decks, sector pages, client documents) and Dark Cinematic Mode (scoped — for showreels, portfolio heroes, case study openings, motion graphics).

**Add fonts, logos and assets:**
Upload these (24 files total):
- 6× files from `D:\SB_website\public\images\logos\` (3 SVG + 3 PNG)
- 9× pages of light brandbook from `D:\SB-temp\Brandbook light\`
- 9× pages of dark brandbook from `D:\SB-temp\Brandbook dark\`

**Any other notes:**
Open `D:\SB_website\DESIGN.md` in Notepad, select all (Ctrl+A), copy (Ctrl+C), paste into this field. This file is the top-level dispatcher that tells Claude when to use Light vs Dark mode.

Leave the GitHub, "Link code from your computer", and ".fig file" fields empty.

### B. For Claude Code (the terminal tool that edits files)

Open Claude Code in `D:\SB_website\` and paste this first prompt:

```
Read DESIGN.md, then DESIGN.master.md, then DESIGN.light.md, then DESIGN.dark.md, then CLAUDE.md, then BRAND.md, then outline.md.

The previous version of this project used a dark-only design with Oswald display font and #E01677 pink. The current system uses:
- Two modes: Light Corporate (default) + Dark Cinematic (scoped to reels/heroes)
- Raleway display, Inter body, no Ailerons in CSS
- Pink: #E80787
- Light canvas: #F7F5F2
- Dark canvas: #000000

Refactor tailwind.config.mjs and src/styles/global.css to mirror the new tokens from DESIGN.master.md, DESIGN.light.md, and DESIGN.dark.md. Use semantic token names (surface.canvas, text.primary, color.pink, color.accent) so the same components can render in either mode by changing CSS variable bindings, not by duplicating components.

After the token layer is updated, refactor existing components (Hero, Header, Footer, SectorCards, etc.) to use the new tokens. The homepage hero should be split-frame: light left column with headline + CTA, dark right column hosting the reel.

Replace the inline SVG bison placeholder in Header.astro and Footer.astro with <img> tags referencing the appropriate logo SVG from /images/logos/ (seven-bison-logo-pink.svg for Light contexts, seven-bison-logo-white.svg for Dark contexts).

List your plan first. Do not start writing code until I confirm.
```

## What changed from the old starter

| Item | Old | New |
|---|---|---|
| Design system files | 1 (BRAND.md, dark-only) | 5 (DESIGN.md + master/light/dark + BRAND.md) |
| Display font | Oswald | Raleway |
| Body font | Inter | Inter (unchanged) |
| Editorial accent | Cormorant Garamond | Removed |
| Pink hex | `#E01677` | `#E80787` |
| Default canvas | `#000000` (black) | `#F7F5F2` (warm off-white) |
| Dark canvas | n/a | `#000000` (scoped to reels & hero only) |
| Display casing | UPPERCASE | Title Case |
| Spacing scale | 8-point | 4-point (8-point compatible) |
| Logo | Inline SVG placeholder bison | 6 real files in `public/images/logos/` |
| Ailerons | Not present | Forbidden in CSS — logo-only |

## Known TODOs (pending follow-up from Szymon / designer)

1. **True vector SVG logos** — current SVGs are autotraced from PNG. The pink variant is 596 KB instead of ~10 KB. Functional but not optimal. Request fresh exports.
2. **Logo pink hex alignment** — current SVGs use `#E00A7F` and variants from the autotrace. Web spec is `#E80787`. Request re-exported logos in the unified hex.
3. **Sector pain-point research** — placeholder copy on Tech / Heavy Industry / Healthcare pages needs to be replaced with real sector-specific copy from Szymon.
4. **Calendly URL, Vimeo IDs, real testimonials** — placeholders in `src/lib/config.ts` and component files.

All four are tracked in `BRAND.md` section 12.
