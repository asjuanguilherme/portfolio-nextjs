import React from 'react'
import Styled from 'styled-components'

import Section from '../../Layout/Section/Section'
import Container from '../../Layout/Container'
import Text from '../../Layout/Text'
import SkillList from '../../Components/Skill/SkillList'

const SkillsGrid = Styled.div`
   max-width: 600px;
   display: grid;
   row-gap: 1em;
   column-gap: 3em;
   margin-top: 2em;
   grid-template-columns: 1fr 1fr;

   @media screen and (min-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
   }
`


const MySkills = () => {
   return (
      <Section
         title="Minhas Habilidades"
      >
         <Container>
            <Text>Tenho um sólido conhecimento nas principais tecnologias da web como HTML e CSS e também no ecossistema Javascript.</Text>
         </Container>
         <Container>
            <SkillsGrid>
               <SkillList filter={1} />
            </SkillsGrid>
         </Container>
      </Section>
   )
}

export default MySkills
