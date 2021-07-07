import React from 'react'
import Styled from 'styled-components'

import { FaChevronRight } from 'react-icons/fa'

import DefaultImg from './default-image.jpg'

const HoverCard = Styled.div`
   display: flex;
   flex-direction: column;

   user-select: none;

   color: white;

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
   padding-top: 75%;
   position: relative;
   border-radius: 1em;
   overflow: hidden;

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
   background-color: #ececec;
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

const Button = Styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 3em;
   border-radius: .5em;

   background-color: rgba(0,0,0,.10);
   transition: background .3s;

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

const ProjectCard = ({ name, description, url, img }) => {

   return (
      <Card>
         <HoverCard>
            <HoverCardHeader>
               <Title>{ name }</Title>
            </HoverCardHeader>
            <HoverCardText>
               { description }
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ex et alias optio consectetur voluptatibus
            </HoverCardText>
            <NavLinkContainer>
               <Button>
                  <ButtonLabel>Acessar Projeto</ButtonLabel>
                  <FaChevronRight>Acessar Projeto</FaChevronRight>
               </Button>
            </NavLinkContainer>
         </HoverCard>
         <Img imgSrc={ img } />
      </Card>
   )
}

export default ProjectCard
