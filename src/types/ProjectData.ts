import { SkillData } from './SkillData'

export type ProjectData = {
  type: string
  slug: string
  title: string
  cardImage: string
  images: string[]
  liveUrl: string
  content: JSX.Element
  skills: SkillData[]
}
