import React from 'react'
import * as S from './styles'

import AuthorPhoto from '../AuthorPhoto/AuthorPhoto'
import AuthorInformations from './AuthorInformations'
import AuthorMinified from '../AuthorMinified/AuthorMinified'
import AuthorLinks from './AuthorLinks'

const Author = () => {
   return (
      <S.Wrapper>
         <S.PhotoWrapper>
            <AuthorPhoto />
         </S.PhotoWrapper>

         <S.InformationsWrapper>
            <AuthorInformations />
         </S.InformationsWrapper>

         <S.LandscapeInformation>
            <AuthorMinified/>
         </S.LandscapeInformation>

         <S.Links>
            <AuthorLinks />
         </S.Links>
      </S.Wrapper> 
   )
}

export default Author
