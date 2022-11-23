import * as S from './styles'
import ProjectDto from 'services/cms/types/ProjectDto'
import { getCmsMediaUrl } from 'services/cms/utils'
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
import Skill from '../Skill'

export type ProjectModalContentProps = ProjectDto

const ProjectModalContent = ({
  title,
  type,
  content,
  skills,
  images
}: ProjectDto) => {
  return (
    <S.Wrapper>
      {images?.data && (
        <S.ImageWrapper>
          <Image
            src={getCmsMediaUrl(images.data[0])}
            alt={images.data[0].attributes.alt}
            layout="responsive"
            height={'100%'}
            width={'100%'}
            objectFit="contain"
            objectPosition="center"
          />
        </S.ImageWrapper>
      )}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Type>{type}</S.Type>
        <S.Skills>
          {skills?.data?.map(skill => (
            <li key={skill.id}>
              <Skill
                {...skill.attributes}
                enableHoverEffect={false}
                smallSize
              />
            </li>
          ))}
        </S.Skills>
        <S.Text>
          <Markdown>{content}</Markdown>
        </S.Text>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProjectModalContent
