import { StrapiCollectionTypeData, StrapiSingleTypeData } from 'types/strapi'
import ImageDto from './ImageDto'
import SkillDto from './SkillDto'

type ProjectDto = {
  title: string
  description: string
  content: string
  type: string
  cardImage: StrapiSingleTypeData<ImageDto>
  images: StrapiCollectionTypeData<ImageDto>
  skills: StrapiCollectionTypeData<SkillDto>
}

export default ProjectDto
