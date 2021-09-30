import styled, { keyframes } from 'styled-components'

import { Link } from 'react-router-dom'

export const show = keyframes`
   from {
      opacity: 0;
      transform: translateX(-3em);
   }
   to {
      transform: initial;
      opacity: initial;
   }
`

export const Page = styled.div`
   width: 100%;
   animation: ${show} .5s;
   padding-bottom: 2em;

   @media screen and (max-width: 900px) {
      font-size: 0.9rem;
   }

   @media screen and (max-width: 768px) {
      font-size: 0.8rem;
   }

   @media screen and (max-width: 350px) {
      font-size: 0.7rem;
   }
` 

export const Header = styled.div`
   display: flex;
   padding: 2em 2.5em;
   
   @media screen and (max-width: 768px) {
      padding: 2em 2em;
   }
`

export const ReturnWrapper = styled.div`
`

export const ReturnButton = styled(Link)`
   margin-right: 1.3em;
   flex-shrink: 0;
   width: 2.3em;
   height: 2.3em;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;

   background-color: ${ props => props.theme.colors.primary };
   color: ${ props => props.theme.name === 'dark'? props.theme.colors.background : 'white' };

   svg {
      transition: .3s ease-in-out;
      height: 1.2em;
   }

   &:hover {
      cursor: pointer;

      svg {
         transform: translateX(-3px);
      }
   }
`

export const TitleWrapper = styled.div`
`

export const Title = styled.h1`
   font-size: 2em;
   color: ${ props => props.theme.colors.primary };
   font-weight: bold;
`

export const SubTitle = styled.h2`
   font-size: 1.5em;
   margin-top: .2em;
   font-weight: 400;
   color: ${ props => props.theme.colors.text };
`

export const Description = styled.div`
   padding: 0 2.5em;
   padding-bottom: 3em;
   max-width: 1200px;
   margin-top: -1em;
      
   @media screen and (max-width: 768px) {
      padding: 0 1.8em;
   }
`

export const Content = styled.div`
`