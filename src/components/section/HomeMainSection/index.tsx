import * as S from './styles'
import Image from 'next/image'
import { socialItems } from 'config/socials'
import Button from 'components/shared/Button'

export type HomeMainSectionProps = {}

const HomeMainSection = ({}: HomeMainSectionProps) => {
  return (
    <S.Wrapper>
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
            layout="fill"
          />
        </S.PhotoPart>
      </S.Container>
    </S.Wrapper>
  )
}

export default HomeMainSection
