import React from 'react'
import Styled from 'styled-components'

import AuthorMinified from '../Components/Author/AuthorMinified'
import MenuButton from '../Components/Menu/MenuButton'

const HeaderStyled = Styled.header`
   @media screen and (max-width: 750px) {
      width: 100vw;
      height: 75px;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 100;
      border-radius: 0 0 18px 18px;
      box-shadow: 5px 0 26px rgb(0 0 0 / 10%);
      background-color: white;

      display: flex;
      align-items: center;
      user-select: none;
      touch-action: pan-y;
   }
`

const Header = () => {
   return (
      <HeaderStyled>
         <AuthorMinified />
         <MenuButton />
      </HeaderStyled>
   )
}

export default Header
