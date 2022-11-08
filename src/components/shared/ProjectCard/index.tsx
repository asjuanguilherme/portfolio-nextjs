import * as S from './styles'

// Types
import { DefaultTheme } from 'styled-components'

// Utils
import getNextLayer from 'utils/getNextLayer'

// Components
import Image from 'next/image'
import Button from 'components/shared/Button'

export type ProjectCardProps = {
  title: string
  category: string
  tags: string[]
  image: {
    url: string
    alt: string
  }
  layer?: keyof DefaultTheme['colors']['layers']
}

const ProjectCard = ({
  title,
  category,
  tags,
  image,
  layer = 1
}: ProjectCardProps) => {
  return (
    <S.Wrapper layer={layer}>
      <S.ImageWrapper>
        <Image
          src={image.url}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </S.ImageWrapper>
      <S.Informations>
        <S.Category>{category}</S.Category>
        <S.Title>{title}</S.Title>
        <S.Tags>
          {tags.map(tag => (
            <S.TagItem key={tag}>{tag}</S.TagItem>
          ))}
        </S.Tags>
      </S.Informations>
      <Button onClick={() => {}}>Saiba Mais</Button>
    </S.Wrapper>
  )
}

export default ProjectCard
