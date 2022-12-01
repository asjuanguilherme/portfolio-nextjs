import * as S from './styles'
import { useContext, useRef, useEffect } from 'react'

// Types
import { GetSocialsResult } from 'services/cms/queries/getSocials'
import { GetContactSectionResult } from 'services/cms/queries/getContactSection'

// Contexts
import { NavigationContext } from 'contexts/NavigationContext'

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
  const { setActiveSection } = useContext(NavigationContext)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    try {
      const intersectionObserver = new IntersectionObserver(
        (entries: any) =>
          entries.some((entry: any) => entry.isIntersecting) &&
          setActiveSection('contact'),
        { threshold: 1 }
      )
      intersectionObserver.observe(sectionRef.current as any)

      return () => intersectionObserver.disconnect()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <SectionWrapper style={{ textAlign: 'center' }} ref={sectionRef}>
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
