/** @type {import('tailwindcss').Config} */

// Shorthand: CSS variable reference
const v = (name) => `var(--${name})`

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    // ── Raw brand palette ──────────────────────────────────────────────
    // Override Tailwind defaults — only Seven Bison brand colors exist.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      pink: {
        DEFAULT: '#E80787',
        hover:   '#D00679',
        bright:  '#FF1A99',
        10:      'rgba(232, 7, 135, 0.10)',
        12:      'rgba(232, 7, 135, 0.12)',
        20:      'rgba(232, 7, 135, 0.20)',
      },

      ink:        '#111111',   // near-black for light-mode text
      graphite:   '#2A2A2A',   // secondary dark surface
      'gray-mid': '#8A8A8A',   // mid gray — borders, captions
      'gray-soft': '#E8E8E8',  // soft gray — dividers, disabled
      cream:      '#F7F5F2',   // light-mode canvas (warm off-white)
      white:      '#FFFFFF',
      black:      '#000000',

      // ── Semantic / mode-aware tokens (driven by CSS vars) ────────────
      // Surface tokens
      canvas:         v('surface-canvas'),    // #F7F5F2 light / #000000 dark
      'canvas-soft':  v('surface-soft'),      // #F2F0ED light / #111111 dark
      'canvas-muted': v('surface-muted'),     // #E8E8E8 light / #1A1A1A dark
      hairline:       v('surface-hairline'),  // #E8E8E8 light / rgba(255,255,255,0.10) dark

      // Content / text tokens — use as text-content-primary, text-content-muted …
      content: {
        primary:   v('text-primary'),    // #111111 light / #FFFFFF dark
        secondary: v('text-secondary'),  // #2A2A2A light / rgba(255,255,255,0.85) dark
        muted:     v('text-muted'),      // #6F6F6F light / #B8B8B8 dark
        disabled:  v('text-disabled'),   // #8A8A8A light / #6F6F6F dark
        inverse:   v('text-inverse'),    // #F7F5F2 light / #111111 dark
        accent:    v('text-accent'),     // #E80787 both modes
      },
    },

    // ── Typography ─────────────────────────────────────────────────────
    fontFamily: {
      display: ['var(--font-raleway)', 'sans-serif'],
      body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
    },

    fontSize: {
      // Micro / UI
      eyebrow:   ['12px',  { lineHeight: '1.2',  letterSpacing: '0.08em', fontWeight: '500' }],
      caption:   ['12px',  { lineHeight: '1.4',  letterSpacing: '0',      fontWeight: '400' }],
      'body-sm': ['13px',  { lineHeight: '1.5',  letterSpacing: '0',      fontWeight: '400' }],
      body:      ['15px',  { lineHeight: '1.6',  letterSpacing: '0',      fontWeight: '400' }],
      'body-lg': ['16px',  { lineHeight: '1.6',  letterSpacing: '0',      fontWeight: '400' }],
      lead:      ['19px',  { lineHeight: '1.5',  letterSpacing: '0',      fontWeight: '400' }],
      cta:       ['14px',  { lineHeight: '1',    letterSpacing: '0.02em', fontWeight: '600' }],

      // Display — Raleway, Title Case, no uppercase
      h4: ['17px',  { lineHeight: '1.4',  letterSpacing: '0',       fontWeight: '500' }],
      h3: ['28px',  { lineHeight: '1.25', letterSpacing: '0',       fontWeight: '500' }],
      h2: ['42px',  { lineHeight: '1.15', letterSpacing: '-0.005em', fontWeight: '600' }],
      h1: ['76px',  { lineHeight: '1.05', letterSpacing: '-0.01em',  fontWeight: '700' }],

      // Mobile display
      'h1-m': ['52px', { lineHeight: '1.05', letterSpacing: '-0.01em',  fontWeight: '700' }],
      'h2-m': ['30px', { lineHeight: '1.15', letterSpacing: '-0.005em', fontWeight: '600' }],
      'h3-m': ['22px', { lineHeight: '1.25', letterSpacing: '0',        fontWeight: '500' }],
    },

    // ── Spacing — 4 px base (mirrors DESIGN.master.md §8) ─────────────
    // Intentionally use Tailwind's default spacing scale (1 = 4px).
    // Custom additions below via extend.

    extend: {
      maxWidth: {
        site:     '1440px',
        readable: '720px',
        prose:    '65ch',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        micro:  '200ms',
        reveal: '600ms',
      },
      letterSpacing: {
        label: '0.08em',
        cta:   '0.02em',
      },
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      // Aspect ratios for reel containers
      aspectRatio: {
        reel:  '16 / 9',
        card:  '4 / 3',
        split: '5 / 6',
      },
    },
  },
  plugins: [],
}
