import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LACNÉ ŽUVKY - NABIJEME?!',
  description: 'Cheap chewing gums - affordable prices, great quality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  )
}
