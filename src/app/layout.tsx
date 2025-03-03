import type { Metadata } from 'next'
import { Playfair, Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const playfair = Playfair({
  variable: '--font-playfair',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}
