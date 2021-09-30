import React from 'react'
import Styled from 'styled-components'

//Layout
import Head from '../Layout/Head/Head'
import Container from '../Layout/Container/Container'
import Section from '../Layout/Section/Section'
import Page from '../Layout/Page/Page'

//Sections
import ProjectsGrid from '../Components/Projects/ProjectsGrid'

const ListContainer = Styled.div`
   margin-top: -2em;

   @media screen and (max-width: 768px) {
      width: 100vw;
      overflow: scroll;
      padding-left: 1.8em;
      margin-top: 0;
   }
`

const ProjectListController = Styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 2em;

   max-width: 1200px;

   @media screen and (max-width: 768px) {
      width: max-content;
   }

   @media screen and (min-width: 769px) {
      padding: 0 2.5em;
   }
`

const ListOption = Styled.span`
   padding: .8em 1.8em;
   border-radius: 3em;
   color: #686868;
   background-color: white;
   box-shadow: 0 .2em .4em rgba(0,0,0,.1);
   margin-right: 1em;
   margin-bottom: 1em;

   transition: .3s;
   transition-property: box-shadow;

   &:hover {
      cursor: pointer;
      box-shadow: 0 0 1em rgba(0,0,0,.15);
   }

   ${ props => {
      if( props.active ) return `
         background-color: #6556DF;
         color: white;
      `
   }}

`

const Portfolio = () => {

   const [options, setOptions] = React.useState(null)

   const renderOptions = () => {
      if( options ) {
         const optionsList = options.map( ({ name, slug, active }) => (
            <ListOption key={ slug } slug={ slug } active={ active } >
               { name }
            </ListOption>
         ))
   
         return optionsList
      }
   }

   return (
      <>
      <Head title="Portfólio" />
      <Page
         title="Portfólio"
         description="Projetos realizados por mim ou com participação minha."
      >
      
      <Section>
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
