import React from 'react'
import Styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Thumbs, Keyboard, Navigation, EffectFade } from 'swiper'
import 'swiper/swiper-bundle.css'
import "swiper/components/effect-fade/effect-fade.min.css"


import Container from '../../Layout/Container'
import Section from '../../Layout/Section/Section'

SwiperCore.use([Keyboard, Navigation, Thumbs, EffectFade])

const SlideImg = Styled.div`
   width: 100%;
   padding-bottom: 60%;
   background-color: #ccc;
   border-radius: .8em;
   background-image: url(${({imgUrl}) => imgUrl });
   background-size: cover;
   background-position: center;

   border: 1px solid ${ props => props.theme.colors.empty };
`

const ThumbsContainer = Styled.div`
   width: 100%;
   margin-top: 1em;

   .swiper-slide {
      border-radius: 1.1em;
      position: relative;
   }

   .swiper-slide-thumb-active {   
      border: 3px solid #6556DF;
   }
`

const Slider = ({ slidesUrlArray }) => {
   
   const renderSlides = _ => (
      slidesUrlArray.map( imageUrl => (
            <SwiperSlide>
               <SlideImg imgUrl={imageUrl} />
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
         <ThumbsContainer>
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
         </ThumbsContainer>
      </Section>
   )
}

export default Slider
