import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#2E2A25',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const baseUrl = process.env.SITE_URL || 'https://la-pizzetta-tal.de'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'La Pizzetta | Authentic Italian Cuisine - Pizza, Pasta, Bar in Munich',
  description:
    'La Pizzetta - Authentic Italian cuisine in Hackenviertel, Munich. Pizza, pasta, bar with live sports. Casual dining near Marienplatz. Open late Fri-Sat until 3 AM.',
  keywords: [
    'La Pizzetta',
    'Italian restaurant Munich',
    'pizza Munich',
    'pasta Munich',
    'sports bar Munich',
    'Hackenviertel restaurant',
    'Marienplatz restaurant',
    'Italian cuisine Munich',
    'pizzeria Munich',
    'bar Munich',
  ],
  authors: [{ name: 'La Pizzetta GmbH' }],
  creator: 'La Pizzetta GmbH',
  openGraph: {
    title: 'La Pizzetta | Authentic Italian Cuisine - Pizza, Pasta, Bar',
    description:
      'Authentic Italian cuisine in Hackenviertel. Pizza, pasta, bar with live sports. Casual dining near Marienplatz.',
    url: 'https://la-pizzetta-tal.de',
    siteName: 'La Pizzetta',
    locale: 'en_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Pizzetta | Pizza, Pasta, Bar - Munich',
    description:
      'Authentic Italian cuisine in Hackenviertel. Pizza, pasta, bar with live sports.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://la-pizzetta-tal.de',
    languages: {
      'en-DE': 'https://la-pizzetta-tal.de/en',
      'de-DE': 'https://la-pizzetta-tal.de/de',
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* JSON-LD Structured Data for Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Restaurant',
              name: 'La Pizzetta',
              image: 'https://la-pizzetta-tal.de/icon.svg',
              url: 'https://la-pizzetta-tal.de',
              telephone: '+49-89-23238693',
              email: 'Info@la-pizzetta-tal.de',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Tal 4',
                addressLocality: 'Munich',
                postalCode: '80331',
                addressCountry: 'DE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.1374,
                longitude: 11.5755,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '03:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
                  opens: '09:00',
                  closes: '01:00',
                },
              ],
              servesCuisine: 'Italian',
              priceRange: '€€',
              acceptsReservations: true,
              menu: 'https://la-pizzetta-tal.de/menu',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
