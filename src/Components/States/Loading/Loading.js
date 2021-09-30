import React from 'react'
import * as S from './styles'


const Loading = ({label}) => {
   return (
      <S.Wrapper>
         <S.Title>
            { label }
         </S.Title>
         <S.Spinner />
      </S.Wrapper>
   )
}

export default Loading
