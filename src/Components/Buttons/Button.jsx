import React from 'react'

import * as S from './styles'

const Button = ({ label, href, target, ...props }) => {
   return (
      <S.Button { ...props } >
         { label }
         
         { href &&
            <S.LinkButton href={ href } target={ target } />
         }
      </S.Button>
   )
}

export default Button
