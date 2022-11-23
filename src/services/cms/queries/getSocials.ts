import { cms } from '../config'
import { StrapiCollectionTypeData, StrapiSingleTypeData } from 'types/strapi'

export type GetSocialsResult = StrapiCollectionTypeData<{
  label: string
  url: string
  icon: StrapiSingleTypeData<{
    slug: string
    viewBox: string
    svgLight: string
    svgBold: string
  }>
}>

export const getSocials = async () => {
  try {
    const { data } = await cms.get<GetSocialsResult>(
      '/social-medias?populate=icon'
    )
    return data
  } catch (err) {
    return null
  }
}

export default getSocials
