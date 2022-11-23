import axios from 'axios'
import { StrapiCollectionRequest, StrapiRelationalField } from '../types/strapi'

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL

if (!CMS_API_URL) throw new Error('You must insert the CMS_API_URL env value')

const cms = axios.create({ baseURL: CMS_API_URL })

export type GetSkillsResult = StrapiCollectionRequest<{
  title: string
  color: string
  icon: StrapiRelationalField<{
    slug: string
    viewbox: string
    svgLight: string
    svgBold: string
  }>
}>

export const getSkills = async () => {
  try {
    const { data } = await cms.get<GetSkillsResult>('/skills?populate=icon')
    return data
  } catch (err) {
    return null
  }
}
