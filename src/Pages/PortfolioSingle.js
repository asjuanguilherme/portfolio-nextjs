import React from 'react'
import Styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Thumbs, Keyboard, Navigation, EffectFade } from 'swiper'
import 'swiper/swiper-bundle.css'
import "swiper/components/effect-fade/effect-fade.min.css"

import SkillList from '../Components/Skill/SkillList'
import Container from '../Layout/Container'

import Page from '../Layout/Page'
import Section from '../Layout/Section/Section'
import Text from '../Layout/Text'


SwiperCore.use([Keyboard, Navigation, Thumbs, EffectFade])

const RequiredSkills = Styled.div`
   max-width: 600px;
   display: grid;
   row-gap: 1em;
   column-gap: 3em;
   grid-template-columns: 1fr 1fr;

   @media screen and (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
   }
`

const SlideImg = Styled.div`
   width: 100%;
   padding-bottom: 60%;
   background-color: #ccc;
   border-radius: .8em;
   background-image: url(${({imgUrl}) => imgUrl });
   background-size: cover;
   background-position: center;
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

const Home = () => {

   const slidesList = [
      'https://s2.glbimg.com/PWzElwICb5ItVqUPSQmj6bxMkSY=/620x455/e.glbimg.com/og/ed/f/original/2014/07/29/caverna-melissani-kefalonia-grecia.jpg',
      'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/cachoeira-de-seljalandsfoss-na-islandia.jpeg?quality=70&strip=info&w=926',
      'https://estounaviagem.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/05/Fotos-de-Paisagem-Lindas-Saint-Kilda.jpg.webp',
      'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp',
      'https://static.vecteezy.com/ti/fotos-gratis/p1/1271888-montanha-paisagem-na-austria-gr%C3%A1tis-foto.jpg',
      'https://www.ocasaldafoto.com/wp-content/uploads/2018/09/Foto-de-Paisagem-Lago-da-Pampulha-Belo-Horizonte-Charles-Torres.jpg',
      'https://img.elo7.com.br/product/zoom/1C340F5/quadro-tela-paisagens-natureza-praia-coqueiro-mar-areia-004-quadro-tela.jpg',
      'https://www.queroviajarmais.com/wp-content/uploads/2020/08/lago-louise.jpg',
      'https://linktoleaders.com/wp-content/uploads/2019/09/maxresdefault.jpg',
      'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-el-calafate-capa2019-01-820x430.jpg',
   ]

   const listSlides = amount => {
      const renderedList = slidesList.map( a => (
            <SwiperSlide>
               <SlideImg imgUrl={a} />
            </SwiperSlide>
            )
      )
      
      return renderedList
   }

   const [thumbsSwiper, setThumbsSwiper] = React.useState(null)

   return (
      <Page
         title="{ Nome do Projeto }"
         returnTo={'/'}
      >
      <Section
         subTitle="Descrição"
      >
         <Container>
            <Text>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere reprehenderit ut consequatur, dolorum necessitatibus doloremque minima expedita ipsum nostrum eaque, sit iure veniam asperiores, ad quod voluptatum ratione accusantium?
            </Text>
         </Container>
      </Section>
      
      {/* <Section
         subTitle="Tecnologias Envolvidas"
      >
         <Container>
            <RequiredSkills>
               <SkillList />
            </RequiredSkills>
         </Container>
      </Section> */}

      <Section>
         <Container>
            <Swiper
               thumbs={{ swiper: thumbsSwiper}}
               keyboard={{
               enabled: true
               }}
               effect={"fade"}
            >
            { listSlides(10) }
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
            { listSlides(10) }
            </Swiper>
         </ThumbsContainer>
      </Section>
      </Page>
   )
}

export default Home
