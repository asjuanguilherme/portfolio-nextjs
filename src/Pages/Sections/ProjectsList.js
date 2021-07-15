import React from 'react'

import ProjectCard from '../../Components/Cards/ProjectCard'

//data
import { allProjects } from '../../Data/projects'

const ProjectsList = () => {

   const renderProjects = () => {
      const renderedProjects = allProjects.map( ({ name, tecnologies, url, img, navLink }) => {
         return (
            <ProjectCard
               name={ name }
               tecnologies={ tecnologies }
               url={ url }
               href={ navLink }
               img={ img }
            />
         )
      })
      
      return renderedProjects
   }

   return renderProjects()
}

export default ProjectsList
