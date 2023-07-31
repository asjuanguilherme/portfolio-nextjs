import * as S from './styles'
import { useContext, useEffect, useRef } from 'react'

// Data
import { socialsData } from 'data/socials'

// Contexts
import { NavigationContext } from 'contexts/NavigationContext'

// Components
import Image from 'next/image'
import Button from 'components/shared/Button'
import SectionAnchor from 'components/shared/SectionAnchor'

const HomeMainSection = () => {
  const { setActiveSection } = useContext(NavigationContext)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    try {
      const intersectionObserver = new IntersectionObserver(
        (entries: any) =>
          entries.some((entry: any) => entry.isIntersecting) &&
          setActiveSection('main'),
        { threshold: 0.75 }
      )
      intersectionObserver.observe(sectionRef.current as any)

      return () => intersectionObserver.disconnect()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <S.Wrapper ref={sectionRef}>
      <SectionAnchor name="main" />
      <S.Container>
        <S.SaudationPart>
          <S.SaudationText>Juan Guilherme</S.SaudationText>
          <S.SaudationRole>Desenvolvedor Frontend</S.SaudationRole>
          <S.Socials>
            {socialsData.map((item, index) => (
              <li key={index}>
                <Button
                  color="translucent"
                  aria-label={`Abrir o ${item.label}`}
                  href={item.url}
                  icon={item.icon}
                  isExternal
                  onlyIcon
                />
              </li>
            ))}
          </S.Socials>
        </S.SaudationPart>

        <S.PhotoPart>
          <Image
            src="/assets/images/juan.png"
            alt="Juan Guilherme"
            layout="responsive"
            height="100%"
            width="100%"
            objectFit="cover"
            style={{
              borderRadius: '100%'
            }}
          />
          <S.OutImage />
        </S.PhotoPart>
      </S.Container>
    </S.Wrapper>
  )
}

export default HomeMainSection
