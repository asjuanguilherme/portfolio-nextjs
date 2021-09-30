import React from 'react'

import * as S from './styles'
import authorImg from './author.jpg'

const AuthorPhoto = () => {
   return (
      <S.Wrapper>
         <S.PhotoWrapper>
            <S.Photo>
               <S.PhotoImg src={ authorImg } />
            </S.Photo>
         </S.PhotoWrapper>
         <S.Status />
      </S.Wrapper>
   )
}

export default AuthorPhoto
