export type Locale = 'en' | 'pt' | 'nl'

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  nl: 'Nederlands'
}

export const locales = ['en', 'pt', 'nl'] as const

export const defaultLocale = 'en'
