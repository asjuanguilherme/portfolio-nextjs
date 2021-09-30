import React from 'react'

import * as S from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Thumbs, Keyboard, Navigation, EffectFade } from 'swiper'
import 'swiper/swiper-bundle.css'
import "swiper/components/effect-fade/effect-fade.min.css"


import Container from '../../Layout/Container/Container'
import Section from '../../Layout/Section/Section'

SwiperCore.use([Keyboard, Navigation, Thumbs, EffectFade])

const Slider = ({ slidesUrlArray }) => {
   
   const renderSlides = _ => (
      slidesUrlArray.map( imageUrl => (
            <SwiperSlide>
               <S.SlideImg imgUrl={imageUrl} />
            </SwiperSlide>
            )
         )
   )

   const [thumbsSwiper, setThumbsSwiper] = React.useState(null)

   return (
      <Section>
         <Container>
            <Swiper
               thumbs={{ swiper: thumbsSwiper}}
               keyboard={{
               enabled: true
               }}
               effect={"fade"}
            >
            { renderSlides(10) }
            </Swiper>
         </Container>
         <S.ThumbsWrapper>
            <Swiper
               onSwiper={setThumbsSwiper}
               slidesPerView={4}
               slidesOffsetBefore={40}
               spaceBetween={16}
               watchSlidesVisibility={true}
               watchSlidesProgress={true}
               centeredSlides={true}
               centeredSlidesBounds={true}
               slideThumbActiveClass="swiper-slide-thumb-active"

               breakpoints={{
                  1200:{
                     slidesPerView: 6
                  }
               }}
            >
            { renderSlides() }
            </Swiper>
         </S.ThumbsWrapper>
      </Section>
   )
}

export default Slider
