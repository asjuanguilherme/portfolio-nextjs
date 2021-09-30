import styled from 'styled-components'

export const Section = styled.section`
   width: 100%;
   padding-top: 2em;

   @media screen and (max-width: 900px) {
      font-size: 0.9rem;
      padding-top: 1em;
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
   align-items: center;
   justify-content: space-between;
   padding: 0 2.5em;
   padding-bottom: 1em;
   max-width: 1200px;

   @media screen and (max-width: 768px) {
      padding: 2em 2em;
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
   font-weight: 500;
   color: ${ props => props.theme.colors.primary };
   opacity: .75;
`

export const ButtonHeader = styled.a`
   @media screen and (max-width: 1200px) {
      display: none;
   }
`

export const Content = styled.div`
`

export const Footer = styled.div`
   max-width: 1200px;

   @media screen and (max-width: 768px) {
      padding: 2em 2em;
   }
`

export const ButtonFooter = styled.a`
   display: none;

   @media screen and (max-width: 1200px) {
      display: flex;
      justify-content: center;
      padding: 1.8em;
   }
`