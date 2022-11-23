import { cms } from '../config'
import { StrapiCollectionTypeData, StrapiSingleTypeData } from 'types/strapi'

export type GetSkillsResult = StrapiCollectionTypeData<{
  title: string
  color: string
  icon: StrapiSingleTypeData<{
    slug: string
    viewBox: string
    svgLight: string
    svgBold: string
  }>
}>

export const getSkills = async () => {
  try {
    const { data } = await cms.get<GetSkillsResult>('/skills?populate=icon')
    return data
  } catch (err) {
    return null
  }
}

export default getSkills
