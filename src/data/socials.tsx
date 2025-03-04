import LinkedinIcon from '@/components/icons/Linkedin'
import GithubIcon from '@/components/icons/Github'
import { SocialData } from './types/SocialData'
import { SendIcon } from 'lucide-react'

export const socialsData: SocialData[] = [
  {
    id: 0,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/asjuanguilherme/',
    icon: LinkedinIcon
  },
  {
    id: 1,
    label: 'Github',
    url: 'https://github.com/asjuanguilherme',
    icon: GithubIcon
  },
  {
    id: 2,
    label: 'Email',
    url: 'mailto:juanguilherme@gmail.com',
    icon: SendIcon
  }
]
