import type { Metadata } from 'next'
import { Playfair, Inter } from 'next/font/google'
import '@/styles/globals.css'
import { css, cx } from '@styled-system/css'
import Layout from '@/components/layout/Layout'
import { Locale } from '@/i18n/locales'
import { getMessages, getTranslations } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import NextTopLoader from 'nextjs-toploader'
import { colors } from '@/styles/theme.config'

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
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Portfolio Juan" />
        <link rel="manifest" href="/assets/site.webmanifest" />
      </head>
      <body
        className={cx(
          `${playfair.variable} ${inter.variable}`,
          css({ bg: 'secondary.500' })
        )}
      >
        <NextIntlClientProvider messages={translations}>
          <NextTopLoader
            color={colors.amber[500]}
            initialPosition={0.2}
            height={3}
            easing="ease"
            showSpinner={false}
            shadow={`0 0 10px ${colors.armadillo[400]},0 0 5px ${colors.armadillo[400]}`}
          />
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
