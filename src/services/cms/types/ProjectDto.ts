import { StrapiCollectionTypeData, StrapiSingleTypeData } from 'types/strapi'
import ImageDto from './ImageDto'
import SkillDto from './SkillDto'

type ProjectDto = {
  title: string
  content: string
  type: string
  cardImage: StrapiSingleTypeData<ImageDto>
  images: StrapiCollectionTypeData<ImageDto>
  skills: StrapiCollectionTypeData<SkillDto>
  url?: string
}

export default ProjectDto
