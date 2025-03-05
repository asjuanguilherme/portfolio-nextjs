import { Locale } from '@/i18n/locales'

export type Tagline = {
  id: number
  translations: Record<Locale, string>
}
