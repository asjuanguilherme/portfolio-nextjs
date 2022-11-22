import axios from 'axios'
import { StrapiCollectionRequest, StrapiSingleRequest } from './types/strapi'

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL

if (!CMS_API_URL) throw new Error('You must insert the CMS_API_URL env value')

const cms = axios.create({ baseURL: CMS_API_URL })

export const getSkills = async () => {
  const { data } = await cms.get<
    StrapiCollectionRequest<{
      slug: string
      svg: string
      color: string
    }>
  >('/skills')

  return data.data
}
