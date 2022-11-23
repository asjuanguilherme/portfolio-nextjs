import * as S from './styles'

// Utils
import { getCmsMediaUrl } from 'services/cms/utils'

// Types
import { DefaultTheme } from 'styled-components'

// Components
import Image from 'next/image'
import Button from 'components/shared/Button'
import ProjectDto from 'services/cms/types/ProjectDto'
import { useContext } from 'react'
import { ModalContext } from 'contexts/ModalContext'
import ProjectModalContent from '../ProjectModalContent'

export type ProjectCardProps = ProjectDto & {
  layer?: keyof DefaultTheme['colors']['layers']
}

const ProjectCard = ({
  title,
  type,
  skills,
  cardImage,
  layer = 1,
  ...props
}: ProjectCardProps) => {
  const { addModal } = useContext(ModalContext)

  const handleClick = () => {
    addModal({
      content: (
        <ProjectModalContent
          title={title}
          type={type}
          skills={skills}
          cardImage={cardImage}
          {...props}
        />
      ),
      width: 990,
      identifier: 'projectModal'
    })
  }

  return (
    <S.Wrapper layer={layer}>
      <S.ImageWrapper>
        {cardImage.data && (
          <Image
            src={getCmsMediaUrl(cardImage.data)}
            alt={cardImage.data?.attributes.alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
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
      <Button onClick={handleClick}>Saiba Mais</Button>
    </S.Wrapper>
  )
}

export default ProjectCard
