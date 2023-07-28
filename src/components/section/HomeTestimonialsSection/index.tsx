import * as S from './styles'
import { useContext, useEffect, useRef, useState } from 'react'

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
import { NavigationContext } from 'contexts/NavigationContext'
import { testimonialsData } from 'data/testimonials'

export type HomeTestimonialsSectionProps = {}

const HomeTestimonialsSection = ({}: HomeTestimonialsSectionProps) => {
  const { setActiveSection } = useContext(NavigationContext)
  const sectionRef = useRef<HTMLElement | null>(null)
  const [swiper, setSwiper] = useState<SwiperProps>()
  const paginationRef = useRef<HTMLDivElement>(null)
  const layer = 0

  useEffect(() => {
    try {
      const intersectionObserver = new IntersectionObserver(
        (entries: any) =>
          entries.some((entry: any) => entry.isIntersecting) &&
          setActiveSection('testimonials'),
        { threshold: 1 }
      )
      intersectionObserver.observe(sectionRef.current as any)

      return () => intersectionObserver.disconnect()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <S.SectionWrapper layer={layer} ref={sectionRef}>
      <SectionAnchor name="testimonials" />
      <Container>
        <SectionHeading>O que acham do meu trabalho</SectionHeading>
        <S.TestimonialsCarouselWrapper>
          <Swiper
            onSwiper={setSwiper}
            modules={[PaginationModule, Autoplay]}
            loop={testimonialsData.length > 2}
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
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
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
