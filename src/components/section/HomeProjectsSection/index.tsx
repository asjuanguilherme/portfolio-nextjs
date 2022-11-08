import * as S from './styles'
import { useRef, useState } from 'react'
import useScreenDimensions from 'hooks/useScreenDimensions'
import { breakpoints } from 'styles/screens'
import projectsListMockup from 'mockups/projects'

// Swiper
import { Swiper as SwiperProps } from 'swiper/types'
import { Pagination as PaginationModule } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

// Components
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import ProjectCard from 'components/shared/ProjectCard'
import { Pagination } from 'components/shared/Swiper'

export type HomeProjectsSectionProps = {}

const HomeProjectsSection = ({}: HomeProjectsSectionProps) => {
  const [swiper, setSwiper] = useState<SwiperProps>()
  const paginationRef = useRef<HTMLDivElement | null>(null)
  const { screen, breakpoints } = useScreenDimensions()
  const isTabletUp = screen.width > breakpoints.tabletS

  return (
    <SectionWrapper id="#projects">
      <Container>
        <SectionHeading>Ultimos Projetos</SectionHeading>
      </Container>
      <S.ProjectsCarouselContainer>
        <Swiper
          onSwiper={setSwiper}
          modules={[PaginationModule]}
          pagination={{
            enabled: true,
            clickable: true,
            el: paginationRef.current
          }}
          slidesOffsetAfter={24}
          slidesOffsetBefore={24}
          spaceBetween={24}
          breakpoints={{
            [breakpoints.mobileS]: {
              slidesPerView: 1.3
            },
            [breakpoints.tabletS]: {
              slidesPerView: 2.3,
              slidesPerGroup: 2
            },
            [breakpoints.laptop]: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              slidesOffsetAfter: 0,
              slidesOffsetBefore: 0
            }
          }}
        >
          {projectsListMockup.map(project => (
            <SwiperSlide key={project.id}>
              <ProjectCard {...project} layer={1} />
            </SwiperSlide>
          ))}
          {isTabletUp && <Pagination ref={paginationRef} />}
        </Swiper>
      </S.ProjectsCarouselContainer>
    </SectionWrapper>
  )
}

export default HomeProjectsSection
