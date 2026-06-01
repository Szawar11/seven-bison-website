# Seven Bison — Dev Handoff

**Wersja paczki:** v2.2 (Szymon feedback + media spec)
**Data:** 2026-05-29
**Domain:** sevenbison.com
**Stack:** Next.js 15.5 · React 19 · TypeScript · Tailwind CSS 3 · GSAP 3.13
**Repo:** https://github.com/Szawar11/seven-bison-website

---

## ⚡ Szybki start

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # production build
npm run start    # production server
npm run lint     # ESLint check
npm run typecheck # TypeScript check
```

**Wymagania:** Node.js 20+. Build trwa ~15s. Bundle: ~165 KB First Load JS dla strony głównej.

---

## 📍 Najważniejsze dokumenty w repo

| Plik | Co tam jest |
|---|---|
| **`MEDIA-SPEC.md`** | **Pełna specyfikacja wszystkich materiałów** które dostarczy Szymon — formaty, rozmiary, ścieżki, Vimeo vs upload. **Czytać jako pierwsze.** |
| `DEVHANDOFF.md` | Ten plik — status projektu, what's done, deploy |
| `DESIGN.master.md` | Pełen design system (kolory, typografia, spacing, motion) |
| `BRAND.md` | Brand statement i ton komunikacji |
| `INSTALL.md` | Instalacja środowiska |
| `README.md` | Krótkie intro |

---

## ✅ Stan projektu

Strona jest **production-ready od strony kodu**. Build kompiluje się czysto. Wszystkie strony, komponenty, animacje, SEO i a11y są skończone. Wszystkie placeholdery są **spec-aware** — pokazują dokładnie jakie materiały muszą wskoczyć w które miejsca.

### Architektura zrobiona w 100%
- 8 routes (/, /tech, /heavy-industry, /healthcare-pharma, /studio-access, /portfolio, /about, /contact)
- Hero z video panel + modal showreel
- Strony sektorowe z tą samą architekturą Hero
- Full-bleed mosaic dla Selected Work + Portfolio
- Footer i Header z mobile a11y (focus trap, escape, scroll lock)
- SEO foundations (sitemap, robots, dynamic OG image, JSON-LD Organization)
- A11y (reduced-motion, focus-visible, semantic HTML, ARIA)
- View Transitions API + grain overlay + reading progress + magnetic cursor

### Co czeka na materiały
Wszystko opisane w **`MEDIA-SPEC.md`**. Krótko:
- Hero teaser MP4 + Vimeo showreel URL
- 3 sektorowe teaser MP4 + Vimeo URL
- ~25 work posterów JPG + opcjonalne loop MP4
- 18 SVG logotypów klientów
- Foto Szymonka + 3 zdjęcia team
- Realne Calendly URL + testimonial attribution

---

## 📦 Co zostało wdrożone na podstawie feedbacku Szymonka

Z feedbacku (2026-05-29) wdrożono **27/30 punktów** (90%). Pełny audyt w repo (`workflows/`).

### P0 — Krytyczne ✅ wszystko done
- Section numbers usunięte ze wszystkich Eyebrows
- Logo Seven Bison powiększony (64px desktop, header 96px)
- Pełna szerokość strony (`--site-max: 100%`)
- Hero: central looped autoplay muted video + headline + CTA NA video
- Klik w video → modal z pełnym showreelem (Escape close, scroll lock)

### P1 — Sekcje ✅ wszystko done (oprócz blocked)
- Services jako editorial list bez ikon (CapabilitiesMarquee usunięty)
- AI section: `OurTech.tsx` (narrative, nie pipeline) — AIPipelineSequence usunięty z importów
- Studio Access section z dwoma CTA
- Testimonials, Footer, Founder Block na home
- Sector pages: ten sam Hero pattern co home
- 🔴 **3.1 Logo klientów jako SVG** — blocked, czeka na 18 plików

### P2 — Polish ✅ wszystko done (oprócz partial)
- Ikon brak na sector cards (tylko ArrowRight w CTA)
- Sector cards z dark cinematic thumbs (czarne tło, pink animations)
- Selected Work jako mixed-span mosaic (big/wide/tall/square) — 9 prac
- Portfolio jako pełna mosaic — 12 prac (huge/big/wide/tall/square)
- Reveal animations (GSAP ScrollTrigger stagger)
- 🟡 **9.3 SectorCaseGrid jako mosaic** — partial (wciąż 3-col grid, nie mixed-span — można dopracować po dostawie posterów)

---

## 🎬 Wzorce dostarczania materiałów

### Vimeo vs bezpośredni upload — kiedy co

| Co | Skąd | Przykład |
|---|---|---|
| **Krótkie loopy 5-15s** (Hero teaser, mosaic tiles) | Upload do `/public/videos/` | `teaserSrc="/videos/hero-teaser.mp4"` |
| **Pełny showreel 60-180s** | Vimeo URL embed | `showreelVimeoUrl="https://player.vimeo.com/video/123456"` |
| **Case study videos** | Vimeo URL embed | `videoLoop="https://player.vimeo.com/video/..."` lub direct mp4 |

**Czemu tak?** Loopy upload = brak Vimeo brandingu, inline mobile autoplay, mała waga (~3-6 MB). Showreele Vimeo = quality switching, bandwidth optimization, player controls.

**Pełne wymiary, ścieżki, formaty:** patrz `MEDIA-SPEC.md`.

---

## 🗂️ Mapa plików — szybki cheatsheet

```
src/
├── app/
│   ├── layout.tsx                    # Root layout — JSON-LD, cursor, grain, header, footer
│   ├── page.tsx                      # Homepage
│   ├── not-found.tsx                 # 404
│   ├── error.tsx                     # Error boundary
│   ├── loading.tsx                   # Skeleton loader
│   ├── opengraph-image.tsx           # Dynamic 1200×630 OG (edge runtime)
│   ├── sitemap.ts                    # sitemap.xml generator
│   ├── robots.ts                     # robots.txt
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
│   │   ├── Header.tsx                # Sticky nav + mobile drawer + focus trap
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx                  # Full-width video panel + overlay + modal
│   │   ├── TrustStrip.tsx            # Ratings z CountUp + 5 logo placeholders
│   │   ├── LogoWall.tsx              # 18 dashed logo boxes
│   │   ├── EndToEndPartner.tsx
│   │   ├── ServicesStrip.tsx         # Editorial list bez ikon
│   │   ├── SectorCards.tsx           # 3 cinematic dark thumbs + 2.5D tilt
│   │   ├── HowWeWork.tsx
│   │   ├── OurTech.tsx               # NEW — narrative AI approach
│   │   ├── SelectedWorkMosaic.tsx    # NEW — 9-tile full-bleed mosaic
│   │   └── FounderTeaser.tsx
│   ├── sector/                       # Used by /tech, /heavy-industry, /healthcare-pharma
│   │   ├── SectorHero.tsx            # Same architecture as homepage Hero
│   │   ├── PainPoints.tsx
│   │   ├── SubsectorNav.tsx
│   │   ├── SectorCaseGrid.tsx
│   │   └── Testimonials.tsx
│   ├── portfolio/
│   │   └── PortfolioMosaic.tsx       # NEW — 12-tile full-bleed mosaic
│   └── ui/
│       ├── Button.tsx                # 5 variants + magnetic
│       ├── Section.tsx               # tight/default/loose + canvas/soft/dark
│       ├── Eyebrow.tsx               # Z opcjonalnym `rule` prop (hairline rule)
│       ├── ScrollReveal.tsx
│       ├── AnimatedPlaceholder.tsx   # SVG SMIL — reel/tech/heavy/healthcare
│       ├── MediaPlaceholder.tsx      # NEW — spec-aware placeholder z dim/format/hint
│       ├── VideoModal.tsx            # NEW — fullscreen showreel modal
│       ├── CustomCursor.tsx          # Brand-pink magnetic cursor
│       ├── CountUp.tsx
│       └── BeforeAfterSlider.tsx
│
├── lib/
│   ├── config.ts                     # SINGLE SOURCE OF TRUTH — site, nav, sectors, services, contact
│   └── gsap.ts                       # GSAP plugin registration
│
└── styles/
    └── global.css                    # Design tokens + 2026 enhancements (grain, scroll-progress, cursor, marquee, view-transitions)
