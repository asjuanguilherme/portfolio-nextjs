import { cms } from '../config'
import { StrapiCollectionTypeData } from 'types/strapi'
import TestimonialDto from '../types/TestimonialDto'

export type GetTestimonialsResult = StrapiCollectionTypeData<TestimonialDto>

export const getTestimonials = async () => {
  try {
    const { data } = await cms.get<GetTestimonialsResult>(
      '/testimonials?populate=authorPhoto&sort=rank:asc'
    )
    return data
  } catch (err) {
    return null
  }
}

export default getTestimonials
