'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { css, cx } from '@styled-system/css'
import { spacing } from '@/styles/theme.config'
import Image from 'next/image'

export type ImagesCarouselProps = {
  data: { key: string; src: string; alt?: string }[]
  className?: string
}

export const ImagesCarousel = ({ data, className }: ImagesCarouselProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
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
          slidesPerView: 1.6
        }
      }}
    >
      {data.map(item => (
        <SwiperSlide key={item.key}>
          <div
            className={css({
              backgroundColor: 'white',
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
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImagesCarousel
