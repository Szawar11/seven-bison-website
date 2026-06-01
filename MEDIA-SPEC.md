# Seven Bison — Media & Asset Specification

**Wersja:** v2.2
**Data:** 2026-05-29
**Status:** dokument dla Szymonka i wykonawców produkcji

Dokument opisuje **wszystkie pliki graficzne i wideo**, które muszą zostać dostarczone żeby strona była w 100% gotowa. Każda pozycja zawiera ścieżkę docelową w repo, dokładny format, rozmiar i zalecane źródło dostarczenia (upload do `/public/` vs. zewnętrzny URL Vimeo).

---

## 🎬 Strategia: Vimeo vs. bezpośredni upload

Mamy dwa kanały dostarczania video — używamy obu w odpowiedni sposób:

| Typ | Kanał | Dlaczego |
|---|---|---|
| **Krótkie loopy 5–15s** (Hero teaser, mosaic tiles) | **Upload do `/public/videos/`** (MP4 H.264) | Brak brandingu Vimeo, plays inline na mobile, autoplay muted działa natywnie, brak ekstra requestu, mała waga (~3-6 MB) |
| **Pełny showreel 60-180s** (modal po kliknięciu) | **Vimeo URL** (z player.vimeo.com) | Quality switching, bandwidth optimization, profesjonalny player, oszczędność transferu |
| **Case study videos** (przyszłość) | Vimeo URL embed | Player controls, captions, chapter markers |
| **Sektorowe teasery 5-15s** | Upload do `/public/videos/sectors/` | Te same powody co Hero teaser |

**Zasada:** jeśli ma być **autoplay muted loop bez kontrolek** → upload. Jeśli ma być **klikalne z dźwiękiem i kontrolą** → Vimeo.

---

## 📐 Konwencje techniczne

Wszystkie materiały muszą spełniać te standardy:

### Wideo (uploadowane)
- **Codec:** H.264 (MP4 container)
- **Bitrate:** 6-10 Mbps dla 1080p, 12-15 Mbps dla 4K
- **Audio:** brak (loopy są muted) lub AAC 128 kbps (showreele)
- **Color space:** Rec. 709 (sRGB) — NIE Rec. 2020 / HDR
- **Frame rate:** 24, 25 lub 30 fps (consistent w obrębie projektu)
- **Max waga loop:** ≤ 6 MB (5–15s w 1080p H.264 zmieści się)
- **Aspect ratio:** trzymać dokładnie wymagany (przycinamy w pre-prod, nie w CSS)

### Zdjęcia
- **Format:** JPG (jakość 80-85) lub WebP (jakość 75)
- **Color space:** sRGB — convert from Adobe RGB before export
- **Resolution:** dostarczać 1.5× ostatecznego rozmiaru wyświetlanego (retina)
- **Max waga:** ≤ 400 KB dla hero/featured, ≤ 150 KB dla tile

