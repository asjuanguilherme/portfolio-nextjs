import React from 'react'
import Styled from 'styled-components'

const SkillLabel = Styled.div`
   display: flex;
   width: max-content;
   height: 40px;
   align-items: center;
   transition: .3s;
   font-size: 1.2em;
   color: #686868;
   cursor: default;
   &:hover {
      color: ${ props => props.color }
   }

   svg {
      margin-right: 0.4em;
      font-size: calc(1.4em * ${({ sizeMultiplier }) => sizeMultiplier ? sizeMultiplier : 1 });
   }
`

const Name = Styled.div`
   
`

const Skill = ({ name, color, icon, sizeMultiplier }) => {
   return (
      <SkillLabel color={ color } sizeMultiplier={ sizeMultiplier } >
         { icon }
         <Name>
            { name }
         </Name>
      </SkillLabel>
   )
}

export default Skill
