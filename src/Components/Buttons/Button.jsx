import React from 'react'

import * as S from './styles'

const Button = ({ label, href, target, prefix, sufix, ...props }) => {
   return (
      <S.Button  prefix={ prefix } sufix={ sufix } href={ href } { ...props }>
         { prefix &&
            prefix
         }

         { label }
         
         { sufix &&
            sufix
         }

         { href &&
            <S.LinkButton href={ href } target={ target } />
         }
      </S.Button>
   )
}

export default Button
