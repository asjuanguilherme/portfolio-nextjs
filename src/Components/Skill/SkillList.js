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
         color: '#e34c26',
         sizeMultiplier: 1
      },
      {
         name: 'CSS3',
         icon: <SiCss3 />,
         color: '#3A94F6',
         sizeMultiplier: 1
      },
      {
         name: 'Javascript',
         icon: <SiJavascript />,
         color: '#f7df1e',
         sizeMultiplier: 1
      },
      {
         name: 'Typescript',
         icon: <SiTypescript />,
         color: '#007acc',
         sizeMultiplier: 1
      },
      {
         name: 'React.js',
         icon: <SiReact />,
         color: '#61dbfb',
         sizeMultiplier: 1
      },
      {
         name: 'Node.js',
         icon: <SiNodeDotJs />,
         color: '#6CC24A',
         sizeMultiplier: 1
      },
      {
         name: 'Git',
         icon: <SiGit />,
         color: '#f14e32',
         sizeMultiplier: 1
      },
      {
         name: 'Webpack',
         icon: <SiWebpack />,
         color: '#465e69',
         sizeMultiplier: 1
      },
      {
         name: 'Gulp.js',
         icon: <SiGulp />,
         color: '#db4446',
         sizeMultiplier: 1
      },
      {
         name: 'PHP',
         icon: <SiPhp />,
         color: '#474a8a',
         sizeMultiplier: 1
      },
      {
         name: 'UX e UI Design',
         icon: <RiLayout2Fill />,
         color: '#e63271',
         sizeMultiplier: 1
      },
      {
         name: 'SEO',
         icon: <FaSearch />,
         color: '#41a09b',
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
