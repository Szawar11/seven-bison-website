# Seven Bison — Dev Handoff

**Data:** 2026-05-27  
**Projekt:** sevenbison.com  
**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS 3 · GSAP 3  

---

## Status projektu

Strona zbudowana, kompiluje się czysto, wszystkie strony działają.
Poniżej lista tego co jest **gotowe**, co **czeka na content** od Szymona,
oraz co wymaga **pracy deweloperskiej**.

---

## ✅ Co jest gotowe (nie ruszać bez potrzeby)

| Element | Plik |
|---|---|
| Design system — tokeny CSS (kolory, typografia, spacing) | `src/styles/global.css`, `tailwind.config.mjs` |
| Tryb jasny (Light Corporate) + ciemny (Dark Cinematic `.dark-zone`) | `src/styles/global.css` |
| Czcionki: Raleway (display) + Inter (body) via Google Fonts | `src/app/layout.tsx` |
| Header — sticky, GSAP entrance, scroll-aware background | `src/components/layout/Header.tsx` |
| Footer — loga + nawigacja | `src/components/layout/Footer.tsx` |
| Homepage — wszystkie sekcje (Hero, TrustStrip, EndToEndPartner, ServicesStrip, SectorCards, HowWeWork, CTA) | `src/app/page.tsx` + `src/components/home/` |
| Hero — split-frame (jasna lewa + ciemna prawa z reel) + GSAP timeline | `src/components/home/Hero.tsx` |
| Strony sektorowe — Tech, Heavy Industry, Healthcare & Pharma | `src/app/tech/`, `heavy-industry/`, `healthcare-pharma/` |
| Sekcje sektorowe: SectorHero, PainPoints, SubsectorNav, SectorCaseGrid, Testimonials | `src/components/sector/` |
| Studio Access page | `src/app/studio-access/page.tsx` |
| Portfolio page (placeholder) | `src/app/portfolio/page.tsx` |
| About page | `src/app/about/page.tsx` |
| Contact page | `src/app/contact/page.tsx` |
| Wszystkie GSAP animacje (ScrollTrigger reveals, stagger, hero timeline) | W każdym komponencie `'use client'` |
| Komponenty UI: `Button`, `Section`, `Eyebrow` | `src/components/ui/` |
| Config — dane kontaktowe, sektory, usługi | `src/lib/config.ts` |

---

## 🔴 Do zrobienia — deweloperskie

### 1. Usunąć CTA buttons z hero (niezgodne ze spec)
**Plik:** `src/components/home/Hero.tsx` linie 91–97  
Spec mówi: *"No CTAs in the hero. The three industries are the action."*  
Usuń ten blok:
```tsx
<div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
  <Button variant="primary" href={contact.calendly} external>
    Book a call →
  </Button>
  <Button variant="secondary" href="/portfolio">
    See our work
  </Button>
</div>
```
Usuń też animację `.hero-cta` z GSAP timeline (linie 47–51).

---

### 2. Dodać sekcję Studio Access na homepage (§4.8 ze spec)
**Plik:** `src/app/page.tsx`  
Wstaw **przed** sekcją Testimonials (po `<HowWeWork />`):

```tsx
{/* §4.8 Studio Access teaser */}
<Section spacing="loose" surface="soft">
  <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
    <div className="md:col-span-3">
      <Eyebrow>Studio Access</Eyebrow>
    </div>
    <div className="md:col-span-9">
      <h2 className="max-w-readable font-display text-content-primary">
        Ongoing video on a monthly cadence.
      </h2>
      <p className="mt-4 max-w-readable text-lead text-content-secondary">
        For brands with recurring content needs — internal marketing and comms
        teams running multiple channels who don't want one-off vendor friction.
        Available project-by-project, or on an ongoing basis through Studio Access.
      </p>
      <Button variant="text" href="/studio-access" className="mt-6">
        See how Studio Access works →
      </Button>
    </div>
  </div>
</Section>
```

---

### 3. Dodać Founder block na homepage (§4.10 ze spec)
**Plik:** `src/app/page.tsx`  
Wstaw **po** Testimonials, **przed** logo wall:

