import * as S from './styles'

// Types
import { GetSocialsResult } from 'services/cms/queries/getSocials'

// Components
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import SectionAnchor from 'components/shared/SectionAnchor'
import Button from 'components/shared/Button'
import StrapiDynamicIcon from 'components/shared/StrapiDynamicIcon'

export type HomeContactSectionProps = {
  socials: GetSocialsResult | null
}

const HomeContactSection = ({ socials }: HomeContactSectionProps) => {
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
          {socials?.data?.map(social => (
            <li key={social.id}>
              <Button
                href={social.attributes.url}
                aria-label={`Abrir ${social.attributes.label}`}
                icon={() => <StrapiDynamicIcon {...social.attributes.icon} />}
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
