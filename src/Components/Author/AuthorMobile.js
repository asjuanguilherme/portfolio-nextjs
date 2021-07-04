import React from 'react'
import Styled from 'styled-components'

import AuthorPhoto from './AuthorPhoto'
import AuthorInformations from './AuthorInformations'
import AuthorMinified from './AuthorMinified'
import AuthorLinks from './AuthorLinks'

const AuthorContainer = Styled.div`
   padding: 0 1.5rem;
   margin: 2rem 0;

   *{
      color: white !important;
   }
`
const PhotoContainer = Styled.div`
   width: 100%;
   max-width: 50%;
   margin: auto;

   @media screen and (max-height: 520px) {
      display: none;
   }
`
const InformationsContainer = Styled.div`
   margin-top: 1rem;
   text-align: center;

   @media screen and (max-height: 520px) {
      display: none;
   }
`
const LinksContainer = Styled.div`
   margin-top: 1.5rem;
`

const LandscapeInformation = Styled.div`
   display: none;
   
   @media screen and (max-height: 520px) {
      display: flex;
      div {
         justify-content: center;
      }
   }
`

const Author = () => {
   return (
      <AuthorContainer>
         <PhotoContainer>
            <AuthorPhoto />
         </PhotoContainer>

         <InformationsContainer>
            <AuthorInformations />
         </InformationsContainer>

         <LandscapeInformation>
            <AuthorMinified/>
         </LandscapeInformation>

         <LinksContainer>
            <AuthorLinks />
         </LinksContainer>
      </AuthorContainer> 
   )
}

export default Author
