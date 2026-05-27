import type { MetadataRoute } from 'next'
import { site, sectors } from '@/lib/config'

/**
 * Sitemap — generated at build time, served as /sitemap.xml.
 * Includes every public route the user can navigate to.
 *
 * priority: 1.0 = homepage, 0.8 = sectors (commercial pages),
 *           0.7 = product (studio-access, portfolio), 0.5 = info pages.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`,               lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${site.url}/studio-access`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.url}/portfolio`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${site.url}/about`,          lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${site.url}/contact`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
  ]

  const sectorRoutes: MetadataRoute.Sitemap = sectors.map((s) => ({
    url: `${site.url}${s.href}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...sectorRoutes]
}
