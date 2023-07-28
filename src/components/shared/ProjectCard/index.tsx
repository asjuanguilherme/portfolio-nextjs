import * as S from './styles'
import { useContext } from 'react'

// Types
import { ProjectData } from 'types/ProjectData'

// Contexts
import { ModalContext } from 'contexts/ModalContext'

// Components
import Image from 'next/image'
import Button from 'components/shared/Button'
import ProjectDetailsModal from '../ProjectDetailsModal'

export type ProjectCardProps = ProjectData

const ProjectCard = (props: ProjectCardProps) => {
  const { addModal } = useContext(ModalContext)

  const handleClick = () => {
    addModal({
      content: <ProjectDetailsModal {...props} />,
      width: 990,
      identifier: 'projectModal'
    })
  }

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image
          src={props.cardImage}
          alt={props.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </S.ImageWrapper>
      <S.Informations>
        <S.Category>{props.type}</S.Category>
        <S.Title>{props.title}</S.Title>
        <S.Tags>
          {props.skills.map((skill, index) => (
            <S.TagItem key={index}>{skill.title}</S.TagItem>
          ))}
        </S.Tags>
      </S.Informations>
      <Button onClick={handleClick}>Saiba Mais</Button>
    </S.Wrapper>
  )
}

export default ProjectCard
