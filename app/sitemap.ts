import type { MetadataRoute } from 'next'

const baseUrl = process.env.SITE_URL || 'https://la-pizzetta-tal.de'

const routes = [
  '',
  '/about',
  '/menu',
  '/contact',
  '/careers',
  '/impressum',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'de']

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route || ''}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      })
    }
  }

  return entries
}
