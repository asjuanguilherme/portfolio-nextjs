import { StrapiSingleTypeData } from 'types/strapi'
import ImageDto from './ImageDto'

type TestimonialDto = {
  authorName: string
  authorRole: string
  authorPhoto: StrapiSingleTypeData<ImageDto>
  testimonial: string
}

export default TestimonialDto
