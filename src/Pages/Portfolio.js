import React from 'react'
import Styled from 'styled-components'

//Layout
import Container from '../Layout/Container'
import Section from '../Layout/Section/Section'
import Page from '../Layout/Page'
import ProjectsList from './Sections/ProjectsList'

const ProjectsGrid = Styled.div`
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

const Portfolio = () => {
   return (
      <Page
         title="Portfólio"
         description="Projetos realizados por mim ou com participação minha."
      >
      <Section>
         <Container>
            <ProjectsGrid>
               <ProjectsList />
            </ProjectsGrid>     
         </Container>
      </Section>
      </Page>
   )
}

export default Portfolio
