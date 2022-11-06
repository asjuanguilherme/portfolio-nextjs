import * as S from './styles'
import Image from 'next/image'
import { socialItems } from 'config/socials'

export type HomeMainSectionProps = {}

const HomeMainSection = ({}: HomeMainSectionProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.SaudationPart>
          <S.SaudationText>Olá, sou Juan!</S.SaudationText>
          <S.SaudationRole>Front End Developer</S.SaudationRole>
          <S.Socials>
            {socialItems.map(item => {
              const Icon = item.icon
              return (
                <li key={item.link}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    alt-role={`Abrir o ${item.title}`}
                  >
                    <Icon />
                  </a>
                </li>
              )
            })}
          </S.Socials>
        </S.SaudationPart>
        <S.PhotoPart>
          <Image
            src="https://react-web-portfolio-sigma.vercel.app/static/media/author.c6f80ed8.jpg"
            alt="Foto de Juan Guilherme"
            layout="fill"
          />
        </S.PhotoPart>
      </S.Container>
    </S.Wrapper>
  )
}

export default HomeMainSection
