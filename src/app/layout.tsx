import type { Metadata, Viewport } from 'next'
import { Raleway, Inter } from 'next/font/google'
import '@/styles/global.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { site } from '@/lib/config'

/* ── Fonts ────────────────────────────────────────────────────────── */
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

/* ── Meta ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    template: `%s — ${site.name}`,
    default: `${site.name} — ${site.tagline}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_GB',
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F5F2',
  width: 'device-width',
  initialScale: 1,
}

/* ── Root Layout ──────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${inter.variable}`}
    >
      <body>
        {/* JSON-LD Organization schema for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: site.name,
              url: site.url,
              logo: `${site.url}/images/logos/seven-bison-logo-pink.svg`,
              description: site.description,
              sameAs: [
                'https://www.linkedin.com/company/seven-bison',
                'https://vimeo.com/sevenbison',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'hello@sevenbison.com',
                areaServed: 'Worldwide',
                availableLanguage: ['English'],
              },
            }),
          }}
        />

        {/* 2026 layer: reading progress, grain texture, magnetic cursor */}
        <div className="scroll-progress" aria-hidden="true" />
        <div className="grain-layer" aria-hidden="true" />
        <CustomCursor />

        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
