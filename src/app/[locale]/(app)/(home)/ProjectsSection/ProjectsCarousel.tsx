'use client'

import ProjectCard from '@/components/shared/ProjectCard'
import { projects } from '@/data/projects'
import { breakpoints, spacing } from '@/styles/theme.config'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'
import { css } from '@styled-system/css'
import { useRef, useState } from 'react'

export const ProjectsCarousel = () => {
  const paginationRef = useRef<HTMLDivElement>(null)
  const [, setSwiper] = useState<SwiperClass>()

  return (
    <Swiper
      onSwiper={setSwiper}
      modules={[Pagination, Navigation, Mousewheel]}
      mousewheel={{ enabled: true }}
      pagination={{ enabled: true, clickable: true, el: paginationRef.current }}
      breakpoints={{
        [breakpoints.xs]: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: spacing.md,
          centeredSlides: true
        },
        [breakpoints.sm]: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: spacing.md,
          centeredSlides: false
        },
        [breakpoints.xl]: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: spacing.md,
          centeredSlides: false
        }
      }}
    >
      {projects.map(projectData => (
        <SwiperSlide key={projectData.id}>
          <ProjectCard data={projectData} />
        </SwiperSlide>
      ))}

      <div
        ref={paginationRef}
        className={css({
          display: 'flex',
          justifyContent: 'center',
          py: '2xl'
        })}
      ></div>
    </Swiper>
  )
}

export default ProjectsCarousel
