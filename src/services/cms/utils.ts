import { StrapiData } from 'types/strapi'
import { CMS_URL } from './config'
import ImageDto from './types/ImageDto'

export const getCmsMediaUrl = (media: StrapiData<ImageDto>) => {
  if (process.env.NEXT_PUBLIC_IMAGES_DOMAIN === 'localhost')
    return `${CMS_URL}${media.attributes.url}`

  return media?.attributes.url
}
