import * as S from './styles'
import { breakpoints } from 'styles/screens'
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import projectsListMockup from 'mockups/projects'
import ProjectCard from 'components/shared/ProjectCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import designSystemOptions from 'styles/designSystemOptions'

export type HomeProjectsSectionProps = {}

const HomeProjectsSection = ({}: HomeProjectsSectionProps) => {
  return (
    <SectionWrapper id="#projects">
      <Container>
        <SectionHeading>Ultimos Projetos</SectionHeading>
      </Container>
      <S.ProjectsCarouselContainer>
        <Swiper
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
        </Swiper>
      </S.ProjectsCarouselContainer>
    </SectionWrapper>
  )
}

export default HomeProjectsSection
