import React from 'react'

import * as S from './styles'

const SmartLink = ({ href, target, label, icon }) => {
   return (
      <S.LinkWrapper href={ href } target={ target }>
         { icon &&
            <S.Icon> { icon } </S.Icon>
         }

         { label &&
            <S.Label> { label } </S.Label>
         }
      </S.LinkWrapper>
   )
}

export default SmartLink