### Logotypy
- **Format:** SVG (preferowany), PNG z transparentnym tłem jako fallback
- **Kolor:** monochrome (jeden tint, najczęściej #111 lub #FFF), aplikacja zarządza opacity
- **Padding wewnętrzny:** minimum 8% wysokości — żeby logo nie dotykało krawędzi
- **Bezpieczna wymiana:** opacity 50% domyślnie → 80% na hover (zarządza CSS)

---

## 🏠 STRONA GŁÓWNA

### 1. Hero — pełny ekran cinematic video panel
**Lokalizacja:** sekcja na samej górze `/`
**Komponent:** `src/components/home/Hero.tsx`
**Propsy:** `<Hero teaserSrc=".." posterUrl=".." showreelVimeoUrl=".." />`

| # | Plik | Ścieżka / źródło | Format | Wymiary | Uwagi |
|---|---|---|---|---|---|
| 1a | Hero teaser loop | `/public/videos/hero-teaser.mp4` | MP4 H.264 | **21:9 · 1920×823** | 5–15s, muted, looped seamlessly. Najlepsze ujęcia z reelu, montowane na "best moments" |
| 1b | Hero teaser poster | `/public/videos/hero-teaser-poster.jpg` | JPG | 1920×823 | Klatka z teasera, ładuje się zanim video wystartuje (300ms) |
| 1c | Full showreel | **Vimeo URL** | — | 16:9 (player auto) | Pełna wersja 60-180s, podlinkować jako `https://player.vimeo.com/video/{ID}` |

**Wymagana akcja:** wpisać linki w `src/app/page.tsx`:
```tsx
<Hero
  teaserSrc="/videos/hero-teaser.mp4"
  posterUrl="/videos/hero-teaser-poster.jpg"
  showreelVimeoUrl="https://player.vimeo.com/video/123456789"
/>
```

---

### 2. Logo Wall (Trusted by) — 18 logotypów klientów
**Lokalizacja:** zaraz pod Hero
**Komponent:** `src/components/home/LogoWall.tsx`

| Brand | Plik docelowy |
|---|---|
| Aramco | `/public/images/logos/clients/aramco.svg` |
| Hilti | `/public/images/logos/clients/hilti.svg` |
| Roche | `/public/images/logos/clients/roche.svg` |
| Bayer | `/public/images/logos/clients/bayer.svg` |
| Pfizer | `/public/images/logos/clients/pfizer.svg` |
| Daikin | `/public/images/logos/clients/daikin.svg` |
| AWS | `/public/images/logos/clients/aws.svg` |
| Outpost24 | `/public/images/logos/clients/outpost24.svg` |
| Alacriti | `/public/images/logos/clients/alacriti.svg` |
| Santen | `/public/images/logos/clients/santen.svg` |
| Sherwin Williams | `/public/images/logos/clients/sherwin-williams.svg` |
| R3 | `/public/images/logos/clients/r3.svg` |
| TF Kable | `/public/images/logos/clients/tf-kable.svg` |
| Harris Health | `/public/images/logos/clients/harris-health.svg` |
| BT | `/public/images/logos/clients/bt.svg` |
| KPMG | `/public/images/logos/clients/kpmg.svg` |
| Paramount | `/public/images/logos/clients/paramount.svg` |
| MTV | `/public/images/logos/clients/mtv.svg` |

**Format:** SVG monochrome (pojedynczy tint, optymalnie #111111 — kolor primary text)
**Wymiary docelowe:** ~120×40 px (3:1 aspect ratio, ale SVG skaluje się płynnie)
**Padding wewnętrzny:** ≥ 8% wysokości po każdej stronie
**Waga:** ≤ 8 KB każdy

---

### 3. Trust Strip — 5 logotypów + ratings
**Komponent:** `src/components/home/TrustStrip.tsx`

| Brand | Plik docelowy | Format |
|---|---|---|
| BT | `/public/images/logos/clients/bt.svg` | SVG mono |
| KPMG | `/public/images/logos/clients/kpmg.svg` | SVG mono |
| AWS | `/public/images/logos/clients/aws.svg` | SVG mono |
| Paramount | `/public/images/logos/clients/paramount.svg` | SVG mono |
| MTV | `/public/images/logos/clients/mtv.svg` | SVG mono |

Te same pliki co Logo Wall — używamy podzbioru przez prop `logos={['bt','kpmg',...]}`.

**Wymiary docelowe:** ~100×32 px box, padding wewnętrzny 6-8%

---

### 4. Sector Cards — 3 kafelki branżowe
**Komponent:** `src/components/home/SectorCards.tsx`

Każdy kafelek ma być reprezentacją branży — preferujemy **video loop**, ale **statyczne zdjęcia** też akceptowane.

| Sektor | Plik docelowy | Format | Wymiary | Uwagi |
|---|---|---|---|---|
| Tech | `/public/videos/sector-tech-poster.jpg` (poster) + opcjonalnie `/public/videos/sector-tech.mp4` (loop) | JPG + MP4 | **4:3 · 1280×960** | Cinematyczne ujęcie: data center, code on screen, abstract tech |
| Heavy Industry | `/public/videos/sector-heavy-poster.jpg` + opcjonalnie `.mp4` | JPG + MP4 | 4:3 · 1280×960 | Stocznia / huta / infrastruktura — w ciemnej tonacji |
| Healthcare & Pharma | `/public/videos/sector-healthcare-poster.jpg` + opcjonalnie `.mp4` | JPG + MP4 | 4:3 · 1280×960 | Lab / molekularne / medical imaging |

**Jeśli video loop:** 5–8s, MP4 H.264, ≤ 4 MB, muted, seamlessly looped.

---

### 5. Selected Work Mosaic — 9 kafelków prac (home)
**Komponent:** `src/components/home/SelectedWorkMosaic.tsx`

Mieszane rozmiary. Każdy kafelek może być **statycznym posterem** lub **loop video** (na hover odpalany).

| Praca | Span | Aspect ratio + size | Poster (JPG) | Loop video (MP4, opcj.) |
|---|---|---|---|---|
| Roche — Mechanism of action | big | **16:10 · 1920×1200** | `/public/videos/work/roche-poster.jpg` | `/public/videos/work/roche-loop.mp4` |
| Aramco — Energy infrastructure | tall | **3:4 · 1080×1440** | `/public/videos/work/aramco-poster.jpg` | `/public/videos/work/aramco-loop.mp4` |
| Hilti — Product launch | wide | **16:9 · 1920×1080** | `/public/videos/work/hilti-poster.jpg` | `/public/videos/work/hilti-loop.mp4` |
| Outpost24 — Attack surface | square | **1:1 · 1080×1080** | `/public/videos/work/outpost24-poster.jpg` | (opcjonalne) |
| Alacriti — Real-time payments | square | 1:1 · 1080×1080 | `/public/videos/work/alacriti-poster.jpg` | (opcjonalne) |
| Bayer — Patient education | wide | 16:9 · 1920×1080 | `/public/videos/work/bayer-poster.jpg` | `/public/videos/work/bayer-loop.mp4` |
| AWS — Cloud migration | big | 16:10 · 1920×1200 | `/public/videos/work/aws-poster.jpg` | `/public/videos/work/aws-loop.mp4` |
| Santen — Ophthalmic launch | square | 1:1 · 1080×1080 | `/public/videos/work/santen-poster.jpg` | (opcjonalne) |
| TF Kable — Subsea installation | square | 1:1 · 1080×1080 | `/public/videos/work/tfkable-poster.jpg` | (opcjonalne) |

**Loop video specs:** 5–10s, ≤ 4 MB, muted, seamless loop. Posters obowiązkowe (fallback gdy video się nie załaduje lub na mobile).

---

### 6. Founder Block — zdjęcie Szymonka
**Komponenty:** `FounderTeaser.tsx` (home) + `about/page.tsx`

| Plik | Format | Wymiary | Uwagi |
|---|---|---|---|
| `/public/images/founder.jpg` | JPG / WebP | **4:5 · 1600×2000** | Portret środowiskowy. Cropuje się do 4:5 na home, 4:5 portrait na about |

**Styling:** zdjęcie w czarnej obwódce. Najlepiej studyjne lub w naturalnym świetle, neutralne tło.

---

### 7. Team — 3 placeholdery (about page)

| Plik | Format | Wymiary |
|---|---|---|
| `/public/images/team/team-1.jpg` | JPG | **1:1 · 1000×1000** |
| `/public/images/team/team-2.jpg` | JPG | 1:1 · 1000×1000 |
| `/public/images/team/team-3.jpg` | JPG | 1:1 · 1000×1000 |

Headshoty 1:1, neutralne tło, spójna stylistyka.

---

## 🏭 STRONY SEKTOROWE (Tech / Heavy Industry / Healthcare & Pharma)

### A. Sector Hero (na każdej z 3 stron)
**Komponent:** `src/components/sector/SectorHero.tsx`

| Sektor | Teaser MP4 | Poster | Full reel (Vimeo) |
|---|---|---|---|
| Tech | `/public/videos/sectors/tech-teaser.mp4` | `/public/videos/sectors/tech-poster.jpg` | Vimeo URL |
| Heavy Industry | `/public/videos/sectors/heavy-teaser.mp4` | `/public/videos/sectors/heavy-poster.jpg` | Vimeo URL |
| Healthcare & Pharma | `/public/videos/sectors/healthcare-teaser.mp4` | `/public/videos/sectors/healthcare-poster.jpg` | Vimeo URL |

**Format teasera:** MP4 H.264, **21:9 · 1920×823**, 5-15s, muted loop, ≤ 6 MB.
**Format postera:** JPG, 1920×823, ≤ 200 KB.

**Wymagana akcja:** w każdej stronie sektora (np. `src/app/tech/page.tsx`) podać propsy:
```tsx
<SectorHero
  sector="Tech"
  headline="..."
  intro="..."
  teaserSrc="/videos/sectors/tech-teaser.mp4"
  posterUrl="/videos/sectors/tech-poster.jpg"
  showreelVimeoUrl="https://player.vimeo.com/video/..."
  placeholderVariant="tech"
/>
```

---

### B. Case Study Grid (na każdej z 3 stron)
**Komponent:** `src/components/sector/SectorCaseGrid.tsx`

Każda strona sektorowa pokazuje 3 case studies. Pozycje są zdefiniowane w plikach `tech/page.tsx`, `heavy-industry/page.tsx`, `healthcare-pharma/page.tsx` w tablicy `const cases = [...]`.

**Format poster:** JPG, **4:3 · 1280×960**, ≤ 150 KB.

| Sektor | Case study | Plik |
|---|---|---|
| Tech | Outpost24 — Attack surface management | `/public/videos/case-outpost24-poster.jpg` |
| Tech | Alacriti — Real-time payments | `/public/videos/case-alacriti-poster.jpg` |
| Tech | AWS — Cloud migration | `/public/videos/case-aws-poster.jpg` |
| Heavy | Aramco — Energy infrastructure | `/public/videos/case-aramco-poster.jpg` |
| Heavy | Hilti — Product launch series | `/public/videos/case-hilti-poster.jpg` |
| Heavy | TF Kable — Subsea cable | `/public/videos/case-tfkable-poster.jpg` |
| Pharma | Roche — MOA animation | `/public/videos/case-roche-poster.jpg` |
| Pharma | Bayer — Patient education | `/public/videos/case-bayer-poster.jpg` |
| Pharma | Santen — Ophthalmic launch | `/public/videos/case-santen-poster.jpg` |

**Opcjonalnie:** dla każdego case study dodać też pełne video case study na Vimeo — link będzie używany przy kliknięciu w kafelek (gdy powstaną dedykowane strony case studies, na razie linki idą na `/portfolio`).

---

## 📂 STRONA PORTFOLIO

### Portfolio Mosaic — 12 kafelków
**Komponent:** `src/components/portfolio/PortfolioMosaic.tsx`

Zawiera wszystkie 9 prac z homepage + 3 dodatkowe (Sherwin Williams, Daikin, R3).

Plik docelowy → ten sam wzorzec co Selected Work Mosaic, użyj tych samych posterów + loop video tam gdzie istnieją.

Dodatkowe pliki (poza tym co już wymienione w Selected Work):

| Praca | Span | Plik |
|---|---|---|
| Sherwin Williams — Manufacturing | square | `/public/videos/work/sherwin-williams-poster.jpg` |
| Daikin — Climate systems | square | `/public/videos/work/daikin-poster.jpg` |
| R3 — Enterprise blockchain | wide | `/public/videos/work/r3-poster.jpg` |

---

## 🎨 GRAFIKA BRANDOWA

| Plik | Status | Format | Lokalizacja |
|---|---|---|---|
| Logo Seven Bison — różowe | ✅ dostarczone | SVG | `/public/images/logos/seven-bison-logo-pink.svg` |
| Logo Seven Bison — białe | ✅ dostarczone | SVG | `/public/images/logos/seven-bison-logo-white.svg` |
| Logo Seven Bison — czarne | ✅ dostarczone | SVG | `/public/images/logos/seven-bison-logo-black.svg` |
| Favicon | ✅ dostarczone | SVG | `/public/images/favicon.svg` |
| Apple touch icon | ❓ do dostarczenia | PNG | `/public/apple-touch-icon.png` (180×180) |
| OG image | ✅ generowane | dynamic | `/opengraph-image` route (Next.js ImageResponse) |

---

## 🔗 ZEWNĘTRZNE URL-e (do wpisania w `lib/config.ts`)

```ts
export const contact = {
  calendly: 'https://calendly.com/seven-bison/intro',  // ← REAL URL
  email:    'hello@sevenbison.com',                    // ← REAL EMAIL
}
```

Plus pojedyncze podmiany w `src/app/page.tsx`:
```ts
const homeQuotes = [
  {
    text: 'They turned a deeply technical cybersecurity platform...',
    name: 'Imię Nazwisko',        // ← REAL ATTRIBUTION
    title: 'Stanowisko',
    company: 'Outpost24',
  },
  // ... × 3 more quotes (Hilti, Roche, Bayer)
]
```

---

## ✅ Checklist dostawy

Skopiuj do checklisty Notion / Trello:

### Pliki video (MP4 upload do /public/videos/)
- [ ] `hero-teaser.mp4` — 21:9 · 1920×823 · 5-15s loop
- [ ] `hero-teaser-poster.jpg` — 1920×823
- [ ] `sectors/tech-teaser.mp4` — 21:9 · 1920×823 · 5-15s
- [ ] `sectors/tech-poster.jpg`
- [ ] `sectors/heavy-teaser.mp4` — 21:9 · 1920×823 · 5-15s
- [ ] `sectors/heavy-poster.jpg`
- [ ] `sectors/healthcare-teaser.mp4` — 21:9 · 1920×823 · 5-15s
- [ ] `sectors/healthcare-poster.jpg`
- [ ] `work/roche-poster.jpg` + (opcj.) `roche-loop.mp4` — 16:10 · 1920×1200
- [ ] `work/aramco-poster.jpg` + (opcj.) `aramco-loop.mp4` — 3:4 · 1080×1440
- [ ] `work/hilti-poster.jpg` + (opcj.) `hilti-loop.mp4` — 16:9
- [ ] `work/outpost24-poster.jpg` — 1:1
- [ ] `work/alacriti-poster.jpg` — 1:1
- [ ] `work/bayer-poster.jpg` + (opcj.) loop — 16:9
- [ ] `work/aws-poster.jpg` + (opcj.) loop — 16:10
- [ ] `work/santen-poster.jpg` — 1:1
- [ ] `work/tfkable-poster.jpg` — 1:1
- [ ] `work/sherwin-williams-poster.jpg` — 1:1
- [ ] `work/daikin-poster.jpg` — 1:1
- [ ] `work/r3-poster.jpg` — 16:9
- [ ] `case-outpost24-poster.jpg` … `case-santen-poster.jpg` (9 case study posterów)
- [ ] `sector-tech-poster.jpg`, `sector-heavy-poster.jpg`, `sector-healthcare-poster.jpg`

### Vimeo URLs (do wpisania jako propsy)
- [ ] Full showreel Vimeo URL (homepage Hero modal)
- [ ] Tech sector full reel Vimeo URL
- [ ] Heavy Industry sector full reel Vimeo URL
- [ ] Healthcare & Pharma sector full reel Vimeo URL

### Pliki SVG (logos do /public/images/logos/clients/)
- [ ] 18 plików SVG monochrome — Aramco, Hilti, Roche, Bayer, Pfizer, Daikin, AWS, Outpost24, Alacriti, Santen, Sherwin Williams, R3, TF Kable, Harris Health, BT, KPMG, Paramount, MTV

### Zdjęcia
- [ ] `founder.jpg` — Szymon Wojewski portret, 4:5 · 1600×2000
- [ ] `team/team-1.jpg`, `team-2.jpg`, `team-3.jpg` — 1:1 · 1000×1000

### Konfiguracja
- [ ] Calendly URL (`src/lib/config.ts` linia 18)
- [ ] 4 realne cytaty testimonials w `src/app/page.tsx` linie 26-51 (z imionami + zgodami klientów)
- [ ] Cytaty na stronach sektorowych w `tech/page.tsx`, `heavy-industry/page.tsx`, `healthcare-pharma/page.tsx`

---

## 📊 Szacunkowa waga całości po podmiance

| Kategoria | Szacunkowa waga | Strategia load |
|---|---|---|
| Hero teaser MP4 | ~6 MB | preload metadata, autoplay |
| Sector teasers × 3 MP4 | ~15 MB | lazy (load on route enter) |
| Work loops × 6 MP4 | ~24 MB | lazy (load on intersection) |
| Posters × ~25 JPG | ~3 MB total | optimization via next/image, AVIF fallback |
| Logo SVG × 18 | ~120 KB total | inline via next/image |
| Founder + team JPG × 4 | ~800 KB total | next/image z blur placeholder |
| **TOTAL** | **~49 MB** | znaczna część loadowana lazy |

First-paint bundle przy obecnym placeholder mode: ~3 MB. Z prawdziwym hero teaserem: ~9 MB initially, reszta lazy.

---

*Plik utrzymywany ręcznie. Aktualizuj po każdej dostawie materiałów.*
