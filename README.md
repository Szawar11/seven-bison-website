# Seven Bison — Website

**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS · GSAP 3

---

## Wymagania (Prerequisites)

- **Node.js 18.17 lub nowszy** — https://nodejs.org (LTS)
- **npm 9+** — dołączony do Node.js

Sprawdź wersje:
```bash
node -v   # powinno być >= 18.17
npm -v    # powinno być >= 9
```

---

## Uruchomienie lokalnie (Local Dev)

```bash
# 1. Pobierz/rozpakuj projekt, wejdź do folderu
cd SB_website

# 2. Zainstaluj zależności (pierwsze uruchomienie — ~1-2 min)
npm install

# 3. Uruchom serwer deweloperski
npm run dev

# 4. Otwórz w przeglądarce
#    http://localhost:3000
```

Hot-reload działa — zmiany w plikach `.tsx`, `.css` są widoczne bez odświeżania.

---

## Dostępne strony

| URL | Plik |
|---|---|
| `/` | `src/app/page.tsx` |
| `/tech` | `src/app/tech/page.tsx` |
| `/heavy-industry` | `src/app/heavy-industry/page.tsx` |
| `/healthcare-pharma` | `src/app/healthcare-pharma/page.tsx` |
| `/studio-access` | `src/app/studio-access/page.tsx` |
| `/portfolio` | `src/app/portfolio/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

---

## Struktura projektu

```
SB_website/
├── src/
│   ├── app/                    ← Strony (Next.js App Router)
│   │   ├── layout.tsx          ← Główny layout: czcionki, metadane, Header + Footer
│   │   ├── page.tsx            ← Homepage
│   │   ├── tech/page.tsx
│   │   ├── heavy-industry/page.tsx
│   │   ├── healthcare-pharma/page.tsx
│   │   ├── studio-access/page.tsx
│   │   ├── portfolio/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── components/
│   │   ├── layout/             ← Header.tsx, Footer.tsx
│   │   ├── home/               ← Sekcje homepage (Hero, TrustStrip, ServicesStrip…)
│   │   ├── sector/             ← Sekcje podstron sektorowych (SectorHero, PainPoints…)
│   │   └── ui/                 ← Button, Section, Eyebrow (bloki wielokrotnego użytku)
│   │
│   ├── lib/
│   │   ├── config.ts           ← ⭐ GŁÓWNY PLIK KONFIGURACJI — Calendly, email, branże, usługi
│   │   └── gsap.ts             ← Inicjalizacja GSAP
│   │
│   └── styles/
│       └── global.css          ← Tokeny CSS (kolory, typografia), bazowe klasy
│
├── public/
│   ├── images/
│   │   ├── logos/              ← Logo Seven Bison + loga klientów (SVG)
│   │   └── README.md           ← Lista potrzebnych plików graficznych
│   └── videos/
│       └── README.md           ← Informacje o posterach i filmach Vimeo
│
├── tailwind.config.mjs         ← Tokeny kolorów, typografii, spacingów
├── next.config.ts              ← Konfiguracja Next.js
├── tsconfig.json
└── package.json
```

---

## Gdzie edytować treści

### Dane kontaktowe, Calendly, email
Otwórz `src/lib/config.ts` — to jedyne miejsce dla tych danych:

```ts
export const contact = {
  calendly: 'https://calendly.com/seven-bison/intro',  // ← ZMIEŃ NA PRAWDZIWY URL
  email: 'hello@sevenbison.com',
}
```

### Kolory marki i typografia
`tailwind.config.mjs` — tokeny projektowe:
- `pink` → `#E80787`
- `canvas` → `var(--surface-canvas)` (krem #F7F5F2 w trybie jasnym)
- `font-display` → Raleway
- `font-body` → Inter

### Tryb jasny / ciemny
`src/styles/global.css` — zmienne CSS:
- `:root { ... }` → tryb Light Corporate (domyślny)
- `.dark-zone { ... }` → tryb Dark Cinematic (prawa kolumna hero)

---

## Wdrożenie (Deployment)

### Opcja A — Vercel (zalecana, 5 minut)

Vercel to oficjalna platforma dla Next.js — darmowy tier wystarczy.

1. Załóż konto na https://vercel.com
2. Wciśnij **"Add New Project"** → importuj z GitHuba  
   (lub: `npm i -g vercel && vercel` w terminalu)
3. Ustaw:
   - **Framework Preset:** Next.js (wykrywa automatycznie)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next` (domyślnie)
4. Kliknij **Deploy** → gotowe. Każdy push do `main` = automatyczny deploy.

**Custom domain:** Settings → Domains → dodaj `sevenbison.com`

---

### Opcja B — Eksport statyczny (dowolny serwer / FTP)

Jeśli serwer nie obsługuje Node.js — wygeneruj statyczne HTML/CSS/JS:

**Krok 1:** Włącz tryb static export w `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  output: 'export',           // ← dodaj tę linię
  // ... reszta bez zmian
}
```

**Krok 2:** Zbuduj:
```bash
npm run build
```
Wynikowy folder: **`out/`** — zawiera pełną statyczną stronę.

**Krok 3:** Wgraj folder `out/` na serwer (FTP, cPanel, etc.)

> ⚠️ W trybie `export` animacje GSAP i routing działają normalnie.
> Opcja `output: 'export'` wyłącza Server Actions — tutaj nie ma żadnych.

---

### Opcja C — VPS / serwer z Node.js

```bash
# Na serwerze (Ubuntu/Debian):
node -v         # upewnij się że >= 18.17

git clone <repo> && cd SB_website
npm install
npm run build
npm start       # uruchamia na porcie 3000
```

Z Nginx jako reverse proxy:
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
}
```

---

## Skrypty npm

| Komenda | Co robi |
|---|---|
| `npm run dev` | Serwer deweloperski na localhost:3000 |
| `npm run build` | Build produkcyjny (sprawdź błędy przed deployem) |
| `npm start` | Uruchom build produkcyjny lokalnie |
| `npm run lint` | Sprawdź błędy ESLint |
| `npm run typecheck` | Sprawdź typy TypeScript bez buildu |

---

## Uwaga: stare pliki Astro

Folder `src/pages/` i pliki `*.astro` to pozostałości poprzedniej wersji (Astro).
**Next.js je ignoruje** — nie mają wpływu na działanie strony.
Można je usunąć lub zostawić — nie powodują błędów.

---

## Kontakt

Projekt: **Seven Bison** — bisonai@sevenbison.com  
Stack/AI build: Claude (Anthropic)
