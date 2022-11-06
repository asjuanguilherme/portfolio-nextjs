import * as S from './styles'
import Image from 'next/image'

export type HomeMainSectionProps = {}

const HomeMainSection = ({}: HomeMainSectionProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.SaudationPart>
          <S.SaudationText>Olá, sou Juan!</S.SaudationText>
          <S.SaudationRole>Front End Developer</S.SaudationRole>
          <S.Socials>{/* <Socials /> */}</S.Socials>
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
