import { isOnboardingFinished } from '@/app/actions'
import { Locale } from '@/i18n/locales'
import { redirect } from '@/i18n/navigation'
import { ReactNode } from 'react'

export type OnboardingLayoutProps = {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

export default async function OnboardingLayout({
  children,
  params
}: OnboardingLayoutProps) {
  const { locale } = await params

  if (await isOnboardingFinished()) return redirect({ href: '/#start', locale })

  return children
}