```tsx
{/* §4.10 Founder block */}
<Section spacing="loose" surface="soft">
  <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
    <div className="md:col-span-3">
      <Eyebrow>Founder</Eyebrow>
    </div>
    <div className="md:col-span-9 flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
      {/* TODO: replace with <img> when Szymon's photo is delivered */}
      <div className="h-32 w-32 shrink-0 bg-canvas-soft border border-hairline" aria-hidden="true" />
      <div>
        <h2 className="font-display text-content-primary">Szymon Wojewski.</h2>
        <p className="mt-4 max-w-readable text-lead text-content-secondary">
          Background in news editing at Bloomberg UK and Getty Images before
          building Seven Bison. Editorial discipline, deadline reliability,
          comfort with complex subject matter.
        </p>
        <p className="mt-3 text-body text-content-secondary">
          Every discovery call goes through Szymon directly.
        </p>
        <Button variant="primary" href={contact.calendly} external className="mt-6">
          Book a call with Szymon →
        </Button>
      </div>
    </div>
  </div>
</Section>
```

---

### 4. Zbudować pełną logo wall "Trusted by" (§4.11 ze spec)
**Plik:** `src/app/page.tsx`  
Wstaw **po** Founder block, **przed** Final CTA.  
To jest "heavy artillery" wg spec — dać mu dużo miejsca.

Kiedy będą pliki SVG logotypów, zastąp tekst `<img>` tagami. Na razie:

```tsx
{/* §4.11 Trusted by — logo wall */}
<Section spacing="loose">
  <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
    <div className="md:col-span-3">
      <Eyebrow>Trusted by</Eyebrow>
    </div>
    <div className="md:col-span-9">
      <ul className="grid grid-cols-3 gap-x-10 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
        {[
          'Aramco','Hilti','Roche','Bayer','Pfizer','Daikin',
          'AWS','Outpost24','Alacriti','Santen','Sherwin Williams',
          'R3','TF Kable','Harris Health','BT','KPMG','Paramount','MTV',
        ].map((name) => (
          <li key={name} className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity">
            {/* TODO: replace text with <img src={`/images/logos/clients/${name.toLowerCase().replace(' ','-')}.svg`} /> */}
            <span className="font-display text-[13px] font-semibold uppercase tracking-widest text-content-primary">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</Section>
```

---

### 5. Dodać testimonials + customer story do Studio Access (§6 ze spec)
**Plik:** `src/app/studio-access/page.tsx`  
Wstaw między "How it works" a "CTA":

```tsx
{/* Customer story */}
<Section spacing="loose" surface="soft">
  <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
    <div className="md:col-span-3">
      <Eyebrow>In practice</Eyebrow>
    </div>
    <div className="md:col-span-9">
      <blockquote className="border-l-2 border-pink pl-6">
        {/* TODO: replace with real quote from Szymon */}
        <p className="font-body italic text-[1.15rem] leading-relaxed text-content-primary">
          "Placeholder — quote about ongoing partnership goes here."
        </p>
        <footer className="mt-4">
          <p className="text-body-sm font-medium text-content-primary">Name Surname</p>
          <p className="mt-0.5 text-caption text-content-muted">Title · Company</p>
        </footer>
      </blockquote>
    </div>
  </div>
</Section>
```

---

### 6. Zbudować Selected Work mosaic (§4.6 ze spec)
**Plik:** `src/app/page.tsx` — sekcja `05 · Selected work`  
Obecny stan: tylko placeholder tekst.  
Potrzeba: siatka 6–9 filmów, autoplay on hover, klik → Vimeo modal.  
**Blokuje:** dostawa posterów i URL Vimeo od Szymona — zrobić gdy będą assety.

---

## 🟡 Czeka na content od Szymona

Wszystkie poniższe elementy są w kodzie jako placeholdery.
Nie wymagają pracy deweloperskiej — tylko podmiana danych.

### `src/lib/config.ts` — zmień gdy dostępne:
```ts
export const contact = {
  calendly: 'https://calendly.com/seven-bison/intro',  // ← prawdziwy URL Calendly
  email: 'hello@sevenbison.com',
}
```

