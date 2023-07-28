import * as S from './styles'
import { useRef, useState } from 'react'

// Types
import { ProjectData } from 'types/ProjectData'

// Swiper
import { Swiper as SwiperProps } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination as PaginationModule, Navigation } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Components
import { Pagination } from '../Swiper'
import Image from 'next/image'
import Skill from '../Skill'
import Button from '../Button'
import ExternalLinkIcon from '../Icons/ExternalLink'

const ProjectDetailsModal = ({
  title,
  type,
  content,
  skills,
  images,
  liveUrl
}: ProjectData) => {
  const [swiper, setSwiper] = useState<SwiperProps>()
  const paginationRef = useRef(null)

  return (
    <S.Wrapper>
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
          {images.map(image => (
            <SwiperSlide key={image} tag="li">
              <Image
                src={image}
                alt=""
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

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Type>{type}</S.Type>
        {liveUrl && (
          <Button icon={ExternalLinkIcon} href={liveUrl} isExternal>
            Acessar Projeto Publicado
          </Button>
        )}
        <S.Skills>
          {skills.map((skill, index) => (
            <li key={index}>
              <Skill {...skill} enableHoverEffect={false} smallSize />
            </li>
          ))}
        </S.Skills>
        <S.Text>{content}</S.Text>
      </S.Content>
    </S.Wrapper>
  )
}

export default ProjectDetailsModal
