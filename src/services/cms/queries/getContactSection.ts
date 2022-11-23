import { cms } from '../config'
import { StrapiSingleTypeData } from 'types/strapi'

export type GetContactSectionResult = StrapiSingleTypeData<{
  title: string
  content: string
}>

export const getContactSection = async () => {
  try {
    const { data } = await cms.get<GetContactSectionResult>('contact-section')
    return data
  } catch (err) {
    return null
  }
}

export default getContactSection
