import React from 'react'
import Styled from 'styled-components'

import AuthorPhoto from './AuthorPhoto'
import AuthorInformations from './AuthorInformations'
import AuthorLinks from './AuthorLinks'

const AuthorContainer = Styled.div`
   padding: 0 1.5rem;
   margin: 3rem 0;
`
const PhotoContainer = Styled.div`
   max-width: 50%;
   width: 100%;
   margin: auto;
`
const InformationsContainer = Styled.div`
   margin-top: 1rem;
   text-align: center;
`
const LinksContainer = Styled.div`
   margin-top: 1.5rem;
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

         <LinksContainer>
            <AuthorLinks />
         </LinksContainer>
      </AuthorContainer> 
   )
}

export default Author
