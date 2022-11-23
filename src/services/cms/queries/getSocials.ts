import { cms } from '../config'
import { StrapiCollectionTypeData } from 'types/strapi'
import SocialDto from '../types/SocialDto'

export type GetSocialsResult = StrapiCollectionTypeData<SocialDto>

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
