import { StrapiSingleTypeData } from 'types/strapi'
import IconDto from './IconDto'

type SkillDto = {
  title: string
  color: string
  icon: StrapiSingleTypeData<IconDto>
}
export default SkillDto
