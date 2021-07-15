import React from 'react'

import Skill from './Skill'

import skillsData from '../../Data/skillsData'

const SkillList = ({ skillsList }) => {

   const filteredList = skillsList.length === 0 ? skillsData : []

   skillsData.forEach( a => {
      skillsList.forEach( b => {
         if( a.slug === b )
            filteredList.push( a )
         }
      )
   })

   const renderedSkills = () =>  filteredList.map(({name, color, icon, sizeMultiplier}) => (
      <Skill
         key={name}
         name={name}
         color={color}
         icon={icon}
         sizeMultiplier={sizeMultiplier}
      />)
   )

   return renderedSkills()
}


export default SkillList
