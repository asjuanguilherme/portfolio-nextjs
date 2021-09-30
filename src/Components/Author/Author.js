import React from 'react'
import * as S from './styles'

import AuthorPhoto from './AuthorPhoto/AuthorPhoto'
import AuthorInformations from './AuthorInformations/AuthorInformations'
import AuthorLinks from './AuthorLinks/AuthorLinks'

const Author = () => {
   return (
      <S.AuthorWrapper>

         <S.PhotoWrapper>
            <AuthorPhoto />
         </S.PhotoWrapper>

         <S.InformationsWrapper>
            <AuthorInformations />
         </S.InformationsWrapper>

         <S.LinksWrapper>
            <AuthorLinks />
         </S.LinksWrapper>

      </S.AuthorWrapper> 
   )
}

export default Author
