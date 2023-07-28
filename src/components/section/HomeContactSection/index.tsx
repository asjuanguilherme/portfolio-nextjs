import * as S from './styles'
import { useContext, useRef, useEffect } from 'react'

// Contexts
import { NavigationContext } from 'contexts/NavigationContext'

// Components
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import SectionAnchor from 'components/shared/SectionAnchor'
import Button from 'components/shared/Button'
import { socialsData } from 'data/socials'

export type HomeContactSectionProps = {}

const HomeContactSection = () => {
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
      <SectionHeading>Entre em contato e vamos conversar!</SectionHeading>
      <Container style={{ maxWidth: '540px' }}>
        <div>
          <p>
            Se você estiver interessado em ter uma conversa comigo, fique à
            vontade para entrar em contato por meio das minhas redes sociais,
            WhatsApp ou email. Estou ansioso para receber sua mensagem e iniciar
            uma conversa produtiva.
          </p>
        </div>
        <S.SocialLinks>
          {socialsData.map((social, index) => (
            <li key={index}>
              <Button
                href={social.url}
                aria-label={`Abrir ${social.label}`}
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
