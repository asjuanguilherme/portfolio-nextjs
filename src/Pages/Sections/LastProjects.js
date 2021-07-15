import React from 'react'
import Styled from 'styled-components'
import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'

import ProjectCard from '../../Components/Cards/ProjectCard'
import Section from '../../Layout/Section/Section'

//data
import { lastProjects } from '../../Data/projects'

const Container = Styled.div`
   @media screen and (min-width: 1200px) {
      max-width: 1200px;
      padding: 0 2.5em;
   }
`

const LastProjects = () => {

   const renderProjects = () => {

      const renderedProjects = lastProjects.map( ({ name, tecnologies, url, img, navLink }) => {
         return (
            <SwiperSlide>
               <ProjectCard
                  name={ name }
                  tecnologies={ tecnologies }
                  url={ url }
                  href={ navLink }
                  img={ img }
               />
            </SwiperSlide>
         )
      })
      
      return renderedProjects
   }

   return (
      <Section
         title="Últimos Projetos"
         button={{
            link: '/portfolio',
            label: 'Todos os projetos',
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
            { renderProjects() }
            </Swiper>
         </Container>
      </Section>
   )
}

export default LastProjects