### `public/images/` — pliki graficzne:
| Plik | Opis |
|---|---|
| `logos/seven-bison-logo-pink.svg` | Pełne logo (na razie: mark + tekst w CSS) |
| `logos/clients/*.svg` | Loga klientów (Aramco, Hilti, Roche etc.) — SVG monochromatyczne |
| `og-default.jpg` | Open Graph 1200×630 |
| `favicon.ico` | 32×32 |
| `apple-touch-icon.png` | 180×180 |

### `public/videos/` — pliki wideo / postery:
| Plik | Opis |
|---|---|
| `reel-poster.jpg` | Poster dla głównego reela w hero |
| `sector-tech-poster.jpg` | Poster dla sekcji Tech |
| `sector-heavy-poster.jpg` | Poster dla sekcji Heavy Industry |
| `sector-healthcare-poster.jpg` | Poster dla sekcji Healthcare |
| `case-outpost24-poster.jpg` | Case study poster |
| `case-alacriti-poster.jpg` | Case study poster |
| `case-aws-poster.jpg` | Case study poster |

### Vimeo URL dla hero reela:
W `src/app/page.tsx` znajdź `<Hero />` i dodaj prop `vimeoUrl`:
```tsx
<Hero vimeoUrl="https://player.vimeo.com/video/TWÓJ_ID" />
```

### Cytaty (Testimonials):
W `src/app/tech/page.tsx`, `heavy-industry/page.tsx`, `healthcare-pharma/page.tsx`
znajdź tablicę `const quotes = [...]` i podmień placeholder na prawdziwe cytaty.

### Zdjęcie Szymona:
Podmień placeholder `<div className="h-32 w-32 ...">` w Founder block na:
```tsx
<img src="/images/szymon-wojewski.jpg" alt="Szymon Wojewski" className="h-32 w-32 object-cover" />
```

---

## Stare pliki Astro (można usunąć)

Następujące pliki to pozostałości poprzedniej wersji (Astro framework).
**Next.js je ignoruje** — nie wpływają na działanie strony.
Można je usunąć dla porządku:

```
src/pages/*.astro
src/layouts/BaseLayout.astro
src/components/**/*.astro
src/content/
astro.config.mjs
```

Albo zostawić — nie szkodzą.

---

## Design system — szybki cheatsheet

| Klasa Tailwind | Co robi |
|---|---|
| `font-display` | Raleway — nagłówki |
| `font-body` | Inter — tekst |
| `text-content-primary` | Główny tekst (#111 jasny / #FFF ciemny) |
| `text-content-secondary` | Wtórny tekst |
| `text-content-muted` | Przygaszone (meta, labels) |
| `text-pink` | Akcent #E80787 |
| `bg-canvas` | Tło (krem #F7F5F2 / czarne w dark-zone) |
| `bg-canvas-soft` | Lekko ciemniejsze tło |
| `border-hairline` | Subtelna linia podziału |
| `dark-zone` | Klasa na rodzicu = przełącza tokeny na Dark Cinematic |
| `eyebrow` | Mały uppercase label różowy (preset w CSS) |
| `container-site` | Kontener z marginesami strony |

### Tryb ciemny (Dark Cinematic)
Dodaj klasę `dark-zone` do kontenera — wszystkie tokeny `bg-canvas`, `text-content-*`
automatycznie przyjmą wartości ciemne. Używane w prawej kolumnie hero i sekcjach z `surface="dark"`.

---

## Jak działają animacje GSAP

Każdy komponent `'use client'` z animacją używa `useGSAP` z `@gsap/react`.
Animacje uruchamiają się gdy element wchodzi w viewport (`ScrollTrigger`).

Żeby dodać nową animację:
```tsx
'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const ref = useRef<HTMLDivElement>(null)

useGSAP(() => {
  gsap.from('.moja-klasa', {
    y: 32,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: { trigger: ref.current, start: 'top 80%' },
  })
}, { scope: ref })
```

---

*DEVHANDOFF.md — Seven Bison website · 2026-05-27*
