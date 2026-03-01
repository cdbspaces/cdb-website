import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'
import { client } from '@/lib/sanity'
import { getSiteSettings } from '@/lib/queries'

const _playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const _dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: 'Collaborate Design and Build | Architecture & Interiors',
  description: 'Award-winning architecture, interior design, and workplace strategy firm with studios in Sydney, London, Singapore, and New York.',
  generator: 'v0.app',
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

export const viewport: Viewport = {
  themeColor: '#f5f2ed',
}

export const revalidate = 60

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_dmMono.variable}`}>
      <body className="font-mono antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
