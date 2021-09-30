import React from 'react'

import * as S from './styles'

const Input = ({ type, value, controller, name, placeholder, width, height, validated, label }) => {
   
   if(type === 'textarea') return (
      <S.Wrapper>
         <S.Label> { label } </S.Label>

         <S.Textarea
            onChange={ controller }
            value={ value }
            placeholder={ placeholder }
            name={ name }
            height={ height }
            width={ width }
         />

      </S.Wrapper>
   )

   return (
      <S.Wrapper>
         <S.Label> { label } </S.Label>
         
         <S.Input
            type={ type }
            onChange={ controller }
            value={ value }
            placeholder={ placeholder }
            name={ name }
            width={ width }
            validated={ validated }
         />
      </S.Wrapper>
   )
}

export default Input
