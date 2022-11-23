import * as S from './styles'

// Types
import { GetSocialsResult } from 'services/cms/queries/getSocials'
import { GetMainSectionResult } from 'services/cms/queries/getMainSection'

// Components
import Image from 'next/image'
import Button from 'components/shared/Button'
import SectionAnchor from 'components/shared/SectionAnchor'
import StrapiDynamicIcon from 'components/shared/StrapiDynamicIcon'
import { getCmsMediaUrl } from 'services/cms/utils'

export type HomeMainSectionProps = {
  data: GetMainSectionResult | null
  socials: GetSocialsResult | null
}

const HomeMainSection = ({ data, socials }: HomeMainSectionProps) => {
  return (
    <S.Wrapper>
      <SectionAnchor name="main" />
      <S.Container>
        <S.SaudationPart>
          <S.SaudationText>{data?.data?.attributes.saudation}</S.SaudationText>
          <S.SaudationRole>{data?.data?.attributes.authorRole}</S.SaudationRole>
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
        {data?.data?.attributes.authorPhoto && (
          <S.PhotoPart>
            <Image
              src={getCmsMediaUrl(data?.data?.attributes.authorPhoto)}
              alt={data?.data?.attributes.authorPhoto.data?.attributes.alt}
              layout="responsive"
              height="100%"
              width="100%"
            />
          </S.PhotoPart>
        )}
      </S.Container>
    </S.Wrapper>
  )
}

export default HomeMainSection
