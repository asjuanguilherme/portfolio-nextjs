import React from 'react'
import Styled from 'styled-components'

import Section from '../../../Layout/Section/Section'
import Container from '../../../Layout/Container/Container'
import Text from '../../../Layout/Text/Text'

import SkillList from '../../../Components/Skill/SkillList'
import authorSkills from '../../../Data/authorSkills'

const SkillsGrid = Styled.div`
   /* max-width: 600px; */
   display: grid;
   row-gap: 1em;
   column-gap: 3em;
   margin-top: 2em;
   grid-template-columns: 1fr 1fr;

   @media screen and (min-width: 990px) {
      grid-template-columns: 1fr 1fr 1fr;
   }

   @media screen and (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
   }
`


const MySkills = () => {
   return (
      <Section
         title="Minhas Habilidades"
      >
         <Container>
            <Text>
               Tenho um solido conhecimento nas principais tecnologias de desenvolvimento front, como HTML, CSS e Javascript. Tendo mais afinidade com o Javascript, considero minhas principais ferramentas de trabalho frameworks javascript voltados para front-end, tais como React.js e Next.js. Abaixo as ferramentas que tenho experiência de trabalho e habilidades adquiridas.
            </Text>
         </Container>
         <Container>
            <SkillsGrid>
               <SkillList skillsList={ authorSkills } scaleEffect={ true }/>
            </SkillsGrid>
         </Container>
      </Section>
   )
}

export default MySkills
