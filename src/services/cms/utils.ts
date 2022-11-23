import { StrapiSingleTypeData } from 'types/strapi'
import { CMS_URL } from './config'
import ImageDto from './types/ImageDto'

export const getCmsMediaUrl = (media: StrapiSingleTypeData<ImageDto>) => {
  return `${CMS_URL}${media.data?.attributes.url}`
}
