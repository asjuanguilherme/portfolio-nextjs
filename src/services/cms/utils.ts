import { StrapiData } from 'types/strapi'
import { CMS_URL } from './config'
import ImageDto from './types/ImageDto'

export const getCmsMediaUrl = (media: StrapiData<ImageDto>) => {
  return `${CMS_URL}${media.attributes.url}`
}
