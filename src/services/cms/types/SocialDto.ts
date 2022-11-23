import { StrapiSingleTypeData } from 'types/strapi'
import IconDto from './IconDto'

type SocialDto = {
  label: string
  url: string
  icon: StrapiSingleTypeData<IconDto>
}

export default SocialDto
