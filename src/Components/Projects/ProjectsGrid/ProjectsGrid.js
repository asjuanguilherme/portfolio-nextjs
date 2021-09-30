import React from 'react'

import * as S from './styles'

import ProjectsCardsList from '../ProjectsCardsList'


const ProjectsGrid = () => {

   return (
      <S.ProjectsGrid>
         <ProjectsCardsList preloaderLimit={ 9 } />
      </S.ProjectsGrid>
   )
}

export default ProjectsGrid