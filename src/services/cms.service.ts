import axios from 'axios'
import { StrapiCollectionTypeData, StrapiSingleTypeData } from '../types/strapi'

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL

if (!CMS_API_URL) throw new Error('You must insert the CMS_API_URL env value')

const cms = axios.create({ baseURL: CMS_API_URL })

export type GetSkillsResult = StrapiCollectionTypeData<{
  title: string
  color: string
  icon: StrapiSingleTypeData<{
    slug: string
    viewBox: string
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
