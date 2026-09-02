import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { SITE_URL } from '@/content/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chris Lekkas — Product strategist and digital builder',
    template: '%s — Chris Lekkas',
  },
  description:
    'Chris Lekkas helps owner-led businesses work out what their website or workflow needs to accomplish, then takes it from strategy through design, build and launch — in English or Spanish.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  authors: [{ name: 'Chris Lekkas', url: SITE_URL }],
  creator: 'Chris Lekkas',
}

export const viewport: Viewport = {
  themeColor: '#faf7f2',
  width: 'device-width',
  initialScale: 1,
}

/**
 * The root <html> carries `en` because the root path itself is an English
 * redirect stub. Each language tree sets its own `lang` on the content wrapper
 * and its own canonical and alternate URLs.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