```

---

## 🎨 Design tokens — cheatsheet

| Tailwind class | Light mode | Dark mode (`.dark-zone`) |
|---|---|---|
| `bg-canvas` | `#F7F5F2` (warm off-white) | `#000` |
| `bg-canvas-soft` | `#F2F0ED` | `#111` |
| `bg-canvas-muted` | `#E8E8E8` | `#1A1A1A` |
| `text-content-primary` | `#111111` | `#FFFFFF` |
| `text-content-secondary` | `#2A2A2A` | `rgba(255,255,255,0.85)` |
| `text-content-muted` | `#6F6F6F` | `#B8B8B8` |
| `text-pink` | `#E80787` (brand) | `#E80787` |
| `border-hairline` | 1px subtelna linia |
| `font-display` | Raleway (h1-h4) |
| `font-body` | Inter (body, captions) |
| `.eyebrow` | Mały uppercase różowy label |
| `.container-site` | Full width, padding 48px/32px/20px responsive |
| `.dark-zone` | Klasa na rodzicu — przełącza wszystkie tokeny na ciemne |

---

## 🎬 Custom cursor + magnetic — interakcje

**Magnetic pull** (button przyciąga się do kursora):
```tsx
<button data-magnetic>Click me</button>
```
Wszystkie `<Button variant="primary"|"secondary">` mają to automatycznie.

