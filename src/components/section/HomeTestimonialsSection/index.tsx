import * as S from './styles'
import { useRef, useState } from 'react'

// Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Pagination as PaginationModule, Autoplay } from 'swiper'
import { Swiper as SwiperProps } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'

// Components
import Container from 'components/shared/Container'
import { SectionHeading, SectionWrapper } from 'components/shared/Section'
import testimonialListMockup from 'mockups/testimonials'
import TestimonialCard from 'components/shared/TestimonialCard'
import { Pagination } from 'components/shared/Swiper'
import { breakpoints } from 'styles/screens'
export type HomeTestimonialsSectionProps = {}

const HomeTestimonialsSection = ({}: HomeTestimonialsSectionProps) => {
  const [swiper, setSwiper] = useState<SwiperProps>()
  const paginationRef = useRef<HTMLDivElement>(null)

  return (
    <S.SectionWrapper>
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
            {testimonialListMockup.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard {...testimonial} />
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
