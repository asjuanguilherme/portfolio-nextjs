import React from 'react'
import { SiCss3, SiGit, SiGulp, SiHtml5, SiJavascript, SiNodeDotJs, SiPhp, SiReact, SiTypescript, SiWebpack } from 'react-icons/si'
import { RiLayout2Fill } from 'react-icons/ri'

import Skill from './Skill'
import { FaSearch } from 'react-icons/fa'

const SkillList = filter => {

   const skills = [
      {
         name: 'HTML5',
         icon: <SiHtml5 />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'CSS3',
         icon: <SiCss3 />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'Javascript',
         icon: <SiJavascript />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'Typescript',
         icon: <SiTypescript />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'React.js',
         icon: <SiReact />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'Node.js',
         icon: <SiNodeDotJs />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'Git',
         icon: <SiGit />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'Webpack',
         icon: <SiWebpack />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'Gulp.js',
         icon: <SiGulp />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'PHP',
         icon: <SiPhp />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'UX e UI Design',
         icon: <RiLayout2Fill />,
         color: '#C76855',
         sizeMultiplier: 1
      },
      {
         name: 'SEO',
         icon: <FaSearch />,
         color: '#C76855',
         sizeMultiplier: 1
      },
   ]

   const renderedSkills = () =>  skills.map(({name, color, icon, sizeMultiplier}) => (
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
