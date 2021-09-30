import React from 'react'
import * as S from './styles'

import { FaExclamationCircle } from 'react-icons/fa'

const Error = ({ children, type }) => {
   return (
      <S.Wrapper>
         <S.TitleWrapper>
            <S.Title>
               ERRO 404
            </S.Title>

            <FaExclamationCircle />
         </S.TitleWrapper>

         <S.Description>Opa! O conteúdo que você está procurando não existe...</S.Description>
      </S.Wrapper>
   )
}

export default Error
