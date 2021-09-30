import styled, { keyframes } from 'styled-components'

import { NavLink } from 'react-router-dom'

export const HoverCard = styled.div`
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

export const Card = styled.div`
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

export const PreloaderCardAnimation = keyframes`
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

export const PreloaderCard = styled.div`
   padding-top: 75%;
   border-radius: 1em;
   overflow: hidden;
   background-color: #000;
   animation: ${ PreloaderCardAnimation } infinite 2s;
`

export const Img = styled.div`
   position: absolute;
   left: 0;
   top: 0;

   height: 100%;
   width: 100%;

   border-radius: 1em;

   background-image: url(${({imgSrc}) => imgSrc});
   background-size: cover;
   background-position: center;
   background-color: ${ props => props.theme.colors.empty };
   z-index: -1;
`

export const HoverCardHeader = styled.div`
   padding: 0 1.5rem;
   padding-top: 1rem;
   padding-bottom: .5rem;

   position: relative;
   flex-shrink: 0;

   &::after {
      content: '';
      width: calc(100% - 3em);
      height: .05em;
      border-radius: .1em;
      background-color: white;

      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
   }
`

export const HoverCardText = styled.div`
   flex: 1;
   overflow-y: auto;

   padding: 0 1.5rem;
   padding-top: 1rem;

   font-size: 1em;
   line-height: 1.4em;
   font-weight: 400;
`

export const Title = styled.h1`
   margin: 0;
   padding: 0;
   font-size: 1.2em;
`

export const NavLinkContainer = styled.div`
   padding: .8em;
`

export const Button = styled(NavLink)`
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

export const ButtonLabel = styled.span`
`