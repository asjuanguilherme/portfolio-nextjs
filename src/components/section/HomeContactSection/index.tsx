import * as S from './styles'

// Utils
import { socialItems } from 'config/socials'

// Components
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import SectionAnchor from 'components/shared/SectionAnchor'
import Button from 'components/shared/Button'

export type HomeContactSectionProps = {}

const HomeContactSection = ({}: HomeContactSectionProps) => {
  return (
    <SectionWrapper style={{ textAlign: 'center' }}>
      <SectionAnchor name="contact" />
      <SectionHeading>Fale Comigo</SectionHeading>
      <Container style={{ maxWidth: '540px' }}>
        <p>
          Caso tenha interesse em ter uma conversa comigo, minhas redes sociais,
          meu WhatsApp e também meu email estarão aguardando a sua mensagem.
        </p>
        <S.SocialLinks>
          {socialItems.map(social => (
            <li key={social.link}>
              <Button
                href={social.link}
                aria-label={`Abrir ${social.title}`}
                icon={social.icon}
                onlyIcon
                isExternal
              />
            </li>
          ))}
        </S.SocialLinks>
      </Container>
    </SectionWrapper>
  )
}

export default HomeContactSection
