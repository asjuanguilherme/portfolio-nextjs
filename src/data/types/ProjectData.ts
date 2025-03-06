import { JSX } from 'react'
import { SkillData } from './SkillData'

export type ProjectData = {
  id: number
  category: string
  slug: string
  title: string
  cardImage: string
  images: string[]
  content: JSX.Element
  skills: SkillData[]
  href?: string
}
