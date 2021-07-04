import React from 'react'
import Styled from 'styled-components'

const MainStyled = Styled.main `
   max-width: calc(100vw - 360px);
   width: 100%;
   margin-left: auto;
   background-color: blue;

   @media screen and (max-width: 750px) {
      max-width: 100%;
      margin-left: initial;
      padding-top: 75px;
   }
`

const Main = props => {
   return (
      <MainStyled>
         { props.children }
      </MainStyled>
   )
}

export default Main
