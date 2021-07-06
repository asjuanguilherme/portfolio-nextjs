import React from 'react'
import Styled from 'styled-components'

import SectionButton from './SectionButton'

const Section = Styled.section`
   width: 100%;
   padding: 1em 0;
   padding-bottom: 2em;

   @media screen and (max-width: 900px) {
      font-size: 0.9rem;
      padding-bottom: 1em;
   }

   @media screen and (max-width: 768px) {
      font-size: 0.8rem;
   }

   @media screen and (max-width: 350px) {
      font-size: 0.7rem;
   }
` 
const SectionHeader = Styled.div`
   user-select: none;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 2em 2.5em;
   max-width: 1200px;

   @media screen and (max-width: 768px) {
      padding: 2em 1.5em;
   }
`
const TitleContainer = Styled.div`
`
const Title = Styled.h1`
   font-size: 2em;
   color: #6556DF;
   font-weight: bold;
`
const SubTitle = Styled.h2`
   font-size: 1.5em;
   margin-top: .2em;
   font-weight: 400;
   color: #686868;
`
const SectionButtonHeader = Styled.div`
   @media screen and (max-width: 1200px) {
      display: none;
   }
`

const SectionContent = Styled.div`
`

const SectionFooter = Styled.div`
   max-width: 1200px;

   @media screen and (max-width: 768px) {
      padding: 2em 1.5em;
   }
`

const SectionButtonFooter = Styled.div`
   display: none;

   @media screen and (max-width: 1200px) {
      display: flex;
      justify-content: center;
      padding: 1.5em;
   }
`

const SectionTemplate = ({ title, subTitle, children, button }) => {

   return (
      <Section>
         <SectionHeader>
            { (title || subTitle) &&
               <TitleContainer>
                  { title &&
                     <Title>{ title }</Title>
                  }
                  { subTitle &&
                     <SubTitle>{ subTitle }</SubTitle>
                  }
               </TitleContainer>
            }
            { button &&
               <SectionButtonHeader>
                  <SectionButton settings={ button } />
               </SectionButtonHeader>
            }
         </SectionHeader>

         <SectionContent>
            { children }
         </SectionContent>
         <SectionFooter>
            { button &&
               <SectionButtonFooter>
                  <SectionButton settings={ button } />
               </SectionButtonFooter>
            }
         </SectionFooter>
      </Section>
   )
}

export default SectionTemplate
