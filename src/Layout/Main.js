import React from 'react'
import Styled from 'styled-components'

const MainStyled = Styled.main `
   max-width: calc(100% - 360px);
   width: 100%;
   margin-left: auto;
   padding-top: 2em;

   @media screen and (max-width: 750px) {
      max-width: 100%;
      margin-left: initial;
      padding: 0;
      padding-top: 5em;
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
