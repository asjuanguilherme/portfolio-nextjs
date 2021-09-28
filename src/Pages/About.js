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
            Me chamo Juan Guilherme, sou natural de Natal/RN e sou um desenvolvedor web front-end. Apaixonado por tecnologias da web, principalmente javascript. Mantenho meus estudos na área e sigo em constante aprendizado.<br/><br/>
            Sou altamente curioso e motivado a conhecer cada vez mais sobre novas tecnologias e ferramentas do universo da web.<br/><br/>
         </Text>
      </Container>

      <MySkills/>
      </Page>
      </>
   )
}

export default About
