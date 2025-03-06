import { Locale } from '@/i18n/locales'
import { ReactNode } from 'react'
import { SkillCategoriesEnum } from '../skillCategories'

export type SkillCategoryData = {
  name: SkillCategoriesEnum
  translations: Record<Locale, string>
}

export type SkillData = {
  category: SkillCategoriesEnum
  title: string
  icon: () => ReactNode
}
