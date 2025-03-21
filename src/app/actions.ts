'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const ONBOARDING_COOKIE_KEY = 'onboarding_finished'

export const finishOnboarding = async () => {
  const cookiesList = await cookies()

  cookiesList.set(ONBOARDING_COOKIE_KEY, 'true')

  redirect('/#start')
}

export const isOnboardingFinished = async (): Promise<boolean> => {
  const cookiesList = await cookies()

  return cookiesList.get(ONBOARDING_COOKIE_KEY)?.value == 'true' ? true : false
}
