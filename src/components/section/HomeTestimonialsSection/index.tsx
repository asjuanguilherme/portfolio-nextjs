import * as S from './styles'
import { useRef, useState } from 'react'

// Types
import { GetTestimonialsResult } from 'services/cms/queries/getTestimonials'

// Utils
import getNextLayer from 'utils/getNextLayer'
import testimonialListMockup from 'mockups/testimonials'

// Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination as PaginationModule, Autoplay } from 'swiper'
import { Swiper as SwiperProps } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'

// Components
import Container from 'components/shared/Container'
import { SectionHeading } from 'components/shared/Section'
import TestimonialCard from 'components/shared/TestimonialCard'
import { Pagination } from 'components/shared/Swiper'
import SectionAnchor from 'components/shared/SectionAnchor'

export type HomeTestimonialsSectionProps = {
  testimonials: GetTestimonialsResult | null
}

const HomeTestimonialsSection = ({
  testimonials
}: HomeTestimonialsSectionProps) => {
  const [swiper, setSwiper] = useState<SwiperProps>()
  const paginationRef = useRef<HTMLDivElement>(null)
  const layer = 1

  return (
    <S.SectionWrapper layer={layer}>
      <SectionAnchor name="testimonials" />
      <Container>
        <SectionHeading>O que acham do meu trabalho?</SectionHeading>
        <S.TestimonialsCarouselWrapper>
          <Swiper
            onSwiper={setSwiper}
            modules={[PaginationModule, Autoplay]}
            loop={true}
            pagination={{
              enabled: true,
              clickable: true,
              el: paginationRef.current
            }}
            autoplay={{
              delay: 5000
            }}
            centeredSlides={true}
            slidesPerView={1.1}
          >
            {testimonials?.data?.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard
                  {...testimonial.attributes}
                  layer={getNextLayer(layer)}
                />
              </SwiperSlide>
            ))}
            <Pagination ref={paginationRef} />
          </Swiper>
        </S.TestimonialsCarouselWrapper>
      </Container>
    </S.SectionWrapper>
  )
}

export default HomeTestimonialsSection
