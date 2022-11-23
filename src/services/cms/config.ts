import axios from 'axios'

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL

if (!CMS_API_URL) throw new Error('You must insert the CMS_API_URL env value')

export const cms = axios.create({ baseURL: CMS_API_URL })
