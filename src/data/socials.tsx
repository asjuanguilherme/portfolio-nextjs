import EnvelopeIcon from 'components/shared/Icons/Envelope'
import GitHubIcon from 'components/shared/Icons/Github'
import InstagramIcon from 'components/shared/Icons/Instagram'
import LinkedInIcon from 'components/shared/Icons/Linkedin'
import WhatsappIcon from 'components/shared/Icons/Whatsapp'
import { SocialData } from 'types/SocialData'

export const socialsData: SocialData[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/asjuanguilherme/',
    icon: LinkedInIcon
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/asjuanguilherme',
    icon: InstagramIcon
  },
  {
    label: 'Github',
    url: 'https://github.com/asjuanguilherme',
    icon: GitHubIcon
  },
  {
    label: 'WhatsApp',
    url: 'https://wa.me/5584991913915?text=Ol%C3%A1%2C+Juan%21+Encontrei+seu+WhatsApp+pelo+seu+site+portf%C3%B3lio.+Gostaria+de+ter+uma+conversa+contigo%21',
    icon: WhatsappIcon
  },
  {
    label: 'Email',
    url: 'mailto:juanguilherme.code@gmail.com',
    icon: EnvelopeIcon
  }
]
