import React from 'react'
import Styled from 'styled-components'

import { FaChevronLeft } from 'react-icons/fa'
import Text from './Text'

const Page = Styled.div`
   width: 100%;

   @media screen and (max-width: 900px) {
      font-size: 0.9rem;
   }

   @media screen and (max-width: 768px) {
      font-size: 0.8rem;
   }

   @media screen and (max-width: 350px) {
      font-size: 0.7rem;
   }
` 

const PageHeader = Styled.div`
   display: flex;
   // align-items: center;
   padding: 2em 2.5em;
   
   @media screen and (max-width: 768px) {
      padding: 2em 1.5em;
   }
`

const ReturnButton = Styled.a`
   margin-right: 1.3em;
   flex-shrink: 0;
   width: 2.3em;
   height: 2.3em;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;

   background-color: #6556DF;
   color: white;

   svg {
      transition: .3s ease-in-out;
      height: 1.2em;
   }

   &:hover {
      cursor: pointer;

      svg {
         transform: translateX(-3px);
      }
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

const PageDescription = Styled.div`
   padding: 0 2.5em;
   padding-bottom: 3em;
   max-width: 1200px;
   margin-top: -1em;
      
   @media screen and (max-width: 768px) {
      padding: 0 1.5em;
   }
`

const PageContent = Styled.div`
`

const PageTemplate = ({ title, subTitle, children, returnTo, description }) => {

   return (
      <Page>
         <PageHeader>
            { returnTo &&
            <ReturnButton>
               <FaChevronLeft />
            </ReturnButton>
            }
            
            <TitleContainer>
               { title &&
                  <Title>{ title }</Title>
               }
               { subTitle &&
                  <SubTitle>{ subTitle }</SubTitle>
               }
            </TitleContainer>
         </PageHeader>
         { description &&
            <PageDescription>
               <Text>
               { description }
               </Text>
            </PageDescription>
         }

         <PageContent>
            { children }
         </PageContent>
      </Page>
   )
}

export default PageTemplate
