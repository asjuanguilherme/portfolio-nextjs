import { defineRouting } from 'next-intl/routing'
import { locales, defaultLocale } from './locales'

export const routing = defineRouting({
  locales,
  defaultLocale
})
