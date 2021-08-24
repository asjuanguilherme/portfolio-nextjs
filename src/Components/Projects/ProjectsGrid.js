import React from 'react'
import Styled from 'styled-components'

//CONTENT
import ProjectsCardsList from './ProjectsCardsList'

//UI
import Loading from '../UiElements/Loading'

const StyledProjectsGrid = Styled.div`
   display: grid;
   grid-template-columns: 1fr;
   gap: 2em;
   
   @media screen and (min-width: 1100px) {
      grid-template-columns: 1fr 1fr;
   }

   @media screen and (min-width: 1440px) {
      grid-template-columns: 1fr 1fr 1fr;
   }
`

const ProjectsGrid = () => {

   return (
      <StyledProjectsGrid>
         <ProjectsCardsList preloaderLimit={ 9 } />
      </StyledProjectsGrid>
   )
}

export default ProjectsGrid