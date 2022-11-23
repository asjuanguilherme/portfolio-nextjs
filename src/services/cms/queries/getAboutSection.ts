import { cms } from '../config'
import { StrapiSingleTypeData } from 'types/strapi'

export type GetAboutSectionResult = StrapiSingleTypeData<{
  title: string
  content: string
  skillsTitle: string
}>

export const getAboutSection = async () => {
  try {
    const { data } = await cms.get<GetAboutSectionResult>('/about-section')
    return data
  } catch (err) {
    return null
  }
}

export default getAboutSection
