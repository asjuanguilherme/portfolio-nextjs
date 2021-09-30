import React from 'react'

import * as S from './styles'

const Skill = ({ name, color, icon, sizeMultiplier, scaleEffect }) => {
   return (
      <S.Wrapper color={ color } sizeMultiplier={ sizeMultiplier } scaleEffect={ scaleEffect }>
         { icon }
         <S.Label>
            { name }
         </S.Label>
      </S.Wrapper>
   )
}

export default Skill