**Cursor "PLAY" state** (różowy 68px ring z napisem PLAY nad video):
```tsx
<div data-cursor="play">...</div>
```
Już zastosowane na sector card thumbnails, video tiles, hero panel.

---

## 🚀 Deploy

### Vercel (rekomendowane)
1. Połącz repo GitHub z Vercel
2. Auto deploy z `main` branch
3. Edge runtime dla OG image działa out-of-the-box
4. Dodaj custom domain `sevenbison.com`

### Inne hostingi
- **Netlify / Cloudflare Pages / AWS Amplify** — `npm run build`, output `.next/`, Node 20+
- **Self-hosted / VPS** — `npm run build` → `npm run start` (PORT env var)

### Static export (jeśli klient nie chce SSR)
Odkomentuj w `next.config.ts`:
```ts
output: 'export',
```
**Uwaga:** static export wyłącza dynamic OG image — wtedy trzeba ręcznie podać `og:image` jako URL do `public/images/og.jpg`.

---

## 🧪 Production build snapshot

```
Route (app)                                 Size  First Load JS
┌ ○ /                                    7.89 kB         165 kB
├ ○ /_not-found                            136 B         103 kB
├ ○ /about                                 172 B         107 kB
├ ○ /contact                               172 B         107 kB
├ ○ /healthcare-pharma                     134 B         160 kB
├ ○ /heavy-industry                        134 B         160 kB
├ ƒ /opengraph-image                       136 B         103 kB
├ ○ /portfolio                           2.84 kB         154 kB
├ ○ /robots.txt                            136 B         103 kB
├ ○ /sitemap.xml                           136 B         103 kB
├ ○ /studio-access                       1.31 kB         153 kB
└ ○ /tech                                  135 B         160 kB
+ First Load JS shared by all             102 kB
```

Wszystkie strony statycznie prerenderowane (Static). Tylko OG image jest dynamic (edge runtime). Bardzo szybkie ładowanie — bundle pod 165 KB.

---

## 📝 Checklist dla dewa — kolejność prac

### Etap 1 — Setup (Day 1)
- [ ] `git clone https://github.com/Szawar11/seven-bison-website.git`
- [ ] `npm install` — sprawdź czy bez errorów
- [ ] `npm run dev` — sanity check, otwórz localhost:3000
- [ ] Przeczytaj **`MEDIA-SPEC.md`** w całości
- [ ] Skonfiguruj Vercel preview z brancha `main`

### Etap 2 — Wpinanie materiałów (gdy Szymon dostarczy)

Każdy z poniższych punktów to **podmiana 1:1** — placeholdery są spec-aware i pokazują dokładnie co tam wskoczy.

