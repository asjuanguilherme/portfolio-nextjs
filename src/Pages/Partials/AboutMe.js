import React from 'react'

import Section from '../../Layout/Section/Section'
import Container from '../../Layout/Container/Container'
import Text from '../../Layout/Text/Text'

const AboutMe = () => {
   return (
      <Section title="Sobre mim" level="1">
         <Container>
            <Text>
               Me chamo Juan Guilherme, sou natural de Natal/RN e sou um desenvolvedor web front-end. Apaixonado por tecnologias da web, principalmente javascript. Mantenho meus estudos na área e sigo em constante aprendizado.<br/><br/>
               Sou altamente curioso e motivado a conhecer cada vez mais sobre novas tecnologias e ferramentas do universo da web.<br/><br/>
            </Text>
         </Container>
      </Section>
   )
}

export default AboutMe
