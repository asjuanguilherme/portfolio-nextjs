import React from 'react'

import * as S from './styles'

const Skill = ({ name, color, icon, iconSize, scaleEffect }) => {
   return (
      <S.Wrapper color={ color } iconSize={ iconSize } scaleEffect={ scaleEffect }>
         { icon }
         <S.Label>
            { name }
         </S.Label>
      </S.Wrapper>
   )
}

export default Skill
