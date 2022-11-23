import { cms } from '../config'
import { StrapiCollectionTypeData } from 'types/strapi'
import SkillDto from '../types/SkillDto'

export type GetSkillsResult = StrapiCollectionTypeData<SkillDto>

export const getSkills = async () => {
  try {
    const { data } = await cms.get<GetSkillsResult>('/skills?populate=icon')
    return data
  } catch (err) {
    return null
  }
}

export default getSkills
