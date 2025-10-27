import type { Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lacné Žuvky - NABIJEME?!',
  description: 'Lacné Žuvky — Nabité aj v noci. Prémiové snus produkty s najlepšími cenami v Európe.',
  keywords: 'snus, lacné žuvky, nikotín, PABLO, KILLA, CUBA, ICEBERG, SIBERIA',
  authors: [{ name: 'Lacné Žuvky' }],
  openGraph: {
    title: 'Lacné Žuvky - NABIJEME?!',
    description: 'Lacné Žuvky — Nabité aj v noci. Prémiové snus produkty s najlepšími cenami v Európe.',
    type: 'website',
    locale: 'sk_SK',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk" className="dark">
      <body className={`${inter.className} bg-night-bg text-night-text`}>{children}</body>
    </html>
  )
}
