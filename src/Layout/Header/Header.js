import React from 'react'

import * as S from './styles'

import AuthorMinified from '../../Components/Author/AuthorMinified/AuthorMinified'
import MenuToggle from '../../Components/Menu/MenuToggle/MenuToggle'

const Header = () => {
   return (
      <S.Header>
         <AuthorMinified />
         <MenuToggle />
      </S.Header>
   )
}

export default Header
