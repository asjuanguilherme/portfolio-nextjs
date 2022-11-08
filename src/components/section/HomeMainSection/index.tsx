import * as S from './styles'

// Utils
import { socialItems } from 'config/socials'

// Components
import Image from 'next/image'
import Button from 'components/shared/Button'
import SectionAnchor from 'components/shared/SectionAnchor'

export type HomeMainSectionProps = {}

const HomeMainSection = ({}: HomeMainSectionProps) => {
  return (
    <S.Wrapper>
      <SectionAnchor name="main" />
      <S.Container>
        <S.SaudationPart>
          <S.SaudationText>Olá, sou Juan!</S.SaudationText>
          <S.SaudationRole>Front End Developer</S.SaudationRole>
          <S.Socials>
            {socialItems.map(item => (
              <li key={item.link}>
                <Button
                  color="translucent"
                  aria-label={`Abrir o ${item.title}`}
                  href={item.link}
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
            src="/assets/images/author.webp"
            alt="Foto de Juan Guilherme"
            layout="responsive"
            height="100%"
            width="100%"
          />
        </S.PhotoPart>
      </S.Container>
    </S.Wrapper>
  )
}

export default HomeMainSection
