import { cms } from '../config'
import { StrapiCollectionTypeData } from 'types/strapi'
import ProjectDto from '../types/ProjectDto'

export type GetProjectsResult = StrapiCollectionTypeData<ProjectDto>

export const getProjects = async () => {
  try {
    const { data } = await cms.get<GetProjectsResult>(
      'projects?populate[images]=images&populate[cardImage]=cardImage&populate[skills][populate][0]=icon&sort=rank:asc'
    )
    return data
  } catch (err) {
    return null
  }
}

export default getProjects
