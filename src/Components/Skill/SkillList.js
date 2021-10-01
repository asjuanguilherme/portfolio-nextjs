import React from 'react'
import Skill from './Skill'
import skillsData from '../../Data/skillsData'

const SkillList = ({ skillsList = [], scaleEffect = false }) => {

   const filteredList = skillsList.length === 0 ? skillsData : []

   skillsData.forEach( a => {
      skillsList.forEach( b => {
         if( a.slug === b )
            filteredList.push( a )
         }
      )
   })

   const renderedSkills = () =>  filteredList.map(({name, color, icon, iconSize }) => (
      <Skill
         key={name}
         name={name}
         color={color}
         icon={icon}
         iconSize={iconSize}
         scaleEffect={scaleEffect}
      />)
   )

   return renderedSkills()
}


export default SkillList