#### A. Konfiguracja
- [ ] `src/lib/config.ts:18` — Calendly URL
- [ ] `src/lib/config.ts:19` — email (jeśli ma się zmienić)
- [ ] `src/app/page.tsx:26-51` — 4 testimonial quotes (Outpost24, Hilti, Roche, Bayer)
- [ ] Testimonials na stronach sektorowych — tablice `const quotes` w `tech/`, `heavy-industry/`, `healthcare-pharma/`

#### B. Hero video (homepage + 3 sektory)
- [ ] Wrzucić `public/videos/hero-teaser.mp4` (21:9, 5-15s loop)
- [ ] Wrzucić `public/videos/hero-teaser-poster.jpg`
- [ ] W `src/app/page.tsx` dodać propsy:
  ```tsx
  <Hero
    teaserSrc="/videos/hero-teaser.mp4"
    posterUrl="/videos/hero-teaser-poster.jpg"
    showreelVimeoUrl="https://player.vimeo.com/video/123456"
  />
  ```
- [ ] To samo dla `src/app/tech/page.tsx`, `heavy-industry/page.tsx`, `healthcare-pharma/page.tsx` — propsy `teaserSrc + posterUrl + showreelVimeoUrl` w komponencie `<SectorHero>`

#### C. Logotypy klientów (18 SVG)
- [ ] Wrzucić wszystkie 18 plików do `public/images/logos/clients/` (lista w `MEDIA-SPEC.md`)
- [ ] W `src/components/home/LogoWall.tsx` zamienić `<span>` na `<Image>`:
  ```tsx
  <Image
    src={`/images/logos/clients/${slug}.svg`}
    alt={name}
    width={120}
    height={40}
    className="object-contain opacity-50 hover:opacity-80 transition-opacity"
  />
  ```
- [ ] To samo w `TrustStrip.tsx`

#### D. Posters case studies + work
- [ ] Wrzucić ~25 plików JPG (lista w `MEDIA-SPEC.md`)
- [ ] Ścieżki są **już wpisane w kodzie** w `SelectedWorkMosaic.tsx`, `PortfolioMosaic.tsx`, `SectorCaseGrid.tsx` — pliki same się załadują, placeholdery znikną

#### E. Founder + team
- [ ] `public/images/founder.jpg` (4:5 · 1600×2000)
- [ ] `public/images/team/team-1.jpg`, `team-2.jpg`, `team-3.jpg` (1:1)
- [ ] W `FounderTeaser.tsx` i `about/page.tsx` zamienić `<MediaPlaceholder>` na `<Image>`

### Etap 3 — QA + Deploy
- [ ] Sprawdzić w mobile (320px-768px), tablet (768-1024), desktop (1024-1920+)
- [ ] Przetestować flow: Hero click → modal → escape close
- [ ] Sprawdzić cursor magnetic na buttonach (desktop)
- [ ] Lighthouse audit — target ≥ 95 we wszystkich kategoriach
- [ ] Deploy na produkcję `sevenbison.com`

---

## 🔗 Linki

- **Repo:** https://github.com/Szawar11/seven-bison-website
- **Domain (po deploy):** https://sevenbison.com
- **Design refs:** Buck.co, Tendril.ca

---

## 📜 Historia zmian

| Commit | Co |
|---|---|
| `f6ef6e6` | Spec-aware media placeholders + MEDIA-SPEC.md (formats, sizes, Vimeo guidance) |
| `8f58f92` | Szymon feedback v1: full-bleed layout, video hero, no section numbers, larger logo, Selected Work + Portfolio mosaic, Our Tech section |
| `b69e0a0` | SEO + a11y foundations: sitemap, robots, OG image, JSON-LD, 404/error/loading, mobile menu a11y, next/image |
| `6d96b0b` | Cinematic sector thumbs (czarne tło) + solid brand-pink cursor z glow |
| `768484c` | 2026 trends: grain, marquee, line-reveal hero, count-up, view transitions, before/after slider |
| `72632cd` | Media placeholders: case study cards, about founder photo, team cards, portfolio grid |
| `8a6473e` | Fix: redirect broken case study links to /portfolio |
| `97d25b8` | Initial commit |

---

*DEVHANDOFF.md — Seven Bison v2.2 · 2026-05-29*
