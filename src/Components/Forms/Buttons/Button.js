import React from 'react'

import * as S from './styles'

const Button = ({ type, label, onClick, width, disabled }) => {
   return (
      <S.Button
         type={ type }
         onClick={ disabled ? false : onClick }
         width={ width }
         disabled={ disabled }
      >
         { label }
      </S.Button>
   )
}

export default Button
