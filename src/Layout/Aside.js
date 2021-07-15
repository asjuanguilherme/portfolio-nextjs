import React from 'react'
import Styled from 'styled-components'

import Author from '../Components/Author/Author'
import Nav from '../Components/Nav/Nav'

const AsideStyled = Styled.aside`
   user-select: none;
   width: 360px;
   position: fixed;
   left: 0;
   top: 0;
   height: 100vh;
   z-index: 100;
   box-shadow: 5px 0 26px rgb(0 0 0 / 10%);
   border-radius: 0 18px 18px 0;
   background: ${ props => props.theme.colors.asideBackground };

   @media screen and (max-width: 750px) {
      display: none;
   }
`

const Aside = () => {

   return (
      <AsideStyled>
         <Author />
         <Nav />
      </AsideStyled>
   )
}

export default Aside
