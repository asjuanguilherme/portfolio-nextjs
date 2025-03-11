import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import { Locale } from '@/i18n/locales'

export type AppLayoutParams = { locale: Locale }

export default async function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode
  params: Promise<AppLayoutParams>
}>) {
  return <Layout>{children}</Layout>
}
