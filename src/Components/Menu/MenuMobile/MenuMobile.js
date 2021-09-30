import React from 'react'

import * as S from './styles'

import AuthorMobile from '../../Author/AuthorMobile'
import Nav from '../../Nav/Nav'
import ThemeToggle from '../../ThemeToggle/ThemeToggle'

const MenuMobile = () => {
   return (
      <S.Menu>
         <S.Wrapper>

            <AuthorMobile />
            <Nav />
            
            <S.ThemeToggleWrapper>
               <ThemeToggle/>
            </S.ThemeToggleWrapper>

         </S.Wrapper>
      </S.Menu>
   )
}

export default MenuMobile
