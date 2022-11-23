import { StrapiSingleTypeData } from 'types/strapi'
import { CMS_URL } from './config'

export const getCmsMediaUrl = (
  media: StrapiSingleTypeData<{ url: string }>
) => {
  return `${CMS_URL}${media.data?.attributes.url}`
}
