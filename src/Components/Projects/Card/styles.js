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
   background-image: url(${({imgSrc}) => imgSrc});
   background-size: cover;
   background-position: center;
   border-radius: 1em;
   z-index: -1;
   background-color: ${ props => props.theme.colors.empty };
`

export const HoverCardHeader = styled.div`
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

export const HoverCardText = styled.div`
   flex: 1;
   padding: 1em 2em;
   font-size: 1em;
   line-height: 1.4em;
   font-weight: 400;
`

export const Title = styled.h1`
   margin: 0;
   padding: 0;
   font-size: 1.3em;
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