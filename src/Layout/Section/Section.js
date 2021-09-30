import React from 'react'
import Styled from 'styled-components'

import SectionButton from './SectionButton'

const Section = Styled.section`
   width: 100%;
   padding-top: 2em;

   @media screen and (max-width: 900px) {
      font-size: 0.9rem;
      padding-top: 1em;
   }

   @media screen and (max-width: 768px) {
      font-size: 0.8rem;
   }

   @media screen and (max-width: 350px) {
      font-size: 0.7rem;
   }
` 
const SectionHeader = Styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 2.5em;
   padding-bottom: 1em;
   max-width: 1200px;

   @media screen and (max-width: 768px) {
      padding: 2em 2em;
   }
`
const TitleContainer = Styled.div`
`
const Title = Styled.h1`
   font-size: 2em;
   color: ${ props => props.theme.colors.primary };
   font-weight: bold;
`
const SubTitle = Styled.h2`
   font-size: 1.5em;
   margin-top: .2em;
   font-weight: 500;
   color: ${ props => props.theme.colors.primary };
   opacity: .75;
`
const SectionButtonHeader = Styled.a`
   @media screen and (max-width: 1200px) {
      display: none;
   }
`

const SectionContent = Styled.div`
`

const SectionFooter = Styled.div`
   max-width: 1200px;

   @media screen and (max-width: 768px) {
      padding: 2em 2em;
   }
`

const SectionButtonFooter = Styled.a`
   display: none;

   @media screen and (max-width: 1200px) {
      display: flex;
      justify-content: center;
      padding: 1.8em;
   }
`

const SectionTemplate = ({ title, subTitle, children, button }) => {

   return (
      <Section>
         { ( title || subTitle || button ) &&
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
         </SectionHeader> }

         <SectionContent>
            { children }
         </SectionContent>
         { button &&
            <SectionFooter>
                  <SectionButtonFooter>
                     <SectionButton settings={ button } />
                  </SectionButtonFooter>
            </SectionFooter>
         }
      </Section>
   )
}

export default SectionTemplate
