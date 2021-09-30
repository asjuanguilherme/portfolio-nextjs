import React from 'react'

import * as S from './styles'

//Layout
import Head from '../../Layout/Head/Head'
import Container from '../../Layout/Container/Container'
import Section from '../../Layout/Section/Section'
import Page from '../../Layout/Page/Page'
import Text from '../../Layout/Text/Text'

//Partials
import ProjectsGrid from '../../Components/Projects/ProjectsGrid/ProjectsGrid'

const Portfolio = () => {

   const [options, setOptions] = React.useState(null)

   const renderOptions = () => {
      if( options ) {
         const optionsList = options.map( ({ name, slug, active }) => (
            <S.ListOption key={ slug } slug={ slug } active={ active } >
               { name }
            </S.ListOption>
         ))
   
         return optionsList
      }
   }

   return (
      <>
      <Head title="Portfólio" />

      <Page title="Portfólio"
         description="Aqui você encontrará projetos publicados em que participei em sua construção além de projetos de estudo."
      >
         <Section title="Projetos Publicados">
            {/* <ListContainer>
               <ProjectListController>
                  { renderOptions() }
               </ProjectListController>
            </ListContainer> */}
            <Container>
               <ProjectsGrid /> 
            </Container>
         </Section>
      </Page>
      </>
   )
}

export default Portfolio
