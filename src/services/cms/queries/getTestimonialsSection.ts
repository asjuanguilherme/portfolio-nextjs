import { cms } from '../config'
import { StrapiSingleTypeData } from 'types/strapi'

export type GetTestimonialsSectionResult = StrapiSingleTypeData<{
  title: string
}>

export const getTestimonialsSection = async () => {
  try {
    const { data } = await cms.get<GetTestimonialsSectionResult>(
      'testimonials-section'
    )
    return data
  } catch (err) {
    return null
  }
}

export default getTestimonialsSection
