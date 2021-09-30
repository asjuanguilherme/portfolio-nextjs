import React from 'react'

import * as S from './styles'

import { Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'

import Section from '../../../Layout/Section/Section'

import ProjectCard from '../Card/Card'

const LastProjects = ({ limit, preloaderLimit }) => {

   const preloaderData = (preloaderLimit) => {
      const data = []

      for( let i = 0; i < preloaderLimit; i++ ) {
         data.push({ preloader: true })
      }

      return data
   }

   const [projectsFetch, setProjectsFetch] = React.useState({
      data: preloaderData(preloaderLimit),
      loading: true,
      error: null,
   })
   
   const setProjectsFetchLoading = ( loadingStatus ) => {  
      setProjectsFetch( previousState => ({
         ...previousState,
         loading: loadingStatus
      }))
   }

   const setProjectsFetchData = ( data ) => {
      setProjectsFetch( previousState => ({
         ...previousState,
         data: data
      }))
   }
   
   const setProjectsFetchError = ( errorMessage ) => {
      setProjectsFetch( previousState => ({
         ...previousState,
         error: errorMessage
      }))
   }
   
   React.useEffect(
      () => {
         fetch('https://diana-teste.000webhostapp.com/cms/wp-json/api/projects')
            .then( response => response.json() )
            .then( response => response.filter( a => a.active === true ) )
            .then( data => setProjectsFetchData(data))
            .catch( () => setProjectsFetchError('Houve um erro ao carregar...') )
            .finally( () => setProjectsFetchLoading(false) )
   }, [])

   const renderSwiperSlides = () => {
      return projectsFetch.data.map( ({ id, name, thumb, slug, description, preloader }) => (
         <SwiperSlide key={ id }>
            <ProjectCard
               id={ id }
               name={ name }
               slug={ slug }
               img={ thumb }
               description={ description }
               preloader={ preloader }
            />
         </SwiperSlide>
         )
      )
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
         <S.Wrapper>
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
               { renderSwiperSlides() }
            </Swiper>
         </S.Wrapper>
      </Section>
   )
}

export default LastProjects
