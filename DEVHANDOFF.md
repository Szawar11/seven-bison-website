# Seven Bison — Dev Handoff

**Data:** 2026-05-27
**Wersja paczki:** v2.0 (final code-ready)
**Domain:** sevenbison.com
**Stack:** Next.js 15.5 · React 19 · TypeScript · Tailwind CSS 3 · GSAP 3.13
**Repo:** https://github.com/Szawar11/seven-bison-website

---

## ✅ Stan projektu — krótko

Strona jest **production-ready od strony kodu**. Wszystkie strony, komponenty, animacje, SEO i a11y są skończone. Brakuje **tylko realnych materiałów** (Vimeo, zdjęcia, logo klientów, prawdziwe testimonials, Calendly URL). Wszystkie placeholdery wymieniane 1:1 — nie wymagają zmian kodowych.

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm run start  # production server
```

---

## 📦 Co jest zrobione (kompletne)

### Strony (`src/app/`)
- `/` — Homepage (Hero, TrustStrip, EndToEndPartner, LogoWall, CapabilitiesMarquee, ServicesStrip, SectorCards, StudioAccessTeaser, HowWeWork, **AIPipelineSequence** (scroll-scrub), SelectedWork dark zone, Testimonials, FounderTeaser, Final CTA)
- `/tech`, `/heavy-industry`, `/healthcare-pharma` — Sektory (SectorHero + PainPoints + SubsectorNav + SectorCaseGrid + Testimonials + CTA)
- `/studio-access` — What's included, How it works, Customer story, Testimonials, CTA
- `/portfolio` — Filterable grid (9 placeholder cases)
- `/about` — Studio, Founder + foto placeholder, Team (3 placeholder cards)
- `/contact` — Calendly + email
- `/not-found.tsx` — Własny 404 ("This page hit the cutting room floor.")
- `/error.tsx` — Graceful error boundary z retry
- `/loading.tsx` — Skeleton loader

### Design system
- Tokeny CSS — light corporate + dark cinematic (`.dark-zone` scope)
- Typography: Raleway display + Inter body, font-variation `swap`
- Tailwind tokens 1:1 z CSS vars (`tailwind.config.mjs`)
- Grain overlay sitewide (SVG turbulence noise, 5.5% opacity)
- Reading progress bar (native CSS scroll-timeline)

### Komponenty UI
- `Button` (5 variants + magnetic attribute na primary/secondary)
- `Section` (spacing: tight/default/loose, surface: canvas/soft/dark)
- `Eyebrow` (z optional `rule` prop = hairline rozciąga się na prawo)
- `ScrollReveal` (re-usable wrapper z GSAP scroll-trigger)
- `AnimatedPlaceholder` (4 warianty SVG: reel / tech / heavy / healthcare)
- `CustomCursor` (brand-pink dot, magnetic pull na CTA, morfuje nad video tilami)
- `CountUp` (ratings/stats animują od 0 z ease-out cubic na IntersectionObserver)
- `BeforeAfterSlider` (drag/keyboard, ARIA slider — gotowy do case studies)

### Animacje 2026
- Hero — kinetic line-reveal headline (clip-mask + GSAP expo.out)
- Hero — scroll parallax na prawej kolumnie reel
- SectorCards — 2.5D mouse-tracking tilt (perspective + rotateX/Y)
- ServicesStrip — stagger reveal z grid algorithm
- CapabilitiesMarquee — CSS-only infinite ticker (pauza on hover)
- AIPipelineSequence — pinned scroll-scrub przez 4 etapy (Brief → Storyboard → AI gen → Delivery)
- View Transitions API — page-to-page cross-fade
- All sections — ScrollReveal z entrance animacjami

### SEO + Performance + A11y
- `sitemap.xml` (auto, 8 URL-i)
- `robots.txt` (allow all, disallow /api/, /_next/)
- Dynamic OG image (`/opengraph-image` — 1200×630 generowane edge runtime)
- JSON-LD Organization schema z `contactPoint` i `sameAs`
- `<Image>` z `next/image` na logo (priority + auto AVIF)
- Mobile menu: focus trap, body scroll lock, Escape close, role="dialog" + aria-modal
- `prefers-reduced-motion` — wszystkie animacje wyłączone gdy user preferuje
- `:focus-visible` outline na każdym interaktywnym elemencie
- Semantic HTML wszędzie (`<section>`, `<nav>`, `<main id="main">`, ARIA labels)

---

## 🤝 Co czeka na materiały (NIE wymaga pracy programisty)

Wszystko poniżej to **podmiana 1:1** — placeholder już jest w kodzie z odpowiednim layoutem.

### 1. Calendly URL
Plik: `src/lib/config.ts:18`
```ts
calendly: 'https://calendly.com/seven-bison/intro',  // ← podmienić
```

### 2. Vimeo URL dla Hero reel
Plik: `src/app/page.tsx`
```tsx
<Hero vimeoUrl="https://player.vimeo.com/video/TWOJ_VIMEO_ID" />
```

### 3. Zdjęcie Szymonka (4:5 portret)
Wrzuć plik: `public/images/founder.jpg`
Potem podmień w 2 miejscach:
- `src/components/home/FounderTeaser.tsx:73-88` — usuń `<svg>` + `<p>` placeholder, dodaj:
  ```tsx
  <Image src="/images/founder.jpg" alt="Szymon Wojewski" fill className="object-cover" />
  ```
- `src/app/about/page.tsx:80-95` — to samo

### 4. Loga klientów (18 brandów, SVG monochrome)
Wrzuć pliki do: `public/images/logos/clients/`
- `aramco.svg`, `hilti.svg`, `roche.svg`, `bayer.svg`, `pfizer.svg`, `daikin.svg`, `aws.svg`, `outpost24.svg`, `alacriti.svg`, `santen.svg`, `sherwin-williams.svg`, `r3.svg`, `tf-kable.svg`, `harris-health.svg`, `bt.svg`, `kpmg.svg`, `paramount.svg`, `mtv.svg`

Potem w `src/components/home/LogoWall.tsx` i `TrustStrip.tsx` zamień text na `<Image>`.

### 5. Postery sektorowe / case studies
Wrzuć do `public/videos/`:
- Hero reel poster: `reel-poster.jpg` (1920×1080)
- Sector posters: `sector-tech-poster.jpg`, `sector-heavy-poster.jpg`, `sector-healthcare-poster.jpg`
- Case study posters (1280×960): `case-outpost24-poster.jpg`, `case-alacriti-poster.jpg`, `case-aws-poster.jpg`, `case-aramco-poster.jpg`, `case-hilti-poster.jpg`, `case-tfkable-poster.jpg`, `case-roche-poster.jpg`, `case-bayer-poster.jpg`, `case-santen-poster.jpg`

Ścieżki są **już wpisane** w kodzie — pliki same się załadują, placeholdery automatycznie znikną pod nimi.

### 6. Real testimonials (4 cytaty)
Plik: `src/app/page.tsx:24-49` — zamień `Placeholder Name`, `Head of Brand` itp. na realne dane.
Dodatkowo w każdej stronie sektorowej (`tech`, `heavy-industry`, `healthcare-pharma`) — tablica `const quotes` na początku pliku.

### 7. Case study pages (gdy będą gotowe)
Obecnie wszystkie linki z kart sektorowych prowadzą na `/portfolio`.
Gdy powstaną osobne case study pages (np. `/portfolio/outpost24`), zmień w tablicach `cases` w `tech/page.tsx`, `heavy-industry/page.tsx`, `healthcare-pharma/page.tsx`:
```ts
href: '/portfolio'  →  href: '/portfolio/outpost24'
```

---

## 🗂️ Struktura plików — szybki cheatsheet

```
src/
├── app/                        # Routing (Next.js App Router)
│   ├── layout.tsx              # Root layout, JSON-LD, cursor, grain
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # 404
│   ├── error.tsx               # Error boundary
│   ├── loading.tsx             # Loading skeleton
│   ├── opengraph-image.tsx     # Dynamic OG image (edge runtime)
│   ├── sitemap.ts              # sitemap.xml generator
│   ├── robots.ts               # robots.txt generator
│   ├── tech/page.tsx
│   ├── heavy-industry/page.tsx
│   ├── healthcare-pharma/page.tsx
│   ├── studio-access/page.tsx
│   ├── portfolio/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav + mobile drawer (a11y)
│   │   └── Footer.tsx
│   ├── home/                   # Homepage sections
│   │   ├── Hero.tsx            # Split-frame + line-reveal headline
│   │   ├── TrustStrip.tsx      # Ratings z CountUp
│   │   ├── LogoWall.tsx        # 18 brands
│   │   ├── CapabilitiesMarquee.tsx
│   │   ├── EndToEndPartner.tsx
│   │   ├── ServicesStrip.tsx   # 8 dyscyplin
│   │   ├── SectorCards.tsx     # 2.5D tilt + dark cinematic thumbs
│   │   ├── HowWeWork.tsx
│   │   ├── AIPipelineSequence.tsx  # Scroll-scrub pin section
│   │   └── FounderTeaser.tsx
│   ├── sector/                 # Used by /tech, /heavy-industry, /healthcare-pharma
│   │   ├── SectorHero.tsx
│   │   ├── PainPoints.tsx
│   │   ├── SubsectorNav.tsx
│   │   ├── SectorCaseGrid.tsx
│   │   └── Testimonials.tsx
│   └── ui/                     # Re-usable building blocks
│       ├── Button.tsx
│       ├── Section.tsx
│       ├── Eyebrow.tsx
│       ├── ScrollReveal.tsx
│       ├── AnimatedPlaceholder.tsx
│       ├── CustomCursor.tsx
│       ├── CountUp.tsx
│       └── BeforeAfterSlider.tsx
│
├── lib/
│   ├── config.ts               # Single source of truth (site, nav, sectors, services, contact)
│   └── gsap.ts                 # GSAP plugin registration
│
└── styles/
    └── global.css              # Design tokens + utilities + 2026 enhancements
