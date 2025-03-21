import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import { Locale } from '@/i18n/locales'
import { isOnboardingFinished } from '@/app/actions'
import { redirect } from '@/i18n/navigation'

export type AppLayoutParams = { locale: Locale }

export default async function AppLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: Promise<AppLayoutParams>
}>) {
  const { locale } = await params

  if (await isOnboardingFinished()) {
    return <Layout>{children}</Layout>
  }

  return redirect({ href: '/welcome', locale })
}
