import { IconComponent } from './../components/shared/Icons/utils/createIconComponent'
import { Instagram, Github, Envelope } from 'components/shared/Icons/index'

type SocialItemProps = {
  title: string
  link: string
  icon: IconComponent
}

export const socialItems: SocialItemProps[] = [
  {
    title: 'Instagram',
    icon: Instagram,
    link: 'https://instagram.com'
  },
  {
    title: 'GitHub',
    icon: Github,
    link: 'https://github.com'
  },
  {
    title: 'Email',
    icon: Envelope,
    link: 'mailto:juanguilherme.code@gmail.com'
  }
]
