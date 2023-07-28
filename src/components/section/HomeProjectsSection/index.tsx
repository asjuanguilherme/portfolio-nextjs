import * as S from './styles'
import { useContext, useEffect, useRef, useState } from 'react'
import useScreenDimensions from 'hooks/useScreenDimensions'

// Swiper
import { Swiper as SwiperProps } from 'swiper/types'
import { Pagination as PaginationModule } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

// Data
import { projectsData } from 'data/projects'

// Contexts
import { NavigationContext } from 'contexts/NavigationContext'

// Components
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import Container from 'components/shared/Container'
import ProjectCard from 'components/shared/ProjectCard'
import { Pagination } from 'components/shared/Swiper'
import SectionAnchor from 'components/shared/SectionAnchor'

const sectionLayer = 0

const HomeProjectsSection = () => {
  const [swiper, setSwiper] = useState<SwiperProps>()
  const paginationRef = useRef<HTMLDivElement | null>(null)
  const { screen, breakpoints } = useScreenDimensions()
  const isTabletUp = screen.width > breakpoints.tabletS
  const { setActiveSection } = useContext(NavigationContext)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    try {
      const intersectionObserver = new IntersectionObserver(
        (entries: any) =>
          entries.some((entry: any) => entry.isIntersecting) &&
          setActiveSection('projects'),
        { threshold: 1 }
      )
      intersectionObserver.observe(sectionRef.current as any)

      return () => intersectionObserver.disconnect()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <SectionWrapper layer={sectionLayer} ref={sectionRef}>
      <SectionAnchor name="projects" />
      <Container>
        <SectionHeading style={{ textAlign: 'center' }}>
          Projetos que Fiz
        </SectionHeading>
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
          {projectsData.map(project => (
            <SwiperSlide key={project.slug} style={{ height: 'auto' }}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
          {isTabletUp && <Pagination ref={paginationRef} />}
        </Swiper>
      </S.ProjectsCarouselContainer>
    </SectionWrapper>
  )
}

export default HomeProjectsSection
