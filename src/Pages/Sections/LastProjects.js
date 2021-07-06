import React from 'react'
import Styled from 'styled-components'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'

import ProjectCard from '../../Components/Cards/ProjectCard'
import Section from '../../Layout/Section/Section'

const Container = Styled.div`
   @media screen and (min-width: 1200px) {
      max-width: 1200px;
         padding: 0 2.5em;
   }
`

const LastProjects = () => {
   return (
      <Section
         title="Últimos Projetos"
         button={{
            link: 'https://www.google.com.br',
            label: 'Todos os projetos',
            blank: true,
            icon: true
         }}
      >
         <Container>
            <Swiper
               spaceBetween={24}
               slidesPerView={1.5}
               slidesOffsetBefore={22}
               slidesOffsetAfter={22}
               breakpoints={{
                  480: {
                     slidesPerView: 2.5,
                     slidesOffsetBefore: 24,
                     slidesOffsetAfter: 24,
                  },
                  750: {
                     slidesPerView: 1.5
                  },
                  768:{
                     slidesOffsetBefore: 42,
                     slidesOffsetAfter: 42,
                  },
                  900: {
                     slidesPerView: 2.5,
                     slidesOffsetBefore: 42,
                     slidesOffsetAfter: 42,
                     allowTouchMove: true,
                  },
                  1200: {
                     slidesPerView: 3,
                     slidesOffsetBefore: 0,
                     slidesOffsetAfter: 0,
                     allowTouchMove: false,
                  },
               }}
            >
               <SwiperSlide>
                  <ProjectCard/>
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectCard/>
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectCard/>
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectCard/>
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectCard/>
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectCard/>
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectCard/>
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectCard/>
               </SwiperSlide>
            </Swiper>
         </Container>
      </Section>
   )
}

export default LastProjects
