import * as S from './styles'

// Types
import { GetSocialsResult } from 'services/cms/queries/getSocials'

// Components
import Image from 'next/image'
import Button from 'components/shared/Button'
import SectionAnchor from 'components/shared/SectionAnchor'
import StrapiDynamicIcon from 'components/shared/StrapiDynamicIcon'

export type HomeMainSectionProps = {
  socials: GetSocialsResult | null
}

const HomeMainSection = ({ socials }: HomeMainSectionProps) => {
  return (
    <S.Wrapper>
      <SectionAnchor name="main" />
      <S.Container>
        <S.SaudationPart>
          <S.SaudationText>Olá, sou Juan!</S.SaudationText>
          <S.SaudationRole>Front End Developer</S.SaudationRole>
          <S.Socials>
            {socials?.data?.map(item => (
              <li key={item.id}>
                <Button
                  color="translucent"
                  aria-label={`Abrir o ${item.attributes.label}`}
                  href={item.attributes.url}
                  icon={() => <StrapiDynamicIcon {...item.attributes.icon} />}
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
