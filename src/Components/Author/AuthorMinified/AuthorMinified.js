import React from 'react'
import * as S from './styles'

import AuthorPhoto from '../AuthorPhoto/AuthorPhoto'
import AuthorInformations from '../AuthorInformations/AuthorInformations'

const AuthorMinified = () => {
   return (
      <S.Wrapper>

         <S.PhotoWrapper>
            <AuthorPhoto />
         </S.PhotoWrapper>

         <S.InformationsWrapper>
            <AuthorInformations />
         </S.InformationsWrapper>

      </S.Wrapper> 
   )
}

export default AuthorMinified