```

---

## 🎨 Design tokens — cheatsheet

| Tailwind class | Resolves to |
|---|---|
| `bg-canvas` | `#F7F5F2` (light) / `#000` (dark-zone) |
| `bg-canvas-soft` | `#F2F0ED` (light) / `#111` (dark) |
| `bg-canvas-muted` | `#E8E8E8` (light) / `#1A1A1A` (dark) |
| `text-content-primary` | `#111111` / `#FFFFFF` |
| `text-content-secondary` | `#2A2A2A` / `rgba(255,255,255,0.85)` |
| `text-content-muted` | `#6F6F6F` / `#B8B8B8` |
| `text-pink` | `#E80787` (brand pink) |
| `border-hairline` | 1px subtelna linia |
| `font-display` | Raleway (h1-h4) |
| `font-body` | Inter (body, captions) |
| `.eyebrow` | Mały uppercase różowy label |
| `.container-site` | Max 1440px, padding 80px/40px/24px responsive |
| `.dark-zone` | Klasa na rodzicu — przełącza wszystkie tokeny na ciemne |

---

## 🎬 Custom cursor + magnetic — jak dodawać interakcje

**Magnetic pull** (button się przyciąga do kursora):
```tsx
<button data-magnetic>Click me</button>
```
Wszystkie `<Button variant="primary"|"secondary">` mają to automatycznie.

