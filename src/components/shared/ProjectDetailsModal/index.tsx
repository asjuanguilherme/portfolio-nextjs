import * as S from './styles'
import { useRef, useState } from 'react'

// Types
import ProjectDto from 'services/cms/types/ProjectDto'

// Utils
import { getCmsMediaUrl } from 'services/cms/utils'

// Swiper
import { Swiper as SwiperProps } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination as PaginationModule, Navigation } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Components
import { Pagination } from '../Swiper'
import Image from 'next/image'
import Markdown from 'markdown-to-jsx'
import Skill from '../Skill'

export type ProjectDetailsModalProps = ProjectDto

const ProjectDetailsModal = ({
  title,
  type,
  content,
  skills,
  images
}: ProjectDto) => {
  const [swiper, setSwiper] = useState<SwiperProps>()
  const paginationRef = useRef(null)

  return (
    <S.Wrapper>
      {images?.data && (
        <S.ImageWrapper>
          <Swiper
            wrapperTag="ul"
            onSwiper={setSwiper}
            modules={[PaginationModule, Navigation]}
            pagination={{
              clickable: true,
              el: paginationRef.current,
              enabled: true
            }}
            navigation
          >
            {images.data.map(image => (
              <SwiperSlide key={image.id} tag="li">
                <Image
                  src={getCmsMediaUrl(image)}
                  alt={image.attributes.alt}
                  layout="responsive"
                  height="100%"
                  width="100%"
                  objectFit="contain"
                  objectPosition="center"
                />
              </SwiperSlide>
            ))}
            <Pagination ref={paginationRef} />
          </Swiper>
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

export default ProjectDetailsModal
