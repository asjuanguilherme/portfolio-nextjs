import { Locale } from '@/i18n/locales'

export type ProfessionalExperienceData = {
  id: number
  startDate: string
  endDate: string
  company: string
  location: string
  translations: Record<
    Locale,
    {
      title: string
      description: string
    }
  >
}
