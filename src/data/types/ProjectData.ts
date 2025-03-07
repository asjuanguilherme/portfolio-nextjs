import { SkillData } from './SkillData'
import { Locale } from '@/i18n/locales'

export type ProjectData = {
  id: number
  slug: string
  year: number
  cardImage: string
  images: { src: string; alt?: string }[]
  skills: SkillData[]
  href?: string
  translations: Record<
    Locale,
    {
      title: string
      content: string
    }
  >
}
