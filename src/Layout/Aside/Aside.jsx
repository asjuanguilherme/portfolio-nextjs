import React from 'react'

import * as S from './styles'

import Author from '../../Components/Author/Author'
import Nav from '../../Components/Nav/Nav'

import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle'

const Aside = () => {

   return (
      <S.Aside>

         <S.ThemeToggleWrapper>
            <ThemeToggle noLabel={true} aside={true} />
         </S.ThemeToggleWrapper>

         <Author />
         
         <Nav />

      </S.Aside>
   )
}

export default Aside
