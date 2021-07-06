import React from 'react'
import Styled from 'styled-components'

const ContainerStyled = Styled.div`
   width: 100%;
   max-width: 1200px;
   padding: 0 2.5em;

   @media screen and (max-width: 768px) {
      padding: 0 1.5em;
   }

   @media screen and (max-width: 750px) {
      margin: 0 auto;
   } 
`

const Container = props => {
   return (
      <ContainerStyled>
         { props.children }
      </ContainerStyled>
   )
}

export default Container
