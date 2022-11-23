import { cms } from '../config'
import { StrapiSingleTypeData } from 'types/strapi'

export type GetProjectsSectionResult = StrapiSingleTypeData<{ title: string }>

export const getProjectsSection = async () => {
  try {
    const { data } = await cms.get<GetProjectsSectionResult>('projects-section')
    return data
  } catch (err) {
    return null
  }
}

export default getProjectsSection
