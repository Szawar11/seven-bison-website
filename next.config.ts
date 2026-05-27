import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ── Static export (Opcja B — zwykły serwer / FTP) ──────────────────────
  // Odkomentuj gdy chcesz wygenerować statyczny HTML do folderu `out/`.
  // Po odkomentowaniu: `npm run build` → wgraj folder `out/` na serwer.
  //
  // output: 'export',

  // ── Optymalizacje ───────────────────────────────────────────────────────
  experimental: {
    optimizePackageImports: ['gsap'],
  },

  // ── Zdjęcia z zewnętrznych domen (Vimeo) ────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'vimeo.com' },
      { protocol: 'https', hostname: 'player.vimeo.com' },
    ],
  },
}

export default nextConfig
