import React from 'react'
import Styled from 'styled-components'

const AuthorInformationsContainer = Styled.div`
   width: 100%;
   text-align: inherit;
`

const AuthorName = Styled.h1`
   font-size: 1.5em;
   font-weight: 400;
   color: ${ props => props.theme.colors.primary };
`
const AuthorRole = Styled.h2`
   font-size: 1.2em;
   font-weight: 300;
   color: #919191;
   color: ${ props => props.theme.colors.secondary };
`

const AuthorInformations = () => {
   return (
      <AuthorInformationsContainer>
         <AuthorName>
            Juan Guilherme
         </AuthorName>
         <AuthorRole>
            Desenvolvedor Front-End
         </AuthorRole>
      </AuthorInformationsContainer>
   )
}

export default AuthorInformations
