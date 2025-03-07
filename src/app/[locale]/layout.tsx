import type { Metadata } from 'next'
import { Playfair, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { css, cx } from '@styled-system/css'
import Layout from '@/components/layout/Layout'
import { Locale } from '@/i18n/locales'
import { getMessages, getTranslations } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

export type RootLayoutParams = { locale: Locale }

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const playfair = Playfair({
  variable: '--font-playfair',
  subsets: ['latin']
})

export const generateMetadata = async ({
  params
}: {
  params: Promise<RootLayoutParams>
}): Promise<Metadata> => {
  const translations = await getTranslations({ locale: (await params).locale })

  return {
    title: translations('METADATA.SITE_TITLE'),
    description: translations('METADATA.DESCRIPTION')
  }
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<RootLayoutParams>
}>) {
  const locale = (await params).locale
  const translations = await getMessages({ locale })

  return (
    <html lang={locale}>
      <body
        className={cx(
          `${playfair.variable} ${inter.variable}`,
          css({ bg: 'secondary.500' })
        )}
      >
        <NextIntlClientProvider messages={translations}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
