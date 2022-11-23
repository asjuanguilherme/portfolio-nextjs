import { cms } from '../config'
import { StrapiSingleTypeData } from 'types/strapi'

export type GetMainSectionResult = StrapiSingleTypeData<{
  saudation: string
  authorRole: string
  authorPhoto: StrapiSingleTypeData<{ url: string; alt: string }>
}>

export const getMainSection = async () => {
  try {
    const { data } = await cms.get<GetMainSectionResult>(
      '/main-section?populate=authorPhoto'
    )
    return data
  } catch (err) {
    return null
  }
}

export default getMainSection
