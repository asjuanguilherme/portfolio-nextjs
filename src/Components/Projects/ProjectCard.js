import React from 'react'
import { NavLink } from 'react-router-dom'
import Styled, { keyframes } from 'styled-components'

import { FaChevronRight } from 'react-icons/fa'

const HoverCard = Styled.div`
   display: flex;
   flex-direction: column;

   color: white;

   position: absolute;
   left: 0;
   top: 0;
   height: 100%;
   width: 100%;
   border-radius: 1em;
   z-index: 1;
   background: ${ props => props.theme.colors.gradientBackground };

   transform: translateX(-105%) scale(0.6) rotateX(25deg);
   transition: .3s ease-in-out;
`

const Card = Styled.div`
   padding-top: 75%;
   position: relative;
   border-radius: 1em;
   overflow: hidden;
   border: 1px solid ${ props => props.theme.colors.empty };

   &:hover {
      ${HoverCard} {
         transform: initial;

         *{
            transform: initial;
            opacity: 1;
         }
      }
   }
`

const PreloaderCardAnimation = keyframes`
   0% {
      opacity: .3;
   }
   50% {
      opacity: .1;
   }
   100% {
      opacity: .3;
   }
`

const PreloaderCard = Styled.div`
   padding-top: 75%;
   border-radius: 1em;
   overflow: hidden;
   background-color: #000;
   animation: ${ PreloaderCardAnimation } infinite 2s;
`

const Img = Styled.div`
   position: absolute;
   left: 0;
   top: 0;
   height: 100%;
   width: 100%;
   background-image: url(${({imgSrc}) => imgSrc});
   background-size: cover;
   background-position: center;
   border-radius: 1em;
   z-index: -1;
   background-color: ${ props => props.theme.colors.empty };
`

const HoverCardHeader = Styled.div`
   padding: 1.5em 2em;
   position: relative;
   flex-shrink: 0;

   &::after {
      content: '';
      width: calc(100% - 4em);
      height: .2em;
      border-radius: .1em;
      background-color: white;

      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
   }
`

const HoverCardText = Styled.div`
   flex: 1;
   padding: 1em 2em;
   font-size: 1em;
   line-height: 1.4em;
   font-weight: 400;
`

const Title = Styled.h1`
   margin: 0;
   padding: 0;
   font-size: 1.3em;
`

const NavLinkContainer = Styled.div`
   padding: .8em;
`

const Button = Styled(NavLink)`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 3em;
   border-radius: .5em;

   background-color: rgba(0,0,0,.10);
   transition: background .3s;
   text-decoration: none;
   
   &, * {
      color: white;
      text-decoration: none;
   }

   svg {
      position: relative;
      left: .3em;
      transition: left .3s;
   }

   &:hover {
      cursor: pointer;
      background-color: rgba(255,255,255,.1);
      svg {
         position: relative;
         left: .6em;
      }
   }

   &:active {
      background-color: rgba(0,0,0,.15);
   }

`

const ButtonLabel = Styled.span`
`

const ProjectCard = ({ name, description, slug, img, preloader = false }) => {

   if( preloader ) return <PreloaderCard/>

   return (
      <Card>
         <HoverCard>
            <HoverCardHeader>
               <Title>{ name }</Title>
            </HoverCardHeader>
            <HoverCardText>
               { description }
            </HoverCardText>
            <NavLinkContainer>
               <Button to={ `portfolio/${slug}` }>
                  <ButtonLabel>Saber mais</ButtonLabel>
                  <FaChevronRight />
               </Button>
            </NavLinkContainer>
         </HoverCard>
         <Img imgSrc={ img } />
      </Card>
   )
}

export default ProjectCard
