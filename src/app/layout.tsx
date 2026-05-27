import type { Metadata, Viewport } from 'next'
import { Raleway, Inter } from 'next/font/google'
import '@/styles/global.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
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
  },
  twitter: {
    card: 'summary_large_image',
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
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
