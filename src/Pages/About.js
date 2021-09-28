import React from 'react'

import Head from '../Layout/Head'
import Page from '../Layout/Page'

import MySkills from '../Components/Skill/MySkills'
import Container from '../Layout/Container'
import Text from '../Layout/Text'

const About = () => {
   return (
      <>
      <Head title="Sobre" />
      <Page
         title="Sobre mim"
      >
      <Container>
         <Text>
            Me chamo Juan Guilherme, sou natural de Natal/RN e sou um desenvolvedor web front-end. Atualmente curso bacharelado em tecnologia da informação e pretendo seguir carreira como Engenheiro de Software. <br/><br/>
            Sou altamente curioso e motivado a conhecer cada vez mais sobre novas técnicas e tecnologias, além também de me preocupar com experiência e interface do usuário.<br/><br/><br/>
         </Text>
      </Container>

      <MySkills/>
      </Page>
      </>
   )
}

export default About
