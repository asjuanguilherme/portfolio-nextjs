'use server'

import { cookies } from 'next/headers'

const ONBOARDING_COOKIE_KEY = 'onboarding_finished'

export const finishOnboarding = async () => {
  const cookiesList = await cookies()

  cookiesList.set(ONBOARDING_COOKIE_KEY, 'true')
}

export const isOnboardingFinished = async () => {
  const cookiesList = await cookies()

  return cookiesList.get(ONBOARDING_COOKIE_KEY)?.value == 'true' ? true : false
}