**Cursor "PLAY" state** (różowy 68px ring z napisem PLAY nad video):
```tsx
<div data-cursor="play">...</div>
```
Już zastosowane na sector card thumbnails i BeforeAfterSlider.

---

## 🚀 Deploy

### Vercel (rekomendowane)
```bash
# Połącz repo GitHub z Vercel — auto deploy z main branch.
# Edge runtime dla OG image działa out-of-the-box.
```

### Inne (Netlify, Cloudflare Pages, AWS Amplify)
- Build command: `npm run build`
- Output directory: `.next/`
- Node version: 20+ (Next.js 15 wymaga)

### Self-hosted (Docker / VPS)
```bash
npm run build
npm run start  # nasłuchuje na PORT z env (default 3000)
```

### Static export (jeśli klient nie chce SSR)
Odkomentuj w `next.config.ts`:
```ts
output: 'export',
```
Potem `npm run build` wyprodukuje `out/` do uploadu na zwykły hosting.
**Uwaga:** static export wyłącza dynamic OG image — trzeba wtedy ręcznie podać URL do `public/images/og.jpg`.

---

## 📜 Wymagania środowiska

- Node.js **20+** (Next.js 15)
- npm 10+ (lub pnpm / yarn — działa wszystko)
- Git
- Modern browser do dev (Chrome 111+, Safari 18+, Firefox 130+ dla View Transitions / scroll-timeline)

---

## 🔗 Linki

- **Repo:** https://github.com/Szawar11/seven-bison-website
- **Produkcja (po deploy):** https://sevenbison.com
- **Vercel preview:** *(do skonfigurowania)*

---

## 📋 Changelog (ostatnie commity)

| Commit | Co |
|---|---|
| `b69e0a0` | SEO + a11y foundations: sitemap, robots, OG image, JSON-LD, 404/error/loading, mobile menu a11y, next/image |
| `6d96b0b` | Cinematic sector thumbs (czarne tło) + solid brand-pink cursor z glow |
| `768484c` | 2026 trends: grain, marquee, line-reveal hero, count-up, AI pipeline scroll-scrub, view transitions, before/after slider |
| `72632cd` | Media placeholders: case study cards, about founder photo, team cards, portfolio grid |
| `8a6473e` | Fix: redirect broken case study links to /portfolio |
| `97d25b8` | Initial commit — Seven Bison website |

---

*DEVHANDOFF.md — Seven Bison v2.0 · 2026-05-27*
