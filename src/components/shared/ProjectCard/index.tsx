import * as S from './styles'

// Utils
import { getCmsMediaUrl } from 'services/cms/utils'

// Types
import { DefaultTheme } from 'styled-components'

// Components
import Image from 'next/image'
import Button from 'components/shared/Button'
import ProjectDto from 'services/cms/types/ProjectDto'

export type ProjectCardProps = ProjectDto & {
  layer?: keyof DefaultTheme['colors']['layers']
}

const ProjectCard = ({
  title,
  type,
  skills,
  cardImage,
  layer = 1
}: ProjectCardProps) => {
  return (
    <S.Wrapper layer={layer}>
      <S.ImageWrapper>
        <Image
          src={getCmsMediaUrl(cardImage)}
          alt={cardImage.data?.attributes.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </S.ImageWrapper>
      <S.Informations>
        <S.Category>{type}</S.Category>
        <S.Title>{title}</S.Title>
        <S.Tags>
          {skills?.data?.map(skill => (
            <S.TagItem key={skill.id}>{skill.attributes.title}</S.TagItem>
          ))}
        </S.Tags>
      </S.Informations>
      <Button onClick={() => {}}>Saiba Mais</Button>
    </S.Wrapper>
  )
}

export default ProjectCard
