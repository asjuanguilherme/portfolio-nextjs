import * as S from './styles'
import { useContext, useEffect, useRef, useState } from 'react'

// Types
import { GetTestimonialsResult } from 'services/cms/queries/getTestimonials'
import { GetTestimonialsSectionResult } from 'services/cms/queries/getTestimonialsSection'

// Utils
import getNextLayer from 'utils/getNextLayer'

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

export type HomeTestimonialsSectionProps = {
  testimonials: GetTestimonialsResult | null
  data: GetTestimonialsSectionResult | null
}

const HomeTestimonialsSection = ({
  data,
  testimonials
}: HomeTestimonialsSectionProps) => {
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

  if (!testimonials?.data || testimonials?.data?.length < 1) return <></>

  return (
    <S.SectionWrapper layer={layer} ref={sectionRef}>
      <SectionAnchor name="testimonials" />
      <Container>
        <SectionHeading>{data?.data?.attributes.title}</SectionHeading>
        <S.TestimonialsCarouselWrapper>
          <Swiper
            onSwiper={setSwiper}
            modules={[PaginationModule, Autoplay]}
            loop={testimonials.data.length > 2}
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
