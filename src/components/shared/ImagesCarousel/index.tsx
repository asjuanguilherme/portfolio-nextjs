'use client'

import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { css, cx } from '@styled-system/css'
import { spacing } from '@/styles/theme.config'
import Image from 'next/image'
import { useRef, useState } from 'react'

export type ImagesCarouselProps = {
  data: { key: string; src: string; alt?: string }[]
  className?: string
}

export const ImagesCarousel = ({ data, className }: ImagesCarouselProps) => {
  const paginationRef = useRef<HTMLDivElement>(null)
  const [, setSwiper] = useState<SwiperClass>()

  return (
    <Swiper
      onSwiper={setSwiper}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ el: paginationRef.current, enabled: true }}
      className={cx(
        className,
        css({
          width: '100%',

          '& .swiper-button-prev': {
            left: '0 !important'
          },
          '& .swiper-button-next': {
            right: '0 !important'
          },
          '& .swiper-button-prev, .swiper-button-next': {
            width: '48px !important',
            height: '48px !important',
            background: 'primary.500',

            _after: {
              fontSize: '1.2rem !important',
              color: 'white'
            }
          }
        })
      )}
      spaceBetween={spacing.md}
      loop
      breakpoints={{
        0: {
          slidesPerView: 1.1,
          centeredSlides: true
        },
        500: {
          centeredSlides: true,
          slidesPerView: 1.4
        },
        768: {
          centeredSlides: true,
          slidesPerView: 1.2
        }
      }}
    >
      {data.map(item => (
        <SwiperSlide key={item.key}>
          <div
            className={css({
              bg: 'gray.100',
              paddingTop: '65%',
              width: '100%',
              position: 'relative'
            })}
          >
            <Image
              alt={item.alt || ''}
              src={item.src}
              width={1000}
              height={1000}
              className={css({
                height: '100%',
                width: '100%',
                position: 'absolute',
                objectFit: 'contain',
                left: 0,
                top: 0
              })}
            ></Image>
          </div>
          <div ref={paginationRef}></div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImagesCarousel
