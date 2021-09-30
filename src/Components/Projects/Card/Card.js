import React from 'react'

import * as S from './styles'

import { FaChevronRight } from 'react-icons/fa'

const ProjectCard = ({ name, description, slug, img, preloader = false }) => {

   if( preloader ) return <S.PreloaderCard/>

   return (
      <S.Card>
         <S.HoverCard>

            <S.HoverCardHeader>
               <S.Title>{ name }</S.Title>
            </S.HoverCardHeader>

            <S.HoverCardText>
               { description }
            </S.HoverCardText>

            <S.NavLinkContainer>
               <S.Button to={ `portfolio/${slug}` }>
                  <S.ButtonLabel>Saber mais</S.ButtonLabel>
                  <FaChevronRight />
               </S.Button>
            </S.NavLinkContainer>
            
         </S.HoverCard>
         
         <S.Img imgSrc={ img } />
      
      </S.Card>
   )
}

export default ProjectCard
