import React from 'react'
import Styled from 'styled-components'

import AuthorPhoto from './AuthorPhoto'
import AuthorInformations from './AuthorInformations'

const AuthorContainer = Styled.div`
   padding: 0 1.5rem;
   display: flex;
   align-items: center;
   flex: 1;
`
const PhotoContainer = Styled.div`
   max-width: 45px;
   width: 100%;
`
const InformationsContainer = Styled.div`
   font-size: 0.65rem;
   text-align: left;
   margin-left: 1em;
`

const AuthorMinified = () => {
   return (
      <AuthorContainer>
         <PhotoContainer>
            <AuthorPhoto />
         </PhotoContainer>

         <InformationsContainer>
            <AuthorInformations />
         </InformationsContainer>
      </AuthorContainer> 
   )
}

export default AuthorMinified
