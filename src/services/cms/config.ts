import axios from 'axios'

export const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL

if (!CMS_URL) throw new Error('You must insert the CMS_URL env value')

export const cms = axios.create({ baseURL: `${CMS_URL}/api` })
