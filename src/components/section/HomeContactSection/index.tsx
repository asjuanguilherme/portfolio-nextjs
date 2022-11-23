import * as S from './styles'

// Types
import { GetSocialsResult } from 'services/cms/queries/getSocials'
import { GetContactSectionResult } from 'services/cms/queries/getContactSection'

// Components
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import SectionAnchor from 'components/shared/SectionAnchor'
import Button from 'components/shared/Button'
import StrapiDynamicIcon from 'components/shared/StrapiDynamicIcon'
import Markdown from 'markdown-to-jsx'

export type HomeContactSectionProps = {
  socials: GetSocialsResult | null
  data: GetContactSectionResult | null
}

const HomeContactSection = ({ data, socials }: HomeContactSectionProps) => {
  return (
    <SectionWrapper style={{ textAlign: 'center' }}>
      <SectionAnchor name="contact" />
      <SectionHeading>{data?.data?.attributes.title}</SectionHeading>
      <Container style={{ maxWidth: '540px' }}>
        <div>
          {data?.data?.attributes.content && (
            <Markdown>{data?.data?.attributes.content}</Markdown>
          )}
        </div>
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
