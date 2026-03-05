import type { MetadataRoute } from 'next'

const baseUrl = process.env.SITE_URL || 'https://la-pizzetta-tal.de'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'La Pizzetta',
    short_name: 'La Pizzetta',
    description:
      'Authentic Italian cuisine in Hackenviertel, Munich. Pizza, pasta, bar with live sports.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#2E2A25',
    theme_color: '#2E2A25',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
