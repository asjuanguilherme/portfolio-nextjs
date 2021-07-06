import React from 'react'
import Styled from 'styled-components'

import DefaultImg from './default-image.jpg'

const InformationsContainer = Styled.div`
   position: absolute;
   left: 0;
   top: 0;
   height: 100%;
   width: 100%;
   border-radius: 1em;
   z-index: 1;
   background: linear-gradient(20deg, rgba(112,112,255,1) 0%, rgba(99,99,255,1) 50%, rgba(104,70,185,1) 100%);

   transform: translateX(-105%) scale(0.6) rotateX(25deg);
   transition: .3s ease-in-out;
`

const Card = Styled.div`
   padding-top: 60%;
   position: relative;
   border-radius: 1em;
   overflow: hidden;

   &:hover {
      ${InformationsContainer} {
         transform: initial;

         *{
            transform: initial;
            opacity: 1;
         }
      }
   }
`
const Img = Styled.div`
   position: absolute;
   left: 0;
   top: 0;
   height: 100%;
   width: 100%;
   background-image: url(${DefaultImg});
   background-size: cover;
   background-position: center;
   border-radius: 1em;
   z-index: -1;
   background-color: red;
`

const InformationsHeader = Styled.div`

`

const Title = Styled.h1``

const ProjectCard = props => {

   return (
      <Card>
         <InformationsContainer>

         </InformationsContainer>
         <Img />
      </Card>
   )
}

export default ProjectCard
