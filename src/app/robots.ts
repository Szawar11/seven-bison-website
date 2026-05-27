import type { MetadataRoute } from 'next'
import { site } from '@/lib/config'

/**
 * robots.txt — served at /robots.txt.
 * Allows full crawl, blocks API routes (none yet, but reserved).
 * Points to sitemap for discovery.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
